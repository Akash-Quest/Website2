'use client';

import React from 'react';
import {CardTick,Building,HeartAdd,Shop,Buildings2,TruckFast,FlashCircle,Teacher,Bank,People,Wind,HashtagDown } from 'iconsax-react';
import Reveal from '@/components/ui/Reveal';

export default function SQLabPlatform() {
  const modules = [
    {
      icon: <CardTick size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Registration & Billing',
    },
    {
      icon: <Building size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Test Selection & Panels',
    },
    {
      icon: <HeartAdd size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Purchase & Inventory',
    },
    {
      icon: <Shop size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'QC Validation',
    },
    {
      icon: <Buildings2 size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'MD Pathology Reporting',
    },
    {
      icon: <TruckFast size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Data Security',
    },
    {
      icon: <FlashCircle size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Data Analysis',
    },
    {
      icon: <Teacher size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Admin Dashboard',
    },
    {
      icon: <Bank size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Referral Doctor Management',
    },
    {
      icon: <People size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Bulk SMS & Email',
    },
    {
      icon: <Wind size={24} color="#FFFFFF" variant="TwoTone" className="-rotate-90" />,
      title: 'Consumables & Billing Analysis',
    },
    {
      icon: <HashtagDown size={24} color="#FFFFFF" variant="TwoTone" />,
      title: 'Cloud Patient Records type',
    },
  ];

  return (
    <section className="w-full relative  overflow-hidden bg-[#03030F]">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none "
        style={{ 
          backgroundImage: "url('/Productsoln/SQLabPlatform.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}     
      />    

      <div className="page-container mx-auto relative z-10">
        
        {/* ── HEADER ── */}
        <Reveal as="span" variant="upSm" custom={0} className=" text-[#CBCBFF] ">
              LIMS Platform
            </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start justify-between mb-16 mt-5 md:mb-20 text-white">

          {/* LEFT COLUMN: Badge + Main Title */}
          <div className="lg:col-span-7 flex flex-col gap-2">


            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold  text-white ">
              A Complete Lab Information <br />
              <em className="font-semibold text-white">Management System.</em>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Description Paragraph */}
          <div className="lg:col-span-5 ">
            <Reveal as="p" variant="upSm" custom={2} className="text-[#CBCBFF]  max-w-full tracking-wide leading-snug">
              The Skyquest Labs LIMS covers every workflow in your diagnostic operation from patient registration to data analysis and everything in between.
            </Reveal>
          </div>

        </div>

        {/* ── FIGMA EXACT LIMS MODULES GRID (4 Columns x 3 Rows) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {modules.map((item, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              className="w-full h-[72px] bg-white/30 backdrop-blur-md rounded-lg p-3 flex items-center gap-4 border border-white/10 shadow-sm transition-all hover:bg-white/40"
            >
              {/* Icon Container Box */}
              <div className="w-12 h-12 bg-[#F7F5F1]/30 rounded-[10px] flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              {/* Module Title */}
              <p className="text-white text-xl tracking-wide leading-snug ">
                {item.title}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}