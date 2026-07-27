import Image from "next/image";
import HeroSlider from "@/components/features/Hero";
import Marquee from "@/components/features/Marquee";
import StatsGrid from "@/components/ui/Stats4";
import CoreCapabilities from "@/components/features/HomeCoreCapabilities";
import InsightImpact from "@/components/features/HomeInsightImpact";
import OurProductSolution from "@/components/features/HomeProductSolution";
import CaseStudies from "@/components/features/HomeCaseStudie";
import { Car, CaseLower } from "lucide-react";
import OurGlobalPresence from "@/components/features/HomeGlobalPresence";
import MarketIntelligence from "@/components/features/HomeMarketInteligence";
import CareersHero from "@/components/features/HomeCareer";
import FAQSection from "@/components/features/Faq";
import Suscribe from "@/components/features/Suscribe";
import { caseStudiesData } from "@/Constants/caseStudies";
import {insightData} from "@/Constants/Insight "

export default function Home() {
  return (
    <>
    <HeroSlider />
    <Marquee />
    <StatsGrid />
    <CoreCapabilities />
    <InsightImpact />
    <OurProductSolution />
    <CaseStudies {...caseStudiesData} />
    <OurGlobalPresence />
    <MarketIntelligence />
    <CaseStudies {...insightData} />
    <CareersHero />
    <FAQSection />
    <Suscribe />
    
    </>
  );
}
