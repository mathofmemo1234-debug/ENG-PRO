import { DiagramType } from './types';

export interface FoundationGrammarRuleItem {
  headingAr: string;
  ruleEn: string;
  formulaEn?: string;
  detailAr: string;
  exampleEn: string;
  exampleAr: string;
}

export interface FoundationGrammarTopic {
  id: string;
  titleEn: string;
  titleAr: string;
  usageEn: string;
  summaryAr: string;
  formulaEn: string;
  formulaAr: string;
  diagramType: DiagramType;
  rulesAr: FoundationGrammarRuleItem[];
  keywords: string[];
  quickTipAr: string;
}

export interface SmartLearningMethod {
  id: string;
  titleAr: string;
  titleEn: string;
  badge: string;
  color: string;
  howItWorksAr: string;
  stepsAr: string[];
  applyHereAr: string;
}

export interface ConceptMapNode {
  id: string;
  labelEn: string;
  labelAr: string;
  role: 'root' | 'branch' | 'leaf';
  parentId?: string;
  formula?: string;
  exampleEn?: string;
  exampleAr?: string;
  color: string;
}

export interface ConceptMap {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  nodes: ConceptMapNode[];
}

export const FOUNDATION_GRAMMAR_TOPICS: FoundationGrammarTopic[] = [
  {
    id: 'dialog-questions',
    titleEn: 'Dialog & Question Formation',
    titleAr: 'مهارة المحادثة وتكوين السؤال',
    usageEn:
      'A statement begins with Subject + Verb, whereas a question places the auxiliary/modal verb before the subject (except subject questions starting with Who/What).',
    summaryAr:
      'الفرق الجوهري بين الجملة الخبرية (Subject + Verb) والجملة الاستفهامية (Q. word + Helping Verb + Subject)، مع التمييز بين السؤال عن الفاعل والسؤال عن المفعول.',
    formulaEn: '(Q. word) + Auxiliary / Modal + Subject + Main Verb ...?',
    formulaAr: 'أداة الاستفهام + الفعل المساعد / الناقص + الفاعل + الفعل الأساسي ...؟',
    diagramType: 'sentence-blocks',
    rulesAr: [
      {
        headingAr: 'الأفعال المساعدة والناقصة (Yes/No Questions)',
        ruleEn: 'Invert the Auxiliary (do/does/did, am/is/are/was/were, have/has/had) or Modal (can/could/will/should/must) before the Subject.',
        formulaEn: 'Auxiliary / Modal + Subject + Main Verb ...?',
        detailAr:
          'نُقدّم الفعل المساعد أو الناقص على الفاعل لصنع سؤال بمعنى «هل».',
        exampleEn: 'Have you visited the Grand Egyptian Museum?',
        exampleAr: 'هل قمت بزيارة المتحف المصري الكبير؟',
      },
      {
        headingAr: 'السؤال عن الفاعل مقابل المفعول',
        ruleEn: 'Subject Question: Who / What + Main Verb (no do/does/did).  |  Object Question: Q. word + do/does/did/has + Subject + Verb.',
        formulaEn: 'Who + Verb ...? (Subject)  |  Who + Aux + Subject + Verb? (Object)',
        detailAr:
          'عند السؤال عن الفاعل نضع Who (للعاقل) أو What (لغير العاقل) مكان الفاعل مباشرة بدون فعل مساعد (do/does/did)، أما المفعول فيحتاج فعلاً مساعداً.',
        exampleEn: 'Who teaches the students? / Who has Omar visited?',
        exampleAr: 'من يدرّس الطلاب؟ (فاعل) / من زار عمر؟ (مفعول)',
      },
      {
        headingAr: 'الردود المختصرة والمهذبة في المحادثة',
        ruleEn: 'Polite Agreement: Surely / Of course / With pleasure.  |  Polite Refusal: I’m afraid / I’m sorry + negative clause.',
        detailAr:
          'للموافقة نستخدم Surely / Of course / With pleasure، وللرفض بأدب نستخدم I’m afraid / I’m sorry.',
        exampleEn: 'Will you go to the club? — I’m afraid, I can’t.',
        exampleAr: 'هل ستذهب إلى النادي؟ — أخشى أنني لا أستطيع.',
      },
    ],
    keywords: ['Who', 'Whom', 'What', 'Where', 'When', 'Why', 'Whose', 'How many', 'How long', 'How often'],
    quickTipAr: 'في سؤال المحادثة اقرأ المحادثة كاملة أولاً لتربط الأزمنة والضمائر بين السطور.',
  },
  {
    id: 'sentence-punctuation',
    titleEn: 'Sentence Building & Punctuation',
    titleAr: 'بناء الجملة وعلامات الترقيم',
    usageEn:
      'Every complete English sentence requires a Subject + Verb (+ Object/Complement) and follows standard Capitalization and Punctuation rules.',
    summaryAr:
      'تتكون الجملة الخبرية الصحيحة من فاعل وفعل ومفعول أو تكملة مناسبة (صفة، حال، ظرف مكان أو زمان)، مع الالتزام بقواعد الأحرف الكبيرة وعلامات الترقيم.',
    formulaEn: 'Subject + Verb + Object / Complement (Adj / Adv / Place / Time)',
    formulaAr: 'الفاعل + الفعل + المفعول / التكملة المناسبة',
    diagramType: 'sentence-blocks',
    rulesAr: [
      {
        headingAr: 'أركان الجملة الإنجليزية',
        ruleEn: 'Sentence Order: Subject + Verb + Object / Complement. Adjectives modify nouns; Adverbs modify verbs or adjectives.',
        formulaEn: 'Subject + Verb (+ Object) + Adverb / Place / Time',
        detailAr:
          'لا توجد جملة إنجليزية صحيحة بدون فاعل وفعل. الصفات تصف الاسم وتسبقه غالباً، والظروف تصف الفعل.',
        exampleEn: 'The New Administrative Capital is very smart.',
        exampleAr: 'العاصمة الإدارية الجديدة ذكية للغاية.',
      },
      {
        headingAr: 'استخدام الأحرف الكبيرة (Capital Letters)',
        ruleEn: 'Capitalize: first word of a sentence, proper nouns, cities/countries, days, months, holidays, languages, nationalities, and the pronoun "I".',
        detailAr:
          'تُستخدم الأحرف الكبيرة في: بداية الجملة، أسماء الأعلام والمدن، الأيام والشهور والأعياد، اللغات والجنسيات، والضمير (I).',
        exampleEn: 'I was born on Wednesday, August 18th in Tanta, Egypt.',
        exampleAr: 'وُلدت يوم الأربعاء 18 أغسطس في طنطا، مصر.',
      },
      {
        headingAr: 'النقطة والفاصلة وعلامات الاستفهام والملكية',
        ruleEn: 'Use a period (.) to end statements, a comma (,) for lists or after introductory clauses, and an apostrophe (’) for possession/contractions.',
        detailAr:
          'النقطة (.) نهاية الجملة الخبرية، الفاصلة (,) لتعداد العناصر أو بعد الروابط، والفاصلة العليا (’) للملكية والاختصار.',
        exampleEn: 'When you follow my instructions, you won’t make mistakes.',
        exampleAr: 'عندما تتبع تعليماتي، لن ترتكب أخطاء.',
      },
    ],
    keywords: ['Subject', 'Verb', 'Object', 'Pronouns', 'Conjunctions', 'Capital Letters', 'Comma', 'Apostrophe'],
    quickTipAr: 'تذكّر أن الضمير I يُكتب دائماً بحرف كبير أينما وقع في الجملة.',
  },
  {
    id: 'word-building',
    titleEn: 'Word Building: Prefixes & Suffixes',
    titleAr: 'بناء الكلمات: البادئات واللواحق',
    usageEn:
      'Prefixes attach to the beginning of a root word to alter its meaning, while Suffixes attach to the end to change its grammatical part of speech.',
    summaryAr:
      'البادئات (Prefixes) تُضاف في بداية الكلمة لتغيير معناها (مثل العكس أو التكرار)، واللواحق (Suffixes) تُضاف في نهايتها لتغيير نوعها من فعل أو صفة إلى اسم أو حال.',
    formulaEn: '[Prefix] + Root Word + [Suffix]',
    formulaAr: '[بادئة لتغيير المعنى] + أصل الكلمة + [لاحقة لتغيير النوع]',
    diagramType: 'sentence-blocks',
    rulesAr: [
      {
        headingAr: 'أشهر البادئات (Prefixes)',
        ruleEn: 'Negative Prefixes: un-, in-, im-, il-, ir-, dis-, non- (opposite)  |  mis- (wrongly)  |  re- (again).',
        formulaEn: 'Prefix + Root Word -> New Meaning',
        detailAr:
          'un-, in-, im-, il-, ir-, dis-, non- تعطي عكس المعنى؛ mis- تعني بشكل خاطئ؛ re- تعني إعادة الفعل.',
        exampleEn: 'dishonest / impolite / misunderstand / recycle',
        exampleAr: 'غير أمين / غير مهذب / يسيء الفهم / يعيد تدوير',
      },
      {
        headingAr: 'لواحق تكوين الصفة والحال',
        ruleEn: 'Adjective Suffixes: -ful, -ive, -ous, -al, -able, -ic, -y, -less (without)  |  Adverb Suffix: -ly / -ily.',
        formulaEn: 'Noun / Verb + Adjective Suffix  |  Adjective + -ly -> Adverb',
        detailAr:
          '-ful, -ive, -ous, -al, -able, -ic, -y تحوّل إلى صفة، بينما -less تعني «بدون»، و -ly / -ily تحوّل إلى حال.',
        exampleEn: 'careful / careless / historical / rapidly',
        exampleAr: 'حريص / مهمل / تاريخي / بسرعة',
      },
      {
        headingAr: 'لواحق تكوين الاسم واسم الفاعل',
        ruleEn: 'Abstract Noun Suffixes: -ness, -ment, -ion/-ation, -ity, -ence/-ance  |  Agent Suffixes: -er, -or, -ist, -ian, -ee.',
        formulaEn: 'Root + Noun Suffix -> Noun',
        detailAr:
          '-ness, -ment, -ion/-ation, -ity, -ence/-ance تكوّن الاسم؛ بينما -er, -or, -ist, -ian, -ee تدل على الشخص.',
        exampleEn: 'kindness / treatment / intelligence / activist',
        exampleAr: 'الطيبة / العلاج / الذكاء / ناشط',
      },
    ],
    keywords: ['un-', 'dis-', 'mis-', 're-', '-ful', '-less', '-ness', '-ment', '-ity', '-ly'],
    quickTipAr: 'هذا الدرس يتكرر في كل وحدات الصف الثالث الإعدادي في أسئلة المترادفات والمتضادات!',
  },
  {
    id: 'present-simple',
    titleEn: 'The Present Simple Tense',
    titleAr: 'زمن المضارع البسيط',
    usageEn:
      'Used for repeated habits, daily routines, permanent facts, and scheduled timetables.',
    summaryAr: 'يُعبّر عن العادات المتكررة والحقائق العلمية الثابتة.',
    formulaEn: 'I/We/You/They + inf. | He/She/It + inf. + s/es/ies',
    formulaAr: 'مصدر الفعل (أو + s/es/ies مع المفرد الغائب)',
    diagramType: 'tense-card',
    rulesAr: [
      {
        headingAr: 'التكوين وإضافة s/es/ies',
        ruleEn: 'Add -s to regular verbs with He/She/It; add -es after (-s, -ss, -sh, -ch, -o, -x); change consonant + y to -ies.',
        formulaEn: 'He / She / It + Verb + s / es / ies',
        detailAr:
          'نضيف es إذا انتهى الفعل بـ (s/ss/sh/ch/o/x) مع المفرد، ونقلب y المسبوقة بساكن إلى ies.',
        exampleEn: 'Omar tries hard to achieve his goals.',
        exampleAr: 'يحاول عمر بجد لتحقيق أهدافه.',
      },
      {
        headingAr: 'النفي والسؤال',
        ruleEn: 'Negative: Subject + don’t / doesn’t + inf.  |  Question: Do / Does + Subject + inf. ...?',
        formulaEn: 'don’t / doesn’t + inf.  |  Do / Does + S + inf.?',
        detailAr: 'ننفي بـ don’t / doesn’t + المصدر، ونسأل بـ Do / Does + الفاعل + المصدر.',
        exampleEn: 'Does Aya have a tablet? — Yes, she does.',
        exampleAr: 'هل لدى آية جهاز لوحي؟ — نعم.',
      },
    ],
    keywords: ['always', 'usually', 'often', 'sometimes', 'rarely', 'hardly', 'never'],
    quickTipAr: 'بعد does أو doesn’t يعود الفعل إلى المصدر دائماً بدون s.',
  },
  {
    id: 'past-simple',
    titleEn: 'The Past Simple Tense',
    titleAr: 'زمن الماضي البسيط',
    usageEn:
      'Used for completed actions at a specific time in the past, or past habits with "used to + inf.".',
    summaryAr: 'يُعبّر عن حدث بدأ وانتهى في وقت محدد في الماضي، أو عادة ماضية مع used to.',
    formulaEn: 'Subject + V2 (past form) | Negative: didn’t + inf.',
    formulaAr: 'الفاعل + التصريف الثاني للفعل (أو didn’t + المصدر)',
    diagramType: 'tense-card',
    rulesAr: [
      {
        headingAr: 'الأفعال المنتظمة وغير المنتظمة',
        ruleEn: 'Regular: V1 + -d / -ed / -ied.  |  Irregular: memorize V2 (past of be = was / were).  |  Negative/Question: didn’t / Did + inf.',
        formulaEn: 'S + V2  |  S + didn’t + inf.  |  Did + S + inf.?',
        detailAr: 'نضيف d/ed/ied للأفعال المنتظمة، ونحفظ التصريف الثاني للأفعال الشاذة، وماضي be هو was/were.',
        exampleEn: 'We visited our grandma last Friday. / I went shopping yesterday.',
        exampleAr: 'زرنا جدتنا الجمعة الماضية. / ذهبت للتسوق أمس.',
      },
      {
        headingAr: 'التعبير عن عادة ماضية (used to)',
        ruleEn: 'Past Habit: Subject + used to + inf.  |  Negative: Subject + didn’t use to + inf.',
        formulaEn: 'Subject + used to + inf.',
        detailAr: 'تستخدم used to + المصدر للتعبير عن عادة في الماضي لم تعد تحدث الآن.',
        exampleEn: 'I used to watch cartoons when I was a child.',
        exampleAr: 'اعتدت مشاهدة الرسوم المتحركة عندما كنت طفلاً.',
      },
    ],
    keywords: ['yesterday', 'last', 'ago', 'once', 'in the past', 'in 2023', 'used to'],
    quickTipAr: 'في النفي بـ didn’t والسؤال بـ Did نستخدم المصدر وليس التصريف الثاني.',
  },
  {
    id: 'present-continuous',
    titleEn: 'The Present Continuous Tense',
    titleAr: 'زمن المضارع المستمر',
    usageEn:
      'Used for actions happening right now at the moment of speaking, or confirmed future arrangements (never with stative verbs).',
    summaryAr: 'يُعبّر عن حدث يقع الآن لحظة الكلام، أو ترتيبات مستقبلية مؤكدة.',
    formulaEn: 'Subject + am / is / are + (inf. + ing)',
    formulaAr: 'الفاعل + am / is / are + الفعل مضافاً له ing',
    diagramType: 'tense-card',
    rulesAr: [
      {
        headingAr: 'الاستخدام الأساسي والمستقبلي',
        ruleEn: 'Form: Subject + am / is / are (+ not) + V-ing.  |  Question: Am / Is / Are + Subject + V-ing?',
        formulaEn: 'am / is / are + (inf. + ing)',
        detailAr: 'يصف ما يحدث الآن (at the moment) أو خططاً مستقبلية مرتبة مسبقاً.',
        exampleEn: 'Manal is cleaning the kitchen at the moment.',
        exampleAr: 'منال تنظف المطبخ في هذه اللحظة.',
      },
      {
        headingAr: 'أفعال الحالة لا تأتي في الاستمرار',
        ruleEn: 'Stative verbs (see, know, love, own, understand, believe) are NOT used in continuous (-ing) tenses.',
        detailAr: 'أفعال الإدراك والحواس والمشاعر والملكية لا توضع في المضارع المستمر.',
        exampleEn: 'Now, I can see a bird. (Not: I am seeing)',
        exampleAr: 'الآن يمكنني رؤية طائر.',
      },
    ],
    keywords: ['now', 'Look!', 'Listen!', 'Look out!', 'still', 'at the moment', 'at the present'],
    quickTipAr: 'انتبه لأفعال الحالة (Stative Verbs) التي لا تقبل ing.',
  },
  {
    id: 'past-continuous',
    titleEn: 'The Past Continuous Tense',
    titleAr: 'زمن الماضي المستمر',
    usageEn:
      'Used for an action that was in progress at a specific past time, often interrupted by a Past Simple action.',
    summaryAr: 'يُعبّر عن حدث كان مستمراً في وقت محدد في الماضي، أو قطعه حدث آخر في الماضي البسيط.',
    formulaEn: 'Subject + was / were + (inf. + ing)',
    formulaAr: 'الفاعل + was / were + الفعل مضافاً له ing',
    diagramType: 'timeline',
    rulesAr: [
      {
        headingAr: 'حدث مستمر قطعه حدث قصير',
        ruleEn: 'While / As / Just as + Past Continuous, Past Simple.  |  When + Past Simple, Past Continuous.',
        formulaEn: 'was / were + V-ing  <-- interrupted by -->  Past Simple (V2)',
        detailAr: 'بعد While / As / Just as يأتي ماضٍ مستمر ثم ماضٍ بسيط، وبعد When يأتي غالباً ماضٍ بسيط ثم ماضٍ مستمر.',
        exampleEn: 'Mona was cooking lunch when her phone rang.',
        exampleAr: 'كانت منى تطبخ الغداء عندما رنّ هاتفها.',
      },
      {
        headingAr: 'حدثان مستمران في نفس الوقت',
        ruleEn: 'Parallel Actions: While + Past Continuous, Past Continuous.',
        formulaEn: 'While + S + was/were + V-ing, S + was/were + V-ing',
        detailAr: 'إذا لم يقطع أحدهما الآخر يأتي الفعلان في الماضي المستمر.',
        exampleEn: 'While I was doing my homework, my sister was helping mum.',
        exampleAr: 'بينما كنت أؤدي واجبي، كانت أختي تساعد أمي.',
      },
    ],
    keywords: ['while', 'as', 'just as', 'when', 'all day yesterday', 'yesterday morning'],
    quickTipAr: 'اسأل نفسك: هل الحدثان تقاطعا أم استمرا معاً؟ هذا يحدد زمن الجملة الثانية.',
  },
  {
    id: 'present-perfect-base',
    titleEn: 'The Present Perfect Tense',
    titleAr: 'زمن المضارع التام (أساس الوحدة الأولى)',
    usageEn:
      'Connects past to present: actions continuing until now (since/for), past actions with a present result, recently finished actions (just), or life experiences (ever/never).',
    summaryAr: 'يربط الماضي بالحاضر: حدث بدأ في الماضي وما زال مستمراً، أو انتهى وله أثر الآن، أو تم منذ فترة قصيرة.',
    formulaEn: 'Subject + have / has + P.P. (Past Participle)',
    formulaAr: 'الفاعل + have / has + التصريف الثالث للفعل',
    diagramType: 'timeline',
    rulesAr: [
      {
        headingAr: 'الاستخدامات الأربعة الأساسية',
        ruleEn: 'Active Form: Subject + have / has (+ not) + P.P.  |  Question: Have / Has + Subject + P.P.?',
        formulaEn: 'have / has + P.P.',
        detailAr: 'حدث مستمر (since/for)، أثر حالي، حدث انتهى تواً (just)، أو خبرة سابقة (ever/never).',
        exampleEn: 'Ahmed has hurt his leg, so he can’t play football today.',
        exampleAr: 'أصيب أحمد في ساقه، لذلك لا يستطيع لعب كرة القدم اليوم.',
      },
      {
        headingAr: 'الفرق بين has been to و has gone to',
        ruleEn: 'has/have been to + place (went and came back)  |  has/have gone to + place (still there).',
        formulaEn: 'been to = returned  |  gone to = still there',
        detailAr: 'have/has been to ذهب إلى مكان وعاد منه؛ أما have/has gone to فذهب ولم يعد بعد.',
        exampleEn: 'He has been to Aswan. (He is back) / He has gone to Aswan. (Still there)',
        exampleAr: 'زار أسوان وعاد / ذهب إلى أسوان وما زال هناك.',
      },
    ],
    keywords: ['just', 'already', 'ever', 'never', 'yet', 'since', 'for', 'lately', 'recently'],
    quickTipAr: 'ستتوسّع في هذا الزمن خلال الوحدة الأولى مع صيغة المبني للمجهول (has/have been + P.P.).',
  },
  {
    id: 'past-perfect',
    titleEn: 'The Past Perfect Tense',
    titleAr: 'زمن الماضي التام (أساس الوحدة الثانية والسادسة)',
    usageEn:
      'Used to express the older action (1st action) that happened before another action (2nd action) in the Past Simple.',
    summaryAr: 'يعبّر عن الحدث الأقدم الذي وقع قبل حدث آخر في الماضي البسيط.',
    formulaEn: 'Subject + had + P.P. | After + Past Perfect, Past Simple',
    formulaAr: 'الفاعل + had + التصريف الثالث (الحدث الأول قبل الماضي البسيط)',
    diagramType: 'timeline',
    rulesAr: [
      {
        headingAr: 'الروابط الزمنية مع الماضي التام',
        ruleEn: 'After / As soon as + Past Perfect (had + P.P.), Past Simple.  |  Before / By the time + Past Simple, Past Perfect.',
        formulaEn: 'After / As soon as + had + P.P., V2  |  Before + V2, had + P.P.',
        detailAr:
          'After / As soon as يتبعهما ماضٍ تام ثم ماضٍ بسيط؛ أما Before / By the time فيتبعهما ماضٍ بسيط ثم ماضٍ تام.',
        exampleEn: 'Before Nader went to bed, he had done his homework.',
        exampleAr: 'قبل أن ينام نادر، كان قد أنهى واجبه.',
      },
    ],
    keywords: ['after', 'as soon as', 'before', 'by the time', 'until / till', 'by + past time'],
    quickTipAr: 'ستحتاج الماضي التام بقوة في الحالة الشرطية الثالثة (Unit 2) وفي الكلام المنقول (Unit 6)!',
  },
  {
    id: 'future-simple-base',
    titleEn: 'The Future Simple Tense',
    titleAr: 'زمن المستقبل البسيط (أساس الوحدة الثالثة)',
    usageEn:
      'Used for quick decisions, future facts, predictions without evidence, promises, offers, and requests.',
    summaryAr: 'يستخدم مع القرارات السريعة، الحقائق المستقبلية، التنبؤ بدون دليل، العرض والطلب.',
    formulaEn: 'Subject + will / won’t + inf.',
    formulaAr: 'الفاعل + will / won’t + مصدر الفعل',
    diagramType: 'tense-card',
    rulesAr: [
      {
        headingAr: 'مؤشرات واستخدامات will',
        ruleEn: 'Form: Subject + will / won’t + inf.  |  Used after: expect, think, hope, promise, sure, probably.',
        formulaEn: 'Subject + will / won’t + inf.',
        detailAr: 'يأتي مع أفعال التوقع والوعد ومع tomorrow و next و soon، ويتبعه المصدر بدون إضافات.',
        exampleEn: 'I expect Mona won’t pass the test; she is lazy.',
        exampleAr: 'أتوقع أن منى لن تجتاز الاختبار.',
      },
    ],
    keywords: ['tomorrow', 'next week', 'in the future', 'soon', 'expect', 'think', 'hope', 'probably'],
    quickTipAr: 'في الوحدة الثالثة ستدرس المبني للمجهول منه: will be + P.P.',
  },
];

