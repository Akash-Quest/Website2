
import Image from "next/image";
import Link from "next/link";
import CaseStudyResult from "@/components/features/CaseStudyResult";
import OtherServicesSection from "@/components/features/OtherServices";
import Suscribe from "@/components/features/Suscribe";


function CaseStudy() {
  return (
    <section className="bg-background ">
      <div className="hero-container ">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 sm:pb-2 lg:pb-5 px-4 lg:px-0 ">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>

            <li className="text-gray-700">Case Studies</li>
          </ol>
        </nav>
        <div className="px-[2] text-center lg:text-left">
        {/* Eyebrow */}
        <p className=" text-primary  mt-8 sm:mt-8 md:mt-2 text-body-sm font-medium">
          Case Studies 
        </p>

        {/* Heading */}
        <h1 className=" font-bold">
          Our Client {" "}
          <em className="font-semibold">Impact</em>
        </h1>

        {/* Subheading */}
        <p className=" mt-2 mb-5  text-muted text-body-lg ">
         Meaningful transformation requires more than strategy alone. By integrating strategic thinking, technology enablement, and disciplined execution, we help organizations accelerate impact, unlock new opportunities, and build capabilities that drive sustained performance.</p>
        </div>
      

      {/* Hero Image */}
      <div className="sm:px-[4]">
        <div className="relative w-full aspect-[3/3.5]  md:aspect-[3/0.9] 2xl:aspect-[3/1] sm:rounded-2xl overflow-hidden">
          <Image
            src="/CaseStudy/Hero.jpg"
            alt="Case Studies at SkyQuest"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
      </div>
    </section>
  );
}

export default function CaseStudyPage() {
  return (<>
  <CaseStudy />
  <CaseStudyResult />
  <OtherServicesSection bgClassName="bg-background" />
  <Suscribe className="pt-0" />
  </>)

}
