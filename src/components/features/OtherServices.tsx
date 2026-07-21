"use client";

import { ArrowUpRight } from "lucide-react";

export type OtherService = { label: string; href: string };

const defaultServices: OtherService[] = [
  { label: "Social / CSR / ESG Consulting", href: "#" },
  { label: "Market Research", href: "#" },
  { label: "Strategy & Transformation", href: "#" },
  {
    label: "Innovation, R&D & Technology Commercialization Consulting",
    href: "#",
  },
  { label: "Public Sector & Development Consulting", href: "#" },
  { label: "AI Consulting & Digital Transformation", href: "#" },
];

const OtherServicesSection = ({
  bgClassName = "bg-background",
  services = defaultServices,
}: {
  bgClassName?: string;
  services?: OtherService[];
}) => {
  return (
    <section className={bgClassName}>
      <div className="page-container text-center ">
        {/* Badge */}
        <p className="text-sm 2xl:text-base  text-primary mb-2">
          Other Service
        </p>

        {/* Heading */}
        <h2 className="font-semibold">
          We Do More Than <em className="font-medium">You Think</em>
        </h2>

        {/* Subtitle */}
        <p className="text-muted mt-3 max-w-xl mx-auto text-sm 2xl:text-base   ">
          SkyQuest&apos;s consulting practice spans strategy, transformation,
          sustainability, and innovation find the right expertise for your
          next challenge.
        </p>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 text-left">
          {services.map((service) => (
            <a
              key={service.label}
              href={service.href}
              className="flex items-center justify-between px-6 py-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-white"
            >
              <h3>{service.label}</h3>
              <ArrowUpRight className="w-4 h-4 text-primary flex-shrink-0 ml-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesSection;