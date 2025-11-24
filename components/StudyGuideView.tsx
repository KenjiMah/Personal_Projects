
import React, { useState, useEffect, useMemo } from 'react';
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, Search, Circle, Check, Award, Filter } from 'lucide-react';
import { Question } from '../types';
import { Button } from './Button';
import { DOMAINS } from '../constants';

interface StudyGuideViewProps {
  questions: Question[];
  masteredIds: Set<string>;
  onToggleMastered: (id: string) => void;
  onBack: () => void;
}

// Helper function to normalize domain names for comparison
const normalizeDomainName = (domain: string): string => {
  // Remove number prefix (e.g., "1.0 " or "2.0 ")
  let normalized = domain.replace(/^\d+\.\d+\s+/, '').trim();
  // Normalize "&" to "and" for better matching
  normalized = normalized.replace(/\s*&\s*/g, ' and ');
  // Normalize multiple spaces to single space
  normalized = normalized.replace(/\s+/g, ' ').trim();
  // Special mapping: "Implementation" maps to "Security Architecture"
  if (normalized.toLowerCase() === 'implementation') {
    normalized = 'Security Architecture';
  }
  return normalized.toLowerCase();
};

// Get the display name for a domain (from DOMAINS)
const getDomainDisplayName = (domainId: string): string => {
  const domain = DOMAINS.find(d => d.id === domainId);
  if (domain) {
    // Use the name field from DOMAINS, which is the display name
    return normalizeDomainName(domain.name);
  }
  return normalizeDomainName(domainId);
};

