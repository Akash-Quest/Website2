
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import CaseStudies from '@/components/features/HomeCaseStudie';
import OtherServicesSection from '@/components/features/OtherServices';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { caseStudiesData } from '@/Constants/caseStudies';
import StatsGrid from '@/components/ui/Stats4';

import OurCapabilities from '@/components/features/CoreCapa';
import WhyUsResearch from '@/components/features/BusinessIntel/WhyUsReasearch';
import {
  BusinessIntelHeroData,
  BusinessIntelOurCapabilitiesData,
  BusinessIntelWhyUsData,
  BusinessIntelFaqData,
} from '@/Constants/Service/BusinessIntel';
import IndustriesWeServe2 from '@/components/features/IndustriesWeSurve2';
import FeaturedReport from '@/components/features/BusinessIntel/FeaturedReport';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Intelligence & Market Research Services | SkyQuest",

  description:
    "Delivering market intelligence, industry research, competitive analysis, and strategic insights that drive informed business decisions.",

  keywords: [
    "market research services",
    "business intelligence consulting",
    "market intelligence",
    "competitive analysis",
    "industry research",
  ],

  alternates: {
    canonical:
      "https://www.skyquestt.com/services/business-intelligence",
  },

  openGraph: {
    title: "Intelligence That Drives Better Decisions",
    description:
      "Delivering market intelligence, industry research, competitive analysis, and strategic insights that drive informed business decisions.",
    url:
      "https://www.skyquestt.com/services/business-intelligence",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Intelligence That Drives Better Decisions",
    description:
      "Delivering market intelligence, industry research, competitive analysis, and strategic insights that drive informed business decisions.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...BusinessIntelHeroData} />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGrid
       sectionPadding="py-0"
       stats={[
         { target: 4.2, prefix: "$", suffix: "B", decimals: 1, label: "Revenue Impact Delivered" },
         { target: 96, suffix: "%+", label: "Client Satisfaction Rate" },
         { target: 60, suffix: "+", label: "Industry Sectors Covered" },
         { target: 80, suffix: "+", label: "Countries" },
       ]}
     />
     <OurCapabilities {...BusinessIntelOurCapabilitiesData} />
     <WhyUsResearch {...BusinessIntelWhyUsData} />
     <IndustriesWeServe2 />
     <FeaturedReport />
     
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' currentHref="/services/business-intelligence-market-research" />
     <CaseStudies {...insightData}/>
     <FAQSection  faqs={BusinessIntelFaqData} />
     <Suscribe />
     </>)

}


