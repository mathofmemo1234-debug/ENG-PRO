const MOBILE_UA =
  'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Range, Content-Type');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range, Content-Length, Accept-Ranges');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const rawText = typeof req.query?.text === 'string' ? req.query.text : '';
  const text = rawText.replace(/\s+/g, ' ').trim().slice(0, 220);
  if (!text) {
    res.status(400).json({ error: 'Missing text parameter' });
    return;
  }

  const lang = req.query?.lang === 'en-GB' ? 'en-GB' : 'en-US';
  const tl = encodeURIComponent(lang);
  const q = encodeURIComponent(text);

  const upstreamUrls = [
    `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=${tl}&q=${q}`,
    `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${tl}&q=${q}`,
  ];

  let audioBuffer = null;

  for (const url of upstreamUrls) {
    try {
      const upstream = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': MOBILE_UA,
        },
        referrerPolicy: 'no-referrer',
      });
      if (!upstream.ok) continue;
      const arr = await upstream.arrayBuffer();
      const buf = Buffer.from(arr);
      if (buf.length > 100) {
        audioBuffer = buf;
        break;
      }
    } catch {
      /* try next upstream */
    }
  }

  if (!audioBuffer) {
    res.status(502).json({ error: 'Upstream TTS unavailable' });
    return;
  }

  const total = audioBuffer.length;
  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader(
    'Cache-Control',
    'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400'
  );

  const rangeHeader = req.headers?.range;
  if (typeof rangeHeader === 'string' && rangeHeader.startsWith('bytes=')) {
    const [rawStart, rawEnd] = rangeHeader.replace('bytes=', '').split('-');
    let start = rawStart ? parseInt(rawStart, 10) : 0;
    let end = rawEnd ? parseInt(rawEnd, 10) : total - 1;

    if (!Number.isFinite(start) || start < 0) start = 0;
    if (!Number.isFinite(end) || end >= total) end = total - 1;

    if (start > end || start >= total) {
      res.setHeader('Content-Range', `bytes */${total}`);
      res.status(416).end();
      return;
    }

    const slice = audioBuffer.subarray(start, end + 1);
    res.setHeader('Content-Range', `bytes ${start}-${end}/${total}`);
    res.setHeader('Content-Length', String(slice.length));
    res.status(206);
    if (req.method === 'HEAD') {
      res.end();
    } else {
      res.end(slice);
    }
    return;
  }

  res.setHeader('Content-Length', String(total));
  res.status(200);
  if (req.method === 'HEAD') {
    res.end();
  } else {
    res.end(audioBuffer);
  }
}
