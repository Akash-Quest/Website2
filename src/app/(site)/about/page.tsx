'use client';

import AboutUsHero from "@/components/features/AboutUsHero";
import AboutUsPillars from "@/components/features/AboutUsPillars"; 
import AboutUsPractices from "@/components/features/AboutUsPractices";
import AboutUsHowWeWork from "@/components/features/AboutUsHowWeWork"; 
import CaseStudies from "@/components/features/HomeCaseStudie";
import StatsAbout from '@/components/ui/StatsAbout';
import OurGlobalPresence from "@/components/features/HomeGlobalPresence";
import CareersHero from "@/components/features/HomeCareer";
import FAQSection from "@/components/features/Faq";
import Suscribe from "@/components/features/Suscribe";
import { caseStudiesData } from "@/Constants/caseStudies";
import {insightData} from "@/Constants/Insight ";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-background">
        <div className="hero-container">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="pb-2 px-4 lg:px-0">
            <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
              <li>
                <Link href="/" className="hover:text-muted transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                <Link href="/what-we-do" className="hover:text-muted transition-colors">
                  About SkyQuest
                </Link>
              </li>
            </ol>
          </nav>
          
          <div className="px-2 sm:px-2 md:px-[10%]">
          </div>
        </div>
      </section>

      {/* Hero Component Render Area */}
      <AboutUsHero /> 
      <StatsAbout/>
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