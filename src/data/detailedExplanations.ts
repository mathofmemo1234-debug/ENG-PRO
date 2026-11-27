import { LessonDetailedExplanation } from'./types';

export const FOUNDATION_UNIT_LINKS: Record<string, { unitId: string; lessonId: string; labelAr: string }[]> = {
'dialog-questions': [
 { unitId: 'unit-1', lessonId: 'u1-p1', labelAr: 'الوحدة 1: مهارة المحادثة (Asking about identity)' },
 { unitId: 'unit-2', lessonId: 'u2-p1', labelAr: 'الوحدة 2: حوار البقاء متصلاً' },
 { unitId: 'unit-4', lessonId: 'u4-p1', labelAr: 'الوحدة 4: إدارة وقت الشاشة' },
 ],
'sentence-punctuation': [
 { unitId: 'unit-1', lessonId: 'u1-p3', labelAr: 'الوحدة 1: كتابة السيرة الذاتية (A Biography)' },
 { unitId: 'unit-2', lessonId: 'u2-p3', labelAr: 'الوحدة 2: بناء الفقرة الإنجليزية (A Paragraph)' },
 { unitId: 'unit-6', lessonId: 'u6-p3', labelAr: 'الوحدة 6: كتابة القصة القصيرة (A Story)' },
 ],
'word-building': [
 { unitId: 'unit-1', lessonId: 'u1-p2', labelAr: 'الوحدة 1 (دروس 3 و4): البادئات واللواحق' },
 { unitId: 'unit-2', lessonId: 'u2-p2', labelAr: 'الوحدة 2 (دروس 3 و4): dis- و re- و -ion/-ment' },
 { unitId: 'unit-3', lessonId: 'u3-p2', labelAr: 'الوحدة 3 (دروس 3 و4): صفات -ing و -ed' },
 ],
'present-simple': [
 { unitId: 'unit-4', lessonId: 'u4-p1', labelAr: 'الوحدة 4: العادات والأفعال الناقصة' },
 { unitId: 'unit-5', lessonId: 'u5-p1', labelAr: 'الوحدة 5: صيغة الأمر والمصدر' },
 ],
'past-simple': [
 { unitId: 'unit-1', lessonId: 'u1-p3', labelAr: 'الوحدة 1: أحداث السيرة الذاتية الماضية' },
 { unitId: 'unit-6', lessonId: 'u6-p1', labelAr: 'الوحدة 6: تحويل الماضي البسيط في الكلام المنقول' },
 ],
'present-continuous': [
 { unitId: 'unit-4', lessonId: 'u4-p2', labelAr: 'الوحدة 4: موازنة وقت الشاشة' },
 { unitId: 'unit-6', lessonId: 'u6-p1', labelAr: 'الوحدة 6: تحويل المضارع المستمر إلى ماضٍ مستمر' },
 ],
'past-continuous': [
 { unitId: 'unit-6', lessonId: 'u6-p2', labelAr: 'الوحدة 6: عناصر القصة القصيرة' },
 { unitId: 'unit-6', lessonId: 'u6-p3', labelAr: 'الوحدة 6: السرد القصصي' },
 ],
'present-perfect-base': [
 { unitId: 'unit-1', lessonId: 'u1-p1', labelAr: 'الوحدة 1 (دروس 1 و2): المضارع التام (المعلوم والمجهول)' },
 { unitId: 'unit-1', lessonId: 'u1-p2', labelAr: 'الوحدة 1 (دروس 3 و4): تطبيقات السياق والقصة' },
 ],
'past-perfect': [
 { unitId: 'unit-2', lessonId: 'u2-p1', labelAr: 'الوحدة 2 (دروس 1 و2): الماضي التام + الحالة الشرطية الثالثة' },
 { unitId: 'unit-6', lessonId: 'u6-p1', labelAr: 'الوحدة 6: الكلام غير المباشر (Backshift للماضي التام)' },
 ],
'future-simple-base': [
 { unitId: 'unit-3', lessonId: 'u3-p1', labelAr: 'الوحدة 3 (دروس 1 و2): المستقبل البسيط (المعلوم والمجهول)' },
 { unitId: 'unit-3', lessonId: 'u3-p3', labelAr: 'الوحدة 3 (دروس 5 و6): كتابة الإيميل' },
 ],
};

export const DETAILED_EXPLANATIONS: Record<string, LessonDetailedExplanation> = {
'u1-p1': {
 lessonId: 'u1-p1',
 hookQuestionAr: 'هل تحكم على شخص من مظهره الخارجي فقط، أم أن هويته الحقيقية تتجاوز المظهر؟',
 hookQuestionEn: 'What makes your personal identity go beyond your looks?',
 objectivesAr: [
'إتقان زمن المضارع التام (المبني للمعلوم والمجهول) بجميع حالاته وأمثلة Rewrite بأسلوب مبسّط ومنهجي.',
'التمييز الدقيق بين الكلمات الدالة (for, since, just, already, yet, ever, never, lately, recently) وقاعدة has been to / has gone to.',
'استيعاب ملاحظات القراءة (gain/win/earn, remember/remind, a/an + number-year-old) ومهارة المحادثة التفاعلية.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'The Present Perfect Tense (Active & Passive)',
 ruleTitleAr: 'زمن المضارع التام في المبني للمعلوم والمبني للمجهول',
 usageEn: [
'1. Actions or experiences that happened at an unspecified time in the past.',
'2. Actions that started in the past and continue up till now.',
'3. Recently completed actions.',
'4. Actions that happened in the past and have an effect—a result now.',
 ],
 usageArSummary:
'يُستخدم زمن المضارع التام للحديث عن: (1) مواقف أو تجارب حدثت في وقت غير محدد في الماضي، (2) مواقف بدأت في الماضي وما زالت مستمرة حتى الآن، (3) أحداث انتهت منذ فترة قصيرة جداً، (4) أفعال حدثت في الماضي ولها تأثير أو نتيجة الآن.',
 diagramType: 'active-passive',
 diagramData: {
 activeS: 'Scientists',
 activeV: 'have discovered',
 activeO: 'a new planet',
 passiveS: 'A new planet',
 passiveV: 'has been discovered',
 passiveBy: 'by scientists',
 },
 structures: [
 {
 labelEn: 'Affirmative (Active)',
 formulaEn: 'I / You / They / We / Plural + have + P.P. | He / She / It / Singular + has + P.P.',
 structureAr: 'في الإثبات للمعلوم: نبدأ بالفاعل (مع ضمائر الجمع والضمير I نستخدم have، ومع المفرد الغائب نستخدم has) متبوعاً بالتصريف الثالث للفعل (P.P.).',
 exampleEn: 'I have watched the match. / Mona has eaten lunch since 2 o’clock.',
 exampleAr: 'شاهدت المباراة. / تناولت منى الغداء منذ الساعة الثانية.',
 },
 {
 labelEn: 'Negative (Active)',
 formulaEn: 'I / You / They / We / Plural + haven’t + P.P. | He / She / It / Singular + hasn’t + P.P.',
 structureAr: 'في النفي للمعلوم: نضع not بعد الفعل المساعد (haven’t للجمع أو hasn’t للمفرد) ثم التصريف الثالث للفعل.',
 exampleEn: 'I haven’t watched the match. / Mona hasn’t eaten lunch yet.',
 exampleAr: 'لم أشاهد المباراة. / لم تتناول منى الغداء بعد.',
 },
 {
 labelEn: 'Yes / No Question (Active)',
 formulaEn: 'Have + I / you / they / we / plural + P.P....? | Has + he / she / it / singular + P.P....?',
 structureAr: 'للسؤال بـ «هل» في المعلوم: نُقدّم Have أو Has على الفاعل، يليه التصريف الثالث للفعل وتكملة الجملة ثم علامة الاستفهام.',
 exampleEn: 'Have you watched the match? / Has Mona eaten lunch?',
 exampleAr: 'هل شاهدت المباراة؟ / هل تناولت منى الغداء؟',
 },
 {
 labelEn: 'Affirmative (Passive)',
 formulaEn: 'Object + has / have + been + P.P. (+ by + subject)',
 structureAr: 'في الإثبات للمجهول: نبدأ بالمفعول (Object)، ثم نختار has أو have حسب كون المفعول مفرداً أو جمعاً، ثم نضيف «been» الثابتة وبعدها التصريف الثالث (P.P.).',
 exampleEn: 'My car has been stolen since last week.',
 exampleAr: 'سُرقت سيارتي منذ الأسبوع الماضي.',
 },
 {
 labelEn: 'Negative (Passive)',
 formulaEn: 'Object + hasn’t / haven’t + been + P.P.',
 structureAr: 'في النفي للمجهول: نبدأ بالمفعول ثم hasn’t أو haven’t متبوعاً بـ been ثم التصريف الثالث.',
 exampleEn: 'Lunch hasn’t been served yet.',
 exampleAr: 'لم يُقدَّم الغداء بعد.',
 },
 {
 labelEn: 'Yes / No Question (Passive)',
 formulaEn: 'Has / Have + object + been + P.P....?',
 structureAr: 'للسؤال بـ «هل» في المجهول: نبدأ بـ Has أو Have ثم المفعول، وبعده been ثم التصريف الثالث.',
 exampleEn: 'Has the car been fixed yet?',
 exampleAr: 'هل تم إصلاح السيارة بعد؟',
 },
 ],
 keywords: [
 {
 tokenEn: 'for + a period of time',
 ruleEn: 'for + (two hours/days/weeks/months/years/centuries) | for the last... | for a while / ages / a long time / all of his life',
 structureAr: 'تأتي for قبل مدة وقوع الحدث كاملة (ساعتين، أسبوعين، 26 عاماً، طوال حياته).',
 exampleEn: 'I have spoken English for 26 years.',
 },
 {
 tokenEn: 'since + a point in time',
 ruleEn: 'since + (two o’clock / Sunday / May / 2010 / morning / winter) | since last... | since + noun / (inf. + ing) | since the age of | since then',
 structureAr: 'تأتي since قبل نقطة بداية الحدث (منذ الساعة الثانية، منذ 2000، منذ ذلك الحين، أو منذ + اسم / فعل+ing عند عدم وجود فاعل).',
 exampleEn: 'I have spoken English since 2000.',
 },
 {
 tokenEn: 'just',
 ruleEn: 'Subject + have / has + just + P.P.',
 structureAr: 'بمعنى «حالاً / تواً»، وتأتي بين have/has والتصريف الثالث في الجملة المثبتة.',
 exampleEn: 'He has just finished his homework.',
 },
 {
 tokenEn: 'already',
 ruleEn: 'Subject + have / has + already + P.P. |... already. | Have/Has + S + P.P. + already? (surprise)',
 structureAr: 'بمعنى «بالفعل»، وتأتي بين have/has والتصريف الثالث في الإثبات، أو في نهاية الجملة للتأكيد، أو في نهاية السؤال للتعبير عن الدهشة.',
 exampleEn: 'Have you finished cooking already? I’m surprised.',
 },
 {
 tokenEn: 'yet',
 ruleEn: 'Negative / Question +... + yet',
 structureAr: 'بمعنى «حتى الآن / بعد»، وتأتي في نهاية الجملة المنفية وفي نهاية السؤال فقط.',
 exampleEn: 'Has Ali bought a mobile yet? / Ali hasn’t finished his homework yet.',
 },
 {
 tokenEn: 'ever / never',
 ruleEn: 'Have/Has + S + ever + P.P.? (or superlatives) | Subject + have/has + never + P.P.',
 structureAr: 'تُستخدم ever في السؤال والاستفهام وفي جمل التفضيل العليا؛ أما never فتأتي بعد have/has في جملة مثبتة شكلاً لتفيد النفي التام بمعنى «أبداً».',
 exampleEn: 'Have you ever been to Paris? / It’s the most interesting match I have ever watched. / We have never lived in Giza.',
 },
 {
 tokenEn: 'lately / recently',
 ruleEn: 'Negative / Question +... + lately | Affirmative +... + recently',
 structureAr: 'كلاهما بمعنى «مؤخراً»؛ تُستخدم lately غالباً في نهاية المنفية والاستفهامية، بينما تأتي recently غالباً في نهاية المثبتة.',
 exampleEn: 'He hasn’t visited Alex lately. / I’ve seen him recently.',
 },
 ],
 specialNotes: [
 {
 ruleEn: 'Present Perfect + since + Past Simple',
 structureAr: 'إذا ربطت since بين جملتين، يأتي قبلها زمن مضارع تام ويأتي بعدها جملة في زمن الماضي البسيط.',
 exampleEn: 'We haven’t seen Ali since he was in Alex.',
 },
 {
 ruleEn: 'Subject + has/have been to + place VS Subject + has/have gone to + place',
 structureAr: 'تعبير has/have been to يعني ذهب إلى مكان وزاره وعاد منه؛ أما has/have gone to فيعني ذهب إلى مكان وما زال هناك ولم يعد.',
 exampleEn: 'My father has been to Paris. (He is in Cairo now.) / My father has gone to France. (He is still there.)',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'Scientists have discovered a new planet.',
 bracketWordEn: '(A new planet)',
 answerEn: 'A new planet has been discovered by scientists.',
 howAr: 'نبدأ الجملة بالمفعول (A new planet) ثم نحول المضارع التام إلى مجهول (has been discovered) ثم (by) والفاعل.',
 },
 {
 promptEn: 'I last visited my uncle in 2020.',
 bracketWordEn: '(since)',
 answerEn: 'I haven’t visited my uncle since 2020.',
 howAr: 'عند وجود (last) في جملة ماضٍ بسيط، تتحول إلى مضارع تام منفي (haven’t visited) مع حذف in واستبدالها بـ since.',
 },
 {
 promptEn: 'They moved to Dubai five years ago and still live there.',
 bracketWordEn: '(for)',
 answerEn: 'They have lived in Dubai for five years.',
 howAr: 'يتم حذف (ago) وتحويل الجملة إلى مضارع تام مع إضافة (for) يليها المدة الزمنية للحدث.',
 },
 {
 promptEn: 'The email arrived a moment ago.',
 bracketWordEn: '(just)',
 answerEn: 'The email has just arrived.',
 howAr: 'يتم حذف (a moment ago) وتحويل الفعل إلى مضارع تام تتوسطه (just): has just arrived.',
 },
 {
 promptEn: 'This is my first time I have ever eaten sushi.',
 bracketWordEn: '(never)',
 answerEn: 'I have never eaten sushi before.',
 howAr: 'نبدأ بالفاعل (I) ونضع (never) في وسط المضارع التام (have never eaten) ونختم الجملة بكلمة (before).',
 },
 {
 promptEn: 'They are still watching the movie.',
 bracketWordEn: '(yet)',
 answerEn: 'They haven’t finished watching the movie yet.',
 howAr: 'نحذف (are still) ونضيف الفعل (finish) في زمن المضارع التام المنفي (haven’t finished) ونضع (yet) في نهاية الجملة.',
 },
 {
 promptEn: 'Sarah began playing the piano when she was five years old.',
 bracketWordEn: '(since)',
 answerEn: 'Sarah has played the piano since she was five years old.',
 howAr: 'يتم تحويل (when) إلى (since) مع تحويل الماضي البسيط قبلها إلى مضارع تام والإبقاء على الماضي البسيط بعدها.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'gain / win / earn',
 ruleEn: 'gain (+ knowledge/experience/weight) | win (+ prize/medal/match) | earn (+ money/living)',
 structureAr: 'gain يكتسب شيئاً معنوياً (خبرة/معرفة/ثقة)، win يفوز بشيء مادي أو مسابقة، earn يكسب مالاً أو قوت يومه من العمل.',
 examplesEn: [
'I gained a lot of knowledge during my training.',
'Adel wants to win the gold medal for running.',
'My dad earns a lot of money from his job.',
 ],
 },
 {
 titleEn: 'remember / remind',
 ruleEn: 'remember + to inf. / noun | remind + object + to inf.',
 structureAr: 'remember يتذكر من تلقاء نفسه، بينما remind يُذكّر شخصاً آخر بفعل شيء (يتبعها مفعول).',
 examplesEn: ['Please, remind me to send Nader the book he needs. I may not remember to send it.'],
 },
 {
 titleEn: 'a / an + number-year-old + singular noun',
 ruleEn: 'a / an + [number]-year-old + singular noun',
 structureAr: 'صفة مركبة قبل الاسم المفرد؛ لاحظ عدم جمع كلمة year لأنها جاءت بين شرطتين كصفة للاسم.',
 examplesEn: ['Today, we’re speaking with Leila, a 15-year-old student from Alexandria.'],
 },
 {
 titleEn: 'as (كـ / بوظيفة)',
 ruleEn: 'Subject + work / act + as + a/an + job',
 structureAr: 'تُستخدم as قبل اسم الوظيفة أو الدور بمعنى «بصفته / كـ».',
 examplesEn: ['My uncle works as a teacher.'],
 },
 ],
 prefixesSuffixes: [
 { word: 'kind (adj)', affix: '-ness', functionAr: 'تحوّل الصفة إلى اسم', newWord: 'kindness (n)', meaningAr: 'لطف / طيبة' },
 { word: 'use (v)', affix: '-ful', functionAr: 'تحوّل إلى صفة', newWord: 'useful (adj)', meaningAr: 'مفيد' },
 { word: 'stress (v)', affix: '-ed', functionAr: 'تحوّل إلى صفة', newWord: 'stressed (adj)', meaningAr: 'متوتر / مضغوط' },
 { word: 'honest (adj)', affix: '-ly', functionAr: 'تحوّل الصفة إلى حال', newWord: 'honestly (adv)', meaningAr: 'بصدق / بصراحة' },
 { word: 'individual / personal (adj)', affix: '-ity', functionAr: 'تحوّل الصفة إلى اسم', newWord: 'individuality / personality (n)', meaningAr: 'فردية / شخصية' },
 ],
 speakingQA: {
 titleEn: 'SKILLS: Asking and answering about your identity',
 titleAr: 'مهارة المحادثة: السؤال والإجابة عن هويتك',
 pairs: [
 { qEn: 'Who are you really inside?', aEn: 'I am a kind and honest person.', arSummary: 'من أنت حقاً في داخلك؟ — أنا شخص طيب وصادق.' },
 { qEn: 'What do you think of hard work?', aEn: 'I value hard work. It shapes our future.', arSummary: 'ما رأيك في العمل الجاد؟ — أُقدّر العمل الجاد، فهو يشكّل مستقبلنا.' },
 { qEn: 'How do other people’s opinions affect you?', aEn: 'They affect me a little, but I follow my mind.', arSummary: 'كيف تؤثر آراء الآخرين عليك؟ — تؤثر قليلاً، لكني أتّبع عقلي.' },
 { qEn: 'How do you feel when you hear negative opinions?', aEn: 'I feel sad at first, then I try to improve myself.', arSummary: 'كيف تشعر عند سماع آراء سلبية؟ — أشعر بالحزن أولاً، ثم أحاول تحسين نفسي.' },
 {
 qEn: 'What three words describe your personality best? Why?',
 aEn: 'I am kind, confident, and unique. What makes me different is that I believe in myself and enjoy helping others.',
 arSummary: 'ما الكلمات الثلاث التي تصف شخصيتك؟ — طيب وواثق ومميز؛ لأنني أؤمن بنفسي وأستمتع بمساعدة الآخرين.',
 },
 ],
 },
 dissectionTitleAr: 'تفكيك جملة نموذجية في المضارع التام المجهول',
 sentenceDissection: [
 { text: 'Many inspiring projects', roleEn: 'New Subject (Object)', roleAr: 'المفعول (جمع)', color: '#0d9488', tipAr: 'لأنه جمع نستخدم معه have وليس has' },
 { text: 'have been', roleEn: 'Passive Auxiliary', roleAr: 'مساعد المجهول التام', color: '#4f46e5', tipAr: 'التركيبة الثابتة: have/has + been' },
 { text: 'created', roleEn: 'Past Participle (P.P.)', roleAr: 'التصريف الثالث', color: '#d97706', tipAr: 'يأتي التصريف الثالث دائماً بعد been' },
 { text: 'by young students', roleEn: 'Agent', roleAr: 'الفاعل الحقيقي (اختياري)', color: '#059669', tipAr: 'يسبق الفاعل الحقيقي حرف الجر by' },
 { text: 'since 2024.', roleEn: 'Starting Point', roleAr: 'بداية المدة الزمنية', color: '#e11d48', tipAr: '2024 نقطة بداية محددة فنستخدم since' },
 ],
 mnemonicTitleAr: 'شفرة الحفظ الذهنية (since vs. for)',
 mnemonicAr:
'«S» في since تذكّرك بكلمة Start (نقطة البداية: 2019، الإثنين، الطفولة)، بينما «F» في for تذكّرك بكلمة Full period (المدة الكاملة: 5 سنوات، ساعتين، مدة طويلة). وفي المجهول: لا تنسَ جسر «been»!',
 examBlueprintAr: [
 { questionType: 'اختيار من متعدد (MCQ)', tipAr: 'تأكد أولاً: هل الاسم الأول فاعل أم مفعول؟ إذا وقع عليه الفعل فاختر have/has been + P.P.' },
 { questionType: 'تصحيح الكلمة بين القوسين / Rewrite', tipAr: 'إذا رأيت last + ماضٍ بسيط وحوّلتها بـ since، فاقلب الزمن لمضارع تام منفي (haven’t/hasn’t + P.P.).' },
 ],
 miniCheck: {
 questionEn: 'A new community library ________ in our town since last month.',
 questionAr: 'مكتبة مجتمعية جديدة ________ في مدينتنا منذ الشهر الماضي.',
 options: ['has built', 'has been built', 'was built', 'have been built'],
 correctIndex: 1,
 explanationAr: 'المكتبة مفرد (has) ووقع عليها فعل البناء (مبني للمجهول) ومع وجود since نختار المضارع التام المجهول: has been built.',
 },
 },

'u1-p2': {
 lessonId: 'u1-p2',
 hookQuestionAr: 'ماذا تكشف «لحظة المرآة» عن ثقتك بنفسك، وكيف بدأت زينب مشروع حديقة المدرسة؟',
 hookQuestionEn: 'What does "The Mirror Moment" reveal about confidence and Zeina’s garden idea?',
 objectivesAr: [
'إتقان قواعد بناء الكلمات بالبادئات واللواحق (-er, -ed, un-) وتصريف الفعل stand/stood/stood بأمثلة واضحة.',
'استيعاب التعريفات والتعبيرات القرائية (blend into, find comfort in, keep to herself, stand out).',
'ربط قراءة «The Mirror Moment» بأحداث الفصل الأول من قصة «The School Garden Project».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Word Formation Rules & Context Clues (Lesson 3 & Story Ch. 1)',
 ruleTitleAr: 'قواعد اشتقاق الكلمات والتعريفات السياقية',
 usageEn: [
'1. Verb + "-er" forms a noun referring to a person or thing (post -> poster).',
'2. Verb + "-ed" forms an adjective describing a personal feeling (confuse -> confused).',
'3. Prefix "un-" before an adjective forms its opposite (sure -> unsure).',
'4. Irregular Verb: stand -> stood -> stood.',
 ],
 usageArSummary:
'تعتمد دروس القراءة والقصة في الجزء الثاني على قواعد الاشتقاق: تحويل الفعل لاسم بإضافة (-er)، أو لصفة شعور بإضافة (-ed)، وعكس الصفة بإضافة البادئة (un-)، مع ضبط التعريفات والتعبيرات الاصطلاحية.',
 diagramType: 'sentence-blocks',
 structures: [
 {
 labelEn: 'Verb + -er -> Noun',
 formulaEn: 'Verb (post) + -er -> Noun (poster)',
 structureAr: 'إضافة اللاحقة -er إلى نهاية الفعل تحوّله إلى اسم يدل على الناتج أو القائم بالفعل.',
 exampleEn: 'Zeina designed a colorful poster for the school garden project.',
 exampleAr: 'صممت زينب ملصقاً ملوناً لمشروع حديقة المدرسة.',
 },
 {
 labelEn: 'Verb + -ed -> Feeling Adjective',
 formulaEn: 'Verb (confuse) + -ed -> Adjective (confused)',
 structureAr: 'حذف حرف e الصامت إن وُجد وإضافة -ed للفعل يحوّله إلى صفة تصف شعور الشخص (مرتبك/حائر).',
 exampleEn: 'I felt confused when the teacher explained the difficult rule.',
 exampleAr: 'شعرت بالحيرة عندما شرح المعلم القاعدة الصعبة.',
 },
 {
 labelEn: 'un- + Adjective -> Opposite',
 formulaEn: 'Prefix un- + Adjective (sure) -> Opposite (unsure)',
 structureAr: 'إضافة البادئة un- في بداية الصفة تعطي المعنى المعاكس تماماً (متأكد ← غير متأكد).',
 exampleEn: 'She was unsure at first, then she became confident.',
 exampleAr: 'كانت غير متأكدة في البداية، ثم أصبحت واثقة.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'Key Definitions',
 ruleEn: 'adjusting (v) | confident (adj) | curious (adj) | values (n)',
 structureAr: 'adjusting: يتأقلم/يُعدّل شيئاً قليلاً لجعله أفضل | confident: واثق بقدراته وصفاته وقراراته | curious: فضولي ومهتم باكتشاف أشياء جديدة | values: المبادئ والقيم التي توجه حياتنا.',
 examplesEn: [
'Adel tried to blend into the group by copying their behavior.',
'Sarah is very outgoing and enjoys meeting new people.',
'I find comfort in talking to my best friend after a long day.',
 ],
 },
 {
 titleEn: 'Prepositions & Idioms',
 ruleEn: 'blend into | find comfort in | keep to herself | stand out | give a thumb-up',
 structureAr: 'blend into يندمج في المجموعة | find comfort in يجد الراحة في | keep to herself تنعزل عن الآخرين | stand out يبرز ويتميز عن الباقين.',
 examplesEn: ['True friends stand out by being honest and supportive.'],
 },
 ],
 prefixesSuffixes: [
 { word: 'post (v)', affix: '-er', functionAr: 'تحوّل إلى اسم', newWord: 'poster (n)', meaningAr: 'ملصق إعلاني' },
 { word: 'confuse (v)', affix: '-ed', functionAr: 'تحوّل إلى صفة', newWord: 'confused (adj)', meaningAr: 'مرتبك / حائر' },
 { word: 'sure (adj)', affix: 'un-', functionAr: 'تعطي عكس الكلمة', newWord: 'unsure (adj)', meaningAr: 'غير متأكد' },
 ],
 dissectionTitleAr: 'تفكيك جملة تطبيقية تجمع القصة واللواحق',
 sentenceDissection: [
 { text: 'Zeina’s', roleEn: 'Possessive Subject', roleAr: 'ملكية (تعود على زينب)', color: '#0d9488', tipAr: 'فاصلة الملكية ’s تعود على صاحبة الفكرة' },
 { text: 'kindness', roleEn: 'Noun (-ness)', roleAr: 'اسم مشتق من الصفة kind', color: '#4f46e5', tipAr: 'اللاحقة -ness حوّلت الصفة إلى اسم' },
 { text: 'and', roleEn: 'Coordinator', roleAr: 'أداة عطف', color: '#64748b', tipAr: 'تربط بين اسمين متوازيين' },
 { text: 'helpful', roleEn: 'Adjective (-ful)', roleAr: 'صفة إيجابية (مفيد/متعاون)', color: '#059669', tipAr: 'اللاحقة -ful تعني مملوء بالعون' },
 { text: 'ideas', roleEn: 'Head Noun', roleAr: 'الاسم الموصوف', color: '#d97706', tipAr: 'الصفة في الإنجليزية تسبق الاسم' },
 { text: 'inspired everyone.', roleEn: 'Past Action + Object', roleAr: 'الفعل الماضي والمفعول', color: '#e11d48', tipAr: 'فعل ماضٍ يعبر عن أثرها في المدرسة' },
 ],
 mnemonicTitleAr: 'شفرة الحفظ: البادئة أم اللاحقة؟',
 mnemonicAr:
'«Pre» تعني قبل (Prefix = قبل الكلمة لتغيير المعنى مثل un-)، أما «Suf» فتذكرك بـ Suffix = في آخر الكلمة لتغيير النوع من فعل لاسم أو صفة.',
 examBlueprintAr: [
 { questionType: 'سؤال البادئة واللاحقة (MCQ)', tipAr: 'تطبيق سريع: عكس sure بإضافة un-، والصفة من confuse بإضافة -ed، ومضاد strong هو weak.' },
 { questionType: 'سؤال القصة التفكيري', tipAr: 'أبرز أن زينب رأت في الفناء المهمل فرصة لتحويله إلى حديقة نافعة وتعاونت مع صديقتها نبيلة.' },
 ],
 miniCheck: {
 questionEn: 'Similar names often confuse teachers. To form the adjective of "confuse", delete "e" and add ________.',
 questionAr: 'الأسماء المتشابهة تحيّر المعلمين؛ لتكوين الصفة من "confuse" نحذف "e" ونضيف ________.',
 options: ['-al', '-er', '-ful', '-ed'],
 correctIndex: 3,
 explanationAr: 'بإضافة -ed بعد حذف حرف e نحصل على الصفة confused (مرتبك/متحير).',
 },
 },

'u1-p3': {
 lessonId: 'u1-p3',
 hookQuestionAr: 'ما العناصر الستة التي يتكون منها نموذج السيرة الذاتية المتكامل؟',
 hookQuestionEn: 'What are the 6 components of a biography for a complete biography?',
 objectivesAr: [
'إتقان قواعد الأزمنة المستخدمة في السيرة الذاتية (الماضي البسيط للميلاد والبدايات والمضارع التام للأثر المستمر).',
'حفظ المكونات الستة لكتابة السيرة الذاتية (A Biography) بشكل منظم.',
'دراسة النموذج التطبيقي لسيرة د. مجدي يعقوب.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Grammar & Tense Rules for Writing a Biography',
 ruleTitleAr: 'قواعد الأزمنة والتركيب لكتابة السيرة الذاتية',
 usageEn: [
'1. Use Past Simple (was born / won / moved / founded) for birth, education, and past milestones.',
'2. Use Present Simple (is / gives) for current status or ongoing charity work.',
'3. Use Present Perfect (has saved / has won) for achievements continuing up to the present.',
 ],
 usageArSummary:
'تجمع السيرة الذاتية بين الماضي البسيط للنشأة والمحطات التاريخية، والمضارع البسيط للوصف الحالي، والمضارع التام لإبراز الإنجازات التي ما زال أثرها ممتداً حتى اليوم.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. Introduction (Present Simple)',
'2. Birthplace & Date (was born on/in)',
'3. Education & Training (Past Simple)',
'4. Career & Achievements (Past + Passive)',
'5. Reason for Fame (because / honors)',
'6. Quote & Ongoing Impact (Present Perfect)',
 ],
 },
 structures: [
 {
 labelEn: 'Birthplace & Date Structure',
 formulaEn: 'Subject + was born + on [date] + in [city, country].',
 structureAr: 'نستخدم was born مع حرف الجر on قبل التاريخ الكامل (اليوم والشهر والسنة)، وحرف الجر in قبل المدينة والدولة أو السنة وحدها.',
 exampleEn: 'He was born on 16th November 1935 in Bilbeis, Egypt.',
 exampleAr: 'وُلد في السادس عشر من نوفمبر عام 1935 في بلبيس بمصر.',
 },
 {
 labelEn: 'Time Clause with After + V-ing',
 formulaEn: 'After + (verb + ing) +..., Subject + Past Simple',
 structureAr: 'عند عدم وجود فاعل بعد After، نستخدم الفعل مضافاً له (-ing) لربط خطوات التعليم والعمل بسلاسة.',
 exampleEn: 'After finishing his studies, he moved to London to train as a heart surgeon.',
 exampleAr: 'بعد إنهاء دراسته، انتقل إلى لندن للتدرب كجراح قلب.',
 },
 {
 labelEn: 'Ongoing Impact (Present Perfect)',
 formulaEn: 'Subject + has / have + P.P. (+ object)',
 structureAr: 'نختم السيرة الذاتية بالمضارع التام عندما يكون أثر الشخصية مستمراً حتى الحاضر.',
 exampleEn: 'Dr. Yacoub is truly a great Egyptian who has saved thousands of lives around the world.',
 exampleAr: 'د. يعقوب مصري عظيم بحق أنقذ آلاف الأرواح حول العالم.',
 },
 ],
 },
 ],
 writingCorner: {
 titleEn: 'A Biography',
 titleAr: 'ورشة الكتابة: السيرة الذاتية',
 definitionEn: 'A biography is a written account of another person’s life organized in six clear components.',
 components: [
 { labelEn: '1. Introduction', labelAr: 'مقدمة', guideAr: 'التعريف بالشخصية ومكانتها العامة في جملة افتتاحية.' },
 { labelEn: '2. Birthplace and Date', labelAr: 'محل وتاريخ الميلاد', guideAr: 'ذكر تاريخ الميلاد ومكانه باستخدام was born on / in.' },
 { labelEn: '3. Education & Training', labelAr: 'التعليم والتدريب', guideAr: 'أين درس وتدرب والمنح الدراسية التي حصل عليها.' },
 { labelEn: '4. Career & Achievements', labelAr: 'المهنة والإنجازات', guideAr: 'أهم أعماله وجوائزه وإنجازاته المهنية.' },
 { labelEn: '5. Reason for Fame', labelAr: 'سبب الشهرة', guideAr: 'لماذا اشتهر وأحبّه الناس (مثلاً: تأسيس مركز أسوان للقلب).' },
 { labelEn: '6. Quote', labelAr: 'اقتباس', guideAr: 'جملة شهيرة قالها تلخص رسالته في الحياة.' },
 ],
 modelTitleEn: 'A Biography of Dr. Magdy Yacoub (Model Example)',
 modelTextEn:
'(1) Dr. Magdy Yacoub is one of the most famous doctors in the world. (2) He was born on 16th November 1935 in Bilbeis, Egypt. (3) He won a scholarship to study medicine at Cairo University at the age of 15. (4) After finishing his studies, he moved to London to train as a heart surgeon and later worked as a professor there. He performed the first heart and lung transplants in the UK in 1983. He also built the largest heart transplant program in the world, where more than 2,500 operations were carried out. He received many honors for his great work. (6) He once said, "The patient leaves his life entirely in your hands—that is a huge responsibility." Later in his life, he started a charity called Chain of Hope and founded the Aswan Heart Center, which gives free heart treatment to children in poor countries. Dr. Yacoub is truly a great Egyptian who has saved thousands of lives around the world.',
 modelSummaryAr:
'يتبع النموذج التطبيقي المرقم (1–6) المكونات الستة بدقة: المقدمة، الميلاد، الدراسة في القاهرة، التدريب والإنجازات الطبية في لندن، الاقتباس الشهير، وسبب الشهرة (مؤسسة سلسلة الأمل ومركز أسوان للقلب).',
 },
 dissectionTitleAr: 'تفكيك جملة من نموذج السيرة الذاتية',
 sentenceDissection: [
 { text: 'After finishing', roleEn: 'Preposition + Gerund', roleAr: 'حرف جر/ربط + اسم فعل', color: '#4f46e5', tipAr: 'After بدون فاعل يتبعها V-ing' },
 { text: 'his studies, ', roleEn: 'Object + Comma', roleAr: 'المفعول + فاصلة', color: '#64748b', tipAr: 'تفصل العبارة الزمنية عن الجملة الرئيسية' },
 { text: 'he moved', roleEn: 'Past Simple Verb', roleAr: 'فاعل + ماضٍ بسيط', color: '#0d9488', tipAr: 'سرد الحدث الماضي الأساسي' },
 { text: 'to London', roleEn: 'Destination', roleAr: 'المكان', color: '#d97706', tipAr: 'أسماء المدن تبدأ بحرف كبير' },
 { text: 'to train as a heart surgeon.', roleEn: 'Infinitive of Purpose', roleAr: 'to + مصدر لبيان الهدف + as للوظيفة', color: '#059669', tipAr: 'تجمع بين هدف السفر والمهنة بـ as' },
 ],
 mnemonicTitleAr: 'شفرة السيرة الذاتية: قاعدة المكونات الستة',
 mnemonicAr:
'1) مقدمة (Introduction) ← 2) ميلاد (Birth) ← 3) تعليم (Education) ← 4) إنجازات (Career) ← 5) سبب الشهرة (Fame) ← 6) اقتباس (Quote).',
 examBlueprintAr: [
 { questionType: 'الكتابة (Biography — 110 كلمة)', tipAr: 'تأكد من كتابة حرف الجر الصحيح مع التاريخ الكامل (on 16th November) والمدينة/السنة (in Bilbeis / in 1983).' },
 { questionType: 'الاختيار على المكونات', tipAr: 'المصدر الذي يقول كلاماً مباشراً للشخصية داخل علامتي تنصيص يُسمى Quote.' },
 ],
 miniCheck: {
 questionEn: 'Which tense is mainly used to describe the birth and past education in a biography?',
 questionAr: 'ما الزمن المستخدم أساساً لوصف الميلاد والتعليم السابق في السيرة الذاتية؟',
 options: ['Future Simple', 'Past Simple', 'Present Continuous', 'Imperative'],
 correctIndex: 1,
 explanationAr: 'الميلاد والدراسة السابقة أحداث انتهت في الماضي، لذا نستخدم الماضي البسيط (Past Simple) مثل was born / won / moved.',
 },
 },

