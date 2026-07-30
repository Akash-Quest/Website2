'use client';

import Script from 'next/script';
import React from 'react';
import { Chart21, CpuCharge, ShieldTick, Alarm, ClipboardText, Element3 } from 'iconsax-react';

export default function InspectGlobalFeatures() {
  const features = [
    {
      icon: <Chart21 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Satellite Construction Monitoring',
      desc: 'Monthly composite imagery with YOLOv8 + SAM object detection identifies bulldozers, cranes, dump trucks, and more matched automatically against GPS fleet counts.',
    },
    {
      icon: <CpuCharge size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Live GPS Fleet Intelligence',
      desc: 'Track every excavator, grader, and dump truck in real time. AI classifies activity active grading, idle, unauthorized exit and corroborates it against satellite passes.',
    },
    {
      icon: <ShieldTick size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Multi-Source Fusion Scoring',
      desc: 'Nine independent sources satellite, GPS, IoT, drone, cameras, edge AI, acoustic, physical inspection are weighted and combined into one auditable fusion score per site.',
    },
    {
      icon: <Alarm size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Environmental Compliance Alerts',
      desc: 'Automated deforestation detection against AMDAL boundaries, water turbidity thresholds, and clearance status (MoEF Stage I/II) surfaced as live alerts, not quarterly reports.',
    },
    {
      icon: <ClipboardText size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Tamper-Proof Evidence Certificates',
      desc: 'Milestone completions are anchored on-chain, giving DFIs and lenders a verifiable record to release loan tranches against without waiting on manual audit reports.',
    },
    {
      icon: <Element3 size={24} variant="TwoTone" className="text-[#1D1EE3] stroke-current" />,
      title: 'Portfolio & Risk Dashboards',
      desc: 'Role-based views for investors and underwriters surface AI-scored project health, deformation risk (InSAR), and projected returns across an entire asset portfolio.',
    },
  ];

  return (
    <section className="w-full relative  overflow-hidden  bg-[#03030F]">
        <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ 
            backgroundImage: "url('/Productsoln/InspectGlobalFeatures.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}      
        />    
      <div className="page-container mx-auto relative">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-white mb-3 block">
            Features
          </p>
          <h2 className="font-semibold text-white">
            Built For The Verification, Not Just <br />
            <em className="font-semibold text-white">Visualization</em>
          </h2>
          <p className="text-[#CBCBFF] mt-6 max-w-4xl mx-auto tracking-wide leading snug">
            Every module is designed to answer one question: does the evidence on the ground match what's being reported and if not, where exactly is the gap?
          </p>
        </div>

        {/* ── FEATURE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-start gap-4 p-2 transition-transform duration-300"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold  text-body-xl text-white">
                  {feature.title}
                </h3>
                <p className="tracking-wide text-white leading-snug">
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

