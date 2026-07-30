'use client';

import React from 'react';
import { LayoutGrid, Satellite, Bug, Droplets, TrendingUp, ChartPie } from 'lucide-react';

export default function AgriMapFeatures() {
  const features = [
    {
      icon: <LayoutGrid size={24} className="text-[#1D1EE3]" />,
      title: 'SRR Heatmap',
      desc: 'Color-coded district and block maps show seed replacement rate at a glance. Red signals intervention; green signals momentum.',
    },
    {
      icon: <Satellite size={24} className="text-[#1D1EE3]" />,
      title: 'NDVI Satellite Layer',
      desc: 'Correlate crop health data from satellite imagery directly on top of seed data to identify underperforming zones.',
    },
    {
      icon: <Bug size={24} className="text-[#1D1EE3]" />,
      title: 'Pest & Disease Alerts',
      desc: 'Enabling data-driven growth, smart infrastructure, and sustainable urban development.',
    },
    {
      icon: <Droplets size={24} className="text-[#1D1EE3]" />,
      title: 'Fertilizer Intelligence',
      desc: 'Helping brands adapt to evolving consumer behavior and market dynamics.',
    },
    {
      icon: <TrendingUp size={24} className="text-[#1D1EE3]" />,
      title: 'Market Price Feed',
      desc: 'Strengthening supply chains, market positioning, and operational resilience.',
    },
    {
      icon: <ChartPie size={24} className="text-[#1D1EE3]" />,
      title: 'KrishiScore™',
      desc: 'Advancing healthcare innovation, accessibility, and digital transformation initiatives.',
    },
  ];

  return (
    <section className="w-full relative overflow-hidden select-none bg-[#03030F]">
        <div 
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ 
            backgroundImage: "url('/Productsoln/AgriSat.png')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}      
        />    
      <div className="page-container mx-auto relative">
        
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <p className=" tracking-wide text-[#CBCBFF] mb-3 block">
            Features
          </p>
          <h2 className="font-semibold text-white">
            Built For The Complexity of <br />
            <em className="font-semibold text-white">Agriculture</em>
          </h2>
          <p className="text-[#CBCBFF] mt-6 max-w-xl mx-auto tracking-wide leading-snug">
            Every feature was designed with input from Principal Secretaries, district agriculture officers, and field extension workers.
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
                <p className="tracking-wide leading-snug text-[#CBCBFF] leading-relaxed">
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