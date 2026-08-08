import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import { getRelatedByTag } from '@/lib/relatedContent';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import {
  TechnologyTransferHeroData,
  TechnologyTransferOurCapabilitiesData,
  TechnologyTransferWeOfferData,
  TechnologyTransferFaqData,
} from '@/Constants/Service/technologyTransfer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Transfer & Innovation | SkyQuest",

  description:
    "SkyQuest partners with governments, research institutions, and enterprises to transfer technology, commercialize innovation, and build the ecosystems needed for sustainable technological advancement.",

  keywords: [
    "technology transfer",
    "innovation advisory",
    "commercialization strategy",
    "research and development consulting",
    "institutional strengthening",
  ],

  alternates: {
    canonical: "https://www.skyquestt.com/capabilities/technology-transfer-innovation",
  },

  openGraph: {
    title: "Transferring Technology. Accelerating Innovation.",
    description:
      "SkyQuest partners with governments, research institutions, and enterprises to transfer technology, commercialize innovation, and build the ecosystems needed for sustainable technological advancement.",
    url: "https://www.skyquestt.com/capabilities/technology-transfer-innovation",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Transferring Technology. Accelerating Innovation.",
    description:
      "SkyQuest partners with governments, research institutions, and enterprises to transfer technology, commercialize innovation, and build the ecosystems needed for sustainable technological advancement.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...TechnologyTransferHeroData} />
  )
}
export default function TechnologyTransferInnovationService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...TechnologyTransferOurCapabilitiesData} />
     <WhatWeOfferGrid {...TechnologyTransferWeOfferData} />
     <CaseStudies {...caseStudiesData} caseStudies={getRelatedByTag(caseStudiesData.caseStudies, "capability", "Technology Transfer & Innovation")} />
     <OtherServicesSection bgClassName='bg-white' currentHref="/capabilities/technology-transfer-innovation" />
     <CaseStudies {...insightData} caseStudies={getRelatedByTag(insightData.caseStudies, "capability", "Technology Transfer & Innovation")}/>
     <FAQSection  faqs={TechnologyTransferFaqData} />
     <Suscribe />


     </>)

}
