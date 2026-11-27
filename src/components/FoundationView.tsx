import React, { useState } from 'react';
import { BookOpen, Brain, GitFork, Sparkles } from 'lucide-react';
import {
  FOUNDATION_CONCEPT_MAPS,
  FOUNDATION_GRAMMAR_TOPICS,
  SMART_LEARNING_METHODS,
} from '../data/foundation';
import { useApp } from '../context/AppContext';
import { FoundationTopicCard } from './FoundationTopicCard';
import { TranslatableText } from './TranslatableText';

interface FoundationViewProps {
  initialTab?: 'grammar' | 'smart-learning' | 'concept-maps';
}

export const FoundationView: React.FC<FoundationViewProps> = ({ initialTab = 'grammar' }) => {
  const { setRoute, setActiveCurriculum } = useApp();
  const [tab, setTab] = useState<'grammar' | 'smart-learning' | 'concept-maps'>(initialTab);
  const [selectedTopicId, setSelectedTopicId] = useState(FOUNDATION_GRAMMAR_TOPICS[0].id);
  const [selectedMapId, setSelectedMapId] = useState(FOUNDATION_CONCEPT_MAPS[0].id);
  const [selectedNodeId, setSelectedNodeId] = useState<string>(
    FOUNDATION_CONCEPT_MAPS[0].nodes[0].id
  );

  React.useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  const activeTopic =
    FOUNDATION_GRAMMAR_TOPICS.find((t) => t.id === selectedTopicId) ??
    FOUNDATION_GRAMMAR_TOPICS[0];

  const activeMap =
    FOUNDATION_CONCEPT_MAPS.find((m) => m.id === selectedMapId) ?? FOUNDATION_CONCEPT_MAPS[0];
  const activeNode =
    activeMap.nodes.find((n) => n.id === selectedNodeId) ?? activeMap.nodes[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Banner */}
      <div
        className="rounded-3xl p-6 sm:p-8 text-white shadow-lg"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              مسار التأسيس الذكي — Let’s Remember (10 محاور أساسية)
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">قسم التأسيس الشامل للغة الإنجليزية</h1>
            <p className="text-white/90 text-sm max-w-2xl">
              ابدأ رحلتك بتبسيط الأزمنة السبعة ومحاور التأسيس العشرة، ومهارات المحادثة والكتابة، مع طرق التعلم
              الذكي وخرائط المفاهيم التفاعلية والترجمة الفورية.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setActiveCurriculum('egypt');
              setRoute({ page: 'lesson', unitId: 'unit-1', lessonId: 'u1-p1' });
            }}
            className="px-4 py-2.5 rounded-2xl bg-white text-violet-900 font-extrabold text-sm shadow hover:scale-[1.02] transition cursor-pointer"
          >
            ابدأ الوحدة الأولى الآن ←
          </button>
        </div>
      </div>

      {/* 3 Clean Tabs */}
      <div className="flex flex-wrap gap-2 bg-white p-2 rounded-2xl border border-[var(--border-soft)] shadow-xs">
        {[
          { id: 'grammar' as const, label: 'قواعد اللغة المبسطة (10 محاور)', icon: BookOpen },
          { id: 'smart-learning' as const, label: 'طرق التعلم الذكي', icon: Brain },
          { id: 'concept-maps' as const, label: 'خرائط المفاهيم التفاعلية', icon: GitFork },
        ].map((item) => {
          const Icon = item.icon;
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold transition cursor-pointer ${
                active
                  ? 'bg-[var(--brand-primary)] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-[var(--surface-muted)]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Foundation Grammar */}
      {tab === 'grammar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Topic Tree Selector */}
          <div className="lg:col-span-4 space-y-2">
            {FOUNDATION_GRAMMAR_TOPICS.map((topic, idx) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => setSelectedTopicId(topic.id)}
                className={`w-full text-right p-3.5 rounded-2xl border transition cursor-pointer ${
                  selectedTopicId === topic.id
                    ? 'bg-[var(--brand-primary)] text-white border-transparent shadow-md'
                    : 'bg-white border-[var(--border-soft)] hover:bg-[var(--surface-muted)] text-slate-800'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold opacity-80">محور #{idx + 1}</span>
                </div>
                <div className="font-bold text-sm mt-0.5">{topic.titleAr}</div>
                <div dir="ltr" className="font-en text-xs opacity-80 text-left mt-0.5">
                  {topic.titleEn}
                </div>
              </button>
            ))}
          </div>

          {/* Active Topic Detail (Zero-Duplication Shared Component) */}
          <div className="lg:col-span-8">
            <FoundationTopicCard topic={activeTopic} />
          </div>
        </div>
      )}

      {/* Tab 2: Smart Learning Methods */}
      {tab === 'smart-learning' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SMART_LEARNING_METHODS.map((method) => (
            <div
              key={method.id}
              className="bg-white rounded-3xl border border-[var(--border-soft)] p-6 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-extrabold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: method.color }}
                  >
                    {method.badge}
                  </span>
                  <span dir="ltr" className="font-en text-xs font-bold text-slate-400">
                    {method.titleEn}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900">{method.titleAr}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{method.howItWorksAr}</p>
                <ul className="space-y-2 pt-1">
                  {method.stepsAr.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span
                        className="w-5 h-5 rounded-full text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: method.color }}
                      >
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-700">
                🔗 التطبيق في المنصة: {method.applyHereAr}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Interactive Concept Maps */}
      {tab === 'concept-maps' && (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {FOUNDATION_CONCEPT_MAPS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  setSelectedMapId(m.id);
                  setSelectedNodeId(m.nodes[0].id);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition cursor-pointer ${
                  selectedMapId === m.id
                    ? 'bg-[var(--brand-primary)] text-white border-transparent'
                    : 'bg-white border-[var(--border-soft)] text-slate-700 hover:bg-slate-50'
                }`}
              >
                {m.titleAr}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl border border-[var(--border-soft)] p-5 sm:p-6 shadow-xs space-y-5">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900">{activeMap.titleAr}</h2>
              <p className="text-xs sm:text-sm text-slate-500">{activeMap.descriptionAr}</p>
            </div>

            {/* Interactive Mind-Map Tree */}
            <div className="flex flex-col items-center space-y-5 bg-slate-50/80 rounded-2xl p-5 border border-slate-200/70">
              {/* Root Node */}
              {activeMap.nodes
                .filter((n) => n.role === 'root')
                .map((root) => (
                  <button
                    key={root.id}
                    type="button"
                    onClick={() => setSelectedNodeId(root.id)}
                    className={`px-6 py-3 rounded-2xl text-white font-extrabold shadow-md transition transform hover:scale-105 cursor-pointer ${
                      selectedNodeId === root.id ? 'ring-4 ring-violet-300' : ''
                    }`}
                    style={{ backgroundColor: root.color }}
                  >
                    <div className="text-sm">{root.labelAr}</div>
                    <div dir="ltr" className="font-en text-xs opacity-90">
                      {root.labelEn}
                    </div>
                  </button>
                ))}

              <div className="w-0.5 h-4 bg-slate-300" />

              {/* Branch Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
                {activeMap.nodes
                  .filter((n) => n.role !== 'root')
                  .map((node) => {
                    const isSel = selectedNodeId === node.id;
                    return (
                      <button
                        key={node.id}
                        type="button"
                        onClick={() => setSelectedNodeId(node.id)}
                        className={`p-3.5 rounded-2xl text-right bg-white border-2 transition cursor-pointer shadow-xs ${
                          isSel ? 'scale-[1.02] shadow-md' : 'hover:shadow'
                        }`}
                        style={{
                          borderColor: isSel ? node.color : '#e2e8f0',
                        }}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className="w-3 h-3 rounded-full shrink-0"
                            style={{ backgroundColor: node.color }}
                          />
                          <span dir="ltr" className="font-en text-xs font-bold text-slate-500">
                            {node.labelEn}
                          </span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-900 mt-1.5">
                          {node.labelAr}
                        </div>
                        {node.formula && (
                          <div
                            dir="ltr"
                            className="font-en text-[11px] font-semibold text-slate-600 mt-1 bg-slate-50 rounded-lg px-2 py-1 text-left"
                          >
                            {node.formula}
                          </div>
                        )}
                      </button>
                    );
                  })}
              </div>
            </div>

            {/* Selected Node Spotlight */}
            <div
              className="rounded-2xl p-4 sm:p-5 border-2 bg-white space-y-3"
              style={{ borderColor: activeNode.color }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <span className="text-xs font-bold text-slate-500">تفاصيل العقدة المختارة</span>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {activeNode.labelAr} — <span className="font-en">{activeNode.labelEn}</span>
                  </h3>
                </div>
                {activeNode.formula && (
                  <span
                    dir="ltr"
                    className="font-en text-xs font-extrabold px-3 py-1.5 rounded-xl text-white"
                    style={{ backgroundColor: activeNode.color }}
                  >
                    {activeNode.formula}
                  </span>
                )}
              </div>
              {activeNode.exampleEn && activeNode.exampleAr && (
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                  <TranslatableText en={activeNode.exampleEn} ar={activeNode.exampleAr} withAudio />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
