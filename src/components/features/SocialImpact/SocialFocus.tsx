import {
  HeartPulse,
  Sprout,
  Leaf,
  Mountain,
  Milk,
  ArrowUpRight,
} from "lucide-react";

const focusAreas = [
  {
    icon: HeartPulse,
    title: "Public Health",
    description:
      "We work with governments, donors, and foundations to strengthen health systems, scale primary care, and drive behavioral change. From maternal health to digital health innovation, our solutions improve lives and resilience.",
  },
  {
    icon: Sprout,
    title: "Agriculture & Rural Livelihoods",
    description:
      "SkyQuest supports smallholder farmers, FPOs, and rural ecosystems through sustainable agriculture practices, financial inclusion, and access to markets and agri-tech.",
  },
  {
    icon: Leaf,
    title: "Sustainability, Environment & ESG",
    description:
      "We help organizations integrate sustainability and ESG practices into their strategy and operations through clean energy, resource management, and responsible growth initiatives aligned with global climate goals.",
  },
  {
    icon: Mountain,
    title: "Climate Resilience",
    description:
      "Our work in climate adaptation includes climate-risk assessments, disaster preparedness, and resilient infrastructure especially for vulnerable geographies and low-income populations.",
  },
  {
    icon: Milk,
    title: "Animal Husbandry & Dairying",
    description:
      "Transformation in animal husbandry and dairying by combining scalable innovations with sustainable practices. Our approach focuses on improving productivity, animal health, and empowering farmers with modern solutions.",
  },
];

export default function SocialFocus() {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <h2 className="font-bold">
            Our Focus <em className="font-semibold">Areas</em>
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
            SkyQuest&apos;s Social Sector Consulting practice operates at the
            intersection of people, policy, and planet. We focus on domains
            that drive inclusive development and long-term sustainability
            across India and Africa.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`
                flex h-full flex-col px-5 py-2

                sm:border-r sm:border-neutral-200
                ${index % 2 === 1 ? "sm:border-r-0" : ""}

                lg:border-r lg:border-neutral-200
                ${index % 3 === 2 ? "lg:border-r-0" : ""}
              `}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" strokeWidth={1.75} />
              </span>

              <h3 className="mt-2 text-sm 2xl:text-lg font-semibold text-neutral-900">
                {title}
              </h3>

              <p className="mt-1.5 flex-1 text-sm 2xl:text-base text-muted">
                {description}
              </p>

              <button className="group/learn self-end inline-flex items-center pt-2 text-xs sm:text-sm font-semibold text-primary transition-colors duration-300 cursor-pointer">
                Learn More

                <span className="relative ml-1 h-3.5 w-3.5 overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-3 group-hover/learn:-translate-y-3 group-hover/learn:opacity-0">
                    <ArrowUpRight size={14} />
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center -translate-x-3 translate-y-3 opacity-0 transition-all duration-300 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn:translate-x-0 group-hover/learn:translate-y-0 group-hover/learn:opacity-100">
                    <ArrowUpRight size={14} />
                  </span>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}