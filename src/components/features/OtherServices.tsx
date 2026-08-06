"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "iconsax-react";
import Reveal from "@/components/ui/Reveal";

export type OtherService = { label: string; href: string };

export const ALL_CAPABILITIES: OtherService[] = [
  {
    label: "Digital Transformation & Emerging Technologies",
    href: "/capabilities/digital-transformation-emerging-technologies",
  },
  {
    label: "Strategy & Policy Advisory",
    href: "/capabilities/strategy-policy-advisory",
  },
  {
    label: "Data & Artificial Intelligence",
    href: "/capabilities/data-artificial-intelligence",
  },
  {
    label: "Integrated Program Management",
    href: "/capabilities/integrated-program-management",
  },
  {
    label: "Livelihoods & Entrepreneurship",
    href: "/capabilities/livelihoods-entrepreneurship",
  },
  {
    label: "Business Intelligence & Market Research",
    href: "/capabilities/business-intelligence-market-research",
  },
  {
    label: "Technology Transfer & Innovation",
    href: "/capabilities/technology-transfer-innovation",
  },
  {
    label: "Inclusive Finance & Institutional Strategy",
    href: "/capabilities/inclusive-finance-institutional-strategy",
  },
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
  const pool = ALL_CAPABILITIES.filter((service) => service.href !== currentHref);
  const [displayed, setDisplayed] = useState(() => pool.slice(0, 6));

  useEffect(() => {
    setDisplayed(shuffle(pool).slice(0, 6));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentHref]);

  return (
    <section className={bgClassName}>
      <div className="page-container text-center ">
        {/* Badge */}
        <Reveal
          as="p"
          variant="upSm"
          custom={0}
          className="text-sm 2xl:text-base  text-primary text-body-sm font-medium"
        >
          Other Capabilities
        </Reveal>

        {/* Heading */}
        <Reveal as="h2" variant="upSm" custom={1} className="font-semibold">
          We Do More Than <em className="font-medium">You Think</em>
        </Reveal>

        {/* Subtitle */}
        <Reveal
          as="p"
          variant="upSm"
          custom={2}
          className="text-muted max-w-xl mx-auto "
        >
          SkyQuest&apos;s consulting practice spans strategy, transformation,
          sustainability, and innovation find the right expertise for your
          next challenge.
        </Reveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-left">
          {displayed.map((service, idx) => (
            <Reveal key={service.href} variant="upSm" custom={idx} as="div">
              <a
                href={service.href}
                className="group flex items-center justify-between px-6 py-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all bg-white"
              >
                <h3 className="text-body-lg font-regular">{service.label}</h3>
                <span className="relative ml-4 h-8 w-8 flex-shrink-0 overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center text-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0">
                    <ArrowUp size={20} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center text-primary -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUp size={20} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesSection;
