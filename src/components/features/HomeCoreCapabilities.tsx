"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const cards = {
  digital: {
    title: "Digital Transformation & Emerging Technologies",
    shortTitle: "Digital Transformation",
    description: "From data strategy and ML models to responsible AI governance enabling organisations to make better, faster decisions at machine speed. We turn raw data into your most powerful competitive asset.",
    image: "/CoreCapability/1.jpg",
  },
  public: {
    title: "Public Sector Advisory",
    shortTitle: "Public Sector Advisory",
    description: "Supporting governments and institutions through policy advisory, governance modernization, and transformational program implementation.",
    image: "/CoreCapability/2.jpg",
  },
  ai: {
    title: "Data and Artificial Intelligence",
    shortTitle:" Data and Artificial Intelligence",
    description: "We help governments, enterprises, and institutions leverage AI, automation, data intelligence, geospatial technologies, and digital platforms to modernize operations, improve decision-making, and accelerate innovation.",
    image: "/CoreCapability/3.jpg",
  },
  program: {
    title: "Integrated Program Management",
    shortTitle: "Program Management",
    description: "End-to-end program delivery from design to implementation, ensuring on-time, on-budget results with measurable outcomes.",
    image: "/CoreCapability/4.jpg",
  },
  market: {
    title: "Business Intelligence & Market Research",
    shortTitle: "Business Intelligence",
    description: "We provide market intelligence, industry insights, competitive benchmarking, customer research, and strategic analysis that enable organizations to identify opportunities, mitigate risks, and make informed business decisions.",
    image: "/CoreCapability/5.jpg",
  },
  esg: {
    
    title: "Climate, Sustainability & ESG Advisory",
    shortTitle: "Climate, Sustainability & ESG",
    description: "We provide market intelligence, industry insights, competitive benchmarking, customer research, and strategic analysis that enable organizations to identify opportunities, mitigate risks, and make informed business decisions.",
    image: "/CoreCapability/6.jpg",
    
  },
  agriculture: {
      title: "Agriculture & Livestock",
    shortTitle: "Agriculture & Livestock",
    description: "Transforming agriculture and livestock through technology, innovation, and market-led development.",
    image: "/CoreCapability/7.jpg",
  },
  
  csr: {
    title: "Social Impact & CSR",
    shortTitle: "Social Impact & CSR",
    description: " Designing and scaling high-impact social programs that strengthen communities, improve livelihoods, and deliver measurable development outcomes.",
    image: "/CoreCapability/8.jpg",
  },
};

const mobileCardList = Object.entries(cards);

