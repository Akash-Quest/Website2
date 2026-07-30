'use client';
 
import React from 'react';
import Image from 'next/image';
 
export default function DecarbonFeatures() {
  const useCases = [
    {
      title: 'AI Project Builder',
      desc: 'Transforms project concepts into structured, finance-ready instruments with national control. AI drafts PDDs, feasibility studies, and co-benefit analyses automatically.',
      image: '/Productsoln/IGUse1.png', 
    },
    {
      title: 'Digital MRV Platform',
      desc: 'Satellite + IoT continuous monitoring across Agriculture, Forestry, Livestock, and Energy sectors. Real-time emission reductions verified and audit-ready.',
      image: '/Productsoln/IGUse2.png',
    },
    {
      title: "Auto Climate Finance Docs",
      desc: 'Full suite of climate finance documentation generated in hours project design documents, VNRs, ITMO agreements, prospectuses, and bond issuance documents.',
      image: '/Productsoln/IGUse3.png',
    },
    {
      title: "Finance Hub & Bonds",
      desc: 'Issue carbon forwards, green bonds, and ITMOs directly from the platform. Built-in structuring for GCF grants, IsDB financing, and private carbon market transactions.',
      image: '/Productsoln/IGUse3.png',
    },
    {
      title: "Global Intelligence Layer",
      desc: 'Country-level carbon market intelligence, NDC alignment scoring, NCMS tracking, and benchmarking against comparable sovereign climate programmes worldwide.',
      image: '/Productsoln/IGUse3.png',
    },
    {
      title: "Investor Matching Engine",
      desc: 'Automated matching of verified projects with the right investors private sector, DFIs, bilateral partners across carbon markets, green bonds, and blended finance.',
      image: '/Productsoln/IGUse3.png',
    },
    {
      title: "Sovereign Data Architecture",
      desc: 'All project data, MRV records, and financial instruments stay inside the country\'s jurisdiction. No data sovereignty compromise. Full integration with national registries.',
      image: '/Productsoln/IGUse3.png',
    },
    {
      title: "Sectors Hub",
      desc: 'Dedicated pipelines per sector Agriculture, Forestry, Livestock, Energy, and more. Each with its own MRV methodology, project templates, and finance pathways.',
      image: '/Productsoln/IGUse3.png',
    },
    {
      title: "Digital Capacity Building",
      desc: 'Built-in training modules for government staff, project developers, and MRV providers. Empowers local ownership without dependency on international consultants.',
      image: '/Productsoln/IGUse3.png',
    },
  ];
 
  return (
    <section className="w-full bg-[#FFFFFF]  font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <span className="font-semibold text-primary ">
              Platform Features
            </span>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-5 mb-5 gap-6 items-start justify-between w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            <h2 className="font-semibold ">
              Every Tool A Government <br/> Needs to <em className="font-semibold">Mobilise Climate <br/> Finance.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="tracking-wide leading-snug text-muted max-w-full">
              DeCarbonX ships with the full stack from project builder to bond issuance deployable as a sovereign national system in 3–5 months.
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
                  <h3 className="font-semibold text-body-xl">
                    {item.title}
                  </h3>
                  {/* Paragraph Context Body */}
                  <p className=" leading-snug tracking-wide text-muted">
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