export const StudyGuideView: React.FC<StudyGuideViewProps> = ({ 
  questions, 
  masteredIds, 
  onToggleMastered, 
  onBack 
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('ALL');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      let matchesDomain = true;
      if (selectedDomain !== 'ALL') {
        const questionDomainNormalized = normalizeDomainName(q.domain);
        const selectedDomainNormalized = getDomainDisplayName(selectedDomain);
        // Exact match or contains check (both normalized and lowercase)
        matchesDomain = questionDomainNormalized === selectedDomainNormalized ||
                       questionDomainNormalized.includes(selectedDomainNormalized) ||
                       selectedDomainNormalized.includes(questionDomainNormalized);
      }
      const matchesSearch = q.text.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           q.explanation.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesDomain && matchesSearch;
    });
  }, [questions, selectedDomain, searchTerm]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [selectedDomain, searchTerm]);

  const currentQuestion = filteredQuestions[currentIndex];
  const isMastered = currentQuestion ? masteredIds.has(currentQuestion.id) : false;

  const progressStats = useMemo(() => {
    const total = questions.length;
    const mastered = masteredIds.size;
    return { total, mastered, percentage: Math.round((mastered / total) * 100) };
  }, [questions.length, masteredIds.size]);

  const domainStats = useMemo(() => {
    const stats: Record<string, { total: number; mastered: number }> = {};
    DOMAINS.forEach(d => stats[d.id] = { total: 0, mastered: 0 });
    
    questions.forEach(q => {
      const questionDomainNormalized = normalizeDomainName(q.domain);
      // Match by comparing normalized names (both already lowercase from normalizeDomainName)
      const domainKey = DOMAINS.find(d => {
        const domainDisplayNormalized = normalizeDomainName(d.name);
        return questionDomainNormalized === domainDisplayNormalized ||
               questionDomainNormalized.includes(domainDisplayNormalized) ||
               domainDisplayNormalized.includes(questionDomainNormalized);
      })?.id;
      
      if (domainKey && stats[domainKey]) {
        stats[domainKey].total++;
        if (masteredIds.has(q.id)) stats[domainKey].mastered++;
      }
    });
    return stats;
  }, [questions, masteredIds]);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 z-20">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onBack} className="-ml-2">
            <ChevronLeft className="h-5 w-5 text-slate-500" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <BookOpen className="h-5 w-5" />
            </div>
            <h1 className="text-lg font-bold text-slate-800">Study Guide</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mastery Progress</div>
                <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progressStats.percentage}%` }} />
                    </div>
                    <span className="text-sm font-bold text-indigo-600">{progressStats.percentage}%</span>
                </div>
            </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-slate-200 flex-col hidden lg:flex z-10">
            <div className="p-4 border-b border-slate-100">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search questions..." 
                        className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
                <button
                    onClick={() => setSelectedDomain('ALL')}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${selectedDomain === 'ALL' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                    <span>All Questions</span>
                    <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full text-xs">{questions.length}</span>
                </button>
                
                <div className="pt-4 pb-2">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3">Domains</div>
                </div>

                {DOMAINS.map(d => {
                    const stats = domainStats[d.id] || { total: 0, mastered: 0 };
                    const percent = stats.total > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0;
                    return (
                        <button
                            key={d.id}
                            onClick={() => setSelectedDomain(d.id)}
                            className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all group ${selectedDomain === d.id ? 'bg-indigo-50 ring-1 ring-indigo-200' : 'hover:bg-slate-50'}`}
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className={`font-medium ${selectedDomain === d.id ? 'text-indigo-700' : 'text-slate-700'}`}>
                                    {d.id.split(' ')[0]} {d.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full ${percent === 100 ? 'bg-green-500' : 'bg-indigo-500'}`} style={{ width: `${percent}%` }} />
                                </div>
                                <span className="text-xs text-slate-400">{stats.mastered}/{stats.total}</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-4 md:p-8">
            <div className="max-w-3xl mx-auto h-full flex flex-col">
                
                {/* Mobile Filter / Status Bar */}
                <div className="lg:hidden mb-4 flex gap-2 overflow-x-auto pb-2">
                    <select 
                        className="bg-white border border-slate-300 text-slate-700 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block p-2.5"
                        value={selectedDomain}
                        onChange={(e) => setSelectedDomain(e.target.value)}
                    >
                        <option value="ALL">All Domains</option>
                        {DOMAINS.map(d => (
                            <option key={d.id} value={d.id}>{d.name}</option>
                        ))}
                    </select>
                     <div className="bg-white border border-slate-300 rounded-md px-3 py-2 flex items-center gap-2 min-w-fit">
                        <CheckCircle className="h-4 w-4 text-indigo-600" />
                        <span className="text-sm font-medium text-slate-700">{progressStats.mastered} Mastered</span>
                    </div>
                </div>

                {filteredQuestions.length > 0 ? (
                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col min-h-[500px] relative overflow-hidden">
                        {/* Question Header */}
                        <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50/50">
                            <div>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 mb-3">
                                    {currentQuestion.domain}
                                </span>
                                <h2 className="text-lg font-medium text-slate-900">
                                    Question {currentIndex + 1} <span className="text-slate-400 font-normal">of {filteredQuestions.length}</span>
                                </h2>
                            </div>
                            <button
                                onClick={() => onToggleMastered(currentQuestion.id)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                                    isMastered 
                                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                    : 'bg-white border border-slate-200 text-slate-500 hover:border-indigo-300 hover:text-indigo-600'
                                }`}
                            >
                                {isMastered ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                                {isMastered ? 'Mastered' : 'Mark as Mastered'}
                            </button>
                        </div>

                        {/* Question Body */}
                        <div className="p-6 md:p-8 flex-1">
                            <p className="text-xl text-slate-800 leading-relaxed mb-8 font-medium">
                                {currentQuestion.text}
                            </p>

                            <div className="space-y-3">
                                {currentQuestion.options.map((option) => {
                                    const isCorrect = option.id === currentQuestion.correctOptionId;
                                    
                                    let optionClass = "border-slate-200 bg-white hover:bg-slate-50";
                                    if (showAnswer) {
                                        if (isCorrect) optionClass = "border-green-500 bg-green-50 ring-1 ring-green-500";
                                        else optionClass = "border-slate-100 bg-slate-50 opacity-60";
                                    }

                                    return (
                                        <button
                                            key={option.id}
                                            onClick={() => !showAnswer && setShowAnswer(true)}
                                            className={`w-full p-4 rounded-lg border-2 transition-all flex items-start gap-4 text-left cursor-pointer ${optionClass}`}
                                            disabled={showAnswer}
                                        >
                                            <div className={`
                                                w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5
                                                ${showAnswer && isCorrect ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-600'}
                                            `}>
                                                {option.id}
                                            </div>
                                            <span className={`text-base ${showAnswer && isCorrect ? 'text-green-900 font-medium' : 'text-slate-700'}`}>
                                                {option.text}
                                            </span>
                                            {showAnswer && isCorrect && <Check className="ml-auto h-5 w-5 text-green-600" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Answer/Explanation Section */}
                        {showAnswer && (
                            <div className="px-6 pb-6 md:px-8 md:pb-8 animate-fade-in">
                                <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
                                    <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wide mb-2 flex items-center gap-2">
                                        <Award className="h-4 w-4" /> Explanation
                                    </h4>
                                    <p className="text-indigo-800 leading-relaxed">
                                        {currentQuestion.explanation}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Footer / Controls */}
                        <div className="p-4 bg-white border-t border-slate-200 flex items-center justify-between sticky bottom-0">
                            <Button 
                                variant="outline" 
                                onClick={() => {
                                    setShowAnswer(false);
                                    setCurrentIndex(prev => Math.max(0, prev - 1));
                                }}
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4 mr-2" /> Previous
                            </Button>

                            {!showAnswer ? (
                                <Button onClick={() => setShowAnswer(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[140px]">
                                    Reveal Answer
                                </Button>
                            ) : (
                                <Button 
                                    onClick={() => {
                                        setShowAnswer(false);
                                        if (currentIndex < filteredQuestions.length - 1) {
                                            setCurrentIndex(prev => prev + 1);
                                        }
                                    }}
                                    disabled={currentIndex === filteredQuestions.length - 1}
                                    className="bg-slate-800 hover:bg-slate-900 text-white min-w-[140px]"
                                >
                                    Next Question <ChevronRight className="h-4 w-4 ml-2" />
                                </Button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                        <div className="bg-slate-100 p-4 rounded-full mb-4">
                            <Filter className="h-8 w-8 text-slate-400" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-700 mb-2">No Questions Found</h3>
                        <p className="text-slate-500">Try adjusting your search or domain filter.</p>
                        <Button 
                            variant="outline" 
                            className="mt-6" 
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedDomain('ALL');
                            }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>
        </main>
      </div>
    </div>
  );
};
