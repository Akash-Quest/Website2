import StatsGridThree from '@/components/ui/Stats3';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  SocialSectorHeroData,
  SocialSectorOverviewData,
  SocialSectorFaqData,
  SocialImpactFocusAreasData,
} from '@/Constants/Industries/socialSector';
import IndustriesTex from '@/components/features/IndustriesTex';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import { insightData } from '@/Constants/Insight ';
import { getRelatedByTag } from '@/lib/relatedContent';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <IndustiesHeroPage {...SocialSectorHeroData} />
  )
}
import IndustiesHeroPage from '@/components/features/IndustriesHeroPage';
import OtherIndustriesSection from '@/components/features/OtherServices';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import { SocialImpactCoreCapabilitiesData } from '@/Constants/Service/SocialImpact';
import SocialFocus from '@/components/features/SocialImpact/SocialFocus';


export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree className="pb-12 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-30" />
     <IndustriesTex {...SocialSectorOverviewData} />
     <ServiceCoreCapabilities {...SocialImpactCoreCapabilitiesData} className="pt-16 lg:pt-16 xl:pt-20 2xl:pt-24" />
     <SocialFocus {...SocialImpactFocusAreasData} />

     <CaseStudies {...caseStudiesData} caseStudies={getRelatedByTag(caseStudiesData.caseStudies, "industry", "Social Sector")} bgClassName="bg-background" />
     <OtherIndustriesSection bgClassName='bg-white' currentHref="/industries/social-sector" />
     <CaseStudies {...insightData} caseStudies={getRelatedByTag(insightData.caseStudies, "industry", "Social Sector")} bgClassName="bg-background"/>
     <FAQSection  faqs={SocialSectorFaqData} bgClassName="bg-white" />
     <Suscribe bgClassName="bg-background" />
     </>)

}


