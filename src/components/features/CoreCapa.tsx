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
    id: "ai",
    title: "AI & Digital Transformation",
    description:
      "Applying machine learning and digital tools to optimize yields, resource use, and farm-level decision-making.",
    imageUrl:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Farmer reviewing crop data on a tablet in a green field",
    area: "ai",
    height: "clamp(9.4rem, 15.4vw, 18rem)",
  },
  {
    id: "livestock",
    title: "Livestock & Dairy Transformation",
    description:
      "Modernizing livestock and dairy operations with data-driven herd management, health monitoring, and productivity tools.",
    imageUrl:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Dairy cows grazing in a pasture in front of a red barn",
    area: "livestock",
    height: "clamp(9.4rem, 15.4vw, 18rem)",
  },
  {
    id: "food",
    title: "Food Security & Nutrition",
    description:
      "Strengthening supply chains and nutrition programs to improve food access and resilience for vulnerable communities.",
    imageUrl:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Hands holding a crate of fresh vegetables and peppers",
    area: "food", // desktop stretches via h-full; no height needed
  },
  {
    id: "climate",
    title: "Climate-Smart Agriculture",
    description:
      "Building climate-resilient farming systems that adapt to changing conditions while reducing environmental impact.",
    imageUrl:
      "https://images.unsplash.com/photo-1655719430654-15a44e0cd8f1?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Seedlings growing in a greenhouse with digital overlay icons",
    area: "climate",
    height: "clamp(14.5rem, 23.9vw, 28.2rem)",
  },
  {
    id: "agrifinance",
    title: "Agri-Finance & Insurance",
    description:
      "Expanding access to credit, insurance, and digital payments that help farmers manage risk and grow sustainably.",
    imageUrl:
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Farmer smiling while holding a phone and cash in a green field",
    area: "agrifinance",
    height: "clamp(14.5rem, 23.9vw, 28.2rem)",
  },
  {
    id: "infra",
    title: "Agricultural Infrastructure",
    description:
      "Investing in irrigation, storage, and logistics infrastructure that strengthens productivity across the value chain.",
    imageUrl:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=1600&auto=format&fit=crop",
    imageAlt: "Irrigation pivot system watering rows of crops at sunrise",
    area: "infra",
    height: "clamp(10.3rem, 16.2vw, 18.8rem)",
  },
];

export default function OurCapabilities() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
            <HoverRevealCard
              key={cap.id}
              title={cap.title}
              description={cap.description}
              image={cap.imageUrl}
              imageAlt={cap.imageAlt}
              className={`shadow-sm ${cap.id === "food" ? "h-full" : ""}`}
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
