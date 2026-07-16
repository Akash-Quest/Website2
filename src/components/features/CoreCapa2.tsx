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

const capabilities: Capability[] = [
  {
    id: "strategy",
    title: "Program Strategy & Design",
    description:
      "Applying machine learning and digital tools to optimize yields, resource use, and farm-level decision-making.",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Farmer reviewing crop data on a tablet in a green field",
    area: "ai",
    height: "clamp(8.5rem,14vw,10.5rem)",
  },
  {
    id: "pmo",
    title: "Program Management Offices (PMO)",
    description:
      "Modernizing livestock and dairy operations with data-driven herd management, health monitoring, and productivity tools.",
    imageUrl:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Dairy cows grazing in a pasture in front of a red barn",
    area: "livestock",
    height: "clamp(8.5rem,14vw,10.5rem)",
  },
  {
    id: "stakeholder",
    title: "Multi-Stakeholder Coordination",
    description:
      "Strengthening supply chains and nutrition programs to improve food access and resilience for vulnerable communities.",
    imageUrl:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Hands holding a crate of fresh vegetables and peppers",
    area: "food",
    height :"clamp(14.7rem,18.9vw,18.9rem)" // desktop stretches via h-full; no height needed
  },
  {
    id: "monitoring",
    title: "Monitoring, Evaluation & Learning",
    description:
      "Building climate-resilient farming systems that adapt to changing conditions while reducing environmental impact.",
    imageUrl:
      "https://images.unsplash.com/photo-1655719430654-15a44e0cd8f1?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seedlings growing in a greenhouse with digital overlay icons",
    area: "climate",
    height: "clamp(14.7rem,18.9vw,18.9rem)",
  },
  {
    id: "risk",
    title: "Risk & Performance Management",
    description:
      "Expanding access to credit, insurance, and digital payments that help farmers manage risk and grow sustainably.",
    imageUrl:
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Farmer smiling while holding a phone and cash in a green field",
    area: "agrifinance",
    height: "clamp(8.5rem,14vw,10.5rem)",
  },
  {
    id: "scaleup",
    title: "Scale-Up & Sustainability Planning",
    description:
      "Investing in irrigation, storage, and logistics infrastructure that strengthens productivity across the value chain.",
    imageUrl:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Irrigation pivot system watering rows of crops at sunrise",
    area: "infra",
    height: "clamp(8.5rem,14vw,10.5rem)",
  },
];

export default function IntegratedCapabilities() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [strategy, pmo, stakeholder, monitoring, risk, scaleup] =
    capabilities;

  return (
    <section className="w-full bg-background">
      <div className="page-container">
        <p className="mb-4 text-sm 2xl:text-base font-medium text-primary sm:mb-6">
          Our Capabilities
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
