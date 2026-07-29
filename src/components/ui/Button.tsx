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
  fullWidth?: boolean;
  onClick?: () => void;
}
const VARIANT_STYLES: Record<
  NonNullable<ButtonProps["variant"]>,
  { button: string; icon: string; text: string; textTransition: string }
> = {
  primary: {
    button: "bg-primary text-white",
    icon: "bg-white text-primary",
    text: "",
    textTransition: "transition-colors duration-[650ms] delay-[250ms]",
  },
  secondary: {
    button: "bg-[#EEFCD1] text-black border border-gray-300",
    icon: "bg-white text-primary",
    text: "group-hover/btn:text-white",
    textTransition: "transition-colors duration-[650ms] delay-[250ms]",
  },
  white: {
    button: "bg-white text-primary border border-gray-200",
    icon: "bg-primary text-white",
    text: "group-hover/btn:text-white",
    textTransition: "transition-colors duration-[200ms]",
  },
};
const Button: React.FC<ButtonProps> = ({
  href = "#",
  variant = "primary",
  iconSize = 16,
  minWidth = "130px",
  fullWidth = false,
  children,
  onClick,
}) => {
  const {
    button: buttonStyles,
    icon: iconStyles,
    text: textHoverStyles,
    textTransition: textTransitionStyles,
  } = VARIANT_STYLES[variant];
  return (
    <Link
      href={href}
      onClick={onClick}
      style={{ minWidth }}
      className={`
        group/btn relative isolate overflow-hidden
        inline-flex items-center justify-between gap-2 sm:gap-2.5
        ${fullWidth ? "w-full" : "w-fit"}
        rounded-lg py-1 pl-3 pr-1 sm:py-1.5 sm:pl-4 sm:pr-1.5
        body-sm font-medium
        ${buttonStyles}
      `}
    >
      {/* Round black bubble that sweeps in from the top-left corner on hover */}
      <span className="pointer-events-none absolute -top-[300px] -left-[300px] w-[600px] h-[600px] -z-10 rounded-full bg-black scale-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:scale-100" />
      <span className={`relative z-10 ${textTransitionStyles} ${textHoverStyles}`}>
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
        {/* Outgoing arrow: slides out along the diagonal while the incoming one arrives */}
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-[18px] group-hover/btn:-translate-y-[18px] group-hover/btn:opacity-0">
          <ArrowUp
            size={iconSize}
            className="rotate-45 w-3 h-3 sm:w-auto sm:h-auto"
          />
        </span>
        {/* Incoming arrow: slides in from the opposite corner at the same time */}
        <span className="absolute inset-0 flex items-center justify-center -translate-x-[18px] translate-y-[18px] opacity-0 transition-all duration-[550ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
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