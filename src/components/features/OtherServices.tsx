"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export type OtherService = { label: string; href: string };

export const ALL_SERVICES: OtherService[] = [
  {
    label: "Digital Transformation & Emerging Technologies",
    href: "/services/digital-transformation-emerging-technologies",
  },
  { label: "Public Sector Advisory", href: "/services/public-sector-advisory" },
  {
    label: "Data & Artificial Intelligence",
    href: "/services/data-artificial-intelligence",
  },
  {
    label: "Integrated Program Management",
    href: "/services/integrated-program-management",
  },
  { label: "Social Impact & CSR", href: "/services/social-impact-csr" },
  {
    label: "Business Intelligence & Market Research",
    href: "/services/business-intelligence-market-research",
  },
  {
    label: "Climate, Sustainability & ESG Advisory",
    href: "/services/climate-sustainability-esg-advisory",
  },
  { label: "Agriculture & Livestock", href: "/services/agriculture-livestock" },
];

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const OtherServicesSection = ({
  bgClassName = "bg-background",
  currentHref,
}: {
  bgClassName?: string;
  currentHref?: string;
}) => {
  const pool = ALL_SERVICES.filter((service) => service.href !== currentHref);
  const [displayed, setDisplayed] = useState(() => pool.slice(0, 6));

  useEffect(() => {
    setDisplayed(shuffle(pool).slice(0, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentHref]);

  return (
    <section className={bgClassName}>
      <div className="page-container text-center ">
        {/* Badge */}
        <p className="text-sm 2xl:text-base  text-primary text-body-sm font-medium">
          Other Service
        </p>

        {/* Heading */}
        <h2 className="font-semibold">
          We Do More Than <em className="font-medium">You Think</em>
        </h2>

        {/* Subtitle */}
        <p className="text-muted max-w-xl mx-auto ">
          SkyQuest&apos;s consulting practice spans strategy, transformation,
          sustainability, and innovation find the right expertise for your
          next challenge.
        </p>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-left">
          {displayed.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group flex items-center justify-between px-6 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all bg-white"
            >
              <h3 className="text-body-lg font-regular">{service.label}</h3>
              <span className="relative ml-4 h-3.5 w-3.5 flex-shrink-0 overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center text-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0">
                  <ArrowUpRight size={14} />
                </span>
                <span className="absolute inset-0 flex items-center justify-center text-primary -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={14} />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesSection;
