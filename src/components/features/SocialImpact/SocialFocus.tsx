import { ArrowUpRight } from "lucide-react";

type FocusArea = {
  icon: React.ElementType;
  title: string;
  description: string;
};

interface SocialFocusProps {
  heading: React.ReactNode;
  description: string;
  focusAreas: FocusArea[];
}

export default function SocialFocus({
  heading,
  description,
  focusAreas,
}: SocialFocusProps) {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <h2 className="font-bold">
            {heading}
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
            {description}
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
                <Icon className="h-4 w-4" strokeWidth={1.75} color="currentColor" variant="Linear" />
              </span>

              <h3 className="mt-2 font-semibold text-neutral-900">
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