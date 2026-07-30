'use client';
 
import Script from 'next/script';
import React from 'react';
import Image from 'next/image';
 
export default function InspectGlobalUseCases() {
  const useCases = [
    {
      tag: 'Development Finance',
      title: 'Release Loan Tranches On Verified Milestones',
      desc: 'A DFI loan officer needs to confirm 78% physical progress before releasing Tranche 4 on an industrial park loan without flying someone out.',
      image: '/Productsoln/IGUse1.png', 
      bullets: [
        'Satellite imagery cross-checked against GPS and drone data',
        'Independent progress % generated for each milestone',
        'Evidence certificate issued for the disbursement record',
      ],
    },
    {
      tag: 'Regulators & Environmental Agencies',
      title: 'Catch Compliance Breaches In Days, Not Months',
      desc: 'Track land clearing, emissions, and water quality against approved limits automatically, continuously.',
      image: '/Productsoln/IGUse2.png',
      bullets: [
        'Continuous monitoring against permitted site boundaries',
        'AI flags excess clearance, emissions, or water quality breaches',
        'Alerts routed to the relevant agency within 48 hours',
      ],
    },
    {
      tag: 'Insurers & Underwriters',
      title: "Price Risk On Live Conditions, Not Last Year's Survey",
      desc: 'Pull current structural and environmental data for any asset under an active policy.',
      image: '/Productsoln/IGUse3.png',
      bullets: [
        'Millimeter-precision deformation tracking via InSAR',
        'Structural movement compared against safe tolerances',
        'Risk data refreshed on every satellite pass, not annually',
      ],
    },
    {
      tag: 'Owners & Site Operators',
      title: "Know Your Fleet's Status Without Walking The Site",
      desc: 'See equipment activity, idle time, and location across every site in your portfolio.',
      image: '/Productsoln/IGUse4.png',
      bullets: [
        'Live GPS tracking of every machine, classified by activity',
        'Idle, low-fuel, and off-route equipment flagged automatically',
        'Geofence alerts for unauthorized movement, day or night',
      ],
    },
    {
      tag: 'Investors & Asset Managers',
      title: 'One Score Across Every Project, Every Geography',
      desc: 'Replace inconsistent contractor reporting with a single comparable progress and risk score.',
      image: '/Productsoln/IGUse5.png',
      bullets: [
        'AI-generated fusion score for each asset in the portfolio',
        'Consistent scoring methodology across geographies and sectors',
        'Portfolio-level trends updated as new data arrives',
      ],
    },
    {
      tag: 'Analysts & Auditors',
      title: 'Benchmark Claimed Progress Against The Imagery',
      desc: 'Reconcile contractor-reported progress with what satellite and drone imagery actually shows.',
      image: '/Productsoln/IGUse6.png',
      bullets: [
        'Monthly composite imagery compared to reported milestones',
        'Variance between claimed and observed progress quantified',
        'Discrepancies flagged automatically for follow-up review',
      ],
    },
  ];
 
  return (
    <section className="w-full bg-[#FFFFFF] font-['Inter_Tight'] ">
      
      <div className="page-container mx-auto flex flex-col ">
        <p className="font-semibold text-primary ">
              Use Cases
        </p>
      
        {/* ── HEADER LAYOUT BLOCK ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-5 mb-5 w-full">
          <div className="lg:col-span-7 flex flex-col gap-2">
            
            <h2 className="font-semibold ">
              One Platform, Six Very  <br/><em className="font-semibold">Different Jobs</em>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p className="tracking-wide leading-snug text-muted max-w-full">
              From dynamic field monitoring to automated enterprise verification, InspectGlobal fits into the workflows that matter most.
            </p>
          </div>
        </div>
 
        {/* ── 🛠️ FIXED: 3-COLUMN VERTICAL STACK MATRIX GRID (As per your Image) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
          {useCases.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#F7F5F1] rounded-[16px] p-6 flex flex-col gap-5 border border-gray-200/40 w-full transition-all duration-300 hover:shadow-md"
            >
              {/* Top Section: Full Width Aspect Rounded Image Box */}
              <div className="w-full aspect-[16/10] relative rounded-[10px] overflow-hidden bg-[#D9D9D9] shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 33vw, 400px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105" 
                />
              </div>
 
              {/* Bottom Content Area Structure */}
              <div className="w-full flex flex-col gap-4 flex-grow justify-between">
                
                {/* Meta Typography Wrapper */}
                <div className="flex flex-col gap-2">
                  {/* Tagline category selector */}
                  <span className="font-semibold text-primary ">
                    {item.tag}
                  </span>
                  {/* Headline Title */}
                  <h3 className="font-semibold text-body-xl leading-snug in-h-[50px]">
                    {item.title}
                  </h3>
                  {/* Paragraph Context Body */}
                  <p className="leading-snug tracking-wide font-normal text-muted">
                    {item.desc}
                  </p>
                </div>
 
                {/* Divider List Vectors Section */}
                <div className="flex flex-col border-t border-black/10 ">
                  {item.bullets.map((bullet, bIdx) => (
                    <div 
                      key={bIdx} 
                      className="w-full flex items-center leading-snug tracking-wide text-muted border-b border-black/10 py-3 last:border-none last:pb-0"
                    >
                     <p className="tracking-wide leading-snug"> {bullet} </p>
                    </div>
                  ))}
                </div>
 
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </section>
  );
}