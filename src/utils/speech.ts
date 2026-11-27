export const SPEECH_RATE_OPTIONS = [0.25, 0.5, 0.75, 1, 1.25, 1.5] as const;
export const DEFAULT_SPEECH_RATE = 1;
export const DEFAULT_SPEECH_ACCENT: 'en-US' | 'en-GB' = 'en-US';

export interface SpeakOptions {
  rate?: number;
  accent?: 'en-GB' | 'en-US';
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (message: string) => void;
}

type AccentCode = 'en-GB' | 'en-US';

interface ExtendedAudioElement extends HTMLAudioElement {
  webkitPreservesPitch?: boolean;
}

const NOVELTY_VOICE_NAMES = new Set([
  'albert',
  'bad news',
  'bahh',
  'bells',
  'boing',
  'bubbles',
  'cellos',
  'deranged',
  'good news',
  'hysterical',
  'jester',
  'organ',
  'superstar',
  'trinoids',
  'whisper',
  'wobble',
  'zarvox',
  'ralph',
  'fred',
  'junior',
  'kathy',
  'eddy',
  'flo',
  'grandma',
  'grandpa',
  'reed',
  'rocko',
  'sandy',
  'shelley',
]);

const PREFERRED_US_VOICE_HINTS = [
  'google us english',
  'samantha',
  'ava',
  'allison',
  'alex',
  'aaron',
  'nicky',
  'microsoft aria',
  'microsoft jenny',
  'microsoft guy',
  'microsoft zira',
  'microsoft david',
];

const PREFERRED_UK_VOICE_HINTS = [
  'google uk english',
  'daniel',
  'serena',
  'martha',
  'arthur',
  'microsoft sonia',
  'microsoft ryan',
  'microsoft libby',
  'microsoft hazel',
  'microsoft george',
];

const AUDIO_UNAVAILABLE_MESSAGE =
  'تعذر تشغيل الصوت على هذا الجهاز. تأكد من رفع الصوت وإلغاء الوضع الصامت، أو افتح المنصة في متصفح Chrome أو Safari.';

let cachedVoices: SpeechSynthesisVoice[] = [];
let voiceListenerBound = false;
let sharedAudioEl: ExtendedAudioElement | null = null;

let activeSessionId = 0;
const activeUtterances = new Set<SpeechSynthesisUtterance>();
let watchdogTimer: ReturnType<typeof setTimeout> | null = null;
let audioTimeoutTimer: ReturnType<typeof setTimeout> | null = null;
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;

function clearTimers(): void {
  if (watchdogTimer !== null) {
    clearTimeout(watchdogTimer);
    watchdogTimer = null;
  }
  if (audioTimeoutTimer !== null) {
    clearTimeout(audioTimeoutTimer);
    audioTimeoutTimer = null;
  }
  if (keepAliveTimer !== null) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

function getSharedAudio(): ExtendedAudioElement | null {
  if (typeof window === 'undefined' || typeof Audio === 'undefined') {
    return null;
  }
  if (!sharedAudioEl) {
    sharedAudioEl = new Audio() as ExtendedAudioElement;
    sharedAudioEl.preload = 'auto';
    sharedAudioEl.setAttribute('playsinline', 'true');
    sharedAudioEl.setAttribute('webkit-playsinline', 'true');
  }
  return sharedAudioEl;
}

function isMobileDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/Android|iPhone|iPad|iPod|Mobile|CriOS|FxiOS|Opera Mini|IEMobile/i.test(ua)) {
    return true;
  }
  // iPadOS 13+ reports Macintosh in UA with maxTouchPoints > 1
  if (navigator.platform === 'MacIntel' && (navigator.maxTouchPoints ?? 0) > 1) {
    return true;
  }
  return false;
}

function refreshVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSynthesisSupported()) {
    return [];
  }
  try {
    const list = window.speechSynthesis.getVoices();
    if (list.length > 0) {
      cachedVoices = list;
    }
  } catch {
    /* ignore */
  }
  return cachedVoices;
}

function ensureVoiceListener(): void {
  if (voiceListenerBound || typeof window === 'undefined') return;
  voiceListenerBound = true;

  refreshVoices();
  if (isSpeechSynthesisSupported()) {
    const synth = window.speechSynthesis;
    if (typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', refreshVoices);
    } else {
      synth.onvoiceschanged = refreshVoices;
    }
  }
}

if (typeof window !== 'undefined') {
  ensureVoiceListener();
}

