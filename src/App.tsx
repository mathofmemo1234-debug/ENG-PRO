import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { AdaptiveAssessmentView } from './components/AdaptiveAssessmentView';
import { ComingSoonCurriculumView } from './components/ComingSoonCurriculumView';
import { CumulativeGrammarMap } from './components/CumulativeGrammarMap';
import { DetailedExplanationsView } from './components/DetailedExplanationsView';
import { FoundationView } from './components/FoundationView';
import { InteractiveDictionary } from './components/InteractiveDictionary';
import { Layout } from './components/Layout';
import { LessonWorkspace } from './components/LessonWorkspace';
import { ProgressDashboard } from './components/ProgressDashboard';
import { TreeOverviewHome } from './components/TreeOverviewHome';
import { UnitSummaryView } from './components/UnitSummaryView';
import { VerbalChallengeCorner } from './components/VerbalChallengeCorner';

const ActiveRouteView: React.FC = () => {
  const { route } = useApp();

  switch (route.page) {
    case 'home':
      return <TreeOverviewHome />;
    case 'foundation':
      return <FoundationView initialTab={route.tab} />;
    case 'lesson':
      return (
        <LessonWorkspace
          unitId={route.unitId}
          lessonId={route.lessonId}
          initialTab={route.tab}
        />
      );
    case 'explanations':
      return (
        <DetailedExplanationsView
          initialCurriculum={route.curriculum}
          initialUnitId={route.unitId}
          initialLessonId={route.lessonId}
        />
      );
    case 'unit-summary':
      return <UnitSummaryView unitId={route.unitId} />;
    case 'cumulative-map':
      return <CumulativeGrammarMap />;
    case 'adaptive':
      return <AdaptiveAssessmentView />;
    case 'dashboard':
      return <ProgressDashboard />;
    case 'dictionary':
      return <InteractiveDictionary />;
    case 'verbal-challenge':
      return <VerbalChallengeCorner />;
    case 'coming-soon':
      return <ComingSoonCurriculumView country={route.country} />;
    default:
      return <TreeOverviewHome />;
  }
};

export function App() {
  return (
    <AppProvider>
      <Layout>
        <ActiveRouteView />
      </Layout>
    </AppProvider>
  );
}

export default App;
