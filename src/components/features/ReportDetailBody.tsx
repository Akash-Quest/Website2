"use client";

import { useState } from "react";
import Link from "next/link";

import {
  CountryShareDonut,
  GeographyMap,
  RegionStackedBar,
} from "@/components/features/ReportCharts";
import ReportPlanSidebar from "@/components/features/ReportPlanSidebar";
import RequestCustomizationForm from "@/components/features/RequestCustomizationForm";
import type { ReportDetail } from "@/Constants/reportDetail";
import type { TocNode, TocSection } from "@/Constants/reportToc";
import type { Report } from "@/Constants/reports";

const TABS = [
  "Description",
  "Table of Contents",
  "Methodology",
  "Analyst Support",
  "Request Customization",
] as const;

type Tab = (typeof TABS)[number];


const TILE_COLORS = ["#1A73E8", "#D93025", "#3BA435", "#AA17AA"] as const;

export default function ReportDetailBody({
  report,
  detail,
}: {
  report: Report;
  detail: ReportDetail;
}) {
  const [tab, setTab] = useState<Tab>("Description");

  // The customization tab is a full-width form of its own, so the purchase
  // sidebar steps aside for it. The sidebar lives here rather than in the
  // page because this component owns the tab state that decides it.
  const showSidebar = tab !== "Request Customization";

  return (
    <div
      className={
        showSidebar ? "grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_300px]" : undefined
      }
    >
    <div className="min-w-0">
      <div className="sticky top-20 z-20 bg-background pb-2">

      <div
        role="tablist"
        aria-label="Report sections"
        className="grid w-full grid-cols-2 overflow-hidden rounded-lg border border-[#0000004D] bg-white sm:flex"
      >
        {TABS.map((item, i) => {
          const isActive = item === tab;
          const isLastOdd = i === TABS.length - 1 && TABS.length % 2 === 1;
          const dividers = [
            i % 2 === 1 ? "border-l" : "",
            i >= 2 ? "border-t" : "",
            "sm:border-t-0",
            i > 0 ? "sm:border-l" : "sm:border-l-0",
          ].join(" ");
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setTab(item)}
              className={`min-w-0 border-[#0000004D] bg-clip-padding px-2 py-3 text-[11px] font-medium uppercase leading-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500 sm:flex-1 sm:px-3 sm:py-3.5 sm:text-xs lg:px-4 2xl:whitespace-nowrap 2xl:text-[13px] ${dividers} ${
                isLastOdd ? "col-span-2" : ""
              } ${isActive ? "bg-primary text-white" : "bg-white text-gray-900 hover:bg-gray-50"}`}
            >
              {item}
            </button>
          );
        })}
      </div>
      </div>

      <div role="tabpanel" className="mt-6">
        {tab === "Description" ? (
          <DescriptionPanel report={report} detail={detail} />
        ) : tab === "Table of Contents" ? (
          <TocPanel toc={detail.toc} />
        ) : tab === "Methodology" ? (
          <MethodologyPanel report={report} />
        ) : tab === "Analyst Support" ? (
          <AnalystSupportPanel report={report} />
        ) : (
          <RequestCustomizationForm />
        )}
      </div>
    </div>

      {/* Sticky from lg up, at the same offset as the tab bar so the two pin
          side by side. `self-start` is required: a grid item stretches to the
          row's full height by default, leaving sticky no room to move. */}
      {showSidebar && (
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <ReportPlanSidebar report={report} />
        </aside>
      )}
    </div>
  );
}

