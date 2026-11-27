import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import {
  CurriculumId,
  DiscussionPost,
  TranslationMode,
  UserProgress,
  ViewRoute,
} from '../data/types';
import { DEFAULT_SPEECH_ACCENT, DEFAULT_SPEECH_RATE } from '../utils/speech';

const STORAGE_PROGRESS_KEY = 'eng_mastery_progress_v1';
const STORAGE_DISCUSSIONS_KEY = 'eng_mastery_discussions_v1';
const STORAGE_PREFS_KEY = 'eng_mastery_prefs_v1';

const todayStr = () => new Date().toISOString().slice(0, 10);

const defaultProgress: UserProgress = {
  completedLessons: [],
  worksheetScores: {},
  starredVocab: [],
  xp: 120,
  streakDays: 1,
  lastActiveDate: todayStr(),
  adaptiveStats: {
    totalAnswered: 0,
    correctCount: 0,
    byUnit: {},
  },
  verbalHighScore: 0,
  verbalCompletedCount: 0,
  bookmarkedExplanations: [],
  lessonNotes: {},
  completedMiniChecks: [],
};

interface AppContextValue {
  activeCurriculum: CurriculumId;
  setActiveCurriculum: (c: CurriculumId) => void;
  translationMode: TranslationMode;
  setTranslationMode: (m: TranslationMode) => void;
  speechRate: number;
  setSpeechRate: (r: number) => void;
  speechAccent: 'en-GB' | 'en-US';
  setSpeechAccent: (a: 'en-GB' | 'en-US') => void;
  route: ViewRoute;
  setRoute: (r: ViewRoute) => void;
  progress: UserProgress;
  toggleLessonComplete: (lessonId: string) => void;
  recordWorksheetScore: (lessonId: string, score: number, total: number) => void;
  toggleStarVocab: (vocabId: string) => void;
  recordAdaptiveAnswer: (unitId: string, isCorrect: boolean) => void;
  recordVerbalScore: (score: number) => void;
  toggleBookmarkExplanation: (lessonId: string) => void;
  saveLessonNote: (lessonId: string, note: string) => void;
  recordMiniCheckPass: (lessonId: string) => void;
  resetProgress: () => void;
  getLessonDiscussions: (lessonId: string, seeds: DiscussionPost[]) => DiscussionPost[];
  addDiscussionPost: (
    lessonId: string,
    seeds: DiscussionPost[],
    post: Omit<DiscussionPost, 'id' | 'timestamp' | 'likes' | 'replies'>
  ) => void;
  addDiscussionReply: (
    lessonId: string,
    seeds: DiscussionPost[],
    postId: string,
    author: string,
    role: 'student' | 'teacher',
    text: string
  ) => void;
  toggleLikePost: (lessonId: string, seeds: DiscussionPost[], postId: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeCurriculum, setActiveCurriculum] = useState<CurriculumId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PREFS_KEY);
      if (saved) return (JSON.parse(saved).activeCurriculum as CurriculumId) ?? 'egypt';
    } catch {
      /* ignore */
    }
    return 'egypt';
  });

  const [translationMode, setTranslationMode] = useState<TranslationMode>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PREFS_KEY);
      if (saved) return (JSON.parse(saved).translationMode as TranslationMode) ?? 'bilingual';
    } catch {
      /* ignore */
    }
    return 'bilingual';
  });

  const [speechRate, setSpeechRate] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PREFS_KEY);
      if (saved) {
        const parsedRate = Number(JSON.parse(saved).speechRate);
        if (Number.isFinite(parsedRate) && parsedRate >= 0.25 && parsedRate <= 1.5) {
          return parsedRate;
        }
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_SPEECH_RATE;
  });

  const [speechAccent, setSpeechAccent] = useState<'en-GB' | 'en-US'>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PREFS_KEY);
      if (saved) {
        const parsedAccent = JSON.parse(saved).speechAccent;
        if (parsedAccent === 'en-US' || parsedAccent === 'en-GB') {
          return parsedAccent;
        }
      }
    } catch {
      /* ignore */
    }
    return DEFAULT_SPEECH_ACCENT;
  });
  const [route, setRouteState] = useState<ViewRoute>({ page: 'home' });

  const setRoute = (nextRoute: ViewRoute) => {
    if (nextRoute.page === 'explanations' && nextRoute.curriculum) {
      setActiveCurriculum(nextRoute.curriculum);
    }
    setRouteState(nextRoute);
  };

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_PROGRESS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<UserProgress>;
        return {
          ...defaultProgress,
          ...parsed,
          adaptiveStats: {
            ...defaultProgress.adaptiveStats,
            ...(parsed.adaptiveStats ?? {}),
            byUnit: parsed.adaptiveStats?.byUnit ?? {},
          },
          bookmarkedExplanations: parsed.bookmarkedExplanations ?? [],
          lessonNotes: parsed.lessonNotes ?? {},
          completedMiniChecks: parsed.completedMiniChecks ?? [],
        };
      }
    } catch {
      /* ignore */
    }
    return defaultProgress;
  });

  const [customDiscussions, setCustomDiscussions] = useState<Record<string, DiscussionPost[]>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_DISCUSSIONS_KEY);
      if (raw) return JSON.parse(raw);
    } catch {
      /* ignore */
    }
    return {};
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeCurriculum);
    try {
      localStorage.setItem(
        STORAGE_PREFS_KEY,
        JSON.stringify({ activeCurriculum, translationMode, speechRate, speechAccent })
      );
    } catch {
      /* ignore */
    }
  }, [activeCurriculum, translationMode, speechRate, speechAccent]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PROGRESS_KEY, JSON.stringify(progress));
    } catch {
      /* ignore */
    }
  }, [progress]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_DISCUSSIONS_KEY, JSON.stringify(customDiscussions));
    } catch {
      /* ignore */
    }
  }, [customDiscussions]);

  const bumpActivity = (prev: UserProgress, addXp: number): Partial<UserProgress> => {
    const today = todayStr();
    const isNewDay = prev.lastActiveDate !== today;
    return {
      xp: prev.xp + addXp,
      lastActiveDate: today,
      streakDays: isNewDay ? prev.streakDays + 1 : prev.streakDays,
    };
  };

  const toggleLessonComplete = (lessonId: string) => {
    setProgress((prev) => {
      const exists = prev.completedLessons.includes(lessonId);
      const completedLessons = exists
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      return {
        ...prev,
        completedLessons,
        ...bumpActivity(prev, exists ? 0 : 40),
      };
    });
  };

  const recordWorksheetScore = (lessonId: string, score: number, total: number) => {
    setProgress((prev) => {
      const prevBest = prev.worksheetScores[lessonId]?.score ?? 0;
      const gained = score >= Math.ceil(total * 0.6) && prevBest < score ? 50 : 15;
      const completedLessons =
        score >= Math.ceil(total * 0.6) && !prev.completedLessons.includes(lessonId)
          ? [...prev.completedLessons, lessonId]
          : prev.completedLessons;
      return {
        ...prev,
        completedLessons,
        worksheetScores: {
          ...prev.worksheetScores,
          [lessonId]: {
            score: Math.max(prevBest, score),
            total,
            lastAttempt: new Date().toISOString(),
          },
        },
        ...bumpActivity(prev, gained),
      };
    });
  };

  const toggleStarVocab = (vocabId: string) => {
    setProgress((prev) => {
      const exists = prev.starredVocab.includes(vocabId);
      return {
        ...prev,
        starredVocab: exists
          ? prev.starredVocab.filter((v) => v !== vocabId)
          : [...prev.starredVocab, vocabId],
      };
    });
  };

  const recordAdaptiveAnswer = (unitId: string, isCorrect: boolean) => {
    setProgress((prev) => {
      const unitEntry = prev.adaptiveStats.byUnit[unitId] ?? { answered: 0, correct: 0 };
      return {
        ...prev,
        adaptiveStats: {
          totalAnswered: prev.adaptiveStats.totalAnswered + 1,
          correctCount: prev.adaptiveStats.correctCount + (isCorrect ? 1 : 0),
          byUnit: {
            ...prev.adaptiveStats.byUnit,
            [unitId]: {
              answered: unitEntry.answered + 1,
              correct: unitEntry.correct + (isCorrect ? 1 : 0),
            },
          },
        },
        ...bumpActivity(prev, isCorrect ? 15 : 5),
      };
    });
  };

  const recordVerbalScore = (score: number) => {
    setProgress((prev) => ({
      ...prev,
      verbalHighScore: Math.max(prev.verbalHighScore, score),
      verbalCompletedCount: prev.verbalCompletedCount + 1,
      ...bumpActivity(prev, 25),
    }));
  };

  const toggleBookmarkExplanation = (lessonId: string) => {
    setProgress((prev) => {
      const current = prev.bookmarkedExplanations ?? [];
      const exists = current.includes(lessonId);
      return {
        ...prev,
        bookmarkedExplanations: exists
          ? current.filter((id) => id !== lessonId)
          : [...current, lessonId],
      };
    });
  };

  const saveLessonNote = (lessonId: string, note: string) => {
    setProgress((prev) => ({
      ...prev,
      lessonNotes: {
        ...(prev.lessonNotes ?? {}),
        [lessonId]: note,
      },
    }));
  };

  const recordMiniCheckPass = (lessonId: string) => {
    setProgress((prev) => {
      const current = prev.completedMiniChecks ?? [];
      if (current.includes(lessonId)) return prev;
      return {
        ...prev,
        completedMiniChecks: [...current, lessonId],
        ...bumpActivity(prev, 15),
      };
    });
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  const getLessonDiscussions = (lessonId: string, seeds: DiscussionPost[]): DiscussionPost[] => {
    return customDiscussions[lessonId] ?? seeds;
  };

  const addDiscussionPost = (
    lessonId: string,
    seeds: DiscussionPost[],
    post: Omit<DiscussionPost, 'id' | 'timestamp' | 'likes' | 'replies'>
  ) => {
    const newPost: DiscussionPost = {
      ...post,
      id: `post-${Date.now()}`,
      timestamp: 'الآن',
      likes: 0,
      replies: [],
    };
    setCustomDiscussions((prev) => {
      const current = prev[lessonId] ?? seeds;
      return { ...prev, [lessonId]: [newPost, ...current] };
    });
    setProgress((prev) => ({ ...prev, ...bumpActivity(prev, 10) }));
  };

  const addDiscussionReply = (
    lessonId: string,
    seeds: DiscussionPost[],
    postId: string,
    author: string,
    role: 'student' | 'teacher',
    text: string
  ) => {
    setCustomDiscussions((prev) => {
      const current = prev[lessonId] ?? seeds;
      return {
        ...prev,
        [lessonId]: current.map((p) =>
          p.id === postId
            ? {
                ...p,
                replies: [
                  ...p.replies,
                  {
                    id: `rep-${Date.now()}`,
                    author,
                    role,
                    text,
                    timestamp: 'الآن',
                  },
                ],
              }
            : p
        ),
      };
    });
  };

  const toggleLikePost = (lessonId: string, seeds: DiscussionPost[], postId: string) => {
    setCustomDiscussions((prev) => {
      const current = prev[lessonId] ?? seeds;
      return {
        ...prev,
        [lessonId]: current.map((p) => (p.id === postId ? { ...p, likes: p.likes + 1 } : p)),
      };
    });
  };

  const value = useMemo<AppContextValue>(
    () => ({
      activeCurriculum,
      setActiveCurriculum,
      translationMode,
      setTranslationMode,
      speechRate,
      setSpeechRate,
      speechAccent,
      setSpeechAccent,
      route,
      setRoute,
      progress,
      toggleLessonComplete,
      recordWorksheetScore,
      toggleStarVocab,
      recordAdaptiveAnswer,
      recordVerbalScore,
      toggleBookmarkExplanation,
      saveLessonNote,
      recordMiniCheckPass,
      resetProgress,
      getLessonDiscussions,
      addDiscussionPost,
      addDiscussionReply,
      toggleLikePost,
    }),
    [activeCurriculum, translationMode, speechRate, speechAccent, route, progress, customDiscussions]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
