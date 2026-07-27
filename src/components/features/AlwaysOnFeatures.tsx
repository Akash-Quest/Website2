'use client';
 
import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';
 
export default function AlwaysOnFeatures() {
  const audienceCards = [
    {
      icon: <Courthouse size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'No App Download',
      desc: 'Zero installation barrier. If a patient has WhatsApp and nearly everyone does they can access AlwaysON instantly. No sign-up, no password, no App Store.',
    },
    {
      icon: <Bank size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Multilingual by Default',
      desc: 'Conversations happen in 8 local languages including Hindi, Garhwali, Kumaoni, and more. Patients describe symptoms in their own words the AI understands and responds fluently.',
    },
    {
      icon: <Bank size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Trusted & Familiar',
      desc: 'Patients already trust WhatsApp for family conversations. AlwaysON inherits that trust. Engagement rates are dramatically higher than purpose-built health apps.',
    },
    {
      icon: <Courthouse size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Real-Time Response',
      desc: 'AI triage responds within seconds. Expert referrals are triggered automatically when severity thresholds are crossed no manual escalation needed.',
    },
    {
      icon: <Buildings size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Government-Verified Channel',
      desc: 'Deployed under the official Government of Uttarakhand WhatsApp number a verified, trusted, official channel. Citizens know it\'s legitimate.',
    },
    {
      icon: <Buildings size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Full Clinical Dashboard',
      desc: 'Every conversation flows into a real-time clinical dashboard doctors, administrators, and government health officials see live case load, severity distribution, and referral status.',
    },
    
  ];
 
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight'] ">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-3xl flex flex-col gap-4 Z-20">
            <eyebrow className="font-semibold text-primary mb-3 block"> The WhatsApp Advantage</eyebrow>
            
          <h2 className="font-semibold ">
            2 billion users. <br />Zero New 
            <em className="font-Semibold ">Habits Required.</em>
          </h2>
          <p className="text-muted max-w-full mx-auto tracking-wide leading-snug">
            WhatsApp is already on every phone, trusted by every family, and used in every language. AlwaysON meets patients exactly where they are no registration, no download, no friction.
          </p>
        </div>
 
        {/* ── 🛠️ FIXED: 3x2 RESPONSIVE FLAT CARD GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#F7F5F1] rounded-[16px] p-8 flex flex-col gap-4 border border-gray-200/30 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Clean Flat Square Icon Wrapper Box */}
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              
              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                {/* Core Component Headline */}
                <h3 className="font-semibold text-[#03030F] tracking-wide">
                  {card.title}
                </h3>
                
                {/* Description Context string */}
                <p className="font-normal tracking-wide leading-snug text-muted mt-2">
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