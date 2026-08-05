import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

interface WhyUsResearchProps {
  eyebrow: string;
  heading: React.ReactNode;
  intro: React.ReactNode;
  advantages: string[];
  outro: string;
  imageSrc: string;
  imageAlt: string;
}

export default function WhyUsResearch({
  eyebrow,
  heading,
  intro,
  advantages,
  outro,
  imageSrc,
  imageAlt,
}: WhyUsResearchProps) {
  return (
    <section className="w-full bg-white">
          <div className="page-container">
            {/* Header */}
            <div className="relative text-center">
              <Reveal
                as="p"
                variant="upSm"
                custom={0}
                className="body-sm text-primary mb-2 body-text-sm font-medium"
              >
                {eyebrow}
              </Reveal>
              <Reveal as="h2" variant="upSm" custom={1} className="font-bold">
                {heading}
              </Reveal>
            </div>

            {/* Content: image + capability list */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
              {/* Left: image */}
              <Reveal variant="left">
                <p className="mt-3 tracing-wide leading-relaxed ">
              {intro}
            </p>

            <ul className="mt-2 space-y-1">
              {advantages.map((point) => (
                <li
                  key={point}
                  className="text-body-sm flex items-center gap-2.5 "
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted item-middle" />
                  <span >{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-2 tracing-wide leading-relaxed ">
              {outro}
            </p>
              </Reveal>

              {/* Right: capability list */}
              <Reveal
                variant="right"
                className="group relative min-h-[342px] w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  priority
                />
              </Reveal>


            </div>
          </div>
        </section>
  );
}
