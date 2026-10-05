"use client";

import { useRef } from "react";
import Link from "next/link";
import { People } from "iconsax-react";
import { ChartLine, Globe, SquareCheck } from "lucide-react";
import Marquee from "./Marquee";

import Button from "@/components/ui/Button";

const SAMPLE_CONTENTS = [
  "Market Size & Forecasts",
  "Company Profiles",
  "Regional & Segment Analysis",
  "Data Tables & Graphs",
  "Trends & Future Outlook",
];

/**
 * Icons are pre-rendered because they come from two libraries with different
 * prop APIs — iconsax sizes by className and styles by `variant`, lucide takes
 * `strokeWidth` — so a single render loop couldn't style both correctly.
 */
const STATS = [
  {
    icon: <People aria-hidden="true" className="h-5 w-5" color="currentColor" variant="Linear" />,
    value: "1,000+",
    label: "Businesses Trust Us",
  },
  {
    icon: <Globe aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />,
    value: "100+",
    label: "Countries Covered",
  },
  {
    icon: <ChartLine aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />,
    value: "12+",
    label: "Industries Analyzed",
  },
];

const COUNTRY_CODES = [
  "India (+91)",
  "United States (+1)",
  "United Kingdom (+44)",
  "UAE (+971)",
  "Singapore (+65)",
];

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

/**
 * Full-width "Request Customization" view: pitch on the left, sample-request
 * form on the right. Shown in place of the description body and sidebar when
 * that tab is active.
 */
export default function RequestCustomizationForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Pitch */}
      <div>
        <h2 className="font-bold leading-tight text-gray-900">
          Data-Backed Decisions
          <br />
          <em className="font-semibold">Start Here</em>
        </h2>

        <p className="report-p mt-4 leading-relaxed text-muted">
          Get actionable market insights that drive growth. Trusted by Fortune 500 companies,
          investors, and government bodies worldwide.
        </p>

        <h3 className="report-p mt-6 font-semibold text-gray-900">
          What&rsquo;s Inside the Sample Report?
        </h3>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
          {SAMPLE_CONTENTS.map((item) => (
            <li key={item} className="flex items-center gap-1.5 text-sm text-gray-700">
              <SquareCheck aria-hidden="true" className="h-4 w-4 text-gray-600" strokeWidth={1.75} />
              {item}
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid grid-cols-3 gap-4">
          {STATS.map(({ icon, value, label }) => (
            <li key={label} className="flex flex-col items-center text-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                {icon}
              </span>
              <span className="mt-2 font-semibold text-gray-900 text-body-lg">{value}</span>
              <span className="text-xs text-muted">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <section id="sample-form" className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-sm sm:p-8">
        <h2 className="text-center font-normal text-gray-900 text-body-xl">
          Get Your Free Sample Report
        </h2>
        <p className="mt-1 text-center text-xs text-muted">
          Discover market insights that drive growth
        </p>

        <form
          ref={formRef}
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            // No endpoint wired up yet — prevent a navigation that would lose the input.
            e.preventDefault();
          }}
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input type="text" required placeholder="First Name*" aria-label="First name" className={inputClass} />
            <input type="text" required placeholder="Last Name*" aria-label="Last name" className={inputClass} />
          </div>

          <input type="email" required placeholder="Business Email*" aria-label="Business email" className={inputClass} />

          <div className="flex overflow-hidden rounded-md border border-gray-300 focus-within:ring-2 focus-within:ring-blue-500">
            <select
              aria-label="Country calling code"
              className="shrink-0 border-r border-gray-300 bg-white px-2 py-2.5 text-sm text-gray-700 focus:outline-none"
            >
              {COUNTRY_CODES.map((code) => (
                <option key={code}>{code}</option>
              ))}
            </select>
            <input
              type="tel"
              required
              placeholder="Phone Number*"
              aria-label="Phone number"
              className="w-full min-w-0 bg-white px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <input type="text" required placeholder="Company Name*" aria-label="Company name" className={inputClass} />
          <input type="text" required placeholder="Job Title*" aria-label="Job title" className={inputClass} />

          <textarea
            rows={3}
            placeholder="Your Research Requirements (Optional)"
            aria-label="Your research requirements"
            className={`${inputClass} resize-none`}
          />
          {/* Captcha + Submit — placeholder captcha, same as the other site forms. */}
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-[#F9F9F9] px-4 py-1.5 sm:w-auto">
            <input type="checkbox" required className="h-4 w-4 accent-[#1D1EE3]" />
            <span className="text-sm text-gray-600">I&apos;m not a robot</span>
            <span className="ml-2 flex flex-col items-center leading-none">
              <span className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-[10px] text-gray-400">
                ✓
              </span>
              <span className="mt-0.5 text-[8px] text-gray-400">reCAPTCHA</span>
            </span>
          </label>
          <Button
            variant="primary"
            href="#sample-form"
            minWidth="120px"
            className="text-xs"
            onClick={() => formRef.current?.requestSubmit()}
          >
            REQUEST A FREE SAMPLE REPORT
          </Button>
          </div>

          <label className="flex items-start justify-center gap-2 pt-1 text-xs text-muted">
            <input type="checkbox" required className="mt-0.5 h-4 w-4 accent-[#1D1EE3]" />
            <span>
              By submitting this form, you agree to our Terms of Service and{" "}
              <Link href="/privacy-policy" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </form>
      </section>
    </div>

    {/* Client logos, as social proof under the form. */}
    <div className="mt-12">
      <Marquee inset={false} />
    </div>
    </>
  );
}
