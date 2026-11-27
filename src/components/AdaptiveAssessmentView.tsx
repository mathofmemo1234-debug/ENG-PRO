import React, { useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Flame,
  RotateCcw,
  Sparkles,
  Target,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EGYPT_PREP3_TERM1_UNITS } from '../data/units';
import { McqQuestion } from '../data/types';
import { TranslatableText } from './TranslatableText';

interface TaggedQuestion extends McqQuestion {
  unitId: string;
  unitNumber: number;
  unitTitleAr: string;
  lessonId: string;
}

export const AdaptiveAssessmentView: React.FC = () => {
  const { recordAdaptiveAnswer, setRoute } = useApp();

  const allPool = useMemo<TaggedQuestion[]>(() => {
    return EGYPT_PREP3_TERM1_UNITS.flatMap((u) =>
      u.lessons.flatMap((l) =>
        l.worksheet.mcq.map((q) => ({
          ...q,
          unitId: u.id,
          unitNumber: u.number,
          unitTitleAr: u.titleAr,
          lessonId: l.id,
        }))
      )
    );
  }, []);

  const [scopeUnit, setScopeUnit] = useState<string>('all');
  const [difficultyLevel, setDifficultyLevel] = useState<1 | 2 | 3>(1);
  const [streak, setStreak] = useState(0);
  const [askedIds, setAskedIds] = useState<string[]>([]);
  const [sessionStats, setSessionStats] = useState<{
    answered: number;
    correct: number;
    byUnit: Record<string, { answered: number; correct: number; titleAr: string }>;
  }>({ answered: 0, correct: 0, byUnit: {} });
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const SESSION_LENGTH = 10;

  const filteredPool = useMemo(
    () => (scopeUnit === 'all' ? allPool : allPool.filter((q) => q.unitId === scopeUnit)),
    [allPool, scopeUnit]
  );

  const currentQuestion = useMemo<TaggedQuestion | undefined>(() => {
    const remaining = filteredPool.filter((q) => !askedIds.includes(q.id));
    if (remaining.length === 0) return filteredPool[0];
    const sameDiff = remaining.filter((q) => q.difficulty === difficultyLevel);
    if (sameDiff.length > 0) return sameDiff[0];
    return remaining[0];
  }, [filteredPool, askedIds, difficultyLevel]);

  const handleChoose = (optIdx: number) => {
    if (selectedOpt !== null || !currentQuestion) return;
    setSelectedOpt(optIdx);
    const isCorrect = optIdx === currentQuestion.correctIndex;
    recordAdaptiveAnswer(currentQuestion.unitId, isCorrect);

    setSessionStats((prev) => {
      const prevU = prev.byUnit[currentQuestion.unitId] ?? {
        answered: 0,
        correct: 0,
        titleAr: currentQuestion.unitTitleAr,
      };
      return {
        answered: prev.answered + 1,
        correct: prev.correct + (isCorrect ? 1 : 0),
        byUnit: {
          ...prev.byUnit,
          [currentQuestion.unitId]: {
            answered: prevU.answered + 1,
            correct: prevU.correct + (isCorrect ? 1 : 0),
            titleAr: currentQuestion.unitTitleAr,
          },
        },
      };
    });

    if (isCorrect) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak >= 2 && difficultyLevel < 3) {
        setDifficultyLevel((d) => (d < 3 ? ((d + 1) as 1 | 2 | 3) : d));
      }
    } else {
      setStreak(0);
      if (difficultyLevel > 1) {
        setDifficultyLevel((d) => (d > 1 ? ((d - 1) as 1 | 2 | 3) : d));
      }
    }
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    const nextAsked = [...askedIds, currentQuestion.id];
    setAskedIds(nextAsked);
    setSelectedOpt(null);
    if (sessionStats.answered >= SESSION_LENGTH) {
      setFinished(true);
    }
  };

  const handleRestart = (newScope?: string) => {
    if (newScope !== undefined) setScopeUnit(newScope);
    setDifficultyLevel(1);
    setStreak(0);
    setAskedIds([]);
    setSessionStats({ answered: 0, correct: 0, byUnit: {} });
    setSelectedOpt(null);
    setFinished(false);
  };

  const diffBadge =
    difficultyLevel === 1
      ? { label: 'المستوى 1: أساسي', cls: 'bg-emerald-100 text-emerald-800' }
      : difficultyLevel === 2
      ? { label: 'المستوى 2: متوسط', cls: 'bg-amber-100 text-amber-800' }
      : { label: 'المستوى 3: متفوقين', cls: 'bg-violet-100 text-violet-800' };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full">
              <Target className="w-4 h-4" />
              نظام التقييم التكيفي الذكي
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">اختبار يتكيف مع مستواك لحظة بلحظة</h1>
            <p className="text-sm text-white/90">
              عندما تجيب إجابتين صحيحتين متتاليتين يرتفع مستوى التحدي تلقائياً، وعند الخطأ يبسط لك
              النظام السؤال مع شرح فوري وتوجيه لنقطة الضعف.
            </p>
          </div>
          <select
            value={scopeUnit}
            onChange={(e) => handleRestart(e.target.value)}
            className="px-3.5 py-2.5 rounded-2xl bg-white text-slate-900 font-extrabold text-xs shadow cursor-pointer"
          >
            <option value="all">تشخيص شامل (الوحدات 1–6)</option>
            {EGYPT_PREP3_TERM1_UNITS.map((u) => (
              <option key={u.id} value={u.id}>
                الوحدة {u.number}: {u.titleAr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Live Status Bar */}
      <div className="bg-white rounded-2xl border border-[var(--border-soft)] p-4 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${diffBadge.cls}`}>
            {diffBadge.label}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
            <Flame className="w-3.5 h-3.5" /> سلسلة إجابات: {streak}
          </span>
        </div>
        <div className="text-xs font-extrabold text-slate-700">
          التقدم: {Math.min(sessionStats.answered + (selectedOpt === null && !finished ? 1 : 0), SESSION_LENGTH)} / {SESSION_LENGTH} • الدرجة: {sessionStats.correct}
        </div>
      </div>

      {/* Finished Screen */}
      {finished ? (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 sm:p-8 shadow-sm space-y-5">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">
              انتهت جلسة التقييم التكيفي! ({sessionStats.correct} / {SESSION_LENGTH})
            </h2>
            <p className="text-sm text-slate-600">
              أعلى مستوى وصلت إليه: <span className="font-extrabold">{diffBadge.label}</span>
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="text-sm font-extrabold text-slate-900">تحليل الأداء حسب الوحدات:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(sessionStats.byUnit).map(([uId, st]) => {
                const pct = Math.round((st.correct / st.answered) * 100);
                return (
                  <div
                    key={uId}
                    className="rounded-2xl border border-slate-200 p-3.5 flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="text-xs font-extrabold text-slate-900">{st.titleAr}</div>
                      <div className="text-[11px] text-slate-500">
                        {st.correct} من {st.answered} ({pct}%)
                      </div>
                    </div>
                    {pct < 70 ? (
                      <button
                        type="button"
                        onClick={() => setRoute({ page: 'unit-summary', unitId: uId })}
                        className="px-3 py-1.5 rounded-xl bg-amber-100 text-amber-900 text-[11px] font-extrabold cursor-pointer"
                      >
                        راجع الوحدة ←
                      </button>
                    ) : (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                        متقن ✓
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => handleRestart()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[var(--brand-primary)] text-white font-extrabold text-sm cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              ابدأ جلسة تقييم جديدة
            </button>
          </div>
        </div>
      ) : (
        currentQuestion && (
          <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>
                الوحدة {currentQuestion.unitNumber}: {currentQuestion.unitTitleAr}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100">
                {currentQuestion.skill === 'vocab'
                  ? 'مفردات'
                  : currentQuestion.skill === 'grammar'
                  ? 'قواعد'
                  : 'فهم'}
              </span>
            </div>

            <TranslatableText
              en={currentQuestion.stemEn}
              ar={currentQuestion.stemAr}
              withAudio
              enClassName="text-base sm:text-lg font-bold"
            />

            <div dir="ltr" className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-en text-left">
              {currentQuestion.options.map((opt, oi) => {
                const chosen = selectedOpt === oi;
                let cls =
                  'bg-slate-50 border-slate-200 hover:border-[var(--brand-primary)] text-slate-800';
                if (selectedOpt !== null) {
                  if (oi === currentQuestion.correctIndex) {
                    cls = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (chosen) {
                    cls = 'bg-rose-50 border-rose-500 text-rose-900';
                  }
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={selectedOpt !== null}
                    onClick={() => handleChoose(oi)}
                    className={`p-3.5 rounded-2xl border text-sm flex items-center justify-between transition cursor-pointer ${cls}`}
                  >
                    <span>
                      <strong>{String.fromCharCode(65 + oi)})</strong> {opt}
                    </span>
                    {selectedOpt !== null && oi === currentQuestion.correctIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {selectedOpt !== null && chosen && oi !== currentQuestion.correctIndex && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {selectedOpt !== null && (
              <div className="space-y-4">
                <div
                  className={`rounded-2xl p-4 text-xs sm:text-sm font-semibold border ${
                    selectedOpt === currentQuestion.correctIndex
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-amber-50 border-amber-200 text-amber-950'
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-extrabold mb-1">
                    <Sparkles className="w-4 h-4" />
                    {selectedOpt === currentQuestion.correctIndex
                      ? 'أحسنت! إجابة دقيقة'
                      : 'تفسير وتصحيح فوري'}
                  </div>
                  {currentQuestion.explanationAr}
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[var(--brand-primary)] text-white font-extrabold text-sm cursor-pointer"
                  >
                    {sessionStats.answered >= SESSION_LENGTH ? 'عرض التقرير النهائي' : 'السؤال التالي'}
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};
