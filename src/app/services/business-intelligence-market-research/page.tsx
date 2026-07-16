
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
function HeroPage(){
  return(
    <ServiceHeroPage
       breadcrumbLabel="Business Intelligence & Market Research"
       eyebrow="Business Intelligence & Market Research"
       heading={
         <>
        Turning Intelligence Into Strategic
           <em className="font-semibold"> Advantage</em>
         </>
       }
       description="We provide market intelligence, industry research, and strategic insights that help organizations evaluate opportunities, reduce uncertainty, and accelerate growth."
       imageSrc="/service/BusinessIntel/hero.jpg"
       imageAlt="Building Smarter Governments & Stronger Public Institutions"
     />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGrid />
     <OurCapabilities />
     <WhyUsResearch />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' />
     <CaseStudies {...insightData}/>
     <FAQSection />
     <Suscribe />
     </>)

}


