"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Bookmark } from "lucide-react";

import Button from "@/components/ui/Button";
import {
  ALL_CATEGORIES,
  CUSTOMIZATION_HASH,
  CATEGORY_OPTIONS,
  REPORT_TYPE_OPTIONS,
  SORT_OPTIONS,
  reports,
  type Report,
  type SortOption,
} from "@/Constants/reports";
import { ensureInCart } from "@/lib/cart";
import { toggleSavedReport, useSavedReports } from "@/lib/savedReports";

const PAGE_SIZE = 10;

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/*Filter dropdown  */

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
  options: readonly string[];
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
    <div ref={ref} className="relative flex flex-1 flex-col gap-1.5">
      <span className="text-sm font-medium text-black">{label}</span>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`flex w-full items-center justify-between rounded-lg border border-black/70 px-3 py-2.5 text-sm text-gray-700 transition-colors hover:border-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
          isOpen ? "bg-white" : "bg-background"
        }`}
      >
        <span className="truncate">{value}</span>
        <ArrowDown
          className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          strokeWidth={1.75}
        />
      </button>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-full z-20 mt-1 max-h-60 overflow-auto rounded-lg border border-gray-200 bg-white "
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={option === value}
                onClick={() => {
                  onChange(option);
                  onToggle();
                }}
                className={`block w-full px-3 py-2 text-left text-sm transition-colors hover:bg-background ${
                  option === value
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-gray-600"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* Report card */

function ReportCard({
  report,
  isSelected,
  onSelectChange,
}: {
  report: Report;
  isSelected: boolean;
  onSelectChange: (checked: boolean) => void;
}) {
  return (
    <article className="group flex flex-col gap-4 rounded-xl  bg-white p-3 transition-colors hover:border-gray-300 sm:flex-row sm:p-4">
      {/* Cover — links to the same page as the title. Kept out of the tab order
          and the accessibility tree so keyboard and screen-reader users don't
          hit the same link twice. */}
      <Link
        href={`/report/${report.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block w-full shrink-0 overflow-hidden rounded-lg sm:w-44 md:w-52 lg:w-56"
      >
        <Image
          src={report.image}
          alt={`Cover of ${report.title}`}
          width={500}
          height={600}
          className="h-48 w-full rounded-lg object-cover sm:h-full"
        />
      </Link>

      {/* Body */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Meta row + document count */}
        <div className="flex flex-wrap items-start justify-between gap-2">
          <p className="text-xs text-muted">
            <span className="font-medium text-gray-700">Report ID:</span> {report.id}
            <span className="mx-1.5 text-gray-300">|</span>
            <span className="font-medium text-gray-700">Region:</span> {report.region}
            <span className="mx-1.5 text-gray-300">|</span>
            <span className="font-medium text-gray-700">Published Date:</span>{" "}
            {report.publishedDate}
            <span className="mx-1.5 text-gray-300">|</span>
            <span className="font-medium text-gray-700">Pages:</span> {report.pages}
          </p>
          <span className="shrink-0 text-xs ">
            {report.documents === 0 ? "+13 Downloads" : `+${report.documents} Downloads`}
          </span>
        </div>

        {/* The title is the link, so the anchor text names its destination
            rather than being a generic "read more". */}
        <h3 className="mt-2 border-b border-gray-200 pb-2 font-semibold leading-snug text-gray-900 text-body-xl">
          <Link href={`/report/${report.slug}`} className="hover:text-primary transition-colors">
            {report.title}
          </Link>
        </h3>


        <p className="mt-2 line-clamp-2 leading-snug text-muted text-body-sm">
          {report.description}
        </p>

        
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          <p className="font-semibold text-gray-900 text-body-xl">
            {priceFormatter.format(report.price)}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="primary"
              href="/cart-checkout"
              onClick={() => ensureInCart(report.slug)}
              minWidth="120px"
              className="text-xs"
            >
              BUY NOW
            </Button>

            <Button
              variant="gray"
              href={`/report/${report.slug}#${CUSTOMIZATION_HASH}`}
              minWidth="120px"
              className="text-xs"
            >
              GET FREE SAMPLE
            </Button>

            <button
              type="button"
              onClick={() => onSelectChange(!isSelected)}
              aria-pressed={isSelected}
              aria-label={`${isSelected ? "Remove" : "Save"} ${report.title}`}
              className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background transition-colors hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:h-10 sm:w-10 ${
                isSelected ? "text-primary" : "text-gray-900"
              }`}
            >
              <Bookmark
                className="h-7 w-7 "
                strokeWidth={1}
                fill={isSelected ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* Pagination*/

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
      className="mt-10 flex items-center justify-center gap-1.5 sm:gap-2"
    >
      {pages.map((page, idx) =>
        page === "ellipsis" ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex h-9 w-9 items-center justify-center text-sm text-gray-400 sm:h-10 sm:w-10 sm:text-base"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-sm font-medium transition-colors sm:h-10 sm:w-10 sm:text-base ${
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
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700 disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:w-10"
      >
        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </button>
    </nav>
  );
}

/* List */


export default function ReportsList({
  initialCategory = ALL_CATEGORIES,
}: {
  initialCategory?: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [reportType, setReportType] = useState<string>(REPORT_TYPE_OPTIONS[1]);
  const [category, setCategory] = useState<string>(initialCategory);
  const [sort, setSort] = useState<SortOption>(SORT_OPTIONS[0]);
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const saved = useSavedReports();
  const resultsRef = useRef<HTMLDivElement>(null);

  const filteredReports = useMemo(() => {
    let list = [...reports];

    if (reportType !== "All Reports") {
      list = list.filter((report) => report.reportType === reportType);
    }

    if (category !== ALL_CATEGORIES) {
      list = list.filter((report) => report.category === category);
    }

    list.sort((a, b) => {
      switch (sort) {
        case "Oldest First":
          return a.publishedOn.localeCompare(b.publishedOn);
        case "Price: Low to High":
          return a.price - b.price;
        case "Price: High to Low":
          return b.price - a.price;
        default:
          return b.publishedOn.localeCompare(a.publishedOn);
      }
    });

    return list;
  }, [reportType, category, sort]);

  const totalPages = Math.ceil(filteredReports.length / PAGE_SIZE);

  const visibleReports = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredReports.slice(start, start + PAGE_SIZE);
  }, [filteredReports, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (resultsRef.current) {
      const elementTop = resultsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementTop - 120, behavior: "smooth" });
    }
  };

  const handleFilterChange =
    <T extends string>(setter: (value: T) => void) =>
    (value: string) => {
      setter(value as T);
      setCurrentPage(1);
    };

  const handleClearAll = () => {
    setReportType(REPORT_TYPE_OPTIONS[1]);
    
    setCategory(initialCategory);
    setSort(SORT_OPTIONS[0]);
    setCurrentPage(1);
  };

  return (

    <div className="bg-background overflow-x-clip">
      <div
        ref={resultsRef}
        className="page-container pt-6 pb-8 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 lg:pt-8 lg:pb-8 xl:pt-8 xl:pb-10 2xl:pt-10 2xl:pb-12"
      >
        {/* Count + clear */}
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 text-body-xl">
            {filteredReports.length} {filteredReports.length === 1 ? "Report" : "Reports"}
          </h2>
          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs font-medium text-blue-600 hover:text-blue-700"
          >
            Clear All
          </button>
        </div>
        <div className="mt-1 relative left-1/2 -translate-x-1/2 w-screen border-t border-[#03030F33]" />

        {/* Filters */}
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <FilterDropdown
            label="Select Report"
            value={reportType}
            options={REPORT_TYPE_OPTIONS}
            onChange={handleFilterChange(setReportType)}
            isOpen={openFilter === "Select Report"}
            onToggle={() =>
              setOpenFilter((cur) => (cur === "Select Report" ? null : "Select Report"))
            }
          />
          <FilterDropdown
            label="Select Category"
            value={category}
            options={CATEGORY_OPTIONS}
            onChange={handleFilterChange(setCategory)}
            isOpen={openFilter === "Select Category"}
            onToggle={() =>
              setOpenFilter((cur) => (cur === "Select Category" ? null : "Select Category"))
            }
          />
          <FilterDropdown
            label="Sort By"
            value={sort}
            options={SORT_OPTIONS}
            onChange={handleFilterChange<SortOption>(setSort)}
            isOpen={openFilter === "Sort By"}
            onToggle={() => setOpenFilter((cur) => (cur === "Sort By" ? null : "Sort By"))}
          />
        </div>

        <div className="mt-3 relative left-1/2 -translate-x-1/2 w-screen border-t border-[#03030F33]" />

        {/* Results */}
        {visibleReports.length === 0 ? (
          <p className="mt-8 text-muted">
            No reports match these filters. Try clearing them to see the full catalogue.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4">
            {visibleReports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                isSelected={saved.includes(report.slug)}
                onSelectChange={() => toggleSavedReport(report.slug)}
              />
            ))}
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
