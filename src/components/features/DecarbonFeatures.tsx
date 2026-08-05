'use client';
 
import React from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
 
export default function DecarbonFeatures() {
  const useCases = [
    {
      title: 'AI-Powered Climate Project Builder',
      desc: 'Transform climate project ideas into structured, finance-ready opportunities using AI-enabled workflows.',
      image: '/Productsoln/IGUse1.jpg', 
    },
    
    {
      title: "Climate Finance Documentation",
      desc: 'Streamline the preparation of project and climate finance documentation, reducing manual effort and accelerating project development.',
      image: '/Productsoln/IGUse2.jpg', 
    },
    {
      title: "Feasibility & Climate Risk Assessment",
      desc: 'Assess project feasibility and climate-related risks to support stronger project planning and financing decisions.',
      image: '/Productsoln/IGUse3.jpg', 
    },
    {
      title: "Digital MRV",
      desc: 'Enable digital monitoring, reporting, and verification workflows for greater transparency and reliable climate project data.',
      image: '/Productsoln/IGUse4.jpg', 
    },
    {
      title: "Sovereign Data & National Ownership",
      desc: 'Enable governments and national stakeholders to maintain greater ownership and control over climate project data and digital MRV processes.',
      image: '/Productsoln/IGUse5.jpg', 
    },
    {
      title: 'Investor & Financing Partner Matching',
      desc: 'Connect eligible climate projects with relevant investors, development finance institutions, and other financing partners.',
      image: '/Productsoln/IGUse6.jpg', 
    },
    
    
  ];
 
  return (
    <section className="w-full bg-[#FFFFFF]  font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <Reveal as="span" variant="upSm" custom={0} className="font-semibold text-primary ">
              Platform Features
            </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-5 mb-5 gap-6 items-start justify-between w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">

            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
             The Digital Infrastructure Behind  <em className="font-semibold">Climate Finance</em>
            </Reveal>
          </div>
          <div className="lg:col-span-5 pb-2">
            <Reveal as="p" variant="upSm" custom={2} className="tracking-wide leading-snug text-muted max-w-full">
              Explore an integrated digital ecosystem that streamlines climate project development, finance, MRV, investment, and sovereign climate data management.
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
              <div className="w-full flex flex-col gap-4 flex-grow justify-start">
                
                {/* Meta Typography Wrapper */}
                <div className="flex flex-col gap-2">
                  
                  {/* Headline Title */}
                  <h3 className="font-semibold text-body-xl">
                    {item.title}
                  </h3>
                  {/* Paragraph Context Body */}
                  <p className=" leading-snug tracking-wide text-muted">
                    {item.desc}
                  </p>
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}