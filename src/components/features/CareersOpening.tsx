"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { categories, jobs, type Job, type JobSection } from "@/Constants/openings";


function TagPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 text-xs text-gray-500 font-medium bg-white whitespace-nowrap"
    >
      {label}
    </span>
  );
}

function JobCard({
  job,
  index,
  isOpen,
  onToggle,
}: {
  job: Job;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const router = useRouter();
  const panelId = `job-panel-${job.id}`;
  const applyHref = `/careers?job=${encodeURIComponent(job.title)}#apply`;

  const applyButton = (
    <Button
      href={applyHref}
      onClick={(e) => {
        // Put the job in the URL (the form prefills from it) and scroll to the form.
        e.preventDefault();
        router.replace(applyHref, { scroll: false });
        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      Apply Now
    </Button>
  );

  return (
    <Reveal variant="upSm" custom={index} className="bg-[#F7F5F1] rounded-xl">
      {/* Header: title, tags and JD summary on the left; Read more toggle on the right */}
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0 flex flex-col gap-2">
            <h3 className="font-semibold text-[#03030F] text-body-xl">{job.title}</h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Jobs without full details have nothing more to show than the summary */}
          {job.details && (
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1 font-medium text-primary text-body-sm transition-colors hover:bg-white"
            >
              {isOpen ? "Read less" : "Read more"}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>

        <p className="line-clamp-2 text-muted text-body-sm">{job.description}</p>

        {/* Hidden while open — the expanded panel has its own Apply Now at the end */}
        {!isOpen && <div className="flex justify-end">{applyButton}</div>}
      </div>

      {job.details && (
        // Details: grid-rows 0fr → 1fr animates the height without measuring it
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden" inert={!isOpen}>
            <div className="border-t border-gray-200 px-4 pb-4">
              {job.details.tagline && (
                <p className="mt-4 text-muted italic">{job.details.tagline}</p>
              )}

              <JobDescription job={job} />

              <div className="mt-6 flex justify-end">{applyButton}</div>
            </div>
          </div>
        </div>
      )}
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-muted text-body-sm leading-relaxed">
          <span className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#03030F]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="mt-6 mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
      {children}
    </h4>
  );
}

function GroupedList({ groups }: { groups: JobSection[] }) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {groups.map((group, i) => (
        <div key={group.heading ?? i}>
          {group.heading && (
            <p className="font-semibold text-[#03030F] text-body-sm">{group.heading}</p>
          )}
          {group.intro && <p className="text-muted italic text-body-sm">{group.intro}</p>}
          <BulletList items={group.items} />
        </div>
      ))}
    </div>
  );
}

function JobDescription({ job }: { job: Job }) {
  const d = job.details;
  if (!d) {
    return (
      <>
        <SectionHeading>Job Description</SectionHeading>
        <p className="mt-1 text-muted leading-relaxed">{job.description}</p>
      </>
    );
  }

  return (
    <>
      {d.meta && (
        <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 rounded-xl bg-[#F7F5F1] p-4">
          {d.meta.map((m) => (
            <div
              key={m.label}
              className={m.value.length > 40 ? "sm:col-span-2" : undefined}
            >
              <dt className="text-xs text-gray-500">{m.label}</dt>
              <dd className="text-body-sm font-medium text-[#03030F]">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {d.role && (
        <>
          <SectionHeading>The Role</SectionHeading>
          <div className="flex flex-col gap-3">
            {d.role.map((p) => (
              <p key={p} className="text-muted text-body-sm leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </>
      )}

      {d.highlights && (
        <>
          <SectionHeading>What Makes This Role Different</SectionHeading>
          <BulletList items={d.highlights} />
        </>
      )}

      {d.responsibilities && (
        <>
          <SectionHeading>{d.responsibilitiesTitle ?? "What You'll Do"}</SectionHeading>
          {d.responsibilitiesIntro && (
            <p className="text-muted text-body-sm leading-relaxed">{d.responsibilitiesIntro}</p>
          )}
          <GroupedList groups={d.responsibilities} />
        </>
      )}

      {d.requirements && (
        <>
          <SectionHeading>Who We&apos;re Looking For</SectionHeading>
          {d.requirementsIntro && (
            <p className="text-muted text-body-sm leading-relaxed">{d.requirementsIntro}</p>
          )}
          <GroupedList groups={d.requirements} />
        </>
      )}

      {d.offer && (
        <>
          <SectionHeading>What We Offer</SectionHeading>
          <BulletList items={d.offer} />
        </>
      )}

      {d.extraSections?.map((section) => (
        <div key={section.title}>
          <SectionHeading>{section.title}</SectionHeading>
          {section.intro && (
            <p className="text-muted text-body-sm leading-relaxed">{section.intro}</p>
          )}
          <BulletList items={section.items} />
        </div>
      ))}
    </>
  );
}

export default function OpenPositions() {
  const [activeCategory, setActiveCategory] = useState("All positions");
  // One job open at a time; opening another closes the previous one.
  const [openJobId, setOpenJobId] = useState<number | null>(null);

  const filteredJobs =
    activeCategory === "All positions"
      ? jobs
      : jobs.filter((job) => job.category === activeCategory);

  return (
    <div className="bg-white">
      <section className="mx-auto page-container ">
        {/* Heading */}
        <Reveal as="h2" variant="upSm" className="text-start font-semibold mb-5 md:mb-10">
          We have {jobs.length} open <em className="font-medium">Positions now!</em>
        </Reveal>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          {/* ── Sidebar ── */}
          <Reveal variant="left" className="w-full lg:w-52 flex-shrink-0">
            <div className="flex flex-row gap-1.5 overflow-x-auto scrollbar-hide pb-1 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveCategory(cat.label)}
                    className={`flex-shrink-0 whitespace-nowrap text-left lg:w-full px-3 py-2 rounded-full lg:rounded-r-lg lg:rounded-l-none  font-medium cursor-pointer transition-colors ${
                      isActive
                        ? "bg-primary text-white lg:bg-[#EAEAF8] lg:text-black lg:border-l-[3px] lg:border-primary text-body-lg"
                        : "bg-gray-100 text-muted hover:bg-gray-200 lg:bg-transparent lg:hover:bg-gray-100 text-body-sm"
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
              <p className=" text-gray-500  m-0 text-body-sm">
                We are always seeking talented people. In case you cannot find your desired position
                here, please send us your LinkedIn profile and give us your contact information. We
                will be in touch.
              </p>
              
            </div>
          </Reveal>

          {/* ── Job listings ── */}
          <div className="flex-1 flex flex-col gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={index}
                  isOpen={openJobId === job.id}
                  onToggle={() => setOpenJobId((cur) => (cur === job.id ? null : job.id))}
                />
              ))
            ) : (
              <p className=" text-muted">
                No open positions in this category right now.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}