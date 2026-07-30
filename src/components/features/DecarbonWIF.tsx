'use client';

import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';

export default function DecarbonWIF() {
  const features = [
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Ministry of Planning & Dev.',
      desc: 'Full national dashboard NDC tracking, pipeline overview, finance mobilised, and COP deadline countdown',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Environmental Protection Authority',
      desc: 'Article 6 corresponding adjustments, ITMO issuance oversight, environmental compliance scoring per project',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Ministry of Finance / CRGE',
      desc: 'Green bond issuance, GCF grant management, blended finance structuring, and fiscal impact tracking',
    },
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Forestry Development Authority',
      desc: 'REDD+ project pipeline, deforestation MRV, carbon credit issuance, and community benefit tracking',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Project Developer / Lead',
      desc: 'End-to-end project builder onboarding, feasibility, document generation, forward issuance, and investor matching',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'GGGI · UNDP · GCF',
      desc: 'Partner access to project pipeline, co-financing opportunities, and national progress reporting',
    },
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Investor',
      desc: 'Private sector (Mubadala, Alterra), DFIs (GCF, IsDB), and bilateral partners deal room, project due diligence, and forward purchase',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Auditor / MRV Provider',
      desc: 'Real-time access to satellite MRV data, verification dashboards, and audit trails per project and sector',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Consultant',
      desc: 'Technical assistance teams access project pipelines, NDC alignment gaps, and co-benefit scoring reducing time on document prep',
    },
 
  ];

  return (
    <section className="w-full relative overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ 
          backgroundImage: "url('/Productsoln/DecarbonWIF.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}     
      />    

      <div className="page-container mx-auto relative z-10">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <span className=" font-semibold text-[#CBCBFF] mb-3 block">
            <p>Who it's For</p>
          </span>
          <h2 className="font-semibold text-white">
            Everything A Modern Diagnostic <br />
            <em className="font-semibold text-white">Network Needs.</em>
          </h2>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto ">
            Skyquest Labs is more than a reporting tool—it's a complete operating system for your pathology network.
          </p>
        </div>

        {/* ── FEATURE GRID (GLASS CARDS WITHOUT HEAD) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-start gap-4 p-6 sm:p-8 rounded-2xl bg-white/[0.2]  border border-white/10 hover:border-white/20 hover:bg-white/[0.12] transition-all duration-300 shadow-xl"
            >
              {/* Rounded Icon Container */}
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl border border-white/15 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-semibold text-body-xl text-white mb-2  ">
                  {feature.title}
                </h3>
                
                <p className=" text-white leading-snug tracking-wide">
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