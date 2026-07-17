import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  AgricultureHeroData,
  AgricultureOurCapabilitiesData,
  AgricultureCoreCapabilitiesData,
  AgricultureWhatWeOfferData,
  AgricultureOtherServicesData,
  AgricultureFaqData,
} from '@/Constants/Service/Agriculture';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import OurCapabilities from '@/components/features/CoreCapa';
function HeroPage(){
  return(
    <ServiceHeroPage {...AgricultureHeroData} />
  )
}
export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...AgricultureOurCapabilitiesData} />
     <ServiceCoreCapabilities {...AgricultureCoreCapabilitiesData} />
     <WhatWeOfferGrid {...AgricultureWhatWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' services={AgricultureOtherServicesData} />
     <CaseStudies {...insightData}/>
     <FAQSection faqs={AgricultureFaqData} />
     <Suscribe />
     </>)

}


