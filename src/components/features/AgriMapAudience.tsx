'use client';

import React from 'react';
import { Landmark, LandmarkIcon, Building2 } from 'lucide-react';

export default function AgriMapAudience() {
  const audienceCards = [
    {
      icon: <Landmark size={22} className="text-[#1D1EE3]" />,
      tag: 'Primary User',
      title: 'Agriculture Departments',
      desc: 'State and district agriculture departments use AgriMap as their operational command center for seed oversight, variety promotion, and field advisory.',
      bullets: [
        'Principal Secretary (Agriculture)',
        'District Agriculture Officer',
        'Block Level Extension Worker',
        'State Seed Sub-Committee',
      ],
    },
    {
      icon: <LandmarkIcon size={22} className="text-[#1D1EE3]" />,
      tag: 'Financial Sector',
      title: 'Banks & Agri-Finance',
      desc: 'Commercial banks, cooperative banks, and NBFCs use AgriMap data to underwrite farm credit with geospatial crop risk intelligence.',
      bullets: [
        'NABARD Regional Offices',
        'Cooperative Bank Credit Teams',
        'Agri NBFC Risk Analysts',
        'Crop Insurance Assessors',
      ],
    },
    {
      icon: <Building2 size={22} className="text-[#1D1EE3]" />,
      tag: 'Government Bodies',
      title: 'Central & State Governments',
      desc: 'Ministries, planning commissions, and research institutions use AgriMap for evidence-based policy design, scheme evaluation, and budget allocation.',
      bullets: [
        'Ministry of Agriculture (GoI)',
        'ICAR Research Institutions',
        'State Planning Commission',
        'National Seed Corporation',
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1] font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col items-center">
        
        {/* ── CENTRAL HEADER SECTION ── */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="font-semibold ">
            Designed For Those Who Govern <br />
            The <em className="font-semibold">Ground</em>
          </h2>
          <p className="text-muted mx-auto mt-5 tracking-wide leading-snug">
            AgriMap serves the stakeholders who shape India's agricultural outcomes from state secretariats to rural bank branches
          </p>
        </div>

        {/* ── 3-COLUMN RESPONSIVE CARD GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-[20px] p-8 flex flex-col justify-between border border-gray-200/40 shadow-sm"
            >
              {/* Upper Content Frame */}
              <div className="flex flex-col">
                {/* Clean Flat Icon Shape Frame */}
                <div className="w-11 h-11 bg-[#F7F5F1] rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                
                {/* Tagline label */}
                <span className="font-semibold text-primary tracking-wide mb-1.5 block">
                  {card.tag}
                </span>
                
                {/* Core Component Headline */}
                <h3 className="font-semibold text-body-xl tracking-wide mb-3">
                  {card.title}
                </h3>
                
                {/* Description string */}
                <p className="text-muted tracking-wide leading-snug font-normal mb-6">
                  {card.desc}
                </p>
              </div>

              {/* Lower Content Frame with Solid Vector Rule Split */}
              <div className="flex flex-col border-t border-[#03030F]/20 pt-5">
                <ul className="flex flex-col gap-3">
                  {card.bullets.map((bullet, bIdx) => (
                    <p 
                      key={bIdx} 
                      className="flex items-center text-[#03030F]/85 tracking-wide  "
                    >
                      {/* Premium native dot element alignment */}
                      <span className="w-1.5 h-1.5 rounded-full bg-[#03030F]/80 mr-3 shrink-0" />
                      {bullet}
                    </p>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}