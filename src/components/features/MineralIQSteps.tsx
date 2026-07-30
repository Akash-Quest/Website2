'use client';

import React from 'react';
import { Gps, Routing, ClipboardText, ShieldTick } from 'iconsax-react';

export default function MineralIQSteps() {
  const steps = [
    {
      num: '1.',
      title: 'Satellite Acquisition',
      desc: 'Sentinel-2 captures multispectral imagery over every active Uganda concession on a 5-day cycle.',
      icon: <Gps size={22} color="#1D1EE3" variant="Linear" />,
      offsetClass: 'lg:translate-y-0', 
    },
    {
      num: '2.',
      title: 'NDVI Analysis',
      desc: 'MineralIQ computes vegetation index change, bare-earth exposure, and disturbance trajectories per licence.',
      icon: <Routing size={22} color="#1D1EE3" variant="Linear" />,
      offsetClass: 'lg:translate-y-[116px]', 
    },
    {
      num: '3.',
      title: 'Auto-Flag & Alert',
      desc: 'Boundary breaches, forest loss, and tailings expansion trigger critical alerts graded and timestamped.',
      icon: <ClipboardText size={22} color="#1D1EE3" variant="TwoTone" />,
      offsetClass: 'lg:translate-y-[20px]', 
    },
    {
      num: '4.',
      title: 'Compliance Scoring',
      desc: 'Each licence receives a live compliance score across EIA, Hg, Forest, Royalty, and Boundary dimensions.',
      icon: <ShieldTick size={22} color="#1D1EE3" variant="TwoTone" />,
      offsetClass: 'lg:translate-y-[116px]', 
    },
    {
      num: '5.',
      title: 'Dispatch & Evidence',
      desc: 'Inspectors are dispatched from within the platform. Evidence packs export for enforcement or audit.',
      icon: <ShieldTick size={22} color="#1D1EE3" variant="TwoTone" />,
      offsetClass: 'lg:translate-y-[20px]', 
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1] font-['Inter_Tight'] overflow-hidden relative">
      <div className="page-container mx-auto flex flex-col items-center relative z-10 w-full">
        
        {/* ── HEADER STRINGS MODULE ── */}
        <div className="text-center mb-24 max-w-3xl">
          <span className=" text-[#1D1EE3]  mb-3 block">
            How It Works
          </span>
          <h2 className="font-semibold text-[#03030F] ">
            From Raw Signal to Verified <br />
            <em className="font-semibold">Record</em>
          </h2>
          <p className="text-muted mt-5 mx-auto tracking-wide leading-snug">
            Four stages turn scattered sensor and imagery feeds into a single number that funders, regulators, and operators can act on.
          </p>
        </div>

        {/* ── PROCESS STEPS TIMELINE CONNECTOR BLOCK ── */}
        <div className="w-full relative min-h-[450px]">
          
          {/* ── 🛠️ NEW VECTOR ARCHS (Hidden on mobile, fluid on desktop) ── */}
          <div className="absolute top-0 left-0 w-full h-[377px] pointer-events-none hidden lg:block z-0">
            <svg 
              width="1056" 
              height="377" 
              viewBox="0 0 1056 377" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full overflow-visible"
            >
              <path 
                d="M175.272 119.513C190.414 71.2446 163.56 19.8405 115.292 4.69841C67.0236 -10.4437 15.6195 16.4103 0.477372 64.6785" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
                transform="translate(0, -25)"
              />
              <path 
                d="M761.272 119.513C776.414 71.2446 749.56 19.8405 701.292 4.69841C653.024 -10.4437 601.619 16.4103 586.477 64.6785" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
                transform="translate(0, -15)"
              />
              <path 
                d="M319.477 329.877C344.771 373.687 400.791 388.698 444.601 363.404C488.411 338.11 503.421 282.09 478.127 238.28" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
                transform="translate(0, 45)"
              />
              <path 
                d="M884.477 329.877C909.771 373.687 965.791 388.698 1009.6 363.404C1053.41 338.11 1068.42 282.09 1043.13 238.28" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
                transform="translate(0, 45)"
              />
            </svg>
          </div>

          {/* ── MAIN HORIZONTAL GRID RUNWAY ── */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-start transition-all duration-300 group ${step.offsetClass}`}
              >
                {/* Vuesax Box Icon Wrapper Frame */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200/60 shadow-sm mb-6 shrink-0 transition-all duration-300">
                  {step.icon}
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col gap-2 max-w-full">
                  <h3 className="font-semibold text-body-xl text-[#03030F] ">
                    <span className="font-semibold ">{step.num}</span> {step.title}
                  </h3>
                  <p className="tracking-wide leading-snug text-muted">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}