"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const categories = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    image: "/Service/ArtificialIntel/Ai.jpg",
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
    image: "/Service/ArtificialIntel/Digital.jpg",
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
    image: "/Service/ArtificialIntel/Data.jpg",
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
    image: "/Service/ArtificialIntel/ItCyber.jpg",
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
    image: "/Service/ArtificialIntel/ManagedService.jpg",
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
  const active = categories[activeIndex];
  const total = categories.length;

  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
            Services
          </p>
          <h2 className="font-bold">
            Enterprise AI <em className="font-semibold">Solutions</em>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
            Structured around your enterprise journey from readiness to
            transformation
          </p>
        </div>

        {/* Mobile: accordion */}
        <div className="mt-10 flex flex-col lg:hidden">
          {categories.map((cat, i) => {
            const isOpen = mobileOpenIndex === i;
            return (
              <div
                key={cat.id}
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
                {isOpen && (
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
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: category nav / image stack / points */}
        <div className="mt-24 hidden gap-2 lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:items-stretch">
          {/* Left: category nav */}
          <div className="flex flex-col ">
            {categories.map((cat, i) => {
              const isActive = i === activeIndex;
              const isLast = i === categories.length - 1;
              return (
                <div key={cat.id} className={`flex flex-col border-t border-t-[#03030F33] pt-2 pb-2 ${isLast ? "border-b border-b-[#03030F33]" : ""}`}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`flex items-center justify-between px-4 py-1 text-left text-lg font-medium transition-colors ${
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
          </div>
          <div className="relative mx-auto h-[clamp(16rem,26vw,28rem)] w-[clamp(13rem,21vw,23rem)] min-w-0 pt-10">
            {categories.map((cat, i) => {
              const position = (i - activeIndex + total) % total; // 0 = front
              const isActive = position === 0;
              const translateY = -position * 28;
              const scale = 1 - position * 0.06;
              const opacity = isActive ? 1 : Math.max(1 - position * 0.2, 0.25);
              const zIndex = total - position;

              return (
                <button
                  key={cat.id}
                  type="button"
                  
                  aria-label={`Show ${cat.label}`}
                  tabIndex={isActive ? -1 : 0}
                  className={`absolute inset-0 overflow-hidden rounded-lg bg-black transition-all duration-500 ease-in-out ${
                    isActive ? "cursor-default" : "cursor-pointer"
                  }`}
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
          </div>

          {/* Right: capability points */}
          <ul className="space-y-2.5">
            {active.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-base text-neutral-700"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-900" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