export function isSpeechSynthesisSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'speechSynthesis' in window &&
    typeof SpeechSynthesisUtterance !== 'undefined'
  );
}

export function splitIntoSpeechChunks(text: string, rate: number = DEFAULT_SPEECH_RATE): string[] {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized) return [];

  const maxLen = rate < 0.75 ? 100 : 150;
  if (normalized.length <= maxLen) return [normalized];

  // iOS-safe sentence split without regex lookbehind
  const sentences = normalized.match(/[^.!?]+[.!?]*/g) ?? [normalized];
  const chunks: string[] = [];

  const pushClause = (clause: string) => {
    const trimmed = clause.trim();
    if (!trimmed) return;
    if (trimmed.length <= maxLen) {
      if (chunks.length > 0 && chunks[chunks.length - 1].length + 1 + trimmed.length <= maxLen) {
        chunks[chunks.length - 1] = `${chunks[chunks.length - 1]} ${trimmed}`;
      } else {
        chunks.push(trimmed);
      }
      return;
    }

    const words = trimmed.split(' ');
    let current = '';
    for (const word of words) {
      if (word.length > maxLen) {
        if (current) {
          chunks.push(current);
          current = '';
        }
        for (let i = 0; i < word.length; i += maxLen) {
          chunks.push(word.slice(i, i + maxLen));
        }
        continue;
      }
      const next = current ? `${current} ${word}` : word;
      if (next.length <= maxLen) {
        current = next;
      } else {
        if (current) chunks.push(current);
        current = word;
      }
    }
    if (current) chunks.push(current);
  };

  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (!trimmedSentence) continue;
    if (trimmedSentence.length <= maxLen) {
      pushClause(trimmedSentence);
    } else {
      const clauses = trimmedSentence.match(/[^,;:]+[,;:]*/g) ?? [trimmedSentence];
      for (const clause of clauses) {
        pushClause(clause);
      }
    }
  }

  return chunks;
}

function isNoveltyVoice(voiceName: string): boolean {
  const lower = voiceName.toLowerCase();
  for (const novelty of NOVELTY_VOICE_NAMES) {
    if (lower === novelty || lower.includes(novelty)) {
      return true;
    }
  }
  return false;
}

function scoreVoice(voice: SpeechSynthesisVoice, accent: AccentCode): number {
  const lang = voice.lang.toLowerCase().replace('_', '-');
  if (!lang.startsWith('en')) return -1;

  const name = voice.name.toLowerCase();
  if (isNoveltyVoice(name)) return -1;

  let score = 10;
  const isUS = accent === 'en-US';
  const exactTargets = isUS ? ['en-us', 'eng-usa'] : ['en-gb', 'eng-gbr'];
  const hints = isUS ? PREFERRED_US_VOICE_HINTS : PREFERRED_UK_VOICE_HINTS;

  if (exactTargets.some((t) => lang === t || lang.startsWith(`${t}-`))) {
    score += 100;
  } else if (lang.startsWith(accent.toLowerCase())) {
    score += 80;
  }

  if (hints.some((hint) => name.includes(hint))) {
    score += 40;
  }
  if (voice.localService) {
    score += 15;
  }
  if (voice.default && exactTargets.some((t) => lang.startsWith(t))) {
    score += 5;
  }

  return score;
}

function pickBestVoice(accent: AccentCode): SpeechSynthesisVoice | undefined {
  const liveVoices = refreshVoices();
  const list = liveVoices.length > 0 ? liveVoices : cachedVoices;
  if (!list.length) return undefined;

  let bestVoice: SpeechSynthesisVoice | undefined;
  let bestScore = -1;

  for (const voice of list) {
    const score = scoreVoice(voice, accent);
    if (score > bestScore) {
      bestScore = score;
      bestVoice = voice;
    }
  }

  return bestVoice;
}

export function stopSpeech(): void {
  activeSessionId += 1;
  clearTimers();
  activeUtterances.clear();

  // Keep sharedAudioEl unlocked on iOS Safari: only clear handlers and pause(), never remove src or call load().
  if (sharedAudioEl) {
    try {
      sharedAudioEl.onloadedmetadata = null;
      sharedAudioEl.onplaying = null;
      sharedAudioEl.onended = null;
      sharedAudioEl.onerror = null;
      sharedAudioEl.pause();
    } catch {
      /* ignore */
    }
  }

  if (isSpeechSynthesisSupported()) {
    try {
      const synth = window.speechSynthesis;
      if (synth.speaking || synth.pending || synth.paused) {
        synth.cancel();
      }
    } catch {
      /* ignore */
    }
  }
}

