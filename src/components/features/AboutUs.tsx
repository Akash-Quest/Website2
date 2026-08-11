"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpSm, fadeLeft, imageReveal } from "@/lib/animations";

export default function AboutUs() {
  return (
    <section className="bg-background">
      <div className="hero-container pb-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pb-2 px-4 lg:px-0">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">About SkyQuest</li>
          </ol>
        </nav>

      </div>

      {/* Hero Image — full-bleed, with text overlaid on the left */}
      <motion.div
        variants={imageReveal}
        initial="hidden"
        animate="visible"
        className="relative w-full aspect-[3/3.5] md:aspect-[3/1.1] 2xl:aspect-[3/1.3] overflow-hidden"
      >
        <Image
          src="/AboutUs/AboutUsHero.jpg"
          alt="About SkyQuest Background"
          fill
          priority
          className="object-cover object-[75%_center]"
        />

        <div className="absolute inset-0 z-10 flex items-center">
          <div className="hero-container ">
            <div className="max-w-[52%]">
              {/* Eyebrow */}
              <motion.p
                custom={0}
                variants={fadeUpSm}
                initial="hidden"
                animate="visible"
                className="text-left text-primary text-body-sm font-medium"
              >
                About Us
              </motion.p>

              {/* Heading */}
              <motion.h1
                custom={1}
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                className="text-left font-bold text-white"
              >
                Transforming Business Through{" "}
                <em className="font-semibold">Strategy & Technology</em>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                custom={2}
                variants={fadeUpSm}
                initial="hidden"
                animate="visible"
                className="mt-1 text-left text-white text-body-lg"
              >
                SkyQuest is a global consulting firm helping leaders grow, transform digitally, and build sustainable impact across strategy, technology, research and social development.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
