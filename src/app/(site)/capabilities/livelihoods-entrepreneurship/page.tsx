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
  LivelihoodsHeroData,
  LivelihoodsOurCapabilitiesData,
  LivelihoodsWeOfferData,
  LivelihoodsFaqData,
} from '@/Constants/Service/livelihoods';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livelihoods & Entrepreneurship | SkyQuest",

  description:
    "SkyQuest partners with governments, development institutions, and enterprises to strengthen livelihoods, expand entrepreneurship, and build resilient, income-generating opportunities for communities.",

  keywords: [
    "livelihoods advisory",
    "entrepreneurship development",
    "economic inclusion",
    "development consulting",
    "institutional strengthening",
  ],

  alternates: {
    canonical: "https://www.skyquestt.com/capabilities/livelihoods-entrepreneurship",
  },

  openGraph: {
    title: "Building Livelihoods. Enabling Entrepreneurship.",
    description:
      "SkyQuest partners with governments, development institutions, and enterprises to strengthen livelihoods, expand entrepreneurship, and build resilient, income-generating opportunities for communities.",
    url: "https://www.skyquestt.com/capabilities/livelihoods-entrepreneurship",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Building Livelihoods. Enabling Entrepreneurship.",
    description:
      "SkyQuest partners with governments, development institutions, and enterprises to strengthen livelihoods, expand entrepreneurship, and build resilient, income-generating opportunities for communities.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...LivelihoodsHeroData} />
  )
}
export default function LivelihoodsEntrepreneurshipService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...LivelihoodsOurCapabilitiesData} />
     <WhatWeOfferGrid {...LivelihoodsWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' currentHref="/capabilities/livelihoods-entrepreneurship" />
     <CaseStudies {...insightData}/>
     <FAQSection  faqs={LivelihoodsFaqData} />
     <Suscribe />


     </>)

}
