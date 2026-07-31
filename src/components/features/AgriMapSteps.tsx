'use client';

import React from 'react';
import { Database, Monitor, BrainCircuit, SendHorizontal } from 'lucide-react';

export default function AgriMapSteps() {
  const steps = [
    {
        num: '1.',
        title: 'Data Ingestion',
        desc: 'Pulls from DSE crop reports, ICAR variety registry, IIWBR/IPR seed databases, and BAMETI surveys on a daily cadence.',
        icon: <Database size={22} className="text-[#1D1EE3]" />,
        offsetClass: 'lg:translate-y-0', 
    },
    {
        num: '2.',
        title: 'Geo-computation',
        desc: 'Data is geocoded to district and block polygons. NDVI satellite passes are fused with ground-truth records automatically.',
        icon: <Monitor size={22} className="text-[#1D1EE3]" />,
        offsetClass: 'lg:translate-y-[116px]', 
    },
    {
        num: '3.',
        title: 'Intelligence Layer',
        desc: 'KrishiScore and SRR algorithms run on each update cycle. Alerts are triggered when thresholds are breached.',
        icon: <BrainCircuit size={22} className="text-[#1D1EE3]" />,
        offsetClass: 'lg:translate-y-[20px]', 
    },
    {
        num: '4.',
        title: 'Advisory Dispatch',
        desc: 'Officers send targeted WhatsApp advisories in Hindi to farmers in critical blocks directly from the dashboard.',
        icon: <SendHorizontal size={22} className="text-[#1D1EE3]" />,
        offsetClass: 'lg:translate-y-[116px]', 
    },
    ];

  return (
    <section id="how-it-works" className="w-full bg-[#F7F5F1] font-['Inter_Tight'] overflow-hidden relative select-none">
      <div className="page-container mx-auto flex flex-col items-center relative z-10 w-full">
        
        {/* ── HEADER STRINGS MODULE ── */}
        <div className="text-center mb-24 max-w-3xl">
          <p className="font-medium text-primary tracking-wide mb-3 block">
            How It Works
          </p>
          <h2 className="font-semibold">
            From Raw Data To Field <em className="font-semibold ">Action</em>
          </h2>
          <p className="text-gray-600 mt-5 max-w-xl mx-auto leading-snug tracking-wide">
            AgriMap pulls from 6 authoritative data sources and surfaces insights that are ready to act on not just read.
          </p>
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
                d="M243.761 154.243C259.667 87.0643 218.102 19.7114 150.924 3.80571C83.7459 -12.1 16.393 29.4646 0.487259 96.6429" 
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
                transform="translate(0, 35)"
              />
            </svg>
          </div>

          {/* ── MAIN HORIZONTAL GRID RUNWAY ── */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div 
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
                <div className="flex flex-col gap-2 max-w-[280px]">
                  <h3 className="font-semibold text-body-xl text-[#03030F] transition-colors duration-200">
                    <span className="font-semibold">{step.num}</span> {step.title}
                  </h3>
                  <p className="text-muted leading-snug tracking-wide">
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