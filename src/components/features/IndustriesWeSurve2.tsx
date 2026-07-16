import Image from "next/image";

const sectors = [
  {
    label: "Information Technology",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  },
  {
    label: "Health Care",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80",
  },
  {
    label: "Materials",
    image: "https://images.unsplash.com/photo-1547149600-a6cdf8fce50c?w=600&q=80",
  },
  {
    label: "Consumer Discretionary",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
  },
  {
    label: "Consumer Staples",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    label: "Energy",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    label: "Utilities",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    label: "Industrials",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
  {
    label: "Real Estate",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80",
  },
  {
    label: "Financials",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
  },
  {
    label: "Communication Services",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80",
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
