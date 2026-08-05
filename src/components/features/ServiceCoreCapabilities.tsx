import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

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
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="text-body-sm text-primary font-medium "
          >
            {eyebrow}
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-bold">
            {heading}
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="mx-auto  lg:max-w-[60%]  text-muted"
          >
            {description}
          </Reveal>
        </div>

        {/* Content: image + capability list */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
          {/* Left: image */}
          <Reveal
            variant="left"
            className="relative min-h-[342px] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </Reveal>

          {/* Right: capability list */}
          <Reveal variant="right">
            <ul className="flex h-full flex-col justify-between gap-3">
              {capabilities.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex items-stretch gap-4 ">
                  <span className="flex h-18 w-18 shrink-0 self-center items-center justify-center rounded-xl bg-white text-primary md:h-18 md:w-18">
                    <Icon size={36} color="currentColor" variant="Linear" />
                  </span>
                  <div>
                    <h3 className="font-medium text-neutral-900 text-body-lg">
                      {title}
                    </h3>
                    <p className=" text-muted text-body-sm ">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
