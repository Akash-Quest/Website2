"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Button from "../ui/Button";

export interface AccordionCard {
  title: string;
  body: string;
}

interface TransformAccordionProps {
  eyebrow?: string;
  heading?: React.ReactNode;
  description?: string;
  buttonLabel?: string;
  cards?: AccordionCard[];
}

const DEFAULT_CARDS: AccordionCard[] = [
  {
    title: "Understand What Matters Most",
    body: "Identify complex challenges, uncover emerging opportunities, and define the priorities that matter most to your organization and stakeholders.",
  },
  {
    title: "Design the Future State",
    body: "Develop clear strategies, innovative solutions, and practical roadmaps that turn your vision into sustainable growth.",
  },
  {
    title: "Enable Transformation Through Technology",
    body: "Leverage data, AI, and emerging technologies to modernize operations, accelerate innovation, and create lasting competitive advantage.",
  },
  {
    title: "Execute at Scale",
    body: "Move beyond strategy and recommendations to support real-world implementation, strengthen capabilities, and deliver measurable outcomes at scale.",
  },
];

const TransformAccordion: React.FC<TransformAccordionProps> = ({
  eyebrow = "From Insight to Impact",
  heading = (
    <>
      How We Help Organizations <em className="font-semibold">Transform</em>
    </>
  ),
  description = "We help organizations navigate complexity, embrace innovation, and deliver measurable outcomes through an integrated approach spanning strategy, technology, execution, and impact.",
  buttonLabel = "Speak To Partner",
  cards = DEFAULT_CARDS,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#03030F]">
      <div className="page-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header (mobile) */}
          <div className="pb-8 lg:hidden">
            <p className="text-body-sm font-medium text-white">{eyebrow}</p>
            <h2 className="pb-4 font-semibold text-white">{heading}</h2>
            <p className="pb-5 font-medium text-white">{description}</p>
            <Button href="/contact" variant="primary" iconSize={16}>
              {buttonLabel}
            </Button>
          </div>

          {/* Header (desktop) */}
          <div className="hidden items-start gap-20 pb-10 lg:grid lg:grid-cols-[55fr_45fr]">
            <div>
              <p className="text-body-sm font-medium text-white">{eyebrow}</p>

              <h2 className="pb-5 font-semibold text-white">{heading}</h2>

              <Button href="/contact" variant="primary" iconSize={16}>
                {buttonLabel}
              </Button>
            </div>

            <p className="font-medium text-white">{description}</p>
          </div>
        </motion.div>

        {/* Cards (mobile) - stacked, expands vertically — kept outside the entrance
            animation above: backdrop-filter doesn't composite reliably on elements
            that are descendants of something still animating opacity/transform */}
        <div className="flex flex-col lg:hidden">
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={card.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                style={{
                  zIndex: cards.length - index,
                  borderColor:
                    index !== 0
                      ? "rgba(255,255,255,0) rgba(255,255,255,0.1) rgba(255,255,255,0.1) rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.1)",
                }}
                className={` relative flex min-h-[130px] flex-col justify-start overflow-hidden rounded-[18px] border px-6 py-6 text-left transition-all duration-300 cursor-pointer ${
                  index !== 0 ? "-mt-5" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 [backdrop-filter:blur(10px)]"
                  style={{ background: "linear-gradient(114.23deg, rgba(41,55,78,0.5) 0%, rgba(41,55,78,0.6) 100%)" }}
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[var(--primary)] transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative flex items-center justify-between gap-4 ">
                  <h3 className="text-body-xl leading-[1.3] tracking-[-0.02em] text-white">
                    {card.title}
                  </h3>
                  {!isActive && (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-primary">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  )}
                </div>

                <div
                  className="relative grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 text-white/90 text-body-lg">{card.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white">
                      Find out more
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Cards (desktop) - expands horizontally */}
        <div
          className="hidden transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:grid"
          style={{
            gridTemplateColumns: cards
              .map((_, index) => (index === activeIndex ? "2fr" : "1fr"))
              .join(" "),
          }}
        >
          {cards.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={card.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                style={{
                  zIndex: cards.length - index,
                  borderColor:
                    index !== cards.length - 1
                      ? "rgba(255,255,255,0.1) rgba(255,255,255,0) rgba(255,255,255,0.1) rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.1)",
                }}
                className={`relative flex h-[350px] flex-col justify-start overflow-hidden rounded-[18px] border px-10 py-7 text-left transition-all duration-300 cursor-pointer ${
                  index !== cards.length - 1 ? "-mr-[2rem]" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 [backdrop-filter:blur(10px)]"
                  style={{ background: "linear-gradient(114.23deg, rgba(41,55,78,0.5) 0%, rgba(41,55,78,0.6) 100%)" }}
                />
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[var(--primary)] transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />

                <h3 className="relative shrink text-body-xl leading-[1.3] tracking-[-0.02em] text-white">
                  {card.title}
                </h3>
                {isActive && (
                  <div className="relative mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide">
                    <p className="tab-content-anim text-white/90 text-body-lg">
                      {card.body}
                    </p>
                  </div>
                )}

                {!isActive && (
                  <span className="relative mt-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white text-primary">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TransformAccordion;
