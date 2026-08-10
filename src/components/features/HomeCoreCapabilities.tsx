"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp,
  fadeUpSm,
  staggerContainer,
  scaleFade,
} from "@/lib/animations";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { ArrowUp } from "iconsax-react";
import HoverRevealCard from "@/components/ui/HoverRevealCard2";

const cards = {
  digital: {
    title: "Digital Transformation ",
    chipLabel: "Digital Transformation",
    description: "From data strategy and ML models to responsible AI governance enabling organisations to make better, faster decisions at machine speed. We turn raw data into your most powerful competitive asset.",
    image: "/CoreCapability/1.jpg",
    href: "/capabilities/digital-transformation-emerging-technologies",
  },
  public: {
    title: "Strategy & Policy Advisory",
    chipLabel: "Strategy & Policy Advisory",
    description: "SkyQuest partners with governments, enterprises, investors, and institutions to build evidence-based strategies, policies, and transformation plans that create lasting economic, social, and business value.",
    image: "/service/Stertegy/hero.jpg",
    href: "/capabilities/strategy-policy-advisory",
  },
  ai: {
    title: "Data and Artificial Intelligence",
    chipLabel:" Data and Artificial Intelligence",
    description: "We help governments, enterprises, and institutions leverage AI, automation, data intelligence, geospatial technologies, and digital platforms to modernize operations, improve decision-making, and accelerate innovation.",
    image: "/CoreCapability/3.jpg",
    href: "/capabilities/data-artificial-intelligence",
  },
  program: {
    title: "Integrated Program Management",
    chipLabel: "Program Management",
    description: "End-to-end program delivery from design to implementation, ensuring on-time, on-budget results with measurable outcomes.",
    image: "/CoreCapability/4.jpg",
    href: "/capabilities/integrated-program-management",
  },
  market: {
    title: "Market Intelligence ",
    chipLabel: "Business Intelligence",
    description: "We provide market intelligence, industry insights, competitive benchmarking, customer research, and strategic analysis that enable organizations to identify opportunities, mitigate risks, and make informed business decisions.",
    image: "/CoreCapability/5.jpg",
    href: "/capabilities/business-intelligence-market-research",
  },
  esg: {
    title: "Livelihoods & Entrepreneurship",
    chipLabel: "Livelihoods & Entrepreneurship",
    description: "SkyQuest helps organizations create sustainable livelihoods, strengthen entrepreneurship ecosystems, generate employment, and drive inclusive economic growth through strategic advisory and implementation support.",
    image: "/service/Livelihoods/hero.jpg",
    href: "/capabilities/livelihoods-entrepreneurship",
  },
  agriculture: {
    title: "Technology Transfer & Innovation",
    chipLabel: "Technology Transfer & Innovation",
    description: "SkyQuest helps organizations commercialize innovation, strengthen technology transfer, build innovation ecosystems, and accelerate the adoption of emerging technologies that drive sustainable growth.",
    image: "/service/TechnologyTransfer/hero.jpg",
    href: "/capabilities/technology-transfer-innovation",
  },
  csr: {
    title: "Inclusive Finance & Institutional Strategy",
    chipLabel: "Inclusive Finance & Institutional Strategy",
    description: "SkyQuest strengthens financial systems and institutions to drive inclusive, sustainable growth.",
    image: "/service/Inclusivefinance/hero.jpg",
    href: "/capabilities/inclusive-finance-institutional-strategy",
  },
};

const mobileCardList = Object.entries(cards);

