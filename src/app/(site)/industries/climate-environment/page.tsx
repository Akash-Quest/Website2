import StatsGridThree from '@/components/ui/Stats3';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  ClimateEnvironmentHeroData,
  ClimateEnvironmentOverviewData,
  ClimateEnvironmentWhatWeOfferData,
  ClimateEnvironmentFaqData,
} from '@/Constants/Industries/climateEnvironment';
import IndustriesTex from '@/components/features/IndustriesTex';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <IndustiesHeroPage {...ClimateEnvironmentHeroData} />
  )
}
import IndustiesHeroPage from '@/components/features/IndustriesHeroPage';
import OtherIndustriesSection from '@/components/features/OtherServices';


export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree className="pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-30" />
     <IndustriesTex {...ClimateEnvironmentOverviewData} />

     <WhatWeOfferGrid {...ClimateEnvironmentWhatWeOfferData} bgClassName="bg-background" />
     <CaseStudies {...caseStudiesData} bgClassName="bg-white" />
     <OtherIndustriesSection bgClassName='bg-background' currentHref="/industries/climate-environment" />
     <CaseStudies {...insightData}bgClassName="bg-white"/>
     <FAQSection  faqs={ClimateEnvironmentFaqData} bgClassName="bg-background" />
     <Suscribe bgClassName="bg-white" />
     </>)

}


