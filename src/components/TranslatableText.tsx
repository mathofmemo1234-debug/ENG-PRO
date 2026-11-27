import React, { useState } from 'react';
import { Languages, Volume2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { speakEnglish } from '../utils/speech';

interface TranslatableTextProps {
  en: string;
  ar: string;
  withAudio?: boolean;
  className?: string;
  enClassName?: string;
  arClassName?: string;
}

export const TranslatableText: React.FC<TranslatableTextProps> = ({
  en,
  ar,
  withAudio = false,
  className = '',
  enClassName = '',
  arClassName = '',
}) => {
  const { translationMode, speechRate, speechAccent } = useApp();
  const [revealed, setRevealed] = useState(false);

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    speakEnglish(en, { rate: speechRate, accent: speechAccent });
  };

  if (translationMode === 'arabic-first') {
    return (
      <div className={`space-y-1 ${className}`}>
        <div className={`font-semibold text-slate-800 leading-relaxed ${arClassName}`}>{ar}</div>
        <div className="flex items-center gap-2 justify-between bg-slate-50/90 border border-slate-200/80 rounded-lg px-2.5 py-1.5">
          <span dir="ltr" className={`font-en text-sm text-slate-600 text-left ${enClassName}`}>
            {en}
          </span>
          {withAudio && (
            <button
              type="button"
              onClick={handleAudio}
              title="استمع للنطق الإنجليزي"
              className="shrink-0 p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[var(--brand-primary)] hover:border-[var(--brand-primary)] transition cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    );
  }

  if (translationMode === 'hover-click') {
    return (
      <div className={`space-y-1.5 ${className}`}>
        <div className="flex items-start gap-2 justify-between">
          <button
            type="button"
            onClick={() => setRevealed((v) => !v)}
            className="group text-left flex-1 cursor-pointer focus:outline-none"
            title="اضغط لإظهار أو إخفاء الترجمة الفورية"
          >
            <span
              dir="ltr"
              className={`inline-block font-en text-slate-900 border-b border-dashed border-[var(--brand-primary)]/60 group-hover:border-[var(--brand-primary)] transition leading-relaxed ${enClassName}`}
            >
              {en}
            </span>
            <span className="inline-flex items-center gap-1 mr-2 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]">
              <Languages className="w-3 h-3" />
              {revealed ? 'إخفاء' : 'ترجم'}
            </span>
          </button>
          {withAudio && (
            <button
              type="button"
              onClick={handleAudio}
              title="استمع للنطق"
              className="shrink-0 p-1.5 rounded-full bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-slate-600 hover:text-[var(--brand-primary-dark)] transition cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        {revealed && (
          <div
            className={`text-sm px-3 py-1.5 rounded-lg bg-[var(--brand-primary-soft)]/60 text-slate-800 border border-[var(--brand-primary)]/20 animate-fadeIn ${arClassName}`}
          >
            {ar}
          </div>
        )}
      </div>
    );
  }

  // Default: bilingual
  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex items-start gap-2 justify-between">
        <span dir="ltr" className={`font-en text-slate-900 text-left leading-relaxed ${enClassName}`}>
          {en}
        </span>
        {withAudio && (
          <button
            type="button"
            onClick={handleAudio}
            title="استمع للنطق الإنجليزي"
            className="shrink-0 p-1.5 rounded-full bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-slate-600 hover:text-[var(--brand-primary-dark)] transition cursor-pointer"
          >
            <Volume2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
      <div className={`text-sm text-slate-600 leading-relaxed ${arClassName}`}>{ar}</div>
    </div>
  );
};
