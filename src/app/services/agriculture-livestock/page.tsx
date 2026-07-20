import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  AgricultureHeroData,
  AgricultureOurCapabilitiesData,
  AgricultureCoreCapabilitiesData,
  AgricultureWhatWeOfferData,
  AgricultureOtherServicesData,
  AgricultureFaqData,
} from '@/Constants/Service/Agriculture';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import OurCapabilities from '@/components/features/CoreCapa';
function HeroPage(){
  return(
    <ServiceHeroPage {...AgricultureHeroData} />
  )
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture & Livestock Consulting Services | SkyQuest",

  description:
    "Supporting sustainable agriculture, livestock systems, food security, and rural development through advisory and implementation services.",

  keywords: [
    "agriculture consulting",
    "agribusiness consulting",
    "livestock consulting",
    "food systems",
    "agricultural advisory",
  ],

  alternates: {
    canonical:
      "https://www.skyquestt.com/services/agriculture-livestock",
  },

  openGraph: {
    title: "Building Resilient Agriculture Systems",
    description:
      "Supporting sustainable agriculture, livestock systems, food security, and rural development through advisory and implementation services.",
    url: "https://www.skyquestt.com/services/agriculture-livestock",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Building Resilient Agriculture Systems",
    description:
      "Supporting sustainable agriculture, livestock systems, food security, and rural development through advisory and implementation services.",
  },
};
export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...AgricultureOurCapabilitiesData} />
     <ServiceCoreCapabilities {...AgricultureCoreCapabilitiesData} />
     <WhatWeOfferGrid {...AgricultureWhatWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' services={AgricultureOtherServicesData} />
     <CaseStudies {...insightData}/>
     <FAQSection faqs={AgricultureFaqData} />
     <Suscribe />
     </>)

}


