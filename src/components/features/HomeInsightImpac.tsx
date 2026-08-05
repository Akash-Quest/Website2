"use client";

import React, { useState } from "react";
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
        {/* Header */}
        <div className="grid grid-cols-[55fr_45fr] items-start gap-20 pb-10">
          <div>
            <p className="text-body-sm font-medium text-white">{eyebrow}</p>

            <h2 className="pb-5 font-semibold text-white">{heading}</h2>

            <Button variant="primary" iconSize={16}>
              {buttonLabel}
            </Button>
          </div>

          <p className="font-medium text-white">{description}</p>
        </div>
        <div
          className="grid transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
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
                className={`flex h-[350px] flex-col justify-start overflow-hidden rounded-[18px] border px-10 border-white/20  py-7 text-left backdrop-blur-[10px] transition-colors duration-300 cursor-pointer ${
                  isActive ? " bg-[var(--primary)]" : "bg-white/10 "
                } ${index !== cards.length - 1 ? "-mr-[2rem]" : ""}`}
                style={{ zIndex: cards.length - index }}
              >
                <h3 className=" shrink text-body-xl leading-[1.3] tracking-[-0.02em] text-white">
                  {card.title}
                </h3>
                {isActive && (
                  <div className="mt-4 min-h-0 flex-1 overflow-y-auto scrollbar-hide">
                    <p className="tab-content-anim text-white/90 text-body-lg">
                      {card.body}
                    </p>
                  </div>
                )}

                {!isActive && (
                  <span className="mt-auto flex h-8 w-8 items-center justify-center rounded-lg bg-white text-primary">
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
