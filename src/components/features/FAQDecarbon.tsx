"use client";

import React, { useRef, useLayoutEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";

const faqs = [
  {
    question: "What is DeCarbonX and who is it designed for?",
    answer:
      "DeCarbonX is a sovereign climate finance platform that helps governments transform climate projects into finance-ready instruments such as carbon credits, green bonds, and Article 6 transactions while maintaining full national data ownership.",
  },
  {
    question: "What climate finance mechanisms does DeCarbonX support?",
    answer:
      "The platform supports carbon credits, Article 6 ITMOs, green bonds, GCF grants, blended finance structures, carbon forwards, and other international climate finance mechanisms.",
  },
  {
    question: "How does DeCarbonX simplify Article 6 implementation?",
    answer:
      "DeCarbonX automates key components of Article 6 workflows, including project documentation, corresponding adjustments, MRV processes, investor matching, and transaction management while ensuring national ownership and compliance.",
  },
  {
    question: "How does the platform verify emission reductions?",
    answer:
      "DeCarbonX uses satellite imagery, IoT sensors, and AI-driven MRV methodologies to continuously monitor projects and generate auditable, real-time emissions reduction data.",
  },
  {
    question: "Can DeCarbonX integrate with our country's existing registries and reporting systems?",
    answer:
      "Yes. The platform is designed as a sovereign deployment and integrates with national carbon registries, NDC frameworks, climate reporting systems, and government databases.",
  },
  {
    question: "Which sectors can be supported by DeCarbonX?",
    answer:
      "The platform supports climate projects across agriculture, forestry, livestock, energy, waste management, clean cooking, transport, and industrial decarbonization initiatives.",
  },
  
];

export default function FAQDecarbon() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    setHeights(contentRefs.current.map((el) => el?.scrollHeight || 0));
  }, [openIndex]);

  return (
    <section className="w-full  ">
      <div className="page-container ">

        {/* ── MOBILE: heading (top) ───────────── */}
        <div className="lg:hidden">
          <p className="text-primary mb-2">
            FAQ
          </p>
          <h2 className="font-semibold mb-2 sm:mb-8 lg:mb-4">
            Questions About Our Data & AI  <em className="font-semibold">Practice.</em>
          </h2>
        </div>

        <div className="lg:flex lg:gap-12 ">
        {/* ── DESKTOP: left column (heading + card) ── */}
        <div className="hidden lg:flex lg:w-[350px] flex-shrink-0 flex-col justify-between ">
          <div>
            <p className="text-primary mb-2">
              FAQ
            </p>
            <h2 className="font-semibold mb-8">
              Questions About Our Data & AI  <em className="font-semibold">Practice.</em>
            </h2>
          </div>
          <div className="bg-[#F7F5F1] border border-gray-200 bg-white rounded-2xl p-6">
            <h3 className=" font-semibold text-gray-900 mb-2">Still have a question?</h3>
            <p className="text-gray-700 tracking-wide mb-5">Our team is ready to assist you with anything you need.</p>
            <Button variant="primary" iconSize={16}>
                    Schedule a Call
            </Button>
          </div>
        </div>

        {/* ── Accordion (middle on mobile, right on desktop) ── */}
        <div className="flex-1 divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left group"
                aria-expanded={openIndex === index}
              >
                <span className={` font-medium transition-colors duration-200 ${openIndex === index ? "text-gray-900" : "text-[#03030F] group-hover:text-primary"}`}>
                  <h4>{faq.question}</h4>
                </span>
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
                <p className=" text-gray-500 pr-10 pt-2 leading-snug tracking-wide ">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        </div>

        {/* ── MOBILE: "Still have a question" card (bottom) ── */}
        <div className="lg:hidden bg-[#F7F5F1] border border-gray-200 rounded-2xl p-6">
          <h3 className=" text-gray-900 mb-2">Still have a question?</h3>
          <p className=" text-gray-500 mb-5">Our team is ready to assist you with anything you need.</p>
          <button type="button" className="flex items-center justify-center gap-2 rounded-lg bg-[#1D1EE3] pl-3 py-2 pr-1 text-sm text-white transition-colors hover:bg-[#231598] leading-none">
            Schedule a Call
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/40 bg-white text-black">
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}