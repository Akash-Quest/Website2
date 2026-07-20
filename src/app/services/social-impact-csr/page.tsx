import StatsGridThree from '@/components/ui/Stats3';
import ServiceHeroPage from '@/components/features/ServiceHeroPage';
import OurCapabilities from '@/components/features/CoreCapa';
import ServiceCoreCapabilities from '@/components/features/ServiceCoreCapabilities';
import SocialFocus from '@/components/features/SocialImpact/SocialFocus';
import CaseStudies from '@/components/features/HomeCaseStudie';
import OtherServicesSection from '@/components/features/OtherServices';
import FAQSection from '@/components/features/Faq';
import Suscribe from '@/components/features/Suscribe';
import { insightData } from '@/Constants/Insight ';
import { caseStudiesData } from '@/Constants/caseStudies';
import {
  SocialImpactHeroData,
  SocialImpactOurCapabilitiesData,
  SocialImpactCoreCapabilitiesData,
  SocialImpactFocusAreasData,
  SocialImpactOtherServicesData,
  SocialImpactFaqData,
} from '@/Constants/Service/SocialImpact';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Impact & CSR Consulting Services | SkyQuest",

  description:
    "Design and implement impactful CSR, livelihood, and social development programs that create measurable outcomes and sustainable community impact.",

  keywords: [
    "CSR consulting services",
    "social impact consulting",
    "CSR strategy",
    "livelihood programs",
    "impact consulting",
  ],

  alternates: {
    canonical: "https://www.skyquestt.com/services/social-impact",
  },

  openGraph: {
    title: "Creating Sustainable Social Impact",
    description:
      "Design and implement impactful CSR, livelihood, and social development programs that create measurable outcomes and sustainable community impact.",
    url: "https://www.skyquestt.com/services/social-impact",
    type: "website",
    siteName: "SkyQuest",
  },

  twitter: {
    card: "summary_large_image",
    title: "Creating Sustainable Social Impact",
    description:
      "Design and implement impactful CSR, livelihood, and social development programs that create measurable outcomes and sustainable community impact.",
  },
};
function HeroPage(){
  return(
    <ServiceHeroPage {...SocialImpactHeroData} />
  )
}
export default function SocialImpactService(){
    return (<>
     <HeroPage />
     <StatsGridThree />
     <OurCapabilities {...SocialImpactOurCapabilitiesData} />
     <ServiceCoreCapabilities {...SocialImpactCoreCapabilitiesData} />
     <SocialFocus {...SocialImpactFocusAreasData} />
     <CaseStudies {...caseStudiesData} />
     <OtherServicesSection bgClassName='bg-white' services={SocialImpactOtherServicesData} />
     <CaseStudies {...insightData}/>
     <FAQSection faqs={SocialImpactFaqData} />
     <Suscribe />
     </>)

}


