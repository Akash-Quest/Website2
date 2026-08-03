'use client';

import React from 'react';
import { Courthouse, Bank, Buildings } from 'iconsax-react';

export default function DecarbonWIF() {
  const features = [
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Governments & Climate Authorities',
      desc: 'Develop climate project pipelines, strengthen national climate finance capabilities, and improve visibility into climate programs and financing opportunities.',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Climate Project Developers',
      desc: 'Structure projects, assess feasibility, prepare documentation, access MRV workflows, and connect with potential financing partners.',
    },
    {
      icon: <Bank size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Investors & Financial Institutions',
      desc: 'Discover structured climate projects and access relevant project information for investment and financing assessment.',
    },
    {
      icon: <Courthouse size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Development Finance Institutions',
      desc: 'Monitor project pipelines, assess climate finance opportunities, and support financing across eligible projects and programs.',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'MRV Providers & Auditors',
      desc: 'Access relevant project data and digital MRV workflows to support monitoring, verification, and audit processes.',
    },
    {
      icon: <Buildings size={22} variant="TwoTone" color="#FFFFFF" />,
      title: 'Climate Finance Consultants',
      desc: 'Support project development, feasibility assessments, documentation, climate finance structuring, and stakeholder coordination through a shared digital platform.',
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
            <p className='text-lg tracking-wide'>Who DeCarbonX Is For</p>
          </span>
          <h2 className="font-semibold text-white">
            Built for the Climate Finance  <br />
            <em className="font-semibold text-white">Ecosystem</em>
          </h2>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto ">
            Connect governments, climate project developers, investors, and key stakeholders through a unified digital platform for climate finance.
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