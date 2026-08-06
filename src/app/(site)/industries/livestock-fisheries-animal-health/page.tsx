import StatsGridThree from '@/components/ui/Stats3';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  LivestockFisheriesAnimalHealthHeroData,
  LivestockFisheriesAnimalHealthOverviewData,
  LivestockFisheriesAnimalHealthWhatWeOfferData,
  LivestockFisheriesAnimalHealthFaqData,
} from '@/Constants/Industries/livestockFisheriesAnimalHealth';
import IndustriesTex from '@/components/features/IndustriesTex';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <IndustiesHeroPage {...LivestockFisheriesAnimalHealthHeroData} />
  )
}
import IndustiesHeroPage from '@/components/features/IndustriesHeroPage';
import OtherIndustriesSection from '@/components/features/OtherServices';


export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree className="pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-30" />
     <IndustriesTex {...LivestockFisheriesAnimalHealthOverviewData} />

     <WhatWeOfferGrid {...LivestockFisheriesAnimalHealthWhatWeOfferData} bgClassName="bg-background" />
     <CaseStudies {...caseStudiesData} bgClassName="bg-white" />
     <OtherIndustriesSection bgClassName='bg-background' currentHref="/industries/livestock-fisheries-animal-health" />
     <CaseStudies {...insightData}bgClassName="bg-white"/>
     <FAQSection  faqs={LivestockFisheriesAnimalHealthFaqData} bgClassName="bg-background" />
     <Suscribe bgClassName="bg-white" />
     </>)

}


