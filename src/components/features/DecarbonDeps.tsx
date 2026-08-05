'use client';
 
import React from 'react';
import Link from 'next/link';
import { Location, Global,} from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';
 
export default function DecarbonDeps() {
  const audienceCards = [
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '● LIVE',
      head2: ' East Africa · Since 2024 · NCMS 2025–2035',
      title: 'Ethiopia',
      desc: '32 active projects · Agriculture, Forestry, Livestock, Energy · Aligned NDC 3.0 · COP32 host 2027 · $47M mobilised',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '◐ IN PROGRESS ',
      head2: 'East Africa · 2025',
      title: 'Kenya',
      desc: 'Article 6.2 bilateral agreements · Clean cooking, reforestation, geothermal · NDC revision pipeline',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '◐ IN PROGRESS',
      head2: ' Central Africa · 2025',
      title: 'Rwanda',
      desc: 'Green bond issuance focus · National carbon registry integration · GCF accreditation pipeline',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '○ PIPELINE',
      head2: ' West Africa · 2026',
      title: 'Ghana',
      desc: 'Article 6.4 mechanism · Gold Standard integration · Cocoa agroforestry MRV',
    },
    {
      icon: <Location size={24} variant="Linear" className="text-black stroke-current" />,
      head: '○ PIPELINE',
      head2: 'Southeast Asia · Since 2026',
      title: 'Indonesia',
      desc: 'Peatland restoration · REDD+ · IsDB co-financing · National carbon exchange integration',
    },
    {
      icon: <Global size={24} variant="Linear" className="text-black stroke-current" />,
      head2: (
    <Link href="/contact" className="hover:underline transition-all">
        Request deployment →
    </Link>
    ),
      title: 'Your Country',
      desc: 'Customised to your NDC, national registry, and reporting framework. Sovereign data. Operational in 3–5 months.',
    },
   
  ];
 
  return (
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-3xl flex flex-col gap-4 Z-20">
          <Reveal as="span" variant="upSm" custom={0} className="text-primary mb-3 block">
            Global Deployments
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
            Sovereign Instances. <br />Country Data<em className="font-Semibold "> Stays In-Country.</em>
            </Reveal>
          <Reveal as="p" variant="upSm" custom={2} className="text-muted max-w-full mx-auto ">
            DeCarbonX deploys as a fully customised national platform integrated with each country's existing registries, NDC frameworks, and reporting requirements. Operational in 3–5 months.
          </Reveal>
        </div>

        {/* ── 🛠️ FIXED: 3x2 RESPONSIVE FLAT CARD GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              className="bg-white rounded-[16px] p-8 flex flex-col gap-4 border border-gray-200/30 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Clean Flat Square Icon Wrapper Box */}
              <div className="w-12 h-12 bg-[#F7F5F1] rounded-xl flex items-center justify-center shrink-0">
                {card.icon}
              </div>

              <div className="w-full flex items-center justify-between text-xs sm:text-sm md:text-base font-semibold text-[#1D1EE3] tracking-wide">
  
                {/* Left Side Group: Blue Dot + LIVE Status */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                                    
                    {/* Head (e.g. "LIVE") */}
                    <span className="text-xs">{card.head}</span>
                </div>

                {/* Right Side Column: Head2 (e.g. "East Africa · Since 2024") */}
                <div className=" text-xs text-right">
                    <span>{card.head2}</span>
                </div>
                </div>
              
              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                {/* Core Component Headline */}
                <h3 className="text-body-xl font-semibold text-[#03030F] ">
                  {card.title}
                 </h3>
                
                {/* Description Context string */}
                <p className="text-muted tracking-wide leading-snug">
                  {card.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}