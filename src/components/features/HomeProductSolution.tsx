"use client";
import {  ArrowUp } from "lucide-react";
import { useState, useEffect, useRef, useCallback, type JSX,  } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const tabs = [
  "AgriMap",
  "Inspect Global",
  "MineralIQ",
  "Skyquest Labs",
  "DeCarbonX",
  "AlwaysOn",
];

const tabContent: Record<
  string,
  {
    badge: string;
    heading: JSX.Element;
    description: string;
    buttonLabel: string;
    image: string;
  }
> = {
  AgriMap: {
    badge: "Seed Intelligence Platform",
    heading: (
      <>
        Know every seed.{" "}
        
        Reach <em>Every Farm.</em>
      </>
    ),
    description:
      "AgriMap gives agriculture departments, banks, and governments a real-time view of seed replacement rates, crop health, and variety adoption across every district down to the block level.",
    buttonLabel: "AgriMap",
    image: "/Productsoln/Pr1.jpg",
  },
  "Inspect Global": {
    badge: "SATELLITE · GPS · AI · IOT · FUSION INTELLIGENCE",
    heading: (
      <>
        Ground truth for every{" "}
         <em>asset</em>
      </>
    ),
    description:
      "InspectGlobal fuses satellite, GPS, drones, IoT, and AI into one verified record of progress, risk, and compliance so decisions don't rely on someone's word.",
    buttonLabel: "Inspect Global",
    image: "/Productsoln/Pr2.jpg",
  },
  MineralIQ: {
    badge: "Live · 12 Countries · Global Deployment",
    heading: (
      <>
        Every mine. Every concession.{" "}

        <br className="hidden md:block" />
        <em>No blind spots.</em>
      </>
    ),
    description:
      "MineralIQ delivers predictive geology and exploration intelligence to mining companies — identifying high-potential zones faster than traditional surveys.",
    buttonLabel: "MineralIQ",
    image: "/Productsoln/Pr3.jpg",
  },
  "Skyquest Labs": {
    badge: "Tele-Pathology · AI-Assisted · 15-Minute Reports",
    heading: (
      <>
        The lab that exists{" "}

        <br className="hidden md:block" />
        <em>only as data.</em>
      </>
    ),
    description:
      "Skyquest Labs connects physical diagnostic labs to qualified pathologists remotely delivering verified reports in under 15 minutes. Only data travels. Never the sample.",
    buttonLabel: "Skyquest Labs",
    image: "/Productsoln/Pr4.jpg",
  },
  DeCarbonX: {
    badge: "Article 6 · NDC 3.0 · COP32 · Ethiopia Live",
    heading: (
      <>
        The automated factory
for sovereign {" "}
       <em></em>
       <em>Climate Finance.</em>
      </>
    ),
    description:
      "DeCarbonX turns climate project ideas into finance-ready instruments carbon credits, green bonds, Article 6 forwards with full national data sovereignty and AI-driven MRV.",
    buttonLabel: "DeCarbonX",
    image: "/Productsoln/Pr5.jpg",
  },
  AlwaysOn: {
    badge: "WhatsApp-Native · No App Download · Live",
    heading: (
      <>
        Monitor Always.
        Healthcare delivered through{" "} <em>A message.</em>
      </>
    ),
    description:
      "AlwaysON delivers AI-powered diagnostic services directly through WhatsApp the world's most-used messaging platform. No app. No barrier. No delay.",
    buttonLabel: "AlwaysOn",
    image: "/Productsoln/Pr6.jpg",
  },
};

const INTERVAL = 5000; // 5 seconds

// Draws an animated bottom border for the NEXT button (live score bar style)
function TabButton({
  tab,
  isActive,
  isNext,
  progress,
  onClick,
}: {
  tab: string;
  isActive: boolean;
  isNext: boolean;
  progress: number;
  onClick: () => void;
}) {
  const deg = progress * 360;

  const borderBg = isActive
    ? "#1D1EE3"
    : isNext
    ? `conic-gradient(#1D1EE3 ${deg}deg, #D1D5DB ${deg}deg)`
    : "#D1D5DB";

  return (
    <div
      className="rounded-full p-[1px] xl:p-[2px] cursor-pointer"
      style={{ background: borderBg }}
      onClick={onClick}
    >
      <button
        className={`px-5 py-1.5 rounded-full text-sm xl:text-base font-medium transition-colors duration-200 ${
          isActive
            ? "bg-[#1D1EE3] text-white"
            : "bg-white text-gray-700 hover:text-gray-900"
        }`}
      >
        {tab}
      </button>
    </div>
  );
}

export default function OurProductSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(Date.now());
  const rafRef = useRef<number | null>(null);

  const activeTab = tabs[activeIndex];
  const nextIndex = (activeIndex + 1) % tabs.length;
  const content = tabContent[activeTab];

  const goToTab = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min(elapsed / INTERVAL, 1);
      setProgress(pct);

      if (pct >= 1) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % tabs.length;
          return next;
        });
        setProgress(0);
        startTimeRef.current = Date.now();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="bg-white font-inter">
      <div className="page-container ">

        {/* Eyebrow */}
        <p className="text-center font-medium text-primary text-body-sm">
          Our Product &amp; Solution
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold mb-2">
          Find the Right Platform for Your <em className="font-semibold">Challenge</em>
        </h2>

        {/* Subheading */}
        <p className="text-center text-muted max-w-3xl mx-auto ">
          Each SkyQuest platform is built around a specific development challenge. Select a product to explore how it works and who it has helped.
        </p>

        {/* Tab Navigation */}
        <div className="hidden md:flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide justify-start md:justify-between md:flex-wrap">
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            const isNext = i === nextIndex;

            return (
              <div key={tab} className="flex-shrink-0">
                <TabButton
                  tab={tab}
                  isActive={isActive}
                  isNext={isNext}
                  progress={progress}
                  onClick={() => goToTab(i)}
                />
              </div>
            );
          })}
        </div>

        {/* Content Card */}
        <div className="rounded-2xl bg-[#F7F5F1]">
        <div
          key={activeTab}
          className="tab-content-anim flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden shadow-sm"
        >
          {/* Left Panel */}
          <div className="bg-[#F7F5F1] md:w-1/2 p-5 sm:p-8 md:p-10 2xl:p-14 flex flex-col justify-center gap-4">
            <div className="2xl:max-w-md">
              <p className="text-primary tracking-wide  text-body-sm">
                {content.badge}
              </p>
              <h2 className="font-semibold ">
                {content.heading}
              </h2>
              <p className="text-muted tracking-wide ">
                {content.description}
              </p>
            </div>
            <div>
              <Button variant="primary" iconSize={16}>
                  {content.buttonLabel}
                </Button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="md:w-1/2 bg-[#F7F5F1] p-4 pt-0 md:p-0 md:flex md:items-center">
            <div className="group relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-[#F7F5F1]">
              <Image
                src={content.image}
                alt="Platform dashboard"
                fill
                unoptimized
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}