function buildTtsUrls(chunk: string, accent: AccentCode): string[] {
  const tl = encodeURIComponent(accent);
  const q = encodeURIComponent(chunk);
  return [
    `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=${tl}&q=${q}`,
    `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${tl}&q=${q}`,
  ];
}

export function speakEnglish(text: string, opts: SpeakOptions = {}): void {
  ensureVoiceListener();
  stopSpeech();

  const accent: AccentCode = opts.accent ?? DEFAULT_SPEECH_ACCENT;
  const clampedRate = Math.min(1.5, Math.max(0.25, opts.rate ?? DEFAULT_SPEECH_RATE));
  const chunks = splitIntoSpeechChunks(text, clampedRate);

  if (chunks.length === 0) {
    opts.onEnd?.();
    return;
  }

  const sessionId = activeSessionId;
  let startedOnce = false;
  let endedOnce = false;

  const notifyStart = () => {
    if (sessionId !== activeSessionId || startedOnce) return;
    startedOnce = true;
    opts.onStart?.();
  };

  const notifyEnd = () => {
    if (endedOnce) return;
    endedOnce = true;
    clearTimers();
    activeUtterances.clear();
    opts.onEnd?.();
  };

  const notifyFailure = () => {
    if (sessionId !== activeSessionId) return;
    clearTimers();
    opts.onError?.(AUDIO_UNAVAILABLE_MESSAGE);
    notifyEnd();
  };

  const playViaHtmlAudio = (startIndex: number, onExhaustedFallback: (failedChunkIdx: number) => void) => {
    if (sessionId !== activeSessionId) return;

    clearTimers();
    activeUtterances.clear();
    const audio = getSharedAudio();
    if (!audio) {
      onExhaustedFallback(startIndex);
      return;
    }

    const applyPlaybackRate = () => {
      try {
        audio.defaultPlaybackRate = clampedRate;
        audio.playbackRate = clampedRate;
        audio.preservesPitch = true;
        audio.webkitPreservesPitch = true;
      } catch {
        /* ignore */
      }
    };

    const playChunk = (chunkIdx: number, urlIdx: number) => {
      if (sessionId !== activeSessionId) return;
      if (chunkIdx >= chunks.length) {
        notifyEnd();
        return;
      }

      const urls = buildTtsUrls(chunks[chunkIdx], accent);
      if (urlIdx >= urls.length) {
        onExhaustedFallback(chunkIdx);
        return;
      }

      let settled = false;
      const clearAudioTimeout = () => {
        if (audioTimeoutTimer !== null) {
          clearTimeout(audioTimeoutTimer);
          audioTimeoutTimer = null;
        }
      };

      const tryNextSourceOrFallback = () => {
        if (settled || sessionId !== activeSessionId) return;
        settled = true;
        clearAudioTimeout();
        if (urlIdx + 1 < urls.length) {
          playChunk(chunkIdx, urlIdx + 1);
        } else {
          onExhaustedFallback(chunkIdx);
        }
      };

      audio.onloadedmetadata = () => {
        if (sessionId !== activeSessionId) return;
        applyPlaybackRate();
      };

      audio.onplaying = () => {
        clearAudioTimeout();
        if (sessionId !== activeSessionId) return;
        applyPlaybackRate();
        notifyStart();
      };

      audio.onended = () => {
        clearAudioTimeout();
        if (settled || sessionId !== activeSessionId) return;
        settled = true;
        playChunk(chunkIdx + 1, 0);
      };

      audio.onerror = () => {
        tryNextSourceOrFallback();
      };

      clearAudioTimeout();
      audioTimeoutTimer = setTimeout(() => {
        if (!settled && sessionId === activeSessionId) {
          try {
            audio.pause();
          } catch {
            /* ignore */
          }
          tryNextSourceOrFallback();
        }
      }, 4500);

      try {
        audio.volume = 1;
        applyPlaybackRate();
        audio.src = urls[urlIdx];
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.then === 'function') {
          playPromise
            .then(() => {
              if (sessionId === activeSessionId) {
                applyPlaybackRate();
                notifyStart();
              }
            })
            .catch(() => {
              tryNextSourceOrFallback();
            });
        }
      } catch {
        tryNextSourceOrFallback();
      }
    };

    playChunk(startIndex, 0);
  };

  const playViaWebSpeech = (startIndex: number, allowHtmlFallback: boolean) => {
    if (sessionId !== activeSessionId) return;
    if (!isSpeechSynthesisSupported()) {
      if (allowHtmlFallback) {
        playViaHtmlAudio(startIndex, notifyFailure);
      } else {
        notifyFailure();
      }
      return;
    }

    const synth = window.speechSynthesis;
    let switchedAway = false;

    const handleSpeechFailure = (chunkIdx: number) => {
      if (switchedAway || sessionId !== activeSessionId) return;
      switchedAway = true;
      clearTimers();
      try {
        if (synth.speaking || synth.pending || synth.paused) {
          synth.cancel();
        }
      } catch {
        /* ignore */
      }
      if (allowHtmlFallback) {
        playViaHtmlAudio(chunkIdx, notifyFailure);
      } else {
        notifyFailure();
      }
    };

    const speakChunk = (chunkIdx: number, retriedOnce = false) => {
      if (switchedAway || sessionId !== activeSessionId) return;
      if (chunkIdx >= chunks.length) {
        notifyEnd();
        return;
      }

      clearTimers();

      try {
        if (synth.paused) {
          synth.resume();
        }
      } catch {
        /* ignore */
      }

      const utterance = new SpeechSynthesisUtterance(chunks[chunkIdx]);
      utterance.lang = accent;
      utterance.rate = clampedRate;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const voice = pickBestVoice(accent);
      if (voice) {
        utterance.voice = voice;
      }

      let chunkStarted = false;
      activeUtterances.add(utterance);

      keepAliveTimer = setInterval(() => {
        if (sessionId !== activeSessionId || switchedAway) {
          clearTimers();
          return;
        }
        try {
          if (synth.paused) {
            synth.resume();
          }
        } catch {
          /* ignore */
        }
      }, 4000);

      const scheduleWatchdog = (delayMs: number, allowRetry: boolean) => {
        if (watchdogTimer !== null) clearTimeout(watchdogTimer);
        watchdogTimer = setTimeout(() => {
          if (sessionId !== activeSessionId || switchedAway || chunkStarted) return;

          if (allowRetry && !synth.speaking && !synth.pending) {
            try {
              synth.resume();
              synth.speak(utterance);
              scheduleWatchdog(2000, false);
              return;
            } catch {
              /* fall through */
            }
          }

          if (!chunkStarted && !synth.speaking && !synth.pending) {
            handleSpeechFailure(chunkIdx);
          }
        }, delayMs);
      };

      utterance.onstart = () => {
        chunkStarted = true;
        if (watchdogTimer !== null) {
          clearTimeout(watchdogTimer);
          watchdogTimer = null;
        }
        if (sessionId !== activeSessionId || switchedAway) return;
        notifyStart();
      };

      utterance.onend = () => {
        activeUtterances.delete(utterance);
        clearTimers();
        if (sessionId !== activeSessionId || switchedAway) return;
        speakChunk(chunkIdx + 1, false);
      };

      utterance.onerror = (event) => {
        activeUtterances.delete(utterance);
        clearTimers();
        if (sessionId !== activeSessionId || switchedAway) return;
        const errCode = event?.error;
        if (errCode === 'canceled' || errCode === 'interrupted') {
          return;
        }
        handleSpeechFailure(chunkIdx);
      };

      scheduleWatchdog(2000, !retriedOnce);

      try {
        synth.speak(utterance);
      } catch {
        handleSpeechFailure(chunkIdx);
      }
    };

    speakChunk(startIndex, false);
  };

  const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine !== false;

  if (isMobileDevice() && isOnline) {
    // Primary on mobile: synchronous HTML5 <audio> inside the user tap bypasses iOS Silent Switch & broken WebViews.
    playViaHtmlAudio(0, (failedIdx) => {
      if (isSpeechSynthesisSupported()) {
        playViaWebSpeech(failedIdx, false);
      } else {
        notifyFailure();
      }
    });
    return;
  }

  if (isSpeechSynthesisSupported()) {
    playViaWebSpeech(0, isOnline);
    return;
  }

  playViaHtmlAudio(0, notifyFailure);
}

export function normalizeEnglish(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function computeWordSimilarity(spoken: string, target: string): number {
  const a = normalizeEnglish(spoken);
  const b = normalizeEnglish(target);
  if (!a || !b) return 0;
  if (a === b) return 100;

  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  const dist = dp[m][n];
  const maxLen = Math.max(m, n);
  return Math.max(0, Math.round(((maxLen - dist) / maxLen) * 100));
}
