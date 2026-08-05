"use client";

import { FavoriteChart, Layer, RowHorizontal } from "iconsax-react";
import Reveal from "@/components/ui/Reveal";

const challenges = [
  {
    icon: Layer,
    title: "Fragmented Technology Stack",
    description: "Legacy systems and siloed data prevent AI adoption at scale",
  },
  {
    icon: FavoriteChart,
    title: "No Clear ROI on Digital Investments",
    description:
      "Initiatives fail to translate into measurable business outcomes",
  },
  {
    icon: RowHorizontal,
    title: "Talent & Implementation Gap",
    description:
      "Strategy exists but execution and change management fall short",
  },
];

export default function EnterpriseChallenges() {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="relative text-center">
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="mb-2 text-body-sm font-medium text-primary"
          >
            The Challenge
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-bold">
            Why Enterprises are Struggling
            <br />
            to <em className="font-semibold">Scale AI</em>
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="mx-auto mt-2 max-w-xl  text-muted"
          >
            SkyQuest bridges the gap between AI potential and real enterprise impact.
          </Reveal>
        </div>

        <div className="relative mt-20">
          {/* decorative dashed half-circle above the card 1 / card 2 gap */}
          <svg
            className="pointer-events-none absolute left-1/3 top-0 hidden h-16 w-40 -translate-x-1/2 -translate-y-full sm:block"
            viewBox="0 0 155 64"
            fill="none"
          >
            <path
              d="M0,64 A80,64 0 0 1 155,64"
              stroke="#C7CBFA"
              strokeWidth="1"
              strokeDasharray="6 6"
            />
          </svg>

          {/* decorative dashed half-circle below the card 2 / card 3 gap */}
          <svg
            className="pointer-events-none absolute left-2/3 bottom-0 hidden h-16 w-40 -translate-x-1/2 translate-y-full sm:block"
            viewBox="0 0 155 64"
            fill="none"
          >
            <path
              d="M0,0 A80,64 0 0 0 155,0"
              stroke="#C7CBFA"
              strokeWidth="1"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
            {challenges.map(({ icon: Icon, title, description }, idx) => (
              <Reveal
                key={title}
                variant="upSm"
                custom={idx}
                className="rounded-2xl bg-background p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary mb-4">
                <Icon className="h-5 w-5 " strokeWidth={1.75} variant="TwoTone" color="currentColor"  />
                </div>
                <h3 className="text-body-lg  font-semibold text-neutral-900">
                  {idx + 1}. {title}
                </h3>
                <p className="mt-1.5 text-muted">{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
