'use client';
 
import React from 'react';
import Image from 'next/image';
 
export default function AlwaysOnPlatform() {
  const useCases = [
    {
      title: 'Health & Diagnostics',
      desc: 'AI symptom triage, facility & doctor finder, diagnostic reports, expert referrals.',
      image: '/AlwaysOn/card1.jpg',
    },
    {
      title: 'Transport & Vehicles',
      desc: 'Bus tracking, RTO services, vehicle registration, driving licence renewal and status.',
      image: '/AlwaysOn/card2.jpg',
    },
    {
      title: "Tourism & Yatra",
      desc: 'Char Dham Yatra registration, e-passes, route information, real-time safety updates.',
      image: '/AlwaysOn/card3.jpg',
    },
    {
      title: "Land Records",
      desc: 'Property records, mutation status, land tax lookup and payment via WhatsApp.',
      image: '/AlwaysOn/card4.jpg',
    },
    {
      title: "Grievance Redressal",
      desc: 'Lodge and track complaints across AMA, GWCL, ECG and other utilities end to end.',
      image: '/AlwaysOn/card5.jpg',
    },
    {
      title: "Emergency Management",
      desc: 'Disaster alerts, evacuation centres, incident tracking and response coordination.',
      image: '/AlwaysOn/card6.jpg',
    },
    {
      title: "Citizen Services & Schemes",
      desc: 'Pensions, scholarships, food aid, birth/death certificates, hall tickets and results.',
      image: '/AlwaysOn/card7.jpg',
    },
    {
      title: "Project Monitoring",
      desc: 'Cross-department dashboard for administrators budgets, delays, live status.',
      image: '/AlwaysOn/card8.jpg',
    },
  ];
 
  return (
    <section className="w-full bg-[#FFFFFF] font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <p className="font-medium text-primary ">
              Platform Coverage
            </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 mb-5 items-start justify-between w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            <h2 className="font-semibold ">
              One Platform.<em className="font-semibold">Every<br/> Department</em>
            </h2>
          </div>
          <div className="lg:col-span-5 ">
            <p className=" leading-snug tracking-wide text-muted max-w-full">
              From certificates to emergencies, citizens reach every government function through the same <span className="font-bold">"Hi"</span> .
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