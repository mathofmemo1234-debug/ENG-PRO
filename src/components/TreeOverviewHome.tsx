import React from 'react';
import {
  ArrowLeft,
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  GitBranch,
  GraduationCap,
  LayoutDashboard,
  Lock,
  Mic,
  Presentation,
  Sparkles,
  Target,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CURRICULA_META, CURRICULUM_TREE_TERMS } from '../data/curricula';
import { EGYPT_PREP3_TERM1_UNITS } from '../data/units';

export const TreeOverviewHome: React.FC = () => {
  const { setRoute, setActiveCurriculum, progress } = useApp();

  const totalLessons = 18;
  const completedCount = progress.completedLessons.length;
  const percent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Banner */}
      <section
        className="rounded-3xl p-6 sm:p-9 text-white shadow-xl relative overflow-hidden"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold bg-white/20 backdrop-blur-xs px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4" />
              منهج متكامل ومبتكر: الصف الثالث الإعدادي — الفصل الأول (2026–2027)
            </div>
            <h1 className="text-2xl sm:text-4xl font-black leading-tight">
              منصة التعلّم المنهجي الذكي للغة الإنجليزية
            </h1>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl leading-relaxed">
              تصميم منهجي هادئ ومنظّم يخلو من الازدحام البصري، يبدأ بالتأسيس الشامل ويقودك عبر وحدات الصف
              الثالث الإعدادي مع ملخصات مرئية، شروحات قواعد مصورة وصوتية، و270 سؤالاً تفاعلياً
              بنسخ قابلة للتصدير لـ Word و PDF.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setActiveCurriculum('foundation');
                  setRoute({ page: 'foundation', tab: 'grammar' });
                }}
                className="px-5 py-2.5 rounded-2xl bg-white text-slate-900 font-extrabold text-sm shadow hover:scale-[1.02] transition cursor-pointer"
              >
                1. ابدأ بالتأسيس الشامل
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCurriculum('egypt');
                  setRoute({ page: 'explanations', curriculum: 'egypt' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-300 hover:bg-amber-200 text-slate-950 font-extrabold text-sm shadow transition cursor-pointer"
              >
                <Presentation className="w-4 h-4" />
                استعراض الشرح المفصل للدروس
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveCurriculum('egypt');
                  setRoute({ page: 'lesson', unitId: 'unit-1', lessonId: 'u1-p1' });
                }}
                className="px-5 py-2.5 rounded-2xl bg-slate-900/25 hover:bg-slate-900/35 border border-white/30 text-white font-extrabold text-sm transition cursor-pointer"
              >
                2. ادخل الوحدة الأولى مباشرة ←
              </button>
            </div>
          </div>

          {/* Quick Mastery Widget */}
          <div className="lg:col-span-4 bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/25 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold">
              <span>إنجازك في الصف الثالث الإعدادي</span>
              <span>{percent}%</span>
            </div>
            <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-300 rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-center pt-1">
              <div className="bg-white/15 rounded-xl p-2">
                <div className="text-lg font-black">{completedCount}/18</div>
                <div className="text-[11px] opacity-85">درساً مكتملًا</div>
              </div>
              <div className="bg-white/15 rounded-xl p-2">
                <div className="text-lg font-black">{progress.xp}</div>
                <div className="text-[11px] opacity-85">نقطة خبرة XP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Country & Term Tree Explorer */}
      <section className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">مسارات المناهج والهويات البصرية</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              لكل منهج هويته البصرية المستقلة ومساره المنظّم عبر الفصلين الدراسيين بأسلوب تفاعلي متكامل.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(['foundation', 'egypt', 'saudi'] as const).map((cid) => {
            const meta = CURRICULA_META[cid];
            const terms = CURRICULUM_TREE_TERMS.filter((t) => t.country === cid);
            return (
              <div
                key={cid}
                className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {meta.badge}
                    </span>
                    <div className="flex gap-1">
                      {meta.swatches.map((hex) => (
                        <span
                          key={hex}
                          className="w-4 h-4 rounded-full border border-white shadow-xs"
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">{meta.nameAr}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{meta.descriptionAr}</p>

                  {cid === 'foundation' ? (
                    <div className="space-y-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCurriculum('foundation');
                          setRoute({ page: 'foundation', tab: 'grammar' });
                        }}
                        className="w-full text-right px-3 py-2 rounded-xl bg-violet-50 hover:bg-violet-100 text-violet-900 text-xs font-bold flex items-center justify-between cursor-pointer"
                      >
                        <span>قواعد Let’s Remember + طرق التعلم</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCurriculum('foundation');
                          setRoute({ page: 'foundation', tab: 'concept-maps' });
                        }}
                        className="w-full text-right px-3 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-900 text-xs font-bold flex items-center justify-between cursor-pointer"
                      >
                        <span>خرائط المفاهيم التفاعلية</span>
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2 pt-1">
                      {terms.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => {
                            setActiveCurriculum(t.country);
                            if (t.status === 'active') {
                              setRoute({ page: 'lesson', unitId: 'unit-1', lessonId: 'u1-p1' });
                            } else {
                              setRoute({
                                page: 'coming-soon',
                                country:
                                  t.id === 'egypt-t2'
                                    ? 'egypt-term2'
                                    : t.id === 'saudi-t1'
                                    ? 'saudi-term1'
                                    : 'saudi-term2',
                              });
                            }
                          }}
                          className={`w-full text-right p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                            t.status === 'active'
                              ? 'bg-teal-50 border-teal-200 text-teal-950 hover:bg-teal-100'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <div className="flex items-center justify-between font-bold">
                            <span>{t.titleAr}</span>
                            {t.status === 'active' ? (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-teal-600 text-white px-2 py-0.5 rounded-full">
                                <CheckCircle2 className="w-3 h-3" /> مفعّل
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
                                <Lock className="w-3 h-3" /> قريباً
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] opacity-80 mt-0.5">{t.gradeAr}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setRoute({ page: 'explanations', curriculum: cid })}
                  className="w-full py-2.5 px-3 rounded-2xl text-xs font-extrabold flex items-center justify-center gap-2 border transition cursor-pointer"
                  style={{
                    backgroundColor: `${meta.swatches[0]}14`,
                    borderColor: `${meta.swatches[0]}45`,
                    color: meta.swatches[0],
                  }}
                >
                  <Presentation className="w-4 h-4" />
                  <span>أيقونة الشرح المفصل ({meta.nameAr})</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Prep 3 Term 1 Units Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              وحدات الصف الثالث الإعدادي — الفصل الدراسي الأول
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              اختر وحدة لفتح دروسها الثلاثة أو استعراض ملخص الوحدة الشامل.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setRoute({ page: 'cumulative-map' })}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-[var(--border-soft)] text-xs font-extrabold text-[var(--brand-primary-dark)] hover:bg-[var(--surface-muted)] cursor-pointer"
          >
            <GitBranch className="w-4 h-4" />
            عرض المخطط التراكمي للقواعد
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EGYPT_PREP3_TERM1_UNITS.map((unit) => {
            const done = unit.lessons.filter((l) =>
              progress.completedLessons.includes(l.id)
            ).length;
            return (
              <div
                key={unit.id}
                className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-extrabold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: unit.accentColor }}
                    >
                      Unit {unit.number}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{done}/3 دروس</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">{unit.titleAr}</h3>
                  <div dir="ltr" className="font-en text-xs font-bold text-slate-500 text-left">
                    {unit.titleEn}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {unit.summary.overviewAr}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {unit.lessons.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => {
                        setActiveCurriculum('egypt');
                        setRoute({ page: 'lesson', unitId: unit.id, lessonId: l.id });
                      }}
                      className="w-full text-right px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-[var(--surface-muted)] text-xs font-bold text-slate-700 flex items-center justify-between cursor-pointer"
                    >
                      <span className="truncate">
                        {l.lessonsLabel}: {l.titleAr}
                      </span>
                      {progress.completedLessons.includes(l.id) ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <ArrowLeft className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                    </button>
                  ))}
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCurriculum('egypt');
                        setRoute({
                          page: 'explanations',
                          curriculum: 'egypt',
                          unitId: unit.id,
                          lessonId: unit.lessons[0].id,
                        });
                      }}
                      className="w-full text-center py-1.5 px-2 rounded-xl bg-[var(--brand-primary-soft)] hover:opacity-90 text-[var(--brand-primary-dark)] text-xs font-extrabold flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Presentation className="w-3.5 h-3.5 shrink-0" />
                      <span>الشرح المفصل</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCurriculum('egypt');
                        setRoute({ page: 'unit-summary', unitId: unit.id });
                      }}
                      className="w-full text-center py-1.5 px-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-extrabold flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span>ملخص الوحدة {unit.number}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Performance Boosters Strip */}
      <section className="space-y-3">
        <h2 className="text-xl font-extrabold text-slate-900">أدوات تعزيز الأداء والتفوق</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            {
              page: 'adaptive' as const,
              title: 'التقييم التكيفي',
              desc: 'يتدرج مع مستواك ويعالج نقاط الضعف',
              icon: Target,
              bg: 'bg-indigo-50 text-indigo-900 border-indigo-200',
            },
            {
              page: 'dictionary' as const,
              title: 'المعجم التفاعلي',
              desc: 'بحث ونطق وبطاقات فلاش كارد لكل الكلمات',
              icon: BookOpen,
              bg: 'bg-teal-50 text-teal-900 border-teal-200',
            },
            {
              page: 'verbal-challenge' as const,
              title: 'ركن التحدي اللفظي',
              desc: 'اختبر نطقك وسرعتك ومحادثات المنهج',
              icon: Mic,
              bg: 'bg-rose-50 text-rose-900 border-rose-200',
            },
            {
              page: 'cumulative-map' as const,
              title: 'المخطط التراكمي',
              desc: 'اربط قواعد التأسيس بدروس العام الحالي',
              icon: GitBranch,
              bg: 'bg-amber-50 text-amber-900 border-amber-200',
            },
            {
              page: 'dashboard' as const,
              title: 'لوحة الإنجاز',
              desc: 'رسوم بيانية وشارات وتقارير الدرجات',
              icon: LayoutDashboard,
              bg: 'bg-emerald-50 text-emerald-900 border-emerald-200',
            },
          ].map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.page}
                type="button"
                onClick={() => setRoute({ page: tool.page })}
                className={`text-right p-4 rounded-2xl border ${tool.bg} hover:scale-[1.02] transition shadow-xs cursor-pointer space-y-2`}
              >
                <Icon className="w-6 h-6" />
                <div className="font-extrabold text-sm">{tool.title}</div>
                <div className="text-xs opacity-80 leading-snug">{tool.desc}</div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
