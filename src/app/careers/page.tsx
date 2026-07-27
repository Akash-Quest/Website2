import OpenPositions from "@/components/features/CareersOpening";
import CareerApplicationForm from "@/components/features/CarrersJoinUs";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


function CareersHero() {
  return (
    <section className="bg-background ">
      <div className="hero-container ">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0 ">
          <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="/what-we-do" className="hover:text-muted transition-colors">
                What We Do
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-500">Careers</li>
          </ol>
        </nav>
        <div className="px-[2] sm:px-2 md:px-[10%]">
        {/* Eyebrow */}
        <p className="text-center text-primary mb-2 mt-8 sm:mt-8 md:mt-2 text-sm 2xl:text-base ">
          Careers
        </p>

        {/* Heading */}
        <h1 className="text-center font-bold">
          Be part of our{" "}
          <em className="font-semibold">mission</em>
        </h1>

        {/* Subheading */}
        <p className="text-center mt-2 mb-5  text-muted text-sm 2xl:text-base ">
          If innovativeness is in your schema and you have just decided to source a technology/innovation or an IP, we at SkyQuest can help you make your decision tangible.
        </p>
        </div>
      

      {/* Hero Image */}
      <div className="sm:px-[4]">
        <div className="relative w-full aspect-[3/3.5]  md:aspect-[3/0.9] 2xl:aspect-[3/1] sm:rounded-2xl overflow-hidden">
          <Image
            src="/Careers/Swaticloverground.png"
            alt="Careers at SkyQuest"
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

export default function CareersPage() {
  return (<>
  <CareersHero />
  <OpenPositions />
  <CareerApplicationForm />
  </>)

}
