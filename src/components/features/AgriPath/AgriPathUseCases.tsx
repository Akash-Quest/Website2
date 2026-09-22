"use client";

/**
 * AgriPath use cases — mirrors AgriMapUseCases (2x2 matrix of image + bullets).
 * COPY AND IMAGES ARE PLACEHOLDERS; images currently point at AgriMap assets.
 */

import React from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function AgriPathUseCases() {
  const useCases = [
    {
      tag: "Seeds & Varieties",
      title: "Seeds & Varieties",
      desc: "Find the right zones for new varieties",
      image: "/Productsoln/Agripath/Pr1.jpg",
      bullets: [
        "Rank zones by agroclimatic compatibility",
        "Identify DUS/VCU requirements",
        "Get mitigation recommendations",
      ],
    },
    {
      tag: "Fertilizers & Plant Nutrients",
      title: "Fertilizers & Plant Nutrients",
      desc: "Match products to nutrient needs",
      image: "/Productsoln/Agripath/Pr2.jpg",
      bullets: [
        "Compare products against soil profiles",
        "Identify key scoring parameters",
        "Recommend application timing and rates",
      ],
    },
    {
      tag: "Import & Quarantine Compliance",
      title: "Import & Quarantine Compliance",
      desc: "Simplify seed import clearance",
      /* Lowercase "pr3" is how the file is actually named on disk — it must
         match exactly or it 404s on Linux, even though Windows tolerates it. */
      image: "/Productsoln/Agripath/pr3.jpg",
      bullets: [
        "Identify permits and certificates",
        "Get document and HS code checklists",
        "Flag key compliance risks",
      ],
    },
    {
      tag: "Fertilizer & Agrochemical Registration",
      title: "Product Registration",
      desc: "Streamline product registration",
      image: "/Productsoln/Agripath/Pr4.jpg",
      bullets: [
        "Map testing and documentation requirements",
        "Verify labeling and safety requirements",
        "Identify inspection and port protocols",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] font-['Inter_Tight'] select-none">
      <div className="page-container mx-auto flex flex-col">
        {/* ── HEADER ── */}
        <Reveal as="span" variant="upSm" custom={0} className="text-primary">
          Use Cases
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full mt-5 mb-5">
          <div className="lg:col-span-7 flex flex-col gap-2">
            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold">
              Real Decisions, Real <br />
              <em className="font-semibold">Market Entries</em>
            </Reveal>
          </div>
          <div className="lg:col-span-5 pb-2">
            <Reveal
              as="p"
              variant="upSm"
              custom={2}
              className="tracking-wide leading-snug text-[#03030F]/70 max-w-full"
            >
              AgriPath supports critical decisions from zone screening to
              regulatory approval.
            </Reveal>
          </div>
        </div>

        {/* ── 2x2 CARD MATRIX ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-4">
          {useCases.map((item, idx) => (
            <Reveal
              as="div"
              variant="upSm"
              custom={idx}
              key={idx}
              /* No min-h on the card: a floor here would make the image
                 stretch past the copy whenever the copy is shorter. Letting
                 the text set the height keeps both columns identical. */
              className="bg-[#F7F5F1] rounded-[10px] p-6 flex flex-col sm:flex-row items-stretch gap-5 border border-gray-200/20 max-w-[695px] w-full mx-auto"
            >
              {/* Left: image.
                  sm:min-h-0 releases the mobile height floor so the image
                  takes exactly the row height set by the copy column — a
                  fixed min-height here is what makes the two sides diverge. */}
              <div className="w-full sm:w-[42%] min-h-[280px] sm:min-h-0 relative rounded-[10px] overflow-hidden bg-[#D9D9D9] shrink-0 self-stretch">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center scale-105"
                />
              </div>

              {/* Right: copy.
                  Deliberately not justify-between — that pushes the bullet
                  list to the bottom of the card and opens a gap under the
                  description whenever the copy is shorter than the image. */}
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-medium tracking-wide text-primary">
                    {item.tag}
                  </p>
                  <h3 className="font-semibold text-body-xl">{item.title}</h3>
                  <p className="tracking-wide text-muted leading-snug mt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-col border-t border-black/20 pt-1">
                  <span>
                    {item.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="h-auto w-auto flex items-center leading-snug text-muted border-b border-black/20 pb-1.5 pt-1.5 last:pb-1"
                      >
                        {bullet}
                      </div>
                    ))}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
