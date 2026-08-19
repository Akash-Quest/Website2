"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { fadeUpSm } from "@/lib/animations";

const categories = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    image: "/service/ArtificialIntel/Ai.jpg",
    points: [
      "AI Strategy & Roadmap",
      "Generative AI Implementation (LLMs, Copilots, Chatbots)",
      "Predictive Analytics & Forecasting",
      "Computer Vision & NLP Solutions",
      "AI Model Auditing & Governance",
      "MLOps & AI Lifecycle Management",
    ],
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    image: "/service/ArtificialIntel/digital.jpg",
    points: [
      "Business Process Reengineering",
      "Legacy System Modernization",
      "Cloud Migration & Optimization",
      "Digital Workplace Enablement",
    ],
  },
  {
    id: "data-intelligence",
    label: "Data & Intelligence",
    image: "/service/ArtificialIntel/Data.jpg",
    points: [
      "Data Strategy & Governance",
      "Data Engineering & Pipelines",
      "Business Intelligence & Dashboards",
      "Data Warehousing & Lakehouse Architecture",
      "Master Data Management",
    ],
  },
  {
    id: "it-infrastructure",
    label: "IT Infrastructure & Cybersecurity",
    image: "/service/ArtificialIntel/ItCyber.jpg",
    points: [
      "Infrastructure Assessment & Design",
      "Network & Cloud Security",
      "Identity & Access Management",
      "Threat Detection & Incident Response",
      "Compliance & Risk Management",
      "Zero Trust Architecture",
      "Disaster Recovery Planning",
    ],
  },
  {
    id: "managed-services",
    label: "Managed Services",
    image: "/service/ArtificialIntel/ManagedService.jpg",
    points: [
      "24/7 Monitoring & Support",
      "Infrastructure Management",
      "Application Support & Maintenance",
    ],
  },
];

export default function EnterpriseAiSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const [isWide3xl, setIsWide3xl] = useState(false);
  const active = categories[activeIndex];
  const total = categories.length;

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1920px)");
    setIsWide3xl(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setIsWide3xl(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="mb-2 text-body-sm font-medium text-primary"
          >
            Services
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold">
            Enterprise AI <em className="font-semibold">Solutions</em>
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="mx-auto mt-2 max-w-2xl text-muted"
          >
            Structured around your enterprise journey from readiness to
            transformation
          </Reveal>
        </div>

        {/* Mobile: accordion */}
        <div className="mt-10 flex flex-col lg:hidden">
          {categories.map((cat, i) => {
            const isOpen = mobileOpenIndex === i;
            return (
              <Reveal
                key={cat.id}
                variant="upSm"
                custom={i}
                className="border-t border-t-[#03030F33] last:border-b last:border-b-[#03030F33]"
              >
                <button
                  type="button"
                  onClick={() => setMobileOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-base font-medium text-[#03030F]"
                >
                  {cat.label}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                    strokeWidth={2}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-5">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-black">
                          <Image
                            src={cat.image}
                            alt={cat.label}
                            fill
                            unoptimized
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {cat.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 text-sm text-neutral-700"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-900" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>

        {/* Desktop: category nav / image stack / points */}
        <div className="mt-24 2xl:mt-30 hidden gap-10  2xl:gap-12 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:items-stretch">
          {/* Left: category nav */}
          <Reveal variant="left" custom={0} className="flex flex-col ">
            {categories.map((cat, i) => {
              const isActive = i === activeIndex;
              const isLast = i === categories.length - 1;
              return (
                <div key={cat.id} className={`flex flex-col border-t border-t-[#03030F33] pt-2 pb-2 ${isLast ? "border-b border-b-[#03030F33]" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`cursor-pointer text-body-lg flex items-center justify-between px-4 py-1 xl:py-2  2xl:py-5  text-left text-lg font-medium transition-colors ${
                      isActive
                        ? "rounded-lg bg-[#EAEAF8] text-[#03030F]"
                        : "text-[#03030F] hover:bg-neutral-50"
                    }`}
                  >
                    {cat.label}
                    {isActive && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                    )}
                  </button>
                </div>
              );
            })}
          </Reveal>
          <Reveal
            variant="up"
            custom={1}
            className="relative mx-auto h-[clamp(18rem,29vw,32rem)] w-[clamp(15rem,24vw,26rem)] min-w-0 pt-10"
          >
            {categories.map((cat, i) => {
              const position = (i - activeIndex + total) % total; // 0 = front
              const isActive = position === 0;
              const translateY = -position * (isWide3xl ? 40 : 30);
              const scale = 1 - position * 0.06;
              const opacity = isActive ? 1 : Math.max(1 - position * 0.2, 0.25);
              const zIndex = total - position;

              return (
                <button
                  key={cat.id}
                  type="button"
                  
                  aria-label={`Show ${cat.label}`}
                  tabIndex={isActive ? -1 : 0}
                  className={`absolute inset-0 overflow-hidden rounded-lg bg-black transition-all duration-500 ease-in-out `}
                  style={{
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 20vw, 60vw"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </Reveal>

          {/* Right: capability points */}
          <Reveal variant="right" custom={2}>
            <AnimatePresence mode="wait">
              <motion.ul key={active.id} className="space-y-3">
                {active.points.map((point, i) => (
                  <motion.li
                    key={point}
                    custom={i}
                    variants={fadeUpSm}
                    initial="hidden"
                    animate="visible"
                    className=" p flex items-start gap-2 text-base text-neutral-700"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-900" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