export default function CoreCapabilities() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) setCurrentIndex((i) => Math.min(i + 1, mobileCardList.length - 1));
      else setCurrentIndex((i) => Math.max(i - 1, 0));
    }
    touchStartX.current = null;
  };

  return (
    <section className="bg-white ">
      <div className="page-container">
      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <motion.div
          className="mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="font-medium text-primary mb-2 text-body-sm">Our Core Capabilities</p>
          <h2 className="font-bold ">
            End-to-End Solutions for Strategy,
            Technology &{" "}
            <em className="font-semibold">Sustainable Growth</em>
          </h2>
          <p className="text-muted">
            We combine expertise, technology, and execution to accelerate transformation and deliver lasting impact. </p>
        </motion.div>

        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={scaleFade}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative rounded-3xl overflow-hidden"
            style={{ height: 480 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image */}
            <motion.div
              className="absolute inset-0 h-full w-full"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src={mobileCardList[currentIndex][1].image}
                alt={mobileCardList[currentIndex][1].title}
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-between rounded-3xl bg-white/70">
              <div>
                <h3 className="font-bold text-gray-900 ">
                  {mobileCardList[currentIndex][1].title}
                </h3>
                <p className="mt-2 text-muted leading-snug line-clamp-3 tracking-wide">
                  {mobileCardList[currentIndex][1].description}
                </p>
              </div>
              <Link
                href={mobileCardList[currentIndex][1].href}
                className="inline-flex items-center justify-between w-full bg-[#1D1EE3] text-white rounded-md pl-4 pr-2 py-2 text-sm font-medium"
              >
                Visit Page
                <span className="bg-white text-[#1D1EE3] rounded-sm p-1 flex items-center justify-center">
                  <ArrowUp size={16} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
                </span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center items-center gap-5 mt-10">
          {mobileCardList.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to card ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-gray-800 ring-1 ring-gray-800 ring-offset-10 ring-offset-white"
                  : "bg-gray-800"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden lg:grid lg:grid-cols-[2fr_1fr] gap-2 xl:gap-4">
        {/* LEFT SIDE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeUpSm} className="mb-4">
            <p className=" font-medium text-primary text-body-sm ">
              Our Core Capabilities
            </p>

            <h2 className=" font-bold ">
              End-to-End Solutions for Strategy,
              <br />
              Technology &{" "}
              <em className="font-semibold">
                Sustainable Growth
              </em>
            </h2>

            <p className=" max-w-3xl text-muted ">
              We combine expertise, technology, and execution to accelerate transformation and deliver lasting impact. </p>
          </motion.div>

          {/* Row 1 */}
<div className="grid grid-cols-2 gap-2 xl:gap-4">
  <div>
    <motion.div variants={scaleFade} className="w-[calc(100%+30px)] -ml-[30px]">
    <HoverRevealCard {...cards.digital} className="h-[clamp(14.6rem,19.53vw,23.19rem)]" isHovered={hoveredCard === 'digital'} onHover={(hovered) => setHoveredCard(hovered ? 'digital' : null)} />
      </motion.div>
    <motion.div variants={scaleFade} className="mt-2 xl:mt-4">
      <HoverRevealCard {...cards.program} className="h-[clamp(19.59rem,27.49vw,32.65rem)]" isHovered={hoveredCard === 'program'} onHover={(hovered) => setHoveredCard(hovered ? 'program' : null)} />
    </motion.div>
  </div>

  <div className="pt-0">
    <motion.div variants={scaleFade}>
      <HoverRevealCard {...cards.public} className="h-[clamp(18.4rem,25.83vw,30.67rem)]" isHovered={hoveredCard === 'public'} onHover={(hovered) => setHoveredCard(hovered ? 'public' : null)} />
    </motion.div>

    <motion.div variants={scaleFade} className="mt-2 xl:mt-4">
      <HoverRevealCard {...cards.market} className="h-[clamp(15.86rem,21.2vw,25.17rem)]" isHovered={hoveredCard === 'market'} onHover={(hovered) => setHoveredCard(hovered ? 'market' : null)} />
    </motion.div>
  </div>
</div>

          {/* Agriculture */}
          <motion.div variants={scaleFade} className="mt-2 xl:mt-4 w-[calc(100%+30px)] -ml-[20px]" >
            <HoverRevealCard
              {...cards.agriculture}
              className="h-[clamp(11.63rem,15.8vw,18.76rem)]"
              isHovered={hoveredCard === 'agriculture'}
              onHover={(hovered) => setHoveredCard(hovered ? 'agriculture' : null)}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={scaleFade}>
            <HoverRevealCard
              {...cards.ai}
              className="h-[clamp(33.39rem,39.6vw,47.03rem)]"
              isHovered={hoveredCard === 'ai'}
              onHover={(hovered) => setHoveredCard(hovered ? 'ai' : null)}
            />
          </motion.div>

          <motion.div variants={scaleFade} className="mt-2 xl:mt-4">
            <div className="w-[calc(100%+30px)] -mr-[30px]">
            <HoverRevealCard
              {...cards.esg}
              className="h-[clamp(17.49rem,20.75vw,24.64rem)]"
              isHovered={hoveredCard === 'esg'}
              onHover={(hovered) => setHoveredCard(hovered ? 'esg' : null)}
            />
            </div>
          </motion.div>

          <motion.div variants={scaleFade} className="mt-2 xl:mt-4">
            <HoverRevealCard
              {...cards.csr}
              className="h-[clamp(13.73rem,16.29vw,19.34rem)]"
              isHovered={hoveredCard === 'csr'}
              onHover={(hovered) => setHoveredCard(hovered ? 'csr' : null)}
            />
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
