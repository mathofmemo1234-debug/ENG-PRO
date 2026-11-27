import React, { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  Bookmark,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  FileDown,
  HelpCircle,
  Layers,
  Maximize2,
  MessageCircle,
  NotebookPen,
  PenTool,
  Play,
  Presentation,
  Printer,
  Sparkles,
  Square,
  Target,
  Volume2,
  X,
  XCircle,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getDetailedExplanation } from '../data/detailedExplanations';
import { LessonModule, UnitData } from '../data/types';
import { speakEnglish, stopSpeech } from '../utils/speech';
import {
  downloadLessonExplanationWord,
  printLessonExplanationPdf,
} from '../utils/worksheetExport';
import { GrammarVisualDiagram } from './GrammarVisualDiagram';
import { TranslatableText } from './TranslatableText';

interface LessonExplanationPanelProps {
  unit: UnitData;
  lesson: LessonModule;
  onOpenTab?: (tab: 'vocab' | 'worksheet') => void;
  compactHeader?: boolean;
}

export const LessonExplanationPanel: React.FC<LessonExplanationPanelProps> = ({
  unit,
  lesson,
  onOpenTab,
  compactHeader = false,
}) => {
  const {
    progress,
    speechAccent,
    speechRate,
    toggleBookmarkExplanation,
    saveLessonNote,
    recordMiniCheckPass,
  } = useApp();

  const detail = getDetailedExplanation(lesson.id);
  const commonMistakes = lesson.grammarBlocks[0]?.commonMistakes;
  const isBookmarked = (progress.bookmarkedExplanations ?? []).includes(lesson.id);
  const isMiniCheckPassed = (progress.completedMiniChecks ?? []).includes(lesson.id);
  const savedNote = (progress.lessonNotes ?? {})[lesson.id] ?? '';

  // Interactive Sentence Dissector state
  const [selectedPartIdx, setSelectedPartIdx] = useState(0);

  // Instant Mini-Check state
  const [miniSelected, setMiniSelected] = useState<number | null>(null);
  const [miniChecked, setMiniChecked] = useState(false);

  // Personal Smart Study Notes state
  const [noteDraft, setNoteDraft] = useState(savedNote);
  const [noteSavedToast, setNoteSavedToast] = useState(false);

  // Guided Sequential Audio Walkthrough state
  const [isWalking, setIsWalking] = useState(false);
  const [activeAudioStage, setActiveAudioStage] = useState<number | null>(null);
  const isWalkingRef = useRef(false);

  // Smartboard Presentation Mode state
  const [smartboardOpen, setSmartboardOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [largeFont, setLargeFont] = useState(false);

  useEffect(() => {
    isWalkingRef.current = false;
    setIsWalking(false);
    setActiveAudioStage(null);
    stopSpeech();

    setSelectedPartIdx(0);
    setMiniSelected(null);
    setMiniChecked(false);
    setNoteDraft((progress.lessonNotes ?? {})[lesson.id] ?? '');
    setNoteSavedToast(false);
    setSlideIdx(0);
  }, [lesson.id]);

  useEffect(() => {
    return () => {
      isWalkingRef.current = false;
      stopSpeech();
    };
  }, []);

  // Slides: 0 = Hook/Objectives, 1..rules.length = Grammar Rules, rules.length+1 = Dissector, rules.length+2 = Mnemonic + Mini-Check
  const totalSlides = 1 + detail.bookGrammarRules.length + 2;

  useEffect(() => {
    if (!smartboardOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSmartboardOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setSlideIdx((prev) => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === 'ArrowRight') {
        setSlideIdx((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [smartboardOpen, totalSlides]);

  const stopAudioWalkthrough = () => {
    isWalkingRef.current = false;
    setIsWalking(false);
    setActiveAudioStage(null);
    stopSpeech();
  };

  const startAudioWalkthrough = () => {
    if (isWalkingRef.current) {
      stopAudioWalkthrough();
      return;
    }

    const queue: { stage: number; text: string }[] = [
      {
        stage: 0,
        text: `${lesson.lessonsLabel}: ${lesson.titleEn}. ${detail.hookQuestionEn}`,
      },
      ...detail.bookGrammarRules.map((rule, rIdx) => ({
        stage: rIdx + 1,
        text: `${rule.ruleTitleEn}. ${rule.usageEn.join(' ')} ${rule.structures
          .slice(0, 3)
          .map((s) => `${s.labelEn}: ${s.exampleEn}`)
          .join('. ')}`,
      })),
    ];

    isWalkingRef.current = true;
    setIsWalking(true);

    const playNext = (idx: number) => {
      if (!isWalkingRef.current || idx >= queue.length) {
        isWalkingRef.current = false;
        setIsWalking(false);
        setActiveAudioStage(null);
        return;
      }
      const item = queue[idx];
      setActiveAudioStage(item.stage);
      speakEnglish(item.text, {
        accent: speechAccent,
        rate: speechRate,
        onEnd: () => {
          if (isWalkingRef.current) {
            playNext(idx + 1);
          }
        },
      });
    };

    playNext(0);
  };

  const handleSelectMiniOption = (optIndex: number) => {
    setMiniSelected(optIndex);
    setMiniChecked(true);
    if (optIndex === detail.miniCheck.correctIndex) {
      recordMiniCheckPass(lesson.id);
    }
  };

  const handleNoteChange = (val: string) => {
    setNoteDraft(val);
    saveLessonNote(lesson.id, val);
    setNoteSavedToast(true);
    setTimeout(() => setNoteSavedToast(false), 1800);
  };

  const fullDissectedSentence = detail.sentenceDissection.map((p) => p.text).join(' ');
  const activeDissectionPart =
    detail.sentenceDissection[selectedPartIdx] ?? detail.sentenceDissection[0];

  return (
    <div className="space-y-6">
      {/* Top Action & Signature Tools Strip */}
      <div className="no-print bg-white rounded-3xl border border-[var(--border-soft)] p-4 sm:p-5 shadow-xs space-y-3">
        {!compactHeader && (
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]">
                  الوحدة {unit.number} • {lesson.lessonsLabel}
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                {lesson.titleAr}
              </h2>
              <p dir="ltr" className="font-en text-xs font-bold text-slate-500 text-left">
                {lesson.titleEn}
              </p>
            </div>
            {onOpenTab && (
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => onOpenTab('vocab')}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  المفردات
                </button>
                <button
                  type="button"
                  onClick={() => onOpenTab('worksheet')}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold cursor-pointer"
                >
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  ورقة العمل
                </button>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={startAudioWalkthrough}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                isWalking
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-[var(--brand-primary)] text-white shadow-xs hover:opacity-95'
              }`}
            >
              {isWalking ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isWalking ? 'إيقاف الشرح الصوتي التتابعي' : 'تشغيل الشرح الصوتي التتابعي'}
            </button>

            <button
              type="button"
              onClick={() => {
                setSlideIdx(0);
                setSmartboardOpen(true);
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-extrabold cursor-pointer"
            >
              <Presentation className="w-4 h-4" />
              وضع السبورة التفاعلية
            </button>

            <button
              type="button"
              onClick={() => toggleBookmarkExplanation(lesson.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-extrabold transition cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-100 border-amber-300 text-amber-900'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-amber-50'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500 text-amber-600' : ''}`} />
              {isBookmarked ? 'محفوظ بالمفضلة' : 'حفظ الشرح'}
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => downloadLessonExplanationWord(unit, lesson, detail, noteDraft)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-extrabold cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              مذكرة Word
            </button>
            <button
              type="button"
              onClick={() => printLessonExplanationPdf(unit, lesson, detail, noteDraft)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-extrabold cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              طباعة / PDF
            </button>
          </div>
        </div>
      </div>

      {/* 1. Hook Question & Learning Objectives */}
      <div
        className={`bg-white rounded-3xl border p-5 sm:p-6 shadow-xs space-y-4 transition ${
          activeAudioStage === 0
            ? 'border-[var(--brand-primary)] ring-4 ring-[var(--brand-primary-soft)]'
            : 'border-[var(--border-soft)]'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
            <HelpCircle className="w-3.5 h-3.5" />
            سؤال التهيئة والأهداف (الوحدة {unit.number} • الجزء {lesson.partNumber})
          </div>
          {activeAudioStage === 0 && (
            <span className="text-[11px] font-extrabold text-[var(--brand-primary-dark)] animate-pulse">
              🔊 يتم النطق الآن...
            </span>
          )}
        </div>

        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
          <TranslatableText
            en={detail.hookQuestionEn}
            ar={detail.hookQuestionAr}
            withAudio
            enClassName="text-sm sm:text-base font-extrabold"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
          {detail.objectivesAr.map((obj, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2 bg-[var(--surface-muted)] border border-[var(--border-soft)] rounded-2xl p-3 text-xs font-semibold text-slate-800"
            >
              <CheckCircle2 className="w-4 h-4 text-[var(--brand-primary)] shrink-0 mt-0.5" />
              <span>{obj}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Grammar Rules (English Rules + Arabic Structure) */}
      <div className="space-y-5">
        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[var(--brand-primary)]" />
          الشرح المفصل والقواعد النحوية (القاعدة بالإنجليزية + شرح التركيب بالعربية)
        </h3>

        {detail.bookGrammarRules.map((rule, rIdx) => {
          const isSpeakingThis = activeAudioStage === rIdx + 1;
          return (
            <div
              key={rIdx}
              className={`bg-white rounded-3xl border p-5 sm:p-6 shadow-xs space-y-5 transition ${
                isSpeakingThis
                  ? 'border-[var(--brand-primary)] ring-4 ring-[var(--brand-primary-soft)]'
                  : 'border-[var(--border-soft)]'
              }`}
            >
              {/* Rule Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                    القاعدة #{rIdx + 1} • English Rule &amp; Arabic Structure
                  </span>
                  <h4 dir="ltr" className="font-en text-lg sm:text-xl font-black text-slate-900 text-left">
                    {rule.ruleTitleEn}
                  </h4>
                  <p className="text-sm font-bold text-[var(--brand-primary-dark)]">{rule.ruleTitleAr}</p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    speakEnglish(`${rule.ruleTitleEn}. ${rule.usageEn.join(' ')}`, {
                      accent: speechAccent,
                      rate: speechRate,
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-xs font-bold text-slate-700 cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  استمع للقاعدة بالإنجليزية
                </button>
              </div>

              {/* Usage (English Rules + Arabic Summary) */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-4 space-y-2.5">
                <div className="text-xs font-extrabold text-indigo-700">
                  الاستخدام (Usage — English Rules):
                </div>
                <ul dir="ltr" className="font-en text-xs sm:text-sm font-bold text-slate-900 space-y-1 text-left list-disc pl-5">
                  {rule.usageEn.map((u, ui) => (
                    <li key={ui}>{u}</li>
                  ))}
                </ul>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/80 pt-2">
                  <strong>شرح الاستخدام بالعربية:</strong> {rule.usageArSummary}
                </p>
              </div>

              {/* Visual Diagram (rendered ONCE per rule if present) */}
              {rule.diagramType && (
                <GrammarVisualDiagram
                  type={rule.diagramType}
                  data={rule.diagramData}
                  formulaEn={rule.structures[0]?.formulaEn ?? rule.ruleTitleEn}
                />
              )}

              {/* English Formulas + Arabic Structure Explanation */}
              <div className="space-y-3">
                <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                  الصيغ والتراكيب النحوية (English Forms & Arabic Structure):
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {rule.structures.map((st, si) => (
                    <div
                      key={si}
                      className="rounded-2xl border border-slate-200 bg-white p-4 space-y-2.5 hover:border-[var(--brand-primary)] transition"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          dir="ltr"
                          className="font-en text-xs font-extrabold px-2.5 py-1 rounded-lg bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]"
                        >
                          {st.labelEn}
                        </span>
                      </div>
                      <div
                        dir="ltr"
                        className="font-en text-xs sm:text-sm font-black text-indigo-950 bg-indigo-50/70 border border-indigo-200 rounded-xl px-3.5 py-2.5 text-left"
                      >
                        {st.formulaEn}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">شرح التركيب:</strong> {st.structureAr}
                      </p>
                      <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80">
                        <TranslatableText
                          en={st.exampleEn}
                          ar={st.exampleAr}
                          withAudio
                          enClassName="text-xs sm:text-sm font-bold"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords & Time Markers */}
              {rule.keywords && rule.keywords.length > 0 && (
                <div className="space-y-2.5">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                    الكلمات الدالة وقواعدها (Keywords & Transformation Cues):
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {rule.keywords.map((kw, ki) => (
                      <div
                        key={ki}
                        className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-1.5"
                      >
                        <div dir="ltr" className="font-en text-xs font-black text-teal-800 text-left">
                          {kw.tokenEn}
                        </div>
                        <div dir="ltr" className="font-en text-[11px] font-bold text-slate-800 bg-white rounded-lg px-2.5 py-1.5 border border-slate-200 text-left">
                          {kw.ruleEn}
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed">
                          <strong>التركيب:</strong> {kw.structureAr}
                        </div>
                        <div className="flex items-center justify-between gap-2 pt-1">
                          <span dir="ltr" className="font-en text-[11px] font-semibold text-slate-600 text-left">
                            e.g. {kw.exampleEn}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              speakEnglish(kw.exampleEn, { accent: speechAccent, rate: speechRate })
                            }
                            className="p-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[var(--brand-primary)] shrink-0 cursor-pointer"
                            title="استمع للمثال"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Notes (لاحظ أن) */}
              {rule.specialNotes && rule.specialNotes.length > 0 && (
                <div className="rounded-2xl bg-amber-50/80 border border-amber-200 p-4 space-y-3">
                  <div className="text-xs font-extrabold text-amber-900 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    لاحظ أن — قواعد وملاحظات ذكية خاصة (Special Rules)
                  </div>
                  <div className="space-y-2.5">
                    {rule.specialNotes.map((sn, sni) => (
                      <div key={sni} className="bg-white rounded-xl border border-amber-200/80 p-3 space-y-1.5">
                        <div dir="ltr" className="font-en text-xs font-extrabold text-amber-950 text-left">
                          {sn.ruleEn}
                        </div>
                        <div className="text-xs text-slate-700 leading-relaxed">{sn.structureAr}</div>
                        <div className="flex items-center justify-between gap-2">
                          <span dir="ltr" className="font-en text-[11px] font-semibold text-indigo-800 text-left">
                            e.g. {sn.exampleEn}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              speakEnglish(sn.exampleEn, { accent: speechAccent, rate: speechRate })
                            }
                            className="p-1 rounded-full bg-slate-100 text-slate-600 hover:text-[var(--brand-primary)] shrink-0 cursor-pointer"
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Worked Practice Examples */}
              {rule.gotItExamples && rule.gotItExamples.length > 0 && (
                <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 space-y-3">
                  <div className="text-xs font-extrabold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    تطبيقات عملية محلولة خطوة بخطوة (Worked Practice — Rewrite / Complete)
                  </div>
                  <div className="space-y-2.5">
                    {rule.gotItExamples.map((ex, ei) => (
                      <div
                        key={ei}
                        className="bg-white rounded-xl border border-emerald-200/90 p-3.5 space-y-1.5"
                      >
                        <div dir="ltr" className="font-en text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between gap-2 text-left">
                          <span>
                            {ei + 1}. {ex.promptEn}
                          </span>
                          <span className="text-xs font-black text-rose-700 shrink-0">
                            {ex.bracketWordEn}
                          </span>
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed">
                          <strong>طريقة الحل:</strong> {ex.howAr}
                        </div>
                        <div className="flex items-center justify-between gap-2 bg-emerald-50 rounded-lg px-3 py-1.5 border border-emerald-200">
                          <span dir="ltr" className="font-en text-xs sm:text-sm font-extrabold text-emerald-900 text-left">
                            → {ex.answerEn}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              speakEnglish(ex.answerEn, { accent: speechAccent, rate: speechRate })
                            }
                            className="p-1 rounded-full bg-white text-emerald-700 hover:bg-emerald-100 shrink-0 cursor-pointer"
                            title="استمع للإجابة"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Common Mistakes (rendered ONCE here) */}
        {commonMistakes && commonMistakes.length > 0 && (
          <div className="rounded-3xl bg-rose-50 border border-rose-200 p-5 space-y-3">
            <div className="font-extrabold text-xs sm:text-sm text-rose-900 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              احذر من هذا الخطأ الشائع
            </div>
            {commonMistakes.map((cm, ci) => (
              <div key={ci} className="bg-white/80 rounded-2xl p-3.5 border border-rose-200 space-y-1 text-xs sm:text-sm">
                <div dir="ltr" className="font-en text-rose-700 line-through text-left">
                  ✗ {cm.wrong}
                </div>
                <div dir="ltr" className="font-en text-emerald-700 font-bold text-left">
                  ✓ {cm.right}
                </div>
                <div className="text-slate-700">{cm.whyAr}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. Notes on Reading & Listening + Prefixes/Suffixes */}
      {(detail.languageNotes || detail.prefixesSuffixes) && (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-5">
          <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            مفاتيح لغوية وفروق دقيقة وبناء الكلمات (Language Mastery & Affixes)
          </h3>

          {detail.languageNotes && detail.languageNotes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {detail.languageNotes.map((ln, lni) => (
                <div
                  key={lni}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-2"
                >
                  <div dir="ltr" className="font-en text-sm font-black text-indigo-900 text-left">
                    {ln.titleEn}
                  </div>
                  <div dir="ltr" className="font-en text-xs font-bold text-slate-800 bg-white rounded-xl px-3 py-1.5 border border-slate-200 text-left">
                    {ln.ruleEn}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{ln.structureAr}</p>
                  <div className="space-y-1">
                    {ln.examplesEn.map((ex, xi) => (
                      <div key={xi} className="flex items-center justify-between gap-2 text-xs">
                        <span dir="ltr" className="font-en font-semibold text-slate-700 text-left">
                          • {ex}
                        </span>
                        <button
                          type="button"
                          onClick={() => speakEnglish(ex, { accent: speechAccent, rate: speechRate })}
                          className="p-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[var(--brand-primary)] shrink-0 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {detail.prefixesSuffixes && detail.prefixesSuffixes.length > 0 && (
            <div className="overflow-x-auto">
              <div className="text-xs font-extrabold text-slate-700 mb-2">
                جدول البادئات واللواحق (Prefixes & Suffixes):
              </div>
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="py-2 px-3 text-left font-en" dir="ltr">Word</th>
                    <th className="py-2 px-3 text-center font-en" dir="ltr">Prefix / Suffix</th>
                    <th className="py-2 px-3 text-right">الوظيفة</th>
                    <th className="py-2 px-3 text-left font-en" dir="ltr">The new word</th>
                    <th className="py-2 px-3 text-right">المعنى</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.prefixesSuffixes.map((row, ri) => (
                    <tr key={ri} className="border-b border-slate-100 last:border-0">
                      <td dir="ltr" className="py-2 px-3 font-en font-bold text-slate-900 text-left">
                        {row.word}
                      </td>
                      <td dir="ltr" className="py-2 px-3 font-en font-extrabold text-indigo-700 text-center">
                        {row.affix}
                      </td>
                      <td className="py-2 px-3 text-slate-600">{row.functionAr}</td>
                      <td dir="ltr" className="py-2 px-3 font-en font-extrabold text-teal-700 text-left">
                        {row.newWord}
                      </td>
                      <td className="py-2 px-3 text-slate-700">{row.meaningAr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* 4. SKILLS: Speaking Q&A (Part 1) OR Writing Corner (Part 3) OR Spotlight (Part 2) */}
      {detail.speakingQA && (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-teal-600" />
                {detail.speakingQA.titleAr}
              </h3>
              <p dir="ltr" className="font-en text-xs font-bold text-slate-400 text-left">
                {detail.speakingQA.titleEn}
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            {detail.speakingQA.pairs.map((pair, pi) => (
              <div
                key={pi}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <div dir="ltr" className="font-en text-xs sm:text-sm font-extrabold text-indigo-900 text-left">
                    Q: {pair.qEn}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      speakEnglish(`${pair.qEn} ${pair.aEn}`, {
                        accent: speechAccent,
                        rate: speechRate,
                      })
                    }
                    className="p-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[var(--brand-primary)] shrink-0 cursor-pointer"
                    title="استمع للسؤال والإجابة"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div dir="ltr" className="font-en text-xs sm:text-sm font-bold text-teal-800 text-left">
                  A: {pair.aEn}
                </div>
                <div className="text-xs text-slate-600">{pair.arSummary}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {detail.writingCorner && (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                ورشة الكتابة الاحترافية • Writing Studio
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                <PenTool className="w-4 h-4 text-rose-600" />
                {detail.writingCorner.titleAr}
              </h3>
            </div>
            <button
              type="button"
              onClick={() =>
                speakEnglish(detail.writingCorner!.modelTextEn, {
                  accent: speechAccent,
                  rate: speechRate,
                })
              }
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-xs font-bold text-slate-700 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              استمع للنموذج كاملاً
            </button>
          </div>

          <div dir="ltr" className="font-en text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 rounded-xl px-3.5 py-2.5 border border-slate-200 text-left">
            {detail.writingCorner.definitionEn}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {detail.writingCorner.components.map((c, ci) => (
              <div
                key={ci}
                className="rounded-2xl border border-slate-200 p-3 bg-white space-y-1"
              >
                <div dir="ltr" className="font-en text-xs font-black text-indigo-800 text-left">
                  {c.labelEn}
                </div>
                <div className="text-xs font-bold text-slate-900">{c.labelAr}</div>
                <div className="text-xs text-slate-600">{c.guideAr}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-indigo-50/60 border border-indigo-200 p-4 space-y-2">
            <div dir="ltr" className="font-en text-xs font-black text-indigo-900 text-left">
              {detail.writingCorner.modelTitleEn}
            </div>
            <p
              dir="ltr"
              className="font-en text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line text-left"
            >
              {detail.writingCorner.modelTextEn}
            </p>
            <div className="text-xs text-indigo-950 font-semibold border-t border-indigo-200/80 pt-2">
              {detail.writingCorner.modelSummaryAr}
            </div>
          </div>
        </div>
      )}

      {!detail.speakingQA && !detail.writingCorner && (
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
              {lesson.spotlight.badge}
            </span>
            <span dir="ltr" className="font-en text-xs font-bold text-slate-400">
              {lesson.spotlight.titleEn}
            </span>
          </div>
          <h3 className="text-lg font-extrabold text-slate-900">{lesson.spotlight.titleAr}</h3>
          <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
            {lesson.spotlight.summaryAr}
          </p>
          <div className="space-y-2">
            {lesson.spotlight.keyPoints.map((kp, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 p-3 bg-white">
                <TranslatableText en={kp.en} ar={kp.ar} withAudio enClassName="text-sm font-semibold" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Interactive Sentence Dissector */}
      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
              أداة تفاعلية حصرية
            </span>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mt-1">
              مُفكّك الجمل الذكي: {detail.dissectionTitleAr}
            </h3>
          </div>
          <button
            type="button"
            onClick={() =>
              speakEnglish(fullDissectedSentence, { accent: speechAccent, rate: speechRate })
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-xs font-bold text-slate-700 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            استمع للجملة كاملة
          </button>
        </div>

        <div
          dir="ltr"
          className="flex flex-wrap items-center gap-2 bg-slate-50 rounded-2xl p-4 border border-slate-200 font-en text-left"
        >
          {detail.sentenceDissection.map((part, idx) => {
            const active = selectedPartIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedPartIdx(idx)}
                className={`px-3.5 py-2 rounded-xl text-sm font-extrabold border-2 transition cursor-pointer ${
                  active ? 'scale-105 shadow-sm' : 'bg-white hover:opacity-90'
                }`}
                style={{
                  borderColor: part.color,
                  backgroundColor: active ? part.color : '#ffffff',
                  color: active ? '#ffffff' : part.color,
                }}
              >
                {part.text}
              </button>
            );
          })}
        </div>

        {activeDissectionPart && (
          <div
            className="rounded-2xl border-2 p-4 bg-white space-y-2 transition"
            style={{ borderColor: activeDissectionPart.color }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span
                  dir="ltr"
                  className="font-en text-sm font-black px-2.5 py-1 rounded-lg text-white"
                  style={{ backgroundColor: activeDissectionPart.color }}
                >
                  {activeDissectionPart.text}
                </span>
                <span className="text-sm font-extrabold text-slate-900">
                  {activeDissectionPart.roleAr}
                </span>
                <span dir="ltr" className="font-en text-xs font-bold text-slate-400">
                  ({activeDissectionPart.roleEn})
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  speakEnglish(activeDissectionPart.text, {
                    accent: speechAccent,
                    rate: speechRate,
                  })
                }
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                نطق الجزء
              </button>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              🔎 {activeDissectionPart.tipAr}
            </p>
          </div>
        )}
      </div>

      {/* 6. Memory Hack & Exam Blueprint */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-3xl bg-gradient-to-br from-violet-50 to-white border border-violet-200 p-5 space-y-2.5">
          <div className="flex items-center gap-2 text-sm font-extrabold text-violet-900">
            <Brain className="w-5 h-5 text-violet-600" />
            {detail.mnemonicTitleAr}
          </div>
          <p className="text-xs sm:text-sm text-violet-950 leading-relaxed">{detail.mnemonicAr}</p>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 p-5 space-y-2.5">
          <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-900">
            <Target className="w-5 h-5 text-emerald-600" />
            كيف يأتيك هذا الدرس في ورقة الامتحان؟
          </div>
          <ul className="space-y-2">
            {detail.examBlueprintAr.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                <strong className="text-emerald-800">{item.questionType}:</strong> {item.tipAr}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 7. Instant Comprehension Pulse Check */}
      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-teal-100 text-teal-900">
              اختبر فهمك الفوري (+15 XP)
            </span>
            {isMiniCheckPassed && (
              <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                تم الاجتياز
              </span>
            )}
          </div>
          {onOpenTab && (
            <button
              type="button"
              onClick={() => onOpenTab('worksheet')}
              className="text-xs font-extrabold text-[var(--brand-primary-dark)] hover:underline cursor-pointer"
            >
              انتقل لورقة العمل الكاملة (15 سؤالاً) ←
            </button>
          )}
        </div>

        <TranslatableText
          en={detail.miniCheck.questionEn}
          ar={detail.miniCheck.questionAr}
          withAudio
          enClassName="text-sm sm:text-base font-extrabold"
        />

        <div dir="ltr" className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-en text-left">
          {detail.miniCheck.options.map((opt, oi) => {
            const isChosen = miniSelected === oi;
            const isCorrectOpt = oi === detail.miniCheck.correctIndex;
            let cls =
              'bg-slate-50 border-slate-200 text-slate-800 hover:border-[var(--brand-primary)]';
            if (miniChecked) {
              if (isCorrectOpt) {
                cls = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
              } else if (isChosen && !isCorrectOpt) {
                cls = 'bg-rose-50 border-rose-500 text-rose-900';
              }
            }
            return (
              <button
                key={oi}
                type="button"
                onClick={() => handleSelectMiniOption(oi)}
                className={`px-4 py-2.5 rounded-xl border text-xs sm:text-sm text-left flex items-center justify-between transition cursor-pointer ${cls}`}
              >
                <span>
                  <strong>{String.fromCharCode(65 + oi)})</strong> {opt}
                </span>
                {miniChecked && isCorrectOpt && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {miniChecked && isChosen && !isCorrectOpt && (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {miniChecked && (
          <div
            className={`rounded-2xl p-3.5 text-xs sm:text-sm font-semibold border ${
              miniSelected === detail.miniCheck.correctIndex
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}
          >
            {miniSelected === detail.miniCheck.correctIndex ? '✓ أحسنت! ' : '✗ راجع الشرح: '}
            {detail.miniCheck.explanationAr}
          </div>
        )}
      </div>

      {/* 8. Personal Smart Study Notes */}
      <div className="no-print bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-extrabold text-sm text-slate-900">
            <NotebookPen className="w-4 h-4 text-[var(--brand-primary)]" />
            دفتر ملاحظاتك الذكية لهذا الدرس
          </div>
          {noteSavedToast && (
            <span className="text-xs font-bold text-emerald-600">تم الحفظ تلقائياً ✓</span>
          )}
        </div>
        <textarea
          value={noteDraft}
          onChange={(e) => handleNoteChange(e.target.value)}
          rows={3}
          placeholder="دوّن هنا ملاحظاتك، الكلمات التي تحتاج مراجعتها، أو أمثلة المعلم... (تُضاف تلقائياً عند تصدير مذكرة Word/PDF)"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--brand-primary)] focus:outline-none p-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed"
        />
      </div>

      {/* Smartboard / Focus Presentation Mode Overlay */}
      {smartboardOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 text-white flex flex-col p-4 sm:p-8">
          <div className="max-w-5xl w-full mx-auto flex items-center justify-between gap-3 pb-4 border-b border-white/15">
            <div>
              <div className="text-xs font-bold text-teal-300">
                وضع السبورة التفاعلية • Unit {unit.number} — {lesson.lessonsLabel}
              </div>
              <div className="text-base sm:text-lg font-black">{lesson.titleAr}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLargeFont((v) => !v)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-extrabold cursor-pointer flex items-center gap-1"
                title="تكبير / تصغير الخط"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                {largeFont ? 'A-' : 'A+'}
              </button>
              <button
                type="button"
                onClick={() => setSmartboardOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-rose-600 text-white cursor-pointer"
                aria-label="إغلاق وضع السبورة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-4xl w-full mx-auto flex items-center justify-center py-6 overflow-y-auto">
            {slideIdx === 0 && (
              <div className="w-full bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-5">
                <span className="inline-block text-xs font-extrabold px-3 py-1 rounded-full bg-amber-400 text-slate-950">
                  شريحة 1: التهيئة والأهداف (الوحدة {unit.number} • {lesson.lessonsLabel})
                </span>
                <p dir="ltr" className={`font-en font-extrabold text-left ${largeFont ? 'text-2xl' : 'text-xl'}`}>
                  {detail.hookQuestionEn}
                </p>
                <p className={`text-white/90 ${largeFont ? 'text-xl' : 'text-base'}`}>
                  {detail.hookQuestionAr}
                </p>
                <ul className="space-y-2 pt-2 border-t border-white/15">
                  {detail.objectivesAr.map((o, i) => (
                    <li key={i} className={`flex items-start gap-2 ${largeFont ? 'text-lg' : 'text-sm'}`}>
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {slideIdx >= 1 && slideIdx <= detail.bookGrammarRules.length && (
              <div className="w-full bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-4">
                {(() => {
                  const r = detail.bookGrammarRules[slideIdx - 1];
                  return (
                    <>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-teal-400 text-slate-950">
                          القاعدة #{slideIdx}
                        </span>
                        <span className="text-xs text-teal-200 font-bold">{r.ruleTitleAr}</span>
                      </div>
                      <h3 dir="ltr" className={`font-en font-black text-left ${largeFont ? 'text-3xl' : 'text-2xl'}`}>
                        {r.ruleTitleEn}
                      </h3>
                      <div dir="ltr" className="font-en text-xs sm:text-sm text-amber-200 text-left space-y-1">
                        {r.usageEn.map((u, ui) => (
                          <div key={ui}>• {u}</div>
                        ))}
                      </div>
                      <div className="space-y-2.5 pt-2">
                        {r.structures.slice(0, 4).map((st, si) => (
                          <div key={si} className="bg-slate-900/80 border border-white/15 rounded-2xl p-3.5 space-y-1">
                            <div dir="ltr" className="font-en text-xs font-extrabold text-teal-300 text-left">
                              {st.labelEn}: {st.formulaEn}
                            </div>
                            <div className={`text-white/90 ${largeFont ? 'text-base' : 'text-xs'}`}>
                              {st.structureAr}
                            </div>
                            <div dir="ltr" className="font-en text-xs text-emerald-300 text-left">
                              e.g. {st.exampleEn}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}

            {slideIdx === detail.bookGrammarRules.length + 1 && (
              <div className="w-full bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-5">
                <span className="inline-block text-xs font-extrabold px-3 py-1 rounded-full bg-indigo-400 text-slate-950">
                  تفكيك الجملة النموذجية
                </span>
                <h3 className="text-xl font-black">{detail.dissectionTitleAr}</h3>
                <div dir="ltr" className="flex flex-wrap gap-2.5 bg-slate-900/70 p-4 rounded-2xl font-en text-left">
                  {detail.sentenceDissection.map((part, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-2 rounded-xl font-extrabold text-white"
                      style={{ backgroundColor: part.color }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {detail.sentenceDissection.map((part, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs space-y-1">
                      <div dir="ltr" className="font-en font-extrabold text-teal-300 text-left">
                        {part.text} — {part.roleEn}
                      </div>
                      <div className="font-bold">{part.roleAr}</div>
                      <div className="text-white/75">{part.tipAr}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {slideIdx === detail.bookGrammarRules.length + 2 && (
              <div className="w-full bg-white/10 border border-white/15 rounded-3xl p-6 sm:p-8 space-y-5">
                <span className="inline-block text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-400 text-slate-950">
                  التحقق السريع وشفرة الحفظ
                </span>
                <div className="bg-violet-500/20 border border-violet-300/30 rounded-2xl p-4 space-y-1">
                  <div className="font-extrabold text-violet-200 text-sm">{detail.mnemonicTitleAr}</div>
                  <p className="text-sm text-white/90">{detail.mnemonicAr}</p>
                </div>
                <div className="space-y-2">
                  <div dir="ltr" className="font-en font-extrabold text-lg text-left">
                    {detail.miniCheck.questionEn}
                  </div>
                  <div className="text-sm text-white/80">{detail.miniCheck.questionAr}</div>
                  <div className="text-xs font-bold text-emerald-300 pt-2">
                    ✓ الإجابة الصحيحة: {detail.miniCheck.options[detail.miniCheck.correctIndex]} —{' '}
                    {detail.miniCheck.explanationAr}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="max-w-4xl w-full mx-auto flex items-center justify-between pt-4 border-t border-white/15">
            <button
              type="button"
              disabled={slideIdx === 0}
              onClick={() => setSlideIdx((p) => Math.max(0, p - 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 disabled:opacity-40 text-xs font-extrabold cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
              الشريحة السابقة
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlideIdx(i)}
                  className={`h-2.5 rounded-full transition cursor-pointer ${
                    slideIdx === i ? 'w-7 bg-teal-400' : 'w-2.5 bg-white/30'
                  }`}
                  aria-label={`شريحة ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              disabled={slideIdx === totalSlides - 1}
              onClick={() => setSlideIdx((p) => Math.min(totalSlides - 1, p + 1))}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 disabled:opacity-40 text-xs font-extrabold cursor-pointer"
            >
              الشريحة التالية
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
