'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
// ── 🛠️ STEP 1: IMPORTING THE CUSTOM BUTTON ──
import Button from "@/components/ui/Button"; 

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
            <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
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
            <p className="text-center font-semibold text-primary mb-2 mt-8 sm:mt-8 md:mt-2 text-sm 2xl:text-base ">
              DecarbonX
            </p>
     
            {/* Heading */}
            <h1 className="text-center font-semibold">
              The Automated Factory <br/>  For <em className="font-semibold">Sovereign Climate Finance</em>
            </h1>
     
            {/* Subheading */}
            <p className=" mx-auto text-center mt-2 mb-5 max-w-[75%] text-muted 2xl:text-base ">
              DeCarbonX turns climate project ideas into finance-ready instruments carbon credits, green bonds, Article 6 forwards with full national data sovereignty and AI-driven MRV
            </p>

            {/* ── 🛠️ STEP 2: BUTTONS SET EXACTLY AS PER YOUR IMAGE ── */}
            <div className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-4 w-full">
              <Button href="/request-deployment" variant="primary">
                Request A Deployment
              </Button>
              <Button href="#how-it-works" variant="white">
                See How It Works
              </Button>
            </div>
          </div>
        
          {/* Hero Image */}
        </div>
      </div>
      
      <div className=" pt-0 pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
        <div className="relative w-full aspect-[1920/795]  overflow-hidden bg-background">
          <Image
            src="/Productsoln/DecarbonHero.png"
            alt="Decarbon X Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
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