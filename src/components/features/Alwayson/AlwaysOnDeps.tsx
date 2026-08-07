'use client';

import React from 'react';
import Link from 'next/link';
import { Location } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function AlwaysOnDeps() {
  const deploymentCards = [
    {
      status: 'LIVE',
      statusColor: 'bg-blue-600',
      statusText: 'text-blue-600',
      region: 'South India · Since 2024',
      title: 'Andhra Pradesh',
      desc: '300+ live services · 12M+ users engaged · 180,000+ daily conversations · partnership with APTS.',
    },
    {
      status: 'IN PROGRESS',
      statusColor: 'bg-violet-500',
      statusText: 'text-violet-500',
      region: 'North India · 2025–26',
      title: 'Uttarakhand',
      desc: '8 departments live health, transport, tourism & yatra, land records, grievances, emergency management, citizen services, project monitoring.',
    },
    {
      status: 'PIPELINE',
      statusColor: 'bg-gray-400',
      statusText: 'text-gray-400',
      region: 'Multiple states · 2026',
      title: 'Additional States',
      desc: 'Active discussions underway to replicate the platform across further Indian states.',
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1] py-24 md:py-32 px-6 sm:px-12 lg:px-[8%] font-['Inter_Tight'] ">
      <div className="max-w-[1920px] mx-auto flex flex-col items-center">

        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-4xl flex flex-col  Z-20">
          <Reveal as="p" variant="upSm" custom={0} className="font-medium text-primary text-body-sm ">
            Deployments
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
            Live In Andhra Pradesh. <em className="font-semibold">Expanding<br /> Across India.</em>
            </Reveal>
          <Reveal as="p" variant="upSm" custom={2} className=" tracking-wide leading-snug text-muted max-w-full mx-auto ">
            AlwaysON deploys as a sovereign state instance, customised to each state's languages, departments, and structure. Operational in weeks.
          </Reveal>
        </div>

        {/* ── DEPLOYMENT STATUS CARD GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          {deploymentCards.map((card, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              className="bg-white rounded-[16px] p-4 flex flex-col gap-4 border border-gray-200/30 transition-all duration-300 "
            >
              {/* Top Row: Icon + Status/Region */}
              <div className="flex items-center justify-between w-full">
                <div className="w-10 h-10 bg-[#F7F5F1] rounded-xl flex items-center justify-center shrink-0">
                  <Location size={24} variant="Linear" className="text-black stroke-current" />
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className={`flex items-center gap-1.5 text-body-xs font-medium ${card.statusText}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${card.statusColor}`} />
                    {card.status}
                  </span>
                  <span className="text-body-xs text-muted">
                    {card.region}
                  </span>
                </div>
              </div>

              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-body-lg text-[#03030F] ">
                  {card.title}
                 </h3>

                <p className="text-muted ">
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
