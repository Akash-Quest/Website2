"use client";

import OpenPositions from "@/components/features/CareersOpening";
import CareerAtSkyquest from "@/components/features/CarreratSkyquest";
import CareerApplicationForm from "@/components/features/CarrersJoinUs";
import CaseStudies from "@/components/features/HomeCaseStudie";
import Suscribe from "@/components/features/Suscribe";
import { insightData } from "@/Constants/Insight ";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpSm, fadeLeft, imageReveal } from "@/lib/animations";


function CareersHero() {
  return (
    <section className="bg-background ">
      <div className="hero-container ">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0 ">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/what-we-do" className="hover:text-muted transition-colors">
                What We Do
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Careers</li>
          </ol>
        </nav>
        <div className="px-[2] sm:px-2 md:px-[10%]">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={fadeUpSm}
          initial="hidden"
          animate="visible"
          className="text-center text-primary  mt-8 sm:mt-8 md:mt-2 text-body-sm font-medium "
        >
          Careers
        </motion.p>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="text-center font-bold"
        >
          Be part of our{" "}
          <em className="font-semibold">mission</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUpSm}
          initial="hidden"
          animate="visible"
          className="text-center mb-5  text-muted  text-body-lg"
        >
          If innovativeness is in your schema and you have just decided to source a technology / innovation or an IP, we at SkyQuest can help you make your decision tangible.
        </motion.p>
        </div>


      {/* Hero Image */}
      <div className="sm:px-[4]">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative w-full aspect-[3/3.5]  md:aspect-[3/0.9] 2xl:aspect-[3/1] sm:rounded-2xl overflow-hidden"
        >
          <Image
            src="/Careers/Swaticloverground.png"
            alt="Careers at SkyQuest"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
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
  <CareerAtSkyquest />
  <CaseStudies {...insightData} bgClassName="bg-background" />
  <Suscribe className="pt-0" />

  </>)

}
