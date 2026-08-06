
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import CaseStudies from '@/components/features/HomeCaseStudie';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
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
       eyebrow="What We Do"
       heading="AI-Powered Digital Transformation "
       description="A full-spectrum AI transformation partner helping organizations design, deploy, integrate, and scale intelligent solutions."
       buttonLabel="Speak To Partner"
       cards={[
         { title: "Placeholder Card Title 1", body: "Placeholder body copy 1 - replace with real content." },
         { title: "Placeholder Card Title 2", body: "Placeholder body copy 2 - replace with real content." },
         { title: "Placeholder Card Title 3", body: "Placeholder body copy 3 - replace with real content." },
         { title: "Placeholder Card Title 4", body: "Placeholder body copy 4 - replace with real content." },
       ]}
     />
    <EnterpriseAiSolution />
      <WeServe /> 
     <CaseStudies {...caseStudiesData} bgClassName='bg-white'/>
           
    <Technologies />
    <CaseStudies {...insightData} bgClassName='bg-white'/>
     <OtherServicesSection bgClassName='bg-background' currentHref="/capabilities/data-artificial-intelligence" />
     <FAQSection  faqs={ArtificalIntelFaqData} />
     <Suscribe />
     </>)

}


