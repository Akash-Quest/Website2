'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutUsPractices() {
  const practices = [
    {
      num: '1.',
      title: 'Strategy & Transformation',
      desc: 'Corporate strategy, growth, market entry, M&A and operating-model redesign for boards and CXOs.',
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
      num: '2.',
      title: 'Digital, AI & Data',
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
      num: '3.',
      title: 'Market Research & Intelligence',
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
      num: '4.',
      title: 'Innovation & R&D',
      desc: 'Innovation strategy, design thinking, open innovation and technology commercialization.',
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
      num: '5.',
      title: 'Social, CSR & ESG',
      desc: 'CSR strategy, ESG reporting, SDG alignment, climate advisory and impact measurement.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M34.0004 29.2C34.0004 30.1 33.7504 30.95 33.3004 31.67C32.4704 33.06 30.9504 34 29.2004 34C27.4504 34 25.9204 33.06 25.1004 31.67C24.6604 30.95 24.4004 30.1 24.4004 29.2C24.4004 26.55 26.5504 24.4 29.2004 24.4C31.8504 24.4 34.0004 26.55 34.0004 29.2Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.3301 29.2L28.5101 30.38L31.0701 28.02" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M34 20.69C34 22.66 33.49 24.4 32.69 25.91C31.81 24.98 30.57 24.4 29.2 24.4C26.55 24.4 24.4 26.55 24.4 29.2C24.4 30.43 24.87 31.55 25.63 32.4C25.26 32.57 24.92 32.71 24.62 32.81C24.28 32.93 23.72 32.93 23.38 32.81C20.48 31.82 14 27.69 14 20.69C14 17.6 16.49 15.1 19.56 15.1C21.37 15.1 22.99 15.98 24 17.33C25.01 15.98 26.63 15.1 28.44 15.1C31.51 15.1 34 17.6 34 20.69Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      num: '6.',
      title: 'Public Sector & Development',
      desc: 'Policy advisory, program design and integrated implementation for governments and foundations.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <rect width="48" height="48" rx="10" fill="transparent"/>
          <path d="M14 34H34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 14C25.6 14.64 27.4 14.64 29 14V17C27.4 17.64 25.6 17.64 24 17V14Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 17V20" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29 20H19C17 20 16 21 16 23V34H32V23C32 21 31 20 29 20Z" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.5801 24H31.4201" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.9902 24V34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23.9902 24V34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M27.9902 24V34" className="stroke-[#1D1EE3] transition-colors duration-300" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
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
            Six Practices. One Integrated <br />
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
              className={`relative p-8 lg:p-10 flex flex-col gap-5 group transition-all duration-300 cursor-pointer overflow-hidden
                ${idx < 3 ? 'lg:border-b border-[#03030F]/10' : ''} 
                ${idx % 2 === 0 ? 'md:border-r border-[#03030F]/10' : ''}
                hover:bg-[#1D1EE3] hover:rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:z-20
              `}
            >
              
              {/* TOP ROW: SVG Box Container & Diagonal Arrow */}
              <div className="flex items-center justify-between w-full">
                {/* White Container Frame with Dynamic CSS Class Transitions */}
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center transition-all duration-300 border border-[#03030F]/5">
                  {item.icon}
                </div>
                
                <ArrowUpRight 
                  size={24} 
                  className="text-[#03030F]/40 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                />
              </div>

              {/* BOTTOM ROW: Content Description Blocks */}
              <div className="flex flex-col ">
                <h3 className="font-semibold text-[#03030F] text-body-xl  group-hover:text-white transition-colors duration-300 flex gap-1.5">
                  <span>{item.num}</span>
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