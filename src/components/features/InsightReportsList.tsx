"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { ArrowUp } from "iconsax-react";
import { insightData, type Insight } from "@/Constants/Insight ";
import { caseStudiesData } from "@/Constants/caseStudies";
import megaMenu from "@/lib/megaMenu.json";
import { slugify } from "@/lib/slug";

type ListedInsight = Insight & { href: string };

const insights: ListedInsight[] = [
  ...insightData.caseStudies.map((s) => ({ ...s, href: `/insight/${slugify(s.title)}` })),
  ...caseStudiesData.caseStudies.map((s) => ({ ...s, href: `/case-studies/${slugify(s.title)}` })),
];

function InsightCard({ insight }: { insight: ListedInsight }) {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="group flex flex-col sm:flex-row gap-4 bg-[#F7F5F1] rounded-xl p-2 sm:p-3 transition-colors cursor-pointer"
      style={{
        backgroundColor: isHovered ? '#EAEAF8' : '#F7F5F1'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => router.push(insight.href)}
    >
        <div className="w-full sm:flex-1 flex flex-col justify-between min-w-0">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-xs text-muted">
              <span>{insight.type}</span>
              <span className="inline-block h-1 w-1 rounded-full bg-muted" />
              <span>{insight.date}</span>
            </div>

            <h3 className="mt-2 sm:truncate font-semibold text-gray-900 text-body-xl">
              {insight.title}
            </h3>

            <p className="mt-3  leading-tight text-muted">
              {insight.description}
            </p>
          </div>

          <Link
            href={insight.href}
            onClick={(e) => e.stopPropagation()}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary "
          >
            Visit Page
            <span className="relative ml-1 h-3.5 w-3.5 overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:opacity-0">
                <ArrowUp size={14} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUp size={14} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
              </span>
            </span>
          </Link>
        </div>
      {/* Right: Image */}
      <div className="w-full sm:w-56 flex-shrink-0 overflow-hidden rounded-lg">
      <Image
        src={insight.image}
        alt={insight.title}
        width={400}
        height={300}
        unoptimized
        className="w-full h-40 sm:h-full rounded-lg object-cover flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
      />  
      </div>
    </div>
  );
}

const PAGE_SIZE = 5;

const CATEGORY_OPTIONS = ["Articles","Case Study"];

const industriesMenuItem = (megaMenu as any).groups
  .flatMap((group: any) => group.items)
  .find((item: any) => item.id === "industries");

const ALL_INDUSTRIES = "All Industries";
const INDUSTRY_OPTIONS: string[] = [
  ALL_INDUSTRIES,
  ...(industriesMenuItem?.content?.columns?.[0]?.links?.map((link: { label: string }) => link.label) ?? []),
];

const capabilitiesMenuItem = (megaMenu as any).groups
  .flatMap((group: any) => group.items)
  .find((item: any) => item.id === "capabilities");

const ALL_CAPABILITIES = "All Capabilities";
const CAPABILITY_OPTIONS: string[] = [
  ALL_CAPABILITIES,
  ...(capabilitiesMenuItem?.content?.columns?.[0]?.links?.map((link: { label: string }) => link.label) ?? []),
];



function FilterDropdown({
  label,
  value,
  options,
  onChange,
  isOpen,
  onToggle,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onToggle();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative flex flex-1 flex-col gap-1.5 ">
      <span className="text-xs font-medium text-black/70 ">{label}</span>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-lg border border-black/70 bg-white px-3 py-2.5 text-sm text-gray-700 transition-colors hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <span >{value}</span>
        <ArrowDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          strokeWidth={1.75}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-20 mt-1 max-h-60 overflow-auto rounded-lg border border-gray-200 bg-white ">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                onToggle();
              }}
              className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${
                option === value ? "bg-gray-50 font-medium text-gray-900" : "text-gray-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = useMemo(() => {
    const maxVisible = 5;
    if (totalPages <= maxVisible + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const result: (number | "ellipsis")[] = [1];
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) result.push("ellipsis");
    for (let p = start; p <= end; p++) result.push(p);
    if (end < totalPages - 1) result.push("ellipsis");
    result.push(totalPages);

    return result;
  }, [currentPage, totalPages]);

  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 mb-0 flex items-center justify-center gap-1.5 sm:gap-2"
    >

      {pages.map((page, idx) =>
        page === "ellipsis" ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center text-sm sm:text-base text-gray-400"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-md text-sm sm:text-base font-medium transition-colors border border-gray-300 ${
              page === currentPage
                ? "bg-[#EEFCD1] text-gray-900"
                : "text-gray-900 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-gray-300 text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </button>
    </nav>
  );
}


