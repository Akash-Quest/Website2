import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import PublicSectorWhatWeOffer from '@/components/features/PublicSector/PublicSectorWeOffer';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';

function HeroPage(){
  return(
    <ServiceHeroPage
       breadcrumbLabel="Public Sector Advisory"
       eyebrow="Public Sector Advisory"
       heading={
         <>
         Building Smarter Governments & <br></br>Stronger
           <em className="font-semibold"> Public Institutions</em>
         </>
       }
       description="We help governments and development institutions modernize systems, strengthen governance, and deliver impactful public programs through strategy, technology, and implementation support."
       imageSrc="/service/PublicService/hero.jpg"
       imageAlt="Building Smarter Governments & Stronger Public Institutions"
     />
  )
}
export default function PublicSectorService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities />
     <PublicSectorWhatWeOffer />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' />
     <CaseStudies {...insightData}/>
     <FAQSection />
     <Suscribe />

     
     </>)

}


