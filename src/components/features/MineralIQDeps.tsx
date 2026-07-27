'use client';
 
import React from 'react';
import Link from 'next/link';
import { Location, Global,} from 'iconsax-react';
 
export default function MineralIQDeps() {
  const audienceCards = [
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '● LIVE',
      head2: 'East Africa · Since 2024',
      title: 'Uganda',
      desc: '147 concessions.Gold,Cu/Co,REE,Phosphate,Iron',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '◐ IN PROGRESS ',
      head2: 'Central Africa · 2025',
      title: 'DRC',
      desc: 'Cobalt, Coltan, Gold · ASM formalisation focus',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
            head: '◐ IN PROGRESS',
      head2: 'Southern Africa · Since 2025',
      title: 'Zambia',
      desc: 'Copper belt · Royalty & EITI tracking priority',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '○ PIPELINE',
      head2: 'West Africa · Since 2026',
      title: 'Ghana',
      desc: 'Gold, Bauxite · Galamsey ASM enforcement',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '○ PIPELINE',
      head2: 'Southeast Asia · Since 2026',
      title: 'Indonesia',
      desc: 'Nickel, Tin, Coal · Forest buffer compliance',
    },
    {
      icon: <Global size={24} variant="Linear" className="text-black stroke-current" />,
      head2: (
    <Link href="/contact" className="hover:underline transition-all">
        Request deployment →
    </Link>
    ),
      title: 'Your Country',
      desc: 'MineralIQ deploys as a sovereign instance. Your data stays within your jurisdiction.',
    },
   
  ];
 
  return (
    <section className="w-full bg-[#F7F5F1] py-24 md:py-32 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight'] ">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-3xl flex flex-col gap-4 Z-20">
          <span className="text-sm font-semibold text-primary mb-3 block">
            Global Deployments
          </span>
          <h2 className="font-semibold ">
            Six Roles, One Shared Source <br />
            <em className="font-Semibold ">Of Truth</em>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto ">
            InspectGlobal ships with role-based portals, so each stakeholder sees the data fused for their decisions not a generic dashboard they have to interpret themselves.
          </p>
        </div>
 
        {/* ── 🛠️ FIXED: 3x2 RESPONSIVE FLAT CARD GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[16px] p-8 flex flex-col gap-4 border border-gray-200/30 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Clean Flat Square Icon Wrapper Box */}
              <div className="w-12 h-12 bg-[#F7F5F1] rounded-xl flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="w-full flex items-center justify-between text-xs sm:text-sm md:text-base font-semibold text-[#1D1EE3] tracking-wide">
  
                {/* Left Side Group: Blue Dot + LIVE Status */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                                    
                    {/* Head (e.g. "LIVE") */}
                    <span>{card.head}</span>
                </div>

                {/* Right Side Column: Head2 (e.g. "East Africa · Since 2024") */}
                <div className="text-right">
                    <span>{card.head2}</span>
                </div>

                </div>
              
              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                {/* Core Component Headline */}
                <h4 className="font-semibold text-xl text-[#03030F] tracking-tight">
                  {card.title}
                </h4>
                
                {/* Description Context string */}
                <p className="text-sm md:text-base font-normal leading-relaxed text-[#03030F]/65">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}