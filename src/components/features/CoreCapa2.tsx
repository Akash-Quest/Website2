"use client";

import { useState } from "react";
import Image from "next/image";
import HoverRevealCard from "@/components/ui/HoverRevealCard";

interface Capability {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  area: string; // named grid-area used only on the desktop layout
  height?: string; // responsive CSS clamp() height, e.g. "clamp(11rem, 18vw, 21rem)"
}

interface IntegratedCapabilitiesProps {
  eyebrow: string;
  capabilities: Capability[];
}

export default function IntegratedCapabilities({
  eyebrow,
  capabilities,
}: IntegratedCapabilitiesProps) {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [strategy, pmo, stakeholder, monitoring, risk, scaleup] =
    capabilities;

  return (
    <section className="w-full bg-background">
      <div className="page-container">
        <p className="mb-4 text-sm 2xl:text-base font-medium text-primary sm:mb-6">
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

        {/* ---------- Desktop: asymmetric two-per-row grid ---------- */}
        <div className="hidden lg:flex lg:flex-col lg:gap-4">
          <div className="flex gap-4">
            <HoverRevealCard
              title={strategy.title}
              description={strategy.description}
              image={strategy.imageUrl}
              imageAlt={strategy.imageAlt}
              className="flex-1 h-[clamp(8.5rem,14vw,10.5rem)] shadow-sm"
              isHovered={hoveredCard === strategy.id}
              onHover={(hovered) =>
                setHoveredCard(hovered ? strategy.id : null)
              }
            />
            <HoverRevealCard
              title={pmo.title}
              description={pmo.description}
              image={pmo.imageUrl}
              imageAlt={pmo.imageAlt}
              className="flex-1 h-[clamp(8.5rem,14vw,10.5rem)] shadow-sm"
              isHovered={hoveredCard === pmo.id}
              onHover={(hovered) => setHoveredCard(hovered ? pmo.id : null)}
            />
          </div>

          <div className="flex gap-4">
            <HoverRevealCard
              title={stakeholder.title}
              description={stakeholder.description}
              image={stakeholder.imageUrl}
              imageAlt={stakeholder.imageAlt}
              className="flex-[1.7] h-[clamp(14.7rem,18.9vw,18.9rem)] shadow-sm"
              isHovered={hoveredCard === stakeholder.id}
              onHover={(hovered) =>
                setHoveredCard(hovered ? stakeholder.id : null)
              }
            />
            <HoverRevealCard
              title={monitoring.title}
              description={monitoring.description}
              image={monitoring.imageUrl}
              imageAlt={monitoring.imageAlt}
              className="flex-1 h-[clamp(14.7rem,18.9vw,18.9rem)] shadow-sm"
              isHovered={hoveredCard === monitoring.id}
              onHover={(hovered) =>
                setHoveredCard(hovered ? monitoring.id : null)
              }
            />
          </div>

          <div className="flex gap-4">
            <HoverRevealCard
              title={risk.title}
              description={risk.description}
              image={risk.imageUrl}
              imageAlt={risk.imageAlt}
              className="flex-1 h-[clamp(8.5rem,14vw,10.5rem)] shadow-sm"
              isHovered={hoveredCard === risk.id}
              onHover={(hovered) => setHoveredCard(hovered ? risk.id : null)}
            />
            <HoverRevealCard
              title={scaleup.title}
              description={scaleup.description}
              image={scaleup.imageUrl}
              imageAlt={scaleup.imageAlt}
              className="flex-1 h-[clamp(8.5rem,14vw,10.5rem)] shadow-sm"
              isHovered={hoveredCard === scaleup.id}
              onHover={(hovered) =>
                setHoveredCard(hovered ? scaleup.id : null)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
