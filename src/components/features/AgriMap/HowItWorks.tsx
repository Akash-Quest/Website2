"use client";

import { Database, RefreshCw, Cpu, Headphones } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Ingestion",
    description:
      "Pulls from DSE crop reports, ICAR variety registry, IIWBR/IPR seed databases, and BAMETI surveys on a daily cadence.",
  },
  {
    icon: RefreshCw,
    title: "Geo-computation",
    description:
      "Data is geocoded to district and block polygons. NDVI satellite passes are fused with ground-truth records automatically.",
  },
  {
    icon: Cpu,
    title: "Intelligence Layer",
    description:
      "KrishiScore and SRR algorithms run on each update cycle. Alerts are triggered when thresholds are breached.",
  },
  {
    icon: Headphones,
    title: "Advisory Dispatch",
    description:
      "Officers send targeted WhatsApp advisories in Hindi to farmers in critical blocks directly from the dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background">
      <div className="page-container pt-0">
        {/* Heading */}
        <div className="text-center">
          <p className="text-primary text-sm font-medium">How It Works</p>

          <h2 className="mt-2 font-bold">
            From Raw Data To Field{" "}
            <em className="font-serif font-normal italic">Action</em>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted">
            AgriMap pulls from 6 authoritative data sources and surfaces
            insights that are ready to act on, not just read.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Connector lines — column centers sit at x=150,450,750,1050;
              top-row cards (1,3) sit at y=90, bottom-row cards (2,4) at y=150,
              matching the md:pt-24 offset in the grid below. */}
          <svg
            className="absolute inset-0 hidden h-[220px] w-full lg:block"
            viewBox="0 0 1200 220"
            preserveAspectRatio="none"
          >
            {/* 1 (top) -> 2 (bottom): shallow arch that descends into card 2 */}
            <path
              d="M190 95 C250 40 350 40 410 150"
              fill="none"
              stroke="#C7CBFA"
              strokeWidth="2"
              strokeDasharray="6 8"
            />

            {/* 2 (bottom) -> 3 (top): the big, deep loop */}
            <path
              d="M490 150 C550 250 650 250 710 95"
              fill="none"
              stroke="#C7CBFA"
              strokeWidth="2"
              strokeDasharray="6 8"
            />

            {/* 3 (top) -> 4 (bottom): shallow arch, mirrors 1->2 */}
            <path
              d="M790 95 C850 40 950 40 1010 150"
              fill="none"
              stroke="#C7CBFA"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          <div className="relative grid gap-10 md:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className={index % 2 ? "md:pt-24" : ""}>
                {/* Icon Card */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-base font-semibold">
                  {index + 1}. {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}