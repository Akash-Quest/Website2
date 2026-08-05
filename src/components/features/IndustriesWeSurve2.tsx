import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const sectors = [
  {
    label: "Information Technology",
    image: "/service/BusinessIntel/scard1.jpg",
  },
  {
    label: "Health Care",
    image: "/service/BusinessIntel/scard2.jpg",
  },
  {
    label: "Materials",
    image: "/service/BusinessIntel/scard3.jpg",
  },
  {
    label: "Consumer Discretionary",
    image: "/service/BusinessIntel/scard4.jpg",
  },
  {
    label: "Consumer Staples",
    image: "/service/BusinessIntel/scard5.jpg",
  },
  {
    label: "Energy",
    image: "/service/BusinessIntel/scard6.jpg",
  },
  {
    label: "Utilities",
    image: "/service/BusinessIntel/scard7.jpg",
  },
  {
    label: "Industrials",
    image: "/service/BusinessIntel/scard8.jpg",
  },
  {
    label: "Real Estate",
    image: "/service/BusinessIntel/scard9.jpg",
  },
  {
    label: "Financials",
    image: "/service/BusinessIntel/scard10.jpg",
  },
  {
    label: "Communication Services",
    image: "/service/BusinessIntel/scard11.jpg",
  },
];

export default function IndustriesWeServe2() {
  return (
    <section className="w-full bg-background">
      <div className="page-container">
        <div className="text-center">
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="mb-1 text-body-sm font-medium text-primary"
          >
            Industries We Serve
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold">
            Deep Sector Expertise Across
            <br />
            High-<em className="font-semibold">Growth Markets</em>
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="mx-auto mt-1 max-w-2xl text-muted"
          >
            We help organizations navigate evolving sustainability
            expectations while creating long-term business, social, and
            environmental value.
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {sectors.map((sector, idx) => (
            <Reveal
              key={sector.label}
              variant="upSm"
              custom={idx}
              className="group relative aspect-[333/180] w-[calc(50%-0.5rem)] overflow-hidden rounded-lg sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <Image
                src={sector.image}
                alt={sector.label}
                fill
                unoptimized
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Always-on gradient so the label stays legible in both states */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Blue tint, fades away on hover to reveal the true image */}
              <div className="absolute inset-0 bg-[#4E4FFF] mix-blend-multiply transition-opacity duration-300 ease-out group-hover:opacity-0" />

              <span className="text-body-lg flex inset-x-0 justify-center absolute bottom-3 z-10  font-semibold text-white ">
                {sector.label}
              </span>

            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
