import { CurriculumId } from './types';

export interface CurriculumMeta {
  id: CurriculumId;
  nameAr: string;
  nameEn: string;
  badge: string;
  descriptionAr: string;
  paletteLabel: string;
  swatches: [string, string, string];
}

export const CURRICULA_META: Record<CurriculumId, CurriculumMeta> = {
  foundation: {
    id: 'foundation',
    nameAr: 'قسم التأسيس الشامل',
    nameEn: 'Comprehensive Foundation',
    badge: 'بنفسجي ووردي مُلهِم',
    descriptionAr:
      'قواعد اللغة الأساسية (Let’s Remember) بأسلوب مبسط، طرق التعلم الذكي، وخرائط المفاهيم التفاعلية.',
    paletteLabel: 'باليت التأسيس الإبداعي',
    swatches: ['#7C3AED', '#EC4899', '#F59E0B'],
  },
  egypt: {
    id: 'egypt',
    nameAr: 'المنهج المصري',
    nameEn: 'Egyptian Curriculum',
    badge: 'أزرق نيلي وفيروزي',
    descriptionAr:
      'منهج اللغة الإنجليزية للصف الثالث الإعدادي (إصدار 2026–2027) بشرح تفاعلي مبتكر، قواعد مفصّلة، وأوراق عمل ذكية.',
    paletteLabel: 'باليت النيل المشرق',
    swatches: ['#0D9488', '#4F46E5', '#F59E0B'],
  },
  saudi: {
    id: 'saudi',
    nameAr: 'المنهج السعودي',
    nameEn: 'Saudi Curriculum',
    badge: 'زمردي وذهبي صحراوي',
    descriptionAr:
      'مسار المنهج السعودي للفصلين الدراسيين بهوية بصرية مستقلة وبنية تعليمية جاهزة للإطلاق ضمن خطة التوسّع.',
    paletteLabel: 'باليت النخيل والذهب',
    swatches: ['#059669', '#D97706', '#0284C7'],
  },
};

export interface CurriculumTermNode {
  id: string;
  country: 'egypt' | 'saudi';
  termNumber: 1 | 2;
  titleAr: string;
  gradeAr: string;
  status: 'active' | 'awaiting-source';
  noteAr: string;
}

export const CURRICULUM_TREE_TERMS: CurriculumTermNode[] = [
  {
    id: 'egypt-t1',
    country: 'egypt',
    termNumber: 1,
    titleAr: 'الفصل الدراسي الأول',
    gradeAr: 'الصف الثالث الإعدادي (Prep 3 — 2026/2027)',
    status: 'active',
    noteAr: 'مفعّل بالكامل — 6 وحدات دراسية + 18 درساً تفاعلياً + 270 سؤالاً متدرجاً',
  },
  {
    id: 'egypt-t2',
    country: 'egypt',
    termNumber: 2,
    titleAr: 'الفصل الدراسي الثاني',
    gradeAr: 'الصف الثالث الإعدادي',
    status: 'awaiting-source',
    noteAr: 'قيد الإعداد والتجهيز — سيتم إطلاقه قريباً بنفس المنهجية التفاعلية المتكاملة.',
  },
  {
    id: 'saudi-t1',
    country: 'saudi',
    termNumber: 1,
    titleAr: 'الفصل الدراسي الأول',
    gradeAr: 'المرحلة المتوسطة / المناهج السعودية',
    status: 'awaiting-source',
    noteAr: 'القالب والهوية البصرية جاهزان — قيد الإعداد والتجهيز لإطلاق وحداته ودروسه قريباً.',
  },
  {
    id: 'saudi-t2',
    country: 'saudi',
    termNumber: 2,
    titleAr: 'الفصل الدراسي الثاني',
    gradeAr: 'المرحلة المتوسطة / المناهج السعودية',
    status: 'awaiting-source',
    noteAr: 'القالب والهوية البصرية جاهزان — قيد الإعداد والتجهيز لإطلاق وحداته ودروسه قريباً.',
  },
];
