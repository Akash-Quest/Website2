import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import IndustriesWeServe from '@/components/features/IndustriesWeServe';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import {
  EsgHeroData,
  EsgOurCapabilitiesData,
  EsgWhatWeOfferData,
  EsgIndustriesWeServeData,
  EsgFaqData,
} from '@/Constants/Service/Esg';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Climate, Sustainability & ESG Advisory Services | SkyQuest",

  description:
    "Accelerate sustainability goals through climate strategy, ESG consulting, decarbonization, climate finance, and resilience advisory services.",

  keywords: [
    "ESG consulting services",
    "sustainability consulting",
    "climate advisory",
    "ESG strategy",
    "net zero consulting",
  ],

  alternates: {
    canonical:
      "https://www.skyquestt.com/capabilities/climate-change-sustainability",
  },

  openGraph: {
    title: "Building Sustainable & Resilient Organizations",
    description:
      "Accelerate sustainability goals through climate strategy, ESG consulting, decarbonization, climate finance, and resilience advisory services.",
    url:
      "https://www.skyquestt.com/capabilities/climate-change-sustainability",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Building Sustainable & Resilient Organizations",
    description:
      "Accelerate sustainability goals through climate strategy, ESG consulting, decarbonization, climate finance, and resilience advisory services.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...EsgHeroData} />
  )
}
export default function EsgService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...EsgOurCapabilitiesData} />
     <WhatWeOfferGrid {...EsgWhatWeOfferData} />
     <IndustriesWeServe {...EsgIndustriesWeServeData} />
     <CaseStudies {...caseStudiesData}  bgClassName='bg-white'/>
     <OtherServicesSection bgClassName='bg-background' currentHref="/capabilities/climate-sustainability-esg-advisory" />
     <CaseStudies {...insightData} bgClassName='bg-white'/>
     <FAQSection bgClassName='bg-background'  faqs={EsgFaqData} />
     <Suscribe className="pt-0"/>

     </>)

}


