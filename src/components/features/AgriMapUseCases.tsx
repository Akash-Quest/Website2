'use client';

import React from 'react';
import Image from 'next/image';

export default function AgriMapUseCases() {
  const useCases = [
    {
      tag: 'Kharif / Rabi Season',
      title: 'Pre-season Seed Planning',
      desc: 'Identify districts with below-target SRR before the season begins, so departments can prioritize seed distribution and subsidy allocation.',
      image: '/Productsoln/AgriUse1.png',
      bullets: [
        'Spot critical districts below 30% SRR before procurement',
        'Match new variety recommendations to agro-climatic zones',
        'Coordinate with KVKs and seed outlets in advance',
      ],
    },
    {
      tag: 'Agricultural Finance',
      title: 'Crop Loan Risk Assessment',
      desc: 'Banks and NBFCs can assess seed quality, crop health, and historical yield potential before disbursing farm credit by block.',
      image: '/Productsoln/AgriUse2.png',
      bullets: [
        'Layer KrishiScore onto loan applications by geography',
        'Correlate NDVI with repayment risk at block level',
        'Monitor post-disbursement crop health via satellite',
      ],
    },
    {
      tag: 'Emergency Response',
      title: 'Pest & Flood Outbreak Response',
      desc: 'When pest hotspots or flood zones emerge, AgriMap cross-references affected areas with crop and seed data to speed up relief targeting.',
      image: '/Productsoln/AgriUse3.png',
      bullets: [
        'Identify crops at risk within affected polygons',
        'Dispatch advisories to farmers in flood-risk blocks',
        'Track recovery via NDVI change over time',
      ],
    },
    {
      tag: 'Policy Monitoring',
      title: 'Scheme Performance Tracking',
      desc: 'Track how government seed subsidy schemes and new variety promotion programs are translating to actual adoption on the ground.',
      image: '/Productsoln/AgriUse4.png',
      bullets: [
        'Measure SRR change before and after scheme rollout',
        'Identify non-responding districts for focused outreach',
        'Generate evidence-ready reports for ministry review',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] font-['Inter_Tight'] select-none">
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── HEADER LAYOUT BLOCK ── */}
        <span className=" text-primary">
              Use Cases
            </span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full mt-5 mb-5">
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            <h2 className="font-semibold">
              Real Decisions, Real <br />
              <em className="font-semibold">Outcomes</em>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2 ">
            <p className=" tracking-wide leading-snug text-[#03030F]/70 max-w-full">
              From seasonal planning to emergency response, AgriMap fits into the workflows that matter most.
            </p>
          </div>
        </div>

        {/* ── 2x2 CARD MATRIX GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
          {useCases.map((item, idx) => (
            <div 
              key={idx} 
              // Frame 1707483359: padding 24px, gap 20px, bg #F7F5F1, rounded 10px
              className="bg-[#F7F5F1] rounded-[10px] p-6 flex flex-col sm:flex-row items-center sm:items-stretch gap-5 border border-gray-200/20 max-w-[695px] min-h-[377px] w-full mx-auto"
            >
              {/* Left Column: Mask group & Mask Image (292px width x 329px height, rounded 10px) */}
              <div className="w-full sm:w-[42%] min-h-[280px] sm:min-h-[360px] relative rounded-[10px] overflow-hidden bg-[#D9D9D9] shrink-0 self-stretch">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center scale-105" // Isometric pull handles image alignments
                />
              </div>

              {/* Right Column: Frame 1707483329 (width 335px, column stack, gap 20px, flex-grow 1) */}
              <div className="w-full flex flex-col justify-between ">
                
                {/* Upper Text Frame 1707483049 (gap 4px) */}
                <div className="flex flex-col gap-1">
                  {/* Tagline: color #1D1EE3, size 12px, leading 24px */}
                  <p className="font-medium tracking-wide  text-primary">
                    {item.tag}
                  </p>
                  {/* Title: weight 600, size 20px, leading 25px, color #03030F */}
                  <h3 className="font-semibold text-body-xl">
                    {item.title}
                  </h3>
                  {/* Desc: weight 400, size 16px, leading 24px, color rgba(3,3,15,0.7) */}
                  <p className="tracking-wide text-muted leading-snug mt-1 ">
                    {item.desc}
                  </p>
                </div>

                {/* Lower Bullet Frame 1707483360 (gap 6px) */}
                {/* 🛠️ FIXED: Mapped all 4 vectors (top, middle dividers, and bottom border line) */}
                <div className="flex flex-col border-t border-black/20 pt-1 ">
                  <span>{item.bullets.map((bullet, bIdx) => (
                    <div 
                      key={bIdx} 
                      // Bullets: size 16px, leading 24px, height 48px, divider rgba(0,0,0,0.2)
                      className="h-auto w-auto flex items-center leading-snug text-muted border-b border-black/20 pb-1.5 pt-1.5 last:pb-1"
                    >
                      {bullet}
                    </div>
                    
                  ))}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}