function Card({
  title,
  shortTitle,
  description,
  image,
  height,
  isHovered,
  onHover,
}: {
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  height: string;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}) {
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl w-full ${height} group cursor-pointer`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={() => onHover(!isHovered)}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        unoptimized
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      <div
        className={`absolute bottom-0 z-20 flex flex-col bg-white/70 backdrop-blur-md border border-none text-black transition-all duration-500 ease-out ${
          isHovered
            ? "inset-x-0 h-full p-4 sm:p-5"
            : "left-0 w-fit h-9 p-2 pl-5 pr-5 justify-center rounded-tr-2xl"
        }`}
      >
        <span className={`block font-semibold leading-snug transition-all duration-300 ${
          isHovered ? "text-base sm:text-lg" : "text-xs sm:text-sm truncate"
        }`}>
          {isHovered ? title : shortTitle}
        </span>

        {isHovered && (
          <div className="mt-3 flex-1 flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
            <button className="self-end text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition">
              Learn More <ArrowUpRight size={14} className="inline-block ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

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
        <div className="mb-6">
          <p className=" font-medium text-primary mb-2 ">Our Core Capabilities</p>
          <h2 className="font-bold leading-tight">
            End-to-End Solutions for Strategy,
            Technology &{" "}
            <em className="font-semibold">Sustainable Growth</em>
          </h2>
          <p className=" text-muted">
            We combine sector expertise, emerging technologies, and execution excellence to help organizations accelerate transformation, strengthen resilience, and create lasting impact. </p>
        </div>

        {/* Card */}
        <div
          className="relative rounded-3xl overflow-hidden  backdrop-blur-md"
          style={{ height: 480 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image */}
          <div className="relative h-[55%] w-full">
            <Image
              src={mobileCardList[currentIndex][1].image}
              alt={mobileCardList[currentIndex][1].title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Content */}
          <div className="h-[45%] p-5 flex flex-col justify-between   rounded-3xl">
            <div>
              <h3 className="text-base font-bold text-gray-900 leading-snug">
                {mobileCardList[currentIndex][1].title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                {mobileCardList[currentIndex][1].description}
              </p>
            </div>
            <button className="inline-flex items-center justify-between w-full bg-[#1D1EE3] text-white rounded-md pl-4 pr-2 py-2 text-sm font-medium">
              Visit Page
              <span className="bg-white text-[#1D1EE3] rounded-sm p-1 flex items-center justify-center">
                <ArrowUpRight size={16} />
              </span>
            </button>
          </div>
        </div>

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
        <div>
          <div className="mb-4">
            <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
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

            <p className="mt-3 max-w-3xl text-muted text-sm 2xl:text-base ">
              We combine sector expertise, emerging technologies, and execution excellence to help organizations accelerate transformation, strengthen resilience, and create lasting impact. </p>
          </div>

          {/* Row 1 */}
<div className="grid grid-cols-2 gap-2 xl:gap-4">
  <div>
    <div className="w-[calc(100%+30px)] -ml-[30px]">
    <Card {...cards.digital} height="h-[clamp(14.6rem,19.53vw,23.19rem)]"  isHovered={hoveredCard === 'digital'} onHover={(hovered) => setHoveredCard(hovered ? 'digital' : null)} />
      </div>
    <div className="mt-2 xl:mt-4">
      <Card {...cards.program} height="h-[clamp(19.59rem,27.49vw,32.65rem)]" isHovered={hoveredCard === 'program'} onHover={(hovered) => setHoveredCard(hovered ? 'program' : null)} />
    </div>
  </div>

  <div className="pt-0">
    <Card {...cards.public} height="h-[clamp(18.4rem,25.83vw,30.67rem)]" isHovered={hoveredCard === 'public'} onHover={(hovered) => setHoveredCard(hovered ? 'public' : null)} />

    <div className="mt-2 xl:mt-4">
      <Card {...cards.market} height="h-[clamp(15.86rem,21.2vw,25.17rem)]" isHovered={hoveredCard === 'market'} onHover={(hovered) => setHoveredCard(hovered ? 'market' : null)} />
    </div>
  </div>
</div>

          {/* Agriculture */}
          <div className="mt-2 xl:mt-4">
            <Card
              {...cards.agriculture}
              height="h-[clamp(11.63rem,15.8vw,18.76rem)]"
              isHovered={hoveredCard === 'agriculture'}
              onHover={(hovered) => setHoveredCard(hovered ? 'agriculture' : null)}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <Card
            {...cards.ai}
            height="h-[clamp(33.39rem,39.6vw,47.03rem)]"
            isHovered={hoveredCard === 'ai'}
            onHover={(hovered) => setHoveredCard(hovered ? 'ai' : null)}
          />

          <div className="mt-2 xl:mt-4">
            <div className="w-[calc(100%+30px)] -mr-[30px]">
            <Card
              {...cards.esg}
              height="h-[clamp(17.49rem,20.75vw,24.64rem)]"

              isHovered={hoveredCard === 'esg'}
              onHover={(hovered) => setHoveredCard(hovered ? 'esg' : null)}
            />
            </div>
          </div>

          <div className="mt-2 xl:mt-4">
            <Card
              {...cards.csr}
              height="h-[clamp(13.73rem,16.29vw,19.34rem)]"
              isHovered={hoveredCard === 'csr'}
              onHover={(hovered) => setHoveredCard(hovered ? 'csr' : null)}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}