import { Bank, Buildings2, CloudSunny, Cpu, Drop, FlashCircle, Health, HeartAdd, People, Shop, Wind } from "iconsax-react";
import Reveal from "@/components/ui/Reveal";




const industries = [
  { icon: Wind, label: "Agriculture & Food Systems" },
  { icon: Health, label: "Livestock, Fisheries & Animal Health" },
  { icon: HeartAdd, label: "Healthcare & Life Sciences" },
  { icon: Cpu, label: "AI & Digital Economy" },
  { icon: CloudSunny, label: "Climate & Environment" },
  { icon: FlashCircle, label: "Energy & Utilities" },
  { icon: Drop, label: "Water & Sanitation" },
  { icon: Bank, label: "Financial Services & Inclusive Finance" },
  { icon: Buildings2, label: "Public Sector & Digital Governance" },
  { icon: People, label: "Social Sector" },
  { icon: Shop, label: "Consumer Goods & Retail" },
];

export default function WeServe() {
  return (
    <section className="w-full bg-background">
      <div className="page-container ">
        <div className="text-center">
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="mb-2  font-medium text-primary text-body-sm"
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
            className="mx-auto mt-2 max-w-2xl text-muted"
          >
            We help organizations navigate evolving sustainability
            expectations while creating long-term business, social, and
            environmental value.
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ icon: Icon, label }, idx) => (
            <Reveal
              key={label}
              variant="upSm"
              custom={idx}
              className="flex items-center justify-start gap-2 rounded-lg bg-white px-2 py-2"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.75} variant="TwoTone" color="currentColor" />
              </span>
              <span className="text-body-lg">{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
