import Image from "next/image";

type Capability = {
  icon: React.ElementType;
  title: string;
  description: string;
};

interface ServiceCoreCapabilitiesProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  capabilities: Capability[];
}

export default function ServiceCoreCapabilities({
  eyebrow,
  heading,
  description,
  imageSrc,
  imageAlt,
  capabilities,
}: ServiceCoreCapabilitiesProps) {
  return (
    <section className="w-full bg-background">
      <div className="page-container pt-0">
        {/* Header */}
        <div className="relative text-center">
          <p className="body-sm text-primary mb-2">{eyebrow}</p>
          <h2 className="font-bold">{heading}</h2>
          <p className="mx-auto mt-2 lg:max-w-[75%] leading-tight text-muted text-sm">
            {description}
          </p>
        </div>

        {/* Content: image + capability list */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
          {/* Left: image */}
          <div className="relative min-h-[342px] w-full overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>

          {/* Right: capability list */}
          <div className="">
            <ul className="flex h-full flex-col justify-between gap-3">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-stretch gap-4 ">
                  <span className="flex h-12 w-12 shrink-0 self-center items-center justify-center rounded-xl bg-white text-primary md:h-14 md:w-14">
                    <Icon className="md:h-8 md:w-8" strokeWidth={1.2} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-base 2xl:text-lg text-neutral-900">
                      {title}
                    </h3>
                    <p className=" text-muted text-xs  ">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
