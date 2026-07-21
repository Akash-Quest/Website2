type OfferingItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

interface WhatWeOfferGridProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  items: OfferingItem[];
}

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
  colStartClasses: Record<number, string>,
  fallback = ""
) {
  const remainder = total % columns;
  if (remainder === 0 || remainder === 1) return fallback;

  const lastRowStart = total - remainder;
  if (index < lastRowStart) return fallback;

  const offset = Math.floor((columns - remainder) / 2);
  const column = offset + (index - lastRowStart) + 1;
  return colStartClasses[column] ?? fallback;
}

export default function WhatWeOfferGrid({
  eyebrow,
  heading,
  description,
  items,
}: WhatWeOfferGridProps) {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        <div className="text-center">
          <p className="mb-2  font-medium text-primary">
            {eyebrow}
          </p>
          <h2 className="font-bold">{heading}</h2>
          <p className="mx-auto mt-2 max-w-2xl tracking-wide leading-snug text-muted">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-4 gap-2 gap-2 2xl:gap-8">
          {items.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className={`
                border-black/30 pr-4

                border-r even:border-r-0

                sm:border-r
                sm:[&:nth-child(2n)]:border-r
                sm:[&:nth-child(3n)]:border-r-0

                lg:border-r
                lg:[&:nth-child(3n)]:border-r
                lg:[&:nth-child(4n)]:border-r-0

                last:!border-r-0

                ${centeringClass(index, items.length, SM_COLUMNS, SM_COL_START)}
                ${centeringClass(index, items.length, LG_COLUMNS, LG_COL_START, "lg:col-start-auto")}
              `}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-4 w-4" strokeWidth={1.75} color="currentColor" variant="Linear" />
              </span>

              <h3 className="mt-2 font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-1.5  leading-snug text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
