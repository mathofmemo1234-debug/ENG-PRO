import React from 'react';
import { ArrowLeft, Award, BookOpen, CheckCircle2, FileText, Sparkles, Volume2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getUnitById } from '../data/units';
import { speakEnglish } from '../utils/speech';
import { TranslatableText } from './TranslatableText';

interface UnitSummaryViewProps {
  unitId: string;
}

export const UnitSummaryView: React.FC<UnitSummaryViewProps> = ({ unitId }) => {
  const { setRoute, speechAccent, speechRate } = useApp();
  const unit = getUnitById(unitId);

  if (!unit) return null;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Unit Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full">
              <Award className="w-4 h-4" />
              الملخص الشامل لنهاية الوحدة {unit.number}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">{unit.titleAr}</h1>
            <p dir="ltr" className="font-en text-sm font-bold opacity-90 text-left">
              Unit {unit.number}: {unit.titleEn}
            </p>
          </div>
          <button
            type="button"
            onClick={() =>
              setRoute({ page: 'lesson', unitId: unit.id, lessonId: unit.lessons[0].id })
            }
            className="px-4 py-2.5 rounded-2xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow cursor-pointer"
          >
            العودة لدروس الوحدة ←
          </button>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-3">
        <h2 className="text-lg font-extrabold text-slate-900">نظرة شاملة على الوحدة</h2>
        <p className="text-sm text-slate-700 leading-relaxed">{unit.summary.overviewAr}</p>
      </div>

      {/* Grammar One-Pager */}
      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          خلاصة قواعد الوحدة في بطاقة واحدة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {unit.summary.keyGrammarFormulas.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-2"
            >
              <div className="text-xs font-extrabold text-[var(--brand-primary-dark)]">
                {item.labelAr}
              </div>
              <div dir="ltr" className="font-en text-xs font-bold text-slate-900 bg-white p-2 rounded-xl border border-slate-200 text-left">
                {item.formula}
              </div>
              <div className="flex items-center justify-between gap-2 pt-1">
                <span dir="ltr" className="font-en text-xs text-slate-600 text-left">
                  {item.example}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(item.example, { accent: speechAccent, rate: speechRate })
                  }
                  className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[var(--brand-primary)] shrink-0 cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Vocabulary */}
      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-3">
        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--brand-primary)]" />
          أهم 10 كلمات محورية للامتحان (اضغط للاستماع)
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
          {unit.summary.topVocab.map((v) => (
            <button
              key={v.word}
              type="button"
              onClick={() => speakEnglish(v.word, { accent: speechAccent, rate: speechRate })}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-[var(--brand-primary-soft)] border border-slate-200 text-center transition cursor-pointer space-y-1"
            >
              <div dir="ltr" className="font-en text-xs sm:text-sm font-extrabold text-slate-900">
                {v.word}
              </div>
              <div className="text-[11px] font-bold text-[var(--brand-primary-dark)]">{v.ar}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Story Recap & Model Writing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-3">
          <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
            ملخص فصل القصة المقرر
          </span>
          <h3 className="text-base font-extrabold text-slate-900">
            The School Garden Project — ملخص الفصل {unit.number}
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">{unit.summary.storyChapterRecapAr}</p>
        </div>

        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-800 inline-flex items-center gap-1">
              <FileText className="w-3.5 h-3.5" /> نموذج الكتابة المتوقع
            </span>
          </div>
          <h3 className="text-base font-extrabold text-slate-900">
            {unit.summary.writingModel.titleAr}
          </h3>
          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
            <TranslatableText
              en={unit.summary.writingModel.paragraphEn}
              ar={unit.summary.writingModel.paragraphAr}
              withAudio
              enClassName="text-xs sm:text-sm leading-relaxed"
              arClassName="text-xs leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Exam Readiness Checklist */}
      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-3">
        <h2 className="text-base font-extrabold text-slate-900">قائمة التحقق قبل الاختبار</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {unit.summary.examChecklistAr.map((chk, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 text-xs sm:text-sm text-emerald-950 font-semibold"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{chk}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap gap-2 justify-end">
          <button
            type="button"
            onClick={() => setRoute({ page: 'cumulative-map' })}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[var(--brand-primary)] text-white text-xs font-extrabold cursor-pointer"
          >
            استكشف المخطط التراكمي للقواعد
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
