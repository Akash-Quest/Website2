"use client";
import Image from "next/image";

type Tool = {
  icons: string[];
  title: string;
  description: string;
};

interface EndtoEndProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  tools: Tool[];
}

export default function EndtoEnd({
  eyebrow,
  heading,
  description,
  tools,
}: EndtoEndProps) {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        {/* Header */}
        <div className="relative text-center">
          <p className="text-sm 2xl:text-base text-primary mb-2">
          {eyebrow}
        </p>
          <h2 className="font-bold">
            {heading}
          </h2>
          <p className="mx-auto mt-2 lg:max-w-[50%] leading-tight text-muted text-sm">
            {description}
          </p>
          </div>
          {/* gride service */}
          <div className="mt-10 grid grid-cols-2 sm:gap-2 gap-2 2xl:gap-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(({ icons, title, description }, idx) => (
            <div
              key={title}
              className={`text-left pl-4 ${idx % 2 !== 0 ? "sm:border-l sm:border-black/30" : ""} ${idx % 4 !== 0 ? "lg:border-l lg:border-black/30" : "lg:border-l-0"}`}
            >
              <div className="flex items-center gap-2">
  {icons.map((icon) => (
    <span
      key={icon}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background"
    >
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        unoptimized
        className="h-5 w-5 object-contain"
      />
    </span>
  ))}
</div>
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