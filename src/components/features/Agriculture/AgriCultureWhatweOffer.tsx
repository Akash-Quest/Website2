import {
  Flag,
  PawPrint,
  Network,
  Users,
  Workflow,
  CircleDollarSign,
  Waves,
  Warehouse,
  Utensils,
  BarChart3,
} from "lucide-react";

const offerings = [
  {
    icon: Flag,
    title: "Agriculture Sector Strategy & Policy Advisory",
    description:
      "Developing agricultural development strategies, food security frameworks, investment plans, and sector transformation roadmaps.",
  },
  {
    icon: PawPrint,
    title: "Livestock Development & Animal Health Systems",
    description:
      "Strengthening livestock productivity, disease surveillance, animal health programs, digital livestock management, and veterinary service delivery.",
  },
  {
    icon: Network,
    title: "Digital Agriculture & Agri-Tech Advisory",
    description:
      "Designing and implementing AI-powered advisory platforms, geospatial systems, precision agriculture solutions, and digital farming ecosystems.",
  },
  {
    icon: Users,
    title: "Farmer Producer Organizations (FPOs) & Cooperative Development",
    description:
      "Supporting aggregation models, governance systems, digital platforms, market integration, and institutional strengthening for producer organizations.",
  },
  {
    icon: Workflow,
    title: "Agricultural Value Chain Development",
    description:
      "Enhancing productivity, processing, storage, logistics, traceability, and market linkages across key commodities and value chains.",
  },
  {
    icon: CircleDollarSign,
    title: "Agri-Finance & Financial Inclusion",
    description:
      "Supporting agricultural lending, embedded finance, insurance models, rural credit systems, and investment mobilization.",
  },
  {
    icon: Waves,
    title: "Climate-Smart Agriculture & Sustainability",
    description:
      "Designing climate adaptation strategies, regenerative agriculture programs, water management initiatives, and carbon-smart farming models.",
  },
  {
    icon: Warehouse,
    title: "Agri Infrastructure & Rural Development",
    description:
      "Supporting investments in warehousing, cold chains, processing infrastructure, rural logistics, and agricultural ecosystems.",
  },
  {
    icon: Utensils,
    title: "Food Systems & Nutrition Programs",
    description:
      "Designing integrated food systems approaches that improve food security, nutrition outcomes, and sustainable agricultural development.",
  },
  {
    icon: BarChart3,
    title: "Monitoring, Evaluation & Impact Assessment",
    description:
      "Measuring agricultural productivity, livelihood outcomes, climate resilience, program effectiveness, and economic impact.",
  },
];

const SM_COLUMNS = 3;
const LG_COLUMNS = 4;

const SM_COL_START: Record<number, string> = {
  1: "sm:col-start-1",
  2: "sm:col-start-2",
  3: "sm:col-start-3",
};

const LG_COL_START: Record<number, string> = {
  1: "lg:col-start-1",
  2: "lg:col-start-2",
  3: "lg:col-start-3",
  4: "lg:col-start-4",
};

function centeringClass(
  index: number,
  total: number,
  columns: number,
  colStartClasses: Record<number, string>
) {
  const remainder = total % columns;
  if (remainder === 0) return "";

  const lastRowStart = total - remainder;
  if (index < lastRowStart) return "";

  const offset = Math.floor((columns - remainder) / 2);
  const column = offset + (index - lastRowStart) + 1;
  return colStartClasses[column] ?? "";
}

export default function AgriCultureWhatWeOffer() {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
            What We Offer
          </p>
          <h2 className="font-bold">
            End-to-End Agriculture &<br />
            Livestock <em className="font-semibold">Consulting Services</em>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
            We help governments, agribusinesses, investors, development
            institutions, and farmer organizations design, implement, and
            scale agricultural transformation initiatives.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 gap-4">
  {offerings.map(({ icon: Icon, title, description }, index) => (
    <div
      key={title}
      className={`
        border-neutral-200 pr-4

        border-r even:border-r-0

        sm:border-r
        sm:[&:nth-child(2n)]:border-r
        sm:[&:nth-child(3n)]:border-r-0

        lg:border-r
        lg:[&:nth-child(3n)]:border-r
        lg:[&:nth-child(4n)]:border-r-0

        last:!border-r-0

        ${centeringClass(index, offerings.length, SM_COLUMNS, SM_COL_START)}
        ${centeringClass(index, offerings.length, LG_COLUMNS, LG_COL_START)}
      `}
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
