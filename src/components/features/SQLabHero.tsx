 'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button"; 
function SQLabsProduct() {
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
              <Link href="/what-we-do" className="hover:text-muted transition-colors">
                Product
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-500"> Skyquest Labs</li>
          </ol>
        </nav>
        <div className="px-[2] sm:px-2 md:px-[10%]">
        {/* Eyebrow */}
        <p className="text-center text-primary mb-2 mt-8 ">
          Skyquest Labs
        </p>
 
        {/* Heading */}
        <h1 className="text-center font-semibold">
          The Lab That Exists <br></br>{" "}
          <em className="font-semibold">Only As Data.</em>
        </h1>
 
        {/* Subheading */}
        <p className=" mx-auto text-center mt-2 mb-5 max-w-full text-muted  ">
           Skyquest Labs connects physical diagnostic labs to qualified pathologists remotely delivering verified reports in under 15 minutes. Only data travels. Never the sample.
        </p>
        
        <div className="mt-8 mb-10 flex flex-wrap items-center justify-center gap-4 w-full">
              <Button href="/request-deployment" variant="primary">
                Request A Deployment
              </Button>
              <Button href="/how-it-works" variant="white">
                See How It Works
              </Button>
            </div>
                 
        </div>


 
      {/* Hero Image */}
     
      </div>
     
    </div>
    <div className=" pt-0 pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
        <div className="relative w-full aspect-[1920/854]  overflow-hidden bg-background">
          <Image
            src="/Productsoln/SQLabsHero.png"
            alt="Inspect Global Hero"
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
  return (<>
  <SQLabsProduct />
 
  </>)
 
}
 
 