export const SMART_LEARNING_METHODS: SmartLearningMethod[] = [
  {
    id: 'spaced-repetition',
    titleAr: 'التكرار المتباعد الذكي (Spaced Repetition)',
    titleEn: 'Review Before You Forget',
    badge: 'للمفردات',
    color: '#7C3AED',
    howItWorksAr:
      'بدلاً من حفظ 40 كلمة دفعة واحدة ونسيانها، راجع الكلمات على فترات متباعدة: اليوم الأول، اليوم الثالث، اليوم السابع.',
    stepsAr: [
      'استخدم زر النجمة ⭐ لإضافة الكلمات الصعبة إلى معجمك الشخصي.',
      'استمع للنطق البريطاني والأمريكي بضغطة زر لربط الصوت بالشكل.',
      'افتح بطاقات المراجعة السريعة في المعجم التفاعلي لمدة 5 دقائق يومياً.',
    ],
    applyHereAr: 'مربوط مباشرة بـ «معجم المفردات التفاعلي» و«بطاقات الفلاش كارد».',
  },
  {
    id: 'active-recall',
    titleAr: 'الاسترجاع النشط (Active Recall)',
    titleEn: 'Test Yourself First',
    badge: 'للجرامر',
    color: '#EC4899',
    howItWorksAr:
      'القراءة السلبية تخدع العقل بأنه فهم القاعدة؛ الاسترجاع النشط يجبر عقلك على استخراج الإجابة فتثبت المعلومة 3 أضعاف.',
    stepsAr: [
      'شغّل وضع «الترجمة الفورية عند النقر» لإخفاء الترجمة العربية ومحاولة الفهم أولاً.',
      'حل أسئلة ورقة العمل (10 اختياري + 5 صح وخطأ) فور نهاية كل درس.',
      'انتقل لنظام التقييم التكيفي لاكتشاف نقاط الضعف وإعادة صقلها.',
    ],
    applyHereAr: 'مربوط بوضع الترجمة عند النقر وأوراق العمل التفاعلية.',
  },
  {
    id: 'dual-coding',
    titleAr: 'الترميز المزدوج البصري والسمعي (Dual Coding)',
    titleEn: 'See + Hear = Remember',
    badge: 'للفهم العميق',
    color: '#0D9488',
    howItWorksAr:
      'دمج المخططات البصرية (خطوط الزمن، الأسهم، موازين الأفعال الناقصة) مع الاستماع الصوتي يفعّل مسارين في الذاكرة معاً.',
    stepsAr: [
      'ادرس مخطط القاعدة التفاعلي في قسم الجرامر قبل قراءة الأمثلة.',
      'شغّل قراءة المثال بالسرعة البطيئة (0.75x) ثم العادية (1x).',
      'أعد قراءة الجملة بصوتك في ركن التحدي اللفظي.',
    ],
    applyHereAr: 'كل قاعدة في الوحدات الست لها مخطط بصري + نطق صوتي فوري.',
  },
  {
    id: 'contextual-chunking',
    titleAr: 'التجميع السياقي والبادئات (Chunking & Word Families)',
    titleEn: 'Learn 1 Root = Know 4 Words',
    badge: 'لمضاعفة الحصيلة',
    color: '#D97706',
    howItWorksAr:
      'حفظ كلمة واحدة مع عائلتها (الاسم/الصفة/المرادف/العكس) والبادئات يوفر 60% من جهد الحفظ ويجعلك جاهزاً لأسئلة الامتحان.',
    stepsAr: [
      'اربط كل كلمة بمرادفها وعكسها في بطاقات المقارنة داخل الدرس.',
      'لاحظ كيف تغير لاحقة مثل -ness أو -ity أو بادئة مثل dis-/un- معنى الكلمة.',
      'احفظ التعبير مع حرف الجر الخاص به ككتلة واحدة (مثل: fit in / stand out).',
    ],
    applyHereAr: 'مطبّق في تبويب «ملخص المفردات المرئي» لكل درس.',
  },
  {
    id: 'exam-radar',
    titleAr: 'رادار أسئلة الامتحان (Exam Pattern Strategy)',
    titleEn: 'Spot the Trap Before Choosing',
    badge: 'للتفوق في الامتحان',
    color: '#2563EB',
    howItWorksAr:
      'امتحانات الصف الثالث الإعدادي تركز على تحويلات محددة: Rewrite بـ (since/for/if/will be/told) واختيار المرادف والعكس.',
    stepsAr: [
      'حدد الكلمة المفتاحية في الجملة أولاً (مثل yet, since, by 2030, said to).',
      'تأكد من الفاعل: هل هو مَن قام بالفعل (معلوم) أم وقع عليه الفعل (مجهول)؟',
      'راجع صندوق «تنبيهات الأخطاء الشائعة» في كل درس.',
    ],
    applyHereAr: 'متوفر في صناديق نصائح الامتحان داخل كل وحدة وورقة عمل.',
  },
];