'u2-p1': {
 lessonId: 'u2-p1',
 hookQuestionAr: 'كيف تعبّر بالإنجليزية عن الندم أو نتيجة خيالية عكس ما حدث بالفعل في الماضي؟',
 hookQuestionEn: 'How do we express past regrets, excuses, and imaginary past results?',
 objectivesAr: [
'مراجعة زمن الماضي التام (Past Perfect) بجميع أشكاله (إثبات، نفي، سؤال) بجميع أشكاله.',
'إتقان الحالة الشرطية الثالثة (The Third Conditional) وقواعد Rewrite الأربعة بـ because و so وتطبيقات عملية.',
'توظيف تراكيب (find it hard to + inf. / It’s + adj + to + inf. / keep + v-ing) ومحادثة البقاء متصلاً.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Remember the Past Perfect Tense',
 ruleTitleAr: 'مراجعة زمن الماضي التام (الأساس اللازم للحالة الثالثة)',
 usageEn: ['Used to talk about an action that happened before another action or time in the past.'],
 usageArSummary: 'يُستخدم زمن الماضي التام للتعبير عن حدث وقع قبل حدث أو وقت آخر في الماضي.',
 structures: [
 {
 labelEn: 'Affirmative',
 formulaEn: 'Subject + had + past participle (P.P.)',
 structureAr: 'في الإثبات: نضع الفاعل (مفرد أو جمع) ثم الفعل المساعد had ثم التصريف الثالث للفعل.',
 exampleEn: 'I had finished my homework by 9 o’clock yesterday.',
 exampleAr: 'أنهيت واجبي المنزلي بحلول الساعة التاسعة أمس.',
 },
 {
 labelEn: 'Negative',
 formulaEn: 'Subject + hadn’t + past participle (P.P.)',
 structureAr: 'في النفي: نضع hadn’t بعد الفاعل متبوعة بالتصريف الثالث.',
 exampleEn: 'I hadn’t visited the museum before.',
 exampleAr: 'لم أزر المتحف من قبل.',
 },
 {
 labelEn: 'Yes / No Question',
 formulaEn: 'Had + subject + past participle (P.P.)...?',
 structureAr: 'للسؤال بـ «هل»: نُقدّم Had على الفاعل ثم التصريف الثالث وعلامة الاستفهام.',
 exampleEn: 'Had you arrived before 5 p.m.?',
 exampleAr: 'هل وصلت قبل الخامسة مساءً؟',
 },
 {
 labelEn: 'Wh- Question',
 formulaEn: 'Q. word + had + subject + past participle (P.P.)...?',
 structureAr: 'للسؤال بأداة استفهام: أداة الاستفهام + had + الفاعل + التصريف الثالث.',
 exampleEn: 'Why had she left before the meeting?',
 exampleAr: 'لماذا غادرت قبل الاجتماع؟',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'She arrived at 10 pm yesterday.',
 bracketWordEn: '(by 10)',
 answerEn: 'She had arrived by 10 pm yesterday.',
 howAr: 'لتكوين الجملة في الماضي التام، نحول الفعل لصيغة الماضي التام (had arrived) ونكتب (by) مكان (at).',
 },
 {
 promptEn: 'Yes, Nada had come early to class.',
 bracketWordEn: '(Had...?)',
 answerEn: 'Had Nada come early to class?',
 howAr: 'لعمل سؤال بهل، نبدأ بـ (Had) ثم الفاعل ثم التصريف الثالث (come) مع حذف Yes/No ووضع علامة الاستفهام.',
 },
 ],
 },
 {
 ruleTitleEn: 'The Third Conditional (If Type 3)',
 ruleTitleAr: 'الحالة الشرطية الثالثة (الخيال والندم في الماضي)',
 usageEn: [
'1. To show an imaginary situation and a different result that could have happened, but didn’t.',
'2. To express regret and missed chances.',
'3. To express excuses (in the past).',
 ],
 usageArSummary:
'تُستخدم الحالة الثالثة: (1) لإظهار موقف خيالي ونتيجة مختلفة كان من الممكن أن تحدث ولم تحدث، (2) للتعبير عن الندم على الفرص الضائعة، (3) لإبداء الأعذار في الماضي.',
 diagramType: 'conditional-chain',
 diagramData: {
 ifPart: 'If + Subject + had (not) + P.P.',
 thenPart: 'Subject + would (not) have + P.P.',
 realityAr: 'موقف خيالي عكس ما حدث بالفعل في الماضي — لا تنسَ عكس الإثبات والنفي عند التحويل!',
 },
 structures: [
 {
 labelEn: 'Affirmative (If at start)',
 formulaEn: 'If + subject + had + P.P., subject + would have + P.P.',
 structureAr: 'عند البدء بـ If: يأتي بعدها جملة الشرط في الماضي التام (had + P.P.) ثم فاصلة (,) ثم جواب الشرط (would have + P.P.).',
 exampleEn: 'If she had come early, she would have watched the movie.',
 exampleAr: 'لو أنها أتت مبكراً، لكانت قد شاهدت الفيلم.',
 },
 {
 labelEn: 'Affirmative (if in middle)',
 formulaEn: 'Subject + would have + P.P. + if + subject + had + P.P.',
 structureAr: 'عند وضع if في المنتصف: نحذف الفاصلة ويسبقها جواب الشرط (would have + P.P.) ويتبعها مباشرة الماضي التام (had + P.P.).',
 exampleEn: 'Amir would have passed the test if he had studied hard.',
 exampleAr: 'كان أمير سينجح في الاختبار لو كان قد ذاكر بجد.',
 },
 {
 labelEn: 'Negative',
 formulaEn: 'If + subject + hadn’t + P.P., subject + wouldn’t have + P.P.',
 structureAr: 'في النفي: نستخدم hadn’t + P.P. في فعل الشرط، وwouldn’t have + P.P. في جواب الشرط (أو ننفي أحد الشقين حسب المعنى).',
 exampleEn: 'If Kareem hadn’t hurried, we wouldn’t have caught the train.',
 exampleAr: 'لو لم يسرع كريم، لما لحقنا بالقطار.',
 },
 {
 labelEn: 'Yes / No Question',
 formulaEn: 'Would + subject + have + P.P. + if + subject + had + P.P.?',
 structureAr: 'للسؤال بـ «هل»: نبدأ بـ Would + الفاعل + have + P.P. ثم if + الفاعل + had + P.P.؟',
 exampleEn: 'Would our team have won the game if they had played well?',
 exampleAr: 'هل كان فريقنا سيفوز بالمباراة لو لعبوا جيداً؟',
 },
 {
 labelEn: 'Wh- Question',
 formulaEn: 'Q. word + would + subject + have + P.P. + if + subject + had + P.P.?',
 structureAr: 'للسؤال بأداة استفهام: نبدأ بأداة الاستفهام ثم صيغة السؤال كاملة (would + S + have + P.P. + if + S + had + P.P.?).',
 exampleEn: 'What would you have done if you had had a lot of money?',
 exampleAr: 'ماذا كنت ستفعل لو كان معك مال كثير؟',
 },
 ],
 specialNotes: [
 {
 ruleEn: 'Rewrite Rule 1 & 2: Past Simple Fact -> Opposite Polarity in Type 3',
 structureAr: 'عند حل سؤال Rewrite من جملتي ماضٍ بسيط: نستخدم الحالة الثالثة لـ If، ويجب عكس معنى الجملتين (المثبت يصبح منفياً والمنفي يصبح مثبتاً).',
 exampleEn: 'Aida didn’t wear a coat, so she was very cold. -> If Aida had worn a coat, she wouldn’t have been cold.',
 },
 {
 ruleEn: 'Rewrite Rule 3 & 4: "because" vs. "so" Clause Placement',
 structureAr: 'إذا كانت الجملة المعطاة تحتوي على because نضع الجملة التي بعدها داخل جملة If (السبب). وإذا احتوت على so نضع الجملة التي قبلها داخل جملة If.',
 exampleEn: 'Amina got wet because she forgot her umbrella. -> If Amina hadn’t forgotten her umbrella, she wouldn’t have got wet.',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'Amina got wet in the rain because she forgot her umbrella.',
 bracketWordEn: '(If)',
 answerEn: 'If Amina hadn’t forgotten her umbrella, she wouldn’t have got wet.',
 howAr: 'نبدأ بالجملة التي تلي (because) مع (If) ونحولها لماضٍ تام منفي (hadn’t forgotten)، ثم جواب الشرط منفياً (wouldn’t have got).',
 },
 {
 promptEn: 'The glass broke on the floor because Arwa dropped it.',
 bracketWordEn: '(if)',
 answerEn: 'The glass wouldn’t have broken on the floor if Arwa hadn’t dropped it.',
 howAr: 'نبدأ بجواب الشرط منفياً (wouldn’t have broken) ثم الجملة التي تلي because مع (if) في الماضي التام المنفي (hadn’t dropped).',
 },
 {
 promptEn: 'Alaa lost his map, so he didn’t find the park.',
 bracketWordEn: '(if)',
 answerEn: 'Alaa would have found the park if he hadn’t lost his map.',
 howAr: 'نبدأ بجواب الشرط مثبتاً (would have found) ثم الجملة التي تسبق (so) مع (if) منفية في الماضي التام (hadn’t lost).',
 },
 {
 promptEn: 'Aida didn’t wear a coat, so she was very cold.',
 bracketWordEn: '(If)',
 answerEn: 'If Aida had worn a coat, she wouldn’t have been cold.',
 howAr: 'نبدأ بالجملة التي تسبق (so) مع (If) في ماضٍ تام مثبت (had worn) ثم جواب الشرط منفياً (wouldn’t have been).',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'find it hard to + inf.',
 ruleEn: 'Subject + find it + adjective + to + inf.',
 structureAr: 'تعبير بمعنى «يجد صعوبة في...»، ويأتي بعد to الفعل في المصدر دائماً.',
 examplesEn: ['Many young people find it hard to make time for meaningful conversations.'],
 },
 {
 titleEn: 'It’s + adj + to + inf.',
 ruleEn: 'It’s + adjective + to + inf.',
 structureAr: 'تعبير للوصف أو النصيحة بمعنى «إنه من (المهم/الضروري) أن...»، يتبعه to + المصدر.',
 examplesEn: ['It’s important to listen carefully and try to understand the other person’s point of view.'],
 },
 {
 titleEn: 'keep + (v + ing)',
 ruleEn: 'Subject + keep / kept + (verb + ing)',
 structureAr: 'الفعل keep بمعنى «يستمر في» يتبعه دائماً الفعل مضافاً له (-ing) وليس to + المصدر.',
 examplesEn: ['We kept messaging, and it got worse.'],
 },
 ],
 prefixesSuffixes: [
 { word: 'discuss / express (v)', affix: '-ion', functionAr: 'تحوّل إلى اسم', newWord: 'discussion / expression (n)', meaningAr: 'مناقشة / تعبير' },
 { word: 'fail (v)', affix: '-ure', functionAr: 'تحوّل إلى اسم', newWord: 'failure (n)', meaningAr: 'فشل' },
 { word: 'encourage (v)', affix: '-ment', functionAr: 'تحوّل إلى اسم', newWord: 'encouragement (n)', meaningAr: 'تشجيع' },
 { word: 'strength (n)', affix: '-en', functionAr: 'تحوّل إلى فعل', newWord: 'strengthen (v)', meaningAr: 'يقوّي' },
 { word: 'thought (n)', affix: '-ful', functionAr: 'تحوّل إلى صفة', newWord: 'thoughtful (adj)', meaningAr: 'متفكّر / مهتم' },
 { word: 'understanding / communication (n)', affix: 'mis-', functionAr: 'تعطي عكس الكلمة', newWord: 'misunderstanding / miscommunication (n)', meaningAr: 'سوء فهم / سوء تواصل' },
 { word: 'correctly (adv)', affix: 'in-', functionAr: 'تعطي عكس الكلمة', newWord: 'incorrectly (adv)', meaningAr: 'بشكل غير صحيح' },
 ],
 speakingQA: {
 titleEn: 'SKILLS: Asking and answering about staying connected',
 titleAr: 'مهارة المحادثة: السؤال والإجابة عن البقاء على اتصال',
 pairs: [
 { qEn: 'How can you stay connected with others?', aEn: 'Through kind words, active listening, and thoughtful messages.', arSummary: 'كيف تبقى متصلاً بالآخرين؟ — عبر الكلمات اللطيفة والاستماع النشط والرسائل المعبرة.' },
 { qEn: 'What affects your communication?', aEn: 'My mood, the other person’s attitude, and the place where we talk.', arSummary: 'ما الذي يؤثر على تواصلك؟ — مزاجي وسلوك الشخص الآخر والمكان.' },
 { qEn: 'Why is it important to listen to others during a conversation?', aEn: 'Because listening shows respect and helps you understand.', arSummary: 'لماذا الاستماع مهم؟ — لأنه يُظهر الاحترام ويساعدك على الفهم.' },
 { qEn: 'What can you do when you feel misunderstood?', aEn: 'I can speak slowly, give an example, or ask if they understand me.', arSummary: 'ماذا تفعل عند سوء الفهم؟ — أتحدث ببطء أو أعطي مثالاً أو أسأل إن كانوا يفهمونني.' },
 ],
 },
 dissectionTitleAr: 'تفكيك جملة شرطية من النوع الثالث',
 sentenceDissection: [
 { text: 'If', roleEn: 'Conditional Link', roleAr: 'أداة الشرط', color: '#64748b', tipAr: 'تبدأ جملة الشرط الافتراضية' },
 { text: 'Amira hadn’t forgotten', roleEn: 'Past Perfect (hadn’t + P.P.)', roleAr: 'فعل الشرط المنفي (ماضٍ تام)', color: '#4f46e5', tipAr: 'عكسنا الفعل المثبت forgot إلى hadn’t forgotten' },
 { text: 'her umbrella, ', roleEn: 'Object + Comma', roleAr: 'المفعول + فاصلة الشرط', color: '#0d9488', tipAr: 'الفاصلة إلزامية عند البدء بـ If' },
 { text: 'she wouldn’t have got', roleEn: 'wouldn’t + have + P.P.', roleAr: 'جواب الشرط المتخيل', color: '#d97706', tipAr: 'عكسنا got wet إلى wouldn’t have got wet' },
 { text: 'wet.', roleEn: 'Adjective Complement', roleAr: 'تكملة الجملة', color: '#059669', tipAr: 'توضح النتيجة التي لم تحدث فعلاً' },
 ],
 mnemonicTitleAr: 'شفرة الحالة الثالثة: معادلة «التوازن التام + عكس الواقع»',
 mnemonicAr:
'«If + had + تصريف 3» يساوي في الكفة الأخرى «would have + تصريف 3». وعند سؤال Rewrite: تذكّر قاعدة «because تلصق في If، وso تأخذ ما قبلها لـ If، مع عكس الإثبات والنفي دائماً!»',
 examBlueprintAr: [
 { questionType: 'سؤال Rewrite بـ If / if', tipAr: 'حدد موقع because (ما بعدها مع If) أو so (ما قبلها مع If)، ثم اعكس المعنى.' },
 { questionType: 'تراكيب المهارات', tipAr: 'keep يليه V-ing (keep practicing) بينما find it hard يليه to + inf.' },
 ],
 miniCheck: {
 questionEn: 'If Omar had studied harder, he ________ the full mark.',
 questionAr: 'لو كان عمر قد ذاكر بجد أكبر، لكان قد ________ الدرجة النهائية.',
 options: ['would get', 'will get', 'would have got', 'had got'],
 correctIndex: 2,
 explanationAr: 'بما أن فعل الشرط ماضٍ تام (had studied)، فهذه الحالة الثالثة ويلزمنا في جواب الشرط: would have + P.P. (would have got).',
 },
 },

'u2-p2': {
 lessonId: 'u2-p2',
 hookQuestionAr: 'كيف حوّل وضع الهواتف جانباً «العشاء الصامت» إلى حديث دافئ، وكيف طبّقت القصة ذلك؟',
 hookQuestionEn: 'How do prefixes (dis-, re-) and suffixes (-ion, -ment) express connection in Lesson 3 & Story Ch. 2?',
 objectivesAr: [
'إتقان قواعد البادئات (dis-, re-) واللواحق (-ion, -ment) وتصريف الأفعال الشاذة وتصريف الأفعال الشاذة.',
'فهم تعريفات «العشاء الصامت» (distraction, frustrated, gesture, meaningful, reconnect, silence).',
'ربط تعبيرات القراءة بأحداث الفصل الثاني من قصة «The School Garden Project».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Word Building Rules: Prefixes (dis-, re-) & Suffixes (-ion, -ment)',
 ruleTitleAr: 'قواعد البادئات واللواحق في سياق التواصل',
 usageEn: [
'1. Suffixes "-ion" and "-ment" change verbs into nouns (distract -> distraction, argue -> argument).',
'2. Prefix "dis-" gives the opposite meaning (appear -> disappear, agreement -> disagreement).',
'3. Prefix "re-" means doing the action again (connect -> reconnect).',
 ],
 usageArSummary:
'يتمرن الطالب في هذا الجزء على تكوين الأسماء بإضافة اللاحقتين (-ion) و(-ment)، وعكس المعنى بالبادئة (dis-)، وإفادة تكرار الفعل بالبادئة (re-).',
 diagramType: 'sentence-blocks',
 structures: [
 {
 labelEn: 'Verb + -ion / -ment -> Noun',
 formulaEn: 'Verb (distract / argue) + -ion / -ment -> Noun (distraction / argument)',
 structureAr: 'إضافة -ion إلى distract أو -ment إلى argue (مع حذف حرف e) تحوّل الفعل إلى اسم (تشتيت / جدال).',
 exampleEn: 'Don’t let the phone be a distraction during family meals.',
 exampleAr: 'لا تدع الهاتف يكون مصدر تشتيت أثناء الوجبات العائلية.',
 },
 {
 labelEn: 'Prefix dis- -> Opposite',
 formulaEn: 'dis- + Verb / Noun (appear / agreement) -> Opposite (disappear / disagreement)',
 structureAr: 'تُضاف البادئة dis- في بداية الفعل أو الاسم لتعطي العكس أو الزوال (يختفي / عدم اتفاق).',
 exampleEn: 'The cat disappeared suddenly and no one could find it.',
 exampleAr: 'اختفت القطة فجأة ولم يتمكن أحد من إيجادها.',
 },
 {
 labelEn: 'Prefix re- -> Again',
 formulaEn: 're- + Verb (connect) -> reconnect (connect again after distance)',
 structureAr: 'تُضاف البادئة re- في بداية الفعل لتفيد إعادته مرة أخرى بعد انقطاع.',
 exampleEn: 'Talking face to face helped the family reconnect.',
 exampleAr: 'ساعد التحدث وجهاً لوجه الأسرة على إعادة التواصل.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: ' Definitions ',
 ruleEn: 'distraction | frustrated | gesture | meaningful | reconnect | silence',
 structureAr: 'distraction: شيء يشتت الانتباه | frustrated: محبط/منزعج | gesture: حركة أو إيماءة تعبر عن مشاعر | meaningful: ذو معنى وهدف | reconnect: يعيد بناء العلاقة بعد مسافة | silence: غياب الصوت/الصمت.',
 examplesEn: ['A gesture is a movement or action that shows emotion.'],
 },
 {
 titleEn: 'Expressions & Prepositions',
 ruleEn: 'across from | filled with | from that night on | instead of | move to | put down',
 structureAr: 'across from في الجهة المقابلة لـ | filled with مليء بـ | from that night on من تلك الليلة فصاعداً | instead of بدلاً من | put down يضع جانباً.',
 examplesEn: ['From that night on, they put down their phones at dinner.'],
 },
 ],
 prefixesSuffixes: [
 { word: 'distract (v)', affix: '-ion', functionAr: 'تحوّل إلى اسم', newWord: 'distraction (n)', meaningAr: 'تشتيت' },
 { word: 'argue (v)', affix: '-ment', functionAr: 'تحوّل إلى اسم', newWord: 'argument (n)', meaningAr: 'جدال' },
 { word: 'appear (v)', affix: 'dis-', functionAr: 'تعطي عكس الكلمة', newWord: 'disappear (v)', meaningAr: 'يختفي' },
 { word: 'agreement (n)', affix: 'dis-', functionAr: 'تعطي عكس الكلمة', newWord: 'disagreement (n)', meaningAr: 'عدم الاتفاق / اختلاف' },
 { word: 'connect (v)', affix: 're-', functionAr: 'تعني إعادة الفعل', newWord: 'reconnect (v)', meaningAr: 'يعيد التواصل' },
 ],
 dissectionTitleAr: 'تفكيك جملة تحتوي على بادئات ولواحق متقابلة',
 sentenceDissection: [
 { text: 'When we', roleEn: 'Time Clause Subject', roleAr: 'الظرف والفاعل', color: '#64748b', tipAr: 'When هنا بمعنى عندما وتربط جملتين' },
 { text: 'disconnect', roleEn: 'Verb with Prefix dis-', roleAr: 'فعل بمعنى يفصل الاتصال', color: '#e11d48', tipAr: 'dis- عكست معنى connect' },
 { text: 'from screens, ', roleEn: 'Prepositional Phrase', roleAr: 'جار ومجرور', color: '#0d9488', tipAr: 'يوضح مصدر التشتت' },
 { text: 'we can', roleEn: 'Modal + Subject', roleAr: 'فاعل وفعل ناقص', color: '#4f46e5', tipAr: 'can يأتي بعدها الفعل في المصدر' },
 { text: 'reconnect', roleEn: 'Verb with Prefix re-', roleAr: 'فعل بمعنى يعيد التواصل', color: '#059669', tipAr: 're- تعني تكرار الفعل من جديد' },
 { text: 'without distraction.', roleEn: 'Preposition + Noun (-ion)', roleAr: 'اسم ينتهي بـ -ion', color: '#d97706', tipAr: 'distraction اسم مشتق من distract' },
 ],
 mnemonicTitleAr: 'شفرة الحفظ: re = Replay / dis = Disconnect',
 mnemonicAr:
'تذكّر زر Replay: «re-» تعني إعادة الفعل (reconnect)، وتذكّر زر Disconnect: «dis-» تعكس المعنى أو تفصل (disappear, disagreement).',
 examBlueprintAr: [
 { questionType: 'تطبيقات المفردات والمشتقات', tipAr: 'مضاد silence هو noise، والاسم من distract هو distraction (-ion)، وتعريف gesture هو حركة تُظهر المشاعر.' },
 ],
 miniCheck: {
 questionEn: 'Don’t let the phone distract you while studying. Add the suffix "________" to form the noun of "distract".',
 questionAr: 'لتكوين الاسم من الفعل "distract" نضيف اللاحقة "________".',
 options: ['-ment', '-ness', '-ful', '-ion'],
 correctIndex: 3,
 explanationAr: 'بإضافة اللاحقة -ion نحصل على distraction (تشتيت).',
 },
 },

'u2-p3': {
 lessonId: 'u2-p3',
 hookQuestionAr: 'كيف طبّق «نموذج الشطيرة» لبناء الفقرة الإنجليزية المتماسكة؟',
 hookQuestionEn: 'What are the 3 components of a paragraph for an effective piece of writing?',
 objectivesAr: [
'إتقان تعريف ومكونات الفقرة الإنجليزية الثلاثة بدقة وإتقان.',
'فهم قواعد الترابط والروابط الانتقالية بين الجمل الداعمة (Supporting Sentences 1, 2, 3).',
'دراسة نموذج الشطيرة الرسمي بعنوان «Good communication».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Paragraph Structure & Cohesion Rules',
 ruleTitleAr: 'قواعد بناء الفقرة وترابط الجمل',
 usageEn: [
'A paragraph is a group of related sentences that talk about one topic.',
'1. Topic Sentence: introduces the main idea clearly.',
'2. Supporting Sentences: give more information, details, or examples using connectors (Also, For example).',
'3. Concluding Sentence: summarizes the idea or shares the writer’s opinion (In conclusion,...).',
 ],
 usageArSummary:
'الفقرة هي مجموعة من الجمل المترابطة التي تتحدث عن موضوع واحد، وتُبنى من: الجملة الافتتاحية، ثم الجمل الداعمة بالأمثلة والتفاصيل، وأخيراً الجملة الختامية التي تلخص الفكرة.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. Topic Sentence (الفكرة الرئيسية)',
'2. Supporting Sentence 1 (تفصيل أول)',
'3. Supporting Sentence 2 (تفصيل + Also)',
'4. Supporting Sentence 3 (مثال For example)',
'5. Concluding Sentence (In conclusion,...)',
 ],
 },
 structures: [
 {
 labelEn: 'Topic Sentence Pattern',
 formulaEn: '[Topic] + is very important / plays an important role in + [context].',
 structureAr: 'نبدأ بجملة واضحة تخبر القارئ مباشرة عن موضوع الفقرة وأهميته.',
 exampleEn: 'Good communication is very important in our daily lives.',
 exampleAr: 'التواصل الجيد مهم جداً في حياتنا اليومية.',
 },
 {
 labelEn: 'Supporting Details with Connectors',
 formulaEn: 'When + S + V, S + V. | [Topic] also helps + obj + inf. | For example,...',
 structureAr: 'نضيف معلومات وأمثلة متدرجة باستخدام أدوات الربط مثل When وalso وFor example وbecause.',
 exampleEn: 'Good communication also helps us work better in groups because everyone can share ideas.',
 exampleAr: 'كما يساعدنا التواصل الجيد على العمل بشكل أفضل في مجموعات لأن الجميع يستطيع مشاركة الأفكار.',
 },
 {
 labelEn: 'Concluding Sentence Pattern',
 formulaEn: 'In conclusion, + [restatement of main idea + benefits].',
 structureAr: 'نختم بتعبير ختامي مثل In conclusion يليه فاصلة ثم إعادة صياغة الفكرة الرئيسية ونتائجها.',
 exampleEn: 'In conclusion, good communication makes life easier, improves relationships, and helps people achieve their goals together.',
 exampleAr: 'ختاماً، التواصل الجيد يجعل الحياة أسهل ويحسّن العلاقات ويساعد الناس على تحقيق أهدافهم معاً.',
 },
 ],
 },
 ],
 writingCorner: {
 titleEn: 'A Paragraph (The Sandwich Model)',
 titleAr: 'ورشة الكتابة: الفقرة الإنجليزية',
 definitionEn: 'A paragraph is a group of related sentences that talk about one topic.',
 components: [
 { labelEn: '1. Topic Sentence', labelAr: 'الجملة الافتتاحية', guideAr: 'ابدأ بجملة واضحة تخبر القارئ عن موضوع الفقرة.' },
 { labelEn: '2. Supporting Sentences', labelAr: 'الجمل الداعمة', guideAr: 'أضف بعض الجمل التي تحتوي على مزيد من المعلومات أو التفاصيل أو الأمثلة.' },
 { labelEn: '3. Concluding Sentence', labelAr: 'الجملة الختامية', guideAr: 'الجملة الأخيرة هي الجملة التي تلخص الفكرة أو تشارك رأي الكاتب أو شعوره.' },
 ],
 modelTitleEn: 'Good Communication (Model Paragraph)',
 modelTextEn:
'Good communication is very important in our daily lives. It helps people understand each other clearly and avoid problems. When we speak politely and listen carefully, we build strong relationships with friends, family, and teachers. Good communication also helps us work better in groups because everyone can share ideas and solve problems together. In the future, communication skills will help us succeed in jobs and life. For example, talking clearly in a meeting can help others trust your ideas. In conclusion, good communication makes life easier, improves relationships, and helps people achieve their goals together.',
 modelSummaryAr:
'يوضح نموذج الشطيرة البصري أن الطبقة العليا هي Topic sentence، والحشوات الثلاث هي Supporting sentences 1, 2, 3، والطبقة السفلى هي Conclusion.',
 },
 dissectionTitleAr: 'تفكيك الجملة الختامية من نموذج الفقرة المترابطة',
 sentenceDissection: [
 { text: 'In conclusion, ', roleEn: 'Closing Connector', roleAr: 'أداة ختام + فاصلة', color: '#4f46e5', tipAr: 'تبدأ الجملة الختامية وتليها فاصلة' },
 { text: 'good communication', roleEn: 'Subject Noun Phrase', roleAr: 'الفاعل (موضوع الفقرة)', color: '#0d9488', tipAr: 'إعادة تركيز على الفكرة الرئيسية' },
 { text: 'makes life easier, ', roleEn: 'make + obj + comparative adj', roleAr: 'النتيجة الأولى', color: '#d97706', tipAr: 'makes يتبعها المفعول ثم الصفة' },
 { text: 'improves relationships, ', roleEn: 'Parallel Verb 2', roleAr: 'توازي الأفعال للمفرد', color: '#059669', tipAr: 'حافظ على نفس الزمن (-s للمفرد)' },
 { text: 'and helps people achieve their goals.', roleEn: 'help + obj + inf.', roleAr: 'النتيجة الثالثة (مصدر بعد help)', color: '#e11d48', tipAr: 'الفعل help يقبل المصدر مباشرة بدون to' },
 ],
 mnemonicTitleAr: 'شفرة الشطيرة: خبز – 3 حشوات – خبز',
 mnemonicAr:
