'use client';

import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function AlwaysOnWIF() {
  const features = [
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PATIENT',
      title: 'Every Citizen',
      desc: 'Certificates, grievances, transport, tourism, schemes and more, in their own language, via WhatsApp.',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'CLINICIAN',
      title: 'Government Department',
      desc: 'Automates applications and status queries, cutting office load and manual processing time.',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'ADMIN',
      title: 'State Administrator',
      desc: 'Cross-department visibility project delays, grievance volume, and emergency response in one view.',
    },
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'GOV',
      title: 'Tourism Board',
      desc: 'Manages Yatra registrations, e-passes, and real-time tourist safety alerts at scale.',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'GOV',
      title: 'Emergency Response Team',
      desc: 'Coordinates disaster alerts, evacuation centres, and incident tracking across districts.',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      head: 'PARTNER',
      title: 'NGO / Programme Partner',
      desc: 'Campaign integration, awareness messaging, and programme uptake tracking on one channel.',
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
            Every Actor In The Public {" "}
            <em className="font-semibold text-white">Service</em> <br />
            <em className="font-semibold text-white">System.</em>
          </Reveal>
          <Reveal as="p" variant="upSm" custom={2} className="text-white/80 mt-4 tracking-wide leading-snug max-w-[60%] mx-auto ">
            AlwaysON serves citizens, departments, administrators, and partners each with their own tailored access.
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
                <span className="text-body-xs font-medium tracking-wide text-white/70">
                  {feature.head}
                </span>
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