
import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ExamView } from './components/ExamView';
import { ResultsView } from './components/ResultsView';
import { StudyGuideView } from './components/StudyGuideView';
import { ExamSession, ExamMode, Question } from './types';
import { INITIAL_QUESTIONS } from './constants';
import { STUDY_GUIDE_QUESTIONS } from './studyGuideConstants';

const QUESTIONS_PER_SET = 15;
const STORAGE_KEY_SESSION = 'secplus_session_v1';
const STORAGE_KEY_RESULTS = 'secplus_results_v1';
const STORAGE_KEY_STUDY_PROGRESS = 'secplus_study_progress_v1';

const App: React.FC = () => {
  // --- Session State (Exam Mode) ---
  const [session, setSession] = useState<ExamSession | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SESSION);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [showResults, setShowResults] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_RESULTS) === 'true';
    } catch (e) {
      return false;
    }
  });

  // --- Study Guide State ---
  const [view, setView] = useState<'dashboard' | 'study-guide'>('dashboard');
  const [masteredIds, setMasteredIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_STUDY_PROGRESS);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      return new Set();
    }
  });

  // Persist session
  useEffect(() => {
    if (session) {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
    } else {
      localStorage.removeItem(STORAGE_KEY_SESSION);
    }
  }, [session]);

  // Persist result view state
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RESULTS, String(showResults));
  }, [showResults]);

  // Persist study progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_STUDY_PROGRESS, JSON.stringify(Array.from(masteredIds)));
  }, [masteredIds]);

  // --- Helpers ---

  const uniqueSetsAvailable = Math.floor(INITIAL_QUESTIONS.length / QUESTIONS_PER_SET);

  const shuffleArray = (array: Question[], seed?: number) => {
    const shuffled = [...array];
    const random = () => {
        if (seed !== undefined) {
            const x = Math.sin(seed++) * 10000;
            return x - Math.floor(x);
        }
        return Math.random();
    };

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // --- Actions ---

  const startPracticeSet = (setId: number) => {
    let questions: Question[] = [];

    if (setId <= uniqueSetsAvailable) {
        const startIndex = (setId - 1) * QUESTIONS_PER_SET;
        questions = INITIAL_QUESTIONS.slice(startIndex, startIndex + QUESTIONS_PER_SET);
    } else {
        const remixed = shuffleArray(INITIAL_QUESTIONS, setId * 9999); 
        questions = remixed.slice(0, QUESTIONS_PER_SET);
    }

    setSession({
        id: `set-${setId}-${Date.now()}`,
        questions,
        answers: {},
        flags: {},
        startTime: Date.now(),
        mode: ExamMode.PRACTICE
    });
    setShowResults(false);
  };

  const startExam = (count: number, mode: ExamMode, domain?: string) => {
    let availableQuestions = domain 
        ? INITIAL_QUESTIONS.filter(q => q.domain.startsWith(domain.split(' ')[0])) 
        : INITIAL_QUESTIONS;
        
    availableQuestions = shuffleArray(availableQuestions);
    let questions = availableQuestions.slice(0, Math.min(count, availableQuestions.length));

    const initialLength = questions.length;
    if (initialLength > 0 && initialLength < count) {
        let i = 0;
        while (questions.length < count) {
            const sourceQ = questions[i % initialLength];
            questions.push({ ...sourceQ, id: `${sourceQ.id}-dup-${questions.length}` });
            i++;
        }
    }

    setSession({
        id: Date.now().toString(),
        questions,
        answers: {},
        flags: {},
        startTime: Date.now(),
        mode
    });
    setShowResults(false);
  };

  const updateAnswer = (questionId: string, answerId: string) => {
    if (!session) return;
    setSession(prev => prev ? ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answerId }
    }) : null);
  };

  const toggleFlag = (questionId: string) => {
    if (!session) return;
    setSession(prev => prev ? ({
      ...prev,
      flags: { ...prev.flags, [questionId]: !prev.flags[questionId] }
    }) : null);
  };

  const finishExam = () => {
    setShowResults(true);
  };

  const restartExam = () => {
    setSession(null);
    setShowResults(false);
  };

  const toggleMastered = (id: string) => {
    setMasteredIds(prev => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
    });
  };

  // --- Render ---

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {session ? (
          showResults ? (
            <ResultsView session={session} onRestart={restartExam} onHome={restartExam} />
          ) : (
            <ExamView 
              key={session.id}
              session={session} 
              onUpdateAnswer={updateAnswer} 
              onToggleFlag={toggleFlag}
              onFinish={finishExam}
            />
          )
        ) : view === 'study-guide' ? (
          <StudyGuideView 
            questions={STUDY_GUIDE_QUESTIONS as Question[]} 
            masteredIds={masteredIds}
            onToggleMastered={toggleMastered}
            onBack={() => setView('dashboard')}
          />
        ) : (
          <Dashboard 
            onStartExam={startExam} 
            onStartSet={startPracticeSet} 
            onOpenStudyGuide={() => setView('study-guide')}
            isLoading={false} 
            uniqueSetsCount={uniqueSetsAvailable}
            studyProgress={Math.round((masteredIds.size / STUDY_GUIDE_QUESTIONS.length) * 100) || 0}
          />
        )}
      </div>
    </HashRouter>
  );
};

export default App;
