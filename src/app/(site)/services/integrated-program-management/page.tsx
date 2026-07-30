import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import CaseStudies from '@/components/features/HomeCaseStudie';
import OtherServicesSection from '@/components/features/OtherServices';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { caseStudiesData } from '@/Constants/caseStudies';
import IntegratedCapabilities from '@/components/features/CoreCapa2';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  IntegratedProgramHeroData,
  IntegratedProgramCapabilitiesData,
  IntegratedProgramWeOfferData,
  IntegratedProgramFaqData,
} from '@/Constants/Service/IntegratedProgram';
function HeroPage(){
  return(
    <ServiceHeroPage {...IntegratedProgramHeroData} />
  )
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated Program Management Services | SkyQuest",

  description:
    "Design, coordinate, and manage complex programs through governance, implementation, monitoring, and impact measurement.",

  keywords: [
    "program management consulting",
    "PMO services",
    "program implementation",
    "transformation management",
    "impact management",
  ],

  alternates: {
    canonical:
      "https://www.skyquestt.com/services/integrated-program-management",
  },

  openGraph: {
    title: "Delivering Impact at Scale",
    description:
      "Design, coordinate, and manage complex programs through governance, implementation, monitoring, and impact measurement.",
    url:
      "https://www.skyquestt.com/services/integrated-program-management",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Delivering Impact at Scale",
    description:
      "Design, coordinate, and manage complex programs through governance, implementation, monitoring, and impact measurement.",
  },
};
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <IntegratedCapabilities {...IntegratedProgramCapabilitiesData} />
     <WhatWeOfferGrid {...IntegratedProgramWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' currentHref="/services/integrated-program-management" />
     <CaseStudies {...insightData}/>
     <FAQSection  faqs={IntegratedProgramFaqData} />
     <Suscribe />
     </>)

}


