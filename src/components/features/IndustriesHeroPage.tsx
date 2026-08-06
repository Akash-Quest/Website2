"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpSm, fadeLeft, imageReveal } from "@/lib/animations";

interface ServiceHeroPageProps {
  breadcrumbLabel: string;
  heading: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function IndustiesHeroPage({
  breadcrumbLabel,
  heading,
  description,
  imageSrc,
  imageAlt,
}: ServiceHeroPageProps) {
  return (
    <section className="bg-background ">
      <div className="hero-container  ">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0 ">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="" className="hover:text-muted transition-colors">
                What We Do
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">{breadcrumbLabel}</li>
          </ol>
        </nav>
        <div className="  pt-6 ">

          {/* Heading */}
          <motion.h1
            custom={1}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className=" font-bold mx-auto"
          >
            {heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            custom={2}
            variants={fadeUpSm}
            initial="hidden"
            animate="visible"
            className=" mx-auto mt-2 mb-5  text-muted text-body-lg leading-tight"
          >
            {description}
          </motion.p>
        </div>

        {/* Hero Image */}
        <div className="sm:px-[4]">
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative w-full aspect-[3/3.5]  md:aspect-[3/0.9] 2xl:aspect-[3/1]   sm:rounded-2xl overflow-hidden"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
