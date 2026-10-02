import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import FAQSection from "@/components/features/Faq";
import CaseStudies from "@/components/features/HomeCaseStudie";
import RelatedReports from "@/components/features/RelatedReports";
import ReportDetailBody from "@/components/features/ReportDetailBody";
import ReportPlanSidebar from "@/components/features/ReportPlanSidebar";
import RequestCustomization from "@/components/features/RequestCustomization";
import Suscribe from "@/components/features/Suscribe";
import { reportFaqs } from "@/Constants/FaqReports";
import { insightData } from "@/Constants/Insight ";
import { buildReportDetail } from "@/Constants/reportDetail";
import { getReportBySlug, reports } from "@/Constants/reports";
import { SITE_URL } from "@/lib/site";

/**
 * Individual report pages, mirroring skyquestt.com's /report/<slug> format
 * (e.g. /report/natural-surfactants-market). Note the singular segment — the
 * listing hub stays at /reports.
 */

export function generateStaticParams() {
  return reports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) return {};

  return {
    title: `${report.name} Size, Share, and Growth Analysis | SkyQuest`,
    description: report.description,
    alternates: {
      canonical: `${SITE_URL}/report/${report.slug}`,
    },
  };
}

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

/** Deliverable formats shown beside the price. Dimensions are each file's own. */
const FILE_FORMATS = [
  { label: "XLS", src: "/All logos/xls.webp", width: 82, height: 104 },
  { label: "PPT", src: "/All logos/ppt.webp", width: 80, height: 104 },
  { label: "DOC", src: "/All logos/docs.webp", width: 82, height: 105 },
] as const;

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) notFound();

  const detail = buildReportDetail(report);

  // Prefer siblings in the same category; top up from the rest of the
  // catalogue so the strip is never short of three.
  const sameCategory = reports.filter(
    (other) => other.slug !== report.slug && other.category === report.category
  );
  const related = [
    ...sameCategory,
    ...reports.filter(
      (other) => other.slug !== report.slug && other.category !== report.category
    ),
  ].slice(0, 3);

  return (
    // `overflow-x-clip` matches the pattern used on the privacy, cookies and
    // case-study pages: it contains any stray horizontal overflow without
    // creating a scroll container or breaking sticky descendants.
    <main className="w-full bg-background overflow-x-clip">
      <div className="hero-container pb-0 sm:pb-0 md:pb-0 lg:pb-0 xl:pb-0 2xl:pb-0">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pb-2 sm:pb-2 lg:pb-5 px-4 lg:px-0">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/reports" className="hover:text-muted transition-colors">
                Reports
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">{report.name}</li>
          </ol>
        </nav>

        <h1 className="font-bold text-gray-900 text-body-xl">{detail.headline}</h1>
      </div>

      <div className="page-container pt-6 pb-8 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10 lg:pt-8 lg:pb-8 xl:pt-8 xl:pb-10 2xl:pt-10 2xl:pb-12">
        {/* Summary card */}
        <section className="flex flex-col gap-4 rounded-xl bg-white p-3 sm:flex-row sm:p-4">
          <div className="w-full shrink-0 overflow-hidden rounded-lg sm:w-44 md:w-52 lg:w-56">
            <Image
              src={report.image}
              alt={`Cover of ${report.name}`}
              width={500}
              height={600}
              priority
              className="h-48 w-full rounded-lg object-cover sm:h-full"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
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
              <span className="shrink-0 text-xs text-muted">
                +{report.documents} Downloads
              </span>
            </div>

            <h2 className="mt-2 font-semibold leading-snug text-gray-900 text-body-xl">
              {report.title}
            </h2>

            <p className="mt-2 line-clamp-3 leading-snug text-muted text-body-sm">
              {report.description}
            </p>

            <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-3">
              <p className="font-semibold text-gray-900 text-body-xl">
                {priceFormatter.format(report.price)}
              </p>

              <ul className="flex items-center gap-2">
                {FILE_FORMATS.map((format) => (
                  <li key={format.label}>
                    <Image
                      src={format.src}
                      alt={`Available as ${format.label}`}
                      width={format.width}
                      height={format.height}
                      className="h-9 w-auto"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Body + sidebar */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <ReportDetailBody report={report} detail={detail} />
          <aside>
            <ReportPlanSidebar report={report} />
          </aside>
        </div>
      </div>

      <FAQSection faqs={reportFaqs} bgClassName="bg-white" />

      <RelatedReports reports={related} />

      <RequestCustomization />

      <CaseStudies {...insightData} bgClassName="bg-background" />


      <Suscribe className="pt-0" />
    </main>
  );
}
