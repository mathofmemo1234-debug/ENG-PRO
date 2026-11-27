import React, { useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Lock,
  Pause,
  Play,
  Presentation,
  RotateCcw,
  Search,
  Sparkles,
  Timer,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CURRICULA_META } from '../data/curricula';
import { FOUNDATION_GRAMMAR_TOPICS } from '../data/foundation';
import { CurriculumId } from '../data/types';
import { EGYPT_PREP3_TERM1_UNITS } from '../data/units';
import { FoundationTopicCard } from './FoundationTopicCard';
import { LessonExplanationPanel } from './LessonExplanationPanel';

interface DetailedExplanationsViewProps {
  initialCurriculum?: CurriculumId;
  initialUnitId?: string;
  initialLessonId?: string;
}

export const DetailedExplanationsView: React.FC<DetailedExplanationsViewProps> = ({
  initialCurriculum,
  initialUnitId,
  initialLessonId,
}) => {
  const { activeCurriculum, setActiveCurriculum, setRoute, progress } = useApp();

  const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumId>(
    initialCurriculum ?? activeCurriculum
  );

  // Egypt Prep 3 state
  const [selectedUnitId, setSelectedUnitId] = useState<string>(initialUnitId ?? 'unit-1');
  const [selectedLessonId, setSelectedLessonId] = useState<string>(initialLessonId ?? 'u1-p1');
  const [egyptSearch, setEgyptSearch] = useState('');
  const [egyptFilter, setEgyptFilter] = useState<string>('all');

  // Foundation state
  const [foundationSearch, setFoundationSearch] = useState('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(
    FOUNDATION_GRAMMAR_TOPICS[0].id
  );

  // Pomodoro Focus Mini-Timer
  const [timerMode, setTimerMode] = useState<'focus' | 'break'>('focus');
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (initialCurriculum) {
      setSelectedCurriculum(initialCurriculum);
      setActiveCurriculum(initialCurriculum);
    }
  }, [initialCurriculum]);

  useEffect(() => {
    if (initialUnitId) setSelectedUnitId(initialUnitId);
    if (initialLessonId) setSelectedLessonId(initialLessonId);
  }, [initialUnitId, initialLessonId]);

  useEffect(() => {
    if (!timerRunning) return;
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning]);

  const switchTimerMode = (mode: 'focus' | 'break') => {
    setTimerRunning(false);
    setTimerMode(mode);
    setSecondsLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const formatClock = (secs: number) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, '0');
    const s = (secs % 60).toString()
      .padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSwitchCurriculum = (cid: CurriculumId) => {
    setSelectedCurriculum(cid);
    setActiveCurriculum(cid);
  };

  const filteredUnits = useMemo(() => {
    const q = egyptSearch.trim().toLowerCase();
    const bookmarked = progress.bookmarkedExplanations ?? [];

    return EGYPT_PREP3_TERM1_UNITS.map((unit) => {
      if (egyptFilter.startsWith('unit-') && unit.id !== egyptFilter) {
        return { ...unit, lessons: [] };
      }
      const lessons = unit.lessons.filter((l) => {
        if (egyptFilter === 'bookmarked' && !bookmarked.includes(l.id)) return false;
        if (egyptFilter === 'incomplete' && progress.completedLessons.includes(l.id)) return false;
        if (!q) return true;
        const haystack = [
          l.titleAr,
          l.titleEn,
          l.lessonsLabel,
          ...l.grammarBlocks.map((g) => `${g.titleAr} ${g.titleEn}`),
          ...l.vocab.map((v) => `${v.word} ${v.arabic}`),
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(q);
      });
      return { ...unit, lessons };
    }).filter((u) => u.lessons.length > 0);
  }, [egyptSearch, egyptFilter, progress.bookmarkedExplanations, progress.completedLessons]);

  const activeUnit =
    EGYPT_PREP3_TERM1_UNITS.find((u) => u.id === selectedUnitId) ?? EGYPT_PREP3_TERM1_UNITS[0];
  const activeLesson =
    activeUnit.lessons.find((l) => l.id === selectedLessonId) ?? activeUnit.lessons[0];

  const filteredTopics = useMemo(() => {
    const q = foundationSearch.trim().toLowerCase();
    if (!q) return FOUNDATION_GRAMMAR_TOPICS;
    return FOUNDATION_GRAMMAR_TOPICS.filter((t) =>
      `${t.titleAr} ${t.titleEn} ${t.usageEn} ${t.summaryAr} ${t.keywords.join(' ')}`
        .toLowerCase()
        .includes(q)
    );
  }, [foundationSearch]);

  const activeTopic =
    FOUNDATION_GRAMMAR_TOPICS.find((t) => t.id === selectedTopicId) ??
    FOUNDATION_GRAMMAR_TOPICS[0];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Hero Banner + Pomodoro Focus Mini-Timer */}
      <section
        className="rounded-3xl p-6 sm:p-7 text-white shadow-xl space-y-5"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full">
              <Presentation className="w-4 h-4" />
              مركز الشرح المفصل للدروس — {CURRICULA_META[selectedCurriculum].nameAr}
            </div>
            <h1 className="text-2xl sm:text-3xl font-black leading-tight">
              استعراض الدروس بالشرح المفصل والقواعد
            </h1>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              جميع القواعد النحوية بالإنجليزية مع شرح تركيبها بالعربية، وتطبيقات عملية محلولة،
              ومفاتيح لغوية ومحادثات وورشة كتابة متكاملة بدون تكرار أو ازدواجية.
            </p>
          </div>

          {/* Pomodoro Focus Mini-Timer */}
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-3.5 min-w-[230px] space-y-2">
            <div className="flex items-center justify-between text-xs font-extrabold">
              <span className="flex items-center gap-1.5">
                <Timer className="w-4 h-4 text-amber-300" />
                مؤقت التركيز الذكي
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => switchTimerMode('focus')}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold cursor-pointer ${
                    timerMode === 'focus' ? 'bg-white text-slate-900' : 'bg-white/15 text-white'
                  }`}
                >
                  25 د
                </button>
                <button
                  type="button"
                  onClick={() => switchTimerMode('break')}
                  className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold cursor-pointer ${
                    timerMode === 'break' ? 'bg-white text-slate-900' : 'bg-white/15 text-white'
                  }`}
                >
                  5 د
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span dir="ltr" className="font-en text-2xl font-black tracking-wider">
                {formatClock(secondsLeft)}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setTimerRunning((r) => !r)}
                  className="p-2 rounded-xl bg-white text-slate-900 hover:scale-105 transition cursor-pointer"
                  aria-label={timerRunning ? 'إيقاف المؤقت' : 'بدء المؤقت'}
                >
                  {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  type="button"
                  onClick={() => switchTimerMode(timerMode)}
                  className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition cursor-pointer"
                  aria-label="إعادة ضبط المؤقت"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Per-Curriculum Explanation Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
          {(
            [
              {
                id: 'foundation' as const,
                label: 'شرح قسم التأسيس الشامل',
                sub: '10 محاور تأسيسية (Let’s Remember)',
                icon: Sparkles,
              },
              {
                id: 'egypt' as const,
                label: 'شرح المنهج المصري 🇪🇬',
                sub: '6 وحدات • 18 درساً مفصلاً',
                icon: BookOpen,
              },
              {
                id: 'saudi' as const,
                label: 'شرح المنهج السعودي 🇸🇦',
                sub: 'قالب الشرح جاهز للفصلين',
                icon: Compass,
              },
            ] as const
          ).map((c) => {
            const Icon = c.icon;
            const active = selectedCurriculum === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => handleSwitchCurriculum(c.id)}
                className={`text-right p-3 rounded-2xl border transition flex items-center justify-between gap-2 cursor-pointer ${
                  active
                    ? 'bg-white text-slate-900 border-white shadow-md'
                    : 'bg-white/15 hover:bg-white/25 text-white border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      active
                        ? 'bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)]'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    <Presentation className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-extrabold">{c.label}</div>
                    <div className={`text-[11px] ${active ? 'text-slate-500' : 'text-white/80'}`}>
                      {c.sub}
                    </div>
                  </div>
                </div>
                <Icon className="w-4 h-4 shrink-0 opacity-75" />
              </button>
            );
          })}
        </div>
      </section>

      {/* CURRICULUM 1: EGYPT PREP 3 TERM 1 */}
      {selectedCurriculum === 'egypt' && (
        <div className="space-y-5">
          <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-4 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative flex-1 min-w-[230px]">
                <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={egyptSearch}
                  onChange={(e) => setEgyptSearch(e.target.value)}
                  placeholder="ابحث عن درس، قاعدة جرامر، أو كلمة إنجليزية/عربية..."
                  className="w-full pr-10 pl-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--brand-primary)] focus:outline-none text-xs sm:text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'كل الدروس (18)' },
                  { id: 'bookmarked', label: 'المحفوظة ⭐' },
                  { id: 'incomplete', label: 'غير المكتملة' },
                  ...EGYPT_PREP3_TERM1_UNITS.map((u) => ({
                    id: u.id,
                    label: `Unit ${u.number}`,
                  })),
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setEgyptFilter(f.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      egyptFilter === f.id
                        ? 'bg-[var(--brand-primary)] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-[84px] lg:max-h-[calc(100vh-110px)] lg:overflow-y-auto pl-1">
              {filteredUnits.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 text-center text-xs font-bold text-slate-500">
                  لا توجد دروس مطابقة لبحثك الحالي.
                </div>
              ) : (
                filteredUnits.map((unit) => (
                  <div
                    key={unit.id}
                    className="bg-white rounded-3xl border border-[var(--border-soft)] overflow-hidden shadow-xs"
                  >
                    <div
                      className="px-4 py-2.5 text-white flex items-center justify-between"
                      style={{ backgroundColor: unit.accentColor }}
                    >
                      <span className="text-xs font-extrabold">
                        Unit {unit.number}: {unit.titleAr}
                      </span>
                      <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                        {unit.lessons.length} دروس
                      </span>
                    </div>
                    <div className="p-2 space-y-1.5">
                      {unit.lessons.map((lesson) => {
                        const isSelected = activeLesson.id === lesson.id;
                        const isDone = progress.completedLessons.includes(lesson.id);
                        const isSaved = (progress.bookmarkedExplanations ?? []).includes(lesson.id);
                        return (
                          <button
                            key={lesson.id}
                            type="button"
                            onClick={() => {
                              setSelectedUnitId(unit.id);
                              setSelectedLessonId(lesson.id);
                            }}
                            className={`w-full text-right p-3 rounded-2xl border transition cursor-pointer space-y-1 ${
                              isSelected
                                ? 'bg-[var(--brand-primary-soft)] border-[var(--brand-primary)] text-[var(--brand-primary-dark)]'
                                : 'bg-slate-50/70 border-transparent hover:bg-slate-100 text-slate-800'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold">
                                <Presentation className="w-3.5 h-3.5 text-[var(--brand-primary)]" />
                                {lesson.lessonsLabel}
                              </span>
                              <div className="flex items-center gap-1">
                                {isSaved && (
                                  <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                                )}
                                {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                              </div>
                            </div>
                            <div className="text-xs sm:text-sm font-extrabold leading-snug">
                              {lesson.titleAr}
                            </div>
                            <div dir="ltr" className="font-en text-[11px] text-slate-500 text-left">
                              {lesson.grammarBlocks[0]?.titleEn}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="lg:col-span-8 space-y-4">
              <LessonExplanationPanel
                unit={activeUnit}
                lesson={activeLesson}
                onOpenTab={(t) =>
                  setRoute({
                    page: 'lesson',
                    unitId: activeUnit.id,
                    lessonId: activeLesson.id,
                    tab: t,
                  })
                }
              />

              <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-4 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-extrabold text-slate-700">
                  أكمل رحلتك داخل مساحة {activeLesson.lessonsLabel}:
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setRoute({
                        page: 'lesson',
                        unitId: activeUnit.id,
                        lessonId: activeLesson.id,
                        tab: 'vocab',
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-50 text-teal-800 border border-teal-200 text-xs font-extrabold cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    ملخص المفردات المرئي
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setRoute({
                        page: 'lesson',
                        unitId: activeUnit.id,
                        lessonId: activeLesson.id,
                        tab: 'worksheet',
                      })
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-extrabold cursor-pointer"
                  >
                    <ClipboardCheck className="w-3.5 h-3.5" />
                    حل ورقة العمل (10+5)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CURRICULUM 2: FOUNDATION (Zero-Duplication Shared Card) */}
      {selectedCurriculum === 'foundation' && (
        <div className="space-y-5">
          <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={foundationSearch}
                onChange={(e) => setFoundationSearch(e.target.value)}
                placeholder="ابحث في قواعد التأسيس العشرة (الأزمنة، بناء الجملة، المحادثة...)"
                className="w-full pr-10 pl-4 py-2.5 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--brand-primary)] focus:outline-none text-xs sm:text-sm"
              />
            </div>
            <button
              type="button"
              onClick={() => setRoute({ page: 'foundation', tab: 'concept-maps' })}
              className="px-3.5 py-2 rounded-xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] text-xs font-extrabold cursor-pointer"
            >
              فتح خرائط المفاهيم وطرق التعلم الذكي ←
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            <div className="lg:col-span-4 space-y-2">
              {filteredTopics.map((topic, idx) => (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-right p-3.5 rounded-2xl border transition cursor-pointer ${
                    activeTopic.id === topic.id
                      ? 'bg-[var(--brand-primary)] text-white border-transparent shadow-md'
                      : 'bg-white border-[var(--border-soft)] hover:bg-[var(--surface-muted)] text-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-extrabold opacity-85">
                    <span className="inline-flex items-center gap-1.5">
                      <Presentation className="w-3.5 h-3.5" />
                      محور #{idx + 1}
                    </span>
                    <span>تأسيس</span>
                  </div>
                  <div className="font-extrabold text-sm mt-1">{topic.titleAr}</div>
                  <div dir="ltr" className="font-en text-xs opacity-80 text-left mt-0.5">
                    {topic.titleEn}
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <FoundationTopicCard
                topic={activeTopic}
                onJumpToPrep3Lesson={(uid, lid) => {
                  setSelectedCurriculum('egypt');
                  setActiveCurriculum('egypt');
                  setSelectedUnitId(uid);
                  setSelectedLessonId(lid);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* CURRICULUM 3: SAUDI CURRICULUM (SOURCE-EXCLUSIVE PREVIEW) */}
      {selectedCurriculum === 'saudi' && (
        <div className="space-y-5">
          <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 shadow-xs space-y-4">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-100 text-emerald-900">
                <Lock className="w-3.5 h-3.5" />
                خطة التوسّع المنهجي
              </span>
              <h2 className="text-xl font-black text-slate-900">
                محرك الشرح المفصل للمنهج السعودي 🇸🇦 (الفصلان الأول والثاني)
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                هذا المسار قيد التجهيز ضمن خطة تطوير المناهج في المنصة، وسيُطلق تلقائياً عبر
                محرك الشرح الموحّد (قواعد إنجليزية + شرح تركيب عربي + تطبيقات عملية محلولة).
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleSwitchCurriculum('foundation')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[var(--brand-primary)] text-white text-xs font-extrabold cursor-pointer"
              >
                <Presentation className="w-4 h-4" />
                ابدأ بشرح قواعد التأسيس الشامل (متاح الآن لجميع الطلاب)
              </button>
              <button
                type="button"
                onClick={() => handleSwitchCurriculum('egypt')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                استعراض نموذج الشرح الكامل (المنهج المصري — ٣ إعدادي)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
