'use client';
 
import Script from 'next/script';
import React from 'react';
import Image from 'next/image';
import { TickSquare, Airdrop, Link1, Warning2 } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';


export default function InspectGlobalOverview() {
  const features = [
    {
      icon: <TickSquare size={40} variant="TwoTone" className="text-primary stroke-current" />,
      title: 'Independent verification',
      desc: 'satellite cross-checks self-reported progress',
    },
    {
      icon: <Airdrop size={40} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Disagreement flags',
      desc: 'e.g.Satellite vs Drone:78% vs 82%',
    },
    {
      icon: <Link1 size={40} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Evidence certificates',
      desc: 'blockchain-anchored, ready for tranche releases',
    },
    {
      icon: <Warning2 size={40} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Compliance alerts',
      desc: 'live deforestation, turbidity, and emissions monitoring',
    },
  ];
 
  return (
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight'] ">
      
      <div className="page-container mx-auto flex flex-col ">
        
        {/* ── TOP HEADLINE BLOCK ── */}
        <Reveal as="span" variant="upSm" custom={0} className="text-primary ">
              Product Overview
            </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mt-5 mb-5 justify-between pb-8">
          <div className="lg:col-span-7 flex flex-col gap-3">

            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
              One Verified Record,Instead Of
              Nine <em className="font-semibold ">Disconnected Reports</em>
            </Reveal>
          </div>
          <div className="lg:col-span-5 ">
            <Reveal as="p" variant="upSm" custom={2} className="leading-relaxed text-[#03030F]/70 max-w-[481px] tracking-wide leading-snug">
              InspectGlobal fuses satellite, GPS, drone, and IoT data into a single AI-reconciled fusion score per site so no funding decision relies on one party's word.
            </Reveal>
          </div>
        </div>

        {/* ── 🛠️ FIXED: CORE FEATURES WRAPPER GRID (IMAGE & CONTENT SIDE-BY-SIDE) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full justify-between">

          {/* LEFT SIDE: Interactive Graphical Mock Dashboard Element */}
          <Reveal as="div" variant="left" className="lg:col-span-6 w-full h-[450px] relative rounded-[20px] bg-[#1D1EE3]/10 overflow-hidden shadow-sm group border border-gray-200/50 flex justify-end items-end">
            {/* Dashboard Image Card Layer (Top-Left offset rendering) */}
            <div className="w-[94%] h-[92%] relative rounded-tl-[16px] overflow-hidden bg-white shadow-md">
              <Image
                src="/Productsoln/InspectOver.png"
                alt="Redesign Agri Dashboard Overview Mock"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="object-cover object-left-top "
              />
            </div>
          </Reveal>

          {/* RIGHT SIDE: Auto layout vertical feature lists stacking */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 sm:gap-8 w-full h-full py-1">
            {features.map((item, idx) => (
              <Reveal
                as="div"
                variant="right"
                custom={idx}
                key={idx}
                className="flex items-center gap-5 group transition-all duration-300"
              >
                {/* Fixed Responsive Square Container Box for Vuesax Core Vectors */}
                <div className="w-20 h-20 shrink-0 bg-white rounded-[20px] flex items-center justify-center border border-[#03030F]/5 shadow-sm transition-all duration-300">
                  <div className="transition-colors duration-300 text-[#1D1EE3]">
                    {item.icon}
                  </div>
                </div>

                {/* Typography Stack */}
                <div className="flex flex-col gap-1.5 pt-1.5">
                  <h3 className="font-semibold text-[#03030F] text-body-xl transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="leading-snug tracking-wide text-[#03030F]/70 max-w-[480px]">
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