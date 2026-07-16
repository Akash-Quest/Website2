"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "white";
  iconSize?: number;
  children: React.ReactNode;
  minWidth?: string;
}

const VARIANT_STYLES: Record<
  NonNullable<ButtonProps["variant"]>,
  { button: string; icon: string; text: string }
> = {
  primary: {
    button: "bg-primary text-white",
    icon: "bg-white text-primary",
    text: "",
  },
  secondary: {
    button: "bg-[#EEFCD1] text-black border border-gray-300",
    icon: "bg-white text-primary",
    text: "group-hover:text-white",
  },
  white: {
    button: "bg-white text-primary border border-gray-200",
    icon: "bg-primary text-white",
    text: "group-hover:text-white",
  },
};

const Button: React.FC<ButtonProps> = ({
  href = "#",
  variant = "primary",
  iconSize = 16,
  minWidth = "130px",
  children,
}) => {
  const { button: buttonStyles, icon: iconStyles, text: textHoverStyles } =
    VARIANT_STYLES[variant];

  return (
    <Link
      href={href}
      style={{ minWidth }}
      className={`
        group relative isolate overflow-hidden
        inline-flex items-center justify-between gap-2 sm:gap-2.5
        w-fit
        rounded-lg py-1 pl-3 pr-1 sm:py-1.5 sm:pl-4 sm:pr-1.5
        body-sm font-medium
        
        ${buttonStyles}
      `}
    >
      {/* Black bubble that sweeps in from the top-left corner on hover */}
      <span className="pointer-events-none absolute -inset-full -z-10 origin-top-left scale-0 rounded-full bg-black transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100" />

      <span className={`relative z-10 transition-colors duration-[400ms] delay-150 ${textHoverStyles}`}>
        {children}
      </span>

      <span
        className={`
          relative z-10 overflow-hidden
          rounded p-1 sm:p-1.5
          w-6 h-6 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8
          shrink-0 text-xs
          ${iconStyles}
        `}
      >
        {/* Outgoing arrow: slides further along its own diagonal and fades out. Exits instantly on hover, but waits for the incoming arrow to clear before returning. */}
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-[200ms] delay-[250ms] group-hover:delay-0 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-4 group-hover:-translate-y-4 group-hover:opacity-0">
          <ArrowUp
            size={iconSize}
            className="rotate-45 w-3 h-3 sm:w-auto sm:h-auto"
          />
        </span>

        {/* Incoming arrow: slides in from the opposite corner and fades in on hover (after the outgoing arrow clears), but leaves instantly on unhover */}
        <span className=" text-black absolute inset-0 flex items-center justify-center -translate-x-4 translate-y-4 opacity-0 transition-all duration-[250ms] group-hover:delay-[200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUp
            size={iconSize}
            className="rotate-45 w-3 h-3 sm:w-auto sm:h-auto"
          />
        </span>
      </span>
    </Link>
  );
};

export default Button;
