'use client';

import Script from 'next/script';
import React from 'react';
import { Gps, Routing, ClipboardText, ShieldTick } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function InspectGlobalSteps() {
  const steps = [
    {
        num: '1.',
        title: 'Ingest every source',
        desc: 'Satellite passes (Sentinel, Planet, Landsat), GPS telemetry, IoT sensor streams, drone orthomosaics, and site cameras are pulled in continuously, on their own native schedules.',
        icon: <Gps size={22} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
        offsetClass: 'lg:translate-y-0', 
    },
    {
        num: '2.',
        title: 'Run AI detection & classification',
        desc: 'Computer vision models (YOLOv8, SAM, SatLas) detect and count equipment, vehicles, and structures. GPS streams are classified into activity types grading, transport, idle, breakdown.',
        icon: <Routing size={22} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
        offsetClass: 'lg:translate-y-[116px]', 
    },
    {
        num: '3.',
        title: 'Cross-check & flag gaps',
        desc: 'Every detection is matched against the equivalent reading from other sources. Mismatches "12 light vehicles on satellite vs 14 on GPS" are surfaced as disagreements, not hidden.',
        icon: <ClipboardText size={22} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
        offsetClass: 'lg:translate-y-[20px]', 
    },
    {
        num: '4.',
        title: 'Score , certify & alert',
        desc: 'A weighted fusion score is computed per site. Verified milestones generate blockchain certificates; environmental or safety threshold breaches push alerts to the right role immediately.',
        icon: <ShieldTick size={22} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
        offsetClass: 'lg:translate-y-[116px]', 
    },
    ];

  return (
    <section className="w-full bg-[#F7F5F1] font-['Inter_Tight'] overflow-hidden relative ">
      <div className="page-container mx-auto flex flex-col items-center relative z-10 w-full">
        
        {/* ── HEADER STRINGS MODULE ── */}
        <div className="text-center mb-24 max-w-3xl">
          <Reveal as="p" variant="upSm" custom={0} className=" text-primary tracking-wide  mb-3 block">
            How It Works
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold">
            From Raw Signal To Verified <br/><em className="font-semibold ">Record</em>
          </Reveal>
          <Reveal as="p" variant="upSm" custom={2} className="text-gray-600 mt-5 tracking-wide max-w-2xl mx-auto leading-snug">
            Four stages turn scattered sensor and imagery feeds into a single number that funders, regulators, and operators can act on.
          </Reveal>
        </div>

        {/* ── PROCESS STEPS TIMELINE CONNECTOR BLOCK ── */}
        <div className="w-full relative min-h-[450px] max-w-full mx-auto">
          
          {/* ── 🛠️ COMPLEX VECTOR ARCHS (Hidden on mobile, fluid on desktop) ── */}
          <div className="absolute top-0 left-0 w-full h-[404px] pointer-events-none hidden lg:block z-0 select-none">
            <svg 
              width="972" 
              height="404" 
              viewBox="0 0 972 404" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              <path 
                d="M243.761 149.243C259.667 82.0643 218.102 14.7114 150.924 -1.19429C83.7459 -17.1 16.393 24.4646 0.487259 91.6429"
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
                transform="translate(0, -25)"
              />
              <path 
                d="M967.761 154.243C983.667 87.0643 942.102 19.7114 874.924 3.80571C807.746 -12.1 740.393 29.4646 724.487 96.6429" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
                transform="translate(0, -25)"
              />
              <path 
                d="M651.761 249.005C667.667 316.184 626.102 383.537 558.924 399.442C491.746 415.348 424.393 373.783 408.487 306.605" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
                transform="translate(0, 105)"
              />
            </svg>
          </div>

          {/* ── MAIN HORIZONTAL GRID RUNWAY ── */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <Reveal
                as="div"
                variant="upSm"
                custom={idx}
                key={idx}
                className={`flex flex-col items-start transition-all duration-300 group ${step.offsetClass}`}
              >
                {/* Vuesax Box Icon Wrapper Frame */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm mb-6 transition-all duration-300 ">
                  <div className="transition-colors duration-300 ">
                    {step.icon}
                  </div>
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col gap-2 max-w-full">
                  <h3 className="font-semibold text-[#03030F] text-body-xl transition-colors duration-200">
                    {step.num}    {step.title}
                  </h3>
                  <p className="tracking-wide text-muted leading-snug pt-2">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}