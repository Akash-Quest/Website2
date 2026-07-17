type Industry = {
  icon: React.ElementType;
  label: string;
};

interface IndustriesWeServeProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  industries: Industry[];
}

export default function IndustriesWeServe({
  eyebrow,
  heading,
  description,
  industries,
}: IndustriesWeServeProps) {
  return (
    <section className="w-full bg-background">
      <div className="page-container">
        <div className="text-center">
          <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
            {eyebrow}
          </p>
          <h2 className="font-bold">
            {heading}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-start gap-2 rounded-xl bg-white px-2 py-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
                <Icon className="h-4 w-4" strokeWidth={1.75}  color="currentColor" variant="TwoTone"/>
              </span>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
