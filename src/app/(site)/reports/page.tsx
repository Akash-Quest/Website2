import Link from "next/link";
import type { Metadata } from "next";

import Reveal from "@/components/ui/Reveal";
import ReportsList from "@/components/features/ReportsList";
import Suscribe from "@/components/features/Suscribe";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Market Research Reports | SkyQuest",
  description:
    "Browse SkyQuest market research reports across chemicals, agriculture, healthcare, energy and technology, with forecasts through 2033.",
  keywords: [
    "market research reports",
    "industry forecast",
    "SkyQuest reports",
  ],
  alternates: {
    canonical: `${SITE_URL}/reports`,
  },
};

function ReportsHero() {
  return (
    <section className="bg-background">
      {/* `hero-container` carries a large bottom padding sized for pages whose
          hero ends in a full-width image. This hero is only a breadcrumb and a
          heading, so that padding is collapsed at every breakpoint — the list
          below supplies its own top spacing. */}
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
            <li className="text-gray-700">Reports</li>
          </ol>
        </nav>

        <div className="px-[2]">
          <Reveal as="h2" variant="left" custom={0} className="font-bold text-gray-900">
            Market Research Reports
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ReportsPage() {
  return (
    <main className="w-full bg-background">
      <ReportsHero />
      <ReportsList />
      <Suscribe />
    </main>
  );
}
