import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";

const cards = [
  {
    title: "Understand What Matters Most",
    desc: "Continuous Challenges, Identify Opportunities.",
    image:
      "/insightimpact/core4.jpg",
    height: "h-[clamp(7.5rem,10.5vw,12.6rem)]",
  },
  {
    title: "Design the Future State",
    desc: "Build Strategies That Last.",
    image:
      "/insightimpact/core3.jpg",
    height: "h-[clamp(11.75rem,20vw,24rem)]",
  },
  {
    title: "Enable Transformation Through Technology",
    desc: "Turn data & AI into competitive advantage.",
    image:
      "/insightimpact/core2.jpg",
    height: "h-[clamp(16rem,30vw,36rem)]",
  },
  {
    title: "Execute at Scale",
    desc: "Move beyond recommendations to real-world implementation.",
    image:
      "/insightimpact/core1.jpg",
    height: "h-[clamp(20.5rem,40vw,48rem)]",
  },
];

export default function InsightImpact   () {
  return (
    <section className="w-full bg-background page-container">
      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="lg:hidden ">
        {/* Header */}
        <p className="text-primary text-body-sm font-medium">
          From Insight to Impact
        </p>
        <h2 className="font-bold ">
          How We Help Organizations
          <em className="font-semibold">Transform</em>
        </h2>
        <p className=" text-mute font-medium mb-4">
          We help organizations navigate complexity, embrace innovation,
          and deliver measurable outcomes through an integrated approach
          spanning strategy, technology, execution, and impact.
        </p>
         <Button variant="primary" iconSize={16}>
            Speak To Partner
                  </Button>

        {/* Stacked cards — same height, width steps up diagonally */}
        <div className="mt-3 flex flex-col gap-3">
          {cards.map((card, index) => {
            const widths = ["w-[45%]", "w-[65%]", "w-[85%]", "w-full"];
            return (
              <div
                key={index}
                className={`relative h-35 overflow-hidden rounded-xl ${widths[index] ?? "w-full"}`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  sizes="100vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
                <div className="absolute left-4 top-4 right-4 text-white">
                  <h3 className="text-white/80">{card.title}</h3>
                  <p className="body-sm mt-1 text-white">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <div className="hidden lg:block mx-auto ">
        <div className="relative">
          {/* Content overlay */}
          <div className="relative lg:absolute lg:inset-0 leading-[0] mb-10 lg:mb-0 z-10 lg:pointer-events-none">
            <p className="mb-2 text-primary tracking-wide text-body-sm lg:pointer-events-auto">
              From Insight to Impact
            </p>
            <h2 className=" font-bold lg:pointer-events-auto">
              How We Help Organizations
              <br />
              <em className="font-semibold">Transform</em>
            </h2>
            <p className=" mb-4  max-w-md xl:max-w-lg 2xl:max-w-xl text-muted lg:pointer-events-auto ">
              We help organizations navigate complexity, embrace innovation,
              and deliver measurable outcomes through an integrated approach
              spanning strategy, technology, execution, and impact.
            </p>
            <div className="w-fit lg:pointer-events-auto">
              <Button variant="primary" iconSize={16}>
                Speak To Partner
              </Button>
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-4 gap-5 items-end">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl ${card.height}`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover scale-110 transition-transform duration-500 group-hover:scale-100"
                />
                
                <div className="absolute left-4 top-4 right-4 text-white z-100">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-white font-normal mb-2 text-body-lg">{card.title}</h3>
                    
                  </div>
                  <p className=" mt-1 font-regular text-white/80 transition-colors duration-500 group-hover:text-white">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
