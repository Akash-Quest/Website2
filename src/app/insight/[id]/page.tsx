import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Link2, Mail } from "lucide-react";
import { getReportById, reports, type ContentBlock } from "@/lib/reports";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";

export function generateStaticParams() {
  return reports.map((report) => ({ id: String(report.id) }));
}

function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h3 className="mt-10 mb-3 text-xl sm:text-2xl font-bold text-gray-900">
          {block.text}
          {block.emphasis && <em className="font-semibold">{block.emphasis}</em>}
        </h3>
      );
    case "callout":
      return (
        <div className="my-6 rounded-xl border border-gray-200 bg-[#F7F5F1] p-5 sm:p-6">
          <p className="mb-3 text-base font-bold text-gray-900">{block.title}</p>
          <ul className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "image":
      return (
        <div className="relative my-6 aspect-[16/10] w-full overflow-hidden rounded-xl">
          <Image
            src={block.src}
            alt={block.alt}
            fill
            unoptimized
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </div>
      );
  }
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
            <span>{report.title}</span>
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

        {/* Body */}
        <div className="mt-10 grid grid-cols-1 gap-10 px-4 lg:grid-cols-3 lg:gap-14 lg:px-0">
          <article className="min-w-0 lg:col-span-2">
            {report.body.map((block, i) => (
              <ContentBlockView block={block} key={i} />
            ))}
          </article>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-gray-200 p-5 sm:p-6 lg:sticky lg:top-24">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <span className="text-xs font-semibold tracking-wide text-gray-400">
                  AUTHORS
                </span>
                <span className="text-xs text-gray-500">
                  Published on {report.date} <span className="mx-1">|</span> {report.readTime}
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-3">
                {report.authors.map((author) => (
                  <div key={author.name} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary text-xs font-bold text-white">
                      SQ
                    </span>
                    <span className="text-sm font-medium text-gray-900">{author.org}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-gray-200 pt-5">
                <span className="text-xs font-semibold tracking-wide text-gray-400">
                  Share
                </span>
                <div className="mt-3 flex items-center gap-2">
                  {[
                    { label: "Email", icon: <Mail className="h-4 w-4" /> },
                    { label: "Copy link", icon: <Link2 className="h-4 w-4" /> },
                    { label: "LinkedIn", icon: <LinkedInIcon /> },
                    { label: "X", icon: <XIcon /> },
                    { label: "Facebook", icon: <FacebookIcon /> },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={`Share on ${social.label}`}
                      className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-5">
                <p className="text-sm font-bold text-gray-900">
                  Stay Ahead with our <em className="font-semibold">Weekly Intelligence Brief</em>
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="min-w-0 flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <button
                    type="button"
                    className="shrink-0 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
