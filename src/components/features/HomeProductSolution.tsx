"use client";
import {  ArrowUp } from "lucide-react";
import { useState, useEffect, useRef, useCallback, type JSX,  } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { fadeUp, fadeUpSm, staggerContainer, fadeLeft, fadeRight } from "@/lib/animations";

const tabs = [
  "AgriMap",
  "Inspect Global",
  "MineralIQ",
  "Skyquest Labs",
  "DeCarbonX",
  "AlwaysOn",
  "AgriPath",
];

const tabContent: Record<
  string,
  {
    badge: string;
    heading: JSX.Element;
    description: string;
    buttonLabel: string;
    image: string;
    href: string;
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
    href: "/products/agrimap",
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
    href: "/products/inspectglobal",
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
      "MineralIQ delivers predictive geology and exploration intelligence to mining companies identifying high-potential zones faster than traditional surveys.",
    buttonLabel: "MineralIQ",
    image: "/Productsoln/Pr3.jpg",
    href: "/products/mineraliq",
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
    href: "/products/sqlabs",
  },
  DeCarbonX: {
    badge: "Article 6 · NDC 3.0 · COP32 · Ethiopia Live",
    heading: (
      <>
       Sovereign Climate Finance  {" "}
       <em>Platform</em>
      </>
    ),
    description:
      "DeCarbonX helps transform climate project ideas into structured, finance-ready opportunities while enabling digital MRV, climate finance documentation, funding access, and national data sovereignty.",
    buttonLabel: "DeCarbonX",
    image: "/Productsoln/Pr5.jpg",
    href: "/products/decarbonx",
  },
  AlwaysOn: {
    badge: "WhatsApp-Native · No App Download · Live",
    heading: (
      <>
        Government, Delivered  Through {" "} <em> A Message</em>
      </>
    ),
    description:
      "AlwaysON delivers AI-powered healthcare services directly through WhatsApp, enabling AI-assisted symptom assessment, multilingual support, clinical guidance, and rapid access to expert referrals.",
    buttonLabel: "AlwaysOn",
    image: "/Productsoln/Pr6.jpg",
    href: "/products/alwayson",
  },
  AgriPath: {
    badge: "AgriPath",
    heading: (
      <>
        Know Where It Fits. Reach{" "}
        <em>Every Market.</em>
      </>
    ),
    description:
      "AgriPath AI takes any agri-technology — a seed variety, a fertilizer blend, a crop-protection product, a piece of equipment — from a technology profile to a scored, regulation-ready market entry plan, across 90+ countries in Africa and Asia.",
    buttonLabel: "AgriPath",
    image: "/Productsoln/Agripath/Agripath.jpg",
    href: "/products/agripath",
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

  const fillColor = isActive ? "#1D1EE3" : "#FFFFFF";
  const borderLayer = isActive
    ? "#1D1EE3"
    : isNext
    ? `conic-gradient(#1D1EE3 ${deg}deg, #D1D5DB ${deg}deg)`
    : "#D1D5DB";
  const borderImage = borderLayer.startsWith("conic-gradient")
    ? borderLayer
    : `linear-gradient(${borderLayer}, ${borderLayer})`;

  return (
    // Single-element gradient border (background-clip padding-box/border-box)
    // instead of a nested div+button pair — two independently rounded shapes
    // never align perfectly on the curve, which made the ring look thicker
    // on the sides than on the top/bottom.
    <button
      onClick={onClick}
      className={`cursor-pointer rounded-full border-[1px] xl:border-[2px] border-transparent px-5 py-1.5 text-sm xl:text-base font-medium transition-colors duration-200 ${
        isActive ? "text-white" : "text-gray-700 hover:text-gray-900"
      }`}
      style={{
        backgroundImage: `linear-gradient(${fillColor}, ${fillColor}), ${borderImage}`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      {tab}
    </button>
  );
}

export default function OurProductSolution() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(0);
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
    startTimeRef.current = Date.now();

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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Eyebrow */}
          <p className="text-center font-medium text-primary text-body-sm">
            Our Product &amp; Solution
          </p>

          {/* Heading */}
          <h2 className="text-center font-bold mb-2">
            Find the Right Platform for Your <em className="font-semibold">Challenge</em>
          </h2>

          {/* Subheading */}
          <p className="text-center text-muted max-w-3xl mx-auto pb-2">
            Each SkyQuest platform is built around a specific development challenge. Select a product to explore how it works and who it has helped.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="hidden md:flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide justify-start md:justify-between md:flex-wrap"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            const isNext = i === nextIndex;

            return (
              <motion.div key={tab} variants={fadeUpSm} className="flex-shrink-0">
                <TabButton
                  tab={tab}
                  isActive={isActive}
                  isNext={isNext}
                  progress={progress}
                  onClick={() => goToTab(i)}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Content Card */}
        <div className="rounded-2xl bg-[#F7F5F1]">
        <div
          className="flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden "
        >
          {/* Left Panel */}
          <motion.div
            key={`text-${activeTab}`}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="bg-[#F7F5F1] md:w-1/2 p-5 sm:p-8 md:p-10 2xl:p-14 flex flex-col justify-center gap-4"
          >
            <div className="2xl:max-w-md">
              <p className="text-primary tracking-wide  text-body-sm">
                {content.badge}
              </p>
              <h2 className="font-semibold leading-none pb-1 ">
                {content.heading}
              </h2>
              <p className="text-muted  ">
                {content.description}
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <Button href={content.href} variant="primary" iconSize={16}>
                  {content.buttonLabel}
                </Button>
                <Button  href="/products" variant="white" iconSize={16}>
                  View All Products
                </Button>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            key={`image-${activeTab}`}
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="md:w-1/2 bg-[#F7F5F1] p-4 pt-0 md:p-0 md:flex md:items-center"
          >
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
          </motion.div>
        </div>
        </div>
      </div>
    </div>
  );
}