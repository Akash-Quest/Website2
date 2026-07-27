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
  { button: string; icon: string }
> = {
  primary: {
    button: "bg-primary text-white hover:opacity-90 hover:shadow-lg",
    icon: "bg-white text-primary",
  },
  secondary: {
    button: "bg-[#EEFCD1] text-black border border-gray-300",
    icon: "bg-white text-primary",
  },
  white: {
    button:
      "bg-white text-primary border border-gray-200 hover:bg-gray-50 hover:shadow-lg",
    icon: "bg-primary text-white",
  },
};

const Button: React.FC<ButtonProps> = ({
  href = "#",
  variant = "primary",
  iconSize = 16,
  minWidth = "150px",
  children,
}) => {
  const { button: buttonStyles, icon: iconStyles } = VARIANT_STYLES[variant];

  return (
    <Link
      href={href}
      style={{ minWidth }}
      className={`
        inline-flex items-center justify-between gap-2 sm:gap-2.5
        w-fit
        rounded-lg py-1 pl-3 pr-1 sm:py-1.5 sm:pl-4 sm:pr-1.5
        body-sm font-medium
        cursor-pointer transition-all duration-200
        hover:scale-105 hover:shadow-lg active:scale-100
        ${buttonStyles}
      `}
    >
      <span>{children}</span>

      <span
        className={`
          rounded p-1 sm:p-1.5
          w-6 h-6 sm:w-7 sm:h-7
          flex items-center justify-center
          shrink-0 text-xs
          ${iconStyles}
        `}
      >
        <ArrowUp
          size={iconSize}
          className="rotate-45 w-3 h-3 sm:w-auto sm:h-auto"
        />
      </span>
    </Link>
  );
};

export default Button;