'use client';

import React from 'react';
import SQLabHero from '@/components/features/SQLabHero';
import SQProblem from '@/components/features/SQProblem'; 
import SQLabSteps from '@/components/features/SQLabSteps';
import SQLabWIF from '@/components/features/SQLabWIF'; 
import SQLabsFeatures from '@/components/features/SQLabsFeatures'; 
import SQLabPlatform from '@/components/features/SQLabPlatform';
import CaseStudies from "@/components/features/HomeCaseStudie";
import { caseStudiesData } from "@/Constants/AgriCS";
import FAQSection from "@/components/features/Faq";
import {SQLabFaqs} from "@/Constants/FaqSQLab";
import Suscribe from "@/components/features/Suscribe";
import Stats3 from '@/components/ui/Stats3';

import {insightData} from "@/Constants/Insight ";
import Image from "next/image";
import Link from "next/link";


export default function SkyquestLabsPage() {
  return (
    <main className="w-full bg-[#F7F5F1] ">
      {/* Layer 1: Global Platform Banner Area */}
      <SQLabHero />
      <Stats3 />
      <SQProblem /> 
      <SQLabSteps /> 
      <SQLabWIF/> 
      <SQLabsFeatures /> 
      <SQLabPlatform />
      <CaseStudies {...caseStudiesData} />
      <FAQSection  faqs={SQLabFaqs} />
      <CaseStudies {...insightData} />
      <Suscribe />



      {/* Next sections layout lines will stack directly here */}
    </main>
  );
}