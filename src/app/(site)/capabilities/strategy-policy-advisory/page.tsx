import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import {
  StrategyHeroData,
  StrategyOurCapabilitiesData,
  StrategyWeOfferData,
  StrategyFaqData,
} from '@/Constants/Service/strategy';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy & Policy Advisory | SkyQuest",

  description:
    "SkyQuest partners with governments, enterprises, investors, and institutions to build evidence-based strategies, policies, and transformation plans that create lasting economic, social, and business value.",

  keywords: [
    "strategy advisory",
    "policy advisory",
    "government consulting",
    "public policy consulting",
    "institutional strengthening",
  ],

  alternates: {
    canonical: "https://www.skyquestt.com/capabilities/strategy-policy-advisory",
  },

  openGraph: {
    title: "Shaping Strategies. Driving Sustainable Growth.",
    description:
      "SkyQuest partners with governments, enterprises, investors, and institutions to build evidence-based strategies, policies, and transformation plans that create lasting economic, social, and business value.",
    url: "https://www.skyquestt.com/capabilities/strategy-policy-advisory",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaping Strategies. Driving Sustainable Growth.",
    description:
      "SkyQuest partners with governments, enterprises, investors, and institutions to build evidence-based strategies, policies, and transformation plans that create lasting economic, social, and business value.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...StrategyHeroData} />
  )
}
export default function StrategyPolicyAdvisoryService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...StrategyOurCapabilitiesData} />
     <WhatWeOfferGrid {...StrategyWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' currentHref="/capabilities/strategy-policy-advisory" />
     <CaseStudies {...insightData}/>
     <FAQSection  faqs={StrategyFaqData} />
     <Suscribe />


     </>)

}

