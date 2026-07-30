'use client';
 
import React from 'react';
import Image from 'next/image';
 
export default function AlwaysOnPlatform() {
  const useCases = [
    {
      title: 'AI Symptom Assessment',
      desc: 'AI-assisted clinical triage based on symptom input, patient history, and local disease prevalence. Severity scored automatically from mild guidance to urgent escalation.',
      image: '/Productsoln/AlwaysOnP1.png', 
    },
    {
      title: 'Multilingual Conversations',
      desc: 'Clinical-grade conversations in 8 local languages. Patients describe symptoms naturally no medical jargon required. AI translates, interprets, and responds fluently.',
      image: '/Productsoln/AlwaysOnP2.png',
    },
    {
      title: "Digital Capacity Building",
      desc: 'Aggregate health trends per district disease prevalence, seasonal spikes, referral patterns giving government health departments the intelligence to act proactively.',
      image: '/Productsoln/AlwaysOnP3.png',
    },
    {
      title: "Facility & Doctor Finder",
      desc: 'Location-aware search for nearest health facilities, doctors by specialisation, and government health scheme eligibility all inside the WhatsApp conversation.',
      image: '/Productsoln/AlwaysOnP4.png',
    },
    {
      title: "Clinical Dashboard",
      desc: 'Real-time oversight dashboard for doctors, administrators, and government health officers live case counts, severity distribution, referral status, and escalation alerts.',
      image: '/Productsoln/AlwaysOnP5.png',
    },
    {
      title: "Digital Report Delivery",
      desc: 'Diagnostic reports, prescriptions, and follow-up reminders sent directly to the patient over WhatsApp no printing, no physical collection, no delay.',
      image: '/Productsoln/AlwaysOnP6.png',
    },
    {
      title: "Government Scheme Integration",
      desc: 'Citizens can check eligibility for government health schemes, PMJAY, Ayushman Bharat, and state programmes directly through the conversation, in their language.',
      image: '/Productsoln/AlwaysOnP7.png',
    },
    {
      title: "Emergency Management",
      desc: 'Emergency routing for critical cases ambulance dispatch, hospital pre-notification, and family alert all triggered automatically when life-threatening symptoms are detected.',
      image: '/Productsoln/AlwaysOnP8.png',
    },
    {
      title: "Real-Time Expert Referrals",
      desc: 'When AI identifies high-severity symptoms, the patient is automatically connected to an available specialist. Doctor receives full conversation context no repeat history needed',
      image: '/Productsoln/AlwaysOnP9.png',
    },
  ];
 
  return (
    <section className="w-full bg-[#FFFFFF] font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <p className="font-medium text-primary ">
              Platform Features
            </p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-5 mb-15 items-start justify-between w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            <h2 className="font-semibold ">
              Every Tool To Deliver  Healthcare <em className="font-semibold">At Population Scale.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className=" leading-snug tracking-wide text-muted max-w-full">
              AlwaysON is more than a chatbot it's a complete digital health infrastructure layer deployable by any state government in weeks.
            </p>
          </div>
        </div>
 
        {/* ── 🛠️ FIXED: 3-COLUMN VERTICAL STACK MATRIX GRID (As per your Image) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
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