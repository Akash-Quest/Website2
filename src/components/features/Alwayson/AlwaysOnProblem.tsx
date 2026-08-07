'use client';

import React from 'react';
import { TickSquare, CloseSquare } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function ProblemStatement() {
  const withoutSkyquest = [
    
    "A separate app or portal for every department transport, land, tourism, grievances",
    "Long queues at government offices just to check a status",
    "No single number citizens can trust for every service",
    "No single number citizens can trust for every service",
    "Language and literacy barriers exclude rural citizens",
    "Departments have no real-time visibility into citizen demand",
    "Emergency alerts and advisories reach people too late"
 
  ];

  const withSkyquest = [

    "One government-verified WhatsApp number for every department",
    "AI handles applications, certificates, and status checks conversationally",
    "8+ Indian languages, voice-assisted for low-literacy citizens",
    "Real-time project, grievance, and emergency dashboards for officials",
    "Disaster alerts and advisories pushed instantly, at population scale",
    "Proven at state scale 300+ live services, 12M+ citizens engaged"
  ];

  return (
    <section className="w-full bg-[background ">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER BLOCK ── */}
        <Reveal as="span" variant="upSm" custom={0} className="font-medium text-primary tracking-wide text-body-sm ">
              The Problem We Solve
            </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mt-2 mb-15">
          <div className="lg:col-span-8 flex flex-col gap-3">

            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold text-[#03030F]]">
             Public Services Are Scattered <br />Across A Dozen <em className="font-semibold ">Apps And Offices.</em>
            </Reveal>
          </div>
          <div className="lg:col-span-4 ">
            <Reveal as="p" variant="upSm" custom={2} className="tracking-wide leading-snug text-muted max-w-full">
              Qualified doctors are concentrated in cities. Patients in remote areas face hours of travel, language barriers, and no way to get a triage before arriving. AlwaysON fixes this through the one platform everyone already has.
            </Reveal>
          </div>
        </div>

        {/* ── COMPARISON CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* LEFT CARD: Without Skyquest Labs */}
          <Reveal as="div" variant="left" className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-body-2xl text-[#03030F] pb-2 border-b border-gray-200">
              Without AlwaysOn
            </h3>

            <div className="flex flex-col border-b border-gray-200">
              {withoutSkyquest.map((item, index) => (
                <Reveal
                  as="div"
                  variant="upSm"
                  custom={index}
                  key={index}
                  className="flex items-center gap-3.5 py-3.5 border-b border-gray-200 last:border-b-0"
                >
                  <div className="shrink-0 text-red-500">
                    <CloseSquare size={20} color="red" className="stroke-[1.75]" />
                  </div>
                  <p className=" tracking-wide leading-snug text-muted">
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* RIGHT CARD: With Skyquest Labs */}
          <Reveal as="div" variant="right" className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-body-2xl text-[#03030F] pb-2 border-b border-gray-200">
              With AlwaysOn
            </h3>

            <div className="flex flex-col border-b border-gray-200">
              {withSkyquest.map((item, index) => (
                <Reveal
                  as="div"
                  variant="upSm"
                  custom={index}
                  key={index}
                  className="flex items-center gap-3.5 py-3.5 border-b border-gray-200 last:border-b-0"
                >
                  <div className="shrink-0 text-emerald-600">
                    <TickSquare size={20} color="green" className="stroke-[1.75]" />
                  </div>
                  <p className=" tracking-wide leading-snug text-muted">
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}