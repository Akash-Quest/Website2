'use client';

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface AboutUsHeroProps {
  onTalkToExperts?: () => void;
  onOpenCapabilities?: () => void;
}

export default function AboutUsHero({ onTalkToExperts, onOpenCapabilities }: AboutUsHeroProps) {
  return (
    <section className="relative w-full bg-[#F7F5F1] overflow-hidden min-h-[550px] md:min-h-[600px] lg:min-h-[650px] flex items-center  font-['Inter_Tight']">
      
      {/* ── BACKGROUND FULL-BLEED IMAGE LAYER ── */}
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
      <div className="relative w-full z-10 hero-container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Text Content & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-white">
          
          {/* Eyebrow Label */}
          <span className="font-semibold text-[#1D1EE3] tracking-wide mb-4 ">
            About SkyQuest
          </span>

          {/* Main Giant Heading */}
          <h1 className="font-semibold leading-tight  tracking-tight mb-6">
            Transforming <br />
            Business Through <br />
            <em className="font-semibold text-white/90 normal-case">Strategy & Technology</em>
          </h1>

          {/* Description Body Paragraph */}
          <p className="leading-snug tracking-wide text-white/80 max-w-[620px] mb-8">
            SkyQuest is a global consulting firm helping leaders grow, transform digitally, and build sustainable impact across strategy, technology, research and social development
          </p>

          {/* CTAs Flex Framework Mapping */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Button 1: Talk To Our Experts */}
            

          </div>
        </div>

        {/* RIGHT COLUMN: Spacing handle for the two persons background cut-out */}
        <div className="hidden lg:block lg:col-span-5 h-full pointer-events-none" />

      </div>
    </section>
  );
}