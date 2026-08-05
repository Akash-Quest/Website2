"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import {
  fadeUp,
  fadeUpSm,
  fadeLeft,
  fadeRight,
  scaleFade,
  imageReveal,
} from "@/lib/animations";

const VARIANTS = {
  up: fadeUp,
  upSm: fadeUpSm,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleFade,
  image: imageReveal,
} satisfies Record<string, Variants>;

const TAGS = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
} as const;

interface RevealProps {
  children: ReactNode;
  variant: keyof typeof VARIANTS;
  as?: keyof typeof TAGS;
  custom?: number;
  className?: string;
  style?: CSSProperties;
  once?: boolean;
  amount?: number;
}

/**
 * Client-only motion wrapper so Server Component parents (e.g. pages passing
 * icon components as props) never need "use client" themselves — only the
 * already-rendered `children` cross the boundary.
 */
export default function Reveal({
  children,
  variant,
  as = "div",
  custom = 0,
  className,
  style,
  once = true,
  amount = 0.3,
}: RevealProps) {
  const MotionTag = TAGS[as] as typeof motion.div;

  return (
    <MotionTag
      custom={custom}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
}
