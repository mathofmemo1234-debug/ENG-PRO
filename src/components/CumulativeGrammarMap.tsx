import React, { useState } from 'react';
import { ArrowLeft, GitBranch, Layers, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CUMULATIVE_GRAMMAR_LINKS } from '../data/cumulativeMap';
import { TranslatableText } from './TranslatableText';

export const CumulativeGrammarMap: React.FC = () => {
  const { setRoute, setActiveCurriculum } = useApp();
  const [selectedId, setSelectedId] = useState(CUMULATIVE_GRAMMAR_LINKS[0].id);

  const activeLink =
    CUMULATIVE_GRAMMAR_LINKS.find((l) => l.id === selectedId) ?? CUMULATIVE_GRAMMAR_LINKS[0];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full">
            <GitBranch className="w-4 h-4" />
            الرابط التراكمي الشامل للمنهج
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">
            المخطط التراكمي: ربط قواعد السنوات السابقة بمنهج الصف الثالث الإعدادي
          </h1>
          <p className="text-white/90 text-sm max-w-3xl">
            القواعد في اللغة الإنجليزية سلسلة متصلة! انقر على أي مسار لترى كيف تتطور القاعدة من
            التأسيس (Let’s Remember والسنوات السابقة) إلى تطبيقها المتقدم في وحدات الترم الأول (1–6).
          </p>
        </div>
      </div>

      {/* Interactive Two-Column Bridge Matrix */}
      <div className="space-y-3">
        {CUMULATIVE_GRAMMAR_LINKS.map((link) => {
          const isSelected = link.id === selectedId;
          return (
            <button
              key={link.id}
              type="button"
              onClick={() => setSelectedId(link.id)}
              className={`w-full text-right rounded-3xl border-2 p-4 sm:p-5 transition cursor-pointer bg-white ${
                isSelected ? 'shadow-md scale-[1.005]' : 'border-slate-200 hover:border-slate-300'
              }`}
              style={{ borderColor: isSelected ? link.color : undefined }}
            >
              <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center">
                {/* Prior Grade / Foundation Node */}
                <div className="md:col-span-5 rounded-2xl bg-slate-50 border border-slate-200 p-3.5 space-y-1">
                  <div className="text-[11px] font-bold text-slate-500">{link.priorGradeLabel}</div>
                  <div className="font-extrabold text-sm text-slate-900">{link.priorTitleAr}</div>
                  <div dir="ltr" className="font-en text-xs font-bold text-slate-600 text-left">
                    {link.priorFormula}
                  </div>
                </div>

                {/* Connecting Bridge Arrow */}
                <div className="md:col-span-1 flex items-center justify-center">
                  <div
                    className="w-9 h-9 rounded-full text-white flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: link.color }}
                  >
                    <ArrowLeft className="w-4 h-4 rotate-90 md:rotate-0" />
                  </div>
                </div>

                {/* Prep 3 Term 1 Node */}
                <div
                  className="md:col-span-5 rounded-2xl p-3.5 border space-y-1"
                  style={{
                    backgroundColor: `${link.color}10`,
                    borderColor: `${link.color}40`,
                  }}
                >
                  <div className="text-[11px] font-extrabold" style={{ color: link.color }}>
                    الصف الثالث الإعدادي — الوحدة {link.prep3UnitNumber}
                  </div>
                  <div className="font-extrabold text-sm text-slate-900">{link.prep3TitleAr}</div>
                  <div dir="ltr" className="font-en text-xs font-bold text-slate-800 text-left">
                    {link.prep3Formula}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Panel for Selected Link */}
      <div
        className="bg-white rounded-3xl border-2 p-5 sm:p-6 shadow-sm space-y-4"
        style={{ borderColor: activeLink.color }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5" style={{ color: activeLink.color }} />
            <h2 className="text-lg font-extrabold text-slate-900">
              جسر الفهم التراكمي: {activeLink.priorTitleAr} ← {activeLink.prep3TitleAr}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveCurriculum('egypt');
              setRoute({
                page: 'lesson',
                unitId: activeLink.prep3UnitId,
                lessonId: activeLink.prep3LessonId,
                tab: 'explain',
              });
            }}
            className="px-4 py-2 rounded-xl text-white text-xs font-extrabold cursor-pointer"
            style={{ backgroundColor: activeLink.color }}
          >
            افتح شرح القاعدة في الوحدة {activeLink.prep3UnitNumber} ←
          </button>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
          {activeLink.bridgeExplanationAr}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-2xl border border-slate-200 p-3.5 space-y-1">
            <div className="text-xs font-bold text-slate-500">1. القاعدة في السنوات السابقة:</div>
            <div dir="ltr" className="font-en text-sm font-bold text-slate-800 text-left">
              {activeLink.transformationExample.baseEn}
            </div>
          </div>
          <div
            className="rounded-2xl border p-3.5 space-y-1"
            style={{
              backgroundColor: `${activeLink.color}0D`,
              borderColor: `${activeLink.color}40`,
            }}
          >
            <div className="text-xs font-bold flex items-center gap-1" style={{ color: activeLink.color }}>
              <Sparkles className="w-3.5 h-3.5" /> 2. التطور في الصف الثالث الإعدادي:
            </div>
            <TranslatableText
              en={activeLink.transformationExample.evolvedEn}
              ar={activeLink.transformationExample.ar}
              withAudio
              enClassName="text-sm font-extrabold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
