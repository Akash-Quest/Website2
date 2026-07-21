"use client";

import { FavoriteChart, Layer, RowHorizontal } from "iconsax-react";

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
          <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
            The 
          </p>
          <h2 className="font-bold">
            Why Enterprises are Struggling
            <br />
            to <em className="font-semibold">Scale AI</em>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm 2xl:text-base text-muted">
            SkyQuest bridges the gap between AI potential and real enterprise impact.
          </p>
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
              <div key={title} className="rounded-2xl bg-background p-5">
                <Icon className="h-5 w-5 " strokeWidth={1.75} variant="TwoTone" color="currentColor"  />
                <h3 className="mt-4 font-semibold text-neutral-900">
                  {idx + 1}. {title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
