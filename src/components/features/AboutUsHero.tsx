'use client';

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

interface AboutUsHeroProps {
  onTalkToExperts?: () => void;
  onOpenCapabilities?: () => void;
}

export default function AboutUsHero({ onTalkToExperts, onOpenCapabilities }: AboutUsHeroProps) {
  return (
    <section className="relative w-full bg-[#F7F5F1] overflow-hidden min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-center select-none font-['Inter_Tight']">
      
      {/* ── BACKGROUND FULL-BLEED IMAGE LAYER ── */}
      {/* Isme aapki sky/cloud aur arrow background image crop baitegi */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/AboutUs/AboutUsHero.jpg"
          alt="About SkyQuest Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* ── CONTENT CONTAINER OVERLAY ── */}
      <div className="relative w-full z-10 px-6 sm:px-12 lg:px-[8%] py-20 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-white">
          
          {/* Eyebrow Label */}
          <span className="text-sm md:text-base font-semibold text-[#1D1EE3] tracking-wide mb-4 ">
            About Us
          </span>

          {/* Main Giant Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[64px] lg:text-[72px] font-bold leading-tight lg:leading-[84px] tracking-tight mb-6">
            Transforming <br />
            Business Through <br />
            <span className="font-light italic font-[Playfair_Display] text-white/90 normal-case">Strategy & Technology</span>
          </h1>

          {/* Description Body Paragraph */}
          <p className="text-base md:text-lg leading-relaxed text-white/80 max-w-[620px] mb-8">
            SkyQuest is a global consulting firm helping leaders grow, transform digitally, and build sustainable impact across strategy, technology, research and social development.
          </p>

          {/* CTAs Flex Framework Mapping */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Button 1: Talk To Our Experts */}
            <button 
              onClick={onTalkToExperts}
              className="h-14 pl-6 pr-1.5 bg-[#1D1EE3] hover:bg-[#1516b8] text-white font-medium rounded-xl flex items-center justify-between gap-6 transition-all shadow-md group cursor-pointer"
            >
              <span className="text-base font-semibold tracking-wide">Talk To Our Experts</span>
              <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center text-[#1D1EE3] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
            </button>

            {/* Button 2: Capabilities Deck */}
            <button 
              onClick={onOpenCapabilities}
              className="h-14 pl-6 pr-1.5 bg-white hover:bg-gray-50 text-[#03030F] font-medium rounded-xl flex items-center justify-between gap-6 transition-all shadow-sm group cursor-pointer"
            >
              <span className="text-base font-semibold tracking-wide">Capabilities Deck</span>
              <div className="w-11 h-11 bg-[#03030F] rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={20} strokeWidth={2.5} />
              </div>
            </button>

          </div>
        </div>

        {/* RIGHT COLUMN: Spacing handle for the two persons background cut-out */}
        <div className="hidden lg:block lg:col-span-5 h-full pointer-events-none" />

      </div>
    </section>
  );
}