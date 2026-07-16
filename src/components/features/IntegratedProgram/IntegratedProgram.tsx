import {
  BriefcaseBusiness,
  ClipboardList,
  FolderKanban,
  Users,
  HandCoins,
  RefreshCcw,
  LineChart,
  BarChart3,
  ShieldCheck,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const services = [
  {
    icon: BriefcaseBusiness,
    title: "Integrated Program Management Solutions",
    description:
      "Providing end-to-end program oversight, governance, coordination, and execution support to ensure initiatives deliver measurable outcomes efficiently.",
  },
  {
    icon: ClipboardList,
    title: "Program Design & Implementation Support",
    description:
      "Designing practical implementation frameworks, delivery models, and execution plans that translate strategy into sustainable results.",
  },
  {
    icon: FolderKanban,
    title: "Program Management Office (PMO) Services",
    description:
      "Establishing governance structures, performance tracking systems, and reporting mechanisms to improve program accountability and delivery.",
  },
  {
    icon: Users,
    title: "Multi-Stakeholder Program Coordination",
    description:
      "Aligning governments, donors, partners, communities, and private sector stakeholders around shared objectives and outcomes.",
  },
  {
    icon: HandCoins,
    title: "Donor & Development Program Management",
    description:
      "Managing complex donor-funded initiatives through effective planning, coordination, compliance, monitoring, and stakeholder engagement processes.",
  },
  {
    icon: RefreshCcw,
    title: "Transformation Program Management",
    description:
      "Leading large-scale transformation initiatives with structured governance, risk management, and execution support across organizations.",
  },
  {
    icon: LineChart,
    title: "Monitoring, Evaluation & Learning (MEL)",
    description:
      "Building evidence-based monitoring and learning systems that measure progress, improve performance, and strengthen decision-making.",
  },
  {
    icon: BarChart3,
    title: "Impact Measurement & Reporting",
    description:
      "Developing frameworks that quantify outcomes, demonstrate value creation, and communicate impact to stakeholders effectively.",
  },
  {
    icon: ShieldCheck,
    title: "Risk, Governance & Compliance Management",
    description:
      "Strengthening governance, managing risks proactively, and ensuring regulatory compliance across complex programs and initiatives.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building & Institutional Strengthening",
    description:
      "Enhancing organizational capabilities, leadership effectiveness, and institutional systems to improve long-term program sustainability.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Management & Learning Systems",
    description:
      "Capturing insights, documenting lessons learned, and enabling continuous knowledge sharing across programs and stakeholders.",
  },
];
export default function IntegratedProgramWeOffer() {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
            What We Offer
          </p>
          <h2 className="font-bold">
            End-to-End Public Sector
            <br />
            <em className="font-semibold">Advisory Services</em>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
            We help governments and development institutions navigate complex
            challenges through integrated advisory, implementation support,
            and institutional transformation services.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 gap-2">
  {services.map(({ icon: Icon, title, description }) => (
    <div
      key={title}
      className="
        border-neutral-200 pr-4

        border-r even:border-r-0

        sm:border-r
        sm:[&:nth-child(2n)]:border-r
        sm:[&:nth-child(3n)]:border-r-0

        lg:border-r
        lg:[&:nth-child(3n)]:border-r
        lg:[&:nth-child(4n)]:border-r-0

        last:!border-r-0
      "
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>

      <h3 className="mt-2 sm:text-sm 2xl:text-lg font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mt-1.5 sm:text-sm 2xl:text-base text-muted">
        {description}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
