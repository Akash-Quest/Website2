"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1547149600-a6cdf8fce50c?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    points: [
      "24/7 Monitoring & Support",
      "Infrastructure Management",
      "Application Support & Maintenance",
    ],
  },
];

export default function EnterpriseAiSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
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

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-[280px_1fr_300px] lg:gap-12">
          {/* Left: category nav */}
          <div className="flex flex-col">
            {categories.map((cat, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center justify-between border-b border-gray-200 px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? "rounded-lg border-b-transparent bg-[#EAEAF8] text-neutral-900"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                  )}
                </button>
              );
            })}
          </div>
          <div className="relative mx-auto h-[clamp(18rem,27vw,28rem)] w-[clamp(14rem,22vw,26rem)] min-w-0 pt-10">
            {categories.map((cat, i) => {
              const position = (i - activeIndex + total) % total; // 0 = front
              const isActive = position === 0;
              const translateY = -position * 16;
              const scale = 1 - position * 0.06;
              const opacity = isActive ? 1 : Math.max(1 - position * 0.2, 0.25);
              const zIndex = total - position;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show ${cat.label}`}
                  tabIndex={isActive ? -1 : 0}
                  className={`absolute inset-0 overflow-hidden rounded-2xl bg-black transition-all duration-500 ease-in-out ${
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
                className="flex items-start gap-2 text-sm text-neutral-700"
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
