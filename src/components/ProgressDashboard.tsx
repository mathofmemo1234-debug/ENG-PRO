import React from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Flame,
  LayoutDashboard,
  Mic,
  RotateCcw,
  Star,
  Target,
  Trophy,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ALL_LESSONS, EGYPT_PREP3_TERM1_UNITS } from '../data/units';

export const ProgressDashboard: React.FC = () => {
  const { progress, resetProgress, setRoute } = useApp();

  const totalLessons = ALL_LESSONS.length;
  const completedCount = progress.completedLessons.length;
  const overallPercent = Math.round((completedCount / totalLessons) * 100);

  const worksheetEntries = Object.values(progress.worksheetScores);
  const avgWorksheet =
    worksheetEntries.length > 0
      ? Math.round(
          (worksheetEntries.reduce((acc, s) => acc + s.score / s.total, 0) /
            worksheetEntries.length) *
            100
        )
      : 0;

  const adaptiveAcc =
    progress.adaptiveStats.totalAnswered > 0
      ? Math.round(
          (progress.adaptiveStats.correctCount / progress.adaptiveStats.totalAnswered) * 100
        )
      : 0;

  const badges = [
    {
      id: 'b1',
      title: 'خطوة البداية',
      desc: 'إكمال أول درس في المنصة',
      unlocked: completedCount >= 1,
    },
    {
      id: 'b2',
      title: 'بطل أوراق العمل',
      desc: 'حل 3 أوراق عمل بنجاح',
      unlocked: worksheetEntries.length >= 3,
    },
    {
      id: 'b3',
      title: 'جامع المفردات',
      desc: 'حفظ 5 كلمات في معجمك',
      unlocked: progress.starredVocab.length >= 5,
    },
    {
      id: 'b4',
      title: 'متحدث واثق',
      desc: 'تحقيق +70% في التحدي اللفظي',
      unlocked: progress.verbalHighScore >= 70,
    },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-wrap items-center justify-between gap-4"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="space-y-1.5">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full">
            <LayoutDashboard className="w-4 h-4" />
            لوحة تحكم الطالب لمتابعة الإنجاز
          </span>
          <h1 className="text-2xl sm:text-3xl font-black">تحليل الأداء والتقدم الدراسي</h1>
          <p className="text-sm text-white/90">
            تابع إتقانك لوحدات الصف الثالث الإعدادي، درجات أوراق العمل، والمفردات المحفوظة.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            if (window.confirm('هل تريد إعادة ضبط بيانات التقدم التجريبية؟')) {
              resetProgress();
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          إعادة ضبط التقدم
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>إنجاز المنهج</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-slate-900">{overallPercent}%</div>
          <div className="text-xs text-slate-500">
            {completedCount} من {totalLessons} درساً
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>متوسط أوراق العمل</span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-black text-slate-900">{avgWorksheet}%</div>
          <div className="text-xs text-slate-500">{worksheetEntries.length} ورقة محلولة</div>
        </div>

        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>التقييم التكيفي</span>
            <Target className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-2xl font-black text-slate-900">{adaptiveAcc}%</div>
          <div className="text-xs text-slate-500">
            {progress.adaptiveStats.totalAnswered} سؤالاً مجاباً
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 shadow-xs space-y-1">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>النقاط والتحدي اللفظي</span>
            <Flame className="w-4 h-4 text-orange-500" />
          </div>
          <div className="text-2xl font-black text-slate-900">{progress.xp} XP</div>
          <div className="text-xs text-slate-500">
            أعلى نطق: {progress.verbalHighScore}% • <Star className="w-3 h-3 inline text-amber-400" />{' '}
            {progress.starredVocab.length} كلمة
          </div>
        </div>
      </div>

      {/* Unit Progress Breakdown */}
      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900">التقدم التفصيلي حسب الوحدات الست</h2>
        <div className="space-y-3">
          {EGYPT_PREP3_TERM1_UNITS.map((unit) => {
            const done = unit.lessons.filter((l) =>
              progress.completedLessons.includes(l.id)
            ).length;
            const pct = Math.round((done / unit.lessons.length) * 100);
            return (
              <div key={unit.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                  <button
                    type="button"
                    onClick={() => setRoute({ page: 'unit-summary', unitId: unit.id })}
                    className="text-slate-800 hover:text-[var(--brand-primary)] cursor-pointer"
                  >
                    Unit {unit.number}: {unit.titleAr}
                  </button>
                  <span className="text-slate-500">
                    {done}/3 دروس ({pct}%)
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: unit.accentColor }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            أوسمة التفوق
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {badges.map((b) => (
              <div
                key={b.id}
                className={`rounded-2xl p-3.5 border transition ${
                  b.unlocked
                    ? 'bg-amber-50 border-amber-300 text-amber-950'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <div className="font-extrabold text-sm flex items-center justify-between">
                  <span>{b.title}</span>
                  <span>{b.unlocked ? '🏅' : '🔒'}</span>
                </div>
                <div className="text-xs mt-1">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-3">
          <h2 className="text-lg font-extrabold text-slate-900">خطوات مقترحة لرفع مستواك</h2>
          <button
            type="button"
            onClick={() => setRoute({ page: 'adaptive' })}
            className="w-full text-right p-3.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 text-indigo-950 text-xs font-extrabold flex items-center gap-2.5 cursor-pointer"
          >
            <Target className="w-4 h-4 text-indigo-600 shrink-0" />
            خُض جلسة تقييم تكيفي لتحديد نقاط الضعف
          </button>
          <button
            type="button"
            onClick={() => setRoute({ page: 'dictionary' })}
            className="w-full text-right p-3.5 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-950 text-xs font-extrabold flex items-center gap-2.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-teal-600 shrink-0" />
            راجع مفرداتك المحفوظة ببطاقات الفلاش كارد
          </button>
          <button
            type="button"
            onClick={() => setRoute({ page: 'verbal-challenge' })}
            className="w-full text-right p-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-950 text-xs font-extrabold flex items-center gap-2.5 cursor-pointer"
          >
            <Mic className="w-4 h-4 text-rose-600 shrink-0" />
            درّب نطقك في ركن التحدي اللفظي
          </button>
        </div>
      </div>
    </div>
  );
};
