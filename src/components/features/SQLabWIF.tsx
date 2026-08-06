'use client';
 
import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
 
export default function SQLabWIF() {
  const useCases = [
    {
      tag: 'Hospitals',
      title: 'Any Size From Clinics To Multi-Specialty',
      desc: 'Set up a full-fledged in-house pathology lab within no time.',
      image: '/Productsoln/SqLab01.jpg', 
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
      image: '/Productsoln/SqLab02.jpg',
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
      image: '/Productsoln/SqLab03.jpg',
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
    <section className="w-full bg-[#FFFFFF]  font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <Reveal as="span" variant="upSm" custom={0} className="font-semibold text-primary ">
              Who It's For
            </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-5 mb-5 justify-between w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">

            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
              Built For Every Stakeholder<br />In <em className="font-semibold">The Diagnostic Chain.</em>
            </Reveal>
          </div>
          <div className="lg:col-span-5 pb-2">
            <Reveal as="p" variant="upSm" custom={2} className="tracking-wide leading-snug text-muted max-w-full">
              Whether you're a hospital administrator, a technician running a local lab, or a doctor waiting on results Skyquest Labs was designed around your workflow.
            </Reveal>
          </div>
        </div>

        {/* ── 🛠️ FIXED: 3-COLUMN VERTICAL STACK MATRIX GRID (As per your Image) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
          {useCases.map((item, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
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
                  <span className="font-semibold  text-primary ">
                    {item.tag}
                  </span>
                  {/* Headline Title */}
                  <h3 className="font-semibold  text-body-xl min-h-[50px]">
                    {item.title}
                  </h3>
                  {/* Paragraph Context Body */}
                  <p className="tracking-wide leading-snug text-muted">
                    {item.desc}
                  </p>
                </div>
 
                {/* Divider List Vectors Section */}
                <div className="flex flex-col border-t border-black/10 pt-1 mt-2">
                  {item.bullets.map((bullet, bIdx) => (
                    <div 
                      key={bIdx} 
                      className="w-full flex items-center tracking-wide leading-snug text-muted border-b border-black/10 py-3 last:border-none last:pb-0"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}