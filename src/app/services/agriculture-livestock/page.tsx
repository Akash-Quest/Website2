import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilitiesAgri from '@/components/features/CoreCapa';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import { AgricultureCoreCapabilitiesData } from '@/Constants/Service/AgriculCoreService';
import AgriCultureWhatWeOffer from '@/components/features/Agriculture/AgriCultureWhatweOffer';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
function HeroPage(){
  return(
    <ServiceHeroPage
       breadcrumbLabel="Agriculture & Livestock"
       eyebrow="Agriculture & Livestock"
       heading={
         <>
          Transforming Agriculture,
           <em className="font-semibold">Livestock<br /> & Food Systems</em>
         </>
       }
       description="Transforming agriculture and livestock through technology, innovation, and market-led development. We help organizations build resilient food systems, improve productivity, strengthen value chains, and create sustainable growth across the agricultural economy."
       imageSrc="/service/Agriculture/hero.jpg"
       imageAlt="Transforming Agriculture, Livestock & Food Systems"
     />
  )
}
export default function Agriculturepage(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilitiesAgri />
     <ServiceCoreCapabilities {...AgricultureCoreCapabilitiesData} />
     <AgriCultureWhatWeOffer />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' />
     <CaseStudies {...insightData}/>
     <FAQSection />
     <Suscribe />
     </>)

}


