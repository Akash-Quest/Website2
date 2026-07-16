import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import { SocialImapactCoreCapabilitiesData } from '@/Constants/Service/SocialImapctService';
import SocialFocus from '@/components/features/SocialImpact/SocialFocus';
import CaseStudies from '@/components/features/HomeCaseStudie';
import OtherServicesSection from '@/components/features/OtherServices';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { caseStudiesData } from '@/Constants/caseStudies';
import IntegratedCapabilities from '@/components/features/CoreCapa2';
import IntegratedProgramWeOffer from '@/components/features/IntegratedProgram/IntegratedProgram';
function HeroPage(){
  return(
    <ServiceHeroPage
       breadcrumbLabel="Integrated Program Management"
       eyebrow="Integrated Program Management"
       heading={
         <>
        Delivering Impact at
           <em className="font-semibold">  Scale</em>
         </>
       }
       description="We help organizations design, manage, and deliver complex programs that drive measurable economic, social, and institutional outcomes."
       imageSrc="/service/Integreted/hero.jpg"
       imageAlt="Building Smarter Governments & Stronger Public Institutions"
     />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <IntegratedCapabilities />
     <IntegratedProgramWeOffer />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' />
     <CaseStudies {...insightData}/>
     <FAQSection />
     <Suscribe />
     </>)

}


