"use client";
import React from "react";
import Link from "next/link";
import { cookiesPolicySections, type CookieBlock, type CookieSegment } from "@/Constants/Cookies";

const PARAGRAPH_STYLE = "mt-1 mb-4 text-base md:text-lg leading-[26px] md:leading-[30px] text-base block";
const SUB_BLOCK_GAP = "flex flex-col mt-4 text-base md:text-lg text-[#03030F]/70";
const LINK_STYLE = "text-[#0A87EE] underline underline-offset-4 hover:text-blue-600 transition-colors break-all";

function Segments({ segments }: { segments: CookieSegment[] }) {
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

function CookieBlockView({ block }: { block: CookieBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className={PARAGRAPH_STYLE}>
          <Segments segments={block.segments} />
        </p>
      );
    case "list":
      return (
        <ul className="flex flex-col gap-3 mt-4 pl-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-[#4D4C53] mt-2.5 shrink-0" />
              <span className={PARAGRAPH_STYLE + " !mt-0"}>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "analyticsTools":
      return (
        <div className="w-full">
          <h3 className="text-xl font-semibold text-[#03030F] tracking-tight mb-4 mt-4">
            {block.heading}
          </h3>
          <div className="flex flex-col gap-4 text-sm md:text-base leading-relaxed break-words">
            {block.tools.map((tool, i) => (
              <div key={i} className={`pt-2 ${tool.divider ? "border-t border-gray-100" : ""}`}>
                <p className="text-[#03030F]/80">
                  <Segments segments={tool.segments} />
                </p>
                {tool.link && (
                  <p>
                    <a href={tool.link.href} className={LINK_STYLE}>
                      {tool.link.text}
                    </a>
                    {tool.link.suffix}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default function CookiesPolicy() {
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
                Cookies
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
            Cookies
          </h1>
        </div>

<div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen border-b border-[#03030F]/20" />
<div className="px-4 border-l border-r border-[#03030F]/20" >


        <div className="  flex flex-col">
          {cookiesPolicySections.map((sectionItem, i) => (
            <div key={i}>
              <h2 className="font-semibold mt-2 mb-2" >
                {sectionItem.heading}
                <span className="font-['Playfair_Display'] italic font-semibold">{sectionItem.headingEmphasis}</span>
              </h2>
              <div className="border-b border-[#03030F]/10 mt-3 mb-4" />
              <div className={SUB_BLOCK_GAP}>
                {sectionItem.blocks.map((block, j) => (
                  <CookieBlockView block={block} key={j} />
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
