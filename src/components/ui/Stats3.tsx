"use client";

import { useEffect, useRef } from "react";

const StatsGridThree = () => {
  const countupObserver = useRef<IntersectionObserver | null>(null);

  const stats = [
    { target: 85, suffix: "+", label: "AI Engagements" },
    { target: 3.2, suffix: "x", label: "Avg. ROI Delivered" },
    { target: 40, suffix: "%", label: "Avg. Cost Reduction" },
  ];

  useEffect(() => {
    const animCount = (element: HTMLElement, target: number) => {
      const startTime = performance.now();
      const duration = 1600;
      const decimals = target % 1 !== 0 ? 1 : 0;

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
            const target = parseFloat(
              (entry.target as HTMLElement).dataset.target || "0"
            );

            animCount(entry.target as HTMLElement, target);

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
    <section className="w-full  bg-background">
      {/* ---------- Mobile: 2-up top row + full-width row below ---------- */}
      <div className="grid grid-cols-2 sm:hidden">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`relative flex flex-col items-center justify-center py-3 px-5 text-center ${
              i === 2 ? "col-span-2" : ""
            }`}
          >
            {i === 0 && (
              <svg className="absolute right-0 top-0 h-full" width="1.5" preserveAspectRatio="none">
                <line x1="0.75" y1="0" x2="0.75" y2="100%" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
              </svg>
            )}
            {i === 2 && (
              <svg className="absolute left-0 top-0 w-full" height="1.5" preserveAspectRatio="none">
                <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
              </svg>
            )}
            <p className="font-bold text-[#1D1EE3] leading-none text-[clamp(1.75rem,3vw,3rem)]">
              <span data-target={stat.target}>0</span>
              {stat.suffix}
            </p>
            <p className="text-muted mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ---------- Desktop / tablet: full bracketed row ---------- */}
      <div className="hidden sm:grid grid-cols-[1fr_auto_1fr]">
        {/* left spacer */}
        <div className="relative self-stretch">
          <svg className="absolute left-0 top-0 w-full" height="1.5" preserveAspectRatio="none">
            <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
          </svg>
        </div>

        {/* middle 2fr column, split into 3 equal parts */}
        <div className="grid grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center justify-center py-3 px-5 text-center"
            >
              {i !== stats.length - 1 && (
                <svg className="absolute right-0 top-0 h-full" width="1.5" preserveAspectRatio="none">
                  <line x1="0.75" y1="0" x2="0.75" y2="100%" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
                </svg>
              )}
              {i === 0 && (
                <svg className="absolute left-0 top-0 w-full" height="1.5" preserveAspectRatio="none">
                  <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
                </svg>
              )}
              {i === stats.length - 1 && (
                <svg className="absolute left-0 bottom-0 w-full" height="1.5" preserveAspectRatio="none">
                  <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeWidth="1.5" strokeDasharray="8 6" />
                </svg>
              )}
              <p className="font-bold text-[#1D1EE3] leading-none text-[clamp(1.75rem,3vw,3rem)]">
                <span data-target={stat.target}>0</span>
                {stat.suffix}
              </p>
              <p className="text-muted mt-2 text-body-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* right spacer */}
        <div className="relative self-stretch">
          <svg className="absolute left-0 bottom-0 w-full" height="1.5" preserveAspectRatio="none">
            <line x1="0" y1="0.75" x2="100%" y2="0.75" stroke="#4E4E57" strokeOpacity={0.5} strokeDasharray="8 6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default StatsGridThree;