"use client";

import { useState } from "react";
import Link from "next/link";

import { CountryShareDonut, RegionStackedBar } from "@/components/features/ReportCharts";
import type { ReportDetail } from "@/Constants/reportDetail";
import type { Report } from "@/Constants/reports";

const TABS = [
  "Description",
  "Table of Contents",
  "Methodology",
  "Analyst Support",
  "Request Customization",
] as const;

type Tab = (typeof TABS)[number];

export default function ReportDetailBody({
  report,
  detail,
}: {
  report: Report;
  detail: ReportDetail;
}) {
  const [tab, setTab] = useState<Tab>("Description");

  return (
    <div>
      {/* Tab bar — one joined segmented control. Five equal columns that always
          fit the content width: labels wrap to a second line rather than
          overflowing, so there is no horizontal scrollbar at any size. */}
      <div
        role="tablist"
        aria-label="Report sections"
        className="flex w-full overflow-hidden rounded-lg border border-gray-200 bg-white"
      >
        {TABS.map((item, i) => {
          const isActive = item === tab;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(item)}
              className={`min-w-0 flex-1 px-2 py-3.5 text-[11px] font-medium uppercase leading-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 sm:px-3 sm:text-xs lg:px-4 2xl:whitespace-nowrap 2xl:text-[13px] ${
                i > 0 ? "border-l border-gray-200" : ""
              } ${isActive ? "bg-primary text-white" : "text-gray-900 hover:bg-gray-50"}`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" className="mt-6">
        {tab === "Description" ? (
          <DescriptionPanel report={report} detail={detail} />
        ) : (
          <Placeholder tab={tab} />
        )}
      </div>
    </div>
  );
}

function DescriptionPanel({ report, detail }: { report: Report; detail: ReportDetail }) {
  return (
    <div>
      <h2 className="font-semibold text-gray-900 text-body-xl">{report.name} Insights</h2>

      <div className="mt-3 space-y-4">
        {detail.insights.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted text-body-sm">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Market snapshot */}
      <h3 className="mt-10 text-center font-semibold text-gray-900 text-body-xl">
        Market snapshot &ndash; {detail.years[0]}&ndash;{detail.years[detail.years.length - 1]}
      </h3>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {detail.tiles.map((tile) => (
          <li key={tile.label} className="overflow-hidden rounded-lg border border-gray-200">
            <p className="bg-background px-3 py-1.5 text-xs text-gray-600">{tile.label}</p>
            <p className="px-3 py-2.5 font-semibold text-gray-900 text-body-sm">{tile.value}</p>
          </li>
        ))}
      </ul>

      {/* Charts */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <RegionStackedBar
          years={detail.years}
          regions={detail.regions}
          unit={detail.unit}
          title={`${report.name} by region`}
        />
        <CountryShareDonut shares={detail.shares} title={detail.shareTitle} />
      </div>

      <p className="mt-8 text-body-sm italic text-muted">
        To get more insights on this market click here{" "}
        <Link href="#sample" className="not-italic font-medium text-primary hover:underline">
          Request a Free Sample Report
        </Link>
      </p>

      {/* Segments */}
      <h2 className="mt-10 font-semibold text-gray-900 text-body-xl">
        {report.name} Segments Analysis
      </h2>
      <p className="mt-3 leading-relaxed text-muted text-body-sm">
        The global {report.name.toLowerCase()} is segmented by {detail.segments.join(", ")} and
        region. Each segment is sized independently and reconciled against the total, so shares
        sum without residuals.
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-muted text-body-sm">
        {detail.segments.map((segment) => (
          <li key={segment}>
            <span className="font-medium text-gray-700">By {segment}</span> &mdash; sized across
            the {detail.years[0]}&ndash;{detail.years[detail.years.length - 1]} forecast window.
          </li>
        ))}
      </ul>
    </div>
  );
}

function Placeholder({ tab }: { tab: Tab }) {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
      <p className="font-medium text-gray-700 text-body-sm">{tab}</p>
      <p className="mt-1 text-muted text-body-sm">
        This section has no content yet. Add it to the report record to populate it.
      </p>
    </div>
  );
}
