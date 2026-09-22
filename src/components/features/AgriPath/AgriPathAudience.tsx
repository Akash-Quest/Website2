"use client";


import React from "react";
import { Factory, FlaskConical, Landmark } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AgriPathAudience() {
  const audienceCards = [
    {
      icon: <Factory size={22} className="text-[#1D1EE3]" />,
      tag: "Primary User",
      title: "Agri-Technology Innovators & Manufacturers",
      desc: "Seed companies, fertilizer producers, and crop-protection and equipment makers use AgriPath to identify which markets a product genuinely fits before committing to a launch.",
      bullets: [
        "Seed & Variety Developers",
        "Fertilizer & Nutrient Manufacturers",
        "Crop Protection & Bio-Input Companies",
        "Farm Equipment Makers",
      ],
    },
    {
      icon: <FlaskConical size={22} className="text-[#1D1EE3]" />,
      tag: "Research & Development",
      title: "Research Institutes & Tech-Transfer Offices",
      desc: "National agricultural research institutes and university tech-transfer teams use AgriPath to route new technologies toward the zones and countries where field trials are most likely to succeed.",
      bullets: [
        "National Agricultural Research Institutes",
        "International Research Centers",
        "University Tech-Transfer Offices",
        "Applied Agronomy Teams",
      ],
    },
    {
      icon: <Landmark size={22} className="text-[#1D1EE3]" />,
      tag: "Trade & Development",
      title: "Trade, Investment & Development Bodies",
      desc: "Export promotion agencies, development finance institutions, and donor-funded programs use AgriPath to de-risk market-entry investments and speed up regulatory due diligence.",
      bullets: [
        "Export Promotion Agencies",
        "Development Finance Institutions",
        "Donor-Funded Ag Programs",
        "Trade & Investment Facilitators",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1] font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col items-center">
        {/* ── HEADER ── */}
        <div className="text-center mb-16 max-w-3xl">
          <Reveal as="h2" variant="upSm" custom={0} className="font-semibold">
            Designed For Those Taking <br />
            Technology To <em className="font-semibold">The Field</em>
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={1}
            className="text-muted mx-auto mt-5 tracking-wide leading-snug"
          >
            AgriPath serves the organizations that decide which agri-technologies
            actually reach farmers, from the innovators building them to the
            institutions financing their spread.
          </Reveal>
        </div>

        {/* ── 3-COLUMN CARD GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch">
          {audienceCards.map((card, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              className="bg-white rounded-[20px] p-8 flex flex-col justify-between border border-gray-200/40 shadow-sm"
            >
              <div className="flex flex-col">
                <div className="w-11 h-11 bg-[#F7F5F1] rounded-xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>

                <span className="font-semibold text-primary tracking-wide mb-1.5 block">
                  {card.tag}
                </span>

                <h3 className="font-semibold text-body-xl tracking-wide mb-3">
                  {card.title}
                </h3>

                <p className="text-muted tracking-wide leading-snug font-normal mb-6">
                  {card.desc}
                </p>
              </div>

              <div className="flex flex-col border-t border-[#03030F]/20 pt-5">
                <ul className="flex flex-col gap-3">
                  {card.bullets.map((bullet, bIdx) => (
                    <p
                      key={bIdx}
                      className="flex items-center text-[#03030F]/85 tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#03030F]/80 mr-3 shrink-0" />
                      {bullet}
                    </p>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
