
import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ExamView } from './components/ExamView';
import { ResultsView } from './components/ResultsView';
import { ExamSession, ExamMode, Question } from './types';
import { INITIAL_QUESTIONS } from './constants';

const QUESTIONS_PER_SET = 15;
const STORAGE_KEY_SESSION = 'secplus_session_v1';
const STORAGE_KEY_RESULTS = 'secplus_results_v1';

const App: React.FC = () => {
  // Initialize state from localStorage if available
  const [session, setSession] = useState<ExamSession | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SESSION);
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.error("Failed to load session", e);
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

  // Persist session changes
  useEffect(() => {
    if (session) {
      localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
    } else {
      localStorage.removeItem(STORAGE_KEY_SESSION);
    }
  }, [session]);

  // Persist UI state (results view)
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RESULTS, String(showResults));
  }, [showResults]);

  // Calculate how many unique "chunks" we have available in the static bank
  const uniqueSetsAvailable = Math.floor(INITIAL_QUESTIONS.length / QUESTIONS_PER_SET);

  // Fisher-Yates Shuffle
  const shuffleArray = (array: Question[], seed?: number) => {
    const shuffled = [...array];
    // Simple seeded random for deterministic remixes
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

  const startPracticeSet = (setId: number) => {
    let questions: Question[] = [];

    if (setId <= uniqueSetsAvailable) {
        // UNIQUE MODE: Slice unique parts of the array
        const startIndex = (setId - 1) * QUESTIONS_PER_SET;
        questions = INITIAL_QUESTIONS.slice(startIndex, startIndex + QUESTIONS_PER_SET);
    } else {
        // CHALLENGE MODE: Deterministically shuffle the whole bank for sets beyond our unique count
        // This ensures "Test 21" is always the same "Test 21" (if we went that high)
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
    let questions: Question[] = [];

    // Filter by domain if requested
    let availableQuestions = domain 
        ? INITIAL_QUESTIONS.filter(q => q.domain.startsWith(domain.split(' ')[0])) 
        : INITIAL_QUESTIONS;
        
    // Random shuffle for Simulations
    availableQuestions = shuffleArray(availableQuestions);

    questions = availableQuestions.slice(0, Math.min(count, availableQuestions.length));

    // Handle duplications if we need more questions than we have (edge case)
    const initialLength = questions.length;
    if (initialLength > 0 && initialLength < count) {
        let i = 0;
        while (questions.length < count) {
        const sourceQ = questions[i % initialLength];
        questions.push({
            ...sourceQ,
            id: `${sourceQ.id}-dup-${questions.length}`
        });
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

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {!session ? (
          <Dashboard 
            onStartExam={startExam} 
            onStartSet={startPracticeSet} 
            isLoading={false} 
            uniqueSetsCount={uniqueSetsAvailable}
          />
        ) : showResults ? (
          <ResultsView session={session} onRestart={restartExam} onHome={restartExam} />
        ) : (
          <ExamView 
            key={session.id}
            session={session} 
            onUpdateAnswer={updateAnswer} 
            onToggleFlag={toggleFlag}
            onFinish={finishExam}
          />
        )}
      </div>
    </HashRouter>
  );
};

export default App;
