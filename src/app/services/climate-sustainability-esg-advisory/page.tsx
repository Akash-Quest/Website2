import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import EsgWhatWeOffer from '@/components/features/Esg/EsgWhatweOffer';
import IndustriesWeServe from '@/components/features/IndustriesWeServe';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <ServiceHeroPage
       breadcrumbLabel="Social Impact & CSR"
       eyebrow="Social Impact & CSR"
       heading={
         <>
         Building Resilient, Sustainable & <br/>Future-Ready 
           <em className="font-semibold">Organizations</em>
         </>
       }
       description="Helping organizations navigate climate risks, strengthen ESG performance, accelerate sustainable growth, and create long-term value through strategy, finance, governance, and implementation."
       imageSrc="/service/Esg/hero.jpg"
       imageAlt="Building Smarter Governments & Stronger Public Institutions"
     />
  )
}
export default function EsgService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities />
     <EsgWhatWeOffer />
     <IndustriesWeServe />
     <CaseStudies {...caseStudiesData}  bgClassName='bg-white'/>
     <OtherServicesSection bgClassName='bg-background' />
     <CaseStudies {...insightData} bgClassName='bg-white'/>
     <FAQSection bgClassName='bg-background' />
     <Suscribe className="pt-0"/>
     
     </>)

}


