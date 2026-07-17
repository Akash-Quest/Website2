import Image from "next/image";

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
          <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
            Industries We Serve
          </p>
          <h2 className="font-bold">
            Deep Sector Expertise Across
            <br />
            High-<em className="font-semibold">Growth Markets</em>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm 2xl:text-base text-muted">
            We help organizations navigate evolving sustainability
            expectations while creating long-term business, social, and
            environmental value.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.label}
              className="group relative aspect-[333/180] w-[calc(50%-0.5rem)] overflow-hidden rounded-lg sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <Image
                src={sector.image}
                alt={sector.label}
                fill
                unoptimized
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover"
              />

              {/* Always-on gradient so the label stays legible in both states */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Blue tint, fades away on hover to reveal the true image */}
              <div className="absolute inset-0 bg-[#4E4FFF] mix-blend-multiply transition-opacity duration-300 ease-out group-hover:opacity-0" />

              <span className="flex inset-x-0 justify-center absolute bottom-3 z-10 text-sm font-semibold text-white ">
                {sector.label}
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
