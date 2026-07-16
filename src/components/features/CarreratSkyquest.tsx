"use client";

import Image from "next/image";
export interface BentoGridImages {
  holi?: string;
  girls?: string;
  cake?: string;
  office?: string;
  team?: string;
  tree?: string;
  selfie?: string;
  celebration?: string;
  women?: string;
}

interface CardDef {
  key: keyof BentoGridImages;
  alt: string;
  defaultSrc: string;
  /** Absolute positioning at every breakpoint, values are % of the 1142x537 reference collage */
  positionClass: string;
  priority?: boolean;
}

/** Uniform corner radius, scaled the same way across every card (matches the 14px reference at a 1142px-wide collage). */
const RADIUS = "rounded-[clamp(10px,1.23vw,24px)]";

const CARDS: CardDef[] = [
  {
    key: "holi",
    alt: "Holi color celebration",
    defaultSrc: "/Team/team2.jpg",
    positionClass: "left-0 top-[18.62%] w-[25.39%] h-[39.85%]",
    priority: true,
  },
  {
    key: "girls",
    alt: "Group of friends smiling",
    defaultSrc: "/Team/team1.jpg",
    positionClass: "left-[26.34%] top-[9.68%] w-[12.71%] h-[25.70%]",
  },
  {
    key: "cake",
    alt: "Birthday cake celebration",
    defaultSrc: "/Team/team7.jpg",
    positionClass: "left-[26.53%] top-[37.62%] w-[12.52%] h-[20.86%]",
  },
  {
    key: "office",
    alt: "Team working in the office",
    defaultSrc: "/Team/Officedesk.jpg",
    positionClass: "left-[40.28%] top-[4.10%] w-[44.22%] h-[59.22%]",
    priority: true,
  },
  {
    key: "team",
    alt: "Team group portrait",
    defaultSrc: "/Team/team8.jpg",
    positionClass: "left-[85.81%] top-0 w-[13.31%] h-[42.83%]",
  },
  {
    key: "celebration",
    alt: "Team celebration moment",
    defaultSrc: "/Team/team5.jpg",
    positionClass: "left-[78.63%] top-[45.63%] w-[21.37%] h-[37.62%]",
  },
  {
    key: "tree",
    alt: "Christmas tree decoration",
    defaultSrc: "/Team/team6.jpg",
    positionClass: "left-[7.71%] top-[61.45%] w-[14.01%] h-[38.55%]",
  },
  {
    key: "selfie",
    alt: "Friends taking a selfie",
    defaultSrc: "/Team/team3.jpg",
    positionClass: "left-[23.03%] top-[61.45%] w-[20.23%] h-[32.96%]",
  },
  {
    key: "women",
    alt: "Holi inisde",
    defaultSrc: "/Team/team4.jpg",
    positionClass: "left-[44.48%] top-[64.06%] w-[34.15%] h-[34.08%]",
  },
];

export default function CareerAtSkyquest({
  images = {},
}: {
  images?: BentoGridImages;
}) {
  return (
    <section className="w-full bg-white ">
      <div className="page-container">
        {/* Eyebrow + heading */}
        <div className="text-left lg:text-center">
          <h2 className="mt-2 font-bold text-gray-900">
            Life <em className="font-semibold">@SkyQuest</em>
          </h2>
          <p className="mt-2 lg:mx-auto max-w-2xl text-muted text-sm 2xl:text-base">
            At SkyQuest, celebrations and camaraderie happen throughout the week, creating a culture where work and fun go hand in hand.
          </p>
        </div>

        {/* Bentogram: same pixel-accurate proportional collage at every breakpoint */}
        <div
          className="relative mx-auto w-full max-w-[1920px]"
          style={{ aspectRatio: "1142 / 537" }}
        >
          {CARDS.map((card) => (
            <div
              key={card.key}
              className={`group absolute overflow-hidden bg-gray-100  ${RADIUS} ${card.positionClass}`}
            >
              <Image
                src={images[card.key] ?? card.defaultSrc}
                alt={card.alt}
                fill
                sizes="(max-width: 1920px) 100vw, 1920px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                priority={card.priority}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