'الخبز العلوي = Topic Sentence | الحشو (3 جمل داعمة بالأسباب وFor example) | الخبز السفلي = Conclusion يبدأ بـ In conclusion,.',
 examBlueprintAr: [
 { questionType: 'سؤال مكونات الفقرة', tipAr: 'الجملة الأولى تُسمى Topic sentence، والتي في الوسط Supporting sentences، والأخيرة Concluding sentence.' },
 ],
 miniCheck: {
 questionEn: 'Which sentence summarizes the main idea at the end of a paragraph?',
 questionAr: 'أي جملة تلخّص الفكرة الرئيسية في نهاية الفقرة؟',
 options: ['Topic sentence', 'Supporting detail', 'Concluding sentence', 'Question tag'],
 correctIndex: 2,
 explanationAr: 'الجملة الختامية (Concluding sentence) تأتي في نهاية الفقرة لتلخيص الفكرة.',
 },
 },

'u3-p1': {
 lessonId: 'u3-p1',
 hookQuestionAr: 'كيف تصف المستقبل بالذكاء الاصطناعي في المبني للمعلوم والمبني للمجهول ؟',
 hookQuestionEn: 'How do we form Future Simple Active and Passive sentences and questions?',
 objectivesAr: [
'إتقان زمن المستقبل البسيط (Active & Passive) بجميع صيغه وأسئلته بأسلوب مبسط.',
'حفظ الكلمات الدالة والتطبيقات العملية المحلولة (`be sent`, `My mom`, `will`).',
'فهم ملاحظات القراءة (let vs. allow، وpower vs. empower) ومحادثة الذكاء الاصطناعي.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'The Future Simple Tense (Active & Passive)',
 ruleTitleAr: 'زمن المستقبل البسيط في المبني للمعلوم والمبني للمجهول',
 usageEn: [
'1. Active: To describe actions that someone will do in the future.',
'2. Passive: To describe actions that will be done in the future.',
 ],
 usageArSummary:
'يُستخدم المستقبل البسيط في المعلوم لوصف أفعال سيقوم بها شخص ما في المستقبل، وفي المجهول لوصف أحداث سوف تُفعل في المستقبل.',
 diagramType: 'active-passive',
 diagramData: {
 activeS: 'Omar',
 activeV: 'will fix',
 activeO: 'the car',
 passiveS: 'The car',
 passiveV: 'will be fixed',
 passiveBy: 'next Friday',
 },
 structures: [
 {
 labelEn: 'Active Affirmative & Negative',
 formulaEn: 'Subject + will / won’t + inf....',
 structureAr: 'في المعلوم (إثبات ونفي): نبدأ بالفاعل يليه will (أو won’t للنفي) ثم مصدر الفعل بدون أي إضافات.',
 exampleEn: 'They will build a new school next year. / Mustafa won’t play in the next match.',
 exampleAr: 'سيبنون مدرسة جديدة العام القادم. / لن يلعب مصطفى في المباراة القادمة.',
 },
 {
 labelEn: 'Active Yes/No & Wh- Questions',
 formulaEn: 'Will + subject + inf....? | Q. word + will + subject + inf....?',
 structureAr: 'في سؤال المعلوم: نُقدّم Will على الفاعل ثم مصدر الفعل (أو نضع أداة الاستفهام قبل Will).',
 exampleEn: 'Will you go shopping tomorrow? / When will you start the project?',
 exampleAr: 'هل ستذهب للتسوق غداً؟ / متى ستبدأ المشروع؟',
 },
 {
 labelEn: 'Passive Affirmative & Negative',
 formulaEn: 'Object + will / won’t + be + P.P. (+ by + subject)',
 structureAr: 'في المجهول (إثبات ونفي): نبدأ بالمفعول يليه will أو won’t ثم كلمة «be» الثابتة ثم التصريف الثالث (P.P.) ويمكن ذكر الفاعل مسبوقاً بـ by.',
 exampleEn: 'The room will be cleaned by Salma. / This project won’t be finished next Friday.',
 exampleAr: 'ستُنظَّف الغرفة بواسطة سلمى. / لن يُنجز هذا المشروع الجمعة القادمة.',
 },
 {
 labelEn: 'Passive Yes/No Question',
 formulaEn: 'Will + object + be + P.P....?',
 structureAr: 'للسؤال بـ «هل» في المجهول: نبدأ بـ Will ثم المفعول ثم be ثم التصريف الثالث.',
 exampleEn: 'Will the homework be finished tonight? — Yes, it will. / No, it won’t.',
 exampleAr: 'هل سينتهي الواجب الليلة؟ — نعم / لا.',
 },
 {
 labelEn: 'Passive Wh- Question',
 formulaEn: 'Q. word + will + object + be + P.P....?',
 structureAr: 'للسؤال بأداة استفهام في المجهول: أداة الاستفهام + will + المفعول + be + التصريف الثالث.',
 exampleEn: 'Where will the new school be built? — It will be built next year.',
 exampleAr: 'أين ستُبنى المدرسة الجديدة؟ — ستُبنى العام القادم.',
 },
 ],
 keywords: [
 {
 tokenEn: 'Future Time Markers & Verbs',
 ruleEn: 'tomorrow | next (week/month/year) | in the future | soon | this (week/month/year) | promise / expect / believe / wish / hope / think / probably / possible / offer',
 structureAr: 'تُستخدم هذه الكلمات والأفعال للدلالة على المستقبل البسيط (will + inf. للمعلوم، أو will be + P.P. للمجهول).',
 exampleEn: 'I promise I will buy you a tablet if you come first.',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'I promise to buy you a tablet if you come first.',
 bracketWordEn: '(will)',
 answerEn: 'I will buy you a tablet if you come first.',
 howAr: 'نبدأ بالفاعل (I) ثم (will buy) ثم باقي الجملة لأن promise تدل على المستقبل البسيط.',
 },
 {
 promptEn: 'Nada will send the email.',
 bracketWordEn: '(be sent)',
 answerEn: 'The email will be sent by Nada.',
 howAr: 'المطلوب تحويل الجملة لصيغة المجهول: نبدأ بالمفعول (The email) ثم will be + P.P. (will be sent) ثم by والفاعل.',
 },
 {
 promptEn: 'The dinner will be made by my mom.',
 bracketWordEn: '(My mom)',
 answerEn: 'My mom will make the dinner.',
 howAr: 'المطلوب التحويل لصيغة المعلوم: نبدأ بالفاعل (My mom) يليه (will + inf.) وهو will make ثم المفعول (the dinner).',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'let / allow',
 ruleEn: 'let + object + inf. | allow + object + to + inf.',
 structureAr: 'كلاهما بمعنى «يسمح»، لكن let يتبعها المفعول ثم المصدر بدون to، بينما allow يتبعها المفعول ثم to + المصدر.',
 examplesEn: [
'My dad let me go to the cinema.',
'My dad allowed me to go to the cinema.',
 ],
 },
 {
 titleEn: 'power / empower',
 ruleEn: 'power (v) = supply energy/run tech | empower (v) = give power/confidence to people',
 structureAr: 'الفعل power يعني يُشغّل التقنيات أو يمدّ بالطاقة، بينما empower يعني يُمكّن أو يعطي قوة وقدرة للأشخاص.',
 examplesEn: [
'AI powers healthcare.',
'Education empowers students.',
 ],
 },
 ],
 prefixesSuffixes: [
 { word: 'behave (v)', affix: '-ior', functionAr: 'تحوّل إلى اسم', newWord: 'behavior (n)', meaningAr: 'تصرف / سلوك' },
 { word: 'innovate (v)', affix: '-ion', functionAr: 'تحوّل إلى اسم', newWord: 'innovation (n)', meaningAr: 'إبداع / ابتكار' },
 { word: 'driver (n)', affix: '-less', functionAr: 'تعطي عكس الكلمة (بدون)', newWord: 'driverless (adj)', meaningAr: 'بلا سائق' },
 { word: 'creative (adj)', affix: '-ity', functionAr: 'تحوّل إلى اسم', newWord: 'creativity (n)', meaningAr: 'إبداع' },
 ],
 speakingQA: {
 titleEn: 'SKILLS: Talking about AI technology and using robots',
 titleAr: 'مهارة المحادثة: الحديث عن تكنولوجيا الذكاء الاصطناعي والروبوتات',
 pairs: [
 {
 qEn: 'What do you know about Artificial Intelligence (AI)?',
 aEn: 'Artificial Intelligence is the ability of machines to think, learn, and make decisions like humans.',
 arSummary: 'ما هو الذكاء الاصطناعي؟ — قدرة الآلات على التفكير والتعلم واتخاذ القرارات مثل البشر.',
 },
 {
 qEn: 'What fields can you use AI in?',
 aEn: 'AI can be used in healthcare, education, business, transportation, and entertainment.',
 arSummary: 'أين يُستخدم؟ — في الرعاية الصحية والتعليم والأعمال والنقل والترفيه.',
 },
 {
 qEn: 'How do you think AI helps in education?',
 aEn: 'AI helps by providing personalized learning and giving feedback to students.',
 arSummary: 'كيف يساعد في التعليم؟ — بتقديم تعلم مخصص وإعطاء تغذية راجعة للطلاب.',
 },
 {
 qEn: 'Do you think AI will become smarter than humans one day?',
 aEn: 'Some experts think it is possible, but humans will always control AI.',
 arSummary: 'هل سيصبح أذكى من البشر؟ — ممكن، لكن البشر سيظلون دائماً متحكمين فيه.',
 },
 {
 qEn: 'Do you think robots can do all human work? Why?',
 aEn: 'No, robots cannot do all human work because they don’t have feelings.',
 arSummary: 'هل يقوم الروبوت بكل عمل البشر؟ — لا، لأنه لا يمتلك مشاعر.',
 },
 ],
 },
 dissectionTitleAr: 'تفكيك جملة مستقبل بسيط في المبني للمجهول',
 sentenceDissection: [
 { text: 'Routine tasks', roleEn: 'Object (New Subject)', roleAr: 'المفعول (المهام الروتينية)', color: '#0d9488', tipAr: 'المهام لا تفعل نفسها بل تُؤدّى، لذا الجملة مجهول' },
 { text: 'will be', roleEn: 'Future Passive Marker', roleAr: 'will + المصدر be', color: '#4f46e5', tipAr: 'بعد will يأتي المصدر be دائماً' },
 { text: 'automated', roleEn: 'Past Participle (P.P.)', roleAr: 'التصريف الثالث', color: '#d97706', tipAr: 'فعل منتظم ينتهي بـ -ed' },
 { text: 'by AI systems', roleEn: 'Agent', roleAr: 'المنفّذ (اختياري)', color: '#059669', tipAr: 'by تحدد الأداة أو الفاعل' },
 { text: 'in the near future.', roleEn: 'Future Time Marker', roleAr: 'دلالة زمن المستقبل', color: '#e11d48', tipAr: 'تدل على استخدام زمن المستقبل' },
 ],
 mnemonicTitleAr: 'شفرة المستقبل المجهول: «will + be + P.P.»',
 mnemonicAr:
'المضارع التام المجهول يأخذ «been» (has/have been + P.P.)، أما المستقبل المجهول فيأخذ «be» فقط بعد will/won’t لأن will يتبعها المصدر دائماً!',
 examBlueprintAr: [
 { questionType: 'الاختيار بين will + inf و will be + P.P.', tipAr: 'انظر لما قبل الفراغ: إذا كان مفعولاً غير عاقل يقع عليه الفعل (The email / New schools) اختر will be + P.P.' },
 { questionType: 'ملاحظات let / allow', tipAr: 'let + obj + inf. (بدون to) مقابل allow + obj + to + inf.' },
 ],
 miniCheck: {
 questionEn: 'New smart hospitals ________ across the country next year.',
 questionAr: 'مستشفيات ذكية جديدة ________ في أنحاء البلاد العام القادم.',
 options: ['will build', 'will be built', 'are building', 'will built'],
 correctIndex: 1,
 explanationAr: 'المستشفيات ستُبنى (مبني للمجهول في المستقبل)، لذا الصواب: will be built.',
 },
 },

'u3-p2': {
 lessonId: 'u3-p2',
 hookQuestionAr: 'كيف تفرّق بدقة بين الصفات المنتهية بـ (-ing) و(-ed) وبين الفعلين miss و lose في سياق التكنولوجيا؟',
 hookQuestionEn: 'How do "-ing" vs. "-ed" adjectives and "miss" vs. "lose" work in context?',
 objectivesAr: [
'إتقان قاعدة الصفات المنتهية بـ (-ing) مقابل الصفات المنتهية بـ (-ed) بدقة ووضوح.',
'التمييز بين miss (يفتقد شخصاً/تفوته وسيلة مواصلات) و lose/lost/lost (يفقد شيئاً).',
'حفظ تصريفات stand / teach وجدول البادئات واللواحق.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Adjectives Ending in (-ing) vs. Adjectives Ending in (-ed)',
 ruleTitleAr: 'الفرق بين الصفات المنتهية بـ (-ing) والصفات المنتهية بـ (-ed)',
 usageEn: [
'1. Adjectives ending in (-ing) describe the person or thing that causes the feeling or effect (surprising, amazing, confusing, interesting, boring).',
'2. Adjectives ending in (-ed) describe the person who experiences or receives the feeling (surprised, amazed, confused, interested, bored).',
 ],
 usageArSummary:
'الصفات المنتهية بـ (-ing) تصف مَن أو ما يُسبّب الشعور أو الأثر، بينما الصفات المنتهية بـ (-ed) تصف الشخص الذي يقع عليه الأثر أو يشعر بالإحساس.',
 diagramType: 'sentence-blocks',
 structures: [
 {
 labelEn: 'Adjective + -ing (Cause of Feeling)',
 formulaEn: 'Subject (person / thing) + be / verb + [Adjective + -ing]',
 structureAr: 'تُستخدم الصفة المنتهية بـ (-ing) لوصف الشيء أو الشخص الذي يُسبّب الدهشة أو الحيرة أو المتعة للآخرين.',
 exampleEn: 'One rainy morning, Sara walked into her classroom and saw something surprising.',
 exampleAr: 'في صباح ممطر، دخلت سارة فصلها ورأت شيئاً مدهشاً.',
 },
 {
 labelEn: 'Adjective + -ed (Receiver of Feeling)',
 formulaEn: 'Subject (person) + be / feel + [Adjective + -ed]',
 structureAr: 'تُستخدم الصفة المنتهية بـ (-ed) لوصف الشخص الذي يشعر بالإحساس نفسه (مندهش، مرتبك، مهتم، شاعر بالملل).',
 exampleEn: 'Sara was surprised to see the robot teacher.',
 exampleAr: 'كانت سارة مندهشة لرؤية المعلم الروبوت.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'miss / lose',
 ruleEn: 'miss (ed) = miss a person / a bus / a chance | lose / lost / lost = lose an object / money / a match',
 structureAr: 'نستخدم miss بمعنى يفتقد شخصاً أو تفوته حصة أو وسيلة مواصلات، أما lose (ماضيها وتصريفها الثالث lost) فتُستخدم عند فقدان أو ضياع شيء.',
 examplesEn: [
'I haven’t seen my friend Nada for 3 days. I miss her very much.',
'Yesterday, I got up late, so I missed the bus.',
'I couldn’t buy the tablet because I had lost my money.',
 ],
 },
 {
 titleEn: 'Irregular Verbs & Definitions ',
 ruleEn: 'stand / stood / stood | teach / taught / taught',
 structureAr: 'confused: يشعر بعدم التأكد أو الحيرة | connection: رابط بين أشخاص أو أفكار | customize: يخصص ليناسب حاجتك | instantly: فوراً بلا تأخير | notice: يلاحظ أو يصبح مدركاً لشيء.',
 examplesEn: ['Mom taught me how to make a chocolate cake.'],
 },
 ],
 prefixesSuffixes: [
 { word: 'shine / rain (v)', affix: '-y', functionAr: 'تحوّل إلى صفة', newWord: 'shiny / rainy (adj)', meaningAr: 'لامع / ممطر' },
 { word: 'confuse (v)', affix: '-ed', functionAr: 'تحوّل إلى صفة', newWord: 'confused (adj)', meaningAr: 'مرتبك' },
 { word: 'instant (adj)', affix: '-ly', functionAr: 'تحوّل إلى ظرف', newWord: 'instantly (adv)', meaningAr: 'فوراً / في الحال' },
 { word: 'connect (v)', affix: '-ion', functionAr: 'تحوّل إلى اسم', newWord: 'connection (n)', meaningAr: 'صلة / ارتباط' },
 ],
 dissectionTitleAr: 'تفكيك جملة توضّح الفاعل المسبّب والمستقبِل للشعور',
 sentenceDissection: [
 { text: 'Although the robot', roleEn: 'Concession Clause', roleAr: 'رابط تناقض + الفاعل', color: '#64748b', tipAr: 'Although تربط فكرتين متقابلتين' },
 { text: 'looked amazing, ', roleEn: 'Cause Adjective (-ing)', roleAr: 'صفة المسبّب (مُذهل)', color: '#0d9488', tipAr: 'الروبوت هو الذي سبّب الدهشة للآخرين' },
 { text: 'some students', roleEn: 'Experiencer Subject', roleAr: 'الفاعل المستقبِل للشعور', color: '#4f46e5', tipAr: 'الطلاب هم من يشعرون بالانطباع' },
 { text: 'felt', roleEn: 'Linking Verb', roleAr: 'فعل حسي رابط', color: '#d97706', tipAr: 'يتبعه صفة تصف الشعور' },
 { text: 'confused', roleEn: 'Feeling Adjective (-ed)', roleAr: 'صفة الشعور (مُرتبك)', color: '#e11d48', tipAr: '-ed تعبّر عن إحساس الشخص نفسه' },
 { text: 'at first.', roleEn: 'Time Phrase', roleAr: 'ظرف زمان', color: '#059669', tipAr: 'تحدد وقت الشعور بالارتباك' },
 ],
 mnemonicTitleAr: 'شفرة الصفات: -ing للمُسبِّب و -ed للمُستقبِل',
 mnemonicAr:
'«-ing» تُصدر الشعور للخارج (surprising, boring)، بينما «-ed» تستقبل الشعور في الداخل (surprised, bored). وmiss للمشاعر والمواصلات، بينما lose للنقود والأشياء!',
 examBlueprintAr: [
 { questionType: 'تطبيقات الصفات والأفعال', tipAr: 'The students were confused when the teacher asked a difficult question. | I always miss my dad when he travels abroad.' },
 ],
 miniCheck: {
 questionEn: 'The students were ________ when the teacher asked a difficult question.',
 questionAr: 'كان الطلاب ________ عندما طرح المعلم سؤالاً صعباً.',
 options: ['bored', 'boring', 'confused', 'confusing'],
 correctIndex: 2,
 explanationAr: 'الطلاب هم من وقع عليهم الشعور بالحيرة والارتباك، لذا نختار الصفة المنتهية بـ -ed: confused.',
 },
 },

'u3-p3': {
 lessonId: 'u3-p3',
 hookQuestionAr: 'ما المكونات الرسمية للبريد الإلكتروني في البريد الإلكتروني الاحترافي؟',
 hookQuestionEn: 'What are the 3 main sections of an email for an effective piece of writing?',
 objectivesAr: [
'إتقان القواعد التنظيمية والزمنية لكتابة البريد الإلكتروني (An Email).',
'حفظ المكونات الثلاثة الكبرى للإيميل وتفصيلاتها بوضوح (Header, Body, Signature).',
'دراسة نموذج الإيميل الرسمي بعنوان «The Benefits of AI in the Future».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Email Format & Language Structure Rules',
 ruleTitleAr: 'قواعد صياغة البريد الإلكتروني وتراكيبه',
 usageEn: [
'An email is a message that usually has a clear purpose and is sent electronically.',
'1. Header Information: To (receiver), From (sender), Subject (short clear topic).',
'2. Body: Greeting (Hi / Dear...) + Opening Line + Main Message (short paragraphs with For example / Also / On the other hand) + Closing Line.',
'3. Signature: Yours, / Your name.',
 ],
 usageArSummary:
'تعتمد كتابة البريد الإلكتروني على ثلاثة أجزاء رئيسية: معلومات الترويسة (To/From/Subject)، وجسم الرسالة (التحية، الافتتاحية، الموضوع الرئيسي، الخاتمة)، وأخيراً التوقيع.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. Header: To / From / Subject',
'2. Greeting: Dear... / Hi..., ',
'3. Opening Line: How are you? I hope...',
'4. Main Message: Topic + Future Simple',
'5. Closing Line: What do you think?',
'6. Signature: Yours, [Name]',
 ],
 },
 structures: [
 {
 labelEn: 'Opening & Purpose Structure',
 formulaEn: 'How are you? I hope you are doing well. I want to tell you about + [Noun / Topic].',
 structureAr: 'نبدأ بسؤال ودي وتمنٍ بالخير، ثم جملة توضح الغرض من الرسالة باستخدام I want to tell you about أو I’m writing to tell you about.',
 exampleEn: 'How are you? I hope you are doing well. I want to tell you about the benefits of AI in the future.',
 exampleAr: 'كيف حالك؟ أتمنى أن تكون بخير. أريد أن أخبرك عن فوائد الذكاء الاصطناعي في المستقبل.',
 },
 {
 labelEn: 'Contrasting Ideas in Main Message',
 formulaEn: 'For example,... | Also,... | On the other hand,...',
 structureAr: 'ننظّم جسم الإيميل في فقرتين قصيرتين؛ نضرب مثالاً بـ For example ونضيف بـ Also ونعرض جانباً آخر بـ On the other hand.',
 exampleEn: 'On the other hand, AI can help us save time by doing simple tasks like organizing work.',
 exampleAr: 'من ناحية أخرى، يستطيع الذكاء الاصطناعي مساعدتنا في توفير الوقت عبر أداء المهام البسيطة.',
 },
 {
 labelEn: 'Closing Line & Signature',
 formulaEn: 'Closing statement + Question? | Yours, [Your Name]',
 structureAr: 'الجملة الختامية تطلب الرد بلطف (What do you think? / Write back soon)، ثم التوقيع Yours, متبوعاً بالاسم.',
 exampleEn: 'I believe AI will be very useful if we use it wisely. What do you think? Yours, Shorouk.',
 exampleAr: 'أعتقد أن الذكاء الاصطناعي سيكون مفيداً جداً إذا استخدمناه بحكمة. ما رأيك؟ المخلصة، شروق.',
 },
 ],
 },
 ],
 writingCorner: {
 titleEn: 'An Email',
 titleAr: 'ورشة الكتابة: البريد الإلكتروني',
 definitionEn: 'An email is a message that usually has a clear purpose and is sent electronically.',
 components: [
 { labelEn: '1. The Header Information', labelAr: 'معلومات الترويسة (To / From / Subject)', guideAr: 'عنوان البريد للمُرسَل إليه، وعنوان المُرسِل، وموضوع الرسالة.' },
 { labelEn: '2. Greeting & Opening Line', labelAr: 'التحية والسطر الافتتاحي', guideAr: 'تحية مثل Hi Hanaa, / Dear..., ثم سطر البداية الذي تحيي فيه الشخص.' },
 { labelEn: '3. Main Message & Closing Line', labelAr: 'الموضوع الرئيسي والعبارة الختامية', guideAr: 'صلب الرسالة في فقرات قصيرة، ثم آخر جملة قبل الاسم تطلب رداً أو تنهي بأدب.' },
 { labelEn: '4. The Signature', labelAr: 'التوقيع', guideAr: 'Yours, متبوعة باسم المُرسِل.' },
 ],
 modelTitleEn: 'The Benefits of AI in the Future (Model Example)',
 modelTextEn:
'To: hanaa@email.com | From: shorouk@email.com | Subject: The Benefits of AI in the Future\nHi Hanaa,\nHow are you? I hope you are doing well. I want to tell you about the benefits of AI in the future. I think AI will make our lives easier in many ways. For example, it can help doctors find diseases early and give better treatment. Also, students can learn faster with smart tools that explain lessons clearly.\nOn the other hand, AI can help us save time by doing simple tasks like organizing work or answering questions. This gives us more time to relax or be creative. In the future, AI may also make cities safer and cleaner.\nI believe AI will be very useful if we use it wisely. What do you think?\nYours, Shorouk',
 modelSummaryAr:
'يطبق النموذج التطبيقي المقترح جميع أركان الإيميل: Header ثم Greeting ثم Opening Line ثم فقرتين للـ Main Message ثم Closing Line ثم Signature.',
 },
 dissectionTitleAr: 'تفكيك جملة افتتاحية احترافية في البريد الإلكتروني',
 sentenceDissection: [
 { text: 'I want to tell you', roleEn: 'Purpose Statement', roleAr: 'تعبير غرض الرسالة', color: '#4f46e5', tipAr: 'يوضح سبب إرسال الإيميل مباشرة' },
 { text: 'about the benefits', roleEn: 'Preposition + Object', roleAr: 'جار ومجرور', color: '#0d9488', tipAr: 'يحدد محور الموضوع' },
 { text: 'of AI in the future.', roleEn: 'Topic Scope', roleAr: 'تحديد الزمان والموضوع', color: '#d97706', tipAr: 'يتطابق مع عنوان Subject' },
 { text: 'I think AI will make', roleEn: 'think + Future Simple', roleAr: 'تعبير رأي + مستقبل بسيط', color: '#059669', tipAr: 'think من الكلمات الدالة على will' },
 { text: 'our lives easier.', roleEn: 'make + obj + comparative adj', roleAr: 'المفعول + صفة مقارنة', color: '#e11d48', tipAr: 'أسلوب بليغ لبيان الأثر الإيجابي' },
 ],
 mnemonicTitleAr: 'شفرة الإيميل : 3 أقسام و6 عناصر',
 mnemonicAr:
