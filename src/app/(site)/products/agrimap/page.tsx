'use client';

import React from 'react';
import AgriMapHero from '@/components/features/AgriMapHero';
import AgriMapOverview from '@/components/features/AgriMapOverview'; 
import AgriMapFeatures from '@/components/features/AgriMapFeatures'; 
import AgriMapSteps from '@/components/features/AgriMapSteps';
import AgriMapUseCases from '@/components/features/AgriMapUseCases'; 
import AgriMapAudience from '@/components/features/AgriMapAudience'; 
import CaseStudies from "@/components/features/HomeCaseStudie";
import { caseStudiesData } from '@/Constants/caseStudies';
import FAQSection from "@/components/features/Faq";
import {agriFaqs} from "@/Constants/FaqAgri";
import Suscribe from "@/components/features/Suscribe";
import Stats3 from '@/components/ui/Stats3';
import {insightData} from "@/Constants/Insight ";
import Image from "next/image";
import Link from "next/link";
import StatsGridThree from '@/components/ui/Stats3';


export default function AgriMapPage() {
  return (
    <main className="w-full bg-[#F7F5F1] ">
      {/* Layer 1: Global Platform Banner Area */}
      <AgriMapHero />
      <StatsGridThree
       
       stats={[
        { target: 38, suffix: "", label: "Districts Covered" },
  { target: 17, suffix: "", label: "New varieties tracked" },
  { target: 4, suffix: "", label: "Crop categories" },
       ]}
     />
      <AgriMapOverview /> 
      <AgriMapFeatures /> 
      <AgriMapSteps /> 
      <AgriMapUseCases /> 
      <AgriMapAudience /> 
      <CaseStudies {...caseStudiesData}  bgClassName='bg-white'/>
      <FAQSection faqs={agriFaqs} bgClassName='bg-[#F7F5F1]'/>
      <CaseStudies {...insightData} bgClassName='bg-white'/>
      <Suscribe />



      {/* Next sections layout lines will stack directly here */}
    </main>
  );
}