import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import {
  PublicSectorHeroData,
  PublicSectorOurCapabilitiesData,
  PublicSectorWeOfferData,
  PublicSectorOtherServicesData,
  PublicSectorFaqData,
} from '@/Constants/Service/PublicSector';

function HeroPage(){
  return(
    <ServiceHeroPage {...PublicSectorHeroData} />
  )
}
export default function PublicSectorService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...PublicSectorOurCapabilitiesData} />
     <WhatWeOfferGrid {...PublicSectorWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' services={PublicSectorOtherServicesData} />
     <CaseStudies {...insightData}/>
     <FAQSection faqs={PublicSectorFaqData} />
     <Suscribe />


     </>)

}


