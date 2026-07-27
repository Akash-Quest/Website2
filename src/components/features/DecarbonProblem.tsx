'use client';

import React from 'react';
import { TickSquare, CloseSquare } from 'iconsax-react'; 

export default function ProblemStatement() {
  const withoutSkyquest = [
    "Climate project ideas stall at concept no pathway to structured finance",
    "MRV data is manual, unverified, and not trusted by international buyers",
    "Article 6 negotiations require technical capacity most governments lack",
    "Finance documents take months to prepare with expensive consultants",
    "No transparency donors and DFIs can't see where money goes",
    "Project data lives with contractors, not the government",
    "International investors struggle to match with eligible projects",
  ];

  const withSkyquest = [
    "AI converts project concepts into finance-ready structured instruments",
    "Digital MRV provides verified, auditable emission reductions in real time",
    "Article 6 framework built in government retains full corresponding adjustments",
    "Climate finance documents generated automatically in hours, not months",
    "Full transparency dashboard every dollar tracked end to end",
    "Sovereign data architecture all data stays inside the country",
    "Automated investor matching across carbon markets, DFIs, and green bonds",
  ];

  return (
    <section className="w-full bg-[#F7F5F1] py-20 md:py-28 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight']">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* ── HEADER BLOCK ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <span className="font-medium text-primary tracking-wide ">
              The Problem We Solve
            </span>
            <h2 className="font-semibold text-[#03030F]">
              Developing Nations Have   <br className="hidden sm:block" /> Climate Ambition. <em className="font-semibold ">The pipeline <br/> is missing.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 ">
            <p className="tracking-wide leading-snug text-muted max-w-full">
              NDC commitments exist on paper but converting them into bankable projects and accessing Article 6 or GCF finance is slow, expensive, and technically out of reach for most governments.
            </p>
          </div>
        </div>

        {/* ── COMPARISON CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT CARD: Without Skyquest Labs */}
          <div className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#03030F] tracking-tight pb-2 border-b border-gray-100">
              Without Skyquest Labs
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
                  <p className=" text-muted">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD: With Skyquest Labs */}
          <div className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#03030F] tracking-tight pb-2 border-b border-gray-100">
              With Skyquest Labs
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
                  <p className=" text-muted ">
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