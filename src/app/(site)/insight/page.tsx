
import Image from "next/image";
import Link from "next/link";
import InsightsResult from "@/components/features/InsightReportsList";
import Suscribe from "@/components/features/Suscribe";


function InsightHero() {
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

            <li className="text-gray-700">Insights</li>
          </ol>
        </nav>
        <div className="px-[2] text-center lg:text-left">
        {/* Eyebrow */}
        <p className=" text-primary  mt-8 sm:mt-8 md:mt-1 text-body-sm font-medium">
          Insights 
        </p>

        {/* Heading */}
        <h1 className=" font-bold">
          Ideas, Insights &{" "}
          <em className="font-semibold">Intelligence</em>
        </h1>

        {/* Subheading */}
        <p className="  mb-5  text-muted text-body-lg">
          Explore expert perspectives, industry analysis, research, and practical frameworks on digital transformation, AI, sustainability, agriculture, public sector innovation, and economic development. </p>
        </div>
      

      {/* Hero Image */}
      <div className="sm:px-[4]">
        <div className="relative w-full aspect-[3/3.5]  md:aspect-[3/0.9] 2xl:aspect-[3/1] sm:rounded-2xl overflow-hidden">
          <Image
            src="/Insights/hero.webp"
            alt="Insights at SkyQuest"
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

export default function InsightPage() {
  return (<>
  <InsightHero />
  <InsightsResult />
  <Suscribe />
  </>)

}
