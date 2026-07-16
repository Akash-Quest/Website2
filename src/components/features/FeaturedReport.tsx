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
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    date: "09 June",
    title: "Data Broker Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80",
  },
  {
    date: "09 June",
    title: "Water Quality Analyzer Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "https://images.unsplash.com/photo-1547149600-a6cdf8fce50c?w=600&q=80",
  },
  {
    date: "09 June",
    title: "Data Diode Solution Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    date: "09 June",
    title: "Smart Agriculture Sensors Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    date: "09 June",
    title: "Precision Irrigation Systems Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    date: "09 June",
    title: "AgriTech Drone Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    date: "09 June",
    title: "Livestock Monitoring Systems Market",
    description:
      "India's livestock sector accounts for more than 25% of agricultural GDP.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
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

            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous reports"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary ring-1 ring-black/5 transition-colors hover:bg-[#EDEBFF]"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next reports"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-primary ring-1 ring-black/5 transition-colors hover:bg-[#EDEBFF]"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
          {visibleReports.map((report) => (
            <div key={report.title} className="p-2 bg-background rounded-lg">
              <div className="relative h-40 w-full overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={report.image}
                  alt={report.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <p className="mt-3 text-xs font-medium text-primary">
                {report.date}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-neutral-900 2xl:text-base">
                {report.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{report.description}</p>

              <button
                type="button"
                className="mt-3 inline-flex items-center text-sm font-semibold text-primary"
              >
                Explore More
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
