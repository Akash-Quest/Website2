'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
// ── 🛠️ STEP 1: IMPORTING THE CUSTOM BUTTON ──
import Button from "@/components/ui/Button";
import { fadeUpSm, fadeLeft, imageReveal } from "@/lib/animations";

function DecarbonXProduct() {
  return (
    <section className="reltive">
      <div className="relative bg-background overflow-hidden">
        <div
          className=" pointer-events-none absolute inset-0 bg- bg-cover opacity-30 aspect-[1920/812]"
          style={{ backgroundImage: "url('/team/bg.jpg')" }}
        />
        <div className="hero-container relative z-10 pb-5">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0 ">
            <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
              <li>
                <Link href="/" className="hover:text-muted transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                Product
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-500"> DeCarbonX</li>
            </ol>
          </nav>
          
          <div className="px-[2] sm:px-2 md:px-[10%]">
            {/* Eyebrow */}
            <motion.p
              custom={0}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className="text-center font-semibold text-primary mb-2 mt-8 sm:mt-8 md:mt-2 text-sm 2xl:text-base "
            >
              DeCarbonX
            </motion.p>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="text-center font-bold"
            >
              Sovereign Climate Finance Infrastructure<em className="font-semibold"> Platform </em>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className=" mx-auto text-center mt-2 mb-5 max-w-[75%] text-muted 2xl:text-base "
            >
              DeCarbonX helps transform climate project ideas into structured, finance-ready opportunities while enabling digital MRV, climate finance documentation, funding access, and national data sovereignty.
            </motion.p>

            {/* ── 🛠️ STEP 2: BUTTONS SET EXACTLY AS PER YOUR IMAGE ── */}
            <motion.div
              custom={3}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-4 w-full"
            >
              <Button href="/contact" variant="primary">
                Request Demo
              </Button>
            </motion.div>
          </div>

          {/* Hero Image */}
        </div>
      </div>

      <div className=" pt-0 pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative w-full aspect-[1920/795]  overflow-hidden bg-background"
        >
          <Image
            src="/Productsoln/DecarbonHero.png"
            alt="Decarbon X Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
 
export default function Teams() {
  return (
    <>
      <DecarbonXProduct />
    </>
  );
}