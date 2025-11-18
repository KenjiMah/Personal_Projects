
import React, { useState, useEffect } from 'react';
import { Clock, Flag, ChevronLeft, ChevronRight, CheckCircle, XCircle, Menu, X } from 'lucide-react';
import { ExamSession, ExamMode } from '../types';
import { Button } from './Button';

interface ExamViewProps {
  session: ExamSession;
  onUpdateAnswer: (qId: string, aId: string) => void;
  onToggleFlag: (qId: string) => void;
  onFinish: () => void;
}

export const ExamView: React.FC<ExamViewProps> = ({ session, onUpdateAnswer, onToggleFlag, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const currentQuestion = session.questions[currentIndex];
  const selectedAnswer = session.answers[currentQuestion.id];
  const isFlagged = session.flags[currentQuestion.id];
  const isPractice = session.mode === ExamMode.PRACTICE;

  useEffect(() => {
    // Calculate initial time based on question count (e.g., 1.5 mins per question)
    // Only set if it's 0 (start)
    if (timeLeft === 0) {
        setTimeLeft(session.questions.length * 90);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [session.questions.length, onFinish]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (Object.keys(session.answers).length / session.questions.length) * 100;

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 shrink-0 z-20 relative">
        <div className="flex items-center gap-4">
            <button 
                className="lg:hidden p-2 text-slate-600"
                onClick={() => setSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="font-bold text-slate-800 hidden sm:block">CompTIA Security+ Exam</div>
            <div className="text-sm text-slate-500 hidden sm:block">| Question {currentIndex + 1} of {session.questions.length}</div>
        </div>
        
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-700 font-mono font-medium bg-slate-100 px-3 py-1 rounded">
                <Clock className="h-4 w-4" />
                {formatTime(timeLeft)}
            </div>
            <Button variant="primary" size="sm" onClick={onFinish}>
                End Exam
            </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar Navigation */}
        <aside className={`
            absolute lg:relative inset-y-0 left-0 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out z-10
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
            <div className="p-4 h-full overflow-y-auto">
                <div className="mb-4 px-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase mb-2">Progress</div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
                    </div>
                    <div className="text-right text-xs text-slate-500 mt-1">{Math.round(progressPercentage)}% Answered</div>
                </div>
                
                <div className="grid grid-cols-5 gap-2">
                    {session.questions.map((q, idx) => {
                        const isAnswered = !!session.answers[q.id];
                        const isCurrent = idx === currentIndex;
                        const isFlagged = session.flags[q.id];
                        
                        let bgClass = "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100";
                        if (isCurrent) bgClass = "ring-2 ring-blue-600 ring-offset-1 bg-white border-blue-200 text-blue-700";
                        else if (isFlagged) bgClass = "bg-amber-50 border-amber-300 text-amber-700";
                        else if (isAnswered) bgClass = "bg-blue-50 border-blue-200 text-blue-700";

                        return (
                            <button
                                key={q.id}
                                onClick={() => {
                                    setCurrentIndex(idx);
                                    if (window.innerWidth < 1024) setSidebarOpen(false);
                                }}
                                className={`h-8 w-full rounded text-xs font-medium border flex items-center justify-center relative ${bgClass}`}
                            >
                                {idx + 1}
                                {isFlagged && <div className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-amber-500 rounded-full" />}
                            </button>
                        );
                    })}
                </div>
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                {/* Question Card */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-6">
                    <div className="flex justify-between items-start mb-6">
                        <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-0.5 rounded">
                            {currentQuestion.domain}
                        </span>
                        <button 
                            onClick={() => onToggleFlag(currentQuestion.id)}
                            className={`flex items-center gap-2 text-sm font-medium transition-colors ${isFlagged ? 'text-amber-600' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <Flag className={isFlagged ? 'fill-current' : ''} size={18} />
                            {isFlagged ? 'Flagged' : 'Flag for Review'}
                        </button>
                    </div>

                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 leading-relaxed mb-8">
                        {currentQuestion.text}
                    </h2>

                    <div className="space-y-3">
                        {currentQuestion.options.map((option) => {
                            const isSelected = selectedAnswer === option.id;
                            const showResult = isPractice && isSelected; 
                            const isCorrect = option.id === currentQuestion.correctOptionId;
                            
                            let wrapperClass = "border-slate-200 hover:bg-slate-50 hover:border-slate-300";
                            if (isSelected) {
                                if (isPractice) {
                                    wrapperClass = isCorrect 
                                        ? "bg-green-50 border-green-500 ring-1 ring-green-500" 
                                        : "bg-red-50 border-red-500 ring-1 ring-red-500";
                                } else {
                                    wrapperClass = "bg-blue-50 border-blue-500 ring-1 ring-blue-500";
                                }
                            } else if (isPractice && selectedAnswer && isCorrect) {
                                // Show correct answer if user picked wrong one
                                wrapperClass = "bg-green-50 border-green-500 ring-1 ring-green-500 border-dashed";
                            }

                            return (
                                <button
                                    key={option.id}
                                    onClick={() => !showResult && onUpdateAnswer(currentQuestion.id, option.id)}
                                    className={`w-full text-left p-4 rounded-lg border-2 transition-all flex items-center gap-4 group ${wrapperClass}`}
                                    disabled={isPractice && !!selectedAnswer}
                                >
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors
                                        ${isSelected 
                                            ? (isPractice 
                                                ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white') 
                                                : 'bg-blue-600 text-white')
                                            : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}
                                    `}>
                                        {option.id}
                                    </div>
                                    <div className="text-slate-800 font-medium">{option.text}</div>
                                    
                                    {isPractice && selectedAnswer && isCorrect && (
                                        <CheckCircle className="ml-auto text-green-500 h-5 w-5" />
                                    )}
                                    {isPractice && isSelected && !isCorrect && (
                                        <XCircle className="ml-auto text-red-500 h-5 w-5" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Practice Mode Feedback Area */}
                {isPractice && selectedAnswer && (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-fade-in">
                         <div className="flex items-center gap-2 mb-4">
                            {selectedAnswer === currentQuestion.correctOptionId 
                                ? <span className="text-green-600 font-bold flex items-center gap-2"><CheckCircle size={20}/> Correct</span>
                                : <span className="text-red-600 font-bold flex items-center gap-2"><XCircle size={20}/> Incorrect</span>
                            }
                         </div>
                         <p className="text-slate-700 leading-relaxed">
                            {currentQuestion.explanation}
                         </p>
                    </div>
                )}
                
                {/* Navigation Footer */}
                <div className="flex justify-between mt-8 mb-12">
                    <Button 
                        variant="outline" 
                        onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                    <Button 
                        variant="primary"
                        onClick={() => {
                            if (currentIndex < session.questions.length - 1) {
                                setCurrentIndex(prev => prev + 1);
                            } else {
                                onFinish();
                            }
                        }}
                    >
                        {currentIndex === session.questions.length - 1 ? 'Finish Exam' : 'Next Question'} 
                        {currentIndex < session.questions.length - 1 && <ChevronRight className="ml-2 h-4 w-4" />}
                    </Button>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};
