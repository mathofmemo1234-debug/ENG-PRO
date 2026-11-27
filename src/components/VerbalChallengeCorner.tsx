import React, { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  MessageSquare,
  Mic,
  MicOff,
  Sparkles,
  Timer,
  Volume2,
  Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EGYPT_PREP3_TERM1_UNITS } from '../data/units';
import { computeWordSimilarity, speakEnglish } from '../utils/speech';

interface SpeechRecResultEvent {
  results: { [key: number]: { [key: number]: { transcript: string } } };
}

interface SimpleSpeechRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((ev: SpeechRecResultEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

const DIALOG_PROMPTS = [
  {
    unit: 'Unit 1: Personal Identity',
    questionEn: 'Who are you really inside?',
    questionAr: 'من أنت حقاً في داخلك؟',
    suggestedEn: 'I am a kind, honest, and confident person.',
    suggestedAr: 'أنا شخص لطيف وصادق وواثق من نفسي.',
  },
  {
    unit: 'Unit 2: Communication',
    questionEn: 'How can you stay connected with others?',
    questionAr: 'كيف يمكنك أن تبقى على تواصل مع الآخرين؟',
    suggestedEn: 'Through kind words, active listening, and thoughtful messages.',
    suggestedAr: 'من خلال الكلمات اللطيفة والاستماع النشط والرسائل المعبرة.',
  },
  {
    unit: 'Unit 3: Artificial Intelligence',
    questionEn: 'Do you think robots can do all human work? Why?',
    questionAr: 'هل تعتقد أن الروبوتات يمكنها القيام بكل أعمال البشر؟ ولماذا؟',
    suggestedEn: 'No, robots cannot do all human work because they do not have emotions.',
    suggestedAr: 'لا، لا يمكن للروبوتات فعل كل أعمال البشر لأنها لا تمتلك مشاعر.',
  },
  {
    unit: 'Unit 4: Screen Time',
    questionEn: 'What are some healthy activities to balance screen use?',
    questionAr: 'ما بعض الأنشطة الصحية لموازنة استخدام الشاشات؟',
    suggestedEn: 'You can play outside, read a book, or draw.',
    suggestedAr: 'يمكنك اللعب بالخارج أو قراءة كتاب أو الرسم.',
  },
  {
    unit: 'Unit 5: Design Thinking',
    questionEn: 'What does design thinking mean?',
    questionAr: 'ماذا يعني التفكير التصميمي؟',
    suggestedEn: 'It means caring about people and imagining better solutions.',
    suggestedAr: 'يعني الاهتمام بالناس وتخيل حلول أفضل.',
  },
  {
    unit: 'Unit 6: Stories',
    questionEn: 'Why is reading stories important?',
    questionAr: 'لماذا تعد قراءة القصص مهمة؟',
    suggestedEn: 'Because it helps us grow emotionally and sparks our imagination.',
    suggestedAr: 'لأنها تساعدنا على النمو عاطفياً وتثير خيالنا.',
  },
];

export const VerbalChallengeCorner: React.FC = () => {
  const { recordVerbalScore, speechAccent, speechRate } = useApp();
  const [mode, setMode] = useState<'pronunciation' | 'sprint' | 'dialog'>('pronunciation');

  const phrases = useMemo(
    () =>
      EGYPT_PREP3_TERM1_UNITS.flatMap((u) =>
        u.lessons[0].vocab.slice(0, 3).map((v) => ({
          word: v.word,
          arabic: v.arabic,
          sentence: v.exampleEn,
          sentenceAr: v.exampleAr,
          unitNum: u.number,
        }))
      ),
    []
  );

  // Mode 1: Pronunciation
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [listening, setListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');
  const [similarity, setSimilarity] = useState<number | null>(null);
  const [micUnsupported, setMicUnsupported] = useState(false);

  const currentPhrase = phrases[phraseIdx % phrases.length];

  const handleListenMic = () => {
    const win = window as unknown as {
      SpeechRecognition?: new () => SimpleSpeechRecognition;
      webkitSpeechRecognition?: new () => SimpleSpeechRecognition;
    };
    const SR = win.SpeechRecognition || win.webkitSpeechRecognition;
    if (!SR) {
      setMicUnsupported(true);
      return;
    }
    const rec = new SR();
    rec.lang = speechAccent;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    setListening(true);
    rec.onresult = (ev) => {
      const transcript = ev.results?.[0]?.[0]?.transcript ?? '';
      setSpokenText(transcript);
      const score = computeWordSimilarity(transcript, currentPhrase.sentence);
      setSimilarity(score);
      recordVerbalScore(score);
      setListening(false);
    };
    rec.onerror = () => {
      setListening(false);
      setMicUnsupported(true);
    };
    rec.onend = () => setListening(false);
    rec.start();
  };

  const handleCheckTyped = () => {
    if (!spokenText.trim()) return;
    const score = computeWordSimilarity(spokenText, currentPhrase.sentence);
    setSimilarity(score);
    recordVerbalScore(score);
  };

  // Mode 2: 60s Audio Recall Sprint
  const [sprintActive, setSprintActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [sprintScore, setSprintScore] = useState(0);
  const [sprintIdx, setSprintIdx] = useState(0);

  useEffect(() => {
    if (!sprintActive) return;
    if (timeLeft <= 0) {
      setSprintActive(false);
      recordVerbalScore(Math.min(100, sprintScore * 15));
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [sprintActive, timeLeft, sprintScore, recordVerbalScore]);

  const sprintTarget = phrases[sprintIdx % phrases.length];
  const sprintOptions = useMemo(() => {
    const others = phrases
      .filter((p) => p.word !== sprintTarget.word)
      .slice(0, 3);
    const list = [sprintTarget, ...others];
    // Deterministic rotate based on sprintIdx so it doesn't stay first
    const shift = sprintIdx % list.length;
    return [...list.slice(shift), ...list.slice(0, shift)];
  }, [phrases, sprintTarget, sprintIdx]);

  // Mode 3: Dialog Simulator
  const [dialogIdx, setDialogIdx] = useState(0);
  const [dialogReply, setDialogReply] = useState('');
  const [dialogFeedback, setDialogFeedback] = useState<number | null>(null);
  const activeDialog = DIALOG_PROMPTS[dialogIdx % DIALOG_PROMPTS.length];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full">
            <Mic className="w-4 h-4" />
            ركن التحدي اللفظي والطلاقة
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">تحدَّ نطقك وسرعة استرجاعك ومحادثات المنهج</h1>
          <p className="text-sm text-white/90">
            استمع للنطق الصحيح، سجل صوتك (أو اكتب الجملة للمقارنة الفورية)، ودرّب نفسك على سؤال
            المحادثة في الامتحان.
          </p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-white p-2 rounded-2xl border border-[var(--border-soft)]">
        {[
          { id: 'pronunciation' as const, label: 'تحدي النطق المباشر', icon: Mic },
          { id: 'sprint' as const, label: 'سباق الاستماع السريع (60ث)', icon: Zap },
          { id: 'dialog' as const, label: 'محاكي محادثات المنهج', icon: MessageSquare },
        ].map((m) => {
          const Icon = m.icon;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer ${
                mode === m.id
                  ? 'bg-[var(--brand-primary)] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{m.label}</span>
            </button>
          );
        })}
      </div>

      {/* MODE 1: Pronunciation */}
      {mode === 'pronunciation' && (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]">
              Unit {currentPhrase.unitNum} • كلمة مستهدفة: {currentPhrase.word} ({currentPhrase.arabic})
            </span>
            <button
              type="button"
              onClick={() => {
                setPhraseIdx((i) => i + 1);
                setSpokenText('');
                setSimilarity(null);
              }}
              className="text-xs font-bold text-[var(--brand-primary-dark)] hover:underline cursor-pointer"
            >
              جملة أخرى ←
            </button>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2 text-center">
            <div dir="ltr" className="font-en text-lg sm:text-xl font-extrabold text-slate-900">
              {currentPhrase.sentence}
            </div>
            <div className="text-xs sm:text-sm text-slate-600">{currentPhrase.sentenceAr}</div>
            <button
              type="button"
              onClick={() =>
                speakEnglish(currentPhrase.sentence, { accent: speechAccent, rate: speechRate })
              }
              className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-slate-800 hover:border-[var(--brand-primary)] cursor-pointer"
            >
              <Volume2 className="w-4 h-4 text-[var(--brand-primary)]" />
              استمع للنطق النموذجي أولاً
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <button
              type="button"
              onClick={handleListenMic}
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl font-extrabold text-sm text-white transition cursor-pointer ${
                listening ? 'bg-rose-600 animate-pulse' : 'bg-[var(--brand-primary)]'
              }`}
            >
              {listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {listening ? 'جارٍ الاستماع لصوتك...' : 'ابدأ التحدث بالميكروفون'}
            </button>

            <div className="flex-1 flex gap-2">
              <input
                type="text"
                dir="ltr"
                value={spokenText}
                onChange={(e) => setSpokenText(e.target.value)}
                placeholder="أو اكتب ما سمعته هنا للمقارنة الدقيقة..."
                className="flex-1 font-en px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-left focus:outline-none focus:border-[var(--brand-primary)]"
              />
              <button
                type="button"
                onClick={handleCheckTyped}
                className="px-4 py-2.5 rounded-2xl bg-slate-900 text-white text-xs font-extrabold cursor-pointer"
              >
                تحقق
              </button>
            </div>
          </div>

          {micUnsupported && (
            <div className="text-xs bg-amber-50 border border-amber-200 text-amber-900 rounded-xl px-3 py-2">
              ملاحظة: متصفحك الحالي أو إعدادات الخصوصية لا تدعم الميكروفون مباشرة؛ يمكنك استخدام
              الاستماع الصوتي مع الكتابة الفورية في المربع أعلاه لتقييم إتقانك بنفس الدقة!
            </div>
          )}

          {similarity !== null && (
            <div className="rounded-2xl p-4 bg-emerald-50 border border-emerald-200 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-black text-emerald-950">
                  نسبة التطابق: {similarity}%
                </div>
                <div className="text-xs text-emerald-800">
                  {similarity >= 80
                    ? 'نطق وتطابق ممتاز! استمر على هذا المستوى.'
                    : 'محاولة جيدة! استمع للنطق مجدداً وحاول محاكاة الإيقاع.'}
                </div>
              </div>
              <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
            </div>
          )}
        </div>
      )}

      {/* MODE 2: 60s Sprint */}
      {mode === 'sprint' && (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 shadow-xs space-y-5 text-center">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
              <Timer className="w-4 h-4" /> الوقت المتبقي: {timeLeft} ثانية
            </span>
            <span className="text-sm font-extrabold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
              النقاط: {sprintScore}
            </span>
          </div>

          {!sprintActive ? (
            <div className="py-6 space-y-4">
              <h2 className="text-xl font-black text-slate-900">
                سباق الاسترجاع السمعي في 60 ثانية
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                اضغط ابدأ، استمع للكلمة الإنجليزية المنطوقة، ثم اختر معناها العربي الصحيح بأقصى
                سرعة!
              </p>
              <button
                type="button"
                onClick={() => {
                  setSprintScore(0);
                  setTimeLeft(60);
                  setSprintActive(true);
                  speakEnglish(phrases[0].word, { accent: speechAccent, rate: speechRate });
                }}
                className="px-8 py-3 rounded-2xl bg-[var(--brand-primary)] text-white font-extrabold text-sm shadow cursor-pointer"
              >
                ابدأ السباق الآن ⚡
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              <button
                type="button"
                onClick={() =>
                  speakEnglish(sprintTarget.word, { accent: speechAccent, rate: speechRate })
                }
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 font-extrabold text-sm cursor-pointer"
              >
                <Volume2 className="w-5 h-5" />
                أعد سماع الكلمة (<span dir="ltr" className="font-en">{sprintTarget.word}</span>)
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sprintOptions.map((opt) => (
                  <button
                    key={opt.word}
                    type="button"
                    onClick={() => {
                      if (opt.word === sprintTarget.word) {
                        setSprintScore((s) => s + 1);
                      }
                      const next = sprintIdx + 1;
                      setSprintIdx(next);
                      speakEnglish(phrases[next % phrases.length].word, {
                        accent: speechAccent,
                        rate: speechRate,
                      });
                    }}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-[var(--brand-primary-soft)] border border-slate-200 font-extrabold text-sm text-slate-800 cursor-pointer"
                  >
                    {opt.arabic}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: Dialog Simulator */}
      {mode === 'dialog' && (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">
              {activeDialog.unit}
            </span>
            <button
              type="button"
              onClick={() => {
                setDialogIdx((i) => i + 1);
                setDialogReply('');
                setDialogFeedback(null);
              }}
              className="text-xs font-bold text-[var(--brand-primary-dark)] hover:underline cursor-pointer"
            >
              محادثة الوحدة التالية ←
            </button>
          </div>

          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div dir="ltr" className="font-en text-base font-extrabold text-slate-900 text-left">
                Interviewer: {activeDialog.questionEn}
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(activeDialog.questionEn, { accent: speechAccent, rate: speechRate })
                }
                className="p-2 rounded-full bg-white border border-slate-200 text-slate-700 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-slate-500">{activeDialog.questionAr}</div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-600 block">
              أجب باللغة الإنجليزية كما في سؤال المحادثة بالامتحان:
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                dir="ltr"
                value={dialogReply}
                onChange={(e) => setDialogReply(e.target.value)}
                placeholder="Write your full English answer here..."
                className="flex-1 font-en px-3.5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-left focus:outline-none focus:border-[var(--brand-primary)]"
              />
              <button
                type="button"
                onClick={() => {
                  const score = computeWordSimilarity(dialogReply, activeDialog.suggestedEn);
                  setDialogFeedback(score);
                  recordVerbalScore(Math.max(60, score));
                }}
                className="px-5 py-2.5 rounded-2xl bg-[var(--brand-primary)] text-white text-xs font-extrabold cursor-pointer"
              >
                قارن بالإجابة النموذجية
              </button>
            </div>
          </div>

          {dialogFeedback !== null && (
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 space-y-2">
              <div className="text-xs font-extrabold text-emerald-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                الإجابة النموذجية المقترحة (تطابق الكلمات: {dialogFeedback}%):
              </div>
              <div dir="ltr" className="font-en text-sm font-bold text-slate-900 text-left">
                {activeDialog.suggestedEn}
              </div>
              <div className="text-xs text-slate-600">{activeDialog.suggestedAr}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
