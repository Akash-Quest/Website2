import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import DigitalMosaic from '@/components/features/ServiceDigitalOurCapability';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import EndtoEnd from '@/components/features/ServiceDigitalEndtoend';
import { ServicedigitalCoreCapabilitiesData } from '@/Constants/Service/digitalCoreCapabilities';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import type { Metadata } from "next";
import OurCapabilitiesAgri from '@/components/features/CoreCapa';
import EnterpriseChallenges from '@/components/features/EnterpriseChallenges';

export const metadata: Metadata = {
  title:
    "Digital Transformation & Emerging Technologies Consulting | SkyQuest",

  description:
    "Transform business performance through digital strategy, emerging technologies, cloud, automation, and innovation consulting services.",

  keywords: [
    "digital transformation consulting",
    "digital transformation services",
    "emerging technology consulting",
    "innovation consulting",
    "enterprise transformation",
  ],

  alternates: {
    canonical:
      "https://www.skyquestt.com/services/digital-transformation-emerging-technologies",
  },

  openGraph: {
    title: "Accelerate Growth Through Digital Transformation",
    description:
      "Transform business performance through digital strategy, emerging technologies, cloud, automation, and innovation consulting services.",
    url:
      "https://www.skyquestt.com/services/digital-transformation-emerging-technologies",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage
       breadcrumbLabel="Digital Transformation"
       eyebrow="Digital Transformation"
       heading={
         <>
           Digital Transformation & Emerging{" "}
           <em className="font-semibold">Technologies</em>
         </>
       }
       description="From data strategy and ML models to responsible AI governance enabling organisations to make better, faster decisions at machine speed. We turn raw data into your most powerful competitive asset."
       imageSrc="/service/Digital/hero.jpg"
       imageAlt="Digital Transformation & Emerging Technologies at SkyQuest"
     />
  )
}
export default function DigitalPage(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <DigitalMosaic />
     <ServiceCoreCapabilities {...ServicedigitalCoreCapabilitiesData} />
     <EndtoEnd />
     <CaseStudies {...caseStudiesData} bgClassName='bg-background'/>
     <OtherServicesSection bgClassName="bg-white" />
     <CaseStudies {...insightData} bgClassName='bg-background'/>
     <FAQSection />
     <Suscribe />
     </>)

}
