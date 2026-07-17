"use client";

import Image from "next/image";
import React from "react";

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
    imageUrl:"/Service/Digital/AiMosic.jpg",
    imageAlt: "Colorful abstract fluid ribbon graphic",
  },
  {
    id: "data-intelligence",
    title: "Data Intelligence & Advanced Analytics",
    description:
      "Transforming data into actionable insights through modern analytics, predictive modeling, business intelligence, and decision-support systems that improve organizational performance.",
    bgColor: "#E5E5E5",
    imageUrl:"/Service/Digital/Datainteligence2.jpg",
     imageAlt: "Dark iridescent abstract 3D blob graphic",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation & Enterprise Modernization",
    description:
      "Enabling organizations to modernize operations, digitize processes, improve customer experiences, and accelerate transformation through technology-driven change.",
    bgColor: "#F5E7D6",
    imageUrl:"/Service/Digital/DigitalTransformation.jpg",
     imageAlt: "Iridescent abstract chrome swirl graphic",
  },
  {
    id: "intelligent-automation",
    title: "Intelligent Automation & Emerging Technologies",
    description:"Leveraging automation, AI-powered workflows, and next-generation technologies to increase efficiency, reduce operational complexity, and drive innovation.",
    bgColor: "#E5E2F8",
     imageUrl:"/Service/Digital/Inteligent.jpg",
     imageAlt: "Iridescent abstract chrome swirl graphic",
  },
  {
    id: "digital-public-infra",
    title: "Digital Public Infrastructure & Smart Governance",
    description:
      "Supporting governments and institutions in building scalable digital ecosystems that improve service delivery, strengthen governance, and enable data-driven decision-making.",
    bgColor: "#EED8EB",
    imageUrl:"/Service/Digital/DigitalPublic.jpg",
     imageAlt: "Gold and purple iridescent abstract swirl graphic",
  },
];

function Card({
  card,
  className = "",
  style,
}: {
  card: CapabilityCard;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-2xl ${className}`}
      style={{ backgroundColor: card.bgColor, ...style }}
    >
      <div className="pt-5 sm:pt-6 2xl:pt-8 px-5 sm:px-6 2xl:px-8">
        <h3 className="font-semibold text-lg  line-clamp-2">
          {card.title}
        </h3>
        <p className="text-muted body-sm line-clamp-3">
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
    </div>
  );
}

const SMALL_CARD_HEIGHT = "clamp(14.18rem,16.96vw,20.35rem)";
const ROW_GAP = "clamp(1rem,1.5625vw,1.875rem)";

export default function DigitalMosaic() {
  const [aiStrategy, dataIntelligence, digitalTransformation, intelligentAutomation, digitalPublicInfra] =
    cards;

  return (
    <section className="w-full bg-background">
      <div className="page-container pb-0">
         <p className="text-sm 2xl:text-base text-primary mb-2">
          Our Capabilities
        </p>

        {/* ---------- Mobile / tablet: simple stacked list, every card fixed at 400px tall ---------- */}
        <div className="flex flex-col gap-4 lg:hidden">
          {cards.map((card) => (
            <Card key={card.id} card={card} className="h-[400px]" />
          ))}
        </div>

        {/* ---------- Desktop: bento grid (lg and up) — sized to the 1920px design spec ---------- */}
        <div className="hidden lg:flex lg:flex-col" style={{ gap: ROW_GAP }}>
          {/* Row 1: ai-strategy (876) beside a stacked data/trans column (514) */}
          <div className="flex items-stretch" style={{ gap: ROW_GAP }}>
            <div style={{ flex: "876 1 0%" }}>
              {/* no height of its own — stretches to match the data+trans column, image flex-fills it */}
              <Card card={aiStrategy} className="h-full" />
            </div>
            <div className="flex flex-col" style={{ flex: "514 1 0%", gap: ROW_GAP }}>
              <Card card={dataIntelligence} style={{ height: SMALL_CARD_HEIGHT }} />
              <Card card={digitalTransformation} style={{ height: SMALL_CARD_HEIGHT }} />
            </div>
          </div>

          {/* Row 2: intelligent-automation (514) beside digital-public-infra (876) */}
          <div className="flex items-stretch" style={{ gap: ROW_GAP }}>
            <div style={{ flex: "514 1 0%" }}>
              <Card card={intelligentAutomation} style={{ height: SMALL_CARD_HEIGHT }} />
            </div>
            <div style={{ flex: "876 1 0%" }}>
              <Card card={digitalPublicInfra} style={{ height: SMALL_CARD_HEIGHT }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}