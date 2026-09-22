"use client";

import React from "react";
import {
  CloudSun,
  Waypoints,
  Beaker,
  Milestone,
  FileOutput,
  Earth,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AgriPathFeatures() {
  const features = [
    {
      icon: <CloudSun size={24} className="text-[#1D1EE3]" />,
      title: "Agroclimatic Match Engine",
      desc: "Zone-level scoring across rainfall, soil pH, texture ratio, and temperature range, with a weighted score and a named mitigation protocol for every gap.",
    },
    {
      icon: <Waypoints size={24} className="text-[#1D1EE3]" />,
      title: "Regulatory Pathway Engine",
      desc: "Every agency, every form, every fee, every timeline the plant protection organization, seed certifier, or fertilizer authority for the destination country, mapped end to end.",
    },
    {
      icon: <Beaker size={24} className="text-[#1D1EE3]" />,
      title: "Fertilizer & Input Product Matcher",
      desc: "Ranks formulated products against a destination zone's nutrient gaps, weighing agronomic need, efficiency, and field feasibility into a single, auditable score.",
    },
    {
      icon: <Milestone size={24} className="text-[#1D1EE3]" />,
      title: "Go-to-Market Roadmap Builder",
      desc: "A 90-day commercialization plan with milestones, in-country trade contacts, and funding windows, generated the moment a technology and market are matched.",
    },
    {
      icon: <FileOutput size={24} className="text-[#1D1EE3]" />,
      title: "Regulatory Dossier Export",
      desc: "Every mandatory document, quarantine protocol, and labeling requirement exports as a client-ready dossier or a saved report you can return to.",
    },
    {
      icon: <Earth size={24} className="text-[#1D1EE3]" />,
      title: "90+ Country Coverage",
      desc: "From Somalia's seed quarantine pathway to Senegal's fertilizer registration framework, the same workflow scales across Africa and Asia's regulatory landscapes.",
    },
  ];

  return (
    <section className="w-full relative overflow-hidden select-none bg-[#03030F]">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/Productsoln/Agripath/Features.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="page-container mx-auto relative">
        {/* ── HEADER ── */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="tracking-wide text-[#CBCBFF] mb-3 block"
          >
            Features
          </Reveal>
          <Reveal
            as="h2"
            variant="upSm"
            custom={1}
            className="font-semibold text-white"
          >
            Built For Chains That Cross <br />
            <em className="font-semibold text-white">Many Hands</em>
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="text-[#CBCBFF] mt-6 max-w-xl mx-auto tracking-wide leading-snug"
          >
            Designed with aggregators, processors, and export compliance teams
            who handle produce long before it reaches a buyer.
          </Reveal>
        </div>

        {/* ── FEATURE GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              className="flex flex-col items-start gap-4 p-2"
            >
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-body-xl text-white">
                  {feature.title}
                </h3>
                <p className="tracking-wide leading-snug text-[#CBCBFF] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
