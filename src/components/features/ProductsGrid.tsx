"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Button from "@/components/ui/Button";
import { products, type Product } from "@/Constants/products";

/**
 * One card in the sticky stack.
 *
 * Extracted into its own component because useTransform is a hook and so
 * cannot be called inside the .map() callback.
 *
 * Two mechanisms combine:
 *  - position: sticky pins the card near the top of the viewport, so the next
 *    card scrolls up and covers it.
 *  - scale, driven by the stack's scroll progress, shrinks the card as the
 *    ones after it pile on, so buried cards visibly step back instead of
 *    simply being hidden.
 *
 * The scale lives on an inner motion.div, never on the sticky element itself —
 * a transform on the sticky element would break the pinning.
 */
function ProductCard({
  product,
  idx,
  total,
  progress,
}: {
  product: Product;
  idx: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Cards alternate: odd ones put the image on the left.
  const imageFirst = idx % 2 !== 0;

  // taglineEmphasis is a suffix of tagline; split so the tail can be rendered
  // in italic serif without duplicating the copy.
  const { tagline, taglineEmphasis } = product;
  const hasEmphasis = !!taglineEmphasis && tagline.endsWith(taglineEmphasis);
  const lead = hasEmphasis
    ? tagline.slice(0, tagline.length - taglineEmphasis!.length)
    : tagline;
  const emphasis = hasEmphasis ? taglineEmphasis : null;

  // The deeper a card ends up in the pile, the smaller it finishes: the last
  // card never shrinks, the first shrinks most.
  const targetScale = 1 - (total - 1 - idx) * 0.04;
  const scale = useTransform(progress, [idx / total, 1], [1, targetScale]);

  return (
    <div
      className="sticky"
      style={{ top: `calc(6rem + ${idx * 1.25}rem)`, zIndex: idx + 1 }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="flex flex-col overflow-hidden rounded-2xl bg-background md:flex-row"
      >
        {/* Copy */}
        <div
          className={`flex flex-col justify-center gap-4 p-5 sm:p-8 md:w-1/2 md:p-10 2xl:p-14 ${
            imageFirst ? "md:order-2" : "md:order-1"
          }`}
        >
          <div className="2xl:max-w-md">
            <p className="text-primary tracking-wide text-body-sm">
              {product.badge}
            </p>

            {/* h3 rather than h2 to keep the page's heading order intact under
                the section's h2, but carrying the h2 type scale so it matches
                the homepage card exactly. */}
            <h3 className="font-semibold leading-none pb-1 text-[clamp(1.75rem,3vw,3.25rem)]">
              {lead}
              {emphasis && <em className="font-semibold">{emphasis}</em>}
            </h3>

            <p className="text-muted">{product.description}</p>
          </div>

          <div>
            <Button href={product.href} variant="primary" iconSize={16}>
              {product.name}
            </Button>
          </div>
        </div>

        {/* Image */}
        <div
          className={`w-full p-4 pt-0 md:flex md:w-1/2 md:items-center md:p-0 ${
            imageFirst ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-background">
            <Image
              src={product.image}
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProductsGrid({
  bgClassName = "bg-white",
}: {
  bgClassName?: string;
}) {
  const stackRef = useRef<HTMLDivElement>(null);

  // 0 when the stack's top reaches the top of the viewport, 1 when its bottom
  // does — so each card's shrink is tied to how far through the stack we are.
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className={bgClassName}>
      <div className="page-container">
        {/* No overflow-hidden or transform on this wrapper, or on anything
            above it — either one silently breaks position: sticky. */}
        <div ref={stackRef} className="flex flex-col gap-14 lg:gap-20 xl:gap-24">
          {products.map((product, idx) => (
            <ProductCard
              key={product.name}
              product={product}
              idx={idx}
              total={products.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