'Header (To / From / Subject) ← Body (Greeting + Opening + Main Message + Closing) ← Signature (Yours, Name).',
 examBlueprintAr: [
 { questionType: 'الاختيار على مكونات الإيميل', tipAr: 'سطر التوقيع هو Signature، وسطر البداية بعد التحية هو Opening Line، والعنوان المختصر هو Subject.' },
 ],
 miniCheck: {
 questionEn: 'Which part of an email contains "To", "From", and "Subject"?',
 questionAr: 'أي جزء من البريد الإلكتروني يحتوي على "To" و"From" و"Subject"؟',
 options: ['The Signature', 'The Closing Line', 'The Header Information', 'The Greeting'],
 correctIndex: 2,
 explanationAr: 'الترويسة (The Header Information) هي التي تضم To و From و Subject.',
 },
 },

'u4-p1': {
 lessonId: 'u4-p1',
 hookQuestionAr: 'ما القواعد الدقيقة للأفعال الناقصة والروابط المتقابلة للتعبير عن الإلزام والنصيحة والتناقض؟',
 hookQuestionEn: 'How do Modal Verbs and Connectors (Although / Even though / While / On one hand) work?',
 objectivesAr: [
'إتقان جميع الأفعال الناقصة (must, mustn’t, should, shouldn’t, can, can’t) وتعبيراتها الدالة في Rewrite بأسلوب تدريجي.',
'إتقان الروابط (Although / Even though / While / On one hand,... On the other hand,...) مع تطبيقات التحويل.',
'استيعاب ملاحظات القراءة (use + obj + for, Moreover, during + noun, while + v-ing) ومحادثة وقت الشاشة.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: '1. Modal Verbs (must / mustn’t / should / shouldn’t / can / can’t)',
 ruleTitleAr: 'الأفعال الناقصة: الإلزام، المنع والتحريم، النصيحة، والقدرة',
 usageEn: [
'A) must / mustn’t: to talk about things that are necessary to do or forbidden/not allowed.',
'B) should / shouldn’t: to give advice or talk about what is a good or bad idea.',
'C) can / can’t: to express ability or inability (or permission) to do something.',
 ],
 usageArSummary:
'تُستخدم الأفعال الناقصة متبوعةً دائماً بمصدر الفعل (inf.): نستخدم must/mustn’t للضرورة والمنع القاطع، وshould/shouldn’t للنصيحة، وcan/can’t للقدرة وعدم القدرة.',
 diagramType: 'modal-meter',
 structures: [
 {
 labelEn: 'Affirmative & Negative Form',
 formulaEn: 'Subject + modal verb + inf. | Subject + modal verb + not + inf.',
 structureAr: 'التكوين الأساسي لجميع الأفعال الناقصة: الفاعل + الفعل الناقص (أو + not للنفي) + مصدر الفعل بدون to أو أي إضافات.',
 exampleEn: 'You should study hard. / You mustn’t smoke in hospitals. / You shouldn’t say unkind things.',
 exampleAr: 'ينبغي أن تذاكر بجد. / يُمنع التدخين في المستشفيات. / لا ينبغي أن تقول أشياء غير لطيفة.',
 },
 {
 labelEn: 'Yes/No & Wh- Questions',
 formulaEn: 'Modal verb + subject + inf....? | Q. Word + modal verb + subject + inf....?',
 structureAr: 'في السؤال: نُقدّم الفعل الناقص على الفاعل ثم نضع مصدر الفعل (ولا نستخدم do/does/did أبداً).',
 exampleEn: 'Must we be quiet in the library? / What must you do at the museum?',
 exampleAr: 'هل يجب أن نلتزم الهدوء في المكتبة؟ / ماذا يجب أن تفعل في المتحف؟',
 },
 {
 labelEn: 'must / mustn’t (Obligation & Prohibition)',
 formulaEn: 'Subject + must / mustn’t + inf.',
 structureAr: 'تُستخدم must للإلزام والضرورة والقانون، وmustn’t للنهي والتحريم والمنع القاطع.',
 exampleEn: 'We must follow safety rules. / You mustn’t park your car here. It’s not allowed.',
 exampleAr: 'يجب أن نتبع قواعد السلامة. / ممنوع ركن سيارتك هنا؛ هذا غير مسموح.',
 },
 {
 labelEn: 'should / shouldn’t (Advice)',
 formulaEn: 'Subject + should / shouldn’t + inf.',
 structureAr: 'تُستخدم should للنصيحة بفعل شيء مفيد، وshouldn’t للنصيحة بعدم فعل شيء غير جيد.',
 exampleEn: 'We should limit our screen time. / You shouldn’t eat unhealthy food.',
 exampleAr: 'ينبغي أن نحدّ من وقت الشاشة. / لا ينبغي أن تأكل طعاماً غير صحي.',
 },
 {
 labelEn: 'can / can’t (Ability / Inability)',
 formulaEn: 'Subject + can / can’t + inf.',
 structureAr: 'تُستخدم can للتعبير عن القدرة أو السماح، وcan’t لعدم القدرة.',
 exampleEn: 'You can change your settings easily. / We can’t enter the museum without tickets.',
 exampleAr: 'يمكنك تغيير إعداداتك بسهولة. / لا نستطيع دخول المتحف بدون تذاكر.',
 },
 ],
 keywords: [
 {
 tokenEn: 'Cues for must',
 ruleEn: 'Always + inf. | It’s necessary | It’s important | It’s a rule/law | It’s a necessity | It’s a must',
 structureAr: 'هذه التعبيرات في جملة السؤال تعني الإلزام وتُستبدل بـ (Subject + must + inf.).',
 exampleEn: 'It is very important to clean your room every day. -> You must clean your room every day.',
 },
 {
 tokenEn: 'Cues for mustn’t',
 ruleEn: 'Don’t + inf. | Never + inf. | It’s forbidden | It’s not allowed | It’s banned | It’s prohibited | It’s against the law | You can’t',
 structureAr: 'هذه التعبيرات تدل على النهي والتحريم وتُستبدل بـ (Subject + mustn’t + inf.).',
 exampleEn: 'You are not allowed to shout so loud. -> You mustn’t shout so loud.',
 },
 {
 tokenEn: 'Cues for should / shouldn’t',
 ruleEn: 'should: I advise you to / It is a good idea to / My advice to you is to / It’s advisable to / It is better to | shouldn’t: I advise you not to / It’s a bad idea to / It is wrong to',
 structureAr: 'عبارات النصيحة الإيجابية تُحوَّل بـ should + inf.، وعبارات النصيحة السلبية تُحوَّل بـ shouldn’t + inf.',
 exampleEn: 'It’s not good idea for Alaa to watch TV all day. -> Alaa shouldn’t watch TV all day.',
 },
 {
 tokenEn: 'Cues for can / can’t',
 ruleEn: 'have/don’t have the ability to | be/not be able to | be/not be good at',
 structureAr: 'تعبيرات القدرة وعدم القدرة تُستبدل بـ can أو can’t متبوعة بالمصدر الأساسي.',
 exampleEn: 'Adam has the ability to swim fast. -> Adam can swim fast.',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'It is very important to clean your room every day.',
 bracketWordEn: '(must)',
 answerEn: 'You must clean your room every day.',
 howAr: 'نبدأ بالفاعل (You) ثم (must) وبعدها مصدر الفعل الأساسي (clean) ثم باقي الجملة.',
 },
 {
 promptEn: 'You are not allowed to shout so loud.',
 bracketWordEn: '(mustn’t)',
 answerEn: 'You mustn’t shout so loud.',
 howAr: 'نبدأ بالفاعل (You) ونكتب (mustn’t) وبعدها مصدر الفعل الأساسي (shout) ثم باقي الجملة.',
 },
 {
 promptEn: 'Always sleep early before the exam.',
 bracketWordEn: '(should)',
 answerEn: 'You should sleep early before the exam.',
 howAr: 'نحذف Always ونبدأ بالفاعل (You) ثم (should) ومصدر الفعل (sleep) وباقي الجملة.',
 },
 {
 promptEn: 'It’s not good idea for Alaa to watch the television all day.',
 bracketWordEn: '(shouldn’t)',
 answerEn: 'Alaa shouldn’t watch the television all day.',
 howAr: 'نبدأ بالفاعل (Alaa) ثم كلمة (shouldn’t) ومصدر الفعل الأساسي (watch) وباقي الجملة.',
 },
 {
 promptEn: 'Adam has the ability to swim fast.',
 bracketWordEn: '(can)',
 answerEn: 'Adam can swim fast.',
 howAr: 'نحذف has the ability to ونضع (can) بعد الفاعل (Adam) متبوعة بالمصدر (swim).',
 },
 {
 promptEn: 'The dog isn’t able to catch the ball.',
 bracketWordEn: '(can’t)',
 answerEn: 'The dog can’t catch the ball.',
 howAr: 'نحذف isn’t able to ونضع (can’t) بعد (The dog) متبوعة بالمصدر (catch).',
 },
 ],
 },
 {
 ruleTitleEn: '2. Connectors (Although / Even though / While & On one hand / On the other hand)',
 ruleTitleAr: 'الروابط الدالة على التناقض وعرض وجهتي النظر',
 usageEn: [
'A) Although / Even though / While: used to express contrast at the beginning or middle of a sentence.',
'B) On one hand,... On the other hand,...: used to show two different opinions or opposite sides of the same topic.',
 ],
 usageArSummary:
'تُستخدم Although و Even though (بمعنى على الرغم من) و While (بمعنى بينما) للتعبير عن التناقض في أول الجملة أو وسطها، بينما يُستخدم تعبير On one hand / On the other hand لعرض جانبين مختلفين للموضوع.',
 structures: [
 {
 labelEn: 'Although / Even though (Contrast)',
 formulaEn: 'Although / Even though + Subject + Verb, Subject + Verb | S + V + although / even though + S + V',
 structureAr: 'يتبعها جملة كاملة (فاعل + فعل) تعبر عن التناقض، وإذا جاءت مكان but في الوسط توضع قبل جملة السبب/الشرط المتناقض مع تبديل الجملتين.',
 exampleEn: 'Although he is rich, he isn’t happy. / She passed the exam even though she didn’t study much.',
 exampleAr: 'على الرغم من أنه غني، فإنه ليس سعيداً. / نجحت في الامتحان رغم أنها لم تذاكر كثيراً.',
 },
 {
 labelEn: 'While (Contrast between two clauses)',
 formulaEn: 'While + Subject + Verb, Subject + Verb | S + V + while + S + V',
 structureAr: 'تأتي بمعنى «بينما» للمقارنة بين فكرتين أو شخصين في بداية الجملة أو وسطها.',
 exampleEn: 'While I enjoy swimming, I don’t like swimming in the sea. / I wake up early while my whole family stay asleep.',
 exampleAr: 'بينما أستمتع بالسباحة، لا أحب السباحة في البحر. / أستيقظ مبكراً بينما تبقى أسرتي نائمة.',
 },
 {
 labelEn: 'On one hand,... On the other hand,...',
 formulaEn: 'On one hand, + [Side 1]. On the other hand, + [Side 2].',
 structureAr: 'تعبيران متلازمان لعرض وجهة نظر أولى (من ناحية) ثم مقابلتها بالجانب الآخر من نفس الموضوع (من ناحية أخرى).',
 exampleEn: 'On one hand, social media helps students know a lot of things. On the other hand, it can be hard to focus at home.',
 exampleAr: 'من ناحية، تساعد وسائل التواصل الطلاب على معرفة الكثير. ومن ناحية أخرى، قد يصعب التركيز في المنزل.',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'He is strong, but he can’t lift the box.',
 bracketWordEn: '(although)',
 answerEn: 'He can’t lift the box although he is strong.',
 howAr: 'نحذف (but) ونكتب (although) في الوسط عكس مكان (but) مع تبديل الجملتين.',
 },
 {
 promptEn: 'Hassan is reading a book, and his brother is playing games.',
 bracketWordEn: '(while)',
 answerEn: 'Hassan is reading a book while his brother is playing games.',
 howAr: 'نحذف (and) ونكتب (while) في وسط الجملتين للمقارنة بين الحدثين.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'use + object + for + (v + ing) / noun',
 ruleEn: 'Subject + use + object + for + (v + ing) / noun',
 structureAr: 'عند بيان الغرض من استخدام شيء بعد حرف الجر for، نضع اسماً أو فعلاً مضافاً له (-ing).',
 examplesEn: ['Everyone uses screens for many activities. / Many students use tablets for doing research.'],
 },
 {
 titleEn: 'Moreover, / during + noun / while + (v + ing)',
 ruleEn: 'Moreover,... (addition) | during + noun | while + (v + ing) [when no subject]',
 structureAr: 'Moreover تعني علاوة على ذلك وتُستخدم للإضافة؛ during يتبعها اسم (during meals)؛ while عند عدم وجود فاعل بعدها يتبعها (v + ing).',
 examplesEn: [
'Moreover, it can also make it harder to focus.',
'You should take short breaks during meals.',
'Take short breaks while doing your homework.',
 ],
 },
 ],
 prefixesSuffixes: [
 { word: 'entertain (v)', affix: '-ment', functionAr: 'تحوّل إلى اسم', newWord: 'entertainment (n)', meaningAr: 'ترفيه / تسلية' },
 { word: 'health (n)', affix: '-y', functionAr: 'تحوّل إلى صفة', newWord: 'healthy (adj)', meaningAr: 'صحي' },
 { word: 'distract (v)', affix: '-ion', functionAr: 'تحوّل إلى اسم', newWord: 'distraction (n)', meaningAr: 'تشتيت / إلهاء' },
 { word: 'design / lead (v)', affix: '-er', functionAr: 'تحوّل إلى اسم فاعل', newWord: 'designer / leader (n)', meaningAr: 'مصمم / قائد' },
 { word: 'advantage (n)', affix: 'dis-', functionAr: 'تعطي عكس الكلمة', newWord: 'disadvantage (n)', meaningAr: 'عيب' },
 { word: 'mental (adj)', affix: '-ly', functionAr: 'تحوّل إلى حال', newWord: 'mentally (adv)', meaningAr: 'ذهنياً / عقلياً' },
 ],
 speakingQA: {
 titleEn: 'SKILLS: Asking and answering about managing screen time',
 titleAr: 'مهارة المحادثة: السؤال والإجابة عن إدارة وقت الشاشة',
 pairs: [
 { qEn: 'What is screen time?', aEn: 'It’s the time you spend looking at a phone, tablet, computer, or TV.', arSummary: 'ما هو وقت الشاشة؟ — الوقت الذي تقضيه أمام الهاتف أو اللوحي أو الحاسوب أو التلفاز.' },
 { qEn: 'How much time should I spend using computers a day?', aEn: 'You shouldn’t spend more than two hours.', arSummary: 'كم ساعة يومياً؟ — لا ينبغي أن تقضي أكثر من ساعتين.' },
 { qEn: 'How much entertainment screen time do experts recommend for teens?', aEn: 'Experts say teens should have one to two hours.', arSummary: 'كم ينصح الخبراء للترفيه؟ — ساعة إلى ساعتين.' },
 { qEn: 'What are some healthy activities to balance screen use?', aEn: 'You can play outside, read a book, or draw.', arSummary: 'ما الأنشطة الصحية؟ — اللعب في الخارج أو قراءة كتاب أو الرسم.' },
 ],
 },
 dissectionTitleAr: 'تفكيك جملة فعل ناقص للمنع القاطع',
 sentenceDissection: [
 { text: 'Students', roleEn: 'Subject', roleAr: 'الفاعل', color: '#0d9488', tipAr: 'الفعل الناقص لا يتغير مع المفرد أو الجمع' },
 { text: 'mustn’t', roleEn: 'Modal of Prohibition', roleAr: 'أداة منع وتحريم قاطع', color: '#e11d48', tipAr: 'تعني ممنوع تماماً (not allowed)' },
 { text: 'use', roleEn: 'Bare Infinitive', roleAr: 'المصدر بدون to', color: '#4f46e5', tipAr: 'بعد الأفعال الناقصة نضع المصدر فقط' },
 { text: 'their phones', roleEn: 'Object', roleAr: 'المفعول به', color: '#d97706', tipAr: 'الشيء الممنوع استخدامه' },
 { text: 'during exams.', roleEn: 'during + Noun', roleAr: 'during + اسم (الوقت)', color: '#059669', tipAr: 'تطبيق لقاعدة during + noun من' },
 ],
 mnemonicTitleAr: 'شفرة المصعد + فرق during و while',
 mnemonicAr:
'100% must | 75% should | 50% can | 0% mustn’t — وبعدها دائماً مصدر (inf.). وتذكّر: during + اسم (during the meeting)، بينما while + V-ing عند غياب الفاعل (while cleaning)!',
 examBlueprintAr: [
 { questionType: 'تطبيقات الأفعال الناقصة والتحويل', tipAr: 'You are not allowed -> mustn’t | It’s a bad idea -> shouldn’t | but -> although (مع عكس موضع الجملتين).' },
 ],
 miniCheck: {
 questionEn: 'Please, remember to turn off your mobile phone ________ the meeting.',
 questionAr: 'من فضلك، تذكّر إغلاق هاتفك المحمول ________ الاجتماع.',
 options: ['during', 'as', 'since', 'when'],
 correctIndex: 0,
 explanationAr: 'بما أن بعد الفراغ اسماً (the meeting) وليس جملة فعلية، نختار during.',
 },
 },

'u4-p2': {
 lessonId: 'u4-p2',
 hookQuestionAr: 'كيف نُكوّن صفات الشعور والأسماء في سياق موازنة وقت الشاشة والقيادة الصديقة للبيئة في القصة؟',
 hookQuestionEn: 'How are "-ed" adjectives and "-ion" nouns formed in Lesson 3 & Story Ch. 4?',
 objectivesAr: [
'إتقان اشتقاق الصفات المنتهية بـ (-ed) والاسم بـ (-ion) وتصريف keep / know بوضوح.',
'حفظ التعبيرات الاصطلاحية (in control of, in person, keep... away, little by little, make a change).',
'ربط المفردات بأحداث الفصل الرابع من قصة «The School Garden Project» حول القيادة المسؤولة.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Word Formation (-ed / -ion) & Irregular Verbs (keep / know)',
 ruleTitleAr: 'اشتقاق الصفات والأسماء وتصريفات الأفعال الشاذة',
 usageEn: [
'1. Verb + "-ed" forms feeling adjectives (shock -> shocked, stress -> stressed, surprise -> surprised).',
'2. Verb + "-ion" forms a noun (connect -> connection).',
'3. Irregular Verbs: keep -> kept -> kept | know -> knew -> known.',
 ],
 usageArSummary:
'يتناول هذا الجزء تحويل أفعال المشاعر إلى صفات بإضافة (-ed)، وتحويل الفعل connect إلى اسم بإضافة (-ion)، مع حفظ الأفعال الشاذة keep و know.',
 diagramType: 'sentence-blocks',
 structures: [
 {
 labelEn: 'Verb + -ed -> Feeling Adjective',
 formulaEn: 'Verb (shock / stress / surprise) + -ed -> Adjective (shocked / stressed / surprised)',
 structureAr: 'نضيف -ed للفعل (بعد حذف e النهائية في surprise) لتكوين صفة تصف شعور الشخص بالصدمة أو التوتر أو الدهشة.',
 exampleEn: 'Adel felt stressed before the exam and couldn’t sleep. He wasn’t relaxed.',
 exampleAr: 'شعر عادل بالتوتر قبل الامتحان ولم يستطع النوم، ولم يكن مسترخياً.',
 },
 {
 labelEn: 'Verb + -ion -> Noun',
 formulaEn: 'Verb (connect) + -ion -> Noun (connection)',
 structureAr: 'إضافة اللاحقة -ion إلى الفعل connect تحوّله إلى اسم (اتصال / علاقة).',
 exampleEn: 'Make sure you have a stable internet connection before the lesson.',
 exampleAr: 'تأكد من وجود اتصال إنترنت مستقر قبل الدرس.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'Key Expressions',
 ruleEn: 'in control of | in person | keep... away | little by little | make a change | make a plan | pick up',
 structureAr: 'in control of متحكم في | in person شخصياً وجهاً لوجه | keep... away يُبقي... بعيداً | little by little تدريجياً | make a change يُحدث تغييراً.',
 examplesEn: [
'Please, keep your phone away while studying to focus better.',
'I want to make a change in my daily study habits.',
 ],
 },
 ],
 prefixesSuffixes: [
 { word: 'shock (v)', affix: '-ed', functionAr: 'تحوّل إلى صفة', newWord: 'shocked (adj)', meaningAr: 'مصدوم' },
 { word: 'stress (v)', affix: '-ed', functionAr: 'تحوّل إلى صفة', newWord: 'stressed (adj)', meaningAr: 'متوتر / مضغوط' },
 { word: 'surprise (v)', affix: '-ed', functionAr: 'تحوّل إلى صفة', newWord: 'surprised (adj)', meaningAr: 'مندهش / متفاجئ' },
 { word: 'connect (v)', affix: '-ion', functionAr: 'تحوّل إلى اسم', newWord: 'connection (n)', meaningAr: 'اتصال' },
 ],
 dissectionTitleAr: 'تفكيك جملة عن القيادة والأساليب الصديقة للبيئة',
 sentenceDissection: [
 { text: 'Responsible leaders', roleEn: 'Subject Noun Phrase', roleAr: 'الفاعل (قادة مسؤولون)', color: '#0d9488', tipAr: 'جمع يصف صفة القيادة في القصة' },
 { text: 'always choose', roleEn: 'Adverb + Present Simple', roleAr: 'ظرف تكرار + مضارع بسيط', color: '#4f46e5', tipAr: 'يعبر عن مبدأ ثابت ودائم' },
 { text: 'eco-friendly', roleEn: 'Compound Adjective', roleAr: 'صفة مركبة (صديق للبيئة)', color: '#059669', tipAr: 'تُكتب بشرطة بين eco و friendly' },
 { text: 'solutions', roleEn: 'Object', roleAr: 'المفعول به', color: '#d97706', tipAr: 'اسم جمع تصفه الصفة المركبة' },
 { text: 'that protect nature.', roleEn: 'Relative Clause', roleAr: 'جملة وصل توضيحية', color: '#e11d48', tipAr: 'that تحل محل غير العاقل (solutions)' },
 ],
 mnemonicTitleAr: 'شفرة الحفظ: stress → stressed / relaxed',
 mnemonicAr:
'احفظ الثنائي المتضاد في تطبيقات الاشتقاق والمرادفات: stressed (متوتر/مضغوط) مرادفها worried/upset ومضادها relaxed (مسترخٍ)، وimprove مرادفها develop ومضادها damage.',
 examBlueprintAr: [
 { questionType: 'تطبيقات الاشتقاق والمرادفات', tipAr: 'لتحويل surprise إلى صفة نحذف e ونضيف -ed؛ ومرادف improve هو develop.' },
 { questionType: 'القصة (الفصل الرابع)', tipAr: 'ركّز على رفض زينب للمواد الكيميائية واختيارها للأساليب الصديقة للبيئة في الزراعة.' },
 ],
 miniCheck: {
 questionEn: 'Adel felt stressed before the exam and couldn’t sleep. He wasn’t ________.',
 questionAr: 'شعر عادل بالتوتر قبل الامتحان ولم يستطع النوم، ولم يكن ________.',
 options: ['shocked', 'relaxed', 'surprised', 'worried'],
 correctIndex: 1,
 explanationAr: 'مضاد stressed (متوتر) هو relaxed (مسترخٍ/هادئ).',
 },
 },

'u4-p3': {
 lessonId: 'u4-p3',
 hookQuestionAr: 'ما المكونات الأربعة للمدونة الإلكترونية في المدونة الإلكترونية الاحترافية؟',
 hookQuestionEn: 'What are the 4 components of a Blog Post for an effective piece of writing?',
 objectivesAr: [
'إتقان القواعد الأسلوبية واللغوية لكتابة تدوينة إلكترونية جذابة.',
'حفظ المكونات الأربعة للـ Blog Post بدقة (Hook, Details, Images, Call to Action).',
'دراسة النموذج التطبيقي بعنوان «Take Control of Your Screen Time».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Blog Post Structure & Discourse Rules',
 ruleTitleAr: 'قواعد بناء التدوينة الإلكترونية وأسلوبها التفاعلي',
 usageEn: [
'A blog post is an online journal or website where someone writes regularly about a topic.',
'1. Hook (Introduction): engaging opening question or problem to make readers click and read.',
'2. Details (Body): explain the topic deeply, describing what happened and giving advice/solutions.',
'3. Images (Visual Aids): photos or charts to make information easier to understand.',
'4. Call to Action (Conclusion): ask the reader to do something (comment, try advice, share).',
 ],
 usageArSummary:
'منشور المدونة هو مقال في موقع إلكتروني يُكتب بأسلوب جذاب وتفاعلي عبر أربعة مكونات: الخطاف (المقدمة الجاذبة)، التفاصيل (المحتوى)، الصور المساعدة، ودعوة القارئ لاتخاذ إجراء في الخاتمة.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. Title (عنوان جذاب قصير)',
'2. Hook / Introduction (سؤال تفاعلي)',
'3. Details / Body (المشكلة والحل)',
'4. Images / Visual Aids (صور توضيحية)',
'5. Call to Action (تفاعل في التعليقات)',
 ],
 },
 structures: [
 {
 labelEn: 'Hook Question Structure',
 formulaEn: 'Have you ever + P.P. / thought about + [question]?',
 structureAr: 'نبدأ المدونة بسؤال مباشر بصيغة المضارع التام (Have you ever...?) لجذب القارئ وإشراكه فوراً.',
 exampleEn: 'Have you ever thought about how many hours you usually spend on your smartphone every day?',
 exampleAr: 'هل فكرت يوماً في عدد الساعات التي تقضيها عادة على هاتفك الذكي كل يوم؟',
 },
 {
 labelEn: 'Call to Action Ending',
 formulaEn: '[Direct Question to Reader]? + [Imperative Verb] below!',
 structureAr: 'تنتهي التدوينة بسؤال موجه للقارئ يليه فعل أمر ودي يدعوه لترك تعليق أو تجربة النصيحة.',
 exampleEn: 'What is your favorite way to spend time without a screen? Tell me below!',
 exampleAr: 'ما طريقتك المفضلة لقضاء الوقت دون شاشة؟ أخبرني بالأسفل!',
 },
 ],
 },
 ],
 writingCorner: {
 titleEn: 'A Blog Post',
 titleAr: 'ورشة الكتابة: المدونة الإلكترونية',
 definitionEn: 'A blog post is an online journal or website where someone writes regularly about a topic.',
 components: [
 { labelEn: '1. Hook (Introduction)', labelAr: 'الخطاف (مقدمة لجذب الانتباه)', guideAr: 'يجب أن يكون ممتعاً أو يطرح مشكلة ليجعل الناس يرغبون في النقر والقراءة.' },
 { labelEn: '2. Details (Body)', labelAr: 'التفاصيل (المحتوى)', guideAr: 'هنا تشرح الموضوع بعمق وتصف ما حدث وتقدم نصائحك أو حلولك.' },
 { labelEn: '3. Images (Visual Aids)', labelAr: 'الصور (الوسائل البصرية)', guideAr: 'تستخدم التدوينات الصور أو الرسوم لجعل المعلومات أسهل في الفهم.' },
 { labelEn: '4. Call to Action (Conclusion)', labelAr: 'دعوة لاتخاذ إجراء (الخاتمة)', guideAr: 'الجزء الأخير حيث تطلب من القارئ ترك تعليق أو تجربة نصيحتك أو مشاركة المنشور.' },
 ],
 modelTitleEn: 'Take Control of Your Screen Time (Model Example)',
 modelTextEn:
'Title: Take Control of Your Screen Time\nHave you ever thought about how many hours you usually spend on your smartphone every day?\nBeing a digital native is fun, but spending too much time on your smartphone can make you feel tired. I used to spend hours scrolling, which made me feel worried. To fix this, I started setting a "digital timer" for my games. Now, for every thirty minutes of screen time, I take a ten-minute break to play outside or talk to my family. This balance helps me stay active and focused on my schoolwork. Finding a balance between screens and real-world activities makes life much more exciting.\nWhat is your favorite way to spend time without a screen? Tell me below!',
 modelSummaryAr:
'يجمع النموذج الاحترافي المقترح بين عنوان واضح، وخطاف بسؤال (Have you ever...)، وتفاصيل التجربة الشخصية مع المؤقت الرقمي، وخاتمة بدعوة للتعليق (Tell me below!).',
 },
 dissectionTitleAr: 'تفكيك جملة الخطاف التفاعلي من نموذج المدونة الإلكترونية',
 sentenceDissection: [
 { text: 'Have you ever', roleEn: 'Present Perfect Hook', roleAr: 'سؤال بالمضارع التام (هل سبق...)', color: '#4f46e5', tipAr: 'تستخدم ever في السؤال عن الخبرة الشخصية' },
 { text: 'thought about', roleEn: 'P.P. + Preposition', roleAr: 'التصريف الثالث + حرف الجر', color: '#0d9488', tipAr: 'التصريف الثالث من think' },
 { text: 'how many hours', roleEn: 'Quantifier Question', roleAr: 'أداة سؤال للعدد', color: '#d97706', tipAr: 'hours اسم معدود جمع لذا نستخدم how many' },
 { text: 'you usually spend', roleEn: 'Subject + Adverb + Verb', roleAr: 'مضارع بسيط للعادات', color: '#059669', tipAr: 'usually تسبق الفعل الأساسي' },
 { text: 'on your smartphone every day?', roleEn: 'Place + Time', roleAr: 'تكملة وتكرار يومي', color: '#e11d48', tipAr: 'ينتهي الخطاف بعلامة استفهام تشوق القارئ' },
 ],
 mnemonicTitleAr: 'شفرة المدونة : H - D - I - C',
 mnemonicAr:
