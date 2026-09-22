import type { Metadata } from "next";

import AgriPathHero from "@/components/features/AgriPath/AgriPathHero";
import AgriPathOverview from "@/components/features/AgriPath/AgriPathOverview";
import AgriPathFeatures from "@/components/features/AgriPath/AgriPathFeatures";
import AgriPathSteps from "@/components/features/AgriPath/AgriPathSteps";
import AgriPathUseCases from "@/components/features/AgriPath/AgriPathUseCases";
import AgriPathAudience from "@/components/features/AgriPath/AgriPathAudience";

import StatsGridThree from "@/components/ui/Stats3";
import CaseStudies from "@/components/features/HomeCaseStudie";
import FAQSection from "@/components/features/Faq";
import Suscribe from "@/components/features/Suscribe";

import { caseStudiesData } from "@/Constants/caseStudies";
import { insightData } from "@/Constants/Insight ";
import { agriPathFaqs } from "@/Constants/FaqAgriPath";

export const metadata: Metadata = {
  title: "AgriPath | Agri-Technology Market Entry Platform | SkyQuest",
  description:
    "AgriPath AI takes any agri-technology from a technology profile to a scored, regulation-ready market entry plan across 90+ countries in Africa and Asia.",
  keywords: [
    "agri-technology market entry",
    "agroclimatic zone matching",
    "seed import regulatory pathway",
    "fertilizer registration Africa",
    "crop protection product registration",
    "go-to-market plan agriculture",
  ],
  alternates: {
    canonical: "https://www.skyquestt.com/products/agripath",
  },
};

export default function AgriPathPage() {
  return (
    <main className="w-full bg-[#F7F5F1]">
      <AgriPathHero />

      <StatsGridThree
        stats={[
          { target: 70, suffix: "+", label: "Countries covered" },
          { target: 5, suffix: "", label: "Workflow steps" },
          { target: 10, suffix: "+", label: "Technology categories" },
        ]}
      />

      <AgriPathOverview />

      <AgriPathFeatures />

      <AgriPathSteps />

      <AgriPathUseCases />

      <AgriPathAudience />

      <CaseStudies {...caseStudiesData} bgClassName="bg-white" />

      <FAQSection faqs={agriPathFaqs} bgClassName="bg-[#F7F5F1]" />

      <CaseStudies {...insightData} bgClassName="bg-white" />

      <Suscribe />
    </main>
  );
}
