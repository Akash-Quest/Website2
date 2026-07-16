import Image from "next/image";

const advantages = [
  "Research + Strategy Integration",
  "Deep Sector Expertise",
  "Global Intelligence",
  "Decision-Focused Insights",
  "Advanced Analytics Capabilities",
  "Strong Government & Development Sector Experience",
  "Practical Recommendations, Not Just Reports",
  "Technology & Research Ecosystem",
  "Leveraging Advanced Research & Intelligence Platforms",
];

export default function WhyUsResearch() {
  return (
    <section className="w-full bg-background">
          <div className="page-container pt-0">
            {/* Header */}
            <div className="relative text-center">
              <p className="body-sm text-primary mb-2">Why Us? The SkyQuest Advantage</p>
              <h2 className="font-bold">
              Beyond Research Delivering
              Strategic<br></br> <em className="font-semibold">Intelligence</em>
            </h2>
              
            </div>
    
            {/* Content: image + capability list */}
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
              {/* Left: image */}
              <div className="">
                <p className="mt-3 text-sm text-muted">
              Many research firms provide data. Few help organizations
              understand what the data means and what actions to take next.
              <br/>
              SkyQuest bridges the gap between research and execution by
              combining market intelligence, strategic advisory, sector
              expertise, and implementation experience.
            </p>

            <ul className="mt-4 space-y-1">
              {advantages.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 body-sm 2xl:text-base text-neutral-800"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm 2xl:text-base text-muted">
              We combine proprietary methodologies with leading research
              tools, data platforms, and intelligence frameworks to deliver
              high-quality market insights and strategic recommendations.
            </p>
              </div>
              
              {/* Right: capability list */}
              <div className="relative min-h-[342px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/service/BusinessIntel/whyus.jpg"
                  alt="Why Us? The SkyQuest Advantage"
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
