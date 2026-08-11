'use client';

import React from 'react';

export default function AboutUsPillars() {
  const pillars = [
    {
      // ➔ 1st Icon: Strategy + Execution (Top Left)
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="80" height="80" rx="20" fill="white"/>
          <path d="M56.6654 34.9992V44.9992C56.6654 49.1659 55.832 52.0826 53.9654 53.9659L43.332 43.3325L56.2154 30.4492C56.5154 31.7659 56.6654 33.2659 56.6654 34.9992Z" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M56.2154 30.4487L30.4487 56.2154C25.432 55.0654 23.332 51.5987 23.332 44.9987V34.9987C23.332 26.6654 26.6654 23.332 34.9987 23.332H44.9987C51.5987 23.332 55.0654 25.432 56.2154 30.4487Z" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M53.9659 53.9654C52.0826 55.832 49.1659 56.6654 44.9992 56.6654H34.9992C33.2659 56.6654 31.7659 56.5154 30.4492 56.2154L43.3326 43.332L53.9659 53.9654Z" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30.3995 33.2992C31.5328 28.4159 38.8661 28.4159 39.9995 33.2992C40.6495 36.1659 38.8495 38.5992 37.2661 40.0992C36.1161 41.1992 34.2995 41.1992 33.1328 40.0992C31.5495 38.5992 29.7328 36.1659 30.3995 33.2992Z" stroke="#03030F" strokeWidth="1.5"/>
          <path d="M35.1562 34.5013H35.1712" stroke="#03030F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Strategy That Drives Execution',
      desc: "We move beyond recommendations to help organizations translate strategy into action, manage implementation, and remain accountable for measurable outcomes.",
    },
    {
      // ➔ 3rd Icon: Data + Research + Tech (Top Right)
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="80" height="80" rx="20" fill="white"/>
          <path d="M55 31.6654V48.332C55 53.332 52.5 56.6654 46.6667 56.6654H33.3333C27.5 56.6654 25 53.332 25 48.332V31.6654C25 26.6654 27.5 23.332 33.3333 23.332H46.6667C52.5 23.332 55 26.6654 55 31.6654Z" stroke="#03030F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M44.168 27.5V30.8333C44.168 32.6667 45.668 34.1667 47.5013 34.1667H50.8346" stroke="#03030F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M33.332 41.668H39.9987" stroke="#03030F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M33.332 48.332H46.6654" stroke="#03030F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Evidence, Research, and Technology',
      desc: 'Our recommendations are grounded in rigorous research, proprietary data, advanced analytics, and technology that enables better decisions and stronger outcomes.',
    },
    {
      // ➔ 2nd Icon: Profit + Purpose (Bottom Left)
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="80" height="80" rx="20" fill="white"/>
          <path d="M35.834 42.9167C35.834 44.5333 37.084 45.8333 38.6173 45.8333H41.7506C43.084 45.8333 44.1673 44.7 44.1673 43.2833C44.1673 41.7667 43.5007 41.2167 42.5173 40.8667L37.5007 39.1167C36.5173 38.7667 35.8507 38.2333 35.8507 36.7C35.8507 35.3 36.934 34.15 38.2673 34.15H41.4006C42.934 34.15 44.184 35.45 44.184 37.0667" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 32.5V47.5" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M56.6673 40C56.6673 49.2 49.2007 56.6667 40.0007 56.6667C30.8007 56.6667 23.334 49.2 23.334 40C23.334 30.8 30.8007 23.3333 40.0007 23.3333" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M56.6667 30V23.3333H50" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M48.334 31.6667L56.6673 23.3333" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Commercial Value and Social Impact',
      desc: 'We design solutions that create lasting economic value while addressing social priorities, strengthening communities, and delivering measurable development outcomes.',
    },
    {
      // ➔ 4th Icon: Global Standards, Local Depth (Bottom Right)
      icon: (
        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="80" height="80" rx="20" fill="white"/>
          <path d="M23.332 56.668H56.6654" stroke="#03030F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M36.25 26.6654V56.6654H43.75V26.6654C43.75 24.832 43 23.332 40.75 23.332H39.25C37 23.332 36.25 24.832 36.25 26.6654Z" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 36.6654V56.6654H31.6667V36.6654C31.6667 34.832 31 33.332 29 33.332H27.6667C25.6667 33.332 25 34.832 25 36.6654Z" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M48.332 45.0013V56.668H54.9987V45.0013C54.9987 43.168 54.332 41.668 52.332 41.668H50.9987C48.9987 41.668 48.332 43.168 48.332 45.0013Z" stroke="#03030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Global Perspective, Local Expertise',
      desc: 'We combine global research standards with deep knowledge of local markets, institutions, industries, and operating environments across emerging economies.',
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF]  font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col gap-10">
        
        {/* ── TOP HEADER BLOCK ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 border-b border-[#03030F]/10">
          
          {/* Left Column Container */}
          <div className="lg:col-span-6 flex flex-col items-start justify-start">
            <span className="font-semibold text-primary tracking-wide mb-3">
              Who we are
            </span>
            <h2 className=" font-semibold ">
              An Integrated Firm Built For The Next Era of AI-Led{' '}
              <em className="font-semibold"> Solutioneering & Transformation</em>
            </h2>
          </div>

          {/* Right Column Container - Padding aur gaps adjust kar diye hain taaki horizontal level flat ho jaye */}
          <div className="lg:col-span-6 flex flex-col gap-6 tracking-wide leading-snug text-[#03030F]/80">
            <p>
              SkyQuest Technology Group is a global market intelligence, innovation management and commercialization organization. We connect insight to networks of collaborators corporates, governments, investors and NGOs to deliver outcomes that matter.
            </p>
            <p>
              Founded with a single conviction: strategy is only worth what it produces. Seventeen years on, we still measure ourselves the same way by the transformation our clients ship, the markets they win, and the communities they lift.
            </p>
          </div>
        </div>

        {/* ── BOTTOM FEATURE CARDS DECK ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-[#F7F5F1] rounded-[20px] p-4 2xl-p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:bg-[#F2EFEA]"
            >
              <div className="w-10 h-10  shrink-0 overflow-hidden rounded-lg  border border-[#03030F]/5">
                {pillar.icon}
              </div>
              
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-semibold text-body-lg text-[#03030F] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="leading-snug tracking-wide text-[#03030F]/70">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}