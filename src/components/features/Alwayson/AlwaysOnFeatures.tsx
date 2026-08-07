'use client';

import React from 'react';
import Reveal from '@/components/ui/Reveal';

export default function AlwaysOnFeatures() {
  const stats = [
    { value: '880M+', label: 'Internet users, India' },
    { value: '550M+', label: 'WhatsApp users, India' },
    { value: '600M+', label: 'FB + Instagram universe' },
    { value: '36–45m', label: 'Avg. app time / day' },
  ];

  return (
    <section className="w-full bg-white  font-['Inter_Tight'] ">
      <div className="page-container mx-auto flex flex-col items-center">

        <div className="relative w-full flex flex-col items-center">

          {/* ── CENTRAL HEADER SECTION (MIRRORED TO IMAGE) ── */}
          <div className="text-center mb-16 max-w-3xl flex flex-col Z-20">
            <Reveal as="p" variant="upSm" custom={0} className="font-semibold text-primary mb-2 block text-body-sm"> The WhatsApp Advantage</Reveal>

            <Reveal as="h2" variant="upSm" custom={1} className="font-semibold ">
              2 Billion Users. <br />Zero New{" "}
              <em className="font-Semibold ">Habits Required.</em>
            </Reveal>
            <Reveal as="p" variant="upSm" custom={2} className="text-muted max-w-full mx-auto tracking-wide leading-snug">
              WhatsApp is already on every phone, trusted by every family, and used in every language. AlwaysON meets patients exactly where they are no registration, no download, no friction.
            </Reveal>
          </div>

          {/* ── STAT STRIP ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full items-stretch">
            {stats.map((stat, idx) => (
              <Reveal
                as="div"
                variant="upSm"
                custom={idx}
                key={idx}
                className="bg-[#F7F5F1] rounded-[16px] p-6 flex flex-col gap-1"
              >
                <span className="font-bold text-body-2xl text-[#1D1EE3]">
                  {stat.value}
                </span>
                <span className="text-muted">
                  {stat.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
