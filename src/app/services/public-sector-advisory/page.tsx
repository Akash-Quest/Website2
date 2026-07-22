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
  PublicSectorHeroData,
  PublicSectorOurCapabilitiesData,
  PublicSectorWeOfferData,
  PublicSectorOtherServicesData,
  PublicSectorFaqData,
} from '@/Constants/Service/PublicSector';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Sector Advisory & Government Consulting | SkyQuest",

  description:
    "Supporting governments and institutions through policy advisory, governance reform, digital transformation, and implementation support.",

  keywords: [
    "public sector consulting",
    "government consulting",
    "governance advisory",
    "policy consulting",
    "institutional strengthening",
  ],

  alternates: {
    canonical: "https://www.skyquestt.com/services/public-sector",
  },

  openGraph: {
    title: "Enabling Modern Governments & Institutions",
    description:
      "Supporting governments and institutions through policy advisory, governance reform, digital transformation, and implementation support.",
    url: "https://www.skyquestt.com/services/public-sector",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Enabling Modern Governments & Institutions",
    description:
      "Supporting governments and institutions through policy advisory, governance reform, digital transformation, and implementation support.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...PublicSectorHeroData} />
  )
}
export default function PublicSectorService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...PublicSectorOurCapabilitiesData} />
     <WhatWeOfferGrid {...PublicSectorWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' services={PublicSectorOtherServicesData} />
     <CaseStudies {...insightData}/>
     <FAQSection  faqs={PublicSectorFaqData} />
     <Suscribe />


     </>)

}


