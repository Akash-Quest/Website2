"use client";
interface SlideContent {
  image: string;
  title: string;
  description: string;
}

interface TabContent {
  id: string;
  tabLabel: string;
  titleRegular: string;
  titleItalic: string;
  description: string;
  ctaLabel: string;
  /** Only present for tabs that show the multi-slide card (e.g. Industry Reports) */
  slides?: SlideContent[];
  /** Used for tabs that show a single static image only */
  image?: string;
}

const tabs: TabContent[] = [
  {
    id: "industry-reports",
    tabLabel: "Industry Reports",
    titleRegular: "Industry",
    titleItalic: "Reports",
    description:
      "Forward-looking analysis that helps organizations understand industry shifts, future trends, investment opportunities, and evolving market dynamics.",
    ctaLabel: "Explore Report Store",
    slides: [
      {
        image: "/Marketinteli/Pr1.jpg",
        title:
          "Lignosulfonate Based Concrete Admixtures Market Size, Share, and Growth Analysis",
        description:
          "Global Lignosulfonate Based Concrete Admixtures Market size was valued at USD 4.20 Billion in 2023 poised to grow between USD 4.44 Billion in 2024 to USD 6.87 Billion by 2032, growing at a CAGR of 5.6% in the forecast period (2025-2032).",
      },
      {
        image: "/Marketinteli/Pr2.jpg",
        title: "Sector Outlooks",
        description:
          "Global Lignosulfonate Based Concrete Admixtures Market size was valued at USD 4.20 Billion in 2023 poised to grow between USD 4.44 Billion in 2024 to USD 6.87 Billion by 2032, growing at a CAGR of 5.6% in the forecast period (2025-2032).",
      },
      {
        image: "/Marketinteli/Pr3.jpg",
        title: "Custom Research",
        description:
          "Global Lignosulfonate Based Concrete Admixtures Market size was valued at USD 4.20 Billion in 2023 poised to grow between USD 4.44 Billion in 2024 to USD 6.87 Billion by 2032, growing at a CAGR of 5.6% in the forecast period (2025-2032).",
      },
      {
        image: "/Marketinteli/Pr4.jpg",
        title: "Strategic Insights",
        description:
          "Global Lignosulfonate Based Concrete Admixtures Market size was valued at USD 4.20 Billion in 2023 poised to grow between USD 4.44 Billion in 2024 to USD 6.87 Billion by 2032, growing at a CAGR of 5.6% in the forecast period (2025-2032).",
      },
    ],
  },
  {
    id: "sector-outlooks",
    tabLabel: "Sector Outlooks",
    titleRegular: "Sector",
    titleItalic: "Outlooks",
    description:
      "Forward-looking analysis that helps organizations understand industry shifts, future trends, investment opportunities, and evolving market dynamics.",
    ctaLabel: "Explore Report Store",
    image: "/Marketinteli/Pr2.jpg",
  },
  {
    id: "custom-research",
    tabLabel: "Custom Research",
    titleRegular: "Custom",
    titleItalic: "Research",
    description:
      "Tailored research engagements designed to address specific business questions, market challenges, investment decisions, and strategic priorities.",
    ctaLabel: "Request Custom Research",
    image: "/Marketinteli/Pr3.jpg",
  },
  {
    id: "strategic-insights",
    tabLabel: "Strategic Insights",
    titleRegular: "Strategic",
    titleItalic: "Insights",
    description:
     "Expert perspectives, thought leadership, and actionable intelligence that help leaders make informed decisions and navigate complex business environments.",
    ctaLabel: "Explore Strategic Insights",
    image: "/Marketinteli/Pr4.jpg",
  },
];

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

export default function MarketIntelligence() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const current = tabs[activeTab];
  const hasSlides = !!current.slides && current.slides.length > 0;
  const slide = hasSlides ? current.slides![activeSlide] : null;

  function handleTabChange(index: number) {
    setActiveTab(index);
    setActiveSlide(0);
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null || !current.slides) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    const slideCount = current.slides.length;
    if (Math.abs(diff) > 40) {
      if (diff > 0) setActiveSlide((i) => (i + 1) % slideCount);
      else setActiveSlide((i) => (i - 1 + slideCount) % slideCount);
    }
    touchStartX.current = null;
  }

  return (
    <section className="w-full bg-[#F7F5F1] ">
      <div className="page-container">
        {/* Eyebrow */}
        <p className="text-center text-primary mb-2 text-sm 2xl:text-base">
          Market Intelligence
        </p>

        {/* Headline */}
        <h2 className="text-center font-bold mb-3">
          Intelligence That Drives <em className="font-semibold">Better<br /> Decisions</em>
        </h2>

        {/* Subcopy */}
        <p className=" text-center text-muted max-w-xl mx-auto text-sm 2xl:text-base">
          Explore industry reports, market insights, and research publications
          that help organizations identify opportunities, anticipate change,
          and make informed decisions.
        </p>

        {/* Tabs */}
        <div className="mt-5 flex flex-col md:flex-row scrollbar-hide rounded-lg overflow-hidden bg-white border border-neutral-200/70">
          {tabs.map((tab, index) => {
            const isActive = index === activeTab;
            const isLast = index === tabs.length - 1;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(index)}
                className={`flex-shrink-0 flex-1 min-w-fit px-4 py-3 md:py-2.5 text-sm font-medium text-center transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                  !isLast ? "border-b md:border-b-0 md:border-r border-neutral-200/70" : ""
                } ${
                  isActive
                    ? "bg-indigo-700 text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {tab.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: image / slide card */}
          <div>
            {hasSlides && slide ? (
              <div
                className="rounded-2xl bg-white p-3  border border-neutral-200/70"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="group relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[12/5] overflow-hidden rounded-xl bg-neutral-100">
                  <Image
                    key={slide.image + activeSlide}
                    src={slide.image}
                    alt={slide.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="px-1 pt-4 pb-2">
                  <h3 className="text-sm font-semibold text-neutral-900 leading-snug">
                    {slide.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                    {slide.description}
                  </p>
                  <button className="mt-3 flex items-center gap-1 text-sm font-medium text-indigo-700 lg:hidden">
                    {current.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </button>
                </div>

                {/* Pagination dots */}
                <div className="flex items-center justify-center gap-2 pt-2 pb-1">
                  {current.slides!.map((_, i) => {
                    const isActiveDot = i === activeSlide;
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                          isActiveDot
                            ? "w-6 bg-indigo-700"
                            : "w-2 bg-neutral-300 hover:bg-neutral-400"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl bg-white p-3 border border-neutral-200/70 lg:bg-transparent lg:p-0  lg:border-0">
                <div className="group relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-xl lg:rounded-2xl bg-neutral-100">
                  <Image
                    key={current.image}
                    src={current.image!}
                    alt={current.tabLabel}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="px-1 pt-4 pb-2 lg:hidden">
                  <h3 className="text-sm font-semibold text-neutral-900 leading-snug">
                    {current.tabLabel}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed">
                    {current.description}
                  </p>
                  <button className="mt-3 flex items-center gap-1 text-sm font-medium text-indigo-700">
                    {current.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right: tab description + CTA */}
          <div className="hidden lg:block lg:pl-6">
            <h3 className=" font-bold ">
              {current.titleRegular} <em className="font-semibold">{current.titleItalic}</em>
            </h3>
            <p className="mt-4 mb-4 text-muted leading-relaxed max-w-md">
              {current.description}
            </p>
             <Button variant="primary" iconSize={16}>
                    {current.ctaLabel}
                  </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
