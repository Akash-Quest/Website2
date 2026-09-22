"use client";

/**
 * AgriPath product overview — mirrors AgriMapOverview.
 * COPY AND IMAGE ARE PLACEHOLDERS; replace with real AgriPath content.
 */

import React from "react";
import Image from "next/image";
import { MapPinned, ScrollText, Boxes, CalendarCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AgriPathOverview() {
  const features = [
    {
      icon: <MapPinned size={36} strokeWidth={1.5} className="text-[#1D1EE3]" />,
      title: "Zone-by-zone compatibility scoring",
      desc: "Match products with climate, soil, pH, and temperature conditions.",
    },
    {
      icon: <ScrollText size={36} strokeWidth={1.5} className="text-[#1D1EE3]" />,
      title: "Statutory regulatory mapping",
      desc: "Identify required authorities, certifications, documents, and HS codes.",
    },
    {
      icon: <Boxes size={36} strokeWidth={1.5} className="text-[#1D1EE3]" />,
      title: "Multi-category technology support",
      desc: "Evaluate seeds, fertilizers, crop protection, biologicals, and machinery.",
    },
    {
      icon: (
        <CalendarCheck size={36} strokeWidth={1.5} className="text-[#1D1EE3]" />
      ),
      title: "Deployment-ready go-to-market plans",
      desc: "Turn each match into a 90-day commercialization roadmap.",
    },
  ];

  return (
    <section className="w-full bg-[#F7F5F1] font-['Inter_Tight']">
      <div className="page-container mx-auto flex flex-col gap-16">
        {/* ── TOP HEADLINE BLOCK ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start pb-8">
          <div className="lg:col-span-7 flex flex-col gap-3">
            <Reveal
              as="span"
              variant="left"
              custom={0}
              className="font-medium text-primary tracking-wide"
            >
              Product Overview
            </Reveal>
            <Reveal as="h2" variant="left" custom={1} className="font-semibold">
              One Platform For The Entire Market{" "}
              <em className="font-semibold">Entry Journey</em>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <Reveal
              as="p"
              variant="right"
              custom={0}
              className="tracking-wide leading-snug text-[#03030F]/70 max-w-full"
            >
              AgriPath brings agroclimatic data, regulations, and
              commercialization insights into one platform helping teams
              evaluate markets and launch technologies faster.
            </Reveal>
          </div>
        </div>

        {/* ── CORE FEATURES: IMAGE + LIST SIDE BY SIDE ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start w-full">
          {/* LEFT: dashboard mock */}
          <Reveal
            variant="left"
            custom={0}
            className="lg:col-span-6 w-full max-w-[695px] h-[450px] relative rounded-[20px] bg-[#1D1EE3]/10 overflow-hidden shadow-sm group border border-gray-200/50 flex justify-end items-end"
          >
            <div className="w-[94%] h-[92%] relative rounded-tl-[16px] overflow-hidden bg-white shadow-md">
              <Image
                src="/Productsoln/Agripath/PrOverview.jpg"
                alt="AgriPath dashboard overview"
                fill
                priority
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 695px"
                className="object-cover object-left-top"
              />
            </div>
          </Reveal>

          {/* RIGHT: feature list */}
          <div className="lg:col-span-6 flex flex-col gap-8 w-full max-w-[695px] h-auto py-1">
            {features.map((item, idx) => (
              <Reveal
                as="div"
                variant="right"
                custom={idx}
                key={idx}
                className="flex items-start gap-5 group"
              >
                <div className="w-20 h-20 shrink-0 bg-white rounded-[20px] flex items-center justify-center border border-[#03030F]/5 shadow-sm transition-all duration-300">
                  <div className="transition-colors duration-300 text-[#1D1EE3]">
                    {item.icon}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 pt-1.5">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="tracking-wide leading-snug text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
