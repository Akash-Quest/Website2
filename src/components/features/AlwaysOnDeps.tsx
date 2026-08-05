'use client';
 
import React from 'react';
import Link from 'next/link';
import { Location, Global,} from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';
 
export default function AlwaysOnDeps() {
  const audienceCards = [
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      
      title: 'Active Symptom Assessments',
      desc: 'Track ongoing patient symptom assessments and AI-assisted healthcare interactions',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
   
      title: 'Cases Currently in Progress',
      desc: 'Monitor cases actively being assessed, reviewed, or managed.',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
  
      title: 'Escalated Cases',
      desc: 'Identify cases requiring additional clinical attention or expert intervention.',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
    
      title: 'Healthcare Alerts',
      desc: 'Stay informed about critical cases, priority assessments, and important healthcare updates.',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
 
      title: 'Recent Referrals & Monitoring',
      desc: 'Monitor patients recently referred to healthcare professionals for further assessment.',
    },
    {
      icon: <Global size={24} variant="Linear" className="text-black stroke-current" />,
     
      title: 'Patient Assessment Status',
      desc: 'View the current status and progress of individual patient assessments.',
    },
   
  ];
 
  return (
    <section className="w-full bg-[#F7F5F1] py-24 md:py-32 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight'] ">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-4xl flex flex-col  Z-20">
          <Reveal as="p" variant="upSm" custom={0} className="font-medium text-primary text-body-sm ">
            Dashboard Features
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
            Real-Time Healthcare Intelligence at{" "}<br></br>  <em className="font-Semibold "> Your Fingertips</em>
            </Reveal>
          <Reveal as="p" variant="upSm" custom={2} className=" tracking-wide leading-snug text-muted max-w-full mx-auto ">
            The AlwaysON dashboard provides healthcare teams with visibility into patient assessments, active cases, escalations, alerts, and referrals, helping teams monitor healthcare interactions and respond more efficiently..
          </Reveal>
        </div>

        {/* ── 🛠️ FIXED: 3x2 RESPONSIVE FLAT CARD GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              className="bg-white rounded-[16px] p-4 flex flex-col gap-4 border border-gray-200/30 transition-all duration-300 "
            >
              {/* Clean Flat Square Icon Wrapper Box */}
              <div className="w-10 h-10 bg-[#F7F5F1] rounded-xl flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                {/* Core Component Headline */}
                <h3 className="font-semibold text-body-lg text-[#03030F] ">
                  {card.title}
                 </h3>

                {/* Description Context string */}
                <p className="text-muted ">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
 
      </div>
    </section>
  );
}