'use client';
 
import React from 'react';
import Image from 'next/image';
 
export default function SQLabWIF() {
  const useCases = [
    {
      tag: 'Hospitals',
      title: 'Any Size From Clinics To Multi-Specialty',
      desc: 'Set up a full-fledged in-house pathology lab within no time.',
      image: '/Productsoln/IGUse1.png', 
      bullets: [
        'No more outsourcing full control of your reports',
        'Low setup cost, ROI within 2 years',
        'Insurance / TPA approved reports',
        'Daily report dashboard for seniors and admin',
        'Earn more from in-house lab services',
      ],
    },
    {
      tag: 'Doctors',
      title: 'General practitioners, specialists, referrals',
      desc: 'Faster pathology reports. More walk-ins. Better patient outcomes.',
      image: '/Productsoln/IGUse2.png',
      bullets: [
        'Reports in under 15 minutes act sooner',
        'Results delivered direct to your phone',
        'Refer patients with confidence in turnaround',
        'Digital records accessible any time, anywhere',
        'Increase referrals and walk-in volume',
      ],
    },
    {
      tag: 'Technicians',
      title: "Lab operators and diagnostic staff",
      desc: 'Rapid growth with improved reporting speed and reduced cost.',
      image: '/Productsoln/IGUse3.png',
      bullets: [
        'All machines integrated no manual data entry',
        'Periodic online training included',
        'QC validation built into every workflow',
        'Reduce cost per report significantly',
        'Grow your lab network and capacity',
      ],
    },
        
  ];
 
  return (
    <section className="w-full bg-[#FFFFFF] py-24 md:py-32 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight'] select-none">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-16">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start justify-between w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">
            <span className="font-semibold text-primary text-sm">
              Who It's For
            </span>
            <h2 className="font-semibold ">
              Built For Every Stakeholder<br />In <em className="font-semibold">The Diagnostic Chain.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="text-base md:text-[18px] leading-relaxed text-muted max-w-[460px]">
              Whether you're a hospital administrator, a technician running a local lab, or a doctor waiting on results Skyquest Labs was designed around your workflow.
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
              <div className="w-full flex flex-col gap-4 flex-grow justify-between">
                
                {/* Meta Typography Wrapper */}
                <div className="flex flex-col gap-2">
                  {/* Tagline category selector */}
                  <span className="font-semibold text-xs text-primary ">
                    {item.tag}
                  </span>
                  {/* Headline Title */}
                  <h4 className="font-semibold min-h-[50px]">
                    {item.title}
                  </h4>
                  {/* Paragraph Context Body */}
                  <p className="text-sm font-normal text-muted">
                    {item.desc}
                  </p>
                </div>
 
                {/* Divider List Vectors Section */}
                <div className="flex flex-col border-t border-black/10 pt-1 mt-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <div 
                      key={bIdx} 
                      className="w-full flex items-center text-[13px] md:text-sm font-normal text-muted border-b border-black/10 py-3 last:border-none last:pb-0"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
 
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}