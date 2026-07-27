'use client';

import React from 'react';
import DecarbonHero from '@/components/features/DecarbonHero';
import DecarbonProblem from '@/components/features/DecarbonProblem'; 
import DecarbonSteps from '@/components/features/DecarbonSteps';
import DecarbonFeatures from '@/components/features/DecarbonFeatures'; 
import DecarbonWIF from '@/components/features/DecarbonWIF'; 
import DecarbonDeps from '@/components/features/DecarbonDeps'
import CaseStudies from "@/components/features/HomeCaseStudie";
import { caseStudiesData } from "@/Constants/AgriCS";
import FAQSection from "@/components/features/Faq";
import {decarbonFaqs} from "@/Constants/FaqDecarbon";
import Stats3 from '@/components/ui/Stats3';
import Suscribe from "@/components/features/Suscribe";
import {insightData} from "@/Constants/Insight ";
import Image from "next/image";
import Link from "next/link";


export default function DecarbonXPage() {
  return (
    <main className="w-full bg-[#F7F5F1] ">
      {/* Layer 1: Global Platform Banner Area */}
      <DecarbonHero />
      <Stats3/>
      <DecarbonProblem /> 
      <DecarbonSteps /> 
      <DecarbonFeatures/> 
      <DecarbonWIF /> 
      <DecarbonDeps />
      <CaseStudies {...caseStudiesData} bgClassName='bg-white' />
      <FAQSection  faqs={decarbonFaqs} bgClassName='bg-[#F7F5F1]'/>
      <CaseStudies {...insightData} bgClassName='bg-white'/>
      <Suscribe />



      {/* Next sections layout lines will stack directly here */}
    </main>
  );
}