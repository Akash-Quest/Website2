'use client';

import React from 'react';
import { TickSquare, CloseSquare } from 'iconsax-react'; 

export default function ProblemStatement() {
  const withoutSkyquest = [
    
    "Patients travel hours to learn they need a different specialist",
    "Language barriers block clinical communication in local languages",
    "No triage system all cases treated with same urgency regardless of severity",
    "Diagnostic reports are physical, slow, and inaccessible from remote areas",
    "Government health schemes are unknown to most rural citizens",
    "Doctors have no visibility into incoming patient load or case severity",
    "Emergency cases identified too late no real-time escalation system",
  ];

  const withSkyquest = [
    
    "AI triage on WhatsApp patients get guidance before leaving home",
    "8 local languages full clinical conversations in the patient's mother tongue",
    "Severity-based routing urgent cases escalated instantly to specialists",
    "Digital diagnostic reports delivered by WhatsApp, SMS, or email instantly",
    "Health schemes, facility locator, and doctor search built into the conversation",
    "Live dashboard doctors and government monitor case load in real time",
    "Automated escalation alerts urgent cases flagged immediately to physicians",
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
            <h2 className="font-semibold text-[#03030F]]">
              Healthcare is out of reach for <br/>Rural And <em className="font-semibold ">Semi-Urban India.</em>
            </h2>
          </div>
          <div className="lg:col-span-4 ">
            <p className="tracking-wide leading-snug text-muted max-w-full">
              Qualified doctors are concentrated in cities. Patients in remote areas face hours of travel, language barriers, and no way to get a triage before arriving. AlwaysON fixes this through the one platform everyone already has.
            </p>
          </div>
        </div>

        {/* ── COMPARISON CARDS GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT CARD: Without Skyquest Labs */}
          <div className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 border border-gray-200/60 shadow-sm flex flex-col gap-6">
            <h3 className="font-semibold text-[#03030F] pb-2 border-b border-gray-200">
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
            <h3 className="font-semibold text-[#03030F] pb-2 border-b border-gray-200">
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