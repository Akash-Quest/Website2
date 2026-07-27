'use client';

import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';

export default function AlwaysOnWIF() {
  const features = [
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Citizen / Patient',
      desc: 'Symptom assessment, facility finder, doctor search, scheme eligibility, and report access all via WhatsApp, in their local language',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Doctor / Specialist',
      desc: 'Receives pre-assessed referrals with full symptom history, severity score, and AI triage notes spends time treating, not triaging',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Hospital Administrator',
      desc: 'Live dashboard of incoming cases, bed load forecasting, referral volume, and escalation status across the facility network',
    },
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'State Health Department',
      desc: 'Population-level health intelligence district case maps, disease trends, scheme uptake, and system performance metrics',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Governance / Project Monitoring',
      desc: 'Cross-department visibility citizen services, grievance, emergency management, and health performance in one government dashboard',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'NGO / Health Programme Partner',
      desc: 'Campaign integration, awareness messaging, vaccination drive coordination, and programme uptake tracking through the same WhatsApp channel',
    },
  ];

  return (
    <section className="w-full relative py-20 md:py-28 px-6 sm:px-12 lg:px-[8%] overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          backgroundImage: "url('/Productsoln/AlwaysOnWIF.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}     
      />    

      <div className="max-w-[1920px] mx-auto relative z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <span className=" font-semibold text-[#CBCBFF] mb-3 block">
            <p>Who it's For</p>
          </span>
          <h2 className="font-semibold text-white">
            Every Actor In The <br /> Public
            <em className="font-semibold text-white">Health System.</em>
          </h2>
          <p className="text-white/80 mt-4 tracking-wide leading-snug max-w-3xl mx-auto ">
            AlwaysON serves patients, doctors, administrators, and government bodies each with their own tailored interface and role-appropriate access.
          </p>
        </div>

        {/* ── FEATURE GRID (GLASS CARDS WITHOUT HEAD) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-start gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.2] border border-white/10 hover:border-white/20 hover:bg-white/[0.12] transition-all duration-300 shadow-xl"
            >
              {/* ── ICON & HEAD BADGE TOP ROW ── */}
              <div className="flex items-center justify-between w-full">
                {/* Rounded Icon Container */}
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  {feature.icon}
                </div>

                {/* Head Tag Added Here */}
                <p><span className="font-medium text-white/80 tracking-wide uppercase">
                  {feature.head}
                </span></p>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className=" text-white leading-snug tracking-wide">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}