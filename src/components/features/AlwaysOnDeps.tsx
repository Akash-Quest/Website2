'use client';
 
import React from 'react';
import Link from 'next/link';
import { Location, Global,} from 'iconsax-react';
 
export default function AlwaysOnDeps() {
  const audienceCards = [
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '● LIVE',
      head2: '  North India · Government of Uttarakhand · Since 2024',
      title: 'Uttarakhand, India',
      desc: '3,285 assessments/day · 8 languages · 984 referrals · Emergency management, grievance, citizen services integrated',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '◐ IN PROGRESS ',
      head2: ' East India · 2025',
      title: 'Jharkhand, India',
      desc: 'Tribal health outreach · Santali and Ho language support · PMJAY scheme integration',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '◐ IN PROGRESS',
      head2: ' North-West India · 2025',
      title: 'Rajasthan, India',
      desc: 'Desert district healthcare access · Rajasthani and Marwari · Chiranjeevi Yojana integration',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '○ PIPELINE',
      head2: ' South Asia · 2026',
      title: 'Bangladesh',
      desc: 'Community health worker support · Bengali · DGHS and UNICEF partnership',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '○ PIPELINE',
      head2: 'West Africa · 2026',
      title: 'Nigeria',
      desc: 'Primary health centre triage · Hausa, Yoruba, Igbo · NHIS integration',
    },
    {
      icon: <Global size={24} variant="Linear" className="text-black stroke-current" />,
      head2: (
    <Link href="/contact" className="hover:underline transition-all">
        Request deployment →
    </Link>
    ),
      title: 'Your Country',
      desc: 'Customised to your language mix, health schemes, facility network, and government structure. Operational in weeks.',
    },
   
  ];
 
  return (
    <section className="w-full bg-[#F7F5F1] py-24 md:py-32 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight'] ">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-4xl flex flex-col gap-4 Z-20">
          <eyebrow className="font-semibold text-primary  block">
            Deployments
          </eyebrow>
          <h2 className="font-semibold ">
            Live in Uttarakhand. <br />Expanding <em className="font-Semibold "> Across India And Beyond.</em>
            </h2>
          <p className=" tracking-wide leading-snug text-muted max-w-full mx-auto ">
            AlwaysON deploys as a sovereign state instance customised to each state's languages, health schemes, facility network, and government structure. Operational in weeks.
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

              <div className="w-full flex items-start justify-between text-xs sm:text-sm md:text-base font-semibold text-[#1D1EE3] tracking-wide">
  
                {/* Left Side Group: Blue Dot + LIVE Status */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 whitespace-nowrap">
                                    
                    {/* Head (e.g. "LIVE") */}
                    <p>{card.head}</p>
                </div>

                {/* Right Side Column: Head2 (e.g. "East Africa · Since 2024") */}
                <div className="text-right">
                    <span>{card.head2}</span>
                </div>
                </div>
              
              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                {/* Core Component Headline */}
                <h3 className="font-semibold text-[#03030F] ">
                  {card.title}
                 </h3>
                
                {/* Description Context string */}
                <p className="text-muted tracking-wide">
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