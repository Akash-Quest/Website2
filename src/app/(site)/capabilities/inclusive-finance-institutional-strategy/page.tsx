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
  InclusiveFinanceHeroData,
  InclusiveFinanceOurCapabilitiesData,
  InclusiveFinanceWeOfferData,
  InclusiveFinanceFaqData,
} from '@/Constants/Service/InclusiveFinance';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inclusive Finance & Institutional Strategy | SkyQuest",

  description:
    "SkyQuest partners with financial institutions, governments, and development partners to expand access to finance, strengthen institutional capacity, and build sustainable, inclusive financial systems.",

  keywords: [
    "inclusive finance consulting",
    "institutional strategy",
    "financial inclusion advisory",
    "development finance",
    "institutional strengthening",
  ],

  alternates: {
    canonical: "https://www.skyquestt.com/capabilities/inclusive-finance-institutional-strategy",
  },

  openGraph: {
    title: "Advancing Inclusive Finance. Strengthening Institutions.",
    description:
      "SkyQuest partners with financial institutions, governments, and development partners to expand access to finance, strengthen institutional capacity, and build sustainable, inclusive financial systems.",
    url: "https://www.skyquestt.com/capabilities/inclusive-finance-institutional-strategy",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Advancing Inclusive Finance. Strengthening Institutions.",
    description:
      "SkyQuest partners with financial institutions, governments, and development partners to expand access to finance, strengthen institutional capacity, and build sustainable, inclusive financial systems.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...InclusiveFinanceHeroData} />
  )
}
export default function InclusiveFinanceInstitutionalStrategyService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...InclusiveFinanceOurCapabilitiesData} />
     <WhatWeOfferGrid {...InclusiveFinanceWeOfferData} />
     <CaseStudies {...caseStudiesData} caseStudies={getRelatedByTag(caseStudiesData.caseStudies, "capability", "Inclusive Finance & Institutional Strategy")} />
     <OtherServicesSection bgClassName='bg-white' currentHref="/capabilities/inclusive-finance-institutional-strategy" />
     <CaseStudies {...insightData} caseStudies={getRelatedByTag(insightData.caseStudies, "capability", "Inclusive Finance & Institutional Strategy")}/>
     <FAQSection  faqs={InclusiveFinanceFaqData} />
     <Suscribe />


     </>)

}
