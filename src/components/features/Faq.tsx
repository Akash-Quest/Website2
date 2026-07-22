"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import { defaultFaqs } from "@/Constants/FaqDetails";

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
    <section className={`w-full ${bgClassName}`}>
      <div className="page-container ">

        {/* ── MOBILE: heading (top) ───────────── */}
        <div className="lg:hidden">
          <p className="text-primary font-medium text-body-sm">
            {eyebrow}
          </p>
          <h2 className="font-bold mb-2 sm:mb-8 lg:mb-4">
            {heading} <em className="font-semibold">{headingItalic}</em>
          </h2>
        </div>

        <div className="lg:flex lg:gap-12">
        {/* ── DESKTOP: left column (heading + card) ── */}
        <div className="hidden lg:flex lg:w-[350px] 2xl:w-[500px]  flex-shrink-0 flex-col justify-between ">
          <div>
            <p className="text-primary font-medium text-body-sm">
              {eyebrow}
            </p>
            <h2 className="font-bold mb-8">
              {heading} <em className="font-semibold">{headingItalic}</em>
            </h2>
          </div>
          <div className={`${cardBgClassName} border border-gray-200 rounded-2xl p-6 `}>
            <h3 className="font-bold text-gray-900 text-body-xl">{ctaHeading}</h3>
            <p className="text-body-sm text-gray-500 mb-5">{ctaDescription}</p>
            <Button variant="primary" iconSize={16}>
                    {ctaButtonText}
                  </Button>
          </div>
        </div>

        {/* ── Accordion (middle on mobile, right on desktop) ── */}
        <div className="flex-1 divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-3">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left group"
                aria-expanded={openIndex === index}
              >
                <h3 className={`text-body-lg font-medium  transition-colors duration-200 ${openIndex === index ? "text-gray-900" : "text-gray-700 group-hover:text-gray-900"}`}>
                  {faq.question}
                </h3>
                <span className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-colors duration-200 ${openIndex === index ? "bg-indigo-100 text-indigo-600" : "bg-indigo-600 text-white"}`}>
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
                  maxHeight: openIndex === index ? `${heights[index] || 0}px` : '0px',
                  opacity: openIndex === index ? 1 : 0,
                }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
              >
                <p className=" text-muted leading-relaxed pr-10 pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* ── MOBILE: "Still have a question" card (bottom) ── */}
        <div className={`lg:hidden ${cardBgClassName} border border-gray-200 rounded-2xl p-6`}>
          <h3 className="font-normal text-gray-900 mb-2 text-body-xl">{ctaHeading}</h3>
          <p className="text-sm text-muted mb-5">{ctaDescription}</p>
          <button type="button" className="flex items-center justify-center gap-2 rounded-lg bg-[#1D1EE3] pl-3 py-2 pr-1 text-sm text-white transition-colors hover:bg-[#231598] leading-none">
            {ctaButtonText}
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/40 bg-white text-black">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
