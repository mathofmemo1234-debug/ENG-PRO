import React from 'react';
import { ArrowRight, BookOpen, FileUp, Lock, Presentation, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ComingSoonCurriculumViewProps {
  country: 'egypt-term2' | 'saudi-term1' | 'saudi-term2';
}

export const ComingSoonCurriculumView: React.FC<ComingSoonCurriculumViewProps> = ({
  country,
}) => {
  const { setRoute, setActiveCurriculum } = useApp();

  const isSaudi = country.startsWith('saudi');
  const title =
    country === 'egypt-term2'
      ? 'المنهج المصري — الصف الثالث الإعدادي (الفصل الدراسي الثاني)'
      : country === 'saudi-term1'
      ? 'المنهج السعودي — الفصل الدراسي الأول'
      : 'المنهج السعودي — الفصل الدراسي الثاني';

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div
        className="rounded-3xl p-7 text-white shadow-lg space-y-3"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="inline-flex items-center gap-1.5 text-xs font-extrabold bg-white/20 px-3 py-1 rounded-full">
          <Lock className="w-3.5 h-3.5" />
          خطة التوسّع المنهجي للمنصة
        </div>
        <h1 className="text-2xl sm:text-3xl font-black">{title}</h1>
        <p className="text-sm text-white/90 leading-relaxed">
          {isSaudi
            ? 'الهوية البصرية الخاصة بالمنهج السعودي (باليت النخيل الزمردي والذهبي) وبنية المنهج المنظّمة للفصلين جاهزتان تماماً للانطلاق.'
            : 'بنية المنهج للفصل الدراسي الثاني جاهزة تماماً لاستيعاب وحداته ودروسه.'}
        </p>
      </div>

      <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 shadow-xs space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] flex items-center justify-center shrink-0">
            <FileUp className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-extrabold text-slate-900">
              هذا المسار قيد الإعداد والتطوير
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              نعمل حالياً على إعداد وحدات هذا الفصل ومفرداته وقواعده وأوراق عمله بنفس المنهجية
              التفاعلية الدقيقة المتوفرة حالياً في منهج الصف الثالث الإعدادي (الفصل الأول) وقسم
              التأسيس الشامل.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="button"
            onClick={() =>
              setRoute({ page: 'explanations', curriculum: isSaudi ? 'saudi' : 'egypt' })
            }
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[var(--brand-primary)] text-white text-xs font-extrabold cursor-pointer"
          >
            <Presentation className="w-4 h-4" />
            أيقونة الشرح المفصل
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveCurriculum('egypt');
              setRoute({ page: 'lesson', unitId: 'unit-1', lessonId: 'u1-p1' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-teal-50 text-teal-900 border border-teal-200 text-xs font-extrabold cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            تصفح المنهج المفعّل (٣ إعدادي — الترم الأول)
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveCurriculum('foundation');
              setRoute({ page: 'foundation', tab: 'grammar' });
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 text-slate-800 text-xs font-extrabold hover:bg-slate-200 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-violet-600" />
            استكشف قسم التأسيس الشامل
          </button>
          <button
            type="button"
            onClick={() => setRoute({ page: 'home' })}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-50 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            بوابة المناهج الرئيسية
          </button>
        </div>
      </div>
    </div>
  );
};
