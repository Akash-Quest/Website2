import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getReportById, reports } from "@/lib/reports";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return reports.map((report) => ({ id: String(report.id) }));
}

export default async function InsightDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const report = getReportById(Number(id));

  if (!report) {
    notFound();
  }

  return (
    <section className="bg-background">
      <div className="hero-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pb-2 sm:pb-2 lg:pb-5 px-4 lg:px-0">
          <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="/insight" className="hover:text-muted transition-colors">
                Insight Listing
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-500 truncate max-w-[200px] sm:max-w-none">
              {report.title}
            </li>
          </ol>
        </nav>

        <div className="px-[2]">
          {/* Eyebrow */}
          <div className="flex items-center gap-1.5 text-sm text-muted mb-2 mt-8 sm:mt-8 md:mt-2">
            <span>{report.date}</span>
          </div>

          {/* Heading */}
          <h1 className="font-bold">{report.title}</h1>

          {/* Description */}
        </div>

        {/* Hero Image */}
        <div className="mt-5 sm:px-[4]">
          <div className="relative w-full aspect-[3/3.5] md:aspect-[3/0.9] 2xl:aspect-[3/1] sm:rounded-2xl overflow-hidden">
            <Image
              src={report.imageUrl}
              alt={report.imageAlt}
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
