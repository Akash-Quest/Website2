"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { ArrowUp } from "iconsax-react";
import Button from "../ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface CaseStudy {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

interface CaseStudiesProps {
  eyebrow: string;
  heading: ReactNode;
  description: string;
  viewAllButton: string;
  viewAllHref: string;
  readMoreButton: string;
  caseStudies: CaseStudy[];
  className?: string;
  bgClassName?: string;
}

export default function CaseStudies({
  eyebrow,
  heading,
  description,
  viewAllButton,
  viewAllHref,
  readMoreButton,
  caseStudies,
  className = "",
  bgClassName = "bg-[#F7F5F1]",
}: CaseStudiesProps) {
  const CASE_STUDIES = caseStudies;
  const [page, setPage] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(3);
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
        setColumns(2);
      } else {
        setCardsPerPage(3);
        setColumns(3);
      }
    };

    updateCardsPerPage();

    window.addEventListener("resize", updateCardsPerPage);
    return () =>
      window.removeEventListener(
        "resize",
        updateCardsPerPage
      );
  }, []);

  const totalPages = Math.ceil(
    CASE_STUDIES.length / cardsPerPage
  );

  // clamp defensively: totalPages can shrink out from under `page` when the
  // viewport crosses a breakpoint and cardsPerPage changes.
  const safePage = Math.min(page, totalPages - 1);

  const start = safePage * cardsPerPage;

  const visibleCards = CASE_STUDIES.slice(
    start,
    start + cardsPerPage
  );

  const goPrev = () =>
    setPage((safePage - 1 + totalPages) % totalPages);

  const goNext = () =>
    setPage((safePage + 1) % totalPages);

  return (
    <section className={`w-full ${bgClassName}`}>
    <div className={`w-full rounded-xl page-container ${className}`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <div className=" flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <motion.div variants={fadeUp}>
              <p className=" text-primary font-medium text-body-sm">
                {eyebrow}
              </p>

              <h2 className="font-bold ">
                {heading}
              </h2>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button href={viewAllHref} variant="primary" iconSize={16}>
                        {viewAllButton}
                      </Button>
            </motion.div>
          </div>

          {/* Description + Arrows */}
          <div className="mb-5  flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <motion.p variants={fadeUp} className="text-muted  max-w-xl ">
              {description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-start gap-2 sm:justify-end">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous case studies"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1D1EE3] ring-1 ring-black/5 transition-colors hover:bg-[#EDEBFF] hover:text-[#2A1ACC]"
              >
                <ArrowLeft
                  className="h-4 w-4"
                  strokeWidth={2}
                />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next case studies"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#1D1EE3] ring-1 ring-black/5 transition-colors hover:bg-[#EDEBFF] hover:text-[#2A1ACC]"
              >
                <ArrowRight
                  className="h-4 w-4"
                  strokeWidth={2}
                />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          key={page}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`grid gap-4 ${
            columns === 1
              ? "grid-cols-1"
              : columns === 2
              ? "grid-cols-2"
              : "grid-cols-3"
          }`}
        >
          {visibleCards.map((card, idx) => {
            if (columns === 1) {
              return (
                <motion.div key={card.id} custom={idx} variants={fadeUp} className="relative isolate">
                  <div className="relative h-[405px] overflow-hidden rounded-2xl">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      unoptimized
                      sizes="100vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 z-10 rounded-2xl bg-white/90 p-4 text-[#15121F]">
                      <div className="flex items-center justify-between">
                        <p className="text-body-sm font-medium text-[#2A1ACC]">
                          {card.category}
                        </p>
                        <p className="text-xs text-muted">{card.date}</p>
                      </div>

                      <h3 className="mt-2 font-semibold text-body-xl">{card.title}</h3>

                      <Link
                        href={`${viewAllHref}/${card.id}`}
                        aria-label={`${readMoreButton}: ${card.title}`}
                        className="group/learn mt-3 inline-flex items-center text-sm 2xl:text-lg font-semibold text-primary cursor-pointer"
                      >
                        {readMoreButton}
                        <span className="relative ml-1 h-3.5 w-3.5 overflow-hidden">
                          <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-3 group-hover/learn:-translate-y-3 group-hover/learn:opacity-0">
                            <ArrowUp size={14} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
                          </span>
                          <span className="absolute inset-0 flex items-center justify-center -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-0 group-hover/learn:translate-y-0 group-hover/learn:opacity-100">
                            <ArrowUp size={14} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            }

            const isExpanded = hoveredId === card.id;

            return (
              <motion.div
                key={card.id}
                custom={idx}
                variants={fadeUp}
                className="group relative isolate"
                onMouseEnter={() =>
                  setHoveredId(card.id)
                }
                onMouseLeave={() =>
                  setHoveredId(null)
                }
              >
                <div className="relative h-[clamp(18.9rem,29.53125vw,35.4375rem)] overflow-hidden rounded-2xl ">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                  <Link
                    href={`${viewAllHref}/${card.id}`}
                    aria-label={`${readMoreButton}: ${card.title}`}
                    tabIndex={isExpanded ? 0 : -1}
                    className={`absolute inset-x-0 bottom-0 z-10 flex flex-col overflow-hidden rounded-2xl bg-white/55 backdrop-blur-lg backdrop-brightness-125 border-none text-[#15121F] transition-all duration-[250ms] ease-out [clip-path:inset(-1px_round_1rem)] ${
                      isExpanded
                        ? "h-full p-5 "
                        : "h-[6rem]  p-3 m-3 items-center pointer-events-none"
                    }`}
                  >
                    <p
                      className={`text-body-sm font-medium text-primary overflow-hidden transition-all duration-150 ${
                        isExpanded ? "max-h-6 opacity-100 mb-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      {card.category}
                    </p>

                    <h3
                      className={`transition-all duration-150 ${
                        isExpanded
                          ? "font-medium leading-tight text-body-xl line-clamp-3"
                          : "font-semibold leading-tight text-body-lg"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`mt-3  overflow-hidden text-muted transition-all duration-150 ${
                        isExpanded
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {card.description}
                    </p>

                    <span
                      className={`group/learn self-end inline-flex items-center overflow-hidden text-sm sm:text-sm font-semibold text-primary transition-all duration-150 ${
                        isExpanded
                          ? "mt-auto max-h-10 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {readMoreButton}
                      <span className="relative ml-1 h-3.5 w-3.5 overflow-hidden">
                        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-3 group-hover/learn:-translate-y-3 group-hover/learn:opacity-0">
                          <ArrowUp size={14} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
                        </span>
                        <span className="absolute inset-0 flex items-center justify-center -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-0 group-hover/learn:translate-y-0 group-hover/learn:opacity-100">
                          <ArrowUp size={14} color="currentColor" variant="Linear" className="rotate-45 [&>path]:stroke-2" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}