export const FOUNDATION_CONCEPT_MAPS: ConceptMap[] = [
  {
    id: 'tenses-map',
    titleAr: 'خريطة الأزمنة السبعة الأساسية',
    titleEn: 'The 7 Core Tenses Map',
    descriptionAr: 'انقر على أي زمن في الخريطة لعرض تكوينه وكلماته المفتاحية ومثاله المترجم.',
    nodes: [
      {
        id: 'root-tenses',
        labelEn: 'English Tenses',
        labelAr: 'خريطة الأزمنة',
        role: 'root',
        color: '#7C3AED',
        formula: 'Past ◄─── Present ───► Future',
        exampleEn: 'Time + Aspect (Simple / Continuous / Perfect)',
        exampleAr: 'الزمن (ماضٍ/حاضر/مستقبل) × الحالة (بسيط/مستمر/تام)',
      },
      {
        id: 'm-pres-simple',
        labelEn: 'Present Simple',
        labelAr: 'مضارع بسيط',
        role: 'branch',
        parentId: 'root-tenses',
        color: '#0D9488',
        formula: 'V1 / V1+s (always, usually)',
        exampleEn: 'Salma lives in Cairo.',
        exampleAr: 'سلمى تعيش في القاهرة. (حقيقة/عادة)',
      },
      {
        id: 'm-pres-cont',
        labelEn: 'Present Continuous',
        labelAr: 'مضارع مستمر',
        role: 'branch',
        parentId: 'root-tenses',
        color: '#0284C7',
        formula: 'am/is/are + V-ing (now, at the moment)',
        exampleEn: 'I am reading a story now.',
        exampleAr: 'أنا أقرأ قصة الآن.',
      },
      {
        id: 'm-pres-perf',
        labelEn: 'Present Perfect',
        labelAr: 'مضارع تام',
        role: 'branch',
        parentId: 'root-tenses',
        color: '#4F46E5',
        formula: 'have/has + P.P. (since, for, just, yet)',
        exampleEn: 'I have studied English since 2014.',
        exampleAr: 'أدرس الإنجليزية منذ 2014 وما زلت.',
      },
      {
        id: 'm-past-simple',
        labelEn: 'Past Simple',
        labelAr: 'ماضٍ بسيط',
        role: 'branch',
        parentId: 'root-tenses',
        color: '#D97706',
        formula: 'V2 / didn’t + inf. (yesterday, ago)',
        exampleEn: 'We saw a nice film yesterday.',
        exampleAr: 'شاهدنا فيلماً جميلاً أمس.',
      },
      {
        id: 'm-past-cont',
        labelEn: 'Past Continuous',
        labelAr: 'ماضٍ مستمر',
        role: 'branch',
        parentId: 'root-tenses',
        color: '#EA580C',
        formula: 'was/were + V-ing (while, when)',
        exampleEn: 'I was studying when dad returned.',
        exampleAr: 'كنت أذاكر عندما عاد أبي.',
      },
      {
        id: 'm-past-perf',
        labelEn: 'Past Perfect',
        labelAr: 'ماضٍ تام',
        role: 'branch',
        parentId: 'root-tenses',
        color: '#DC2626',
        formula: 'had + P.P. (after, before, by the time)',
        exampleEn: 'We washed the dishes after we had eaten.',
        exampleAr: 'غسلنا الأطباق بعدما أكلنا (الأقدم).',
      },
      {
        id: 'm-future',
        labelEn: 'Future Simple',
        labelAr: 'مستقبل بسيط',
        role: 'branch',
        parentId: 'root-tenses',
        color: '#059669',
        formula: 'will + inf. (tomorrow, next, expect)',
        exampleEn: 'We hope she will pass the test.',
        exampleAr: 'نأمل أن تجتاز الاختبار.',
      },
    ],
  },
  {
    id: 'questions-map',
    titleAr: 'خريطة تكوين السؤال والمحادثة',
    titleEn: 'Dialog & Question Architecture',
    descriptionAr: 'دليلك البصري السريع لحل سؤال المحادثة بدون أخطاء في ترتيب الكلمات.',
    nodes: [
      {
        id: 'q-root',
        labelEn: 'Question Types',
        labelAr: 'أنواع الأسئلة',
        role: 'root',
        color: '#EC4899',
        formula: 'Yes/No Question vs. Wh- Question',
        exampleEn: 'Start with Auxiliary OR Question Word',
        exampleAr: 'هل يبدأ بفعل مساعد أم بأداة استفهام؟',
      },
      {
        id: 'q-yesno',
        labelEn: 'Yes / No Question',
        labelAr: 'سؤال بـ «هل»',
        role: 'branch',
        parentId: 'q-root',
        color: '#7C3AED',
        formula: 'Aux / Modal + Subject + Main Verb?',
        exampleEn: 'Did you travel by plane before?',
        exampleAr: 'هل سافرت بالطائرة من قبل؟',
      },
      {
        id: 'q-wh-obj',
        labelEn: 'Wh- (Non-Subject)',
        labelAr: 'سؤال عن المفعول/الزمان/المكان',
        role: 'branch',
        parentId: 'q-root',
        color: '#0D9488',
        formula: 'Q. Word + Aux + Subject + Verb?',
        exampleEn: 'When did she buy a dress?',
        exampleAr: 'متى اشترت فستاناً؟ (نستخدم فعل مساعد did)',
      },
      {
        id: 'q-wh-subj',
        labelEn: 'Wh- (Subject)',
        labelAr: 'سؤال عن الفاعل',
        role: 'branch',
        parentId: 'q-root',
        color: '#D97706',
        formula: 'Who / What + Verb (No do/does/did)!',
        exampleEn: 'Who teaches the students?',
        exampleAr: 'من يدرّس الطلاب؟ (بدون فعل مساعد)',
      },
      {
        id: 'q-polite',
        labelEn: 'Polite Replies',
        labelAr: 'الردود المهذبة',
        role: 'branch',
        parentId: 'q-root',
        color: '#2563EB',
        formula: 'Of course / With pleasure | I’m afraid...',
        exampleEn: 'I’m afraid, I can’t.',
        exampleAr: 'أخشى أنني لا أستطيع.',
      },
    ],
  },
  {
    id: 'word-building-map',
    titleAr: 'خريطة البادئات واللواحق لبناء الكلمات',
    titleEn: 'Prefixes & Suffixes Blueprint',
    descriptionAr: 'افهم كيف تتحول الكلمة الواحدة إلى صفة أو اسم أو حال أو عكس.',
    nodes: [
      {
        id: 'wb-root',
        labelEn: 'Root Word',
        labelAr: 'أصل الكلمة',
        role: 'root',
        color: '#0D9488',
        formula: 'Prefix (Meaning) + Root + Suffix (Part of Speech)',
        exampleEn: 'un + kind + ness = unkindness',
        exampleAr: 'بادئة + جذر + لاحقة = كلمة جديدة دقيقة',
      },
      {
        id: 'wb-opp',
        labelEn: 'Opposite Prefixes',
        labelAr: 'بادئات العكس',
        role: 'branch',
        parentId: 'wb-root',
        color: '#DC2626',
        formula: 'un-, in-, im-, il-, ir-, dis-, non-',
        exampleEn: 'dishonest / impolite / irregular / illogical',
        exampleAr: 'غير أمين / غير مهذب / غير منتظم / غير منطقي',
      },
      {
        id: 'wb-mis-re',
        labelEn: 'Action Prefixes',
        labelAr: 'بادئات الخطأ والتكرار',
        role: 'branch',
        parentId: 'wb-root',
        color: '#D97706',
        formula: 'mis- (wrongly) | re- (again)',
        exampleEn: 'misunderstand / recycle / rewrite',
        exampleAr: 'يسيء الفهم / يعيد التدوير / يعيد الكتابة',
      },
      {
        id: 'wb-adj',
        labelEn: 'Adjective Suffixes',
        labelAr: 'لواحق الصفة',
        role: 'branch',
        parentId: 'wb-root',
        color: '#4F46E5',
        formula: '-ful, -less, -ive, -ous, -al, -able',
        exampleEn: 'careful / useless / historical / supportive',
        exampleAr: 'حريص / عديم الفائدة / تاريخي / داعم',
      },
      {
        id: 'wb-noun',
        labelEn: 'Noun & Person Suffixes',
        labelAr: 'لواحق الاسم والشخص',
        role: 'branch',
        parentId: 'wb-root',
        color: '#059669',
        formula: '-ness, -ment, -ity, -ion | -er, -or, -ist',
        exampleEn: 'kindness / personality / activist',
        exampleAr: 'الطيبة / الشخصية / ناشط',
      },
    ],
  },
];
