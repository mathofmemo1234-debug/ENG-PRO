export type CurriculumId = 'egypt' | 'saudi' | 'foundation';

export type TranslationMode = 'bilingual' | 'hover-click' | 'arabic-first';

export type ViewRoute =
  | { page: 'home' }
  | { page: 'foundation'; tab?: 'grammar' | 'smart-learning' | 'concept-maps' }
  | { page: 'lesson'; unitId: string; lessonId: string; tab?: 'explain' | 'vocab' | 'grammar' | 'worksheet' }
  | { page: 'explanations'; curriculum?: CurriculumId; unitId?: string; lessonId?: string }
  | { page: 'unit-summary'; unitId: string }
  | { page: 'cumulative-map' }
  | { page: 'adaptive' }
  | { page: 'dashboard' }
  | { page: 'dictionary' }
  | { page: 'verbal-challenge' }
  | { page: 'coming-soon'; country: 'egypt-term2' | 'saudi-term1' | 'saudi-term2' };

export interface VocabItem {
  id: string;
  word: string;
  pos: string;
  arabic: string;
  phonetic: string;
  category: 'key' | 'reading' | 'expression' | 'story';
  exampleEn: string;
  exampleAr: string;
  iconKey: string;
}

export interface SynonymAntonym {
  word: string;
  arabic: string;
  synonym: string;
  synonymAr: string;
  antonym: string;
  antonymAr: string;
}

export type DiagramType =
  | 'timeline'
  | 'active-passive'
  | 'conditional-chain'
  | 'modal-meter'
  | 'sequence-steps'
  | 'reported-shift'
  | 'tense-card'
  | 'sentence-blocks';

export interface GrammarExample {
  en: string;
  ar: string;
  highlight?: string;
}

export interface GrammarCommonMistake {
  wrong: string;
  right: string;
  whyAr: string;
}

export interface GrammarRuleBlock {
  titleEn: string;
  titleAr: string;
  explanationAr: string;
  explanationEn: string;
  formulaEn: string;
  formulaAr: string;
  diagramType: DiagramType;
  diagramData?: Record<string, string | string[]>;
  examples: GrammarExample[];
  examTipsAr: string[];
  commonMistakes?: GrammarCommonMistake[];
}

export interface ReadingStorySpotlight {
  titleEn: string;
  titleAr: string;
  badge: string;
  summaryAr: string;
  keyPoints: { en: string; ar: string }[];
  dialogOrWritingTemplate?: {
    titleAr: string;
    lines: { speaker?: string; en: string; ar: string }[];
  };
}

export interface McqQuestion {
  id: string;
  stemEn: string;
  stemAr: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanationAr: string;
  skill: 'vocab' | 'grammar' | 'reading';
  difficulty: 1 | 2 | 3;
}

export interface TrueFalseQuestion {
  id: string;
  statementEn: string;
  statementAr: string;
  answer: boolean;
  explanationAr: string;
  skill: 'vocab' | 'grammar' | 'reading';
  difficulty: 1 | 2 | 3;
}

export interface DiscussionReply {
  id: string;
  author: string;
  role: 'student' | 'teacher';
  text: string;
  timestamp: string;
}

export interface DiscussionPost {
  id: string;
  author: string;
  role: 'student' | 'teacher';
  tag: 'question' | 'tip';
  text: string;
  timestamp: string;
  likes: number;
  replies: DiscussionReply[];
}

export interface LessonModule {
  id: string;
  unitId: string;
  partNumber: 1 | 2 | 3;
  lessonsLabel: string;
  titleEn: string;
  titleAr: string;
  pagesRef?: string;
  vocab: VocabItem[];
  synonymsAntonyms: SynonymAntonym[];
  grammarBlocks: GrammarRuleBlock[];
  spotlight: ReadingStorySpotlight;
  worksheet: {
    mcq: McqQuestion[];
    trueFalse: TrueFalseQuestion[];
  };
  seedDiscussions: DiscussionPost[];
}

export interface UnitSummary {
  overviewAr: string;
  keyGrammarFormulas: { labelAr: string; formula: string; example: string }[];
  topVocab: { word: string; ar: string }[];
  storyChapterRecapAr: string;
  writingModel: {
    titleEn: string;
    titleAr: string;
    paragraphEn: string;
    paragraphAr: string;
  };
  examChecklistAr: string[];
}

export interface UnitData {
  id: string;
  number: number;
  titleEn: string;
  titleAr: string;
  pagesRef?: string;
  accentColor: string;
  iconName: string;
  learningOutcomes: {
    reading: string[];
    language: string[];
    writing: string[];
  };
  lessons: LessonModule[];
  summary: UnitSummary;
}

export interface SentenceDissectionPart {
  text: string;
  roleEn: string;
  roleAr: string;
  color: string;
  tipAr: string;
}

export interface GrammarStructureRow {
  labelEn: string;
  formulaEn: string;
  structureAr: string;
  exampleEn: string;
  exampleAr: string;
}

export interface GrammarKeywordRow {
  tokenEn: string;
  ruleEn: string;
  structureAr: string;
  exampleEn: string;
}

export interface BookGotItExample {
  promptEn: string;
  bracketWordEn: string;
  answerEn: string;
  howAr: string;
}

export interface BookGrammarRule {
  ruleTitleEn: string;
  ruleTitleAr: string;
  usageEn: string[];
  usageArSummary: string;
  structures: GrammarStructureRow[];
  keywords?: GrammarKeywordRow[];
  specialNotes?: { ruleEn: string; structureAr: string; exampleEn: string }[];
  gotItExamples?: BookGotItExample[];
  diagramType?: DiagramType;
  diagramData?: Record<string, string | string[]>;
}

export interface BookLanguageNote {
  titleEn: string;
  ruleEn: string;
  structureAr: string;
  examplesEn: string[];
}

export interface PrefixSuffixRow {
  word: string;
  affix: string;
  functionAr: string;
  newWord: string;
  meaningAr: string;
}

export interface WritingCornerGuide {
  titleEn: string;
  titleAr: string;
  definitionEn: string;
  components: { labelEn: string; labelAr: string; guideAr: string }[];
  modelTitleEn: string;
  modelTextEn: string;
  modelSummaryAr: string;
}

export interface MiniCheckQuestion {
  questionEn: string;
  questionAr: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanationAr: string;
}

export interface LessonDetailedExplanation {
  lessonId: string;
  hookQuestionAr: string;
  hookQuestionEn: string;
  objectivesAr: string[];
  bookGrammarRules: BookGrammarRule[];
  languageNotes?: BookLanguageNote[];
  prefixesSuffixes?: PrefixSuffixRow[];
  speakingQA?: {
    titleEn: string;
    titleAr: string;
    pairs: { qEn: string; aEn: string; arSummary: string }[];
  };
  writingCorner?: WritingCornerGuide;
  dissectionTitleAr: string;
  sentenceDissection: SentenceDissectionPart[];
  mnemonicTitleAr: string;
  mnemonicAr: string;
  examBlueprintAr: { questionType: string; tipAr: string }[];
  miniCheck: MiniCheckQuestion;
}

export interface UserProgress {
  completedLessons: string[];
  worksheetScores: Record<string, { score: number; total: number; lastAttempt: string }>;
  starredVocab: string[];
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  adaptiveStats: {
    totalAnswered: number;
    correctCount: number;
    byUnit: Record<string, { answered: number; correct: number }>;
  };
  verbalHighScore: number;
  verbalCompletedCount: number;
  bookmarkedExplanations: string[];
  lessonNotes: Record<string, string>;
  completedMiniChecks: string[];
}
