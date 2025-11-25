import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { ExamSession } from '../types';
import { DOMAINS } from '../constants';
import { Button } from './Button';
import { CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react';

interface ResultsViewProps {
  session: ExamSession;
  onRestart: () => void;
  onHome: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ session, onRestart, onHome }) => {
  const stats = useMemo(() => {
    let correct = 0;
    const domainStats: Record<string, { total: number; correct: number }> = {};
    
    // Initialize domains
    DOMAINS.forEach(d => {
        domainStats[d.id] = { total: 0, correct: 0 };
    });

    session.questions.forEach(q => {
        const isCorrect = session.answers[q.id] === q.correctOptionId;
        if (isCorrect) correct++;
        
        // Match domain strictly or loosely if generated string varies slightly
        const domainKey = DOMAINS.find(d => q.domain.startsWith(d.id.split(' ')[0]))?.id || DOMAINS[0].id;
        
        if (domainStats[domainKey]) {
            domainStats[domainKey].total++;
            if (isCorrect) domainStats[domainKey].correct++;
        }
    });

    const score = Math.round((correct / session.questions.length) * 900); // Scaled to 900
    const pass = score >= 750;

    return { correct, score, pass, domainStats };
  }, [session]);

  const pieData = [
    { name: 'Correct', value: stats.correct },
    { name: 'Incorrect', value: session.questions.length - stats.correct }
  ];
  
  const barData = DOMAINS.map(d => {
    const ds = stats.domainStats[d.id];
    return {
        name: d.id.split(' ')[0], // "1.0"
        full: d.name,
        score: ds.total > 0 ? Math.round((ds.correct / ds.total) * 100) : 0
    };
  });

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6 sm:mb-8">
            <div className={`p-4 sm:p-6 md:p-8 text-center ${stats.pass ? 'bg-green-50' : 'bg-red-50'}`}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {stats.pass ? 'Congratulations! You Passed.' : 'Score Below Threshold'}
                </h2>
                <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-4">
                    <span className={stats.pass ? 'text-green-600' : 'text-red-600'}>{stats.score}</span>
                    <span className="text-xl sm:text-2xl text-slate-400 font-medium">/ 900</span>
                </div>
                <p className="text-sm sm:text-base text-slate-600">
                    Passing score is 750. You got {stats.correct} out of {session.questions.length} questions correct.
                </p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Overall Chart */}
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Performance Overview</h3>
                    <div className="h-56 sm:h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    <Cell fill="#16a34a" /> {/* Green */}
                                    <Cell fill="#dc2626" /> {/* Red */}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Domain Breakdown */}
                <div>
                     <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-3 sm:mb-4">Domain Breakdown (%)</h3>
                     <div className="h-56 sm:h-64 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={barData} layout="vertical" margin={{ left: 20 }}>
                                <XAxis type="number" domain={[0, 100]} hide />
                                <YAxis dataKey="name" type="category" width={30} />
                                <Tooltip cursor={{fill: 'transparent'}} content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        return (
                                            <div className="bg-white p-2 border shadow text-xs">
                                                <p className="font-bold">{payload[0].payload.full}</p>
                                                <p>Score: {payload[0].value}%</p>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}/>
                                <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                            </BarChart>
                        </ResponsiveContainer>
                     </div>
                </div>
            </div>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">Question Review</h3>
            <div className="space-y-3 sm:space-y-4">
                {session.questions.map((q, idx) => {
                    const userAns = session.answers[q.id];
                    const isCorrect = userAns === q.correctOptionId;
                    const correctOpt = q.options.find(o => o.id === q.correctOptionId);
                    
                    return (
                        <div key={q.id} className={`p-3 sm:p-4 rounded-lg border ${isCorrect ? 'border-slate-200 bg-slate-50' : 'border-red-200 bg-red-50'}`}>
                            <div className="flex gap-2 sm:gap-3">
                                <div className="mt-1 flex-shrink-0">
                                    {isCorrect ? <CheckCircle className="text-green-500 h-5 w-5" /> : <XCircle className="text-red-500 h-5 w-5" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs sm:text-sm text-slate-500 mb-1 truncate">Question {idx + 1} <span className="mx-1">•</span> {q.domain}</div>
                                    <p className="text-sm sm:text-base font-medium text-slate-900 mb-2">{q.text}</p>
                                    {!isCorrect && (
                                        <div className="text-xs sm:text-sm mt-2">
                                            <span className="font-bold text-red-700">Your Answer:</span> {userAns} <br/>
                                            <span className="font-bold text-green-700">Correct Answer:</span> {correctOpt?.id}: {correctOpt?.text}
                                        </div>
                                    )}
                                    <div className="mt-2 text-xs sm:text-sm text-slate-600 bg-white p-2 sm:p-3 rounded border border-slate-200">
                                        <span className="font-semibold">Explanation:</span> {q.explanation}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        <div className="sticky bottom-0 bg-white/80 backdrop-blur border-t border-slate-200 p-3 sm:p-4 mt-6 sm:mt-8 flex justify-center gap-3 sm:gap-4 shadow-lg rounded-t-xl">
            <Button variant="outline" onClick={onHome} className="touch-manipulation flex-1 sm:flex-initial min-h-[44px]">
                <Home className="mr-2 h-4 w-4" /> 
                <span className="hidden sm:inline">Dashboard</span>
                <span className="sm:hidden">Home</span>
            </Button>
            <Button onClick={onRestart} className="touch-manipulation flex-1 sm:flex-initial min-h-[44px]">
                <RotateCcw className="mr-2 h-4 w-4" /> 
                <span className="hidden sm:inline">Retake Exam</span>
                <span className="sm:hidden">Retake</span>
            </Button>
        </div>
      </div>
    </div>
  );
};