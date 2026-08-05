"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { scaleFade } from "@/lib/animations";

interface CapabilityCard {
  id: string;
  title: string;
  description: string;
  bgColor: string; // hex
  imageUrl?: string; // omit for the text-only card
  imageAlt?: string;
}

const cards: CapabilityCard[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy, Governance & Adoption",
    description:
      "We help organizations identify high-value AI opportunities, develop adoption roadmaps, establish governance frameworks, and build the capabilities required to scale AI responsibly and effectively.",
    bgColor: "#FFFFFF",
    imageUrl:"/service/Digital/mosaic.jpg",
    imageAlt: "Colorful abstract fluid ribbon graphic",
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence & Advanced Analytics",
    description:
      "Transforming data into actionable insights through modern analytics, predictive modeling, business intelligence, and decision-support systems",
    bgColor: "#E5E5E5",
    imageUrl:"/service/Digital/Datainteligence2.jpg",
     imageAlt: "Dark iridescent abstract 3D blob graphic",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation & Enterprise Modernization",
    description:
      "Enabling organizations to modernize operations, digitize processes, enhance customer experiences, and accelerate technology-driven transformation.",
    bgColor: "#F5E7D6",
    imageUrl:"/service/Digital/DigitalTransformation.jpg",
     imageAlt: "Iridescent abstract chrome swirl graphic",
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Automation & Emerging Technologies",
    description:"Leveraging automation, AI-powered workflows, and next-generation technologies to increase efficiency, reduce operational complexity, and drive innovation.",
    bgColor: "#E5E2F8",
     imageUrl:"/service/Digital/Inteligents.jpg",
     imageAlt: "Iridescent abstract chrome swirl graphic",
  },
  {
    id: "digital-public-infra",
    title: "Digital Public Infrastructure & Smart Governance",
    description:
      "Supporting governments and institutions in building scalable digital ecosystems that improve service delivery, strengthen governance, and enable data-driven decision-making.",
    bgColor: "#EED8EB",
    imageUrl:"/service/Digital/DigitalPublic.jpg",
     imageAlt: "Gold and purple iridescent abstract swirl graphic",
  },
];

function Card({
  card,
  className = "",
  style,
  index = 0,
}: {
  card: CapabilityCard;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={scaleFade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col overflow-hidden rounded-2xl ${className}`}
      style={{ backgroundColor: card.bgColor, ...style }}
    >
      <div className="shrink-0 pt-5 sm:pt-6 2xl:pt-8 px-5 sm:px-6 2xl:px-8 ">
        <h3 className=" mb-1 font-semibold text-body-lg  leading-tight ">
          {card.title}
        </h3>
        <p className="text-muted leading-tight ">
          {card.description}
        </p>
      </div>

      {card.imageUrl && (
        <div className="relative min-h-[100px] flex-1">
          <Image
            src={card.imageUrl}
            alt={card.imageAlt ?? ""}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-bottom  mix-blend-multiply"
          />
        </div>
      )}
    </motion.div>
  );
}

const SMALL_CARD_HEIGHT = "clamp(14.18rem,16.96vw,20.35rem)";
const ROW_GAP = "1rem";

export default function DigitalMosaic() {
  const [aiStrategy, dataIntelligence, digitalTransformation, intelligentAutomation, digitalPublicInfra] =
    cards;

  return (
    <section className="w-full bg-background">
      <div className="page-container ">
         <p className="text-sm 2xl:text-base text-primary mb-2">
          Our Capabilities
        </p>

        {/* ---------- Mobile / tablet: simple stacked list, every card fixed at 400px tall ---------- */}
        <div className="flex flex-col gap-4 lg:hidden">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} className="h-[400px]" />
          ))}
        </div>

        {/* ---------- Desktop: bento grid (lg and up) — sized to the 1920px design spec ---------- */}
        <div className="hidden lg:flex lg:flex-col" style={{ gap: ROW_GAP }}>
          {/* Row 1: ai-strategy (876) beside a stacked data/trans column (514) */}
          <div className="flex items-stretch" style={{ gap: ROW_GAP }}>
            <div style={{ flex: "876 1 0%" }}>
              {/* no height of its own — stretches to match the data+trans column, image flex-fills it */}
              <Card card={aiStrategy} index={0} className="h-full" />
            </div>
            <div className="flex flex-col" style={{ flex: "514 1 0%", gap: ROW_GAP }}>
              <Card card={dataIntelligence} index={1} style={{ height: SMALL_CARD_HEIGHT }} />
              <Card card={digitalTransformation} index={2} style={{ height: SMALL_CARD_HEIGHT }} />
            </div>
          </div>

          {/* Row 2: intelligent-automation (514) beside digital-public-infra (876) */}
          <div className="flex items-stretch" style={{ gap: ROW_GAP }}>
            <div style={{ flex: "514 1 0%" }}>
              <Card card={intelligentAutomation} index={3} style={{ height: SMALL_CARD_HEIGHT }} />
            </div>
            <div style={{ flex: "876 1 0%" }}>
              <Card card={digitalPublicInfra} index={4} style={{ height: SMALL_CARD_HEIGHT }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}