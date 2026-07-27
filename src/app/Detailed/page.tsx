"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ArchiveTick, ExportSquare, Import, Printer } from "iconsax-react";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";
import {
  detailedAuthors,
  detailedReportMeta,
  detailedSections,
  type DetailedBlock,
  type DetailedFigure,
  type DetailedSection,
} from "@/Constants/detailed";

function EmphasizedText({ text, emphasis }: { text: string; emphasis?: string }) {
  return (
    <>
      {text}
      {emphasis && <em className="font-semibold">{emphasis}</em>}
    </>
  );
}

function FigureCaption({ figure }: { figure: DetailedFigure }) {
  return (
    <figcaption className="mt-3">
      <p className="text-body-xl font-bold text-gray-900">{figure.caption}</p>
      {figure.description && (
        <p className="mt-1 text-body-sm italic text-gray-500">{figure.description}</p>
      )}
    </figcaption>
  );
}

function FigureView({ figure, className = "" }: { figure: DetailedFigure; className?: string }) {
  return (
    <div className={className}>
      <div
        className={`flex flex-col gap-6 md:items-start ${
          figure.imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {figure.text && (
          <p className="min-w-0 text-body-lg text-gray-700 md:flex-1">{figure.text}</p>
        )}
        <div
          className={`relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-white ${
            figure.text ? "md:w-[38%]" : ""
          }`}
        >
          <Image src={figure.src} alt={figure.alt} fill className="object-cover" />
        </div>
      </div>
      <FigureCaption figure={figure} />
    </div>
  );
}

function BlockView({ block }: { block: DetailedBlock }) {
  switch (block.type) {
    case "paragraph": {
      const paragraph = (
        <p className="mb-5 text-body-lg text-gray-700 last:mb-0">
          {block.leadIn && (
            <strong className="font-semibold text-gray-900">{block.leadIn} </strong>
          )}
          {block.text}
        </p>
      );

      if (!block.figure) return paragraph;

      return (
        <div className="mb-5">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 md:flex-1">{paragraph}</div>
            <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-white md:w-[38%]">
              <Image
                src={block.figure.src}
                alt={block.figure.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <FigureCaption figure={block.figure} />
        </div>
      );
    }
    case "list":
      return (
        <div className="mb-5">
          {block.intro && (
            <p className="mb-3 font-semibold text-gray-900">{block.intro}</p>
          )}
          <ol className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-body-lg text-gray-700">
                <span className="shrink-0 font-semibold text-gray-900">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      );
    case "figure":
      return <FigureView figure={block.figure} className="mb-6" />;
  }
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const STUB_FALLBACK: DetailedBlock[] = [
  { type: "paragraph", text: "Content for this section is coming soon." },
];

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

function TableOfContents({
  sections,
  expandedIds,
  onToggleExpand,
  activeId,
}: {
  sections: DetailedSection[];
  expandedIds: Set<string>;
  onToggleExpand: (id: string) => void;
  activeId: string | null;
}) {
  return (
    <nav aria-label="Table of contents">
      <p className="mb-4 text-body-xl font-bold uppercase t">
        Table of Contents
      </p>
      <ul className="space-y-1">
        {sections.map((section) => {
          const hasSubsections = section.subsections.length > 0;
          const isExpanded = expandedIds.has(section.id);
          const isSectionActive = hasSubsections
            ? section.subsections.some((sub) => sub.id === activeId)
            : activeId === section.id;

          return (
            <li key={section.id}className="border-b-[1px] border-b-[#C3C3C3]" >
              <button
                type="button"
                onClick={() => {
                  scrollToId(section.id);
                  if (hasSubsections) onToggleExpand(section.id);
                }}
                className={`flex w-full items-start justify-between gap-2 rounded-lg  py-2 text-left text-body-sm transition-colors ${
                  isSectionActive ? "font-semibold text-primary" : "text-gray-700 hover:text-primary"
                }`}
              >
                <span
                  className={`px-2 ${
                    isSectionActive ? "border-l-[1px] border-l-[#C3C3C3]" : ""
                  }`}
                >
                  {section.number}. {section.title}
                  {section.titleEmphasis}
                </span>
                {hasSubsections && (
                  <ChevronDown
                    className={`mt-0.5 h-4 w-4 shrink-0 text-gray-400 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {hasSubsections && isExpanded && (
                <ul className="mt-1 space-y-2 ">
                  {section.subsections.map((sub) => (
                    <li key={sub.id} className="border-l-[1px] border-l-[#C3C3C3]">
                      <button
                        type="button"
                        onClick={() => scrollToId(sub.id)}
                        className={`block w-full rounded-lg px-2 py-1.5 text-left text-body-sm  transition-colors ${
                          activeId === sub.id
                            ? "font-semibold text-primary"
                            : "text-gray-500 hover:text-primary"
                        }`}
                      >
                        {sub.number} {sub.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function DetailedPage() {
  const titleBase = detailedReportMeta.titleEmphasis
    ? detailedReportMeta.title.slice(
        0,
        detailedReportMeta.title.length - detailedReportMeta.titleEmphasis.length
      )
    : detailedReportMeta.title;

  const trackableIds = detailedSections.flatMap((section) =>
    section.subsections.length > 0 ? section.subsections.map((sub) => sub.id) : [section.id]
  );

  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    () => new Set(detailedSections.filter((s) => s.subsections.length > 0).slice(0, 1).map((s) => s.id))
  );
  const [activeId, setActiveId] = useState<string | null>(trackableIds[0] ?? null);

  const toggleExpand = (id: string) => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  useEffect(() => {
    const targets = trackableIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
                Insight
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700  truncate max-w-[200px] sm:max-w-none">
              {detailedReportMeta.category}
            </li>
          </ol>
        </nav>

        <div className="px-[2]">
                  {/* Heading */}
                  <div className="flex flex-col gap-6 mt-8 sm:mt-8 md:mt-2">
                    <h1 className=" font-bold">
                      <EmphasizedText text={titleBase} emphasis={detailedReportMeta.titleEmphasis} />
                    </h1>
                  </div>

                  {/* Meta row */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-gray-800 py-3">
                    <p className="text-gray-800">
                      {detailedReportMeta.type} <span className="mx-1.5 text-gray-800">|</span> {detailedReportMeta.date}{" "}
                      <span className="mx-1.5 text-gray-800">|</span> {detailedReportMeta.readTime}
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
                      src={detailedReportMeta.imageUrl}
                      alt={detailedReportMeta.imageAlt}
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                </div>

        {/* Body */}
        <div className="mt-10 grid grid-cols-1 gap-5 px-4 lg:grid-cols-12 lg:gap-5 lg:px-0">
          <aside className="lg:col-span-3">
            <div className="flex flex-col gap-6 lg:sticky lg:top-24">
              <TableOfContents
                sections={detailedSections}
                expandedIds={expandedIds}
                onToggleExpand={toggleExpand}
                activeId={activeId}
              />

              <div className=" pt-6">
                <p className="mb-4 text-body-lg font-semibold uppercase text-[#03030FCC]">
                  Authors
                </p>
                <div className="flex flex-col gap-3">
                  {detailedAuthors.map((author) => (
                    <div key={author.name} className="flex items-center gap-3">
                      <div className="relative h-13 w-12 shrink-0 overflow-hidden rounded-lg">
                        <Image src={author.photo} alt={author.name} fill className="object-cover" />
                      </div>
                      <div className="min-w-0">
                        <p className=" text-body-sm font-semibold text-gray-900">
                          {author.name}
                        </p>
                        <p className=" text-body-sm text-gray-500 font-regular">{author.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <article className="min-w-0 lg:col-span-9">
            {detailedSections.map((section) => (
              <div key={section.id} className="mb-14">
                <h2
                  id={section.subsections.length === 0 ? section.id : undefined}
                  className="scroll-mt-28 mb-6 font-bold text-gray-900 "
                >
                  {section.number}.{" "}
                  <EmphasizedText text={section.title} emphasis={section.titleEmphasis} />
                </h2>

                {section.subsections.length === 0 &&
                  STUB_FALLBACK.map((block, i) => <BlockView block={block} key={i} />)}

                {section.subsections.map((sub) => (
                  <div key={sub.id} className="mb-10">
                    <h4 id={sub.id} className="text-body-xl scroll-mt-28 mb-4 font-medium text-gray-900">
                      {sub.number}. {sub.title}
                    </h4>
                    {sub.blocks.map((block, i) => (
                      <BlockView block={block} key={i} />
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
