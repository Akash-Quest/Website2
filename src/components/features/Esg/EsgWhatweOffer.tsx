import {
  ClipboardCheck,
  FileSearch,
  FileText,
  BadgeDollarSign,
  Leaf,
  ShieldCheck,
  Landmark,
  Link2,
  ArrowUpRight,
} from "lucide-react";

const focusAreas = [
  {
    icon: ClipboardCheck,
    title: "ESG Diagnostics & Maturity Assessments",
    description:
      "Evaluating ESG performance, identifying gaps, benchmarking peers, and prioritizing sustainability improvement opportunities effectively.",
  },
  {
    icon: FileSearch,
    title: "Materiality Assessments & ESG Roadmaps",
    description:
      "Identifying priority ESG issues and developing practical roadmaps aligned with stakeholder expectations.",
  },
  {
    icon: FileText,
    title: "Sustainability Reporting & Disclosure",
    description:
      "Supporting transparent sustainability reporting aligned with leading global frameworks, regulations, and investor requirements.",
  },
  {
    icon: BadgeDollarSign,
    title: "Carbon Footprint & GHG Assessments",
    description:
      "Measuring emissions, establishing baselines, and identifying reduction opportunities across organizational operations and value chains.",
  },
  {
    icon: Leaf,
    title: "Net-Zero & Decarbonization Roadmaps",
    description:
      "Developing transition pathways that reduce emissions while maintaining growth, resilience, and competitiveness.",
  },
  {
    icon: ShieldCheck,
    title: "ESG & Climate Risk & Vulnerability Assessments",
    description:
      "Assessing climate-related risks and vulnerabilities to strengthen resilience, preparedness, and long-term sustainability.",
  },
  {
    icon: Landmark,
    title: "Sustainable Finance & Green Investment Advisory",
    description:
      "Mobilizing sustainable capital through climate finance strategies, green investments, and funding readiness initiatives.",
  },
  {
    icon: Link2,
    title: "Supply Chain Sustainability & Responsible Sourcing",
    description:
      "Building transparent, resilient supply chains through responsible sourcing, supplier engagement, and ESG integration.",
  },
];

export default function EsgWhatWeOffer() {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <span className="text-sm font-semibold text-primary">
            What We Offer
          </span>

          <h2 className="mt-2 font-bold">
            Integrated Climate, Sustainability &{" "}
            <em className="font-semibold">ESG Solutions</em>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm 2xl:text-base text-muted">
            From climate strategy and ESG integration to sustainable finance and
            implementation, we help organizations create measurable
            environmental, social, and economic value.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`
                flex flex-col px-6 py-2

                sm:border-r sm:border-neutral-200
                ${index % 2 === 1 ? "sm:border-r-0" : ""}

                lg:border-r lg:border-neutral-200
                ${index % 4 === 3 ? "lg:border-r-0" : ""}
              `}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>

              <h3 className="mt-4 text-base font-semibold text-neutral-900">
                {title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {description}
              </p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}