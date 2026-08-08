
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import CaseStudies from '@/components/features/HomeCaseStudie';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { getRelatedByTag } from '@/lib/relatedContent';
import { caseStudiesData } from '@/Constants/caseStudies';
import StatsGrid from '@/components/ui/Stats4';
import { ArtificalIntelFaqData, ArtificialHeroData } from '@/Constants/Service/ArtificialIntel';
import Technologies from '@/components/features/ArtificialIntel/Technologies';
import WeServe from '@/components/features/ArtificialIntel/WeServe';
import EnterpriseAiSolution from '@/components/features/ArtificialIntel/EnterpriseAiSolution';
import OtherServicesSection from '@/components/features/OtherServices';
import EnterpriseChallenges from '@/components/features/ArtificialIntel/EnterpriseChallenges';

import TransformAccordion from '@/components/features/HomeInsightImpac';
function HeroPage(){
  return(
    <ServiceHeroPage {...ArtificialHeroData} />
  )
}
import type { Metadata } from "next";



export const metadata: Metadata = {
  title:
    "Data & Artificial Intelligence: AI Transformation with Generative AI & Agentic AI | SkyQuest",

  description:
    "Data and AI consulting services - from strategy to deployment. Turn data into automated, intelligent decisions that scale.",

  keywords: [
    "AI consulting services",
    "enterprise AI",
    "AI transformation",
    "generative AI",
    "machine learning consulting",
  ],

  alternates: {
    canonical:
      "https://www.skyquestt.com/capabilities/artificial-intelligence-and-data",
  },

  openGraph: {
    title: "Transforming Enterprises Through Data & AI",
    description:
      "Data and AI consulting services - from strategy to deployment. Turn data into automated, intelligent decisions that scale.",
    url:
      "https://www.skyquestt.com/capabilities/artificial-intelligence-and-data",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Transforming Enterprises Through Data & AI",
    description:
      "Data and AI consulting services - from strategy to deployment. Turn data into automated, intelligent decisions that scale.",
  },
};
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGrid
       stats={[
         { target: 50, suffix: "+", label: "Enterprise Clients" },
         { target: 12, suffix: "+", label: "Countries" },
         { target: 500, prefix: "₹", suffix: "Cr+", label: "Value Delivered" },
         { text: "ISO 27001", label: "27001 Certified" },
       ]}
     />
     <EnterpriseChallenges />
     <TransformAccordion
       eyebrow="How We Help"
       heading={<>How We Help Organizations Transform <em className="font-semibold">with Enterprise AI</em></>}
       description="From AI strategy and solution development to enterprise integration and scalable deployment, we help organizations turn AI opportunities into measurable business outcomes."
       buttonLabel="Speak To Partner"
       cards={[
         { title: "Strategic AI Readiness & Roadmapping", body: "Assess AI readiness, identify high-value opportunities, and develop practical transformation roadmaps aligned with business priorities." },
         { title: "Build Intelligent AI Solutions", body: "Develop custom AI solutions, enterprise applications, data infrastructure, and intelligent workflows designed for real-world business needs." },
         { title: "Integrate AI Across Enterprise Systems", body: "Connect AI with ERP, CRM, APIs, legacy systems, and existing technology ecosystems for seamless enterprise integration." },
         { title: "Scale & Optimize AI Operations", body: "Operationalize AI through MLOps, managed AI services, continuous monitoring, and optimization to deliver sustained business value." },
       ]}
     />
    <EnterpriseAiSolution />
      <WeServe /> 
     <CaseStudies {...caseStudiesData} caseStudies={getRelatedByTag(caseStudiesData.caseStudies, "capability", "Data & Artificial Intelligence")} bgClassName='bg-white'/>
           
    <Technologies />
    <CaseStudies {...insightData} caseStudies={getRelatedByTag(insightData.caseStudies, "capability", "Data & Artificial Intelligence")} bgClassName='bg-white'/>
     <OtherServicesSection bgClassName='bg-background' currentHref="/capabilities/data-artificial-intelligence" />
     <FAQSection  faqs={ArtificalIntelFaqData} />
     <Suscribe />
     </>)

}


