import Image from "next/image";
import HeroSlider from "@/components/features/Hero";
import Marquee from "@/components/features/Marquee";
import StatsGrid from "@/components/ui/Stats4";
import CoreCapabilities from "@/components/features/HomeCoreCapabilities";

import OurProductSolution from "@/components/features/HomeProductSolution";
import CaseStudies from "@/components/features/HomeCaseStudie";
import OurGlobalPresence from "@/components/features/HomeGlobalPresence";
import MarketIntelligence from "@/components/features/HomeMarketInteligence";
import CareersHero from "@/components/features/HomeCareer";
import FAQSection from "@/components/features/Faq";
import Suscribe from "@/components/features/Suscribe";
import Footer from "@/components/ui/Footer";
import { caseStudiesData } from "@/Constants/caseStudies";
import {insightData} from "@/Constants/Insight "
import { defaultFaqs } from "@/Constants/FaqDetails";
import TransformAccordion from "@/components/features/HomeInsightImpac";

export default function Home() {
  return (
    <>
    <HeroSlider />
    <Marquee />
    <StatsGrid />
    <CoreCapabilities />
    <TransformAccordion />
    <OurProductSolution />
    <CaseStudies {...caseStudiesData} bgClassName="bg-background" />
    <OurGlobalPresence />
    <MarketIntelligence />
    <CaseStudies {...insightData} bgClassName="bg-white" />
    <CareersHero />
    <FAQSection faqs={defaultFaqs} />
    <Suscribe />
  
    </>
  );
}
