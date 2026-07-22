import Image from "next/image";
import Link from "next/link";

import type { ContentBlock } from "@/lib/reports";
import { reportDetail as report } from "@/lib/reportdetails";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";
import { Link2, Sms } from "iconsax-react";

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
      if (block.segments) {
        return (
          <p className="mb-5 tracking-wide leading-snug text-gray-700">
            {block.dropCap && (
              <span className="float-left mr-3 font-playfair text-5xl font-bold leading-[0.8] text-gray-900">
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
        <p className="mb-5 tracking-wide leading-snug text-gray-700">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h3 className="mt-12 mb-3 font-bold text-gray-900">
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
            <li key={i} className="flex gap-2 text-sm sm:text-base tracking-wide leading-snug text-gray-700">
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
          {block.text && <p className="mb-3 tracking-wide leading-snug text-gray-700">{block.text}</p>}
          {block.items && (
            <ul className="space-y-2">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm tracking-wide leading-snug text-gray-700">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {block.footer && <p className="mt-3 tracking-wide leading-snug text-gray-700">{block.footer}</p>}
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
  }
}

export default function DetailedPage() {
  const titleBase = report.titleEmphasis
    ? report.title.slice(0, report.title.length - report.titleEmphasis.length)
    : report.title;

  const subtitleBase = report.subtitleEmphasis
    ? report.subtitle.slice(0, report.subtitle.length - report.subtitleEmphasis.length)
    : report.subtitle;

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
                {report.type}
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700 lowercase truncate max-w-[200px] sm:max-w-none">
              {report.category}
            </li>
          </ol>
        </nav>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-b border-[#03030F33]" />

        <div className="px-[2]">
          {/* Category + Heading */}
          <div className="flex flex-col gap-2 mt-8 sm:mt-8 md:mt-2 pb-6">
            <span className="text-sm font-semibold text-primary">{report.category}</span>
            <h1 className="font-playfair font-bold">
              <EmphasizedText text={titleBase} emphasis={report.titleEmphasis} />
            </h1>
          </div>
        </div>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-b border-[#03030F33]" />

        {/* Hero Image */}
        <div className="mt-6 sm:px-[4]">
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
        <div className="mt-10 grid grid-cols-1 gap-10 px-4 lg:grid-cols-10 lg:gap-14 lg:px-0">
          <article className="min-w-0 lg:col-span-8">
            <h2 className="mb-6 font-playfair text-2xl sm:text-3xl font-bold text-gray-900">
              <EmphasizedText text={subtitleBase} emphasis={report.subtitleEmphasis} />
            </h2>

            {report.body.map((block, i) => (
              <ContentBlockView block={block} key={i} />
            ))}
          </article>

          <aside className="lg:col-span-2">
            <div className="flex flex-col gap-3 sm:gap-4 lg:sticky lg:top-24">
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <span className="text-sm text-muted">
                  Follow Us
                </span>
                <div className="mt-3 flex items-center gap-2">
                  {[
                    { label: "LinkedIn", icon: <LinkedInIcon /> },
                    { label: "X", icon: <XIcon /> },
                    { label: "Facebook", icon: <FacebookIcon /> },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#"
                      aria-label={`Follow us on ${social.label}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-background text-gray-900 transition-colors hover:bg-gray-50"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
