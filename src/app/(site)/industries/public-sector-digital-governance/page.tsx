import StatsGridThree from '@/components/ui/Stats3';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  PublicSectorDigitalGovernanceHeroData,
  PublicSectorDigitalGovernanceOverviewData,
  PublicSectorDigitalGovernanceWhatWeOfferData,
  PublicSectorDigitalGovernanceFaqData,
} from '@/Constants/Industries/publicSectorDigitalGovernance';
import IndustriesTex from '@/components/features/IndustriesTex';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import { insightData } from '@/Constants/Insight ';
import { getRelatedByTag } from '@/lib/relatedContent';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <IndustiesHeroPage {...PublicSectorDigitalGovernanceHeroData} />
  )
}
import IndustiesHeroPage from '@/components/features/IndustriesHeroPage';
import OtherIndustriesSection from '@/components/features/OtherServices';


export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree className="pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-30" />
     <IndustriesTex {...PublicSectorDigitalGovernanceOverviewData} />

     <WhatWeOfferGrid {...PublicSectorDigitalGovernanceWhatWeOfferData} bgClassName="bg-background" />
     <CaseStudies {...caseStudiesData} caseStudies={getRelatedByTag(caseStudiesData.caseStudies, "industry", "Public Sector & Digital Governance")} bgClassName="bg-white" />
     <OtherIndustriesSection bgClassName='bg-background' currentHref="/industries/public-sector-digital-governance" />
     <CaseStudies {...insightData} caseStudies={getRelatedByTag(insightData.caseStudies, "industry", "Public Sector & Digital Governance")} bgClassName="bg-white"/>
     <FAQSection  faqs={PublicSectorDigitalGovernanceFaqData} bgClassName="bg-background" />
     <Suscribe bgClassName="bg-white" />
     </>)

}


