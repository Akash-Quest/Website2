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

import StatsGridThree from '@/components/ui/Stats3'; 

import Stats3 from '@/components/ui/Stats3'; 

import Image from "next/image"; 

import Link from "next/link"; 

 

 

export default function MineralIQPage() { 

  return ( 

    <main className="w-full bg-[#F7F5F1] "> 

      {/* Layer 1: Global Platform Banner Area */} 

      <MineralIQHero /> 

      <StatsGridThree 

              stats={[ 

                { target: 12, suffix: "+", label: "Countries" }, 

                { target: 4800, suffix: "+", label: "Concessions Live" }, 

                { target: 5, suffix: "d", label: "Revisit Cycle" }, 

              ] as any} 

      />       

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