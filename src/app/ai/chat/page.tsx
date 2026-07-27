'use client';

import React, { useState } from 'react';
import { Add, User, Send2, Like1, Dislike, Export, CloseSquare } from 'iconsax-react';

export default function ChatPage() {
  const [query, setQuery] = useState('');
  const [chatState, setChatState] = useState<'idle' | 'loading' | 'active'>('idle');

  const trendingQuestions = [
    "How Can My Organization Start Its Digital Transformation Journey?",
    "What Qualities Make Someone A Good Leader?",
    "What Is An Agentic Organization?",
    "How Does Tokenization Work?",
    "How Can My Organization Start Its AI And Digital Transformation Journey?",
    "What's The Latest In Digital Banking And Finance?",
    "How Can I Create Better Prompts?"
  ];

  const handleSend = (text?: string) => {
    if (text) setQuery(text);
    setChatState('loading');
    setTimeout(() => {
      setChatState('active');
    }, 1500);
  };

  return (
    <div className="flex h-screen w-full bg-[#F8F7F4] font-['Inter_Tight'] text-[#03030F]">
      
      {/* ── LEFT SIDEBAR ── */}
      <aside className="w-64 border-r border-gray-200/60 p-4 flex flex-col justify-between bg-[#F8F7F4] shrink-0">
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex flex-col gap-0.5 px-2">
            <div className="flex items-center gap-1 text-[#1D1EE3] font-black text-lg italic">
              <span>Ask</span>
              <span>✦</span>
            </div>
            <h1 className="text-xl font-black tracking-tight text-[#1D1EE3]">
              SKYQUEST
            </h1>
          </div>

          {/* New Chat Button */}
          <button 
            onClick={() => { setChatState('idle'); setQuery(''); }}
            className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-all"
          >
            <Add size={18} />
            <span>New Chat</span>
          </button>
        </div>

        {/* Profile Button */}
        <button className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-medium text-gray-700 shadow-sm hover:shadow transition-all">
          <User size={18} />
          <span>Profile</span>
        </button>
      </aside>

      {/* ── MAIN CONTENT AREA ── */}
      <main className="flex-1 flex flex-col justify-between p-6 md:p-10 relative overflow-y-auto">
        
        {/* Top Right Close Button */}
        {chatState !== 'idle' && (
          <button 
            onClick={() => setChatState('idle')} 
            className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
          >
            ✕
          </button>
        )}

        {/* 1. IDLE / LANDING STATE */}
        {chatState === 'idle' && (
          <div className="my-auto max-w-3xl mx-auto w-full flex flex-col items-center text-center gap-6">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#1D1EE3] font-black text-3xl italic">
                <span>Ask</span>
                <span>✦</span>
              </div>
              <h1 className="text-4xl font-black tracking-tight text-[#1D1EE3] mb-3">
                SKYQUEST
              </h1>
              <p className="text-gray-600 text-sm max-w-md">
                A chatbot to answer your questions based on Skyquest's published insights
              </p>
            </div>

            {/* Input Bar */}
            <div className="w-full relative mt-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(query)}
                placeholder="Ask About Skyquest's Insights"
                className="w-full bg-white border border-dashed border-gray-300 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#1D1EE3] shadow-sm pr-14"
              />
              <button 
                onClick={() => handleSend(query)}
                className="absolute right-3 top-2.5 p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-[#1D1EE3] hover:text-white transition-all"
              >
                <Send2 size={18} />
              </button>
            </div>

            {/* Trending Questions */}
            <div className="w-full flex flex-col items-start gap-3 mt-6">
              <span className="text-xs font-semibold text-gray-500 tracking-wider flex items-center gap-1">
                ☆ TRENDING QUESTIONS
              </span>
              <div className="flex flex-wrap gap-2">
                {trendingQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="bg-white border border-gray-200 rounded-lg px-3.5 py-2 text-xs text-gray-600 hover:border-[#1D1EE3] hover:text-[#1D1EE3] transition-all text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. LOADING STATE */}
        {chatState === 'loading' && (
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-6">
            <div className="self-end bg-white border border-gray-200 rounded-full px-5 py-2.5 text-xs sm:text-sm text-gray-700 flex items-center gap-2 shadow-sm">
              <User size={16} />
              <span>{query}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-2xl animate-pulse mt-8">
              • • •
            </div>
          </div>
        )}

        {/* 3. ACTIVE CHAT RESPONSE STATE */}
        {chatState === 'active' && (
          <div className="max-w-4xl mx-auto w-full flex flex-col gap-6">
            {/* User Question */}
            <div className="self-end bg-white border border-gray-200 rounded-full px-5 py-2.5 text-xs sm:text-sm text-gray-700 flex items-center gap-2 shadow-sm">
              <User size={16} />
              <span>{query}</span>
            </div>

            {/* AI Source Banner */}
            <div className="bg-[#EAE8FE] text-[#1D1EE3] rounded-lg p-3 text-xs leading-relaxed">
              This Response Is Powered By SkyQuest Insights, Proprietary Market Intelligence, And Sector-Focused Research Frameworks. Recommendations Should Be Validated Against Organizational Goals, Operational Priorities, And Industry-Specific Requirements.
            </div>

            {/* Main Response Content */}
            <div className="flex flex-col gap-4 text-gray-800 text-sm sm:text-base leading-relaxed">
              <h2 className="text-lg font-bold text-[#03030F]">
                Starting An AI And Digital Transformation Journey Begins With Identifying The Business Challenges That Create The Highest Operational Or Strategic Impact.
              </h2>
              <p className="text-gray-600">
                Starting An AI And Digital Transformation Journey Begins With Identifying The Business Challenges That Create The Highest Operational Or Strategic Impact. Organizations Should Focus On Areas Where AI, Automation, And Data Intelligence Can Improve Efficiency, Accelerate Decision-Making, And Enhance Customer Experience.
              </p>

              <div className="flex flex-col gap-1 mt-2">
                <span className="font-semibold text-gray-700">Recommended Starting Points Include:</span>
                <ul className="list-disc pl-5 text-gray-600 space-y-1 text-xs sm:text-sm">
                  <li>Evaluating Current Digital Maturity And Infrastructure</li>
                  <li>Identifying High-Impact AI Use Cases</li>
                  <li>Building A Scalable Data Foundation</li>
                  <li>Aligning Transformation Goals With Business Objectives</li>
                  <li>Creating A Phased Implementation Roadmap</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 text-gray-500 mt-4 border-t border-gray-200/60 pt-4">
                <button className="hover:text-[#1D1EE3] transition-colors"><Like1 size={18} /></button>
                <button className="hover:text-[#1D1EE3] transition-colors"><Dislike size={18} /></button>
                <button className="hover:text-[#1D1EE3] transition-colors"><Export size={18} /></button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Input Area for Active Chat */}
        {chatState !== 'idle' && (
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-2 mt-auto pt-6">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="How Else May I Assist You"
                className="w-full bg-white border border-gray-300 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#1D1EE3] shadow-sm pr-14"
              />
              <button className="absolute right-3 top-2 p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-[#1D1EE3] hover:text-white transition-all">
                <Send2 size={16} />
              </button>
            </div>
            <span className="text-[10px] text-gray-400">
              This Is A Gen AI Experiment. Responses Are Based Only On Skyquest Insights And Should Be Verified With The Sources Cited. <a href="#" className="underline font-semibold">See More</a>
            </span>
          </div>
        )}

      </main>
    </div>
  );
}