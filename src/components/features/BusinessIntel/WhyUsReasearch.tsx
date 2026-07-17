import Image from "next/image";

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
              <p className="body-sm text-primary mb-2">{eyebrow}</p>
              <h2 className="font-bold">
              {heading}
            </h2>

            </div>

            {/* Content: image + capability list */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
              {/* Left: image */}
              <div className="">
                <p className="mt-3 text-sm 2xl:text-base text-muted">
              {intro}
            </p>

            <ul className="mt-4 space-y-1">
              {advantages.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-xs 2xl:text-sm text-neutral-800"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black item-middle" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm 2xl:text-base  text-muted">
              {outro}
            </p>
              </div>

              {/* Right: capability list */}
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


            </div>
          </div>
        </section>
  );
}
