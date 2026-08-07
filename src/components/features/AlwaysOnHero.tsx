'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeUpSm, fadeLeft, fadeRight, imageReveal } from "@/lib/animations";

function AlwaysOnProduct() {
  return (
    <section className="relative bg-background mb-15 overflow-hidden">
      {/* Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover opacity-30 aspect-[1920/812]"
        style={{ backgroundImage: "url('/Team/bg.jpg')" }}
      />

      <div className="hero-container relative z-10 pb-5">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pb-2 px-4 lg:px-0">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="/what-we-do" className="hover:text-muted transition-colors">
                Product
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-500">AlwaysOn</li>
          </ol>
        </nav>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 pt-10">
          {/* Left: text */}
          <div className="flex flex-col justify-center lg:items-start text-center lg:text-left">
            <motion.p
              custom={0}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className="text-center font-medium text-primary mb-2 mt-8 sm:mt-8 md:mt-2 "
            >
              AlwaysOn
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="mb-2 font-bold text-black pb-5"
            >
             Digital Healthcare <em className="font-semibold">Innovation </em>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className="text-muted lg:max-w-full tracking-wide leading-snug px-4 lg:px-0"
            >
              AlwaysON delivers AI-powered healthcare services directly through WhatsApp, enabling AI-assisted symptom assessment, multilingual support, clinical guidance, and rapid access to expert referrals.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className="mt-8 mb-10 flex flex-wrap items-start justify-left gap-4 w-full"
            >
              <Button href="/contact" variant="primary">
                Request Demo
              </Button>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            variants={fadeRight}
            custom={1}
            initial="hidden"
            animate="visible"
            className="relative w-full aspect-[619/510] sm:aspect-[619/510] md:rounded-2xl overflow-hidden "
          >
            <motion.div
              variants={imageReveal}
              initial="hidden"
              animate="visible"
              className="relative w-full h-full"
            >
              <Image
                src="/Productsoln/AlwaysOnHero.png"
                alt="Architectural detail representing strategy and impact"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AlwaysOnProduct;