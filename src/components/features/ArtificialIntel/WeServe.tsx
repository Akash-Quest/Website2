import { Bank, Building, CardTick, FlashCircle, HashtagSquare, HeartAdd, People, Shop, Teacher, TruckFast,Buildings2, Wind } from "iconsax-react";




const industries = [
  { icon: CardTick, label: "BFSI" },
  { icon: Building, label: "Manufacturing & Industry" },
  { icon: HeartAdd, label: "Healthcare & Life Sciences" },
  { icon: Shop, label: "Retail & E-Commerce" },
  { icon: Buildings2, label: "Real Estate & Infrastructure" },
  { icon: TruckFast, label: "Logistics & Supply Chain" },
  { icon: FlashCircle, label: "Energy & Utilities" },
  { icon: Teacher, label: "Education & EdTech" },
  { icon: Bank, label: "Government" },
  { icon: People, label: "Public Sector" },
  { icon: Wind, label: "Agriculture" },
  { icon: HashtagSquare, label: "AgroTech" },
];

export default function WeServe() {
  return (
    <section className="w-full bg-background">
      <div className="page-container ">
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

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-start gap-2 rounded-xl bg-white px-2 py-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
                <Icon className="h-4 w-4" strokeWidth={1.75} variant="TwoTone" color="currentColor" />
              </span>
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
