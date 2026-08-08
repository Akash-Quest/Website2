import StatsGridThree from '@/components/ui/Stats3';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  EnergyUtilitiesHeroData,
  EnergyUtilitiesOverviewData,
  EnergyUtilitiesWhatWeOfferData,
  EnergyUtilitiesFaqData,
} from '@/Constants/Industries/EnergyUtility';
import IndustriesTex from '@/components/features/IndustriesTex';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import { insightData } from '@/Constants/Insight ';
import { getRelatedByTag } from '@/lib/relatedContent';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <IndustiesHeroPage {...EnergyUtilitiesHeroData} />
  )
}
import IndustiesHeroPage from '@/components/features/IndustriesHeroPage';
import OtherIndustriesSection from '@/components/features/OtherServices';


export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree className="pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-30" />
     <IndustriesTex {...EnergyUtilitiesOverviewData} />
    
     <WhatWeOfferGrid {...EnergyUtilitiesWhatWeOfferData} bgClassName="bg-background" />
     <CaseStudies {...caseStudiesData} caseStudies={getRelatedByTag(caseStudiesData.caseStudies, "industry", "Energy & Utilities")} bgClassName="bg-white" />
     <OtherIndustriesSection bgClassName='bg-background' currentHref="/industries/energy-utilities" />
     <CaseStudies {...insightData} caseStudies={getRelatedByTag(insightData.caseStudies, "industry", "Energy & Utilities")} bgClassName="bg-white"/>
     <FAQSection  faqs={EnergyUtilitiesFaqData} bgClassName="bg-background" />
     <Suscribe bgClassName="bg-white" />
     </>)

}


