'use client';

import React from 'react';
import Image from 'next/image';
import { BackwardItem, Map, DocumentText, MoneySend, Chart, Bill } from 'iconsax-react';

export default function MineralIQOverview() {
  return (
    <section className="w-full bg-[#F7F5F1] py-16 sm:py-24 md:py-32 px-4 sm:px-8 lg:px-[8%] font-['Inter_Tight']">
      <div className="max-w-[1920px] mx-auto flex flex-col gap-8 md:gap-10">
        
        {/* ── ROW 1: HEADER LAYOUT BLOCK (1420 x 167) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start pb-8">
          <div className="lg:col-span-7 flex flex-col gap-2">
            <p className=" text-primary font-semibold">
              Platform Features
            </p>
            <h2 className="font-semibold text-4xl sm:text-5xl md:text-[52px] tracking-tight text-[#03030F] leading-tight md:leading-[60px]">
              One platform. Any jurisdiction. <br />
              <em className="font-semibold">Every mineral.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-sm md:text-base leading-relaxed text-[#03030F]/70 max-w-[440px]">
              Six integrated modules deployable for any national mining authority from cadastre mapping to satellite enforcement, royalty tracking to investor portals.
            </p>
          </div>
        </div>

        {/* ── ROW 2: SATELLITE CHANGE DETECTION CARD (1420 x 468) ── */}
        <div className="w-full min-h-[400px] md:h-[468px] bg-white rounded-[20px] border border-gray-200/50 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch p-2.5 sm:p-3">
          <div className="p-8 md:p-12 md:col-span-5 flex flex-col justify-center gap-4">
            <div className="w-20 h-20 bg-[#F7F5F1] rounded-[20px] flex items-center justify-center text-[#1D1EE3] shrink-0">
              <BackwardItem size={40} color="#000000" variant="Linear" />
            </div>
            <h3 className="font-semibold text-2xl text-[#03030F]">
              Satellite Change <em className="font-semibold">Detection</em>
            </h3>
            <p className="text-sm leading-relaxed text-[#03030F]/70">
              Sentinel-2 NDVI analysis on every active licence with a 5-day revisit cycle. Auto-flags boundary breaches, tailings expansion, new haul roads, and forest loss inside protected-area buffers before an inspector sets foot on site.
            </p>
          </div>

          {/* FIGMA EXACT ROTATED IMAGE WRAPPER */}
          <div className="relative md:col-span-7 min-h-[300px] md:min-h-full overflow-hidden">
            <div className="relative md:col-span-7 min-h-[260px] md:min-h-full w-full rounded-[20px] overflow-hidden">
                <Image
                    src="/Productsoln/MineralOver1.png" 
                    alt="Feature Visual Representation"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                />
                </div>
          </div>
        </div>

        {/* ── ROW 3: TWO SPLIT CARDS (695 x 311 Each) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full">
          {/* Card 1: Map & Cadastre */}
          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-200/50 shadow-sm flex flex-col gap-4 min-h-[311px] justify-center">
            <div className="w-20 h-20 bg-[#F7F5F1] rounded-[20px] flex items-center justify-center text-[#1D1EE3] shrink-0">
              <Map size={40} color="#000000" variant="Linear" />
            </div>
            <h3 className="font-semibold text-2xl text-[#03030F]">
              Map & <em className="font-semibold">Cadastre</em>
            </h3>
            <p className="text-sm leading-relaxed text-[#03030F]/70">
              Interactive GIS mapping layer integrating active concessions, lease status, mineral deposits, and overlapping land-use restrictions in real time.
            </p>
          </div>

          {/* Card 2: Compliance & Regulatory */}
          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-200/50 shadow-sm flex flex-col gap-4 min-h-[311px] justify-center">
            <div className="w-20 h-20 bg-[#F7F5F1] rounded-[20px] flex items-center justify-center text-[#1D1EE3] shrink-0">
              <DocumentText size={40} color="#000000" variant="Linear" />
            </div>
            <h3 className="font-semibold text-2xl text-[#03030F]">
              Compliance & <em className="font-semibold">Regulatory</em>
            </h3>
            <p className="text-sm leading-relaxed text-[#03030F]/70">
              District-level heatmap scoring every jurisdiction across EIA, Mercury, Forest, Royalty, Boundary, Reports, ASM, and Overall dimensions. Drill into any cell. Dispatch inspectors directly from an alert.
            </p>
          </div>
        </div>

        {/* ── ROW 4: TWO SPLIT CARDS (695 x 311 Each) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full">
          {/* Card 3: Royalty & EITI */}
          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-200/50 shadow-sm flex flex-col gap-4 min-h-[311px] justify-center">
            <div className="w-20 h-20 bg-[#F7F5F1] rounded-[20px] flex items-center justify-center text-[#1D1EE3] shrink-0">
              <MoneySend size={40} color="#000000" variant="Linear" />
            </div>
            <h3 className="font-semibold text-2xl text-[#03030F]">
              Royalty & <em className="font-semibold">EITI</em>
            </h3>
            <p className="text-sm leading-relaxed text-[#03030F]/70">
              Revenue tracking and leakage detection against EITI reporting standards. Cross-reference production filings with export data to surface under-declaration.
            </p>
          </div>

          {/* Card 4: Investor Portal & Deal Flow */}
          <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-200/50 shadow-sm flex flex-col gap-4 min-h-[311px] justify-center">
            <div className="w-20 h-20 bg-[#F7F5F1] rounded-[20px] flex items-center justify-center text-[#1D1EE3] shrink-0">
              <Chart size={40} color="#000000" variant="Linear" />
            </div>
            <h3 className="font-semibold text-2xl text-[#03030F]">
              Investor Portal & <em className="font-semibold">Deal Flow</em>
            </h3>
            <p className="text-sm leading-relaxed text-[#03030F]/70">
              Public-facing block library, open tender rooms, and PSA bidding. Investors access due diligence data concession history, compliance scores, satellite evidence packs without needing regulator access.
            </p>
          </div>
        </div>

        {/* ── ROW 5: ASM FORMALISATION LARGE IMAGE CARD (1420 x 468) ── */}
        <div className="w-full min-h-[400px] md:h-[468px] bg-white rounded-[20px] border border-gray-200/50 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch p-2.5 sm:p-3">
            <div className="p-8 md:p-12 md:col-span-5 flex flex-col justify-center gap-4">
            <div className="w-20 h-20 bg-[#F7F5F1] rounded-[20px] flex items-center justify-center text-[#1D1EE3] shrink-0">
              <Bill size={40} color="#000000" variant="Linear" />
            </div>
            <h3 className="font-semibold" >
              ASM <em className="font-semibold">Formalisation</em>
            </h3>
            <p className="text-sm text-muted">
              Cooperative onboarding and Hg phase-out tracking for artisanal miners. Monitor ASM hotspot density, formalisation progress, and mercury risk by district.
            </p>
          </div>

          {/* FIGMA EXACT ROTATED IMAGE WRAPPER */}
            <div className="relative md:col-span-7 min-h-[260px] md:min-h-full w-full rounded-[20px] overflow-hidden">

              <div className="relative w-full h-full md:scale-110 rounded-tr-[20px] overflow-hidden">
                <Image
                  src="/Productsoln/MineralOver2.png"
                  alt="Artisanal Mining Site Excavators Operations"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
          </div>
        </div>

      </div>
    </section>
  );
}