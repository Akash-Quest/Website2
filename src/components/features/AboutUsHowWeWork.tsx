'use client';

import React from 'react';
import Image from 'next/image';

export default function AboutUsHowWeWork() {
  const steps = [
    {
      title: 'Senior-led, lean teams',
      desc: 'Every engagement is led day-to-day by a partner not staffed and forgotten.',
    },
    {
      title: 'Research-first diagnostics',
      desc: 'We start with primary data and our proprietary research stack, not templated frameworks.',
    },
    {
      title: 'Build-with, not build-for',
      desc: 'We work alongside your teams so capability stays in the house after we leave.',
    },
    {
      title: 'Outcome-linked economics',
      desc: 'Where it fits, we tie our fees to the impact metrics that matter to you.',
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF]  font-['Inter_Tight'] ">
      {/* Updated to max-w-[1920px] as per your design requirement */}
      <div className="page-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* ── LEFT PANEL: Custom Sized Image Container ── */}
        {/* Added explicit custom constraints [695px] x [729px] safely with Tailwind bracket schema */}
        <div className=" w-full relative rounded-lg aspect-[695/729] overflow-hidden lg:sticky lg:top-8">
          <Image
            src="/AboutUs/AboutUsHww.png" 
            alt="Embedded Teams Working together"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* ── RIGHT PANEL: Main Content + Aligned Steps List ── */}
        <div className=" flex flex-col items-start w-full">
          
          {/* Eyebrow Tag */}
          <span className="font-semibold text-primary mb-3">
            How we work
          </span>

          {/* Main Typography Header Block */}
          <h2 className=" font-semibold ">
            Embedded Teams. Senior Partners.{' '}
            <em className="font-semibold">
              Outcomes On The Line.
            </em>
          </h2>

          {/* Steps Rows List Container - Perfectly Aligned */}
          <div className="w-full flex flex-col border-t border-[#03030F]/10 divide-y divide-[#03030F]/10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="py-6 flex flex-col gap-1.5 transition-all duration-200 hover:pl-2 group"
              >
                <h3 className="font-semibold text-body-xl text-[#03030F]  transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="tracking-wide leading-snug text-muted">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
