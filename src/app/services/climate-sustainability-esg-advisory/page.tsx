import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import IndustriesWeServe from '@/components/features/IndustriesWeServe';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import {
  EsgHeroData,
  EsgOurCapabilitiesData,
  EsgWhatWeOfferData,
  EsgIndustriesWeServeData,
  EsgOtherServicesData,
  EsgFaqData,
} from '@/Constants/Service/Esg';
function HeroPage(){
  return(
    <ServiceHeroPage {...EsgHeroData} />
  )
}
export default function EsgService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...EsgOurCapabilitiesData} />
     <WhatWeOfferGrid {...EsgWhatWeOfferData} />
     <IndustriesWeServe {...EsgIndustriesWeServeData} />
     <CaseStudies {...caseStudiesData}  bgClassName='bg-white'/>
     <OtherServicesSection bgClassName='bg-background' services={EsgOtherServicesData} />
     <CaseStudies {...insightData} bgClassName='bg-white'/>
     <FAQSection bgClassName='bg-background' faqs={EsgFaqData} />
     <Suscribe className="pt-0"/>

     </>)

}


