import { ArrowUp } from "iconsax-react";
import Reveal from "@/components/ui/Reveal";

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
          <Reveal as="h2" variant="upSm" custom={0} className="font-semibold">
            {heading}
          </Reveal>

          <Reveal
            as="p"
            variant="upSm"
            custom={1}
            className="mx-auto max-w-2xl text-body-sm text-muted"
          >
            {description}
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              variant="upSm"
              custom={index}
              className={`
                flex h-full flex-col px-5 py-2

                sm:border-r sm:border-neutral-200
                ${index % 2 === 1 ? "sm:border-r-0" : ""}

                lg:border-r lg:border-neutral-200
                ${index % 3 === 2 ? "lg:border-r-0" : ""}
              `}
            >
              <span className="flex h-10 w-10 2xl:h-12  2xl:w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4 2xl:h-6 2xl:w-6" strokeWidth={1.75} color="currentColor" variant="Linear" />
              </span>

              <h3 className="text-body-lg font-semibold text-neutral-900 mt-2">
                {title}
              </h3>

              <p className="mt-1.5 flex-1  text-muted">
                {description}
              </p>

              
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}