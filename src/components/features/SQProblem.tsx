'use client';

import React from 'react';
import { TickSquare, CloseSquare } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function ProblemStatement() {
  const withoutSkyquest = [
    "Reports take 24–48 hours to reach doctors and patients",
    "Samples physically transported risk of contamination and loss",
    "No qualified pathologist available locally in rural areas",
    "Outsourcing lab reports adds cost and creates delays",
    "Manual data entry causes errors and compliance risks",
    "No centralised patient history records lost across visits",
    "Hospitals miss revenue from in-house pathology capability",
  ];

  const withSkyquest = [
    "Qualified pathologist report delivered in under 15 minutes",
    "Only data travels samples never leave the lab premises",
    "Remote pathologists connected instantly, anywhere in India",
    "Full in-house pathology setup at low infrastructure cost",
    "All machines integrated zero manual entry, zero errors",
    "5-year cloud-stored patient history accessible anytime",
    "Earn more profit and ROI within 2 years of setup",
  ];

  return (
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER BLOCK ── */}
        <Reveal as="span" variant="upSm" custom={0} className=" text-primary ">
              The Problem We Solve
            </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mt-5 mb-5">
          <div className="lg:col-span-8 flex flex-col gap-3">

            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold  text-[#03030F] ">
              Pathology in India is broken <br className="hidden sm:block" />
              for rural and <em className="font-semibold ">Semi-Urban <br/>Patients.</em>
            </Reveal>
          </div>
          <div className="lg:col-span-4 ">
            <Reveal as="p" variant="upSm" custom={2} className="tracking-wide leading-snug text-muted max-w-full">
              Samples travel for hours, qualified pathologists are scarce outside cities, and delays cost lives. Skyquest Labs changes that without changing the lab.
            </Reveal>
          </div>
        </div>

        {/* ── COMPARISON CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">

          {/* LEFT CARD: Without Skyquest Labs */}
          <Reveal as="div" variant="left" className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-[#03030F] text-body-xl pb-2 border-b border-gray-100">
              Without Skyquest Labs
            </h3>

            <div className="flex flex-col">
              {withoutSkyquest.map((item, index) => (
                <Reveal
                  as="div"
                  variant="upSm"
                  custom={index}
                  key={index}
                  className="flex items-center gap-3.5 py-3.5 border-b border-gray-100 last:border-b-0"
                >
                  <div className="shrink-0 text-red-500">
                    <CloseSquare size={20} color="red" className="stroke-[1.75]" />
                  </div>
                  <p className="tracking-wide  text-[#03030F]/80 leading-snug">
                    {item}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* RIGHT CARD: With Skyquest Labs */}
          <Reveal as="div" variant="right" className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-[#03030F]  text-body-xl pb-2 border-b border-gray-100">
              With Skyquest Labs
            </h3>

            <div className="flex flex-col">
              {withSkyquest.map((item, index) => (
                <Reveal
                  as="div"
                  variant="upSm"
                  custom={index}
                  key={index}
                  className="flex items-center gap-3.5 py-3.5 border-b border-gray-100 last:border-b-0"
                >
                  <div className="shrink-0 text-emerald-600">
                    <TickSquare size={20} color="green" className="stroke-[1.75]" />
                  </div>
                  <p className="tracking-wide  text-[#03030F]/80 leading-snug">
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