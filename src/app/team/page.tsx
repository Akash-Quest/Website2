
import Image from "next/image";
import Link from "next/link";
import TeamGrid from "@/components/features/CareerTeamMeber";
import CaseStudies from "@/components/features/HomeCaseStudie";
import { insightData } from "@/Constants/Insight ";
import Suscribe from "@/components/features/Suscribe";


function TeamHero() {
  return (
    <section className="relative bg-background overflow-hidden">
         <div
        className=" pointer-events-none absolute inset-0  bg-cover opacity-30 "
        style={{ backgroundImage: "url('/team/bg.jpg')",backgroundColor: "rgba(0,0,0,0.1)",
    backgroundBlendMode: "darken", }}
      />
    <div className="hero-container relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0">
          <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>

            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Meet Our People</li>
          </ol>
        </nav>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5  pt-10">
          {/* Left: text */}
          <div className="flex flex-col justify-center lg:items-start text-center lg:text-left">
            <h1 className=" mb-2 font-bold text-black ">
              The People
              <br />
              Driving{" "}
              <em className="font-semibold">
                Strategy &amp;
              </em>
              <br />
              <em className="font-semibold">Impact</em>
            </h1>

            <p className=" text-muted lg:max-w-lg px-4 lg:px-0 tracking-wide leading-snug">
              SkyQuest brings together strategists, technologists, researchers,
              and industry experts to help governments, businesses, and
              development institutions solve complex challenges and deliver
              measurable impact across sectors and geographies.
            </p>
          </div>

          {/* Right: image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[14/9] md:rounded-2xl overflow-hidden">
            <Image
              src="/Team/hero.jpg"
              alt="Architectural detail representing strategy and impact"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Teams() {
  return (<>
  <TeamHero />
  <TeamGrid /> 
  <CaseStudies {...insightData} bgClassName="bg-background"/>
  <Suscribe  className="pt-0"/>

  </>)

}
