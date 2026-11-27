import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  ChevronDown,
  ChevronLeft,
  Compass,
  FolderTree,
  GitBranch,
  GraduationCap,
  Layers,
  LayoutDashboard,
  Lock,
  Mic,
  Presentation,
  Sparkles,
  Target,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EGYPT_PREP3_TERM1_UNITS } from '../data/units';

interface CurriculumTreeSidebarProps {
  onNavigateClose?: () => void;
}

export const CurriculumTreeSidebar: React.FC<CurriculumTreeSidebarProps> = ({
  onNavigateClose,
}) => {
  const {
    route,
    setRoute,
    setActiveCurriculum,
    progress,
  } = useApp();

  const [openBranches, setOpenBranches] = useState<Record<string, boolean>>({
    foundation: true,
    egypt: true,
    egyptTerm1: true,
    saudi: false,
    tools: true,
  });
  const [openUnitId, setOpenUnitId] = useState<string>('unit-1');

  const toggleBranch = (key: string) => {
    setOpenBranches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const navigate = (r: typeof route, curr?: 'egypt' | 'saudi' | 'foundation') => {
    if (curr) setActiveCurriculum(curr);
    setRoute(r);
    onNavigateClose?.();
  };

  return (
    <aside className="w-full h-full overflow-y-auto p-3.5 space-y-2.5 text-sm">
      {/* Home Root */}
      <button
        type="button"
        onClick={() => navigate({ page: 'home' })}
        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl font-bold transition cursor-pointer ${
          route.page === 'home'
            ? 'bg-[var(--brand-primary)] text-white shadow-sm'
            : 'bg-white hover:bg-[var(--surface-muted)] text-slate-800 border border-[var(--border-soft)]'
        }`}
      >
        <FolderTree className="w-4 h-4 shrink-0" />
        <span>بوابة المناهج الرئيسية</span>
      </button>

      {/* Branch 1: Foundation */}
      <div className="rounded-2xl bg-white border border-[var(--border-soft)] overflow-hidden">
        <button
          type="button"
          onClick={() => toggleBranch('foundation')}
          className="w-full flex items-center justify-between px-3 py-2.5 font-bold text-violet-800 bg-violet-50/70 hover:bg-violet-100/70 transition cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-600" />
            قسم التأسيس الشامل
          </span>
          {openBranches.foundation ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
        {openBranches.foundation && (
          <div className="p-2 space-y-1 border-t border-violet-100 pr-4">
            <button
              type="button"
              onClick={() => navigate({ page: 'explanations', curriculum: 'foundation' }, 'foundation')}
              className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-2 transition cursor-pointer ${
                route.page === 'explanations' && (route.curriculum ?? 'foundation') === 'foundation'
                  ? 'bg-violet-600 text-white'
                  : 'bg-violet-50 text-violet-900 hover:bg-violet-100'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 shrink-0" />
              الشرح المفصل لدروس التأسيس
            </button>
            <button
              type="button"
              onClick={() => navigate({ page: 'foundation', tab: 'grammar' }, 'foundation')}
              className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                route.page === 'foundation' && route.tab !== 'smart-learning' && route.tab !== 'concept-maps'
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-700 hover:bg-violet-50'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              قواعد التأسيس (Let’s Remember)
            </button>
            <button
              type="button"
              onClick={() => navigate({ page: 'foundation', tab: 'smart-learning' }, 'foundation')}
              className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                route.page === 'foundation' && route.tab === 'smart-learning'
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-700 hover:bg-violet-50'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              طرق التعلم الذكي
            </button>
            <button
              type="button"
              onClick={() => navigate({ page: 'foundation', tab: 'concept-maps' }, 'foundation')}
              className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition cursor-pointer ${
                route.page === 'foundation' && route.tab === 'concept-maps'
                  ? 'bg-violet-600 text-white'
                  : 'text-slate-700 hover:bg-violet-50'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              خرائط المفاهيم التفاعلية
            </button>
          </div>
        )}
      </div>

      {/* Branch 2: Egyptian Curriculum */}
      <div className="rounded-2xl bg-white border border-[var(--border-soft)] overflow-hidden">
        <button
          type="button"
          onClick={() => toggleBranch('egypt')}
          className="w-full flex items-center justify-between px-3 py-2.5 font-bold text-teal-900 bg-teal-50/70 hover:bg-teal-100/70 transition cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-teal-600" />
            المنهج المصري 🇪🇬
          </span>
          {openBranches.egypt ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>

        {openBranches.egypt && (
          <div className="p-2 space-y-1.5 border-t border-teal-100">
            <button
              type="button"
              onClick={() => navigate({ page: 'explanations', curriculum: 'egypt' }, 'egypt')}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-extrabold transition cursor-pointer ${
                route.page === 'explanations' && (route.curriculum ?? 'egypt') === 'egypt'
                  ? 'bg-teal-600 text-white'
                  : 'bg-teal-50/90 text-teal-900 hover:bg-teal-100'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 shrink-0" />
              <span>الشرح المفصل لدروس المنهج (18 درساً)</span>
            </button>

            {/* Term 1 (Active) */}
            <button
              type="button"
              onClick={() => toggleBranch('egyptTerm1')}
              className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold text-teal-800 bg-teal-50 hover:bg-teal-100 transition cursor-pointer"
            >
              <span>الفصل الأول — ٣ إعدادي (2026/2027)</span>
              {openBranches.egyptTerm1 ? (
                <ChevronDown className="w-3.5 h-3.5" />
              ) : (
                <ChevronLeft className="w-3.5 h-3.5" />
              )}
            </button>

            {openBranches.egyptTerm1 && (
              <div className="pr-2 space-y-1 border-r-2 border-teal-200 mr-2">
                {EGYPT_PREP3_TERM1_UNITS.map((unit) => {
                  const isExpanded = openUnitId === unit.id;
                  const completedInUnit = unit.lessons.filter((l) =>
                    progress.completedLessons.includes(l.id)
                  ).length;

                  return (
                    <div key={unit.id} className="space-y-0.5">
                      <button
                        type="button"
                        onClick={() => setOpenUnitId(isExpanded ? '' : unit.id)}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                          (route.page === 'lesson' || route.page === 'unit-summary') &&
                          route.unitId === unit.id
                            ? 'bg-teal-600 text-white'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate text-right">
                          U{unit.number}: {unit.titleAr}
                        </span>
                        <span className="flex items-center gap-1 shrink-0">
                          <span className="text-[10px] opacity-80">
                            {completedInUnit}/{unit.lessons.length}
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="w-3 h-3" />
                          ) : (
                            <ChevronLeft className="w-3 h-3" />
                          )}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="pr-3 space-y-0.5 border-r border-slate-200 mr-2 py-0.5">
                          {unit.lessons.map((lesson) => {
                            const active =
                              route.page === 'lesson' && route.lessonId === lesson.id;
                            const done = progress.completedLessons.includes(lesson.id);
                            return (
                              <div key={lesson.id} className="flex items-center gap-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    navigate(
                                      { page: 'lesson', unitId: unit.id, lessonId: lesson.id, tab: 'explain' },
                                      'egypt'
                                    )
                                  }
                                  className={`flex-1 min-w-0 text-right px-2 py-1.5 rounded-lg text-[11px] font-semibold flex items-center justify-between gap-1.5 transition cursor-pointer ${
                                    active
                                      ? 'bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] font-bold'
                                      : 'text-slate-600 hover:bg-slate-50'
                                  }`}
                                >
                                  <span className="truncate">
                                    {lesson.lessonsLabel}: {lesson.titleAr}
                                  </span>
                                  {done && (
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                                  )}
                                </button>
                                <button
                                  type="button"
                                  title="فتح الشرح المفصل للدرس"
                                  onClick={() =>
                                    navigate(
                                      {
                                        page: 'explanations',
                                        curriculum: 'egypt',
                                        unitId: unit.id,
                                        lessonId: lesson.id,
                                      },
                                      'egypt'
                                    )
                                  }
                                  className="p-1 rounded-md text-teal-600 hover:bg-teal-50 shrink-0 cursor-pointer"
                                >
                                  <Presentation className="w-3 h-3" />
                                </button>
                              </div>
                            );
                          })}
                          <button
                            type="button"
                            onClick={() =>
                              navigate({ page: 'unit-summary', unitId: unit.id }, 'egypt')
                            }
                            className={`w-full text-right px-2 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer ${
                              route.page === 'unit-summary' && route.unitId === unit.id
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-amber-700 hover:bg-amber-50'
                            }`}
                          >
                            <Award className="w-3 h-3 shrink-0" />
                            ملخص الوحدة {unit.number} الشامل
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Term 2 Placeholder */}
            <button
              type="button"
              onClick={() => navigate({ page: 'coming-soon', country: 'egypt-term2' }, 'egypt')}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                route.page === 'coming-soon' && route.country === 'egypt-term2'
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                الفصل الثاني (قريباً)
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Branch 3: Saudi Curriculum */}
      <div className="rounded-2xl bg-white border border-[var(--border-soft)] overflow-hidden">
        <button
          type="button"
          onClick={() => toggleBranch('saudi')}
          className="w-full flex items-center justify-between px-3 py-2.5 font-bold text-emerald-900 bg-emerald-50/70 hover:bg-emerald-100/70 transition cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-600" />
            المنهج السعودي 🇸🇦
          </span>
          {openBranches.saudi ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
        {openBranches.saudi && (
          <div className="p-2 space-y-1 border-t border-emerald-100 pr-3">
            <button
              type="button"
              onClick={() => navigate({ page: 'explanations', curriculum: 'saudi' }, 'saudi')}
              className={`w-full text-right px-2.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-2 cursor-pointer ${
                route.page === 'explanations' && route.curriculum === 'saudi'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 shrink-0" />
              أيقونة الشرح المفصل (المنهج السعودي)
            </button>
            <button
              type="button"
              onClick={() => navigate({ page: 'coming-soon', country: 'saudi-term1' }, 'saudi')}
              className="w-full text-right px-2.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-3 h-3 shrink-0" />
              الفصل الأول (قريباً)
            </button>
            <button
              type="button"
              onClick={() => navigate({ page: 'coming-soon', country: 'saudi-term2' }, 'saudi')}
              className="w-full text-right px-2.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer"
            >
              <Lock className="w-3 h-3 shrink-0" />
              الفصل الثاني (قريباً)
            </button>
          </div>
        )}
      </div>

      {/* Branch 4: Mastery & Performance Tools */}
      <div className="rounded-2xl bg-white border border-[var(--border-soft)] overflow-hidden">
        <button
          type="button"
          onClick={() => toggleBranch('tools')}
          className="w-full flex items-center justify-between px-3 py-2.5 font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 transition cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[var(--brand-primary)]" />
            أدوات التفوق والتعزيز
          </span>
          {openBranches.tools ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
        {openBranches.tools && (
          <div className="p-2 space-y-1 border-t border-slate-100">
            {[
              { page: 'cumulative-map' as const, label: 'المخطط التراكمي للقواعد', icon: GitBranch },
              { page: 'adaptive' as const, label: 'نظام التقييم التكيفي', icon: Target },
              { page: 'dictionary' as const, label: 'المعجم التفاعلي والبطاقات', icon: BookOpen },
              { page: 'verbal-challenge' as const, label: 'ركن التحدي اللفظي', icon: Mic },
              { page: 'dashboard' as const, label: 'لوحة متابعة الإنجاز', icon: LayoutDashboard },
            ].map((item) => {
              const Icon = item.icon;
              const active = route.page === item.page;
              return (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => navigate({ page: item.page })}
                  className={`w-full flex items-center gap-2 px-2.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                    active
                      ? 'bg-[var(--brand-primary)] text-white'
                      : 'text-slate-700 hover:bg-[var(--surface-muted)]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
};
