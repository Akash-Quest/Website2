'use client';
 
import Script from 'next/script';
import React from 'react';
import Image from 'next/image';
import { Wind, Pet, Link2, CloudDrizzle } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function AgriMapOverview() {
  const features = [
    {
      icon: <Wind size={40} variant="Linear" className="text-primary stroke-current transform- rotate-270" />,
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
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col gap-16">
        
        {/* ── TOP HEADLINE BLOCK ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start pb-8">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <Reveal as="span" variant="left" custom={0} className="font-medium text-primary tracking-wide">
              Product Overview
            </Reveal>
            <Reveal as="h2" variant="left" custom={1} className="font-semibold ">
              One Platform For The Entire Seed <em className="font-semibold ">Ecosystem</em>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <Reveal as="p" variant="right" custom={0} className=" tracking-wide leading-snug text-[#03030F]/70 max-w-full">
              AgriMap consolidates fragmented agricultural data from ICAR variety registries to district-level seed outlets into a single, actionable intelligence layer that decision-makers can act on the same day.
            </Reveal>
          </div>
        </div>
 
        {/* ── 🛠️ FIXED: CORE FEATURES WRAPPER GRID (IMAGE & CONTENT SIDE-BY-SIDE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          
          {/* LEFT SIDE: Interactive Graphical Mock Dashboard Element */}
          <Reveal
            variant="left"
            custom={0}
            className="lg:col-span-6 w-full max-w-[695px] h-[450px] relative rounded-[20px] bg-[#1D1EE3]/10 overflow-hidden shadow-sm group border border-gray-200/50 flex justify-end items-end"
          >
            {/* Dashboard Image Card Layer (Top-Left offset rendering) */}
            <div className="w-[94%] h-[92%] relative rounded-tl-[16px] overflow-hidden bg-white shadow-md">
              <Image
                src="/Productsoln/AgriOver.png"
                alt="Redesign Agri Dashboard Overview Mock"
                fill
                priority
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 695px"
                className="object-cover object-left-top "
              />
            </div>
          </Reveal>

          {/* RIGHT SIDE: Auto layout vertical feature lists stacking */}
          <div className="lg:col-span-6 flex flex-col gap-8 w-full max-w-[695px] h-auto py-1">
            {features.map((item, idx) => (
              <Reveal
                as="div"
                variant="right"
                custom={idx}
                key={idx}
                className="flex items-start gap-5 group"
              >
                {/* Fixed Responsive Square Container Box for Vuesax Core Vectors */}
                <div className="w-20 h-20 shrink-0 bg-white rounded-[20px] flex items-center justify-center border border-[#03030F]/5 shadow-sm transition-all duration-300">
                  <div className="transition-colors duration-300 text-[#1D1EE3]">
                    {item.icon}
                  </div>
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col gap-1.5 pt-1.5">
                  <h4 className="font-semibold ">
                    {item.title}
                  </h4>
                  <p className="tracking-wide leading-snug text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
 
      </div>
    </section>
  );
}