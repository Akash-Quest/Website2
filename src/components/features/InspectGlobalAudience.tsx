'use client';
 
import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';
 
export default function InspectGlobalAudience() {
  const audienceCards = [
    {
      icon: <Courthouse size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Government Officers',
      desc: 'Monitor national infrastructure portfolios satellite evidence, GPS fleets, environmental compliance, and deforestation alerts across every project.',
    },
    {
      icon: <Bank size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'DFI Loan Analysts',
      desc: 'Verify tranche conditions against satellite evidence, monitor the loan portfolio, and issue blockchain certificates for milestone-based releases.',
    },
    {
      icon: <Buildings size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Investors',
      desc: 'Track portfolio performance with AI-scored project progress, risk assessments, and projected returns across every asset type in one place.',
    },
    {
      icon: <Courthouse size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Field Inspectors',
      desc: 'GPS fleet tracking, IoT sensor monitoring, drone mission management, and on-site data aggregation built for daily operational use.',
    },
    {
      icon: <Bank size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Insurance Underwriters',
      desc: 'Satellite-verified risk assessment for active claims, including InSAR deformation data, GPS anomaly reports, and environmental compliance records.',
    },
    {
      icon: <Buildings size={24} variant="Linear" className="text-[#1D1EE3] stroke-current" />,
      title: 'Satellite Analysts',
      desc: 'Full access to every analysis tool construction progress, vehicle detection, deforestation monitoring, and change detection across the whole platform.',
    },
  ];
 
  return (
    <section className="w-full bg-[#F7F5F1] font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
        <div className="text-center mb-16 max-w-3xl flex flex-col gap-4 Z-20">
          <h2 className="font-semibold ">
            Six Roles, One Shared Source <br />
            <em className="font-Semibold ">Of Truth</em>
          </h2>
          <p className="tracking-wide leading-snug max-w-3xl mx-auto ">
            InspectGlobal ships with role-based portals, so each stakeholder sees the data fused for their decisions not a generic dashboard they have to interpret themselves.
          </p>
        </div>
 
        {/* ── 🛠️ FIXED: 3x2 RESPONSIVE FLAT CARD GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[16px] p-8 flex flex-col gap-4 border border-gray-200/30 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Clean Flat Square Icon Wrapper Box */}
              <div className="w-10 h-10 bg-[#F7F5F1] rounded-xl flex items-center justify-center shrink-0">
                {card.icon}
              </div>
              
              {/* Typography Block Layer */}
              <div className="flex flex-col gap-2">
                {/* Core Component Headline */}
                <h3 className="font-semibold text-[#03030F] leading-snug tracking-wide">
                  {card.title}
                </h3>
                
                {/* Description Context string */}
                <p className="tracking-wide leading-snug text-[#03030F]/65">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}