"use client";

/**
 * AgriPath "how it works" — the five-step workflow, mirroring AgriMapSteps'
 * staggered layout with dashed arc connectors.
 */

import React from "react";
import {
  FileText,
  Layers,
  ClipboardList,
  ShieldCheck,
  Send,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AgriPathSteps() {
  const steps = [
    {
      num: "1.",
      title: "Technology Profile",
      desc: "Add technology details and existing data.",
      icon: <FileText size={22} className="text-[#1D1EE3]" />,
      offsetClass: "lg:translate-y-0",
    },
    {
      num: "2.",
      title: "Agroclimatic Match",
      desc: "Score and rank suitable target zones.",
      icon: <Layers size={22} className="text-[#1D1EE3]" />,
      offsetClass: "lg:translate-y-[116px]",
    },
    {
      num: "3.",
      title: "Regulatory Pathway",
      desc: "Identify authorities, permits, certificates, and documents.",
      icon: <ClipboardList size={22} className="text-[#1D1EE3]" />,
      offsetClass: "lg:translate-y-0",
    },
    {
      num: "4.",
      title: "Go-To-Market Framework",
      desc: "Build a phased entry plan with milestones and contacts.",
      icon: <ShieldCheck size={22} className="text-[#1D1EE3]" />,
      offsetClass: "lg:translate-y-[116px]",
    },
    {
      num: "5.",
      title: "Market Action Plan",
      desc: "Export the final dossier and track deployment progress.",
      icon: <Send size={22} className="text-[#1D1EE3]" />,
      offsetClass: "lg:translate-y-0",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#F7F5F1] font-['Inter_Tight'] overflow-hidden relative select-none"
    >
      <div className="page-container mx-auto flex flex-col items-center relative z-10 w-full">
        {/* ── HEADER ── */}
        <div className="text-center mb-24 max-w-3xl">
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="font-medium text-primary tracking-wide mb-3 block"
          >
            How It Works
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold">
            From Technology Profile To{" "}
            <em className="font-semibold">Market Action</em>
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="text-gray-600 mt-5 max-w-xl mx-auto leading-snug tracking-wide"
          >
            Five steps carry a technology from a first description to a dossier a
            regulatory consultant or in-country partner can act on directly.
          </Reveal>
        </div>

        {/* ── TIMELINE ── */}
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
                        transform="translate(0, -25)"
                      />
                      <path 
                        d="M319.477 329.877C344.771 373.687 400.791 388.698 444.601 363.404C488.411 338.11 503.421 282.09 478.127 238.28" 
                        stroke="#1D1EE3" 
                        strokeOpacity="0.5" 
                        strokeWidth="1.5"
                        strokeDasharray="10 10"
                        transform="translate(0, 25)"
        
                      />
                      <path 
                        d="M884.477 329.877C909.771 373.687 965.791 388.698 1009.6 363.404C1053.41 338.11 1068.42 282.09 1043.13 238.28" 
                        stroke="#1D1EE3" 
                        strokeOpacity="0.5" 
                        strokeWidth="1.5"
                        strokeDasharray="10 10"
                        transform="translate(0, 25)"
                      />
                    </svg>
                  </div>
        
                  {/* ── MAIN HORIZONTAL GRID RUNWAY ── */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                    {steps.map((step, idx) => (
                      <Reveal
                        as="div"
                        variant="upSm"
                        custom={idx}
                        key={idx}
                        className={`flex flex-col items-start transition-all duration-300 group ${step.offsetClass}`}
                      >
                        {/* Vuesax Box Icon Wrapper Frame */}
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-200/60 shadow-sm mb-6 shrink-0 transition-all duration-300">
                          {step.icon}
                        </div>
        
                        {/* Typography Stack */}
                        <div className="flex flex-col gap-2 max-w-[280px]">
                          <h3 className="font-semibold text-body-xl text-[#03030F] tracking-wide">
                            <span>{step.num}</span> {step.title}
                          </h3>
                          <p className="font-normal tracking-wide leading-snug text-muted">
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