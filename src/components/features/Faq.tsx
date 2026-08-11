"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { defaultFaqs } from "@/Constants/FaqDetails";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  heading?: string;
  headingItalic?: string;
  faqs?: FAQItem[];
  ctaHeading?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  bgClassName?: string;
}

export default function FAQSection({
  eyebrow = "FAQ",
  heading = "Frequently Asked",
  headingItalic = "Questions.",
  faqs = defaultFaqs,
  ctaHeading = "Still have a question?",
  ctaDescription = "Our team is ready to assist you with anything you need.",
  ctaButtonText = "Schedule a Call",
  bgClassName = "bg-white",
}: FAQSectionProps) {
  const cardBgClassName = bgClassName === "bg-white" ? "bg-background" : "bg-white";
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    setHeights(contentRefs.current.map((el) => el?.scrollHeight || 0));
  }, [openIndex]);

  return (
    <section className={`w-full overflow-hidden ${bgClassName}`}>
      <motion.div
        className="page-container"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="
            grid gap-6
            grid-cols-1
            [grid-template-areas:'heading'_'accordion'_'cta']
            lg:gap-x-12
            lg:grid-cols-[350px_1fr] 2xl:grid-cols-[500px_1fr]
            lg:[grid-template-areas:'heading_accordion'_'cta_accordion']
            lg:grid-rows-[1fr_auto]
          "
        >
          {/* Heading — single instance, appears top-left on desktop, top on mobile */}
          <motion.div variants={fadeLeft} style={{ gridArea: "heading" }}>
            <p className="text-primary font-medium text-body-sm">{eyebrow}</p>
            <h2 className="font-bold mb-2 sm:mb-4 lg:mb-8">
              {heading} <em className="font-semibold">{headingItalic}</em>
            </h2>
          </motion.div>

          {/* Accordion — single instance, spans full height on the right on desktop */}
          <motion.div
            variants={fadeRight}
            style={{ gridArea: "accordion" }}
            className="divide-y divide-gray-200 border-t border-gray-200"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-3">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-8 text-left group cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <h3
                    className={`text-body-lg font-medium transition-colors duration-200 ${
                      openIndex === index
                        ? "text-gray-900"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-200 ${
                      openIndex === index
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-indigo-600 text-white"
                    }`}
                  >
                    {openIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  style={{
                    maxHeight: openIndex === index ? `${heights[index] || 0}px` : "0px",
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <span className="p text-muted leading-relaxed pr-10 pt-2">{faq.answer}</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA card — single instance, bottom-left on desktop, bottom on mobile */}
          <div
            style={{ gridArea: "cta" }}
            className={`${cardBgClassName} self-end border border-gray-200 rounded-2xl p-6`}
          >
            <h3 className="font-regular text-gray-900 text-body-2xl">{ctaHeading}</h3>
            <p className="text-body-sm text-gray-500 mb-5">{ctaDescription}</p>
            <Button href="/contact" variant="primary" iconSize={16}>
              {ctaButtonText}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}