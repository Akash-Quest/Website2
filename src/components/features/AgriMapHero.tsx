"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeUpSm, fadeLeft, imageReveal } from "@/lib/animations";
function AgriMapProduct() {
  return (
    <section id="#how-it-works"className="reltive">
    <div className="relative bg-background overflow-hidden">
         <div
        className=" pointer-events-none absolute inset-0  bg-cover opacity-30 mix-blend-multiply aspect-[1920/812]"
        style={{ backgroundImage: "url('/Team/bg.jpg')" }}
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
              <Link href="/products" className="hover:text-muted transition-colors">
                Products
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-500">Agrimap</li>
          </ol>
        </nav>
        <div className="px-[2] sm:px-2 md:px-[10%]">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={fadeUpSm}
          initial="hidden"
          animate="visible"
          className="text-center text-primary mb-2 mt-8 sm:mt-8 md:mt-2 "
        >
          AgriMap
        </motion.p>

        {/* Heading */}
        <motion.h1
          custom={1}
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          className="text-center font-semibold"
        >
          Know every seed. Reach<br></br>{" "}
          <em className="font-semibold">every farm</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={2}
          variants={fadeUpSm}
          initial="hidden"
          animate="visible"
          className=" mx-auto text-center mt-5 mb-5 max-w-full text-muted leading-snug tracking-wide"
        >
           AgriMap gives agriculture departments, banks, and governments a real-time view of seed replacement rates, crop health, and variety adoption across every district down to the block level.  </motion.p>
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


      {/* Hero Image */}

      </div>

    </div>
    <div className=" pt-0 pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          className="relative w-full aspect-[1920/812]  overflow-hidden bg-background"
        >
          <Image
            src="/Productsoln/AgriHero2.png"
            alt="Careers at SkyQuest"
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
  return (<>
  <AgriMapProduct />
 
  </>)
 
}
 
 