function DescriptionPanel({ report, detail }: { report: Report; detail: ReportDetail }) {
  return (
    <div>
      <h2 className="font-semibold text-gray-900 text-body-xl">{report.name} Insights</h2>

      {/* Lead: the market-size summary, set larger and darker than the body. */}
      <p className="mt-4 leading-snug text-gray-900 text-body-lg">{detail.lead}</p>

      <div className="mt-5 space-y-4">
        {detail.insights.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted report-p">
            {paragraph}
          </p>
        ))}
      </div>

      <h3 className="mt-6 font-semibold text-gray-900 report-p">
        {detail.insightQuestion.question}
      </h3>
      <p className="mt-3 leading-relaxed text-muted report-p">
        {detail.insightQuestion.paragraph}
      </p>
      <ul className="mt-3 list-disc pl-5">
        <li className="leading-relaxed text-muted report-p">
          {detail.insightQuestion.example}
        </li>
      </ul>

      {/* Market snapshot */}
      <h3 className="mt-10 text-center font-semibold text-gray-900 text-body-xl">
        Market snapshot &ndash; {detail.years[0]}&ndash;{detail.years[detail.years.length - 1]}
      </h3>


      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {detail.tiles.map((tile, i) => (
          <li
            key={tile.label}
            className="overflow-hidden rounded-md text-white"
            style={{ backgroundColor: TILE_COLORS[i % TILE_COLORS.length] }}
          >
            <p className="bg-black/15 px-3 py-1.5 text-[11px]">{tile.label}</p>
            <p className="px-3 py-3 text-center text-body-sm font-medium">{tile.value}</p>
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

      <p className="mt-8 report-p italic text-muted">
        To get more insights on this market click here{" "}
        <Link href="#sample" className="not-italic font-medium text-primary hover:underline">
          Request a Free Sample Report
        </Link>
      </p>

      {/* Segments */}
      <h2 className="mt-12 font-semibold text-gray-900 text-body-xl">
        {report.name} Segments Analysis
      </h2>

      <p className="mt-3 leading-relaxed text-muted report-p">{detail.segmentIntro}</p>

      {detail.segmentQuestions.map((item) => (
        <div key={item.question} className="mt-6">
          <h3 className="font-semibold text-gray-900 report-p">{item.question}</h3>
          {item.paragraphs.map((paragraph, i) => (
            <p key={i} className="mt-3 leading-relaxed text-muted report-p">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <div className="mt-8">
        <CountryShareDonut
          shares={detail.productShares}
          title={detail.productSharesTitle}
          legendPosition="top"
          showValues={false}
        />
      </div>

      <p className="mt-6 text-center report-p italic text-muted">
        To get detailed segments analysis,{" "}
        <Link href="#sample" className="not-italic font-medium text-primary hover:underline">
          Request a Free Sample Report
        </Link>
      </p>

      {/* Regional insights */}
      <h2 className="mt-12 font-semibold text-gray-900 text-body-xl">
        {report.name} Regional Insights
      </h2>
      <p className="mt-3 leading-relaxed text-muted report-p">{detail.regionalIntro}</p>

      {detail.regionalSections.map((section) => (
        <div key={section.question} className="mt-6">
          <h3 className="font-semibold text-gray-900 report-p">{section.question}</h3>
          <p className="mt-3 leading-relaxed text-muted report-p">{section.paragraph}</p>

          {section.countries.map((country) => (
            <div key={country.name} className="mt-5">
              <h4 className="font-semibold text-gray-900 report-p">{country.name}</h4>
              <p className="mt-3 leading-relaxed text-muted report-p">{country.paragraph}</p>
            </div>
          ))}
        </div>
      ))}

      {/* Geography */}
      <div className="mt-12">
        <GeographyMap
          largest={detail.geoLargest}
          fastest={detail.geoFastest}
          title={`${report.name} By Geography`}
        />

        <p className="mt-4 text-center report-p italic text-muted">
          To know more about the market opportunities by region and country, click here to{" "}
          <Link href="#plan" className="not-italic font-medium text-primary hover:underline">
            Buy The Complete Report
          </Link>
        </p>
      </div>

      
      <h2 className="mt-12 font-semibold text-gray-900 text-body-xl">
        {report.name} Dynamics
      </h2>

      <h3 className="mt-5 font-semibold text-gray-900 report-p">Drivers</h3>
      {detail.drivers.map((item) => (
        <div key={item.title} className="mt-4">
          <h4 className="font-semibold text-gray-900 report-p">{item.title}</h4>
          <ul className="mt-2 list-disc pl-5">
            <li className="leading-relaxed text-muted report-p">{item.text}</li>
          </ul>
        </div>
      ))}

      <h3 className="mt-8 font-semibold text-gray-900 report-p">Restraints</h3>
      {detail.restraints.map((item) => (
        <div key={item.title} className="mt-4">
          <h4 className="font-semibold text-gray-900 report-p">{item.title}</h4>
          <ul className="mt-2 list-disc pl-5">
            <li className="leading-relaxed text-muted report-p">{item.text}</li>
          </ul>
        </div>
      ))}

      <p className="mt-6 report-p italic text-muted">
        <Link href="#sample" className="font-medium text-primary hover:underline">
          Request Free Customization
        </Link>{" "}
        of this report to help us to meet your business objectives.
      </p>

      {/* Competitive landscape */}
      <h2 className="mt-12 font-semibold text-gray-900 text-body-xl">
        {report.name} Competitive Landscape
      </h2>
      <p className="mt-3 leading-relaxed text-muted report-p">{detail.competitiveIntro}</p>

      <ul className="mt-4 list-disc space-y-3 pl-5">
        {detail.competitors.map((item) => (
          <li key={item.name} className="leading-relaxed text-muted report-p">
            <span className="font-semibold text-gray-900">{item.name}:</span> {item.text}
          </li>
        ))}
      </ul>

      <h3 className="mt-8 font-semibold text-gray-900 report-p">
        Top Player&rsquo;s Company Profile
      </h3>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-muted report-p">
        {detail.topPlayers.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>

      <h3 className="mt-8 font-semibold text-gray-900 report-p">
        Recent Developments in the {report.name}
      </h3>
      <ul className="mt-2 list-disc space-y-3 pl-5">
        {detail.recentDevelopments.map((item, i) => (
          <li key={i} className="leading-relaxed text-muted report-p">
            {item}
          </li>
        ))}
      </ul>

      {/* Key trends */}
      <h2 className="mt-12 font-semibold text-gray-900 text-body-xl">
        {report.name} Key Market Trends
      </h2>
      <ul className="mt-4 list-disc space-y-3 pl-5">
        {detail.keyTrends.map((item) => (
          <li key={item.title} className="leading-relaxed text-muted report-p">
            <span className="font-semibold text-gray-900">{item.title}:</span> {item.text}
          </li>
        ))}
      </ul>

      {/* SkyQuest analysis */}
      <h2 className="mt-12 font-semibold text-gray-900 text-body-xl">
        {report.name} SkyQuest Analysis
      </h2>
      <p className="mt-3 leading-relaxed text-muted report-p">{detail.analysisIntro}</p>
      <p className="mt-3 leading-relaxed text-muted report-p">{detail.analysisBody}</p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-[#DEE2E6] text-left text-body-sm">
          <caption className="sr-only">{report.name} report metrics</caption>
          <thead>
            <tr className="bg-[#BEBEBE] text-gray-900">
              <th scope="col" className="border border-[#DEE2E6] px-3 py-2 font-medium">
                Report Metric
              </th>
              <th scope="col" className="border border-[#DEE2E6] px-3 py-2 font-medium">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="text-muted">
            {detail.metrics.map((row) => (
              <tr key={row.label}>
                <th
                  scope="row"
                  className="border border-[#DEE2E6] px-3 py-2 text-left font-medium text-gray-900"
                >
                  {row.label}
                </th>
                <td className="border border-[#DEE2E6] px-3 py-2">{row.value}</td>
              </tr>
            ))}

            <tr>
              <th
                scope="row"
                className="border border-[#DEE2E6] px-3 py-2 text-left align-top font-medium text-gray-900"
              >
                Segments covered
              </th>
              <td className="border border-[#DEE2E6] px-3 py-2">
                <ul className="list-disc space-y-1 pl-4">
                  {detail.segmentsCovered.map((group) => (
                    <li key={group.group}>
                      {group.group}
                      <ul className="mt-1 list-[circle] space-y-0.5 pl-5">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>

            <tr>
              <th
                scope="row"
                className="border border-[#DEE2E6] px-3 py-2 text-left align-top font-medium text-gray-900"
              >
                Regions covered
              </th>
              <td className="border border-[#DEE2E6] px-3 py-2">{detail.regionsCovered}</td>
            </tr>

            <tr>
              <th
                scope="row"
                className="border border-[#DEE2E6] px-3 py-2 text-left align-top font-medium text-gray-900"
              >
                Companies covered
              </th>
              <td className="border border-[#DEE2E6] px-3 py-2">
                <ul className="list-disc space-y-1 pl-4">
                  {detail.topPlayers.map((player) => (
                    <li key={player}>{player}</li>
                  ))}
                </ul>
              </td>
            </tr>

            <tr>
              <th
                scope="row"
                className="border border-[#DEE2E6] px-3 py-2 text-left align-top font-medium text-gray-900"
              >
                Customization scope
              </th>
              <td className="border border-[#DEE2E6] px-3 py-2">
                Free report customization with purchase. Customization includes:-
                <ul className="mt-1 list-disc space-y-1 pl-4">
                  {detail.customizationScope.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-6 leading-relaxed text-muted report-p">
        To get a free trial access to our platform which is a one stop solution for all your data
        requirements for quicker decision making. This platform allows you to compare markets and
        competitors who are prominent in the market, and mega trends that are influencing the
        dynamics in the market. Also, get access to detailed SkyQuest exclusive matrix.
      </p>
    </div>
  );
}

/** Marker per nesting depth: disc → circle → square, as on the live page. */
const TOC_MARKERS = ["list-disc", "list-[circle]", "list-[square]"] as const;

function TocList({ nodes, depth = 0 }: { nodes: TocNode[]; depth?: number }) {
  return (
    <ul className={`${TOC_MARKERS[Math.min(depth, TOC_MARKERS.length - 1)]} space-y-2 pl-5`}>
      {nodes.map((node) => (
        <li key={node.label} className="report-p text-muted">
          <span className={node.bold ? "font-semibold text-gray-900" : undefined}>
            {node.label}
          </span>
          {node.children && (
            <div className="mt-2">
              <TocList nodes={node.children} depth={depth + 1} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function TocPanel({ toc }: { toc: TocSection[] }) {
  return (
    <div>
      <h2 className="font-semibold text-gray-900 text-body-xl">Table Of Content</h2>

      {toc.map((section) => (
        <section key={section.heading} className="mt-6">
          <h3 className="report-p font-semibold text-gray-900">{section.heading}</h3>

          {section.lines?.map((line) => (
            <p key={line} className="report-p mt-3 text-muted">
              {line}
            </p>
          ))}

          <div className="mt-3">
            <TocList nodes={section.items} />
          </div>
        </section>
      ))}
    </div>
  );
}

/** House research methodology — identical for every report bar the market name. */
function MethodologyPanel({ report }: { report: Report }) {
  const steps = [
    {
      title: "Information Procurement",
      text: "This stage involved the procurement of Market data or related information via primary and secondary sources. The various secondary sources used included various company websites, annual reports, trade databases, and paid databases such as Hoover's, Bloomberg Business, Factiva, and Avention. Our team did 45 primary interactions Globally which included several stakeholders such as manufacturers, customers, key opinion leaders, etc. Overall, information procurement was one of the most extensive stages in our research process.",
    },
    {
      title: "Information Analysis",
      text: `This step involved triangulation of data through bottom-up and top-down approaches to estimate and validate the total size and future estimate of the ${report.name}.`,
    },
    {
      title: "Report Formulation",
      text: "The final step entailed the placement of data points in appropriate Market spaces in an attempt to deduce viable conclusions.",
    },
    {
      title: "Validation & Publishing",
      text: "Validation is the most important step in the process. Validation & re-validation via an intricately designed process helped us finalize data points to be used for final calculations. The final Market estimates and forecasts were then aligned and sent to our panel of industry experts for validation of data. Once the validation was done the report was sent to our Quality Assurance team to ensure adherence to style guides, consistency & design.",
    },
  ];

  return (
    <div>
      <h2 className="font-semibold text-gray-900 text-body-xl">Methodology</h2>

      <p className="report-p mt-4 leading-relaxed text-muted">
        For the {report.name}, our research methodology involved a mixture of primary and
        secondary data sources. Key steps involved in the research process are listed below:
      </p>

      <ol className="mt-5 space-y-5">
        {steps.map((step, i) => (
          <li key={step.title} className="report-p leading-relaxed text-muted">
            <span className="font-semibold text-gray-900">
              {i + 1}. {step.title}:
            </span>{" "}
            {step.text}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** House analyst-support offer — identical for every report bar the market name. */
function AnalystSupportPanel({ report }: { report: Report }) {
  const options = [
    {
      title: "Product Analysis",
      text: "Product matrix, which offers a detailed comparison of the product portfolio of companies.",
    },
    {
      title: "Regional Analysis",
      text: `Further analysis of the ${report.name} for additional countries.`,
    },
    {
      title: "Competitive Analysis",
      text: "Detailed analysis and profiling of additional Market players & comparative analysis of competitive products.",
    },
    {
      title: "Go to Market Strategy",
      text: "Find the high-growth channels to invest your marketing efforts and increase your customer base.",
    },
    {
      title: "Innovation Mapping",
      // The live page reads "racial solutions" — a typo for "radical".
      text: "Identify radical solutions and innovation, connected to deep ecosystems of innovators, start-ups, academics, and strategic partners.",
    },
    {
      title: "Category Intelligence",
      text: "Customized intelligence that is relevant to their supply Markets will enable them to make smarter sourcing decisions and improve their category management.",
    },
    {
      title: "Public Company Transcript Analysis",
      text: "To improve the investment performance by generating new alpha and making better-informed decisions.",
    },
    {
      title: "Social Media Listening",
      text: "To analyze the conversations and trends happening not just around your brand, but around your industry as a whole, and use those insights to make better Marketing decisions.",
    },
  ];

  return (
    <div>
      <h2 className="font-semibold text-gray-900 text-body-xl">Analyst Support</h2>

      <h3 className="report-p mt-5 font-semibold text-gray-900">Customization Options</h3>

      <p className="report-p mt-3 leading-relaxed text-muted">
        With the given market data, our dedicated team of analysts can offer you the following
        customization options are available for the {report.name}:
      </p>

      <ul className="mt-5 space-y-5">
        {options.map((option) => (
          <li key={option.title} className="report-p leading-relaxed text-muted">
            <span className="font-semibold text-gray-900">{option.title}:</span> {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

