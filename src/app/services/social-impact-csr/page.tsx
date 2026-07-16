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
function HeroPage(){
  return(
    <ServiceHeroPage
       breadcrumbLabel="Social Impact & CSR"
       eyebrow="Social Impact & CSR"
       heading={
         <>
         Social Impact & 
           <em className="font-semibold"> CSR</em>
         </>
       }
       description="We help corporations, foundations, governments, and development institutions design and deliver impactful programs that strengthen communities, drive sustainable development, and create measurable long-term outcomes."
       imageSrc="/service/SocialImpact/hero.jpg"
       imageAlt="Building Smarter Governments & Stronger Public Institutions"
     />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities />
     <ServiceCoreCapabilities {...SocialImapactCoreCapabilitiesData} />
     <SocialFocus />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' />
     <CaseStudies {...insightData}/>
     <FAQSection />
     <Suscribe />
     </>)

}


