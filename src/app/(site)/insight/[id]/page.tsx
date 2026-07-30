import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ContentBlock } from "@/lib/reports";
import { getInsightById, insightData } from "@/Constants/Insight ";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";
import { ArchiveTick, ExportSquare, Import, Link2, Sms, Printer } from "iconsax-react";
import CaseStudies from "@/components/features/HomeCaseStudie";
import Suscribe from "@/components/features/Suscribe";

const DEFAULT_AUTHORS = [
  { name: "SkyQuest Technology Consulting", org: "SkyQuest Technology Consulting" },
];

export function generateStaticParams() {
  return insightData.caseStudies.map((insight) => ({ id: String(insight.id) }));
}

function EmphasizedText({ text, emphasis }: { text: string; emphasis?: string }) {
  return (
    <>
      {text}
      {emphasis && <em className="font-bold">{emphasis}</em>}
    </>
  );
}

function ContentBlockView({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "paragraph":
      if (block.segments) {
        return (
          <p className="mb-3 report-p tracking-wide leading-normal text-gray-700">
            {block.dropCap && (
              <span className="float-left mr-2 font-playfair text-5xl font-bold leading-[0.9] text-gray-900">
                {block.text.charAt(0)}
              </span>
            )}
            {block.segments.map((segment, i) =>
              typeof segment === "string" ? (
                <span key={i}>{segment}</span>
              ) : segment.href ? (
                <a
                  key={i}
                  href={segment.href}
                  className="text-primary underline underline-offset-2 hover:opacity-80"
                >
                  {segment.text}
                </a>
              ) : (
                <strong key={i} className="font-semibold text-gray-900">
                  {segment.text}
                </strong>
              )
            )}
          </p>
        );
      }
      return (
        <p className="mb-3 report-p tracking-wide leading-normal text-gray-700">
          {block.dropCap && (
            <span className="float-left mr-3 font-playfair text-5xl font-bold leading-[0.8] text-gray-900">
              {block.text.charAt(0)}
            </span>
          )}
          {block.dropCap ? block.text.slice(1) : block.text}
        </p>
      );
    case "heading":
      return (
        <h3 className="mt-1 mb-3 font-bold text-gray-900">
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
            <li key={i} className="flex gap-2 report-p tracking-wide leading-normal text-gray-700">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-6 rounded-xl border border-gray-200 bg-[#F7F5F1] p-5 sm:p-6 bg-white">
          {block.title && <p className="mb-3 font-bold text-gray-900 mb-3">{block.title}</p>}
          {block.text && <p className="mb-3 report-p tracking-wide leading-normal text-gray-700">{block.text}</p>}
          {block.items && (
            <ul className="space-y-2">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-2 report-p tracking-wide leading-normal text-gray-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {block.footer && <p className="mt-3 report-p tracking-wide leading-normal text-gray-700">{block.footer}</p>}
        </div>
      );
    case "image":
      return (
        <div className="relative my-6 aspect-[16/7] w-full overflow-hidden rounded-xl">
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
    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#F7F5F1]">
                {block.headers.map((header, i) => (
                  <th
                    key={i}
                    className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-gray-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-[#FAFAF8]">
                  {row.map((cell, j) => (
                    <td key={j} className="border-b border-gray-100 px-4 py-3 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

const PAGE_ACTIONS = [
  { label: "Save", icon: ArchiveTick },
  { label: "Download", icon: Import },
  { label: "Print", icon: Printer },
  { label: "Share", icon: ExportSquare },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: <LinkedInIcon />, bg: "bg-[#0A66C2]" },
  { label: "X", icon: <XIcon />, bg: "bg-black" },
  { label: "Facebook", icon: <FacebookIcon />, bg: "bg-[#1877F2]" },
];

export default async function InsightDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const insight = getInsightById(Number(id));

  if (!insight) {
    notFound();
  }

  const titleBase = insight.titleEmphasis
    ? insight.title.slice(0, insight.title.length - insight.titleEmphasis.length)
    : insight.title;

  return (
    <>
    <section className="bg-background">
      <div className="hero-container">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pb-2 sm:pb-2 lg:pb-5 px-4 lg:px-0">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-tight">
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
              {insight.title}
            </li>
          </ol>
        </nav>

        <div className="px-[2]">
          {/* Heading */}
          <div className="flex flex-col gap-6 mt-8 sm:mt-8 md:mt-2">
            <h1 className=" font-bold">
              <EmphasizedText text={titleBase} emphasis={insight.titleEmphasis} />
            </h1>
          </div>

          {/* Meta row */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-gray-800 py-3">
            <p className="text-gray-800">
              {insight.type} <span className="mx-1.5 text-gray-800">|</span> {insight.date}{" "}
              <span className="mx-1.5 text-gray-800">|</span> {insight.readTime}
            </p>
            <div className="flex items-center ">
              {PAGE_ACTIONS.map(({ label, icon: Icon }) =>
                label === "Share" ? (
                  <div key={label} className="group relative">
                    <button
                      type="button"
                      className="flex flex-col items-center gap-1 px-3 text-gray-800 transition-colors hover:text-primary"
                    >
                      <Icon className="h-5 w-5" color="currentcolor" variant="Linear" />
                      <span className="text-[11px]">{label}</span>
                    </button>
                    <div className="absolute bottom-full right-0 z-20 hidden pb-3 group-hover:block">
                      <div className="relative flex flex-col gap-2 rounded-sm border border-gray-800 bg-white p-2 shadow-lg">
                        {SOCIAL_LINKS.map((social) => (
                          <a
                            key={social.label}
                            href="#"
                            aria-label={`Share on ${social.label}`}
                            className="flex items-center gap-3 text-sm text-gray-800 transition-colors hover:text-primary"
                          >
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white ${social.bg}`}
                            >
                              {social.icon}
                            </span>
                            {social.label}
                          </a>
                        ))}
                        <span className="absolute -bottom-2 right-4 h-4 w-4 rotate-45 border-b border-r border-gray-200 bg-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    key={label}
                    type="button"
                    className="flex flex-col items-center gap-1 px-3 text-gray-800 transition-colors hover:text-primary"
                  >
                    <Icon className="h-5 w-5" color="currentcolor" variant="Linear" />
                    <span className="text-[11px]">{label}</span>
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-2 sm:px-[4]">
          <div className="relative w-full aspect-[3/3.5] md:aspect-[3/0.9] 2xl:aspect-[3/1] sm:rounded-2xl overflow-hidden">
            <Image
              src={insight.image}
              alt={insight.title}
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Body */}
        <div className="mt-10 grid grid-cols-1 gap-10 px-4 lg:grid-cols-10 lg:gap-14 lg:px-0">
          <article className="min-w-0 lg:col-span-7">
            <h3 className="mb-6 tracking-wide text-gray-700">
              {insight.description}
            </h3>

            {insight.body.map((block, i) => (
              <ContentBlockView block={block} key={i} />
            ))}
          </article>

          <aside className="lg:col-span-3">
            <div className="flex flex-col gap-3 sm:gap-4 lg:sticky lg:top-24">
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                <span className="text-sm font-bold text-gray-900">
                  AUTHORS
                </span>
                <span className="text-xs text-gray-500">
                  Published on {insight.date} <span className="mx-1">|</span> {insight.readTime}
                </span>
              </div>

              <div className="flex flex-col gap-3 rounded-lg bg-white p-2 sm:p-2 2xl:p-4">
                {DEFAULT_AUTHORS.map((author) => (
                  <div key={author.name} className="flex items-center gap-3">
                    <span className="w-9 shrink-0 select-none bg-gradient-to-r from-primary to-[#7C3AED] bg-clip-text text-xl font-extrabold italic leading-none text-transparent">
                      SQ
                    </span>
                    <span className="text-xs 2xl:text-sm  font-semibold text-gray-900">{author.org}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 rounded-lg bg-white p-2 sm:p-2 2xl:p-4">
                <span className="text-base 2xl:text-lg font-bold text-[#03030F]">
                  Share
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { label: "Email", icon: <Sms className="h-4 w-4" color="currentcolor" variant="Linear" /> },
                    { label: "Copy link", icon: <Link2 className="h-4 w-4" color="currentcolor" variant="Linear" /> },
                    { label: "LinkedIn", icon: <LinkedInIcon /> },
                    { label: "X", icon: <XIcon /> },
                    { label: "Facebook", icon: <FacebookIcon /> },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={`Share on ${social.label}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-white p-2 sm:p-2 2xl:p-4">
                <p className="font-bold text-gray-900 ">
                  Stay Ahead with our <em className="font-semibold italic">Weekly Intelligence Brief</em>
                </p>
                <div className="mt-3 flex flex-col gap-2 rounded-lg bg-gray-100 p-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:p-1 sm:pl-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="min-w-0 w-full rounded-md bg-transparent px-2 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none sm:flex-1 sm:px-0 sm:py-1"
                  />
                  <button
                    type="button"
                    className="w-full shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary  sm:w-auto sm:py-1.5"
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
    <CaseStudies {...insightData} bgClassName="bg-white"/>
    <Suscribe />

    </>
  );
}
