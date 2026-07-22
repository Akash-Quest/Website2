import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function CareersHero() {
  return (
    <section className="w-full bg-[#F7F5F1] ">
    <div className="page-container ">
      
      {/* ── LEFT PANEL ── */}
      <div className="flex w-full flex-col lg:flex-row  lg:gap-0  ">
      <div className="flex w-full lg:w-1/2 flex-col justify-center bg-[#E0DBFF] px-6 py-8 sm:px-0 lg:px-14 lg:py-10  rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none  ">
        
        {/* Label */}
        <p className="text-primary text-body-sm">
          SkyQuest Careers
        </p>

        {/* Heading */}
        <h2 className="font-semibold ">
          Build What the World{" "}
          <em className="font-">Needs Next</em>
        </h2>

        {/* Body */}
        <p className="max-w-md text-muted ">
          From boardrooms to field programmes across 15+ countries SkyQuest offers
          careers that challenge, inspire, and create lasting change.
        </p>
        <p className="  font-semibold text-muted ">
          Join a team that turns bold ideas into practical solutions.
        </p>

        {/* CTAs */}
        <div className="mt-3 flex flex-wrap items-center gap-4">
           <Button href="/careers" variant="primary" iconSize={16}>
            Explore Careers
                  </Button>

         <Button href="/careers#apply" variant="white" iconSize={16}>
            Apply Today
                  </Button>
        </div>
      </div>

      {/* ── RIGHT PANEL — full-bleed photo ── */}
      <div className="group relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-[clamp(22rem,28vw,33.6rem)]  rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none overflow-hidden">
        <Image
          src="/HomeCareer/1.jpg"
          alt="Team celebrating together"
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>
      </div>
      </div>
    </section>
  );
}