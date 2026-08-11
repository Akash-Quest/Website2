"use client";

import { useEffect, useRef, useState } from "react";
import { ExportSquare } from "iconsax-react";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";

const SOCIAL_LINKS = [
  { label: "LinkedIn", icon: <LinkedInIcon />, bg: "bg-[#0A66C2]" },
  { label: "X", icon: <XIcon />, bg: "bg-black" },
  { label: "Facebook", icon: <FacebookIcon />, bg: "bg-[#1877F2]" },
];

export default function InsightShareMenu() {
  const [open, setOpen] = useState(false);
  const [canHover, setCanHover] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mql.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className={`relative ${canHover ? "group" : ""}`}
      onMouseEnter={canHover ? () => setOpen(true) : undefined}
      onMouseLeave={canHover ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        onClick={canHover ? undefined : () => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex flex-col items-center gap-1 px-3 text-gray-800 transition-colors hover:text-primary"
      >
        <ExportSquare className="h-5 w-5" color="currentcolor" variant="Linear" />
        <span className="text-[11px]">Share</span>
      </button>
      <div
        className={`absolute bottom-full right-0 z-20 pb-3 ${open ? "block" : "hidden"}`}
      >
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
  );
}
