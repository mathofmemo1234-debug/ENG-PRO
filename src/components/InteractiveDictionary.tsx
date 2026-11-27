import React, { useMemo, useState } from 'react';
import { BookOpen, Layers, RotateCw, Search, Star, Volume2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EGYPT_PREP3_TERM1_UNITS } from '../data/units';
import { VocabItem } from '../data/types';
import { speakEnglish } from '../utils/speech';

interface TaggedVocab extends VocabItem {
  unitNumber: number;
  unitTitleAr: string;
}

export const InteractiveDictionary: React.FC = () => {
  const { progress, toggleStarVocab, speechAccent, speechRate } = useApp();

  const allVocab = useMemo<TaggedVocab[]>(() => {
    return EGYPT_PREP3_TERM1_UNITS.flatMap((u) =>
      u.lessons.flatMap((l) =>
        l.vocab.map((v) => ({
          ...v,
          unitNumber: u.number,
          unitTitleAr: u.titleAr,
        }))
      )
    );
  }, []);

  const [search, setSearch] = useState('');
  const [unitFilter, setUnitFilter] = useState<string>('all');
  const [onlyStarred, setOnlyStarred] = useState(false);
  const [mode, setMode] = useState<'list' | 'flashcards'>('list');
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allVocab.filter((v) => {
      if (unitFilter !== 'all' && String(v.unitNumber) !== unitFilter) return false;
      if (onlyStarred && !progress.starredVocab.includes(v.id)) return false;
      if (q) {
        return (
          v.word.toLowerCase().includes(q) ||
          v.arabic.includes(q) ||
          v.exampleEn.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allVocab, search, unitFilter, onlyStarred, progress.starredVocab]);

  const currentCard = filtered[cardIdx % Math.max(1, filtered.length)];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full">
              <BookOpen className="w-4 h-4" />
              معجم مفردات المنهج التفاعلي ({allVocab.length} مفردة وتعبير)
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">معجم المفردات التفاعلي وبطاقات الحفظ</h1>
            <p className="text-sm text-white/90">
              ابحث بالعربية أو الإنجليزية، استمع للنطق، احفظ الكلمات بنجمة ⭐، أو تدرّب بالبطاقات القلابة.
            </p>
          </div>
          <div className="flex gap-2 bg-white/20 p-1 rounded-2xl">
            <button
              type="button"
              onClick={() => setMode('list')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold cursor-pointer ${
                mode === 'list' ? 'bg-white text-slate-900' : 'text-white'
              }`}
            >
              قائمة المعجم
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('flashcards');
                setCardIdx(0);
                setFlipped(false);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold cursor-pointer ${
                mode === 'flashcards' ? 'bg-white text-slate-900' : 'text-white'
              }`}
            >
              بطاقات الفلاش كارد
            </button>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white rounded-2xl border border-[var(--border-soft)] p-4 shadow-xs flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث عن كلمة بالإنجليزية أو العربية..."
            className="w-full pr-9 pl-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[var(--brand-primary)]"
          />
        </div>
        <select
          value={unitFilter}
          onChange={(e) => setUnitFilter(e.target.value)}
          className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700"
        >
          <option value="all">جميع الوحدات (1–6)</option>
          {EGYPT_PREP3_TERM1_UNITS.map((u) => (
            <option key={u.id} value={String(u.number)}>
              الوحدة {u.number}: {u.titleAr}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setOnlyStarred((s) => !s)}
          className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold border cursor-pointer ${
            onlyStarred
              ? 'bg-amber-100 border-amber-300 text-amber-900'
              : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          <Star className={`w-3.5 h-3.5 ${onlyStarred ? 'fill-amber-500 text-amber-500' : ''}`} />
          المحفوظة ({progress.starredVocab.length})
        </button>
      </div>

      {/* Mode 1: List */}
      {mode === 'list' ? (
        filtered.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 text-slate-500 font-bold">
            لا توجد كلمات مطابقة لخيارات البحث الحالية.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item) => {
              const starred = progress.starredVocab.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-[var(--border-soft)] p-4 shadow-xs space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Unit {item.unitNumber} • {item.pos}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() =>
                          speakEnglish(item.word, { accent: speechAccent, rate: speechRate })
                        }
                        className="p-1.5 rounded-full bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-slate-600 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleStarVocab(item.id)}
                        className="p-1.5 rounded-full bg-slate-100 text-slate-400 hover:text-amber-500 cursor-pointer"
                      >
                        <Star className={`w-3.5 h-3.5 ${starred ? 'fill-amber-400 text-amber-500' : ''}`} />
                      </button>
                    </div>
                  </div>
                  <div dir="ltr" className="text-left">
                    <div className="font-en text-lg font-black text-slate-900">{item.word}</div>
                    <div className="font-en text-[11px] text-slate-400">{item.phonetic}</div>
                  </div>
                  <div className="text-sm font-extrabold text-[var(--brand-primary-dark)]">
                    {item.arabic}
                  </div>
                  <div className="text-xs text-slate-600 bg-slate-50 rounded-xl p-2.5 border border-slate-200/70">
                    <div dir="ltr" className="font-en text-left font-semibold text-slate-800">
                      {item.exampleEn}
                    </div>
                    <div className="mt-0.5 text-[11px]">{item.exampleAr}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : (
        /* Mode 2: Flashcards */
        currentCard && (
          <div className="max-w-xl mx-auto space-y-5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Layers className="w-4 h-4" /> بطاقة {(cardIdx % filtered.length) + 1} من{' '}
                {filtered.length}
              </span>
              <span>اضغط على البطاقة لقلبها</span>
            </div>

            <div
              onClick={() => setFlipped((f) => !f)}
              className="bg-white rounded-3xl border-2 border-[var(--brand-primary)] p-8 min-h-[260px] shadow-md flex flex-col items-center justify-center text-center space-y-4 cursor-pointer select-none transition hover:shadow-lg"
            >
              {!flipped ? (
                <>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]">
                    Unit {currentCard.unitNumber} • ({currentCard.pos})
                  </span>
                  <div dir="ltr" className="font-en text-3xl sm:text-4xl font-black text-slate-900">
                    {currentCard.word}
                  </div>
                  <div dir="ltr" className="font-en text-sm text-slate-400">
                    {currentCard.phonetic}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      speakEnglish(currentCard.word, { accent: speechAccent, rate: speechRate });
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-xs font-bold text-slate-700 cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                    استمع للنطق
                  </button>
                </>
              ) : (
                <>
                  <div className="text-2xl font-black text-[var(--brand-primary-dark)]">
                    {currentCard.arabic}
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 w-full space-y-1.5">
                    <div dir="ltr" className="font-en text-sm font-bold text-slate-900 text-left">
                      {currentCard.exampleEn}
                    </div>
                    <div className="text-xs text-slate-600">{currentCard.exampleAr}</div>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setCardIdx((i) => (i - 1 + filtered.length) % filtered.length);
                  setFlipped(false);
                }}
                className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
              >
                السابقة
              </button>
              <button
                type="button"
                onClick={() => setFlipped((f) => !f)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-100 text-xs font-extrabold text-slate-800 cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                اقلب البطاقة
              </button>
              <button
                type="button"
                onClick={() => {
                  setCardIdx((i) => (i + 1) % filtered.length);
                  setFlipped(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-[var(--brand-primary)] text-white text-xs font-extrabold cursor-pointer"
              >
                التالية ←
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};
