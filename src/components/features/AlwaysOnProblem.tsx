'use client';

import React from 'react';
import { TickSquare, CloseSquare } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function ProblemStatement() {
  const withoutSkyquest = [
    
    "Limited access to timely healthcare guidance",
    "Difficulty identifying the right level of care",
    "Language barriers in healthcare communication",
    "Delays in clinical triage and referrals",
    "Limited visibility into patient assessments and escalated cases"
 
  ];

  const withSkyquest = [
    
    "Evaluates patient-reported symptoms and provides AI-assisted clinical guidance.",
    "Enables patients to communicate in supported local languages for a more accessible healthcare experience.",
    "Helps assess urgency and prioritize cases based on reported symptoms and available information.",
    "Supports escalation of relevant cases to healthcare professionals for further assessment."
  ];

  return (
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER BLOCK ── */}
        <Reveal as="span" variant="upSm" custom={0} className="font-medium text-primary tracking-wide ">
              The Problem We Solve
            </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mt-5 mb-15">
          <div className="lg:col-span-8 flex flex-col gap-3">

            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold text-[#03030F]]">
              Making Healthcare Access <br /> Faster and <em className="font-semibold ">More Accessible</em>
            </Reveal>
          </div>
          <div className="lg:col-span-4 ">
            <Reveal as="p" variant="upSm" custom={2} className="tracking-wide leading-snug text-muted max-w-full">
              AlwaysON helps bridge these gaps through an accessible digital healthcare experience that combines AI-assisted assessment, multilingual conversations, rapid triage, and expert referrals.
            </Reveal>
          </div>
        </div>

        {/* ── COMPARISON CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* LEFT CARD: Without Skyquest Labs */}
          <Reveal as="div" variant="left" className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-body-2xl text-[#03030F] pb-2 border-b border-gray-200">
              Key Challenges
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
              Solutions
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