
import React, { useState } from 'react';
import { Shield, Target, Activity, Play, Grid } from 'lucide-react';
import { DOMAINS } from '../constants';
import { Button } from './Button';
import { ExamMode } from '../types';

interface DashboardProps {
  onStartExam: (count: number, mode: ExamMode, domain?: string) => void;
  onStartSet: (setId: number) => void;
  isLoading?: boolean;
  uniqueSetsCount: number;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStartExam, onStartSet, isLoading, uniqueSetsCount }) => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Shield className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Sec+ Master <span className="text-blue-600">SY0-701</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Professional practice suite. {uniqueSetsCount}+ unique practice sets, domain drills, and exam simulations.
        </p>
      </header>

      {/* Practice Sets Grid */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <Grid className="text-blue-600 h-5 w-5" />
                <h2 className="text-xl font-bold text-slate-800">Practice Sets</h2>
            </div>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                {uniqueSetsCount} Unique Sets Available
            </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3">
            {[...Array(20)].map((_, i) => {
                const setNum = i + 1;
                const isCore = setNum <= uniqueSetsCount; 
                return (
                    <button
                        key={setNum}
                        onClick={() => onStartSet(setNum)}
                        disabled={isLoading}
                        className={`
                            relative h-16 rounded-lg border flex flex-col items-center justify-center transition-all hover:-translate-y-1
                            ${isCore 
                                ? 'bg-white border-blue-200 hover:border-blue-500 hover:shadow-md' 
                                : 'bg-slate-50 border-slate-200 hover:border-slate-400 text-slate-600'}
                        `}
                    >
                        <span className={`text-sm font-bold ${isCore ? 'text-blue-700' : 'text-slate-700'}`}>Test {setNum}</span>
                        <span className="text-[10px] text-slate-400 uppercase mt-0.5">
                            {isCore ? 'Unique' : 'Challenge'}
                        </span>
                    </button>
                );
            })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Custom Simulation Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
            REAL EXAM MODE
          </div>
          <div className="h-12 w-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Exam Simulation</h3>
          <p className="text-slate-500 text-sm mb-6 flex-grow">
            50 questions randomized from the entire pool. Timed mode (60 mins). No immediate answers. Mimics the actual Pearson VUE test.
          </p>
          <Button 
            variant="primary" 
            onClick={() => onStartExam(50, ExamMode.SIMULATION)}
            isLoading={isLoading}
            className="w-full justify-between group"
          >
            Start Simulation <Play className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Domain Focus Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
          <div className="h-12 w-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
            <Activity className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Domain Focus</h3>
          <p className="text-slate-500 text-sm mb-4 flex-grow">
            Target weak areas. Select a specific domain to practice 10 focused questions.
          </p>
          
          <div className="space-y-2">
            <select 
              className="w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-2 border bg-white text-slate-900"
              onChange={(e) => setSelectedDomain(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Select Domain...</option>
              {DOMAINS.map(d => (
                <option key={d.id} value={d.id}>{d.id.split(' ')[0]} {d.name}</option>
              ))}
            </select>
            <Button 
              variant="outline" 
              className="w-full"
              disabled={!selectedDomain}
              isLoading={isLoading}
              onClick={() => selectedDomain && onStartExam(10, ExamMode.PRACTICE, selectedDomain)}
            >
              Start Focus Mode
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-8">
        <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Exam Objectives (SY0-701)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {DOMAINS.map((domain) => (
            <div key={domain.id} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500">{domain.id.split(' ')[0]}</span>
                <span className="text-xs font-bold text-blue-600">{domain.weight}%</span>
              </div>
              <p className="text-sm font-medium text-slate-800 leading-snug">{domain.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
