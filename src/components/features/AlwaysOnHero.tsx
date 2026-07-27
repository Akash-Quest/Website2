'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

function AlwaysOnProduct() {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover opacity-30 aspect-[1920/812]"
        style={{ backgroundImage: "url('/team/bg.jpg')" }}
      />

      <div className="hero-container relative z-10 pb-5">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pb-2 px-4 lg:px-0">
          <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="/what-we-do" className="hover:text-muted transition-colors">
                Products
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
            <p className="text-center font-medium text-primary mb-2 mt-8 sm:mt-8 md:mt-2 ">
              AlwaysOn
            </p>
            
            <h1 className="mb-2 font-bold text-black pb-5">
              Healthcare delivered <br />Through <em className="font-semibold">A Message. </em>
            </h1>

            <p className="text-muted lg:max-w-full tracking-wide leading-snug px-4 lg:px-0">
              AlwaysON delivers AI-powered diagnostic services directly through WhatsApp the world's most-used messaging platform. No app. No barrier. No delay.
            </p>

            <div className="mt-8 mb-10 flex flex-wrap items-start justify-left gap-4 w-full">
              <Button href="/request-deployment" variant="primary">
                Request A Deployment
              </Button>
              <Button href="/how-it-works" variant="white">
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative w-full aspect-[619/510] sm:aspect-[619/510] md:rounded-2xl overflow-hidden ">
            <Image
              src="/Productsoln/AlwaysOnHero.png"
              alt="Architectural detail representing strategy and impact"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AlwaysOnProduct;