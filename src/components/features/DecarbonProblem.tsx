'use client';

import React from 'react';
import { TickSquare, CloseSquare } from 'iconsax-react'; 

export default function ProblemStatement() {
  const withoutSkyquest = [
    "Climate project concepts are difficult to structure into finance-ready opportunities.",

    "Accessing international climate finance can be complex and time-consuming.",

    "Climate finance documentation requires significant technical expertise.",    

    "MRV processes can be fragmented across projects and stakeholders.", 

    "Governments and project owners need greater visibility into project progress and climate outcomes.", 

    "Climate project developers need better access to investors and financing partners.", 

    "Countries require greater ownership and control over their climate project data.", 

 
  ];

  const withSkyquest = [
    "Transform climate project ideas into structured, finance-ready opportunities.",
    "Evaluate project feasibility, climate risks, and financing potential.",
    "Streamline the preparation of essential project and financing documentation.",
    "Enable transparent monitoring, reporting, and verification of climate project outcomes.",
    "Support access to carbon markets, green finance, and development funding.",
    "Connect eligible climate projects with investors, financial institutions, MRV providers, and other stakeholders.",
    "Connect key climate finance stakeholders through one digital ecosystem."
  ];

  return (
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col">
        <span className=" text-body-sm font-medium text-primary tracking-wide ">
              The Problem We Solve
            </span>
        
        {/* ── HEADER BLOCK ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          <div className="lg:col-span-8 flex flex-col gap-3">
            
            <h2 className="font-semibold text-[#03030F]">
              Turning Climate Ambition into  <em className="font-semibold ">Finance-Ready Action</em>
            </h2>
          </div>
          <div className="lg:col-span-4 ">
            <p className="tracking-wide leading-snug text-muted max-w-full">
              DeCarbonX helps bridge this gap by bringing project onboarding, feasibility assessment, climate finance documentation, digital MRV, funding access, and investor connections into an integrated digital platform.
            </p>
          </div>
        </div>

        {/* ── COMPARISON CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch mt-10">
          
          {/* LEFT CARD: Without Skyquest Labs */}
          <div className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-body-2xl text-[#03030F]  pb-2 border-b border-gray-100">
              Key Challenges
            </h3>
            
            <div className="flex flex-col border-b border-gray-200">
              {withoutSkyquest.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3.5 py-3.5 border-b border-gray-200 last:border-b-0"
                >
                  <div className="shrink-0 text-red-500">
                    <CloseSquare size={20} color="red" className="stroke-[1.75]" />
                  </div>
                  <p className="tracking-wide leading-snug text-muted">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD: With Skyquest Labs */}
          <div className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-body-2xl text-[#03030F]  pb-2 border-b border-gray-100">
              Solutions
            </h3>
            
            <div className="flex flex-col border-b border-gray-200">
              {withSkyquest.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3.5 py-3.5 border-b border-gray-200 last:border-b-0"
                >
                  <div className="shrink-0 text-emerald-600">
                    <TickSquare size={20} color="green" className="stroke-[1.75]" />
                  </div>
                  <p className=" tracking-wide leading-snug text-muted ">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}