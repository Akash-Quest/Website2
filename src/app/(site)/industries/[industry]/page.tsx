import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Reveal from "@/components/ui/Reveal";
import ReportsList from "@/components/features/ReportsList";
import Suscribe from "@/components/features/Suscribe";
import { CATEGORIES, getCategoryBySlug } from "@/Constants/reports";
import { SITE_URL } from "@/lib/site";
import { slugify } from "@/lib/slug";

/**
 * Report-category listings, mirroring skyquestt.com's flat
 * /industries/<slug> namespace (e.g. /industries/chemicals).
 *
 * This dynamic segment sits beside the eleven static consulting-practice
 * folders in this directory. Next resolves a static segment ahead of a dynamic
 * one, so those pages are unaffected; anything that is neither a static folder
 * nor a report category 404s via `getCategoryBySlug` below.
 */

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ industry: slugify(category) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  const { industry } = await params;
  const category = getCategoryBySlug(industry);

  if (!category) return {};

  return {
    title: `${category} Market Research Reports | SkyQuest`,
    description: `Browse SkyQuest ${category.toLowerCase()} market research reports, with market sizing and industry forecasts through 2033.`,
    keywords: [
      `${category.toLowerCase()} market research`,
      `${category.toLowerCase()} industry forecast`,
      "market research reports",
      "SkyQuest reports",
    ],
    alternates: {
      canonical: `${SITE_URL}/industries/${industry}`,
    },
  };
}

export default async function IndustryReportsPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const category = getCategoryBySlug(industry);

  if (!category) notFound();

  return (
    <main className="w-full bg-background">
      <section className="bg-background">
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
              <li className="text-gray-700">{category}</li>
            </ol>
          </nav>

          <div className="px-[2]">
            <Reveal as="h1" variant="left" custom={0} className="font-bold text-gray-900">
              {category} Market Research Reports
            </Reveal>
          </div>
        </div>
      </section>

      <ReportsList initialCategory={category} />
      <Suscribe />
    </main>
  );
}
