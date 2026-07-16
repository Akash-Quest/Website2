"use client";

import Image from "next/image";
import { useRef, useState, useLayoutEffect, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

export interface HoverRevealCardProps {
  title: string;
  /** Text shown in the collapsed chip; defaults to `title`. */
  chipLabel?: string;
  description: string;
  image: string;
  /** Defaults to `title`. */
  imageAlt?: string;
  /** Controls sizing (height / aspect-ratio classes). */
  className?: string;
  /** e.g. CSS grid-area placement. */
  style?: CSSProperties;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

export default function HoverRevealCard({
  title,
  chipLabel,
  description,
  image,
  imageAlt,
  className = "",
  style,
  isHovered,
  onHover,
}: HoverRevealCardProps) {
  const chipRef = useRef<HTMLDivElement>(null);
  const [chipSize, setChipSize] = useState({ width: 100, height: 36 });

  useLayoutEffect(() => {
    const measure = () => {
      if (chipRef.current) {
        setChipSize({
          width: chipRef.current.offsetWidth,
          height: chipRef.current.offsetHeight,
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [chipLabel, title]);

  const collapsedClip = `inset(calc(100% - ${chipSize.height + 2}px) calc(100% - ${chipSize.width + 2}px) -2px -2px round 0px 16px 0px 0px)`;

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

      {/* Panel background — grows diagonally from the bottom-left corner to the top-right */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-tr-2xl bg-[#FFFFFFB2] backdrop-blur-[15.6px] transition-[clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ clipPath: isHovered ? "inset(-2px round 16px)" : collapsedClip }}
      />

      {/* Collapsed chip label */}
      <div
        ref={chipRef}
        className={`absolute left-0 bottom-0 z-30 flex h-9 w-fit items-center justify-center px-5 py-2 transition-opacity duration-200 ${
          isHovered ? "pointer-events-none opacity-0" : "opacity-100 delay-150"
        }`}
      >
        <span className="block truncate text-xs sm:text-sm font-semibold leading-snug text-black">
          {chipLabel ?? title}
        </span>
      </div>

      {/* Expanded detail content */}
      <div
        className={`absolute inset-0 z-30 flex flex-col p-4 sm:p-5 transition-opacity ${
          isHovered
            ? "opacity-100 duration-300 delay-150"
            : "pointer-events-none opacity-0 duration-150"
        }`}
      >
        <span className="block text-base sm:text-lg font-semibold leading-snug text-black">
          {title}
        </span>
        <div className="mt-3 flex flex-1 flex-col justify-between">
          <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
            {description}
          </p>
          <button className="group/learn self-end inline-flex items-center text-xs sm:text-sm font-semibold text-primary transition-colors duration-300 cursor-pointer">
            Learn More
            <span className="relative ml-1 h-3.5 w-3.5 overflow-hidden">
              <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-3 group-hover/learn:-translate-y-3 group-hover/learn:opacity-0">
                <ArrowUpRight size={14} />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-0 group-hover/learn:translate-y-0 group-hover/learn:opacity-100">
                <ArrowUpRight size={14} />
              </span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