export default function InsightsResult() {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
  const [industry, setIndustry] = useState(INDUSTRY_OPTIONS[0]);
  const [capability, setCapability] = useState(CAPABILITY_OPTIONS[0]);
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const resultsRef = React.useRef<HTMLDivElement>(null);

  const filteredInsights = useMemo(() => {
    let list =
      category === "All Insights"
        ? [...insights]
        : insights.filter((r) => r.category === category);

    if (industry !== ALL_INDUSTRIES) {
      list = list.filter((r) => r.industry === industry);
    }

    if (capability !== ALL_CAPABILITIES) {
      list = list.filter((r) => r.capability === capability);
    }

    list.sort((a, b) => {
      const da = new Date(a.date.replace(/^Insights?\s+/, "")).getTime();
      const db = new Date(b.date.replace(/^Insights?\s+/, "")).getTime();
      return db - da;
    });

    return list;
  }, [category, industry, capability]);

  const totalPages = Math.ceil(filteredInsights.length / PAGE_SIZE);

  const visibleCards = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredInsights.slice(start, start + PAGE_SIZE);
  }, [filteredInsights, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      if (resultsRef.current) {
        const elementTop = resultsRef.current.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - 120,
          behavior: "smooth"
        });
      }
    }, 0);
  };

  const handleFilterChange = (setter: (value: string) => void) => (value: string) => {
    setter(value);
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setCategory(CATEGORY_OPTIONS[0]);
    setIndustry(INDUSTRY_OPTIONS[0]);
    setCapability(CAPABILITY_OPTIONS[0]);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="page-container py-8 sm:py-8 md:py-10 lg:py-8 xl:py-10 2xl:py-12 "  ref={resultsRef}>
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className=" font-semibold text-gray-900 text-body-xl" >
              {filteredInsights.length} Results
            </h2>
            <button
              type="button"
              onClick={handleClearAll}
              className="text-xs font-medium text-blue-600 hover:text-blue-700"
            >
              Clear All
            </button>
          </div>
        </div>
        <div className="mt-1 border-t border-gray-200" />

        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <FilterDropdown
            label="Category"
            value={category}
            options={CATEGORY_OPTIONS}
            onChange={handleFilterChange(setCategory)}
            isOpen={openFilter === "Category"}
            onToggle={() => setOpenFilter((cur) => (cur === "Category" ? null : "Category"))}
          />
          <FilterDropdown
            label="Industry Filter"
            value={industry}
            options={INDUSTRY_OPTIONS}
            onChange={handleFilterChange(setIndustry)}
            isOpen={openFilter === "Industry Filter"}
            onToggle={() => setOpenFilter((cur) => (cur === "Industry Filter" ? null : "Industry Filter"))}
          />
          <FilterDropdown
            label="Capabilities Filter"
            value={capability}
            options={CAPABILITY_OPTIONS}
            onChange={handleFilterChange(setCapability)}
            isOpen={openFilter === "Capabilities Filter"}
            onToggle={() => setOpenFilter((cur) => (cur === "Capabilities Filter" ? null : "Capabilities Filter"))}
          />
        </div>

        <div className="mt-3 border-t border-gray-200" />
        <div className="mt-8 grid grid-cols-1 gap-4">
          {visibleCards.map((insight, idx) => (
            <InsightCard insight={insight} key={idx} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}