'Hook (مقدمة جاذبة) ← Details (تفاصيل وحلول) ← Images (صور) ← Call to Action (دعوة للتعليق مثل Tell me below!).',
 examBlueprintAr: [
 { questionType: 'الاختيار على مكونات المدونة', tipAr: 'الجزء الذي يطلب من القارئ ترك تعليق أو مشاركة المنشور يُسمى Call to Action.' },
 ],
 miniCheck: {
 questionEn: 'In a blog post, which part asks the reader to leave a comment or try your advice?',
 questionAr: 'في المدونة الإلكترونية، أي جزء يطلب من القارئ ترك تعليق أو تجربة نصيحتك؟',
 options: ['Title', 'Hook', 'Visual Aids', 'Call to Action'],
 correctIndex: 3,
 explanationAr: 'الجزء الأخير يُسمى Call to Action (دعوة لاتخاذ إجراء).',
 },
 },

'u5-p1': {
 lessonId: 'u5-p1',
 hookQuestionAr: 'كيف نرتب الخطوات بظروف التسلسل الزمني ونصيغ جمل الأمر المثبتة والمنفية في كتابة التعليمات والخطوات؟',
 hookQuestionEn: 'How do Sequence Adverbs and Imperatives work in instructional writing?',
 objectivesAr: [
'إتقان ظروف التسلسل (First/Firstly, Next/After that/Then, Finally/Lastly/In conclusion) لتنظيم الخطوات.',
'إتقان صيغة الأمر (Affirmative, Negative, Be + adj., Don’t be + adj., والمنادى بفاصلة) بأسلوب عملي.',
'التفريق بين beside و besides، وmeet و interview، ومحادثة التفكير التصميمي.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: '1. Sequence Adverbs',
 ruleTitleAr: 'ظروف التسلسل الزمني لتنظيم الخطوات والأحداث',
 usageEn: ['Sequence adverbs help us organize steps in a process or story in order.'],
 usageArSummary: 'تُستخدم ظروف التسلسل لتنظيم خطوات عملية معينة أو لترتيب أحداث قصة بوضوح.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. First / Firstly (للبداية)',
'2. Next / After that / Then (للخطوة التالية)',
'3. Finally / Lastly / In conclusion (للنهاية)',
 ],
 },
 structures: [
 {
 labelEn: 'Beginning (First / Firstly)',
 formulaEn: 'First / Firstly, + [step 1] | To + inf., first + [imperative].',
 structureAr: 'تُستخدم First أو Firstly لتقديم الخطوة الأولى أو أول أحداث القصة، وغالباً تتبعها فاصلة في بداية الجملة.',
 exampleEn: 'To cook a meal, first wash your hands. / Firstly, I woke up early and got ready for school.',
 exampleAr: 'لطهي وجبة، اغسل يديك أولاً. / في البداية، استيقظت مبكراً وتجهزت للمدرسة.',
 },
 {
 labelEn: 'Middle Steps (Next / After that / Then)',
 formulaEn: 'Next, / After that, + [step] | Then, + [step]',
 structureAr: 'تُستخدم Next و After that و Then لتقديم الخطوة التالية أو استكمال أحداث القصة.',
 exampleEn: 'Next, I brushed my teeth and had breakfast. / I finished my homework. Then, I went to the club.',
 exampleAr: 'تالياً، غسلت أسناني وتناولت الإفطار. / أنهيت واجبي، ثم ذهبت إلى النادي.',
 },
 {
 labelEn: 'Ending (Finally / Lastly / In conclusion)',
 formulaEn: 'Finally, / Lastly, / In conclusion, + [final step / summary].',
 structureAr: 'تُستخدم لتقديم الخطوة الأخيرة أو آخر أحداث القصة أو خلاصة الموضوع.',
 exampleEn: 'Finally, I arrived at school and met my friends. / In conclusion, it’s important to manage your time.',
 exampleAr: 'أخيراً، وصلت للمدرسة وقابلت أصدقائي. / في النهاية، من المهم تنظيم وقتك.',
 },
 ],
 gotItExamples: [
 {
 promptEn: '................ (Finally), read the questions carefully before answering.',
 bracketWordEn: '(Finally)',
 answerEn: 'First / Firstly, read the questions carefully before answering.',
 howAr: 'قراءة الأسئلة جيداً هي الخطوة الأولى قبل الإجابة، لذا نصحّح Finally إلى First / Firstly.',
 },
 {
 promptEn: 'Do your homework, watch TV, and................ (firstly) turn off the lights before going to sleep.',
 bracketWordEn: '(firstly)',
 answerEn: 'finally / lastly',
 howAr: 'إطفاء الأنوار قبل النوم هو الخطوة الأخيرة في التسلسل، لذا نكتب finally / lastly.',
 },
 ],
 },
 {
 ruleTitleEn: '2. Imperatives (Affirmative, Negative & Special Notes)',
 ruleTitleAr: 'صيغة الأمر المثبتة والمنفية والملاحظات الخاصة ',
 usageEn: ['Imperatives are commands, instructions, or advice we give directly to others without a subject before the verb.'],
 usageArSummary: 'جمل الأمر هي أوامر أو تعليمات نعطيها للآخرين، وتبدأ بالفعل في المصدر مباشرة بدون فاعل.',
 structures: [
 {
 labelEn: 'Affirmative Imperative',
 formulaEn: 'Infinitive (inf.)... | Always + inf....',
 structureAr: 'عند إعطاء أمر مثبت: نبدأ الجملة مباشرة بمصدر الفعل بدون أي إضافات، ويمكن أن تسبقه Always للتأكيد.',
 exampleEn: 'Wash your hands before lunch. / Always go to bed early.',
 exampleAr: 'اغسل يديك قبل الغداء. / اذهب دائماً إلى النوم مبكراً.',
 },
 {
 labelEn: 'Negative Imperative',
 formulaEn: 'Don’t + inf.... | Never + inf....',
 structureAr: 'عند إعطاء أمر منفي (نهي): نبدأ بـ Don’t أو Never متبوعة بمصدر الفعل بدون أي إضافات.',
 exampleEn: 'Don’t forget to water the plants. / Never leave your account open for everyone.',
 exampleAr: 'لا تنسَ سقي النباتات. / لا تترك حسابك مفتوحاً للجميع أبداً.',
 },
 {
 labelEn: 'Imperative with Adjectives (Be / Don’t be)',
 formulaEn: 'Be + adjective | Don’t be + adjective',
 structureAr: 'لاحظ أن: إذا كان هناك صفة في جملة الأمر نستخدم قبلها Be في الإثبات وDon’t be في النفي.',
 exampleEn: 'Be quiet. The baby is sleeping. / Don’t be rude to your friends.',
 exampleAr: 'كن هادئاً؛ فالطفل نائم. / لا تكن وقحاً مع أصدقائك.',
 },
 {
 labelEn: 'Addressing Someone (Comma Rule)',
 formulaEn: 'Name, + imperative... | Imperative..., + Name.',
 structureAr: 'يمكن أن يُذكر المخاطَب في بداية جملة الأمر أو نهايتها ويُفصل دائماً بفاصلة (,).',
 exampleEn: 'Mona, clean the room quickly. / Remember to buy some bread, Mohamed.',
 exampleAr: 'يا منى، نظّفي الغرفة بسرعة. / تذكّر شراء بعض الخبز يا محمد.',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'Ola,................ (not) play in the street.',
 bracketWordEn: '(not)',
 answerEn: 'don’t',
 howAr: 'الجملة أمر منفي بعد المخاطَب (Ola,)، لذا نضع don’t قبل مصدر الفعل play.',
 },
 {
 promptEn: '................ (making) your bed, Hala.',
 bracketWordEn: '(making)',
 answerEn: 'Make',
 howAr: 'الجملة أمر مثبت لذا نبدأ بالفعل في المصدر (Make) ونحذف -ing.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'beside / besides',
 ruleEn: 'beside = next to (place) | besides = in addition to',
 structureAr: 'beside (بدون s) تعني بجانب/بجوار، أما besides (بحرف s) فتعني بالإضافة إلى / علاوة على ذلك.',
 examplesEn: [
'Adel is standing beside (next to) the door.',
'We want to play tennis besides (in addition to) playing basketball.',
 ],
 },
 {
 titleEn: 'meet / interview',
 ruleEn: 'meet = meet a friend/person | interview = hold a formal interview for a job/report',
 structureAr: 'meet يقابل شخصاً أو صديقاً بشكل عام، أما interview فيجري مقابلة رسمية لعمل أو استطلاع رأي.',
 examplesEn: [
'It’s nice to meet you, Ahmed.',
'The manager needs to interview more people for the job.',
 ],
 },
 ],
 prefixesSuffixes: [
 { word: 'type (n)', affix: 'proto-', functionAr: 'تعطي معنى أولياً', newWord: 'prototype (n)', meaningAr: 'نموذج أولي' },
 { word: 'style (n)', affix: '-ish', functionAr: 'تحوّل إلى صفة', newWord: 'stylish (adj)', meaningAr: 'عصري / أنيق' },
 { word: 'design (v)', affix: '-er', functionAr: 'تحوّل إلى اسم فاعل', newWord: 'designer (n)', meaningAr: 'مصمم' },
 { word: 'possible (adj)', affix: 'im-', functionAr: 'تعطي عكس الكلمة', newWord: 'impossible (adj)', meaningAr: 'مستحيل' },
 ],
 speakingQA: {
 titleEn: 'SKILLS: Asking and answering about thinking like a designer',
 titleAr: 'مهارة المحادثة: السؤال والإجابة عن التفكير كمصمم',
 pairs: [
 { qEn: 'What does it mean to think like a designer?', aEn: 'It means to create useful and creative ideas.', arSummary: 'ماذا يعني التفكير كمصمم؟ — ابتكار أفكار مفيدة وإبداعية.' },
 { qEn: 'How can thinking like a designer help people?', aEn: 'It helps them solve problems and find solutions.', arSummary: 'كيف يساعد الناس؟ — يساعدهم على حل المشكلات وإيجاد الحلول.' },
 { qEn: 'What does design thinking mean?', aEn: 'It means caring about people and imagining better solutions.', arSummary: 'ما معنى التفكير التصميمي؟ — الاهتمام بالناس وتخيل حلول أفضل.' },
 { qEn: 'Do you prefer working in a team or individually when solving problems?', aEn: 'I prefer working in a team to brainstorm new ideas from different points of view.', arSummary: 'فريق أم فردي؟ — أفضل الفريق لتبادل الأفكار من وجهات نظر مختلفة.' },
 { qEn: 'What do you think is the hardest part of a "Design Sprint"?', aEn: 'I think the hardest part is working within a very short time frame.', arSummary: 'ما أصعب جزء في ورشة التصميم السريعة؟ — العمل ضمن إطار زمني قصير جداً.' },
 ],
 },
 dissectionTitleAr: 'تفكيك جملة إرشادية تجمع التسلسل الزمني وفعل الأمر',
 sentenceDissection: [
 { text: 'First, ', roleEn: 'Sequence Adverb', roleAr: 'ظرف تسلسل للبداية + فاصلة', color: '#4f46e5', tipAr: 'يأتي في بداية الخطوة الأولى متبوعاً بفاصلة' },
 { text: 'brainstorm', roleEn: 'Imperative Verb (Inf.)', roleAr: 'فعل أمر في المصدر', color: '#0d9488', tipAr: 'بدون فاعل وبدون أي تصريف' },
 { text: 'many creative ideas, ', roleEn: 'Object', roleAr: 'المفعول به', color: '#d97706', tipAr: 'ما يُطلب من المصمم فعله' },
 { text: 'and don’t', roleEn: 'Negative Imperative', roleAr: 'أداة النهي (Don’t)', color: '#e11d48', tipAr: 'للنهي نستخدم Don’t أو Never' },
 { text: 'be afraid of mistakes.', roleEn: 'Be + Adjective', roleAr: 'فعل الكينونة مع الصفة في الأمر', color: '#059669', tipAr: 'مع الصفة نستخدم be / don’t be' },
 ],
 mnemonicTitleAr: 'شفرة المصمم: سلم الخطوات + «الأمر بالمصدر والصفة بـ Be»',
 mnemonicAr:
'First ← Next / Then / After that ← Finally. وفي الأمر: ابدأ بالمصدر (Wash) أو Don’t + المصدر (Don’t play)، وإذا جاءت صفة فلا تنسَ Be / Don’t be!',
 examBlueprintAr: [
 { questionType: 'تصحيح صيغة الأمر والتسلسل', tipAr: 'لا تنخدع بالاسم في أول الجملة إذا تبعته فاصلة (Ola,...) فهو منادى والفعل بعده أمر (don’t / Make).' },
 ],
 miniCheck: {
 questionEn: '________ rude to your classmates when discussing ideas.',
 questionAr: '________ فظاً مع زملائك عند مناقشة الأفكار.',
 options: ['Not be', 'Don’t', 'Don’t be', 'Aren’t'],
 correctIndex: 2,
 explanationAr: 'لأن كلمة rude صفة وليست فعلاً أساسياً، نستخدم في الأمر المنفي صيغة (Don’t be + adj.).',
 },
 },

