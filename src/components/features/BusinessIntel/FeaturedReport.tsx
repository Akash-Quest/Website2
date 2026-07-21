"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

const REPORTS = [
  {
    date: "09 June",
    title: "QR Codes Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "/service/BusinessIntel/qrcode.jpg",
  },
  {
    date: "09 June",
    title: "Data Broker Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "/service/BusinessIntel/databroker.jpg",
  },
  {
    date: "09 June",
    title: "Water Quality Analyzer Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "/service/BusinessIntel/water.jpg",
  },
  {
    date: "09 June",
    title: "Data Diode Solution Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "/service/BusinessIntel/datadiode.jpg",
  },
];

const CARDS_PER_PAGE = 4;

export default function FeaturedReport() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(REPORTS.length / CARDS_PER_PAGE);

  const start = page * CARDS_PER_PAGE;
  const visibleReports = REPORTS.slice(start, start + CARDS_PER_PAGE);

  const goPrev = () => setPage((page - 1 + totalPages) % totalPages);
  const goNext = () => setPage((page + 1) % totalPages);

  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
              Featured Reports
            </p>
            <h2 className="font-bold">
              Deep Sector Expertise Across
              <br />
              High-<em className="font-semibold">Growth Markets</em>
            </h2>
            <p className="mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
              We help organizations navigate evolving sustainability
              expectations while creating long-term business, social, and
              environmental value.
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 lg:flex-col lg:items-end">
            <Button variant="primary" iconSize={16}>
              Reports Store
            </Button>

            
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
          {visibleReports.map((report) => (
            <div key={report.title} className="p-2 bg-background rounded-lg">
              <div className="relative h-40 2xl:h-48 w-full overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={report.image}
                  alt={report.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-xs 2xl:text-sm font-medium text-primary">
                {report.date}
              </p>
              <h3 className="mt-1 font-semibold text-neutral-900">
                {report.title}
              </h3>
              <p className="mt-1.5 text-sm  text-muted">{report.description}</p>

              <button
                type="button"
                className="group/learn mt-3 flex w-full items-center justify-end text-sm font-semibold text-primary transition-colors duration-300 cursor-pointer"
              >
                Explore More
                <span className="relative ml-1 h-3.5 w-3.5 overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-3 group-hover/learn:-translate-y-3 group-hover/learn:opacity-0">
                    <ArrowUpRight size={14} />
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-0 group-hover/learn:translate-y-0 group-hover/learn:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
