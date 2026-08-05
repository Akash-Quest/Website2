import Image from "next/image";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";

const cards = [
  {
    title: "Strategize",
    desc: "AI Readiness Assessment, Digital Roadmap, Technology Audit",
    image:
      "/insightimpact/core4.jpg",
    height: "h-[clamp(7.5rem,10.5vw,12.6rem)]",
  },
  {
    title: "Build",
    desc: "Custom AI Solutions, Platform Engineering, Data Infrastructure.",
    image:
      "/insightimpact/core3.jpg",
    height: "h-[clamp(11.75rem,20vw,24rem)]",
  },
  {
    title: "Integrate",
    desc: "ERP/CRM Integration, API Architecture, Legacy Modernization",
    image:
      "/insightimpact/core2.jpg",
    height: "h-[clamp(16rem,30vw,36rem)]",
  },
  {
    title: "Scale",
    desc: "MLOps, Managed AI Services, Continuous Optimization",
    image:
      "/insightimpact/core1.jpg",
    height: "h-[clamp(20.5rem,40vw,48rem)]",
  },
];

export default function AiInsightImpact () {
  return (
    <section className="w-full bg-background page-container">
      {/* ── MOBILE ─────────────────────────────────────────────── */}
      <div className="lg:hidden ">
        {/* Header */}
        <Reveal as="p" variant="upSm" custom={0} className="text-primary text-body-sm font-medium">
          What We Do
        </Reveal>
        <Reveal as="h2" variant="upSm" custom={1} className="font-bold ">
          AI-Powered Digital 
          <em className="font-semibold">Transformation</em>
        </Reveal>
        <Reveal as="p" variant="upSm" custom={2} className=" text-mute font-medium mb-4">
          A full-spectrum AI transformation partner helping organizations design, deploy, integrate, and scale intelligent solutions.
        </Reveal>

        {/* Stacked cards — same height, width steps up diagonally */}
        <div className="mt-3 flex flex-col gap-3">
          {cards.map((card, index) => {
            const widths = ["w-[45%]", "w-[65%]", "w-[85%]", "w-full"];
            return (
              <Reveal
                key={index}
                variant="upSm"
                custom={index}
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
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* ── DESKTOP ────────────────────────────────────────────── */}
      <div className="hidden lg:block mx-auto ">
        <div className="relative">
          {/* Content overlay */}
          <Reveal
            as="div"
            variant="left"
            className="relative lg:absolute lg:inset-0 leading-[0] mb-10 lg:mb-0 z-10 lg:pointer-events-none"
          >
            <p className="mb-2 text-primary font-medium text-body-sm lg:pointer-events-auto">
              What We Do
            </p>
            <h2 className=" font-bold lg:pointer-events-auto">
               AI-Powered Digital 
              <br />
              <em className="font-semibold">Transform</em>
            </h2>
            <p className=" mb-4  max-w-md xl:max-w-lg 2xl:max-w-xl text-muted lg:pointer-events-auto ">
              A full-spectrum AI transformation partner helping organizations design, deploy, integrate, and scale intelligent solutions.
            </p>
          </Reveal>

          {/* Cards grid */}
          <div className="grid grid-cols-4 gap-5 items-end">
            {cards.map((card, index) => (
              <Reveal
                key={index}
                variant="upSm"
                custom={index}
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
                    <h3 className="text-white font-normal  text-body-lg">{card.title}</h3>

                  </div>
                  <p className="  font-regular text-white/80 transition-colors duration-500 group-hover:text-white">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
