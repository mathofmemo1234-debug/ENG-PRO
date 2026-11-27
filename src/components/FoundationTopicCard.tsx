import React from 'react';
import { ArrowLeft, GraduationCap, Presentation, Volume2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FOUNDATION_UNIT_LINKS } from '../data/detailedExplanations';
import { FoundationGrammarTopic } from '../data/foundation';
import { speakEnglish } from '../utils/speech';
import { GrammarVisualDiagram } from './GrammarVisualDiagram';
import { TranslatableText } from './TranslatableText';

interface FoundationTopicCardProps {
  topic: FoundationGrammarTopic;
  onJumpToPrep3Lesson?: (unitId: string, lessonId: string) => void;
}

export const FoundationTopicCard: React.FC<FoundationTopicCardProps> = ({
  topic,
  onJumpToPrep3Lesson,
}) => {
  const { speechAccent, speechRate, setRoute, setActiveCurriculum } = useApp();
  const unitLinks = FOUNDATION_UNIT_LINKS[topic.id] ?? [];

  const handleLinkClick = (unitId: string, lessonId: string) => {
    if (onJumpToPrep3Lesson) {
      onJumpToPrep3Lesson(unitId, lessonId);
    } else {
      setActiveCurriculum('egypt');
      setRoute({ page: 'lesson', unitId, lessonId, tab: 'explain' });
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]">
            مسار التأسيس الشامل (Let’s Remember)
          </span>
          <h2 dir="ltr" className="font-en text-xl font-black text-slate-900 mt-2 text-left">
            {topic.titleEn}
          </h2>
          <p className="text-sm font-bold text-[var(--brand-primary-dark)]">{topic.titleAr}</p>
        </div>
        <button
          type="button"
          onClick={() =>
            speakEnglish(`${topic.titleEn}. ${topic.usageEn}. ${topic.formulaEn}`, {
              accent: speechAccent,
              rate: speechRate,
            })
          }
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-slate-700 text-xs font-extrabold cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          استمع للقاعدة
        </button>
      </div>

      {/* English Usage + Arabic Structural Overview */}
      <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 space-y-2">
        <div className="text-[11px] font-extrabold text-indigo-700">
          القاعدة بالإنجليزية (Usage & Rule):
        </div>
        <div dir="ltr" className="font-en text-sm font-bold text-slate-900 text-left leading-relaxed">
          {topic.usageEn}
        </div>
        <div className="text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/70 pt-2">
          <strong>شرح الاستخدام والتركيب:</strong> {topic.summaryAr}
        </div>
      </div>

      {/* Formula Box */}
      <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50 border border-violet-200 p-4 space-y-1.5">
        <div className="text-xs font-bold text-violet-700">التركيب العام (English Structure Formula)</div>
        <div dir="ltr" className="font-en font-extrabold text-slate-900 text-sm sm:text-base text-left">
          {topic.formulaEn}
        </div>
        <div className="text-xs text-slate-600 font-semibold">
          شرح التركيب: {topic.formulaAr}
        </div>
      </div>

      {/* Visual Diagram */}
      <GrammarVisualDiagram type={topic.diagramType} formulaEn={topic.formulaEn} />

      {/* Detailed Rules: English Rule + Arabic Structural Explanation + Example */}
      <div className="space-y-3">
        {topic.rulesAr.map((r, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 p-4 space-y-2.5 hover:border-[var(--brand-primary)] transition"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="font-extrabold text-slate-900 text-sm">
                {i + 1}. {r.headingAr}
              </div>
              {r.formulaEn && (
                <span
                  dir="ltr"
                  className="font-en text-xs font-extrabold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200"
                >
                  {r.formulaEn}
                </span>
              )}
            </div>
            <div
              dir="ltr"
              className="font-en text-xs sm:text-sm font-bold text-slate-900 bg-indigo-50/40 rounded-xl px-3 py-2 border border-indigo-100 text-left"
            >
              {r.ruleEn}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong>شرح التركيب:</strong> {r.detailAr}
            </p>
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
              <TranslatableText en={r.exampleEn} ar={r.exampleAr} withAudio />
            </div>
          </div>
        ))}
      </div>

      {/* Keywords */}
      <div className="space-y-2">
        <div className="text-xs font-extrabold text-slate-500">الكلمات المفتاحية الدالة (Keywords):</div>
        <div dir="ltr" className="flex flex-wrap gap-2">
          {topic.keywords.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => speakEnglish(kw, { accent: speechAccent, rate: speechRate })}
              className="font-en text-xs font-bold px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-[var(--brand-primary)] text-slate-700 cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </div>
      </div>

      {/* Golden Tip */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-3.5 text-xs sm:text-sm text-amber-900 font-semibold">
        💡 نصيحة التأسيس الذهبية: {topic.quickTipAr}
      </div>

      {/* Direct Prep 3 Curriculum Links */}
      {unitLinks.length > 0 && (
        <div className="rounded-2xl bg-gradient-to-r from-violet-50 to-teal-50 border border-violet-200 p-4 space-y-2.5">
          <div className="text-xs font-extrabold text-violet-900 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-violet-700" />
            أين ستحتاج هذه القاعدة في الصف الثالث الإعدادي؟
          </div>
          <div className="flex flex-wrap gap-2">
            {unitLinks.map((lnk) => (
              <button
                key={lnk.lessonId}
                type="button"
                onClick={() => handleLinkClick(lnk.unitId, lnk.lessonId)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-teal-50 border border-violet-200 text-xs font-bold text-slate-800 cursor-pointer"
              >
                <Presentation className="w-3.5 h-3.5 text-teal-600" />
                <span>{lnk.labelAr}</span>
                <ArrowLeft className="w-3 h-3 text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
