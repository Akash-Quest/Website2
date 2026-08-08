import StatsGridThree from '@/components/ui/Stats3';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  HealthcareLifeSciencesHeroData,
  HealthcareLifeSciencesOverviewData,
  HealthcareLifeSciencesWhatWeOfferData,
  HealthcareLifeSciencesFaqData,
} from '@/Constants/Industries/healthcareLifeSciences';
import IndustriesTex from '@/components/features/IndustriesTex';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import { insightData } from '@/Constants/Insight ';
import { getRelatedByTag } from '@/lib/relatedContent';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <IndustiesHeroPage {...HealthcareLifeSciencesHeroData} />
  )
}
import IndustiesHeroPage from '@/components/features/IndustriesHeroPage';
import OtherIndustriesSection from '@/components/features/OtherServices';


export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree className="pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-30" />
     <IndustriesTex {...HealthcareLifeSciencesOverviewData} />

     <WhatWeOfferGrid {...HealthcareLifeSciencesWhatWeOfferData} bgClassName="bg-background" />
     <CaseStudies {...caseStudiesData} caseStudies={getRelatedByTag(caseStudiesData.caseStudies, "industry", "Healthcare & Life Sciences")} bgClassName="bg-white" />
     <OtherIndustriesSection bgClassName='bg-background' currentHref="/industries/healthcare-life-sciences" />
     <CaseStudies {...insightData} caseStudies={getRelatedByTag(insightData.caseStudies, "industry", "Healthcare & Life Sciences")} bgClassName="bg-white"/>
     <FAQSection  faqs={HealthcareLifeSciencesFaqData} bgClassName="bg-background" />
     <Suscribe bgClassName="bg-white" />
     </>)

}


