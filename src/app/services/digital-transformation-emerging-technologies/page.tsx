import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import DigitalMosaic from '@/components/features/ServiceDigitalOurCapability';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import EndtoEnd from '@/components/features/ServiceDigitalEndtoend';
import { DigitalHeroData, ServicedigitalCoreCapabilitiesData, DigitalEndToEndData, DigitalOtherServicesData, DigitalFaqData } from '@/Constants/Service/Digital';
import CaseStudies from '@/components/features/HomeCaseStudie';
import { caseStudiesData } from '@/Constants/caseStudies';
import OtherServicesSection from '@/components/features/OtherServices';
import { insightData } from '@/Constants/Insight ';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import type { Metadata } from "next";


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
    <ServiceHeroPage {...DigitalHeroData} />
  )
}
export default function DigitalPage(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <DigitalMosaic />
     <ServiceCoreCapabilities {...ServicedigitalCoreCapabilitiesData} />
     <EndtoEnd {...DigitalEndToEndData} />
     <CaseStudies {...caseStudiesData} bgClassName='bg-background'/>
     <OtherServicesSection bgClassName="bg-white" services={DigitalOtherServicesData} />
     <CaseStudies {...insightData} bgClassName='bg-background'/>
     <FAQSection heading="Questions About" headingItalic="Digital Transformation" faqs={DigitalFaqData} />
     <Suscribe />
     </>)

}
