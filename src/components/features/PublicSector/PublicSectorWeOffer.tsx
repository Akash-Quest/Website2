import {
  Flag,
  Landmark,
  Globe,
  Users,
  TrendingUp,
  Workflow,
  BookOpenText,
  BarChart3,
  CircleDollarSign,
} from "lucide-react";

const offerings = [
  {
    icon: Flag,
    title: "Public Policy & Sector Strategy",
    description:
      "Policy development, sector reform strategies, regulatory frameworks, and long-term planning.",
  },
  {
    icon: Landmark,
    title: "Governance & Institutional Reform",
    description:
      "Organizational transformation, institutional diagnostics, governance frameworks, and public sector modernization.",
  },
  {
    icon: Globe,
    title: "Digital Government & Smart Governance",
    description:
      "Citizen service platforms, digital government systems, public financial management modernization, and digital public infrastructure.",
  },
  {
    icon: Users,
    title: "Social Protection & Citizen Service Delivery",
    description:
      "Designing and strengthening social protection systems, G2P programs, welfare delivery, and inclusion initiatives.",
  },
  {
    icon: TrendingUp,
    title: "Economic Development & Investment Promotion",
    description:
      "Supporting investment strategies, economic diversification programs, industrial policy, and competitiveness.",
  },
  {
    icon: Workflow,
    title: "Program Management & PMU Support",
    description:
      "Providing program assurance, PMO services, implementation support, monitoring, and performance management.",
  },
  {
    icon: BookOpenText,
    title: "Capacity Building & Leadership Development",
    description:
      "Training, institutional development, change management, and capability-building programs for public sector organizations.",
  },
  {
    icon: BarChart3,
    title: "Monitoring, Evaluation & Impact Assessment",
    description:
      "Performance measurement, program evaluation, policy assessment, and evidence-based decision making.",
  },
  {
    icon: CircleDollarSign,
    title: "Development Finance & Donor Advisory",
    description:
      "Supporting donor-funded programs, development financing, grant management, partnerships with multilateral organizations, and fund mobilization.",
  },
];

export default function PublicSectorWeOffer() {
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
  {offerings.map(({ icon: Icon, title, description }) => (
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
