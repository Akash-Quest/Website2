"use client";


import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeUpSm, fadeLeft, imageReveal } from "@/lib/animations";

export default function AgriPathHero() {
  return (
    <section id="#how-it-works" className="relative">
      <div className="relative bg-background overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-cover opacity-30 mix-blend-multiply aspect-[1920/812]"
          style={{ backgroundImage: "url('/Team/bg.jpg')" }}
        />
        <div className="hero-container relative z-10 pb-5">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="pb-2 px-4 lg:px-0">
            <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
              <li>
                <Link href="/" className="hover:text-muted transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-muted transition-colors"
                >
                  Products
                </Link>
              </li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-500">AgriPath</li>
            </ol>
          </nav>

          <div className="px-[2] sm:px-2 md:px-[10%]">
            {/* Eyebrow */}
            <motion.p
              custom={0}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className="text-center text-primary mb-2 mt-8 sm:mt-8 md:mt-2"
            >
              AgriPath
            </motion.p>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              className="text-center font-semibold"
            >
              Know where it fits.
              <br />Reach {" "}
              <em className="font-semibold">Every Market</em>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              custom={2}
              variants={fadeUpSm}
              initial="hidden"
              animate="visible"
              className="mx-auto text-center mt-5 mb-5 max-w-[80%] text-muted leading-snug tracking-wide"
            >
              AgriPath AI takes any agri-technology a seed variety, a
              fertilizer blend, a crop-protection product, a piece of equipment 
              from a technology profile to a scored, regulation-ready market
              entry plan, across 90+ countries in Africa and Asia.
            </motion.p>
          </div>

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
      </div>

      {/* Hero Image */}
      <div className="pt-0 pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative w-full aspect-[1920/812] overflow-hidden bg-background"
        >
          <Image
            src="/Productsoln/Agripath/Hero.jpg"
            alt="AgriPath traceability platform"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
}
