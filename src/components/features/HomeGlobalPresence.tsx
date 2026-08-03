"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "@/lib/animations";

interface Region {
  name: string;
  description: string;
}

const regions: Region[] = [
  {
    name: "India",
    description:
      "Expertise across DPI, public sector transformation, social sector consulting, and enterprise innovation.",
  },
  {
    name: "Africa",
    description:
      "Supporting social sector programs, development initiatives, and public sector transformation.",
  },
  {
    name: "US",
    description:
      "Delivering technology strategy, market intelligence, and innovation partnerships.",
  },
  {
    name: "Middle East",
    description:
      "Advising on Vision 2030 initiatives, ESG, infrastructure, and digital transformation.",
  },
  {
    name: "Europe",
    description:
      "Enabling market expansion, growth strategy, and cross-border advisory engagements.",
  },
  {
    name: "APAC",
    description:
      "Supporting regional growth, market entry, and competitive intelligence initiatives.",
  },

  
];

export default function OurGlobalPresence() {
  return (
    <section id="global-presence" className="w-full bg-white ">
      <div className="page-container ">
        {/* Eyebrow + heading */}
        <motion.div
          className="text-left lg:text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className=" font-medium  text-primary text-body-sm ">
            Global Presence
          </p>
          <h2 className=" font-bold text-gray-900 " >
            Local Expertise, Global <em className="font-semibold">Standards</em>
          </h2>
          <p className=" lg:mx-auto max-w-2xl text-muted mb-5 mt-2">
            We operate across six regions, combining on-the-ground knowledge with international best practice to deliver contextually relevant, globally benchmarked solutions.
          </p>
        </motion.div>

        {/* Content: region list + map */}

        {/* ── MOBILE: map as background ───────────────────────── */}
        <motion.div
          className="lg:hidden mt-5 relative overflow-hidden rounded-2xl min-h-[380px] sm:min-h-[480px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Background map */}
          <div className="absolute inset-0">
            <Image
              src="/Hero/Map.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-1000"
            />
          </div>
          {/* Gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
          {/* Region list on top */}
          <ul className="relative z-10 space-y-3 p-5">
            {regions.map((region) => (
              <li key={region.name}>
                <div className="flex items-center gap-2">
                  <Image
                    src="/Hero/point.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="h-5 w-5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className=" font-bold text-gray-900">{region.name}</h3>
                </div>
                <p className="pl-6  text-muted">
                  {region.description}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── DESKTOP: side-by-side grid ───────────────────────── */}
        <div className="hidden lg:grid mt-2 grid-cols-2 gap-[clamp(1.5rem,2vw,2.5rem)]">
          {/* Region list */}
          <motion.ul
            className="flex flex-col justify-center gap-2"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {regions.map((region) => (
              <li key={region.name}>
                <div className="flex items-center gap-2">
                  <Image
                    src="/Hero/point.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="h-4 w-4 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="font-medium   text-body-lg">{region.name}</h3>
                </div>
                <p className="pl-6 max-w-xl text-muted ">
                  {region.description}
                </p>
              </li>
            ))}
          </motion.ul>

          {/* Map */}
          <motion.div
            className="flex items-center justify-center"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/Hero/World.svg"
              alt="World map showing regional presence"
              className="h-full w-auto max-w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}




