"use client";

import { useState } from "react";
import Image from "next/image";

import HoverRevealCard1 from "@/components/ui/HoverRevealCard";

interface Capability {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  area: string; // named grid-area used only on the desktop layout
  height?: string; // responsive CSS clamp() height, e.g. "clamp(11rem, 18vw, 21rem)"
}

interface OurCapabilitiesProps {
  eyebrow: string;
  capabilities: Capability[];
}

export default function OurCapabilities({
  eyebrow,
  capabilities,
}: OurCapabilitiesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="w-full bg-background">
      <div className="page-container">
        <p className="mb-2 text-sm 2xl:text-base font-medium text-primary ">
          {eyebrow}
        </p>

        {/* ---------- Mobile / tablet: stacked list, every card the same height, text always visible ---------- */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:hidden">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="relative h-96 w-full overflow-hidden rounded-2xl"
            >
              <Image
                src={cap.imageUrl}
                alt={cap.imageAlt}
                fill
                unoptimized
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 rounded-2xl bg-white/90 p-4">
                <span className="block text-base font-semibold leading-snug text-black">
                  {cap.title}
                </span>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Desktop: bento grid (lg and up), rows are `auto` — no fixed heights ---------- */}
        <div
          className="hidden lg:grid lg:gap-4"
          style={{
            gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
            gridTemplateRows: "auto auto auto",
            gridTemplateAreas: `
              "ai ai ai livestock livestock livestock"
              "food food climate climate agrifinance agrifinance"
              "food food infra infra infra infra"
            `,
          }}
        >
          {capabilities.map((cap) => (
            <HoverRevealCard1
              key={cap.id}
              title={cap.title}
              description={cap.description}
              image={cap.imageUrl}
              imageAlt={cap.imageAlt}
              className={`shadow-sm ${cap.area === "food" ? "h-full" : ""}`}
              style={{ gridArea: cap.area, ...(cap.height ? { height: cap.height } : {}) }}
              isHovered={hoveredCard === cap.id}
              onHover={(hovered) => setHoveredCard(hovered ? cap.id : null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
