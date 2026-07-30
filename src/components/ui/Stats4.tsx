


"use client";

import { useEffect, useRef } from "react";

interface Stat {
  target?: number;
  text?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

interface StatsGridProps {
  sectionPadding?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { target: 12, suffix: "+", label: "Consulting Practices" },
  { target: 6, suffix: "", label: "Global Regions" },
  { target: 200, suffix: "+", label: "Engagements Delivered" },
  { target: 15, suffix: "+", label: "Industries Served" },
];

const StatsGrid = ({
  sectionPadding = "md:pb-16 md:pt-8",
  stats = defaultStats,
}: StatsGridProps) => {
  const countupObserver = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animCount = (element: HTMLElement, target: number, decimals: number) => {
      const startTime = performance.now();
      const duration = 1600;

      const update = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        element.textContent = (easeProgress * target).toFixed(decimals);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = target.toFixed(decimals);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseFloat(el.dataset.target || "0");
            const decimals = parseInt(el.dataset.decimals || "0");

            animCount(el, target, decimals);

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    countupObserver.current = observer;

    document
      .querySelectorAll("[data-target]")
      .forEach((el) => observer.observe(el));

    return () => countupObserver.current?.disconnect();
  }, []);

  return (
    <section className={`w-full bg-background ${sectionPadding}`}>

  {/* Mobile */}
  <div className="grid grid-cols-2 md:hidden px-4 py-8">
    {stats.map((stat, index) => (
      <div
        key={stat.label}
        className={`relative text-center p-6`}
      >
        {index % 2 === 0 && (
          <svg className="absolute right-0 top-0 h-full" width="2" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="100%" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="2" strokeDasharray="8 6"  />
          </svg>
        )}
        {index < 2 && (
          <svg className="absolute left-0 bottom-0 w-full" height="2" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="2" strokeDasharray="8 6" />
          </svg>
        )}
        <p className="font-bold text-primary leading-none text-[clamp(1.75rem,3vw,3rem)]">
          {stat.text ? (
            stat.text
          ) : (
            <>
              {stat.prefix}
              <span data-target={stat.target} data-decimals={stat.decimals || 0}>0</span>
              {stat.suffix}
            </>
          )}
        </p>

        <p className="mt-2 text-xs text-muted text-body-lg">
          {stat.label}
        </p>
      </div>
    ))}
  </div>

  {/* Desktop */}
  <div className="hidden md:grid grid-cols-[1fr_auto_1fr]">
    <div className="relative self-stretch">
      <svg className="absolute left-0 top-0 w-full" height="1.5" preserveAspectRatio="none">
        <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
      </svg>
    </div>

    <div className="grid grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className={`relative flex flex-col items-center justify-center text-center px-5 py-4`}
        >
          {i !== stats.length - 1 && (
            <svg className="absolute right-0 top-0 h-full" width="1.5" preserveAspectRatio="none">
              <line x1="0.75" y1="0" x2="0.75" y2="100%" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
            </svg>
          )}
          <svg className={`absolute left-0 w-full ${i < 2 ? "top-0" : "bottom-0"}`} height="1.5" preserveAspectRatio="none">
            <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
          </svg>
          <p className="font-bold text-primary leading-none text-[clamp(1.75rem,3vw,3rem)]">
            {stat.text ? (
              stat.text
            ) : (
              <>
                {stat.prefix}
                <span data-target={stat.target} data-decimals={stat.decimals || 0}>0</span>
                {stat.suffix}
              </>
            )}
          </p>

          <p className="mt-2 text-muted text-body-lg">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

    <div className="relative self-stretch">
      <svg className="absolute left-0 bottom-0 w-full" height="1.5" preserveAspectRatio="none">
        <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeDasharray="8 6" />
      </svg>
    </div>
  </div>
</section>
  );
};

export default StatsGrid;