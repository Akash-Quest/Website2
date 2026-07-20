import Image from "next/image";
import Link from "next/link";
import { Bookmark, Download, Link2, Mail, Printer, Share2 } from "lucide-react";
import { getReportById, type ContentBlock } from "@/lib/reports";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";

const report = getReportById(11)!;

function EmphasizedText({ text, emphasis }: { text: string; emphasis?: string }) {
  return (
    <>
      {text}
      {emphasis && <em className="font-semibold">{emphasis}</em>}
    </>
  );
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
          <EmphasizedText text={block.text} emphasis={block.emphasis} />
        </h3>
      );
    case "subheading":
      return (
        <h4 className="mt-6 mb-2 text-lg font-bold text-gray-900">{block.text}</h4>
      );
    case "list":
      return (
        <ul className="mb-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm sm:text-base leading-relaxed text-gray-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-6 rounded-xl border border-gray-200 bg-[#F7F5F1] p-5 sm:p-6">
          {block.title && <p className="mb-3 text-base font-bold text-gray-900">{block.title}</p>}
          {block.text && <p className="mb-3 text-sm text-gray-700">{block.text}</p>}
          {block.items && (
            <ul className="space-y-2">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {block.footer && <p className="mt-3 text-sm text-gray-700">{block.footer}</p>}
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

const PAGE_ACTIONS = [
  { label: "Save", icon: Bookmark },
  { label: "Download", icon: Download },
  { label: "Print", icon: Printer },
  { label: "Share", icon: Share2 },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: <LinkedInIcon />, bg: "bg-[#0A66C2]" },
  { label: "X", icon: <XIcon />, bg: "bg-black" },
  { label: "Facebook", icon: <FacebookIcon />, bg: "bg-[#1877F2]" },
];

export default function DetailedPage() {
  const titleBase = report.titleEmphasis
    ? report.title.slice(0, report.title.length - report.titleEmphasis.length)
    : report.title;

  return (
    <section className="bg-background">
      <div className="hero-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pb-2 sm:pb-2 lg:pb-5 px-4 lg:px-0">
          <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/insight" className="hover:text-muted transition-colors">
                Insights
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700 truncate max-w-[200px] sm:max-w-none">
              Medical Device Innovation
            </li>
          </ol>
        </nav>

        <div className="px-[2]">
          {/* Heading + share card */}
          <div className="flex flex-col gap-6 mt-8 sm:mt-8 md:mt-2 lg:flex-row lg:items-start lg:justify-between ">
            <h1 className=" font-bold">
              <EmphasizedText text={titleBase} emphasis={report.titleEmphasis} />
            </h1>

            <div className="  relative hidden shrink-0 lg:block ">
              <div className="flex flex-col gap-2 rounded-sm border border-gray-200 bg-white p-2 ">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={`Share on ${social.label}`}
                    className="flex items-center gap-3 text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white ${social.bg}`}
                    >
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                ))}
              </div>
              <span className="absolute -bottom-2 right-1/5 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-gray-200 bg-white" />
            </div>
          </div>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-gray-200 py-3">
            <p className="text-sm text-gray-500">
              {report.type} <span className="mx-1.5 text-gray-300">|</span> {report.date}{" "}
              <span className="mx-1.5 text-gray-300">|</span> {report.readTime}
            </p>
            <div className="flex items-center divide-x divide-gray-200">
              {PAGE_ACTIONS.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  className="flex flex-col items-center gap-1 px-3 text-gray-500 transition-colors hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-[11px]">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-2 sm:px-[4]">
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
            <p className="mb-6 text-base sm:text-lg leading-relaxed text-gray-600">
              {report.description}
            </p>

            <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700">
              <span className="font-playfair float-left mr-3 mt-1 text-6xl font-bold leading-[0.75] text-gray-900">
                2
              </span>
              025 marked a turning point for the{" "}
              <a href="#" className="text-primary underline underline-offset-2 hover:opacity-80">
                global medical device industry
              </a>
              , a year when intelligence, personalization, and real-time data moved from
              experimental to essential. What had long been driven by incremental engineering
              improvements evolved into a convergence of advanced materials,{" "}
              <strong className="font-semibold text-gray-900">intelligent systems</strong>, and
              digitally enabled design philosophies. Medical devices were no longer viewed as
              isolated tools but as adaptive, data-driven extensions of clinical decision-making
              and patient care.
            </p>

            <p className="mb-4 text-sm sm:text-base leading-relaxed text-gray-700">
              Healthcare systems worldwide faced growing burdens from chronic disease prevalence,
              aging populations, clinician shortages, and rising care costs. In response, medical
              device manufacturers accelerated innovation by integrating real-time sensing,
              connectivity, and{" "}
              <a href="#" className="text-primary underline underline-offset-2 hover:opacity-80">
                artificial intelligence (AI)
              </a>{" "}
              into therapeutic and diagnostic platforms. Regulatory pathways also adapted,
              enabling faster translation of breakthrough technologies into clinical practice
              without compromising safety or efficacy.
            </p>

            {report.body.slice(2).map((block, i) => (
              <ContentBlockView block={block} key={i} />
            ))}
          </article>

          <aside className="lg:col-span-1">
            <div className=" p-5 sm:p-6 lg:sticky lg:top-24">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <span className="text-sm font-bold  text-gray-700">
                  AUTHORS
                </span>
                <span className="text-xs text-gray-700">
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
