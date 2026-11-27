export interface CumulativeLink {
  id: string;
  priorTitleEn: string;
  priorTitleAr: string;
  priorFormula: string;
  priorGradeLabel: string;
  prep3UnitNumber: number;
  prep3UnitId: string;
  prep3LessonId: string;
  prep3TitleEn: string;
  prep3TitleAr: string;
  prep3Formula: string;
  bridgeExplanationAr: string;
  transformationExample: {
    baseEn: string;
    evolvedEn: string;
    ar: string;
  };
  color: string;
}

export const CUMULATIVE_GRAMMAR_LINKS: CumulativeLink[] = [
  {
    id: 'link-u1',
    priorTitleEn: 'Present Perfect Base & Past Simple',
    priorTitleAr: 'المضارع التام البسيط والتصريف الثالث',
    priorFormula: 'Subject + have/has + P.P.',
    priorGradeLabel: 'مسار التأسيس — القواعد الأساسية',
    prep3UnitNumber: 1,
    prep3UnitId: 'unit-1',
    prep3LessonId: 'u1-p1',
    prep3TitleEn: 'Present Perfect Active & Passive',
    prep3TitleAr: 'المضارع التام في المعلوم والمجهول',
    prep3Formula: 'Object + has/have + been + P.P.',
    bridgeExplanationAr:
      'في التأسيس تعلّمت تكوين المضارع التام للمعلوم (have/has + P.P.). في الوحدة الأولى نُضيف فقط كلمة (been) بعد البدء بالمفعول لنحوله إلى المبني للمجهول، مع إتقان أدوات (since / for / just / already / yet / ever / never).',
    transformationExample: {
      baseEn: 'Scientists have discovered a new planet.',
      evolvedEn: 'A new planet has been discovered by scientists.',
      ar: 'اكتشف العلماء كوكباً جديداً ← تم اكتشاف كوكب جديد بواسطة العلماء.',
    },
    color: '#0D9488',
  },
  {
    id: 'link-u2',
    priorTitleEn: 'Past Perfect & Conditionals (Types 1 & 2)',
    priorTitleAr: 'الماضي التام والحالتان الشرطيتان 1 و 2',
    priorFormula: 'Subject + had + P.P. | If + Past Simple, would + inf.',
    priorGradeLabel: 'مسار التأسيس والصف الثاني الإعدادي',
    prep3UnitNumber: 2,
    prep3UnitId: 'unit-2',
    prep3LessonId: 'u2-p1',
    prep3TitleEn: 'The Third Conditional (If Type 3)',
    prep3TitleAr: 'الحالة الشرطية الثالثة (الندم والخيال في الماضي)',
    prep3Formula: 'If + had + P.P., Subject + would have + P.P.',
    bridgeExplanationAr:
      'الماضي التام (had + P.P.) الذي درسته لترتيب الأحداث الماضية يدخل الآن داخل جملة (If) ليعبر عن موقف تخيلي عكس ما حدث في الماضي، ونكمل النتيجة بـ (would have + P.P.).',
    transformationExample: {
      baseEn: 'Amira got wet because she forgot her umbrella.',
      evolvedEn: 'If Amira hadn’t forgotten her umbrella, she wouldn’t have got wet.',
      ar: 'تبللت أميرة لأنها نسيت مظلتها ← لو لم تنسَ مظلتها ما كانت لتتبلل.',
    },
    color: '#4F46E5',
  },
  {
    id: 'link-u3',
    priorTitleEn: 'Future Simple Active',
    priorTitleAr: 'زمن المستقبل البسيط للمعلوم',
    priorFormula: 'Subject + will / won’t + inf.',
    priorGradeLabel: 'مسار التأسيس — قواعد المستقبل',
    prep3UnitNumber: 3,
    prep3UnitId: 'unit-3',
    prep3LessonId: 'u3-p1',
    prep3TitleEn: 'Future Simple Active & Passive',
    prep3TitleAr: 'المستقبل البسيط في المعلوم والمجهول',
    prep3Formula: 'Object + will / won’t + be + P.P.',
    bridgeExplanationAr:
      'تماماً كما حوّلنا المضارع التام بإضافة been، نحول المستقبل البسيط (will + inf.) إلى المجهول باستبدال المصدر بـ (be + P.P.) عندما نبدأ الجملة بالمفعول الذي سيقع عليه الفعل في المستقبل.',
    transformationExample: {
      baseEn: 'Robots will clean the classrooms.',
      evolvedEn: 'The classrooms will be cleaned by robots.',
      ar: 'ستنظف الروبوتات الفصول ← ستُنظَّف الفصول بواسطة الروبوتات.',
    },
    color: '#2563EB',
  },
  {
    id: 'link-u4',
    priorTitleEn: 'Modal Verbs & Sentence Connectors',
    priorTitleAr: 'الأفعال الناقصة وروابط الجمل',
    priorFormula: 'can / should / must + inf. | and, but, because',
    priorGradeLabel: 'مسار التأسيس — بناء الجملة والروابط',
    prep3UnitNumber: 4,
    prep3UnitId: 'unit-4',
    prep3LessonId: 'u4-p1',
    prep3TitleEn: 'Obligation, Prohibition, Permission & Connectors',
    prep3TitleAr: 'الإلزام والمنع والسماح والروابط',
    prep3Formula: 'must / mustn’t / should / can’t + inf. + although / however',
    bridgeExplanationAr:
      'تتطور الأفعال الناقصة من مجرد طلب مهذب إلى التعبير الدقيق عن الإلزام القوي (must)، التحريم والمنع (mustn’t)، النصيحة (should)، والقدرة أو السماح (can/can’t) مع ربط الأفكار المتناقضة بـ although.',
    transformationExample: {
      baseEn: 'You can go out, but finish homework first.',
      evolvedEn: 'You must finish your homework before going out; you mustn’t stay late.',
      ar: 'الانتقال من النصيحة البسيطة إلى قواعد الإلزام والمنع الدقيقة.',
    },
    color: '#059669',
  },
  {
    id: 'link-u5',
    priorTitleEn: 'Base Verb & Sentence Order',
    priorTitleAr: 'مصدر الفعل وترتيب الجملة',
    priorFormula: 'Subject + Verb + Object | First / Next',
    priorGradeLabel: 'مسار التأسيس — تكوين الجملة والأفعال',
    prep3UnitNumber: 5,
    prep3UnitId: 'unit-5',
    prep3LessonId: 'u5-p1',
    prep3TitleEn: 'Imperatives & Sequence Adverbs',
    prep3TitleAr: 'صيغة الأمر وظروف التتابع المنطقي',
    prep3Formula: 'First, [Verb inf.] ... / Don’t [Verb inf.] ... Finally, ...',
    bridgeExplanationAr:
      'في جملة الأمر نحذف الفاعل ونبدأ بمصدر الفعل مباشرة (أو Don’t + المصدر للنهي)، ثم ننظم خطوات التفكير التصميمي باستخدام ظروف التتابع (First, Then, Next, After that, Finally).',
    transformationExample: {
      baseEn: 'You should test your prototype carefully.',
      evolvedEn: 'First, brainstorm ideas. Then, build a prototype. Don’t ignore feedback!',
      ar: 'تحويل الإرشادات العادية إلى خطوات تصميمية متسلسلة بصيغة الأمر.',
    },
    color: '#D97706',
  },
  {
    id: 'link-u6',
    priorTitleEn: 'Direct Tenses (Present, Past, Future)',
    priorTitleAr: 'الأزمنة المباشرة (مضارع، ماضٍ، مستقبل)',
    priorFormula: 'Present Simple | Past Simple | will',
    priorGradeLabel: 'مسار التأسيس + الوحدات 1–5',
    prep3UnitNumber: 6,
    prep3UnitId: 'unit-6',
    prep3LessonId: 'u6-p1',
    prep3TitleEn: 'Reported Speech (Statements)',
    prep3TitleAr: 'الكلام غير المباشر (الجملة الخبرية المنقولة)',
    prep3Formula: 'Speaker + said (that) / told + obj + (that) + Backshifted Tense',
    bridgeExplanationAr:
      'تتوج الوحدة السادسة كل ما تعلمته من أزمنة! عند نقل كلام شخص من مباشر إلى غير مباشر، يرجع الزمن خطوة للخلف: المضارع البسيط يصبح ماضياً بسيطاً، والماضي البسيط يصبح ماضياً تاماً (had + P.P.)، و will تصبح would.',
    transformationExample: {
      baseEn: 'Ahmed said to me, "I can solve the problem."',
      evolvedEn: 'Ahmed told me that he could solve the problem.',
      ar: 'قال لي أحمد: «أستطيع حل المشكلة» ← أخبرني أحمد أنه استطاع حل المشكلة.',
    },
    color: '#7C3AED',
  },
];
