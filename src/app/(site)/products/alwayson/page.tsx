'use client'; 

 

import React from 'react'; 

import AlwaysOnHero from '@/components/features/AlwaysOnHero'; 

import AlwaysOnProblem from '@/components/features/AlwaysOnProblem';  

import AlwaysOnFeatures from '@/components/features/AlwaysOnFeatures'; 

import AlwaysOnSteps from '@/components/features/AlwaysOnSteps';  

import AlwaysOnPlatform from '@/components/features/AlwaysOnPlatform';  

import AlwaysOnWIF from '@/components/features/AlwaysOnWIF'; 

import AlwaysOnDeps from '@/components/features/AlwaysOnDeps'; 

import CaseStudies from "@/components/features/HomeCaseStudie"; 

import { caseStudiesData } from "@/Constants/caseStudies"; 

import FAQSection from "@/components/features/Faq"; 

import {alwaysFaqs} from "@/Constants/FaqAlways"; 

import Suscribe from "@/components/features/Suscribe"; 

import Stats3 from '@/components/ui/Stats3'; 

import StatsGridThree from '@/components/ui/Stats3'; 

import {insightData} from "@/Constants/Insight "; 

import Image from "next/image"; 

import Link from "next/link"; 
import { Target } from 'lucide-react';

 

 

export default function AlwaysOnPage() { 

  return ( 

    <main className="w-full bg-[#F7F5F1] "> 

      {/* Layer 1: Global Platform Banner Area */} 

      <AlwaysOnHero /> 

      <StatsGridThree 

              stats={[ 

                { target: 3285, suffix: "", label: "Assessments today" }, 

                { target: 8, suffix: "", label: "Local languages" }, 

                { target:"24" ,suffix: "x7", label: "Always Available" }, 

              ] as any} 

      /> 

      <AlwaysOnProblem />  

      <AlwaysOnFeatures />  

      <AlwaysOnSteps/>  

      <AlwaysOnPlatform />  

      <AlwaysOnWIF /> 

      <AlwaysOnDeps /> 

      <CaseStudies {...caseStudiesData} bgClassName='bg-white' /> 

      <FAQSection  faqs={alwaysFaqs} bgClassName='bg-[#F7F5F1]'/> 

      <CaseStudies {...insightData} bgClassName='bg-white'/> 

      <Suscribe /> 

 

 

 

      {/* Next sections layout lines will stack directly here */} 

    </main> 

  ); 

} 