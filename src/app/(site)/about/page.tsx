'use client';


import AboutUsPillars from "@/components/features/AboutUsPillars"; 
import AboutUsPractices from "@/components/features/AboutUsPractices";
import AboutUsHowWeWork from "@/components/features/AboutUsHowWeWork"; 
import CaseStudies from "@/components/features/HomeCaseStudie";
import StatsGrid from '@/components/ui/Stats4';
import OurGlobalPresence from "@/components/features/HomeGlobalPresence";
import CareersHero from "@/components/features/HomeCareer";
import FAQSection from "@/components/features/Faq";
import Suscribe from "@/components/features/Suscribe";
import { caseStudiesData } from "@/Constants/caseStudies";
import {insightData} from "@/Constants/Insight ";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "@/components/features/AboutUs";

export default function AboutUsPage() {
  return (
    <>
      
      <AboutUs /> 
      <StatsGrid
        sectionPadding="py-12 lg:py-20"
        stats={[
          { target: 750, suffix: "+", label: "Clients worldwide" },
          { target: 20, suffix: "+", label: "Years in business" },
          { target: 65, suffix: "+", label: "Countries" },
          { target: 100, suffix: "+", label: "Partners" },

          
        ]}
      />

      <AboutUsPillars /> 
      
      <AboutUsPractices /> 
      <AboutUsHowWeWork /> 
      <CaseStudies {...caseStudiesData} />
      <OurGlobalPresence />
      <CaseStudies {...insightData} />
      <CareersHero />
      <FAQSection />
      <Suscribe />
    </>
  );
}