
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import CaseStudies from '@/components/features/HomeCaseStudie';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { caseStudiesData } from '@/Constants/caseStudies';
import StatsGrid from '@/components/ui/Stats4';
import { ArtificalIntelFaqData, ArtificialHeroData, ArtificialIntelOtherServicesData } from '@/Constants/Service/ArtificialIntel';
import TheChallenge from '@/components/features/ArtificialIntel/TheChallenge';
import Technologies from '@/components/features/ArtificialIntel/Technologies';
import WeServe from '@/components/features/ArtificialIntel/WeServe';
import InsightImpact from '@/components/features/HomeInsightImpact';
import OtherServicesSection from '@/components/features/OtherServices';
function HeroPage(){
  return(
    <ServiceHeroPage {...ArtificialHeroData} />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGrid />
     <TheChallenge />
     
     <InsightImpact />
      <WeServe /> 
     <CaseStudies {...caseStudiesData} bgClassName='bg-white'/>
           
    <Technologies />
    <CaseStudies {...insightData} bgClassName='bg-white'/>
     <OtherServicesSection bgClassName='bg-background' services={ArtificialIntelOtherServicesData} />
     <FAQSection faqs={ArtificalIntelFaqData} />
     <Suscribe />
     </>)

}


