"use client";

import { ArrowDown, ArrowUp, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";

interface Job {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
}

const CATEGORY_LABELS = [
  "All positions",
  "Engineering",
  "Product",
  "Design",
  "Operations",
  "Marketing",
];

const jobs: Job[] = [
  {
    id: 1,
    title: "Full-Stack Developers",
    category: "Engineering",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 2,
    title: "Application developer (react native)",
    category: "Engineering",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 3,
    title: "Senior Product designer",
    category: "Design",
    tags: ["Hybrid", "Tartu", "Full-time"],
    description:
      "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
  {
    id: 4,
    title: "Product Manager",
    category: "Product",
    tags: ["Remote", "Netherlands", "Full-time"],
    description:
      "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
  },
  {
    id: 5,
    title: "Product Owner",
    category: "Product",
    tags: ["Tartu", "Full-time"],
    description:
      "We've worked on 30+ major projects from 8 different industries that are being used. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
];

const categories = CATEGORY_LABELS.map((label) => ({
  label,
  count: label === "All positions" ? jobs.length : jobs.filter((j) => j.category === label).length,
}));


function TagPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-xs text-gray-500 font-medium bg-white whitespace-nowrap"
    >
      {label}
    </span>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-[#F7F5F1] rounded-xl p-4 flex flex-col gap-2">
      <h3 className=" font-semibold text-[#03030F] m-0 text-lg">
        {job.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>

      <p className="text-xs 2xl:text-sm font-inter text-[#000000] leading-tight m-0">
        {job.description}
      </p>

      <div className="flex justify-end ">
       <Button >
        Apply Now</ Button >
      </div>
    </div>
  );
}

export default function OpenPositions() {
  const [activeCategory, setActiveCategory] = useState("All positions");

  const filteredJobs =
    activeCategory === "All positions"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  return (
    <div className="bg-white">
      <section className="mx-auto page-container ">
        {/* Heading */}
        <h2 className="text-start font-semibold mb-5 md:mb-10">
          We have {jobs.length} open <em className="font-medium">Positions now!</em>
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* ── Sidebar ── */}
          <aside className="w-full lg:w-52 flex-shrink-0">
            <div className="flex flex-row gap-1.5 overflow-x-auto scrollbar-hide pb-1 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`flex-shrink-0 whitespace-nowrap text-left lg:w-full px-3 py-2 rounded-full lg:rounded-r-lg lg:rounded-l-none text-xs 2xl:text-sm font-medium cursor-pointer transition-colors ${
                      isActive
                        ? "bg-primary text-white lg:bg-[#EAEAF8] lg:text-black lg:border-l-[3px] lg:border-primary"
                        : "bg-gray-100 text-muted hover:bg-gray-200 lg:bg-transparent lg:hover:bg-gray-100"
                    }`}
                  >
                    {cat.label}{" "}
                    <span className={isActive ? "text-white/80 lg:text-muted" : "text-muted"}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Sidebar note */}
            <div className="mt-4 lg:mt-6 lg:pl-1">
              <p className="text-xs 2xl:text-sm text-gray-500  m-0">
                We are always seeking talented people. In case you cannot find your desired position
                here, please send us your LinkedIn profile and give us your contact information. We
                will be in touch.
              </p>
              <button className="mt-3 lg:mt-5 flex items-center border border-gray-200 gap-3 rounded-md bg-[#EAEAF8] pl-3 pr-1 py-1 text-[12px] text-gray-700">
            Share Your LinkedIn Profile

            <span className="flex h-6 w-6  items-center justify-center rounded-md bg-primary text-white">
              <ArrowDown size={16} />
            </span>
          </button>
            </div>
          </aside>

          {/* ── Job listings ── */}
          <div className="flex-1 flex flex-col gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <p className="text-sm text-muted">
                No open positions in this category right now.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}