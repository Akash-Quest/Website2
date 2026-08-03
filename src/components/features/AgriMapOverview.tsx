'use client';

import Script from 'next/script';
import React from 'react';
import Image from 'next/image';
import { Wind, Pet, Link2, CloudDrizzle } from 'iconsax-react';

export default function AgriMapOverview() {
  const features = [
    {
      icon: <Wind size={40} variant="Linear" className="text-primary stroke-current transform -rotate-90" />,
      title: 'Block-level Granularity',
      desc: 'Drill from state overview down to individual blocks in a click. Every polygon on the map is a live data point, not an estimate.',
    },
    {
      icon: <Pet size={40} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Multi-layer Intelligence',
      desc: 'Combine SRR heatmaps with NDVI satellite, pest hotspots, weather, and market prices all on the same canvas.',
    },
    {
      icon: <Link2 size={40} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Direct Farmer Advisory',
      desc: 'Send personalized Hindi advisories to registered farmers via WhatsApp and Twilio from inside the dashboard, in seconds.',
    },
    {
      icon: <CloudDrizzle size={40} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Variety Recommendation Engine',
      desc: 'Surfaces ICAR-backed new varieties with yield benchmarks and replaces outdated seeds, mapped to the specific zone and season.',
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1] font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col gap-1">
        
        {/* ── TOP HEADLINE BLOCK ── */}
        <span className=" font-medium text-primary tracking-wide">
              Product Overview
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-start mt-5 mb-5">
          <div className="lg:col-span-7 flex flex-col gap-3">
            
            <h2 className="font-semibold ">
              One Platform For The Entire Seed <em className="font-semibold ">Ecosystem</em>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className=" tracking-wide leading-snug text-[#03030F]/70 ">
              AgriMap consolidates fragmented agricultural data from ICAR variety registries to district-level seed outlets into a single, actionable intelligence layer that decision-makers can act on the same day.
            </p>
          </div>
        </div>

        {/* ── CORE FEATURES WRAPPER GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start w-full">
          
          {/* LEFT SIDE: Image Container (Aligned to Right Content Height + Edge Bleed) */}
          <div className="lg:col-span-6 w-full max-w-[695px] h-[480px] relative rounded-[20px] bg-[#1D1EE3]/10 overflow-hidden shadow-sm group border border-gray-200/50 flex justify-end items-end pt-8 pl-8">
            {/* Inner Card Layer: Bottom and Right touching the outer container boundaries (0 spacing) */}
            <div className="w-full h-full relative rounded-tl-[16px] overflow-hidden bg-white shadow-md">
              <Image
                src="/Productsoln/AgriOver.png"
                alt="Redesign Agri Dashboard Overview Mock"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 695px"
                className="object-cover object-left-top"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Features List (Vertical Distribution to Match Left Panel) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 w-full max-w-[695px] h-[480px] py-1">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-5 group transition-all duration-300"
              >
                {/* Icon Box */}
                <div className="w-23 h-23 shrink-0 bg-white rounded-[20px] flex items-center justify-center border border-[#03030F]/5 shadow-sm transition-all duration-300">
                  <div className="transition-colors duration-300 text-[#1D1EE3]">
                    {item.icon}
                  </div>
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col min-h-[80px]">
                  <h3 className="font-semibold text-body-xl justify-center">
                    {item.title}
                  </h3>
                  <p className="tracking-wide leading-snug text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}