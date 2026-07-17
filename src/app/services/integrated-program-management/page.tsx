import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import CaseStudies from '@/components/features/HomeCaseStudie';
import OtherServicesSection from '@/components/features/OtherServices';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { caseStudiesData } from '@/Constants/caseStudies';
import IntegratedCapabilities from '@/components/features/CoreCapa2';
import WhatWeOfferGrid from '@/components/features/WhatWeOfferGrid';
import {
  IntegratedProgramHeroData,
  IntegratedProgramCapabilitiesData,
  IntegratedProgramWeOfferData,
  IntegratedProgramOtherServicesData,
  IntegratedProgramFaqData,
} from '@/Constants/Service/IntegratedProgram';
function HeroPage(){
  return(
    <ServiceHeroPage {...IntegratedProgramHeroData} />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <IntegratedCapabilities {...IntegratedProgramCapabilitiesData} />
     <WhatWeOfferGrid {...IntegratedProgramWeOfferData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' services={IntegratedProgramOtherServicesData} />
     <CaseStudies {...insightData}/>
     <FAQSection faqs={IntegratedProgramFaqData} />
     <Suscribe />
     </>)

}


