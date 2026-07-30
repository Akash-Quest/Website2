'use client';

import React from 'react';
import { Chart21, } from 'iconsax-react';

export default function MineralIQFeatures() {
  const features = [
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'GOV',
      title: 'Minister of Energy / Mines',
      desc: 'Full national access across all modules, regions, and mineral types',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'REG',
      title: 'Geological Survey Director',
      desc: 'Cadastre management, licence approvals, and concession boundary control',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'EITI',
      title: 'EITI Coordinator',
      desc: 'Revenue transparency, royalty reconciliation, and EITI report generation',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'NMC',
      title: 'National Mining Company',
      desc: 'State equity positions, dividends, and production return tracking',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'ENV',
      title: 'Environmental Authority',
      desc: 'State equity positions, dividends, and production return tracking',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'TAX',
      title: 'Revenue Authority',
      desc: 'Royalty collection, export cross-referencing, and leakage detection',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'CO',
      title: 'Mining Company',
      desc: 'Licence status, compliance scores, and evidence packs for their own concessions',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'ASM',
      title: 'ASM Cooperative',
      desc: 'Artisanal formalisation, Hg phase-out programmes, and cooperative onboarding',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'INV',
      title: 'Investor',
      desc: 'Open block library, tender rooms, due diligence data, and prospectivity maps',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'IFI',
      title: 'Development Finance Institution',
      desc: 'ESG monitoring, safeguard compliance, and portfolio-level sector oversight',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'GFO',
      title: 'Researcher / Geologist',
      desc: 'Geology layers, geophysics data, NDVI analysis, and prospectivity intelligence',
    },
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      head: 'REP',
      title: 'Investigative Journalist / CSO',
      desc: ' Transparency access public block data, environmental alerts, and breach records',
    },
  ];

  return (
    <section className="w-full relative  overflow-hidden bg-[#03030F]">
        <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ 
            backgroundImage: "url('/Productsoln/MineralIQFeatures.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}      
        />    
      <div className="page-container mx-auto relative">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold text-[#CBCBFF] mb-3 block">
            Features
          </span>
          <h2 className="font-semibold text-white">
            Built For Every Stakeholder <br/>In The <em className="font-semibold text-white">Global Mining Chain.</em>
          </h2>
          <p className="text-[#CBCBFF] mt-6 max-w-xl mx-auto text-base md:text-lg">
            MineralIQ gives each role exactly the view they need whether you're a national regulator, international investor, or artisanal cooperative.
          </p>
        </div>

        {/* ── FEATURE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-start gap-4 p-2 transition-transform duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>

              {/* Head Container */}
              <div className="flex flex-col gap-2">
                <p className="md:text-base text-[#CBCBFF] leading-relaxed">
                  {feature.head}
                </p>
                </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold  text-body-xl text-white">
                  {feature.title}
                </h3>
                <p className="tracking-wide text-[#CBCBFF] leading-snug">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}