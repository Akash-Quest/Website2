'use client';
 
import React from 'react';
import Image from 'next/image';
 
export default function AlwaysOnPlatform() {
  const useCases = [
    {
      title: 'AI Symptom Assessment',
      desc: 'AI-assisted assessment helps users describe their symptoms and receive relevant healthcare guidance.',
      image: '/Productsoln/AO1.jpg', 
    },
    {
      title: 'Multilingual Support',
      desc: 'Patients can communicate in supported local languages, helping make digital healthcare services more accessible.',
      image: '/Productsoln/AO2.jpg',
    },
    {
      title: "Real-Time AI Triage",
      desc: 'AI-assisted triage helps identify cases requiring greater attention and supports faster escalation.',
      image: '/Productsoln/AlwaysOnP3.png',
    },
    {
      title: "Expert Referrals",
      desc: 'Relevant cases can be escalated to healthcare professionals for further assessment and support',
      image: '/Productsoln/AO4.jpg',
    },
    {
      title: "Healthcare Dashboard",
      desc: 'Healthcare teams can monitor assessments, escalated cases, alerts, and referrals through a centralized dashboard.',
      image: '/Productsoln/AO5.jpg',
    },
    {
      title: "WhatsApp-Based Access",
      desc: 'AlwaysON delivers healthcare services through WhatsApp, reducing the need for users to download or navigate a separate application.',
      image: '/Productsoln/AO6.jpg',
    },
  ];
 
  return (
    <section className="w-full bg-[#FFFFFF] font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <p className="font-medium text-primary ">
              Platform Features
            </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 mb-5 items-start justify-between w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            <h2 className="font-semibold ">
              AI-Powered Healthcare <br /> <em className="font-semibold">Support</em>
            </h2>
          </div>
          <div className="lg:col-span-5 ">
            <p className=" leading-snug tracking-wide text-muted max-w-full">
              Deliver accessible, AI-assisted healthcare through symptom assessment, multilingual support, real-time triage, and expert referrals.
            </p>
          </div>
        </div>
 
        {/* ── 🛠️ FIXED: 3-COLUMN VERTICAL STACK MATRIX GRID (As per your Image) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
          {useCases.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#F7F5F1] rounded-[16px] p-6 flex flex-col gap-5 border border-gray-200/40 w-full transition-all duration-300 hover:shadow-md"
            >
              {/* Top Section: Full Width Aspect Rounded Image Box */}
              <div className="w-full aspect-[16/10] relative rounded-[10px] overflow-hidden bg-[#D9D9D9] shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 400px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105" 
                />
              </div>
 
              {/* Bottom Content Area Structure */}
              <div className="w-full flex flex-col gap-4 flex-grow justify-start">
                
                {/* Meta Typography Wrapper */}
                <div className="flex flex-col gap-2">
                  
                  {/* Headline Title */}
                  <h3 className="font-semibold text-body-xl text-[#03030F] ">
                    {item.title}
                  </h3>
                  {/* Paragraph Context Body */}
                  <p className=" tracking-wide leading-snug text-muted">
                    {item.desc}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}