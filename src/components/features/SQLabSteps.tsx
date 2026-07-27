'use client';

import React from 'react';
import { Gps, Routing, ClipboardText, ShieldTick } from 'iconsax-react';

export default function SQLabSteps() {
  const steps = [
    {
      num: '1.',
      title: 'Sample Collected',
      desc: 'Lab technician collects patient sample at the local lab no transport needed.',
      icon: <Gps size={22} color="#1D1EE3" variant="Linear" />,
      offsetClass: 'lg:translate-y-0', 
    },
    {
      num: '2.',
      title: 'Machine Integration',
      desc: 'All lab machines push results automatically to the LIMS no manual entry.',
      icon: <Routing size={22} color="#1D1EE3" variant="Linear" />,
      offsetClass: 'lg:translate-y-[116px]', 
    },
    {
      num: '3.',
      title: 'Pathologist Connected',
      desc: 'A qualified MD pathologist reviews results remotely via the Skyquest platform.',
      icon: <ClipboardText size={22} color="#1D1EE3" variant="TwoTone" />,
      offsetClass: 'lg:translate-y-[20px]', 
    },
    {
      num: '4.',
      title: 'Report Verified',
      desc: 'AI flags anomalies. Pathologist signs off. QC validation complete in minutes.',
      icon: <ShieldTick size={22} color="#1D1EE3" variant="TwoTone" />,
      offsetClass: 'lg:translate-y-[116px]', 
    },
    {
      num: '5.',
      title: 'Delivered Instantly',
      desc: 'Report sent via WhatsApp, SMS, and Email to patient and referring doctor simultaneously.',
      icon: <ClipboardText size={22} color="#1D1EE3" variant="TwoTone" />,
      offsetClass: 'lg:translate-y-[20px]', 
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1] py-24 md:py-32 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight'] overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center relative z-10 w-full">
        
        {/* ── HEADER STRINGS MODULE ── */}
        <div className="text-center mb-24 max-w-3xl">
          <span className="text-sm font-semibold text-[#1D1EE3] tracking-wider mb-3 block">
            How It Works
          </span>
          <h2 className="font-semibold text-3xl sm:text-5xl md:text-[52px] tracking-tight text-[#03030F] leading-tight">
            Five Steps From Sample<br /> To <em className="font-semibold">Signed Report</em>
            
          </h2>
          <p className="text-gray-600 mt-5 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            The entire diagnostic workflow happens digitally. The sample stays put. The data moves at the speed of the internet.
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
              className="w-full h-full"
            >
              <path 
                d="M175.272 119.513C190.414 71.2446 163.56 19.8405 115.292 4.69841C67.0236 -10.4437 15.6195 16.4103 0.477372 64.6785" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
              />
              <path 
                d="M761.272 119.513C776.414 71.2446 749.56 19.8405 701.292 4.69841C653.024 -10.4437 601.619 16.4103 586.477 64.6785" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
              />
              <path 
                d="M319.477 329.877C344.771 373.687 400.791 388.698 444.601 363.404C488.411 338.11 503.421 282.09 478.127 238.28" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
              />
              <path 
                d="M884.477 329.877C909.771 373.687 965.791 388.698 1009.6 363.404C1053.41 338.11 1068.42 282.09 1043.13 238.28" 
                stroke="#1D1EE3" 
                strokeOpacity="0.5" 
                strokeWidth="1.5"
                strokeDasharray="10 10"
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
                <div className="flex flex-col gap-2 max-w-[280px]">
                  <h3 className="text-xl font-bold text-[#03030F] tracking-tight">
                    <span className="text-[#1D1EE3] font-semibold mr-1">{step.num}</span> {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-normal text-[#03030F]/70">
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