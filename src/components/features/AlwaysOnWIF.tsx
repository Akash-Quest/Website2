'use client';

import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function AlwaysOnWIF() {
  const features = [
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Patients',
      desc: 'Access AI-assisted symptom assessment, healthcare guidance, and referrals through a familiar conversational interface.',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Healthcare Professionals',
      desc: 'Receive relevant referrals and patient assessment information to support faster clinical attention.',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Healthcare Administrators',
      desc: 'Monitor patient assessments, escalations, alerts, and referral activity through a centralized dashboard.',
    },
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Healthcare Organizations',
      desc: 'Use AI-enabled digital healthcare infrastructure to improve access, triage, and co-ordination.',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Public Health Programs',
      desc: 'Support scalable digital healthcare delivery and improve visibility into healthcare interactions and referral patterns.',
    },
    
  ];

  return (
    <section className="w-full relative  overflow-hidden">
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

      <div className="page-container mx-auto relative z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-10">
          <Reveal as="span" variant="upSm" custom={0} className=" font-semibold text-[#CBCBFF] mb-3 block">
            <p>Who it's For</p>
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold text-white">
            Designed for Healthcare {" "} <br />
            <em className="font-semibold text-white">Stakeholders</em>
          </Reveal>
          <Reveal as="p" variant="upSm" custom={2} className="text-white/80 mt-4 tracking-wide leading-snug max-w-[60%] mx-auto ">
            Empowering patients, healthcare professionals, administrators, and organizations with accessible, AI-enabled healthcare solutions.
          </Reveal>
        </div>

        {/* ── FEATURE GRID (GLASS CARDS WITHOUT HEAD) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
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

              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-semibold  text-body-lg text-white mb-2">
                  {feature.title}
                </h3>

                <p className=" text-white">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}