export const SPEECH_RATE_OPTIONS = [0.25, 0.5, 0.75, 1, 1.25, 1.5] as const;
export const DEFAULT_SPEECH_RATE = 1;
export const DEFAULT_SPEECH_ACCENT: 'en-US' | 'en-GB' = 'en-US';

export interface SpeakOptions {
  rate?: number;
  accent?: 'en-GB' | 'en-US';
  onStart?: () => void;
  onEnd?: () => void;
}

export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function stopSpeech(): void {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
  }
}

export function speakEnglish(text: string, opts: SpeakOptions = {}): void {
  if (!isSpeechSynthesisSupported() || !text.trim()) {
    opts.onEnd?.();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const accent = opts.accent ?? DEFAULT_SPEECH_ACCENT;
  const clampedRate = Math.min(1.5, Math.max(0.25, opts.rate ?? DEFAULT_SPEECH_RATE));
  utterance.lang = accent;
  utterance.rate = clampedRate;
  utterance.pitch = 1.0;

  const targetLang = accent.toLowerCase();
  const voices = window.speechSynthesis.getVoices();
  const preferred =
    voices.find((v) => v.lang.toLowerCase().replace('_', '-') === targetLang) ??
    voices.find((v) => v.lang.toLowerCase().replace('_', '-').startsWith(targetLang)) ??
    voices.find((v) => v.lang.toLowerCase().startsWith('en'));
  if (preferred) {
    utterance.voice = preferred;
  }

  utterance.onstart = () => opts.onStart?.();
  utterance.onend = () => opts.onEnd?.();
  utterance.onerror = () => opts.onEnd?.();

  window.speechSynthesis.speak(utterance);
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
