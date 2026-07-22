"use client";

import { useState } from "react";
import { ChevronDown, Upload } from "lucide-react";

const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
];

const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Manufacturing",
  "Retail",
  "Other",
];

export default function CareerApplicationForm() {
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [industry, setIndustry] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isRobotChecked, setIsRobotChecked] = useState(false);

  const handleFile = (file: File | null) => {
    if (file) setFileName(file.name);
  };

  return (
    <div id="apply" className="scroll-mt-16 sm:scroll-mt-20 lg:scroll-mt-24 bg-[#F7F5F1] ">
      
      <div className="page-container">
        {/* Eyebrow */}
        <p className="text-center text-primary font-medium text-body-sm ">
          Join us 
        </p>

        {/* Heading */}
        <h2 className="text-center font-semibold mb-5">
          Start Your New{" "}
          <em className="font-medium">Journey With </em>
          Skyquest
        </h2>


        <div className="mx-auto border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 bg-white">

        <h3 className=" font-semibold text-muted text-body-lg ">
          Take the Next Step in Your Career Join a Culture of Growth and
          Innovation
        </h3>
        <p className=" mt-2 text-muted text-body-lg">
          Fill out the form, our team will reach out to you soon.
        </p>

        {/* Form */}
        <form className="mt-3 space-y-2 sm:space-y-3 2xl:space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Full Name / Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none   focus:border-primary"
            />
            <input
              type="text"
              placeholder="Job Title*"
              className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none   focus:border-primary"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none   focus:border-primary"
          />

          {/* Phone / LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div className="relative">
              <div className="flex rounded-lg border border-gray-200 overflow-hidden focus:outline-none   focus:border-primary">
                <button
                  type="button"
                  onClick={() => setCountryOpen((o) => !o)}
                  className="flex items-center gap-1 h-full px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm text-gray-600 bg-gray-50 border-r border-gray-200 whitespace-nowrap"
                >
                  {countryCode.label}
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>
                <input
                  type="tel"
                  placeholder="Phone Number*(without country code)"
                  className="flex-1 px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm placeholder-gray-400 focus:outline-none min-w-0"
                />
              </div>
              {countryOpen && (
                <div className="absolute z-10 mt-1 w-44 bg-white border border-gray-200 rounded-lg shadow-md">
                  {countryCodes.map((c) => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setCountryCode(c);
                        setCountryOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex rounded-lg border border-gray-200 overflow-hidden focus:outline-none   focus:border-primary">
              <span className="flex items-center px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm text-gray-400 bg-gray-50 border-r border-gray-200 whitespace-nowrap">
                linkedin.com/
              </span>
              <input
                type="text"
                placeholder="username"
                className="flex-1 px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm placeholder-gray-400  min-w-0 focus:outline-none   focus:border-primary"
              />
            </div>
          </div>

          {/* Company / Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none   focus:border-primary"
            />
            <div className="relative">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm text-gray-700 focus:outline-none   focus:border-primary"
              >
                <option value="" disabled className="text-gray-400">
                  Choose Industry*
                </option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Upload */}
          <label
            htmlFor="resume-upload"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files?.[0] ?? null);
            }}
            className="flex flex-col items-center justify-center text-center rounded-lg border border-gray-200 px-3 py-3 sm:px-4 sm:py-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-5 h-5 text-gray-400 " />
            <p className="text-xs text-gray-500">
              Upload Resume Cover Letter{" "}
              <span className="text-gray-400">
                Drag and drop your file, or click here.
              </span>
            </p>
            <p className="text-xs text-gray-400 ">
              {fileName ? fileName : "pdf, doc, .docx Max 5MB"}
            </p>
            <input
              id="resume-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />
          </label>

          {/* Research Requirements */}
          <textarea
            placeholder="Your Research Requirements (Optional)"
            rows={2}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 sm:px-4 sm:py-2.5 text-sm placeholder-gray-400 focus:outline-none   focus:border-primary"
          />

          {/* Submit */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
              <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-1.5 bg-[#F9F9F9] w-full md:w-auto">
                <input
                  type="checkbox"
                  checked={isRobotChecked}
                  onChange={(e) => setIsRobotChecked(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[#1D1EE3] focus:ring-[#1D1EE3]"
                />
                <span className="text-sm text-gray-600">I&apos;m not a robot</span>
                <div className="ml-2 flex flex-col items-center leading-none">
                  <div className="w-6 h-6 rounded border border-gray-300 flex items-center justify-center text-[10px] text-gray-400">
                    ✓
                  </div>
                  <span className="text-[8px] text-gray-400 mt-0.5">reCAPTCHA</span>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#1D1EE3] hover:bg-[#1717c9] text-white text-sm font-medium px-8 py-1.5 md:py-2 rounded-lg transition-colors w-full md:w-auto"
              >
                Submit
              </button>
            </div>
        </form>
        </div>
      </div>
    </div>
  );
}