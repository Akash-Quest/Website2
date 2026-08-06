import StatsGridThree from '@/components/ui/Stats3';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  WaterSanitationHeroData,
  WaterSanitationOverviewData,
  WaterSanitationWhatWeOfferData,
  WaterSanitationFaqData,
} from '@/Constants/Industries/waterSanitation';
import IndustriesTex from '@/components/features/IndustriesTex';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <IndustiesHeroPage {...WaterSanitationHeroData} />
  )
}
import IndustiesHeroPage from '@/components/features/IndustriesHeroPage';
import OtherIndustriesSection from '@/components/features/OtherServices';


export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree className="pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-30" />
     <IndustriesTex {...WaterSanitationOverviewData} />

     <WhatWeOfferGrid {...WaterSanitationWhatWeOfferData} bgClassName="bg-background" />
     <CaseStudies {...caseStudiesData} bgClassName="bg-white" />
     <OtherIndustriesSection bgClassName='bg-background' currentHref="/industries/water-sanitation" />
     <CaseStudies {...insightData}bgClassName="bg-white"/>
     <FAQSection  faqs={WaterSanitationFaqData} bgClassName="bg-background" />
     <Suscribe bgClassName="bg-white" />
     </>)

}


