'use client';

import React from 'react';
import { ArrowUp } from 'iconsax-react';

export default function AboutUsPractices() {
  const practices = [
    {
      num: '1.',
      title: 'Digital Transformation ',
      desc: 'Digital transformation, cloud, AI/automation, analytics and product engineering built for scale.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M20.9707 34H26.9707C31.9707 34 33.9707 32 33.9707 27V21C33.9707 16 31.9707 14 26.9707 14H20.9707C15.9707 14 13.9707 16 13.9707 21V27C13.9707 32 15.9707 34 20.9707 34Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.9707 24.7L19.9707 24.68C20.7207 24.68 21.5607 25.25 21.8407 25.95L22.9807 28.83C23.2407 29.48 23.6507 29.48 23.9107 28.83L26.2007 23.02C26.4207 22.46 26.8307 22.44 27.1107 22.97L28.1507 24.94C28.4607 25.53 29.2607 26.01 29.9207 26.01H33.9807" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '2.',
      title: 'Strategy & Policy Advisory',
      desc: 'Evidence-based strategies, governance reforms and policy frameworks that strengthen institutions and public value.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M24.0001 19.89L22.9301 21.75C22.6901 22.16 22.8901 22.5 23.3601 22.5H24.6301C25.1101 22.5 25.3001 22.84 25.0601 23.25L24.0001 25.11" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.2994 30.04V28.88C17.9994 27.49 16.1094 24.78 16.1094 21.9C16.1094 16.95 20.6594 13.07 25.7994 14.19C28.0594 14.69 30.0394 16.19 31.0694 18.26C33.1594 22.46 30.9594 26.92 27.7294 28.87V30.03C27.7294 30.32 27.8394 30.99 26.7694 30.99H21.2594C20.1594 31 20.2994 30.57 20.2994 30.04Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5 34C22.79 33.35 25.21 33.35 27.5 34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '3.',
      title: 'Data & Artificial Intelligence',
      desc: 'AI, automation, data intelligence, geospatial technologies and digital platforms that modernize decision-making.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <rect x="18" y="18" width="12" height="12" rx="2" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 22H14M18 26H14M30 22H34M30 26H34M22 18V14M26 18V14M22 30V34M26 30V34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '4.',
      title: 'Integrated Program Management',
      desc: 'End-to-end program delivery from design to implementation, ensuring on-time, on-budget, measurable outcomes.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <rect x="14" y="14" width="20" height="20" rx="3" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 20H30M18 24H30M18 28H26" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '5.',
      title: 'Livelihoods & Entrepreneurship',
      desc: 'Sustainable livelihoods, entrepreneurship ecosystems and inclusive economic growth through advisory and hands-on support.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M14 30L20 24L24 27L34 17" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 17H34V23" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '6.',
      title: 'Market Intelligence ',
      desc: 'TAM-SAM-SOM, B2B and consumer research, competitive intelligence, pricing and GTM studies.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M14 34H34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.75 16V34H26.25V16C26.25 14.9 25.8 14 24.45 14H23.55C22.2 14 21.75 14.9 21.75 16Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 22V34H19V22C19 20.9 18.6 20 17.4 20H16.6C15.4 20 15 20.9 15 22Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29 27V34H33V27C33 25.9 32.6 25 31.4 25H30.6C29.4 25 29 25.9 29 27Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '7.',
      title: 'Technology Transfer & Innovation',
      desc: 'Commercializing innovation, technology transfer and innovation ecosystems that accelerate emerging-technology adoption.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M33 19V29C33 32 31.5 34 28 34H20C16.5 34 15 32 15 29V19C15 16 16.5 14 20 14H28C31.5 14 33 16 33 19Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.5 16.5V18.5C26.5 19.6 27.4 20.5 28.5 20.5H30.5" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 25H24" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 29H28" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '8.',
      title: 'Inclusive Finance & Institutional Strategy',
      desc: 'Blended finance structures, digital financial inclusion and institutional strategies connecting underserved populations to capital.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M14 20L24 14L34 20" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 20H34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 20V30M24 20V30M31 20V30" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 34H34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1]  font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* ── HEADER TITLE BLOCK ── */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-4">
          <span className=" font-semibold text-primary tracking-wide ">
            What We Do
          </span>
          <h2 className="font-semibold ">
            Eight Capabilities. One Integrated <br />
            <em className="font-semibold">Engagement Model</em>
          </h2>
          <p className="leading-snug tracking-wide text-muted">
            We organize our work around the decisions leaders actually face not the silos of a traditional firm. Engagements draw from any practice, with one partner accountable end-to-end
          </p>
        </div>

        {/* ── INTERACTIVE HOVER GRID SYSTEM ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  border-[#03030F]/10 divide-y md:divide-y-0 lg:divide-x lg:divide-y-0 divide-[#03030F]/10">
          {practices.map((item, idx) => (
            <div
              key={idx}
              className={`relative p-4 lg:p-6 flex flex-col gap-5 group transition-all duration-300 cursor-pointer overflow-hidden
                ${idx < 6 ? 'lg:border-b border-[#03030F]/10' : ''}
                ${idx % 2 === 0 ? 'md:border-r border-[#03030F]/10' : ''}
                hover:bg-[#1D1EE3] hover:rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:z-20
              `}
            >
              
              {/* TOP ROW: SVG Box Container & Diagonal Arrow */}
              <div className="flex items-center justify-between w-full">
                {/* White Container Frame with Dynamic CSS Class Transitions */}
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-all duration-300 border border-[#03030F]/5">
                  {item.icon}
                </div>
                
                <ArrowUp
                  size={24}
                  color="currentColor"
                  variant="Linear"
                  className="rotate-45 [&>path]:stroke-2 text-[#03030F]/40 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              {/* BOTTOM ROW: Content Description Blocks */}
              <div className="flex flex-col ">
                <h3 className="font-semibold text-[#03030F] text-body-lg  group-hover:text-white transition-colors duration-300 flex gap-1.5">
                  
                  <span>{item.title}</span>
                </h3>
                <p className="leading-snug text-muted group-hover:text-white/80 transition-colors duration-300 mt-5">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}