'u5-p2': {
 lessonId: 'u5-p2',
 hookQuestionAr: 'كيف نشتق الحال والصفة في درس «انظر بعيونهم» والفصل الخامس من القصة في سياق التفكير التصميمي؟',
 hookQuestionEn: 'How do "-ly" adverbs, "-ed" adjectives, and empathy expressions work in Lesson 3 & Story Ch. 5?',
 objectivesAr: [
'إتقان قواعد اشتقاق الحال (-ly) والصفة (-ed) وتصريفات draw و say مع تطبيقات واضحة.',
'حفظ التعبيرات الاصطلاحية (make life easier, see through their eyes, write down, pretend to, show respect).',
'ربط تعاطف المصمم بأحداث الفصل الخامس من قصة «The School Garden Project».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Word Building (-ly / -ed) & Irregular Verbs (draw / say)',
 ruleTitleAr: 'قواعد اشتقاق الحال والصفة والأفعال الشاذة',
 usageEn: [
'1. Adjective + "-ly" forms an adverb of manner describing how an action is done (close -> closely).',
'2. Verb + "-ed" forms an adjective (welcome -> welcomed).',
'3. Irregular Verbs: draw -> drew -> drawn | say -> said -> said.',
 ],
 usageArSummary:
'يتمرن الطالب على تحويل الصفة إلى حال بإضافة (-ly) مثل closely (عن قرب)، وتحويل الفعل welcome إلى صفة بإضافة (-ed) بمعنى مُرحَّب به، وحفظ تصريفي draw و say.',
 diagramType: 'sentence-blocks',
 structures: [
 {
 labelEn: 'Adjective + -ly -> Adverb',
 formulaEn: 'Subject + Verb + Object + [Adjective + -ly]',
 structureAr: 'إضافة اللاحقة -ly إلى الصفة (close) تحوّلها إلى حال (closely) يصف كيفية حدوث الفعل (ينظر عن قرب).',
 exampleEn: 'The teacher asked the students to look closely at the map to find the hidden details.',
 exampleAr: 'طلب المعلم من الطلاب النظر عن قرب إلى الخريطة لإيجاد التفاصيل المخفية.',
 },
 {
 labelEn: 'Verb + -ed -> Adjective',
 formulaEn: 'Verb (welcome) + -ed -> Adjective (welcomed)',
 structureAr: 'إضافة -ed إلى الفعل welcome تحوّله إلى صفة بمعنى «مُرحَّب به».',
 exampleEn: 'The teacher helped the newcomers feel welcomed and comfortable in class.',
 exampleAr: 'ساعد المعلم الوافدين الجدد على الشعور بالترحيب والراحة في الفصل.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'Design Empathy & Story Expressions',
 ruleEn: 'make life easier | see through their eyes | write down | pretend to | show respect | water the plants',
 structureAr: 'make life easier يجعل الحياة أسهل | see through their eyes يفهم وجهة نظرهم | write down يسجل/يدون | pretend to يتظاهر أن | show respect يظهر الاحترام.',
 examplesEn: [
'We should try to make life easier for others.',
'The team faced a big challenge during the project.',
 ],
 },
 ],
 prefixesSuffixes: [
 { word: 'close (adj)', affix: '-ly', functionAr: 'تحوّل الصفة إلى حال', newWord: 'closely (adv)', meaningAr: 'عن قرب' },
 { word: 'welcome (v)', affix: '-ed', functionAr: 'تحوّل إلى صفة', newWord: 'welcomed (adj)', meaningAr: 'مُرحَّب به' },
 ],
 dissectionTitleAr: 'تفكيك جملة تجمع التعاطف والتفكير التصميمي',
 sentenceDissection: [
 { text: 'Good designers', roleEn: 'Plural Subject', roleAr: 'الفاعل', color: '#0d9488', tipAr: 'أصحاب المبادرة والتصميم' },
 { text: 'look closely', roleEn: 'Verb + Adverb (-ly)', roleAr: 'فعل + حال يصف الطريقة', color: '#4f46e5', tipAr: 'closely حال مشتق من close' },
 { text: 'at users’ needs', roleEn: 'Prepositional Object', roleAr: 'احتياجات المستخدمين', color: '#d97706', tipAr: 's’ للجمع المملوك' },
 { text: 'so newcomers feel', roleEn: 'Result + Linking Verb', roleAr: 'النتيجة + فعل حسي', color: '#059669', tipAr: 'feel يتبعها صفة مباشرة' },
 { text: 'welcomed.', roleEn: 'Adjective (-ed)', roleAr: 'صفة الشعور (مُرحَّب به)', color: '#e11d48', tipAr: 'welcomed تصف إحساس الوافدين الجدد' },
 ],
 mnemonicTitleAr: 'شفرة قاعدة الاشتقاق: -ly للحال و -ed للترحيب',
 mnemonicAr:
'الصفة + ly تصف «كيف» نفعل الفعل (look closely)، ومرادف create هو invent/produce، ومضاد confused هو confident.',
 examBlueprintAr: [
 { questionType: 'تطبيقات الحال والصفة', tipAr: 'لتكوين الصفة من welcome نضيف -ed؛ وعند وصف الفعل look نختار الحال closely.' },
 ],
 miniCheck: {
 questionEn: 'The teacher asked the students to look ________ at the map to find the hidden details.',
 questionAr: 'طلب المعلم من الطلاب أن ينظروا ________ إلى الخريطة لإيجاد التفاصيل المخفية.',
 options: ['loudly', 'quickly', 'lazily', 'closely'],
 correctIndex: 3,
 explanationAr: 'كلمة closely تعني «عن قرب / بتمعّن» وهي المشتقة من الصفة close بإضافة -ly.',
 },
 },

'u5-p3': {
 lessonId: 'u5-p3',
 hookQuestionAr: 'ما القواعد الخمس لكتابة منشور على وسائل التواصل الاجتماعي لصناعة محتوى رقمي مؤثر؟',
 hookQuestionEn: 'What are the 5 rules for writing a Social Media Post?',
 objectivesAr: [
'إتقان القواعد الخمس لكتابة منشور التواصل الاجتماعي (A Social Media Post) باحترافية.',
'توظيف الجمل القصيرة الواضحة والأسلوب الإيجابي وصيغة الأمر التحفيزية.',
'دراسة النموذج التطبيقي بعنوان «From Stress to Success».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: '5 Rules for Writing a Social Media Post',
 ruleTitleAr: 'القواعد الخمس وتراكيب الجمل لمنشور التواصل الاجتماعي',
 usageEn: [
'1. Start with a catchy intro: say something interesting, funny, or exciting to catch attention.',
'2. Use clear and short sentences: write about the problem you faced and how you solved it using simple details.',
'3. Use emojis and symbols: emojis can add fun and feeling, but don’t use too many.',
'4. Be positive and kind: think before you post.',
'5. Check your post: make sure your spelling and grammar are correct.',
 ],
 usageArSummary:
'نتبع خمس قواعد ذهبية لبناء منشور ناجح: مقدمة خاطفة للانتباه، جمل قصيرة وواضحة تحكي المشكلة وحلها، استخدام معتدل للرموز التعبيرية، الإيجابية واللطف، ومراجعة الإملاء والقواعد.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. Start with a catchy intro',
'2. Use clear and short sentences',
'3. Use emojis and symbols (moderately)',
'4. Be positive and kind',
'5. Check spelling and grammar',
 ],
 },
 structures: [
 {
 labelEn: 'Catchy Intro Pattern',
 formulaEn: '[Topic] doesn’t have to be [negative adj.] — a few smart changes can make [activity] + [comparative adj.]!',
 structureAr: 'افتتاحية جذابة تنفي الصعوبة بـ doesn’t have to be ثم تقترح حلاً عملياً بصيغة مقارنة.',
 exampleEn: 'Homework doesn’t have to be stressful — a few smart changes can make studying easier and more fun!',
 exampleAr: 'لا يجب أن يكون الواجب المنزلي مُرهِقاً — بضعة تغييرات ذكية تجعل المذاكرة أسهل وأكثر متعة!',
 },
 {
 labelEn: 'Positive Imperative Ending',
 formulaEn: 'If [problem] is hard for you too, try + [solution]. | Start today and take control of + [noun]!',
 structureAr: 'نختم المنشور بدعوة إيجابية باستخدام صيغة الأمر (try / Start / take control) لتشجيع المتابعين.',
 exampleEn: 'Start today and take control of your study time!',
 exampleAr: 'ابدأ اليوم وتحكم في وقت مذاكرتك!',
 },
 ],
 },
 ],
 writingCorner: {
 titleEn: 'A Social Media Post',
 titleAr: 'ورشة الكتابة: منشور على وسائل التواصل الاجتماعي',
 definitionEn: 'A social media post shares a short, clear, and positive story or solution to engage followers online.',
 components: [
 { labelEn: '1. Start with a catchy intro', labelAr: 'مقدمة خاطفة', guideAr: 'قل شيئاً ممتعاً أو مثيراً لجذب الانتباه.' },
 { labelEn: '2. Use clear and short sentences', labelAr: 'جمل واضحة وقصيرة', guideAr: 'اكتب عن المشكلة التي واجهتك وكيف حللتها بتفاصيل بسيطة.' },
 { labelEn: '3. Use emojis and symbols', labelAr: 'الرموز التعبيرية', guideAr: 'أضف الرموز باعتدال لإضفاء الحيوية دون إفراط.' },
 { labelEn: '4. Be positive and kind', labelAr: 'الإيجابية واللطف', guideAr: 'فكّر قبل أن تنشر ووجّه رسالة مشجعة.' },
 { labelEn: '5. Check your post', labelAr: 'مراجعة المنشور', guideAr: 'تأكد من صحة الإملاء والقواعد قبل النشر.' },
 ],
 modelTitleEn: 'From Stress to Success (Model Example)',
 modelTextEn:
'Title: From Stress to Success\nHomework doesn’t have to be stressful — a few smart changes can make studying easier and more fun! Homework used to make me feel tired and stressed. I sat for hours, but couldn’t finish much. Then, I changed my way of studying. I broke my homework into small parts and used a timer. I also turned off my phone. This helped me focus better and finish faster! Now, I have more free time to relax. This experience showed me that simple changes can solve big problems. If homework is hard for you too, try a new method.\nStart today and take control of your study time!',
 modelSummaryAr:
'يوضّح النموذج المقترح علامات كل جزء: Title، ثم A catchy intro، ثم Short and clear sentences مع Emojis، ثم جملة ختامية مشجعة (Be positive and kind).',
 },
 dissectionTitleAr: 'تفكيك جملة من نموذج المنشور الرقمي',
 sentenceDissection: [
 { text: 'Homework', roleEn: 'Subject', roleAr: 'الفاعل (موضوع المنشور)', color: '#0d9488', tipAr: 'اسم غير معدود يعامل معاملة المفرد' },
 { text: 'used to make me', roleEn: 'used to + inf. + obj', roleAr: 'عادة ماضية + مفعول', color: '#4f46e5', tipAr: 'تصف معاناة سابقة تغيّرت الآن' },
 { text: 'feel', roleEn: 'Bare Infinitive after make', roleAr: 'مصدر بدون to بعد make', color: '#d97706', tipAr: 'قاعدة: make + object + inf.' },
 { text: 'tired and stressed.', roleEn: 'Adjectives (-ed)', roleAr: 'صفات شعور سلبية', color: '#e11d48', tipAr: 'تمهد لعرض الحل في الجمل التالية' },
 ],
 mnemonicTitleAr: 'شفرة المنشور : 5 قواعد ذهبية',
 mnemonicAr:
