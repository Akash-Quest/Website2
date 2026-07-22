"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

export interface HoverRevealCardProps {
  title: string;
  /** Text shown in the collapsed chip; defaults to `title`. */
  chipLabel?: string;
  description: string;
  image: string;
  /** Where "Learn More" navigates to. */
  href: string;
  /** Defaults to `title`. */
  imageAlt?: string;
  /** Controls sizing (height / aspect-ratio classes). */
  className?: string;
  /** e.g. CSS grid-area placement. */
  style?: CSSProperties;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

export default function HoverRevealCard2({
  title,
  chipLabel,
  description,
  image,
  href,
  imageAlt,
  className = "",
  style,
  isHovered,
  onHover,
}: HoverRevealCardProps) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl cursor-pointer ${className}`}
      style={style}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={() => onHover(!isHovered)}
    >
      <Image
        src={image}
        alt={imageAlt ?? title}
        fill
        unoptimized
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      {/* Panel — small pill in the bottom-left corner when not hovered,
          grows to fill the whole card (diagonally toward the top-right)
          when hovered. Two plain fixed sizes, no JS measurement, so it
          behaves identically on every hover, including the first. */}
      <div
        className={`absolute left-0 bottom-0 z-20 flex flex-col overflow-hidden rounded-tr-2xl bg-[#FFFFFFB2] backdrop-blur-[15.6px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHovered ? "h-full w-full p-4 sm:p-5" : "h-9 w-60 max-w-[80%] px-5 py-2"
        }`}
      >
        <span
          className={`block shrink-0 truncate font-semibold leading-snug text-black transition-all duration-300 ${
            isHovered ? "text-base sm:text-lg" : "text-xs sm:text-lg"
          }`}
        >
          {isHovered ? title : chipLabel ?? title}
        </span>

        <div
          className={`mt-3 flex flex-1 flex-col justify-between transition-opacity ${
            isHovered
              ? "opacity-100 duration-300 delay-150"
              : "pointer-events-none opacity-0 duration-150"
          }`}
        >
          <p className=" tracking-wide leading-snug text-gray-600">
            {description}
          </p>
          <Link
            href={href}
            onClick={(e) => e.stopPropagation()}
            className="group/learn self-end inline-flex items-center text-xs sm:text-sm font-semibold text-primary transition-colors duration-300 cursor-pointer"
          >
            Learn More
            <span className="relative ml-1 h-3.5 w-3.5 overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-3 group-hover/learn:-translate-y-3 group-hover/learn:opacity-0">
                <ArrowUpRight size={14} />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-0 group-hover/learn:translate-y-0 group-hover/learn:opacity-100">
                <ArrowUpRight size={14} />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
