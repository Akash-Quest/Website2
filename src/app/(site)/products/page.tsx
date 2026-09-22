import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import Reveal from "@/components/ui/Reveal";
import StatsGridThree from "@/components/ui/Stats3";
import ProductsGrid from "@/components/features/ProductsGrid";
import CaseStudies from "@/components/features/HomeCaseStudie";
import Suscribe from "@/components/features/Suscribe";
import { caseStudiesData } from "@/Constants/caseStudies";
/* Note the trailing space in the filename — "Insight .tsx" — it is intentional
   here only because that is how the file is named on disk. */
import { insightData } from "@/Constants/Insight ";
import FAQSection from "@/components/features/Faq";
import { productFaqs } from "@/Constants/FaqProducts";

export const metadata: Metadata = {
  title: "Products & Platforms | SkyQuest",
  description:
    "Six SkyQuest platforms built for agriculture, infrastructure, mining, diagnostics, climate finance, and public health delivery.",
  keywords: [
    "AgriMap",
    "Inspect Global",
    "MineralIQ",
    "SkyQuest Labs",
    "DeCarbonX",
    "AlwaysOn",
    "development technology platforms",
  ],
  alternates: {
    canonical: "https://www.skyquestt.com/products",
  },
};

/**
 * Split hero — copy left, image right — mirroring TeamHero.
 *
 * TeamHero uses framer-motion directly and so has to be a client component;
 * this page exports `metadata`, which a client component cannot do, so the
 * same animations come from the Reveal wrapper instead (left / upSm / image
 * match TeamHero's fadeLeft / fadeUpSm / imageReveal).
 */
function ProductsHero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="hero-container relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pb-2 px-4 lg:px-0">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Products</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-2 lg:gap-5">
          {/* Left: text */}
          <div className="flex flex-col justify-center text-center lg:items-start lg:text-left">
            <Reveal as="h1" variant="left" custom={0} className="mb-2 font-bold text-black">
              Intelligence Platforms

              That Drive {" "}
              <em className="font-semibold">Real Impact</em>
            </Reveal>

            <Reveal
              as="p"
              variant="upSm"
              custom={1}
              className="text-muted lg:max-w-lg px-4 lg:px-0 text-body-lg"
            >
              Each SkyQuest platform is built around a specific development
              challenge. Select a product to explore how it works and who it has
              helped.
            </Reveal>
          </div>

          {/* Right: image */}
          <Reveal
            as="div"
            variant="image"
            className="relative w-full aspect-[4/3] sm:aspect-[14/9] md:rounded-2xl overflow-hidden"
          >
            <Image
              src="/Productsoln/ProductHero.jpg"
              alt="SkyQuest product platforms"
              fill
              priority
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <main className="w-full bg-background">
      <ProductsHero />

      <StatsGridThree
        className="mb-10 lg:mb-14"
        stats={[
          { target: 6, suffix: "", label: "Platforms Live" },
          { target: 12, suffix: "+", label: "Countries Deployed" },
          { target: 200, suffix: "+", label: "Engagements Delivered" },
        ]}
      />

      <ProductsGrid bgClassName="bg-white" />

      <CaseStudies {...caseStudiesData} bgClassName="bg-background" />

      <CaseStudies {...insightData} bgClassName="bg-white" />

      <FAQSection faqs={productFaqs} bgClassName="bg-background" />

      <Suscribe />
    </main>
  );
}
