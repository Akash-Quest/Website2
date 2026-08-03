'use client';

import React from 'react';
import InspectGlobalHero from '@/components/features/InspectGlobalHero';
import InspectGlobalOverview from '@/components/features/InspectGlobalOverview'; 
import InspectGlobalFeatures from '@/components/features/InspectGlobalFeatures'; 
import InspectGlobalSteps from '@/components/features/InspectGlobalSteps';
import InspectGlobalUseCases from '@/components/features/InspectGlobalUseCases'; 
import InspectGlobalAudience from '@/components/features/InspectGlobalAudience'; 
import CaseStudies from "@/components/features/HomeCaseStudie";
import { caseStudiesData } from '@/Constants/caseStudies';
import FAQSection from "@/components/features/Faq";
import {inspectFaqs} from "@/Constants/FaqInspect";
import Suscribe from "@/components/features/Suscribe";
import StatsGridThree from '@/components/ui/Stats3'; 
import Stats3 from '@/components/ui/Stats3';
import {insightData} from "@/Constants/Insight ";
import Image from "next/image";
import Link from "next/link";
 
export default function InspectGlobalPage() {
  return (
    <main className="w-full bg-[#F7F5F1] ">
      {/* Layer 1: Global Platform Banner Area */}

      <InspectGlobalHero />

      <StatsGridThree 

              stats={[ 

                { target: 32, suffix: "+", label: "Active Projects" }, 

                { target: 2.4, suffix: "M", label: "TCO₂e Generated" }, 

                { target: 47, suffix: "M USD", label: "Finance Mobilized" }, 

              ] as any} 

      /> 

      <InspectGlobalOverview /> 
      <InspectGlobalFeatures /> 
      <InspectGlobalSteps /> 
      <InspectGlobalUseCases /> 
      <InspectGlobalAudience /> 
      <CaseStudies {...caseStudiesData} bgClassName='bg-white'/>
      <FAQSection  faqs={inspectFaqs} bgClassName='bg-[#F7F5F1]'/>
      <CaseStudies {...insightData} bgClassName='bg-white'/>
      <Suscribe />



      {/* Next sections layout lines will stack directly here */}
    </main>
  );
}