'1) مقدمة خاطفة (Catchy intro) ← 2) جمل قصيرة ← 3) إيموجي معتدل ← 4) كن إيجابياً ← 5) راجع القواعد والإملاء.',
 examBlueprintAr: [
 { questionType: 'الكتابة / سؤال المهارات', tipAr: 'الفرق الأساسي: المنشور يعتمد على جمل قصيرة وCatchy intro وEmojis باعتدال ورسالة إيجابية في النهاية.' },
 ],
 miniCheck: {
 questionEn: 'When writing a social media post, what should you do with emojis and symbols?',
 questionAr: 'عند كتابة منشور تواصل اجتماعي، ماذا ينبغي أن تفعل مع الرموز التعبيرية (Emojis)؟',
 options: [
'Use as many emojis as possible in every word',
'Never use any punctuation or grammar check',
'Use them to add fun and feeling, but don’t use too many',
'Replace all verbs with symbols',
 ],
 correctIndex: 2,
 explanationAr: 'من الأفضل أن الرموز تضيف متعة وشعوراً لكن لا تستخدم الكثير منها.',
 },
 },

'u6-p1': {
 lessonId: 'u6-p1',
 hookQuestionAr: 'ما الخطوات الخمس لتحويل الجملة الخبرية إلى كلام غير مباشر، ومتى يظل الزمن ثابتاً دون تغيير ؟',
 hookQuestionEn: 'What are the 5 steps and 3 exceptions of Reported Speech (Statements) step by step?',
 objectivesAr: [
'إتقان الخطوات الخمس لتحويل الجمل الخبرية إلى كلام منقول (أفعال القول، that، الضمائر، الأزمنة، والروابط الزمنية) خطوة بخطوة.',
'معرفة الحالات الثلاث التي لا تتغير فيها الأزمنة والتحويل العكسي + تطبيقات التحويل المحلولة.',
'التمييز بين mental و emotional، وحروف الجر مع agree، والفرق بين argument و debate.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Reported Speech (Indirect Statements)',
 ruleTitleAr: 'الكلام غير المباشر / المنقول — الجمل الخبرية',
 usageEn: [
'Direct speech: the exact words spoken by the speaker inside quotation marks ("...").',
'Indirect (Reported) speech: reporting what someone said without quotation marks.',
 ],
 usageArSummary:
'الكلام المباشر هو ما يصدر عن المتحدث نفسه ويوضع داخل علامتي تنصيص، أما الكلام غير المباشر فهو الكلام المنقول للغير ولا يوضع بين علامتي تنصيص، ويتم تحويله عبر 5 خطوات دقيقة.',
 diagramType: 'reported-shift',
 diagramData: {
 direct: 'Ahmed said to me, "I can solve the problem."',
 indirect: 'Ahmed told me that he could solve the problem.',
 shifts: ['said to -> told', 'remove "..." + that', 'I -> he', 'can -> could'],
 },
 structures: [
 {
 labelEn: 'Step 1: Reporting Verbs Conversion',
 formulaEn: 'say / says -> say / says | said -> said | say to / says to + obj -> tell / tells + obj | said to + obj -> told + obj',
 structureAr: 'الخطوة (1): نحول فعل القول؛ يبقى say/says/said كما هو إذا لم يكن بعده مفعول، بينما يتحول say to/said to المتبوع بمفعول إلى tell/tells/told + مفعول.',
 exampleEn: 'Kamal said to his mother, "I’m ill." -> Kamal told his mother that he was ill.',
 exampleAr: 'قال كمال لوالدته: «أنا مريض» ← أخبر كمال والدته أنه كان مريضاً.',
 },
 {
 labelEn: 'Step 2 & 3: Remove Quotes, Link with (that), and Shift Pronouns',
 formulaEn: 'Remove "..." + link with (that) | I -> he/she | you -> I/we | we -> they | me -> him/her | my -> his/her | our -> their',
 structureAr: 'الخطوة (2 و3): نحذف علامتي التنصيص ونربط بـ that (ويمكن الاستغناء عنها)، ثم نغيّر ضمائر الفاعل والمفعول وصفات الملكية حسب المتكلم والمخاطَب.',
 exampleEn: 'Mustafa said to Ayman, "You could use my tablet." -> Mustafa told Ayman that he could use his tablet.',
 exampleAr: 'قال مصطفى لأيمن: «يمكنك استخدام جهازي اللوحي» ← أخبره أنه يستطيع استخدام جهازه.',
 },
 {
 labelEn: 'Step 4: Tense Backshift Rules',
 formulaEn: 'Present simple -> Past simple | Present continuous -> Past continuous | Present perfect -> Past perfect | Past simple -> Past simple / Past perfect | shall/will/can/may/must -> should/would/could/might/had to',
 structureAr: 'الخطوة (4): عند وجود فعل قول ماضٍ (said/told)، نرجع بزمن الجملة خطوة للخلف (من مضارع إلى ماضٍ، ومن ماضٍ بسيط إلى ماضٍ تام، والأفعال الناقصة لماضيها).',
 exampleEn: 'Ali said to me, "I have found my pen." -> Ali told me that he had found his pen.',
 exampleAr: 'قال لي علي: «وجدت قلمي» ← أخبرني علي أنه وجد قلمه.',
 },
 {
 labelEn: 'Step 5: Time & Place Shifts',
 formulaEn: 'tomorrow -> the next (following) day | yesterday -> the day before | tonight -> that night | now -> then | today -> that day | last (...) -> the (...) before | ago -> before | this -> that | these -> those | here -> there',
 structureAr: 'الخطوة (5): نحوّل الروابط الزمنية وأسماء الإشارة من القريب إلى البعيد كما في الجدول المقابل.',
 exampleEn: 'Karim said to me, "We moved to a new house last week." -> Karim told me that they had moved to a new house the week before.',
 exampleAr: 'قال لي كريم: «انتقلنا لمنزل جديد الأسبوع الماضي» ← أخبرني أنهم انتقلوا الأسبوع السابق.',
 },
 ],
 specialNotes: [
 {
 ruleEn: 'Exception 1: Reporting Verb is Present (says / says to)',
 structureAr: 'لا تتغير الأزمنة والروابط الزمنية في غير المباشر إذا كان فعل القول مضارعاً (says / says to / tells).',
 exampleEn: 'Noura says, "We live in Luxor." -> Noura says that they live in Luxor.',
 },
 {
 ruleEn: 'Exception 2: Just Spoken (has just said / said just now)',
 structureAr: 'لا يتغير الزمن إذا قيل الكلام منذ فترة قصيرة جداً (has just said / said just now).',
 exampleEn: 'Tamer has just said, "I am visiting my uncle tomorrow." -> Tamer has just said that he is visiting his uncle tomorrow.',
 },
 {
 ruleEn: 'Exception 3: Scientific Facts',
 structureAr: 'لا يتغير الزمن إذا كانت الجملة تعبّر عن حقيقة علمية ثابتة.',
 exampleEn: 'Mr. Reda said, "The Earth goes around the sun." -> Mr. Reda said that the Earth goes around the sun.',
 },
 {
 ruleEn: 'Reverse Conversion (Indirect -> Direct)',
 structureAr: 'عند التحويل من غير المباشر إلى المباشر نعكس الخطوات: نضع علامتي التنصيص، ونحوّل had bought إلى bought وthe week before إلى last week.',
 exampleEn: 'Hadeer said that she had bought a new dress the week before. -> Hadeer said, "I bought a new dress last week."',
 },
 ],
 gotItExamples: [
 {
 promptEn: 'Ahmed said to me, "I can solve the problem."',
 bracketWordEn: '(told)',
 answerEn: 'Ahmed told me that he could solve the problem.',
 howAr: '1) نحول said to إلى told، 2) نحذف التنصيص ونربط بـ that، 3) نحول I إلى he، 4) نحول can إلى could.',
 },
 {
 promptEn: 'Mariam said, "I’m feeling tired now."',
 bracketWordEn: '(was feeling)',
 answerEn: 'Mariam said that she was feeling tired then.',
 howAr: '1) لا يوجد مخاطَب فتبقى said، 2) نربط بـ that، 3) نحول I إلى she، 4) نحول am feeling إلى was feeling، 5) نحول now إلى then.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'mental vs. emotional',
 ruleEn: 'mental = related to the mind/thinking | emotional = related to feelings',
 structureAr: 'mental تعني عقلي أو ذهني (متعلق بالتفكير والعقل)، بينما emotional تعني عاطفي (متعلق بالمشاعر).',
 examplesEn: [
'Solving puzzles is good for mental skills.',
'The movie was very emotional and made everyone cry.',
 ],
 },
 {
 titleEn: 'agree to / agree on / agree with',
 ruleEn: 'agree to + inf. | agree on + noun (topic/thing) | agree with + person / opinion',
 structureAr: 'agree to يوافق على فعل شيء (+ مصدر)، agree on يتفق على موضوع أو شيء (+ اسم)، agree with يتفق مع شخص أو ضمير.',
 examplesEn: [
'I agree to help you with your project.',
'The students agreed on the best topic for the project.',
'I agree with you that bullying is a major problem.',
 ],
 },
 {
 titleEn: 'argument / debate & Irregular Verbs',
 ruleEn: 'argument = disagreement/quarrel | debate = organized discussion | stick/stuck/stuck | speak/spoke/spoken',
 structureAr: 'argument جدال أو خلاف شخصي، بينما debate مناظرة منظمة ومهذبة حول قضية. الأفعال الشاذة: stick -> stuck -> stuck و speak -> spoke -> spoken.',
 examplesEn: [
'The two friends had an argument about which movie to watch.',
'There was a class debate about online learning.',
 ],
 },
 ],
 prefixesSuffixes: [
 { word: 'vary (v)', affix: '-ous', functionAr: 'تحوّل إلى صفة', newWord: 'various (adj)', meaningAr: 'متنوع / مختلف' },
 { word: 'critical / emotional (adj)', affix: '-ly', functionAr: 'تحوّل إلى حال', newWord: 'critically / emotionally (adv)', meaningAr: 'بطريقة نقدية / عاطفياً' },
 { word: 'imagine (v)', affix: '-ation', functionAr: 'تحوّل إلى اسم', newWord: 'imagination (n)', meaningAr: 'خيال' },
 { word: 'argue (v)', affix: '-ment', functionAr: 'تحوّل إلى اسم', newWord: 'argument (n)', meaningAr: 'مناظرة / نقاش' },
 { word: 'enjoy / value (v)', affix: '-able', functionAr: 'تحوّل إلى صفة', newWord: 'enjoyable / valuable (adj)', meaningAr: 'ممتع / ذو قيمة' },
 { word: 'memory (n)', affix: '-ize', functionAr: 'تحوّل إلى فعل', newWord: 'memorize (v)', meaningAr: 'يتذكر / يحفظ' },
 ],
 speakingQA: {
 titleEn: 'SKILLS: Talking about the importance of reading stories',
 titleAr: 'مهارة المحادثة: الحديث عن أهمية قراءة القصص',
 pairs: [
 { qEn: 'Is reading stories useful?', aEn: 'Yes, it is useful.', arSummary: 'هل قراءة القصص مفيدة؟ — نعم، إنها مفيدة.' },
 { qEn: 'Why is reading stories important?', aEn: 'Because it helps us grow emotionally and mentally.', arSummary: 'لماذا هي مهمة؟ — لأنها تساعدنا على النمو العاطفي والعقلي.' },
 { qEn: 'How is reading stories important in learning?', aEn: 'It increases your vocabulary and improves your grammar and reading skills.', arSummary: 'كيف تفيد في التعلم؟ — تزيد المفردات وتحسّن القواعد ومهارات القراءة.' },
 { qEn: 'How is reading stories important in developing imagination and personality?', aEn: 'Reading stories can spark your imagination and it helps you develop empathy towards others.', arSummary: 'كيف تنمي الخيال والشخصية؟ — تشعل الخيال وتنمّي التعاطف تجاه الآخرين.' },
 ],
 },
 dissectionTitleAr: 'تفكيك جملة منقولة مع جميع التحويلات',
 sentenceDissection: [
 { text: 'Samy told me', roleEn: 'Reporting Verb + Object', roleAr: 'فعل القول told + المخاطَب', color: '#4f46e5', tipAr: 'اُستخدمت told لوجود مفعول me' },
 { text: 'that', roleEn: 'Connector (Optional)', roleAr: 'أداة الربط', color: '#64748b', tipAr: 'حُذفت علامات التنصيص وربطنا بـ that' },
 { text: 'he', roleEn: 'Shifted Pronoun (I -> he)', roleAr: 'ضمير محوّل يعود على سامي', color: '#0d9488', tipAr: 'تبع المتكلم المذكر' },
 { text: 'would read', roleEn: 'Backshifted Modal (will -> would)', roleAr: 'فعل راجع خطوة للماضي', color: '#d97706', tipAr: 'will تحولت إلى would لأن told ماضٍ' },
 { text: 'that story', roleEn: 'Shifted Demonstrative (this -> that)', roleAr: 'اسم إشارة محوّل', color: '#059669', tipAr: 'this تحولت إلى that' },
 { text: 'the next day.', roleEn: 'Shifted Time (tomorrow -> the next day)', roleAr: 'ظرف زمان محوّل', color: '#e11d48', tipAr: 'tomorrow تحولت إلى the next day' },
 ],
 mnemonicTitleAr: 'شفرة الكلام المنقول: «رجّع خطوة للماضي، وابعد القريب» + 3 استثناءات',
 mnemonicAr:
'«told» تحضن المفعول و«said» تمشي وحدها. ولا تُغيّر الزمن أبداً في 3 حالات: فعل القول مضارع (says)، أو قيل تواً (has just said)، أو حقيقة علمية (The Earth goes around the sun)!',
 examBlueprintAr: [
 { questionType: 'اختيار said أم told', tipAr: 'انظر بعد الفراغ: اسم/ضمير مخاطَب (me/Rody) ← told. that أو فاعل الجملة مباشرة ← said.' },
 { questionType: 'حروف الجر مع agree', tipAr: 'agree to + فعل، agree on + شيء (a name)، agree with + شخص.' },
 ],
 miniCheck: {
 questionEn: 'Nadia ________ me that she was writing a short story then.',
 questionAr: 'نادية ________ أن تكتب قصة قصيرة حينها.',
 options: ['said', 'told', 'said to', 'says'],
 correctIndex: 1,
 explanationAr: 'لوجود المفعول (me) مباشرة بعد الفراغ وبدون حرف الجر to، نختار told.',
 },
 },

'u6-p2': {
 lessonId: 'u6-p2',
 hookQuestionAr: 'ما أنواع القصص السبعة وعناصر القصة الأربعة وما هي سمات كل نوع، وكيف اختُتمت القصة المقررة؟',
 hookQuestionEn: 'How are the 7 Types of Stories and 4 Story Elements classified and defined?',
 objectivesAr: [
'إتقان تعريفات أنواع القصص السبعة (comic, historical, adventure, folk, fables, fiction, non-fiction) بدقة ووضوح.',
'إتقان عناصر القصة الأربعة (setting, characters, conflict, solution) وأسئلة تطبيقات عناصر القصة.',
'فهم التعبيرات السردية (based on, make up, once upon a time, fall down, run away) وختام قصة الحديقة.',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: '1. Types of Stories & 2. Story Elements (Classification Rules)',
 ruleTitleAr: 'أنواع القصص السبعة وعناصر القصة الأربعة',
 usageEn: [
'1. Types of Stories: comic stories, historical stories, adventure stories, folk stories, fables, fiction, non-fiction.',
'2. Story Elements: setting, characters, conflict, solution.',
 ],
 usageArSummary:
'تُصنَّف القصص إلى سبعة أنواع حسب موضوعها وأسلوبها، ويحدّد أربعة عناصر أساسية تبني أي قصة متماسكة.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. Setting (where and when)',
'2. Characters (people or animals)',
'3. Conflict (the problem)',
'4. Solution (how the problem ends)',
 ],
 },
 structures: [
 {
 labelEn: 'Types 1–4: Comic, Historical, Adventure, Folk',
 formulaEn: 'comic = funny stories full of humor | historical = based on real events from the past | adventure = exciting journeys by brave characters | folk = traditional stories with lessons',
 structureAr: 'القصص الكوميدية مليئة بالفكاهة؛ التاريخية مبنية على أحداث حقيقية من الماضي؛ المغامرات رحلات مثيرة لشخصيات شجاعة؛ الشعبية قصص تقليدية ذات عبرة.',
 exampleEn: 'An adventure story is an exciting journey by brave characters.',
 exampleAr: 'قصة المغامرة هي رحلة مثيرة يقوم بها أبطال شجعان.',
 },
 {
 labelEn: 'Types 5–7: Fables, Fiction, Non-fiction',
 formulaEn: 'fables = short tales that teach a moral, often with talking animals | fiction = stories made up with imaginary characters | non-fiction = true stories based on real events and characters',
 structureAr: 'الحكايات الرمزية (fables) قصص قصيرة تعلّم درساً أخلاقياً وغالباً على ألسنة حيوانات متكلمة؛ الخيالية (fiction) مؤلفة بشخصيات خيالية؛ الواقعية (non-fiction) قصص حقيقية.',
 exampleEn: 'Fables are often short tales that teach a moral using talking animals.',
 exampleAr: 'الحكايات الرمزية غالباً قصص قصيرة تعلّم مغزى أخلاقياً باستخدام حيوانات متكلمة.',
 },
 {
 labelEn: 'The 4 Story Elements',
 formulaEn: 'setting = where & when the story happens | characters = people or animals in a story | conflict = the problem | solution = how the problem ends',
 structureAr: 'الإطار (setting) يحدد المكان والزمان؛ الشخصيات (characters) بشر أو حيوانات؛ الصراع (conflict) هو المشكلة؛ الحل (solution) هو كيفية انتهاء المشكلة.',
 exampleEn: 'The setting of a story means where and when it happens.',
 exampleAr: 'إطار القصة (setting) يعني مكان وزمان حدوثها.',
 },
 ],
 },
 ],
 languageNotes: [
 {
 titleEn: 'Story Vocabulary & Expressions',
 ruleEn: 'based on | make up | once upon a time | fall down | run away | a piece of',
 structureAr: 'based on مبني/قائم على | make up يؤلف/يخترع | once upon a time يُحكى أن (في قديم الزمان) | fall down يقع/يسقط | run away يهرب.',
 examplesEn: [
'The museum has many historical objects from ancient Egypt.',
'This story is based on real events.',
 ],
 },
 ],
 dissectionTitleAr: 'تفكيك جملة تحليلية لعناصر القصة',
 sentenceDissection: [
 { text: 'Because the plot', roleEn: 'Story Events', roleAr: 'الحبكة وتسلسل الأحداث', color: '#4f46e5', tipAr: 'Plot = خط سير الأحداث' },
 { text: 'had a clear conflict, ', roleEn: 'Element: Conflict', roleAr: 'الصراع/المشكلة', color: '#e11d48', tipAr: 'Conflict = المشكلة في القصة' },
 { text: 'the brave characters', roleEn: 'Element: Characters', roleAr: 'الشخصيات الشجاعة', color: '#0d9488', tipAr: 'Characters = الأشخاص أو الحيوانات' },
 { text: 'found a smart solution', roleEn: 'Element: Solution', roleAr: 'الحل الختامي', color: '#d97706', tipAr: 'Solution = كيف تنتهي المشكلة' },
 { text: 'in that faraway setting.', roleEn: 'Element: Setting', roleAr: 'المكان والزمان', color: '#059669', tipAr: 'Setting = أين ومتى تقع القصة' },
 ],
 mnemonicTitleAr: 'شفرة أنواع القصص والعناصر',
 mnemonicAr:
