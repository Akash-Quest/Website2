"use client";

import { ArrowDown, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

interface JobSection {
  heading?: string;
  items: string[];
}

interface JobDetails {
  tagline?: string;
  meta?: { label: string; value: string }[];
  role?: string[];
  highlights?: string[];
  responsibilities?: JobSection[];
  requirementsIntro?: string;
  requirements?: JobSection[];
  offer?: string[];
}

interface Job {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  details?: JobDetails;
}

const CATEGORY_LABELS = [
  "All positions",
  "Consulting",
  "Engineering",
  "Product",
  "Design",
  "Operations",
  "Marketing",
];

const jobs: Job[] = [
  {
    id: 6,
    title: "Associate – Strategy Consulting",
    category: "Consulting",
    tags: ["Ahmedabad · Onsite", "Full-time", "1+ Year"],
    description:
      "Take on unstructured client problems and build the answer from first principles: the research, the model, and the recommendation. Work across sectors, present directly to senior leadership, and stay through implementation.",
    details: {
      tagline: "Solve real problems. See your recommendations built.",
      meta: [
        { label: "Experience", value: "1+ Year" },
        { label: "Location", value: "Ahmedabad · Onsite" },
        { label: "Function", value: "Strategy Consulting & Advisory" },
        {
          label: "Reporting To",
          value: "You will work directly with senior leadership on live engagements.",
        },
        { label: "Employment Type", value: "Full-time" },
      ],
      role: [
        "SkyQuest Technology Consulting is one of the fastest-growing global organisations in market intelligence, innovation management, and commercialisation. For over 20 years, we have bridged the gap between good ideas and the markets, networks, and partners that turn them into something real.",
        "This role sits at the centre of that work. You will take on unstructured problems: a client entering an unfamiliar market, a programme that is underperforming, a decision that requires evidence. You will build the answer from first principles: the research, the model, and the recommendation that follows.",
        "It is a broad brief, and deliberately so. You will move across sectors, engagement types, and stakeholder environments, and you will have far more ownership than the years on your CV would usually allow.",
      ],
      highlights: [
        "You will not sit in one industry. You will work across multiple sectors and problem types in a single year.",
        "You will present to the people who decide: senior leadership, government partners, and clients, not through an intermediary layer.",
        "Your work does not stop at the recommendation. You will stay through implementation and see what actually worked.",
        "Small teams, high visibility. You will receive direct ownership and visibility for what you build.",
      ],
      responsibilities: [
        {
          heading: "Structure the problem",
          items: [
            "Turn ambiguous client challenges into clear hypotheses, work plans, and measurable outcomes",
            "Conduct due diligence, feasibility studies, and opportunity assessments",
            "Translate strategic direction into execution roadmaps that teams can follow and implement",
          ],
        },
        {
          heading: "Build the evidence",
          items: [
            "Conduct primary and secondary research across markets, industries, and competitive landscapes",
            "Build financial models, business cases, and scenario analyses",
            "Benchmark performance against industry standards and comparable organisations",
            "Synthesise large volumes of information into conclusions that withstand challenge",
          ],
        },
        {
          heading: "Own the delivery",
          items: [
            "Run engagements end to end, from scoping through to final recommendations",
            "Manage your workstreams against quality standards, timelines, and client expectations",
            "Build genuine working relationships with client teams and external partners",
            "Contribute to engagement planning, resourcing, and risk identification",
          ],
        },
        {
          heading: "Make the data speak",
          items: [
            "Build dashboards, MIS reports, and performance trackers across live engagements",
            "Identify trends, gaps, risks, and improvement opportunities before they surface elsewhere",
            "Support decisions through data analysis, scenario planning, and forecasting",
          ],
        },
        {
          heading: "Carry it into implementation",
          items: [
            "Support the design and rollout of client programmes and internal initiatives",
            "Develop action plans, budgets, and resource schedules",
            "Track KPIs and milestones, and drive priorities through to closure",
            "Design and manage monitoring and evaluation frameworks",
          ],
        },
        {
          heading: "Win the next piece of work",
          items: [
            "Evaluate new opportunities, partnerships, and expansion areas",
            "Write proposals, concept notes, pitch decks, and capability documents",
            "Track the pipeline, engagement progress, and conversion",
          ],
        },
        {
          heading: "Communicate it well",
          items: [
            "Build presentations that engage senior audiences",
            "Make complex ideas accessible to non-specialist audiences",
            "Prepare briefing notes and talking points for senior leadership",
            "Engage clients, government bodies, financial institutions, and industry partners",
          ],
        },
      ],
      requirementsIntro:
        "We care more about how you think than where you have worked. If you read the list below and recognise yourself in most of it, we would like to hear from you.",
      requirements: [
        {
          heading: "Experience",
          items: [
            "1+ years in strategy or management consulting, analytics, business operations, or a comparable advisory role",
            "Exposure to both strategic advisory work and hands-on implementation",
            "Experience with government, multilateral, or large enterprise clients is a plus",
            "Graduates from any discipline are welcome to apply; a postgraduate qualification is advantageous but not required",
          ],
        },
        {
          heading: "How you work",
          items: [
            "You find the root cause rather than the symptom and propose something workable",
            "You connect data, business context, and long-term goals while maintaining a clear view of all three",
            "You are comfortable when the brief is unclear and the path is yours to define",
            "You take work from idea to implementation and remain accountable for the outcomes",
            "You measure your work and hold yourself accountable",
          ],
        },
        {
          heading: "Your toolkit",
          items: [
            "Strong Excel and Google Sheets: advanced formulas, pivots, and modelling",
            "Proficiency in PowerPoint for executive-ready deliverables",
            "Familiarity with BI tools (Power BI, Tableau, Looker) is welcome",
            "Comfort with analysing large datasets and presenting what matters",
          ],
        },
        {
          heading: "How you communicate",
          items: [
            "Clear, structured writing for proposals, briefs, and strategy documents",
            "Confident presentation and storytelling skills in front of senior audiences",
            "Strong stakeholder-management skills across cultures and organisational levels",
            "Fluency in English; working proficiency in Hindi",
            "Ability to handle sensitive information with discretion",
          ],
        },
      ],
      offer: [
        "Exposure to a wide range of sectors, clients, and problem types: a strong way to build consulting experience early",
        "Direct access to senior leadership, clients, and external partners",
        "A platform to shape strategy, influence real decisions, and observe the impact of those decisions",
        "A broad, high-ownership mandate with visible impact on live engagements",
      ],
    },
  },
  {
    id: 1,
    title: "Full-Stack Developers",
    category: "Engineering",
    tags: [ "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 2,
    title: "Application Developer (react native)",
    category: "Engineering",
    tags: ["Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 3,
    title: "Senior Product Designer",
    category: "Design",
    tags: ["Hybrid",  "Full-time"],
    description:
      "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
  {
    id: 4,
    title: "Product Manager",
    category: "Product",
    tags: ["Remote", "Full-time"],
    description:
      "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
  },
  {
    id: 5,
    title: "Product Owner",
    category: "Product",
    tags: [ "Full-time"],
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

function JobCard({
  job,
  index,
  onApply,
}: {
  job: Job;
  index: number;
  onApply: (job: Job) => void;
}) {
  return (
    <Reveal
      variant="upSm"
      custom={index}
      className="bg-[#F7F5F1] rounded-xl p-4 flex flex-col gap-2"
    >
      <h3 className=" font-semibold text-[#03030F] text-body-xl">
        {job.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {job.tags.map((tag) => (
          <TagPill key={tag} label={tag} />
        ))}
      </div>

      <p className="  text-body-sm">
        {job.description}
      </p>

      <div className="flex justify-end ">
       <Button onClick={() => onApply(job)}>
        Apply Now</ Button >
      </div>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-muted text-body-sm leading-relaxed">
          <span className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
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
          <SectionHeading>What You&apos;ll Do</SectionHeading>
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
    </>
  );
}

function JobDetailsModal({ job, onClose }: { job: Job; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${job.details ? "max-w-3xl" : "max-w-lg"} max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-background"
        >
          <X size={18} />
        </button>

        {job.details && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            We&apos;re Hiring
          </p>
        )}

        <h3 className="mt-1 font-semibold text-[#03030F] text-body-xl pr-8">
          {job.title}
        </h3>

        {job.details?.tagline && (
          <p className="mt-1 text-muted italic">{job.details.tagline}</p>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>

        <JobDescription job={job} />

        <div className="sticky -bottom-6 sm:-bottom-8 -mx-6 sm:-mx-8 mt-6 flex justify-end border-t border-gray-100 bg-white px-6 sm:px-8 py-4">
          <Button href={`/careers?job=${encodeURIComponent(job.title)}#apply`} onClick={onClose}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function OpenPositions() {
  const [activeCategory, setActiveCategory] = useState("All positions");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

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
                <JobCard key={job.id} job={job} index={index} onApply={setSelectedJob} />
              ))
            ) : (
              <p className=" text-muted">
                No open positions in this category right now.
              </p>
            )}
          </div>
        </div>
      </section>

      {selectedJob && (
        <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}