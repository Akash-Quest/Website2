
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import CaseStudies from '@/components/features/HomeCaseStudie';
import OtherServicesSection from '@/components/features/OtherServices';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { caseStudiesData } from '@/Constants/caseStudies';
import StatsGrid from '@/components/ui/Stats4';

import OurCapabilities from '@/components/features/CoreCapa';
import WhyUsResearch from '@/components/features/BusinessIntel/WhyUsReasearch';
import {
  BusinessIntelHeroData,
  BusinessIntelOurCapabilitiesData,
  BusinessIntelWhyUsData,
  BusinessIntelOtherServicesData,
  BusinessIntelFaqData,
} from '@/Constants/Service/BusinessIntel';
import IndustriesWeServe2 from '@/components/features/IndustriesWeSurve2';
import FeaturedReport from '@/components/features/BusinessIntel/FeaturedReport';
function HeroPage(){
  return(
    <ServiceHeroPage {...BusinessIntelHeroData} />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGrid sectionPadding="py-0" />
     <OurCapabilities {...BusinessIntelOurCapabilitiesData} />
     <WhyUsResearch {...BusinessIntelWhyUsData} />
     <IndustriesWeServe2 />
     <FeaturedReport />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' services={BusinessIntelOtherServicesData} />
     <CaseStudies {...insightData}/>
     <FAQSection faqs={BusinessIntelFaqData} />
     <Suscribe />
     </>)

}


