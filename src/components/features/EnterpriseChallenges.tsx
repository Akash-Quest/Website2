"use client";

import { Layers, MessageSquareText, BookOpenText } from "lucide-react";

const challenges = [
  {
    icon: Layers,
    title: "Fragmented Technology Stack",
    description: "Legacy systems and siloed data prevent AI adoption at scale",
  },
  {
    icon: MessageSquareText,
    title: "No Clear ROI on Digital Investments",
    description:
      "Initiatives fail to translate into measurable business outcomes",
  },
  {
    icon: BookOpenText,
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
            The Challenge
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

        <div className="relative mt-10">
          {/* decorative dashed arc */}
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block"
            width="900"
            height="280"
            viewBox="0 0 900 280"
            fill="none"
          >
            <ellipse
              cx="30"
              cy="16"
              rx="50"
              ry="50"
              stroke="#C7CBFA"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3">
            {challenges.map(({ icon: Icon, title, description }, idx) => (
              <div key={title} className="rounded-2xl bg-background p-5">
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-sm font-semibold text-neutral-900 sm:text-base">
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
