"use client";
import React from "react";
import Link from "next/link";
import { privacyPolicySections, type PrivacyBlock, type PrivacySegment } from "@/Constants/Privacy";

// ================= CONTENT TYPOGRAPHY CONSTANTS =================
const SUB_HEADING_STYLE = "text-xl md:text-2xl font-bold text-[#03030F] tracking-tight mt-3 block";
const PARAGRAPH_STYLE = "mt-1 mb-4 text-base md:text-lg leading-[26px] md:leading-[30px] text-base block";
const SUB_BLOCK_GAP = "flex flex-col mt-4 text-base md:text-lg text-[#03030F]/70";
const LINK_STYLE = "text-[#0A87EE] underline underline-offset-4 hover:text-blue-600 transition-colors break-all";

function Segments({ segments }: { segments: PrivacySegment[] }) {
  return (
    <>
      {segments.map((segment, i) => {
        if (typeof segment === "string") {
          return <React.Fragment key={i}>{segment}</React.Fragment>;
        }
        if (segment.href) {
          const isExternal = segment.href.startsWith("http");
          return (
            <a
              key={i}
              href={segment.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={LINK_STYLE}
            >
              {segment.text}
            </a>
          );
        }
        if (segment.bold) {
          return (
            <span key={i} className="font-bold">
              {segment.text}
            </span>
          );
        }
        return <React.Fragment key={i}>{segment.text}</React.Fragment>;
      })}
    </>
  );
}

function PrivacyBlockView({ block }: { block: PrivacyBlock }) {
  switch (block.type) {
    case "subheading":
      return <span className={SUB_HEADING_STYLE}>{block.text}</span>;
    case "bullet":
      return (
        <p className={PARAGRAPH_STYLE}>
          <span className="mx-2 text-[#03030F]/40">&bull;</span>
          <Segments segments={block.segments} />
        </p>
      );
    case "paragraph": {
      const variantClass =
        block.variant === "bold"
          ? `${PARAGRAPH_STYLE} font-bold text-[#03030F]/70`
          : block.variant === "muted"
          ? `${PARAGRAPH_STYLE} text-[#03030F]/80`
          : block.variant === "note"
          ? `${PARAGRAPH_STYLE} font-medium text-[#03030F] mt-6`
          : PARAGRAPH_STYLE;
      return (
        <p className={variantClass}>
          <Segments segments={block.segments} />
        </p>
      );
    }
  }
}

export default function PrivacyPolicy() {
  return (
    <section className="bg-background overflow-x-hidden">
      <div className="hero-container pb-0">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0 ">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="" className="text-muted ">
                Privacy Policy
              </Link>
            </li>
            <li className="text-gray-700"></li>
          </ol>
        </nav>

<div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen border-b border-[#03030F]/20" />

        <div className="  pt-5 pb-5">
          <p

            className=" text-primary mt-8 sm:mt-8 md:mt-2 text-body-sm font-medium "
          >
            Skyquest
          </p>

          {/* Heading */}
          <h1

            className=" font-semibold mx-auto mb-2"
          >
            Privacy Policy
          </h1>
        </div>

<div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen border-b border-[#03030F]/20" />
<div className="px-4 border-l border-r border-[#03030F]/20" >


        <div className="  flex flex-col">
          {privacyPolicySections.map((sectionItem, i) => (
            <div key={i}>
              <h2 className="font-semibold mt-2 mb-2" >
                {sectionItem.heading}
                <span className="font-['Playfair_Display'] italic font-semibold">{sectionItem.headingEmphasis}</span>
              </h2>
              <div className="border-b border-[#03030F]/10 mt-3 mb-4" />
              <div className={SUB_BLOCK_GAP}>
                {sectionItem.blocks.map((block, j) => (
                  <PrivacyBlockView block={block} key={j} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  );
}
