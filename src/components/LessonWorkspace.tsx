import React, { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  FileDown,
  FileText,
  Presentation,
  Printer,
  RotateCcw,
  Sparkles,
  Star,
  Volume2,
  XCircle,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getUnitById } from '../data/units';
import { LessonModule, UnitData } from '../data/types';
import { speakEnglish } from '../utils/speech';
import {
  copyWorksheetForWord,
  downloadWordDoc,
  printWorksheetPdf,
} from '../utils/worksheetExport';
import { LessonDiscussion } from './LessonDiscussion';
import { LessonExplanationPanel } from './LessonExplanationPanel';
import { TranslatableText } from './TranslatableText';

interface LessonWorkspaceProps {
  unitId: string;
  lessonId: string;
  initialTab?: 'explain' | 'vocab' | 'grammar' | 'worksheet';
}

export const LessonWorkspace: React.FC<LessonWorkspaceProps> = ({
  unitId,
  lessonId,
  initialTab = 'explain',
}) => {
  const {
    progress,
    toggleLessonComplete,
    toggleStarVocab,
    recordWorksheetScore,
    speechAccent,
    speechRate,
    setRoute,
  } = useApp();

  const unit: UnitData | undefined = getUnitById(unitId);
  const lesson: LessonModule | undefined = unit?.lessons.find((l) => l.id === lessonId);

  const normalizeTab = (t?: string): 'explain' | 'vocab' | 'worksheet' =>
    t === 'vocab' || t === 'worksheet' ? t : 'explain';

  const [tab, setTab] = useState<'explain' | 'vocab' | 'worksheet'>(normalizeTab(initialTab));
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [includeKeyInExport, setIncludeKeyInExport] = useState(true);
  const [copyToast, setCopyToast] = useState(false);

  useEffect(() => {
    setTab(normalizeTab(initialTab));
  }, [initialTab]);

  useEffect(() => {
    setMcqAnswers({});
    setTfAnswers({});
    setSubmitted(false);
  }, [lessonId]);

  if (!unit || !lesson) {
    return (
      <div className="bg-white rounded-3xl p-8 text-center border border-slate-200">
        <p className="font-bold text-slate-700">تعذر العثور على الدرس المطلوب.</p>
      </div>
    );
  }

  const isCompleted = progress.completedLessons.includes(lesson.id);
  const savedScore = progress.worksheetScores[lesson.id];

  const handleSpeakLessonSummary = () => {
    const vocabList = lesson.vocab.slice(0, 6).map((v) => v.word).join(', ');
    const grammarTitle = lesson.grammarBlocks[0]?.titleEn ?? '';
    speakEnglish(
      `Unit ${unit.number}, ${unit.titleEn}. ${lesson.lessonsLabel}: ${lesson.titleEn}. Key vocabulary includes: ${vocabList}. Grammar focus: ${grammarTitle}.`,
      { accent: speechAccent, rate: speechRate }
    );
  };

  // Worksheet scoring
  const mcqCorrect = lesson.worksheet.mcq.filter(
    (q) => mcqAnswers[q.id] === q.correctIndex
  ).length;
  const tfCorrect = lesson.worksheet.trueFalse.filter(
    (q) => tfAnswers[q.id] === q.answer
  ).length;
  const totalScore = mcqCorrect + tfCorrect;
  const totalQuestions = lesson.worksheet.mcq.length + lesson.worksheet.trueFalse.length;

  const handleSubmitWorksheet = () => {
    setSubmitted(true);
    recordWorksheetScore(lesson.id, totalScore, totalQuestions);
  };

  const handleResetWorksheet = () => {
    setMcqAnswers({});
    setTfAnswers({});
    setSubmitted(false);
  };

  const handleCopyWord = async () => {
    const ok = await copyWorksheetForWord(unit, lesson, includeKeyInExport);
    if (ok) {
      setCopyToast(true);
      setTimeout(() => setCopyToast(false), 2600);
    }
  };

  const categoryLabels: Record<string, { label: string; cls: string }> = {
    key: { label: 'مفردات رئيسية', cls: 'bg-teal-100 text-teal-800' },
    reading: { label: 'قراءة واستماع', cls: 'bg-indigo-100 text-indigo-800' },
    expression: { label: 'تعبير وحرف جر', cls: 'bg-amber-100 text-amber-800' },
    story: { label: 'مفردات القصة', cls: 'bg-rose-100 text-rose-800' },
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Breadcrumb & Header Card */}
      <div className="no-print bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-500">
          <div className="flex items-center flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setRoute({ page: 'home' })}
              className="hover:text-[var(--brand-primary)] cursor-pointer"
            >
              المنهج المصري (الفصل الأول)
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => setRoute({ page: 'unit-summary', unitId: unit.id })}
              className="hover:text-[var(--brand-primary)] cursor-pointer"
            >
              الوحدة {unit.number}: {unit.titleAr}
            </button>
            <span>/</span>
            <span className="text-[var(--brand-primary-dark)]">{lesson.lessonsLabel}</span>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            الوحدة {unit.number} • الجزء {lesson.partNumber}
          </span>
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">{lesson.titleAr}</h1>
            <p dir="ltr" className="font-en text-sm font-bold text-slate-500 text-left">
              {lesson.lessonsLabel}: {lesson.titleEn}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleSpeakLessonSummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--surface-muted)] border border-[var(--border-soft)] text-[var(--brand-primary-dark)] text-xs font-extrabold hover:opacity-90 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              ملخص صوتي للدرس
            </button>
            <button
              type="button"
              onClick={() => toggleLessonComplete(lesson.id)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? 'تم إتقان الدرس ✓' : 'تحديد كمكتمل'}
            </button>
          </div>
        </div>

        {/* Focused 3-Tab Switcher (Zero Duplication) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-2xl">
          {[
            { id: 'explain' as const, label: 'الشرح المفصل والقواعد', icon: Presentation },
            { id: 'vocab' as const, label: 'ملخص المفردات المرئي', icon: BookOpen },
            {
              id: 'worksheet' as const,
              label: `ورقة العمل (10+5)${savedScore ? ` • ${savedScore.score}/${savedScore.total}` : ''}`,
              icon: ClipboardCheck,
            },
          ].map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer ${
                  active
                    ? 'bg-[var(--brand-primary)] text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 0: Detailed Lesson Explanation */}
      {tab === 'explain' && (
        <LessonExplanationPanel
          unit={unit}
          lesson={lesson}
          onOpenTab={(t) => setTab(t)}
          compactHeader
        />
      )}

      {/* TAB 1: Visual Vocabulary Summary */}
      {tab === 'vocab' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.vocab.map((item) => {
              const starred = progress.starredVocab.includes(item.id);
              const badge = categoryLabels[item.category] ?? categoryLabels.key;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-[var(--border-soft)] p-4 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${badge.cls}`}>
                        {badge.label}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() =>
                            speakEnglish(item.word, { accent: speechAccent, rate: speechRate })
                          }
                          className="p-1.5 rounded-full bg-slate-100 hover:bg-[var(--brand-primary-soft)] text-slate-600 hover:text-[var(--brand-primary-dark)] cursor-pointer"
                          title="نطق الكلمة"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleStarVocab(item.id)}
                          className={`p-1.5 rounded-full transition cursor-pointer ${
                            starred
                              ? 'bg-amber-100 text-amber-500'
                              : 'bg-slate-100 text-slate-400 hover:text-amber-500'
                          }`}
                          title="حفظ في معجمي"
                        >
                          <Star className={`w-3.5 h-3.5 ${starred ? 'fill-amber-400' : ''}`} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <div dir="ltr" className="flex items-baseline gap-2 text-left">
                        <span className="font-en text-lg font-black text-slate-900">{item.word}</span>
                        <span className="font-en text-xs font-bold text-slate-400">({item.pos})</span>
                      </div>
                      <div dir="ltr" className="font-en text-[11px] text-slate-400 text-left">
                        {item.phonetic}
                      </div>
                      <div className="text-sm font-extrabold text-[var(--brand-primary-dark)] mt-1">
                        {item.arabic}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-2.5 border border-slate-200/70">
                    <TranslatableText
                      en={item.exampleEn}
                      ar={item.exampleAr}
                      withAudio
                      enClassName="text-xs font-semibold"
                      arClassName="text-[11px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Synonyms & Antonyms Visual Matrix */}
          {lesson.synonymsAntonyms.length > 0 && (
            <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 shadow-xs space-y-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                خريطة المرادفات والمتضادات (Synonyms & Antonyms)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                      <th className="py-2.5 px-3 text-right font-extrabold">الكلمة</th>
                      <th className="py-2.5 px-3 text-right font-extrabold text-emerald-700">المرادف (Synonym)</th>
                      <th className="py-2.5 px-3 text-right font-extrabold text-rose-700">المضاد (Antonym)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lesson.synonymsAntonyms.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-100 last:border-0">
                        <td className="py-2.5 px-3">
                          <span dir="ltr" className="font-en font-extrabold text-slate-900">
                            {row.word}
                          </span>
                          <span className="text-xs text-slate-500 mr-2">({row.arabic})</span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span
                            dir="ltr"
                            className="font-en font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-lg"
                          >
                            {row.synonym}
                          </span>
                          <span className="text-xs text-slate-500 mr-1.5">{row.synonymAr}</span>
                        </td>
                        <td className="py-2.5 px-3">
                          <span
                            dir="ltr"
                            className="font-en font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-lg"
                          >
                            {row.antonym}
                          </span>
                          <span className="text-xs text-slate-500 mr-1.5">{row.antonymAr}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Interactive Worksheet (10 MCQ + 5 True/False) + Word/PDF Export */}
      {tab === 'worksheet' && (
        <div className="space-y-5">
          {/* Export & Print Toolbar */}
          <div className="no-print bg-white rounded-3xl border border-[var(--border-soft)] p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="font-extrabold text-sm text-slate-900">
                ورقة العمل التفاعلية (10 اختيار من متعدد + 5 صواب وخطأ)
              </div>
              <label className="inline-flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeKeyInExport}
                  onChange={(e) => setIncludeKeyInExport(e.target.checked)}
                  className="rounded accent-[var(--brand-primary)]"
                />
                تضمين نموذج الإجابة والشرح عند النسخ أو التصدير
              </label>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleCopyWord}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 text-xs font-extrabold cursor-pointer"
              >
                {copyToast ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                {copyToast ? 'تم النسخ لـ Word ✓' : 'نسخ لـ Word'}
              </button>
              <button
                type="button"
                onClick={() => downloadWordDoc(unit, lesson, includeKeyInExport)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 text-xs font-extrabold cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                تنزيل Word (.doc)
              </button>
              <button
                type="button"
                onClick={() => printWorksheetPdf(unit, lesson, includeKeyInExport)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-extrabold cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                طباعة / تصدير PDF
              </button>
            </div>
          </div>

          {/* Result Summary Banner */}
          {submitted && (
            <div className="rounded-3xl p-5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10 text-amber-200 shrink-0" />
                <div>
                  <div className="text-lg font-black">
                    نتيجتك: {totalScore} من {totalQuestions} ({Math.round((totalScore / totalQuestions) * 100)}%)
                  </div>
                  <div className="text-xs opacity-90">
                    {totalScore >= 12
                      ? 'أداء ممتاز! أنت متمكن من مفردات وقواعد هذا الدرس.'
                      : 'بداية جيدة! راجع التفسيرات بالأسفل وأعد المحاولة لرفع درجتك.'}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handleResetWorksheet}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-teal-900 font-extrabold text-xs cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                إعادة الحل
              </button>
            </div>
          )}

          {/* Section 1: 10 MCQ */}
          <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[var(--brand-primary)]" />
                أولاً: الاختيار من متعدد (10 أسئلة)
              </h3>
              <span className="text-xs font-bold text-slate-500">
                تمت الإجابة على {Object.keys(mcqAnswers).length}/10
              </span>
            </div>

            <div className="space-y-4">
              {lesson.worksheet.mcq.map((q, idx) => {
                const chosen = mcqAnswers[q.id];
                const isCorrect = chosen === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className="print-break-avoid rounded-2xl border border-slate-200 p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <TranslatableText
                          en={`${idx + 1}. ${q.stemEn}`}
                          ar={q.stemAr}
                          withAudio
                          enClassName="font-bold text-sm"
                        />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 shrink-0">
                        {q.skill === 'vocab' ? 'مفردات' : q.skill === 'grammar' ? 'جرامر' : 'قراءة'}
                      </span>
                    </div>

                    <div dir="ltr" className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-en text-left">
                      {q.options.map((opt, oi) => {
                        const selected = chosen === oi;
                        let btnCls = 'bg-slate-50 border-slate-200 hover:border-[var(--brand-primary)] text-slate-800';
                        if (submitted) {
                          if (oi === q.correctIndex) {
                            btnCls = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                          } else if (selected && oi !== q.correctIndex) {
                            btnCls = 'bg-rose-50 border-rose-500 text-rose-900';
                          }
                        } else if (selected) {
                          btnCls = 'bg-[var(--brand-primary-soft)] border-[var(--brand-primary)] text-[var(--brand-primary-dark)] font-bold';
                        }
                        return (
                          <button
                            key={oi}
                            type="button"
                            disabled={submitted}
                            onClick={() => setMcqAnswers((prev) => ({ ...prev, [q.id]: oi }))}
                            className={`px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm text-left flex items-center justify-between transition cursor-pointer ${btnCls}`}
                          >
                            <span>
                              <strong>{String.fromCharCode(65 + oi)})</strong> {opt}
                            </span>
                            {submitted && oi === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {submitted && selected && oi !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div
                        className={`text-xs px-3 py-2 rounded-xl font-semibold ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                            : 'bg-amber-50 text-amber-900 border border-amber-200'
                        }`}
                      >
                        {isCorrect ? '✓ إجابة صحيحة — ' : '✗ التفسير: '}
                        {q.explanationAr}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 2: 5 True / False */}
          <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">
                ثانياً: أسئلة الصواب والخطأ (5 أسئلة — True / False)
              </h3>
              <span className="text-xs font-bold text-slate-500">
                تمت الإجابة على {Object.keys(tfAnswers).length}/5
              </span>
            </div>

            <div className="space-y-3">
              {lesson.worksheet.trueFalse.map((q, idx) => {
                const chosen = tfAnswers[q.id];
                const isCorrect = chosen === q.answer;
                return (
                  <div
                    key={q.id}
                    className="print-break-avoid rounded-2xl border border-slate-200 p-4 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <TranslatableText
                          en={`${idx + 1}. ${q.statementEn}`}
                          ar={q.statementAr}
                          withAudio
                          enClassName="font-bold text-sm"
                        />
                      </div>
                      <div dir="ltr" className="flex gap-2 shrink-0 font-en">
                        {[
                          { val: true, label: 'True ✓' },
                          { val: false, label: 'False ✗' },
                        ].map((btn) => {
                          const selected = chosen === btn.val;
                          let cls = 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[var(--brand-primary)]';
                          if (submitted) {
                            if (btn.val === q.answer) {
                              cls = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold';
                            } else if (selected && btn.val !== q.answer) {
                              cls = 'bg-rose-100 border-rose-500 text-rose-900';
                            }
                          } else if (selected) {
                            cls = 'bg-[var(--brand-primary)] border-[var(--brand-primary)] text-white font-bold';
                          }
                          return (
                            <button
                              key={String(btn.val)}
                              type="button"
                              disabled={submitted}
                              onClick={() =>
                                setTfAnswers((prev) => ({ ...prev, [q.id]: btn.val }))
                              }
                              className={`px-3.5 py-2 rounded-xl border text-xs font-bold transition cursor-pointer ${cls}`}
                            >
                              {btn.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {submitted && (
                      <div
                        className={`text-xs px-3 py-2 rounded-xl font-semibold ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                            : 'bg-amber-50 text-amber-900 border border-amber-200'
                        }`}
                      >
                        {q.explanationAr}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!submitted && (
              <div className="pt-2 flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmitWorksheet}
                  className="px-8 py-3 rounded-2xl bg-[var(--brand-primary)] text-white font-extrabold text-sm shadow-md hover:opacity-95 transition cursor-pointer"
                >
                  تصحيح ورقة العمل وعرض النتيجة ({totalQuestions} سؤالاً)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Next Step in Unit Bar */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 bg-white rounded-2xl border border-[var(--border-soft)] p-4">
        <div className="text-xs font-bold text-slate-600">
          انتقل بسهولة بين أجزاء الوحدة {unit.number}:
        </div>
        <div className="flex flex-wrap gap-2">
          {unit.lessons.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setRoute({ page: 'lesson', unitId: unit.id, lessonId: l.id })}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                l.id === lesson.id
                  ? 'bg-[var(--brand-primary)] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {l.lessonsLabel}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setRoute({ page: 'unit-summary', unitId: unit.id })}
            className="px-3 py-1.5 rounded-xl text-xs font-extrabold bg-amber-100 text-amber-900 hover:bg-amber-200 cursor-pointer"
          >
            ملخص الوحدة {unit.number}
          </button>
        </div>
      </div>

      {/* Student Discussion Below Every Lesson */}
      <LessonDiscussion lessonId={lesson.id} seeds={lesson.seedDiscussions} />
    </div>
  );
};
