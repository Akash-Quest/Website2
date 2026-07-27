'use client';

import React from 'react';
import MineralIQHero from '@/components/features/MineralIQHero';
import MineralIQOverview from '@/components/features/MineralIQOverview'; 
import MineralIQSteps from '@/components/features/MineralIQSteps';
import MineralIQFeatures from '@/components/features/MineralIQFeatures'; 
import MineralIQDeps from '@/components/features/MineralIQDeps'; 
import CaseStudies from "@/components/features/HomeCaseStudie";
import FAQSection from "@/components/features/Faq";
import {mineralFaqs} from "@/Constants/FaqMineral";
import Suscribe from "@/components/features/Suscribe";
import {insightData} from "@/Constants/Insight ";
import Stats3 from '@/components/ui/Stats3';
import Image from "next/image";
import Link from "next/link";


export default function MineralIQPage() {
  return (
    <main className="w-full bg-[#F7F5F1] ">
      {/* Layer 1: Global Platform Banner Area */}
      <MineralIQHero />
      <Stats3/>
      <MineralIQOverview /> 
      <MineralIQSteps /> 
      <MineralIQFeatures/> 
      <MineralIQDeps /> 
      <CaseStudies {...insightData} />
      <FAQSection  faqs={mineralFaqs} />
      <Suscribe />



      {/* Next sections layout lines will stack directly here */}
    </main>
  );
}