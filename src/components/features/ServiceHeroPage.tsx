import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceHeroPageProps {
  breadcrumbLabel: string;
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ServiceHeroPage({
  breadcrumbLabel,
  eyebrow,
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
              <Link href="/what-we-do" className="hover:text-muted transition-colors">
                What We Do
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">{breadcrumbLabel}</li>
          </ol>
        </nav>
        <div className="px-[2] sm:px-2 pt-5 ">
          {/* Eyebrow */}
          <p className="text-center text-primary mt-8 sm:mt-8 md:mt-2 text-body-sm font-medium ">
            {eyebrow}
          </p>

          {/* Heading */}
          <h1 className="text-center font-bold">{heading}</h1>

          {/* Subheading */}
          <p className=" mx-auto text-center mb-5 max-w-[85%] text-muted text-body-lg ">
            {description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="sm:px-[4]">
          <div className="relative w-full aspect-[3/3.5]  md:aspect-[3/0.9] 2xl:aspect-[3/1]   sm:rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
