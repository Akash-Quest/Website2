"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
];

interface CaseStudyFormProps {
  heading?: string;
  headingHighlight?: string;
  headingItalic?: string;
  description?: string;
  bgClassName?: string;
}

export default function CaseStudyForm({
  heading = "Ready to create",
  headingHighlight = "social impact",
  headingItalic = "together?",
  description = "We collaborate with changemakers shaping a more inclusive, sustainable future. Let's make measurable impact together.",
  bgClassName = "bg-background",
}: CaseStudyFormProps) {
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  return (
    <section className={`w-full ${bgClassName}`}>
      <div className="page-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: heading */}
          <div>
            <h2 className="font-bold text-gray-900">
              {heading}
              <br />
              <span className="text-primary">{headingHighlight}</span>
              <br />
              <em className="font-semibold">{headingItalic}</em>
            </h2>
            <p className="mt-3 max-w-md text-sm 2xl:text-base text-muted">{description}</p>
          </div>

          {/* Right: form card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 lg:p-8">
            <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />

              <input
                type="email"
                placeholder="Business Email*(Please avoid gmail/yahoo/hotmail IDs)"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />

              <div className="relative">
                <div className="flex overflow-hidden rounded-lg border border-gray-200 focus-within:border-primary">
                  <button
                    type="button"
                    onClick={() => setCountryOpen((o) => !o)}
                    className="flex shrink-0 items-center gap-1 whitespace-nowrap border-r border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-600"
                  >
                    {countryCode.label}
                    <ChevronDown className="h-3.5 w-3.5 text-gray-400" />
                  </button>
                  <input
                    type="tel"
                    placeholder="Phone Number*(without country code)"
                    className="min-w-0 flex-1 px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
                {countryOpen && (
                  <div className="absolute z-10 mt-1 w-44 rounded-lg border border-gray-200 bg-white ">
                    {countryCodes.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => {
                          setCountryCode(c);
                          setCountryOpen(false);
                        }}
                        className="block w-full px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-50"
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <input
                  type="text"
                  placeholder="Company Name*"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Job Title*"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <textarea
                placeholder="Description*"
                rows={2}
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-primary"
              />

              <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
                <div className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-[#F9F9F9] px-4 py-1.5 md:w-auto">
                  <input
                    type="checkbox"
                    checked={isRobotChecked}
                    onChange={(e) => setIsRobotChecked(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-600">I&apos;m not a robot</span>
                  <div className="ml-2 flex flex-col items-center leading-none">
                    <div className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-[10px] text-gray-400">
                      ✓
                    </div>
                    <span className="mt-0.5 text-[8px] text-gray-400">reCAPTCHA</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-8 py-2.5 text-sm font-medium text-white transition-colors hover:opacity-90 md:w-auto"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
