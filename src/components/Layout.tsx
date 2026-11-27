import React, { useState } from 'react';
import {
  BookOpen,
  Flame,
  GraduationCap,
  Languages,
  Menu,
  Presentation,
  Sparkles,
  Trophy,
  Volume2,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CURRICULA_META } from '../data/curricula';
import { CurriculumId, TranslationMode } from '../data/types';
import { SPEECH_RATE_OPTIONS, speakEnglish, stopSpeech } from '../utils/speech';
import { CurriculumTreeSidebar } from './CurriculumTreeSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
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
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testingAudio, setTestingAudio] = useState(false);
  const [audioWarning, setAudioWarning] = useState<string | null>(null);

  const handleTestAudio = () => {
    if (testingAudio) {
      stopSpeech();
      setTestingAudio(false);
      return;
    }
    setAudioWarning(null);
    setTestingAudio(true);
    speakEnglish('Welcome! Audio is working clearly.', {
      accent: speechAccent,
      rate: speechRate,
      onStart: () => setTestingAudio(true),
      onEnd: () => setTestingAudio(false),
      onError: (msg) => {
        setTestingAudio(false);
        setAudioWarning(msg);
      },
    });
  };

  const handleCurriculumSwitch = (id: CurriculumId) => {
    setActiveCurriculum(id);
    if (id === 'foundation') {
      setRoute({ page: 'foundation', tab: 'grammar' });
    } else if (id === 'saudi') {
      setRoute({ page: 'coming-soon', country: 'saudi-term1' });
    } else {
      setRoute({ page: 'home' });
    }
  };

  const transOptions: { id: TranslationMode; label: string }[] = [
    { id: 'bilingual', label: 'ثنائي اللغة' },
    { id: 'hover-click', label: 'ترجمة عند النقر' },
    { id: 'arabic-first', label: 'العربية أولاً' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <header className="no-print sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[var(--border-soft)] shadow-xs">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-5 py-2.5 flex flex-wrap items-center justify-between gap-2.5">
          {/* Right: Brand + Mobile Drawer Trigger */}
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-[var(--border-soft)] bg-white text-slate-700 hover:bg-slate-50 cursor-pointer"
              aria-label="فتح فهرس المناهج"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setRoute({ page: 'home' })}
              className="flex items-center gap-2.5 cursor-pointer text-right"
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-sm"
                style={{ background: 'var(--hero-gradient)' }}
              >
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                  منصة إتقان الإنجليزية
                </div>
                <div className="text-[11px] font-semibold text-slate-500">
                  {CURRICULA_META[activeCurriculum].paletteLabel}
                </div>
              </div>
            </button>
          </div>

          {/* Center: Multi-Curriculum Palette Switcher + Explanation Icon */}
          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl border border-slate-200">
              {(
                [
                  { id: 'foundation', label: 'التأسيس', icon: Sparkles },
                  { id: 'egypt', label: 'المصري 🇪🇬', icon: BookOpen },
                  { id: 'saudi', label: 'السعودي 🇸🇦', icon: GraduationCap },
                ] as const
              ).map((item) => {
                const Icon = item.icon;
                const isActive = activeCurriculum === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleCurriculumSwitch(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                      isActive
                        ? 'bg-[var(--brand-primary)] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setRoute({ page: 'explanations', curriculum: activeCurriculum })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold border transition cursor-pointer ${
                route.page === 'explanations'
                  ? 'bg-[var(--brand-primary)] text-white border-transparent shadow-xs'
                  : 'bg-[var(--brand-primary-soft)] text-[var(--brand-primary-dark)] border-[var(--border-soft)] hover:opacity-90'
              }`}
              title="استعراض الدروس بالشرح المفصل للمنهج النشط"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>الشرح المفصل</span>
            </button>
          </div>

          {/* Left: Instant Translation Toggle + Audio + Stats */}
          <div className="flex items-center flex-wrap gap-2">
            {/* Instant Translation Mode */}
            <div className="hidden sm:flex items-center gap-1 bg-[var(--surface-muted)] px-2 py-1 rounded-xl border border-[var(--border-soft)]">
              <Languages className="w-3.5 h-3.5 text-[var(--brand-primary-dark)] ml-1" />
              {transOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTranslationMode(opt.id)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                    translationMode === opt.id
                      ? 'bg-[var(--brand-primary)] text-white'
                      : 'text-slate-600 hover:bg-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Speech Controls */}
            <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-xl border border-slate-200 text-[11px] font-bold">
              <button
                type="button"
                onClick={handleTestAudio}
                className="p-0.5 rounded hover:bg-white transition cursor-pointer"
                aria-label="اختبار الصوت"
                title="اختبار الصوت والتأكد من عمل النطق"
              >
                <Volume2
                  className={`w-3.5 h-3.5 ${
                    testingAudio
                      ? 'text-[var(--brand-primary)] animate-pulse'
                      : 'text-slate-600 hover:text-[var(--brand-primary)]'
                  }`}
                />
              </button>
              <button
                type="button"
                onClick={() => setSpeechAccent(speechAccent === 'en-GB' ? 'en-US' : 'en-GB')}
                className="px-1.5 py-0.5 rounded bg-white text-slate-700 hover:text-[var(--brand-primary)] cursor-pointer"
                title="تبديل اللكنة الأمريكية (US) / البريطانية (UK)"
              >
                {speechAccent === 'en-GB' ? 'UK' : 'US'}
              </button>
              <select
                dir="ltr"
                aria-label="سرعة النطق"
                title="اختيار سرعة النطق (0.25x - 1.50x)"
                value={speechRate}
                onChange={(e) => setSpeechRate(Number(e.target.value))}
                className="px-1.5 py-0.5 rounded bg-white text-slate-700 hover:text-[var(--brand-primary)] cursor-pointer border-0 outline-none"
              >
                {SPEECH_RATE_OPTIONS.map((rate) => (
                  <option key={rate} value={rate}>
                    {rate.toFixed(2)}x
                  </option>
                ))}
              </select>
            </div>

            {/* XP & Streak Pill */}
            <button
              type="button"
              onClick={() => setRoute({ page: 'dashboard' })}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-extrabold hover:bg-amber-100 transition cursor-pointer"
            >
              <span className="flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5 text-amber-600" />
                {progress.xp} XP
              </span>
              <span className="flex items-center gap-0.5 text-orange-600">
                <Flame className="w-3.5 h-3.5" />
                {progress.streakDays}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Translation Mode Bar */}
        <div className="sm:hidden px-3 pb-2 flex items-center justify-center gap-1">
          {transOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setTranslationMode(opt.id)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                translationMode === opt.id
                  ? 'bg-[var(--brand-primary)] text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {audioWarning && (
          <div className="max-w-[1440px] mx-auto px-3 sm:px-5 pb-2">
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
              <span>{audioWarning}</span>
              <button
                type="button"
                onClick={() => setAudioWarning(null)}
                className="p-1 rounded-lg hover:bg-amber-100 cursor-pointer shrink-0"
                aria-label="إغلاق تنبيه الصوت"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content + Tree Sidebar */}
      <div className="flex-1 max-w-[1440px] w-full mx-auto flex">
        {/* Desktop Right Sidebar (RTL) */}
        <div className="no-print hidden lg:block w-80 shrink-0 border-l border-[var(--border-soft)] bg-white/50">
          <div className="sticky top-[68px] h-[calc(100vh-68px)]">
            <CurriculumTreeSidebar />
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="no-print fixed inset-0 z-50 lg:hidden flex">
            <div className="w-80 max-w-[85vw] bg-white h-full shadow-2xl flex flex-col">
              <div className="p-3 border-b border-slate-200 flex items-center justify-between">
                <span className="font-extrabold text-slate-800">فهرس المناهج والمسارات</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-slate-100 text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <CurriculumTreeSidebar onNavigateClose={() => setMobileMenuOpen(false)} />
              </div>
            </div>
            <div
              className="flex-1 bg-slate-900/40 backdrop-blur-xs"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}

        {/* Active Workspace */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
};