'حيوانات تتكلم + درس أخلاقي = Fable | رحلة شجاعة = Adventure | فكاهة = Comic | حقيقية = Non-fiction. والعناصر الأربعة: Setting (زمان/مكان) + Characters + Conflict + Solution.',
 examBlueprintAr: [
 { questionType: 'تطبيقات عناصر القصة', tipAr: 'أسئلة التعريفات المباشرة: exciting journey = adventure | where and when = setting | talking animals = fables.' },
 { questionType: 'خاتمة قصة الحديقة (Ch. 6)', tipAr: 'أصبحت حديقة المدرسة رمزاً للوحدة والفخر بعد تعاون الطلاب وتحملهم المسؤولية.' },
 ],
 miniCheck: {
 questionEn: 'Fables are often short tales that teach a moral using ________.',
 questionAr: 'الحكايات الرمزية (Fables) غالباً قصص قصيرة تعلّم مغزى أخلاقياً باستخدام ________.',
 options: ['real historical figures', 'talking animals', 'funny jokes', 'scientific facts'],
 correctIndex: 1,
 explanationAr: 'تتميز الحكايات الرمزية (fables) بأنها قصص قصيرة تعلّم درساً أخلاقياً وغالباً ما تستخدم الحيوانات المتكلمة (talking animals).',
 },
 },

'u6-p3': {
 lessonId: 'u6-p3',
 hookQuestionAr: 'كيف تكتب قصة متكاملة الأركان الأربعة بأركانها الأربعة المتماسكة؟',
 hookQuestionEn: 'What are the 4 components of writing a Story for an effective piece of writing?',
 objectivesAr: [
'إتقان القواعد السردية لكتابة القصة (Past Simple + Past Continuous + ظروف التسلسل first, then, after that, finally).',
'حفظ مكونات القصة الأربعة بإتقان (Title, Beginning, Middle, End).',
'دراسة النموذج التطبيقي بعنوان «The Frog and the Shiny Leaf Trap».',
 ],
 bookGrammarRules: [
 {
 ruleTitleEn: 'Story Writing Grammar & Sequence Structure',
 ruleTitleAr: 'قواعد السرد القصصي وترابط الأزمنة باللغة الإنجليزية',
 usageEn: [
'1. Title: choose an exciting title for the story.',
'2. Beginning: introduce the characters, setting (where & when) using Past Simple / Past Continuous ("Once upon a time...").',
'3. Middle: present the problem (conflict) and exciting events using sequence words (first, then, after that, finally).',
'4. End: show how the character solves the problem and state the moral lesson learned.',
 ],
 usageArSummary:
'تعتمد كتابة القصة على أربعة مكونات: عنوان شيّق، وبداية تعرف الشخصيات والزمان والمكان (Once upon a time)، ومنتصف يعرض المشكلة والأحداث باستخدام كلمات التسلسل، وخاتمة تحل المشكلة وتقدم عبرة.',
 diagramType: 'sequence-steps',
 diagramData: {
 steps: [
'1. Title (عنوان شيّق)',
'2. Beginning (Once upon a time...)',
'3. Middle (Conflict + First, Then, Finally)',
'4. End (Solution + Moral Lesson)',
 ],
 },
 structures: [
 {
 labelEn: 'Beginning (Setting & Character Intro)',
 formulaEn: 'Once upon a time, + [character] + lived / was + [setting].',
 structureAr: 'نبدأ بعبارة افتتاحية كلاسيكية (Once upon a time,) ثم نعرّف الشخصية في الماضي البسيط ومكان عيشها.',
 exampleEn: 'Once upon a time, a small frog lived happily in a quiet pond.',
 exampleAr: 'ذات مرة، عاش ضفدع صغير بسعادة في بركة هادئة.',
 },
 {
 labelEn: 'Middle (Events & Sequence Words)',
 formulaEn: 'One day,... | First, + [Past Simple]. | Then, + [Past Simple]. | Finally, + [Past Simple].',
 structureAr: 'ننتقل للأحداث بـ One day ثم نرتب التصاعد والمشكلة بـ First و Then و Finally في زمن الماضي البسيط.',
 exampleEn: 'First, he found a shiny green leaf. Then, he saw his reflection. Finally, he realized his mistake.',
 exampleAr: 'أولاً، وجد ورقة خضراء لامعة. ثم رأى انعكاسه. وأخيراً أدرك خطأه.',
 },
 {
 labelEn: 'End (Resolution & Moral)',
 formulaEn: '[Character] + learned that + [moral lesson in Present/General truth].',
 structureAr: 'في الخاتمة نذكر الدرس الذي تعلّمته الشخصية؛ وغالباً تأتي الحكمة العامة في المضارع البسيط لأنها قاعدة عامة.',
 exampleEn: 'The frog learned that greed can lead to trouble and happiness comes from being satisfied.',
 exampleAr: 'تعلّم الضفدع أن الطمع قد يؤدي إلى المتاعب، وأن السعادة تأتي من الرضا.',
 },
 ],
 },
 ],
 writingCorner: {
 titleEn: 'A Story',
 titleAr: 'ورشة الكتابة: القصة القصيرة',
 definitionEn: 'A story has four main components: Title, Beginning, Middle, and End, connected with sequence words.',
 components: [
 { labelEn: '1. Title', labelAr: 'عنوان القصة', guideAr: 'اختر عنواناً شيقاً للقصة.' },
 { labelEn: '2. Beginning', labelAr: 'البداية', guideAr: 'مقدمة القصة، حيث يُعرّف الكاتب الشخصيات وزمان ومكان القصة.' },
 { labelEn: '3. Middle', labelAr: 'المنتصف', guideAr: 'يُبيّن الكاتب المشكلة والأحداث الشائقة مستخدماً: first, then, after that, finally.' },
 { labelEn: '4. End', labelAr: 'النهاية', guideAr: 'يحل الكاتب المشكلة ويعطي نهاية واضحة تنتهي بعبرة يتعلمها القارئ.' },
 ],
 modelTitleEn: 'The Frog and the Shiny Leaf Trap (Model Example)',
 modelTextEn:
'Title: The Frog and the Shiny Leaf Trap\nOnce upon a time, a small frog lived happily in a quiet pond. He loved singing every morning.\nOne day, he decided to jump out and explore a nearby garden. He felt excited about the new world. First, he found a shiny green leaf that looked like a bigger pond, so he sat proudly on it. Then, he saw his reflection in the water below and he thought it was another stronger frog with a better leaf. The frog felt greedy, so he tried to jump, but he slipped into the water. Finally, he realized his mistake and returned home.\nThe frog learned that greed can lead to trouble and happiness comes from being satisfied and appreciating what you already have.',
 modelSummaryAr:
'يتبع نموذج الضفدع والورقة اللامعة المقترح الأقسام الأربعة: العنوان، والبداية (Once upon a time)، والمنتصف (One day + First + Then + Finally)، والنهاية بالحكمة المستفادة.',
 },
 dissectionTitleAr: 'تفكيك الجملة الختامية من نموذج القصة القصيرة',
 sentenceDissection: [
 { text: 'The frog learned', roleEn: 'Subject + Past Simple', roleAr: 'الفاعل + فعل التعلم الماضي', color: '#0d9488', tipAr: 'تبدأ جملة المغزى في النهاية' },
 { text: 'that', roleEn: 'Noun Clause Link', roleAr: 'أداة الربط', color: '#64748b', tipAr: 'تُدخل الفكرة المستفادة' },
 { text: 'greed can lead to trouble', roleEn: 'Moral Clause 1 (Present Truth)', roleAr: 'العبرة الأولى (حقيقة عامة)', color: '#e11d48', tipAr: 'الحكمة العامة تأتي بالمضارع (can lead)' },
 { text: 'and happiness comes from', roleEn: 'Parallel Moral Clause 2', roleAr: 'العبرة الثانية', color: '#4f46e5', tipAr: 'comes مفرد لأن happiness اسم غير معدود' },
 { text: 'being satisfied.', roleEn: 'Preposition + Gerund', roleAr: 'حرف الجر from + اسم فعل', color: '#059669', tipAr: 'بعد حرف الجر from يأتي V-ing (being)' },
 ],
 mnemonicTitleAr: 'شفرة كتابة القصة : T - B - M - E',
 mnemonicAr:
'Title (عنوان شيق) ← Beginning (Once upon a time) ← Middle (First, Then, Finally + مشكلة) ← End (حلّ + عبرة أخلاقية).',
 examBlueprintAr: [
 { questionType: 'الاختيار على مكونات القصة', tipAr: 'الجزء الذي تُعرض فيه المشكلة والأحداث الشائقة باستخدام first, then, finally هو Middle.' },
 ],
 miniCheck: {
 questionEn: 'In which part of a story do you use "first, then, after that, finally" to show the problem and exciting events?',
 questionAr: 'في أي جزء من القصة تستخدم "first, then, after that, finally" لعرض المشكلة والأحداث الشائقة؟',
 options: ['Title', 'Beginning', 'Middle', 'Signature'],
 correctIndex: 2,
 explanationAr: 'في المنتصف (Middle) يُبيّن الكاتب المشكلة والأحداث الشائقة باستخدام كلمات التسلسل.',
 },
 },
};

export function getDetailedExplanation(lessonId: string): LessonDetailedExplanation {
 return DETAILED_EXPLANATIONS[lessonId] ?? DETAILED_EXPLANATIONS['u1-p1'];
}
