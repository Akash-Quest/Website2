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

  const handleFile = (file: File | null) => {
    if (file) setFileName(file.name);
  };

  return (
    <div className=" bg-[#F7F5F1] font-sans">
      
      <div className="page-container">
        {/* Eyebrow */}
        <p className="text-center text-primary mb-2">
          Join us 
        </p>

        {/* Heading */}
        <h2 className="text-center font-semibold mb-5">
          Start Your New{" "}
          <em className="font-medium">Journey With </em>
          Skyquest
        </h2>


        <div className="mx-auto border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 bg-white">

        <h6 className=" font-semibold text-muted">
          Take the Next Step in Your Career Join a Culture of Growth and
          Innovation
        </h6>
        <p className=" mt-2 text-muted">
          Fill out the form, our team will reach out to you soon.
        </p>

        {/* Form */}
        <form className="mt-3 space-y-2 sm:space-y-3 2xl:space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Full Name / Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
            />
            <input
              type="text"
              placeholder="Job Title*"
              className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
            />
          </div>

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
          />

          {/* Phone / LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div className="relative">
              <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/40 focus-within:border-indigo-500">
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

            <div className="flex rounded-lg border border-gray-200 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500/40 focus-within:border-indigo-500">
              <span className="flex items-center px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm text-gray-400 bg-gray-50 border-r border-gray-200 whitespace-nowrap">
                linkedin.com/
              </span>
              <input
                type="text"
                placeholder="username"
                className="flex-1 px-2.5 py-1.5 sm:px-3 sm:py-2 text-sm placeholder-gray-400 focus:outline-none min-w-0"
              />
            </div>
          </div>

          {/* Company / Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <input
              type="text"
              placeholder="Company Name*"
              className="w-full rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
            />
            <div className="relative">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-200 px-3 py-1.5 sm:px-4 sm:py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 bg-white"
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
            className="w-full rounded-lg border border-gray-200 px-3 py-2 sm:px-4 sm:py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 resize-none"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#3729e0] hover:bg-[#2e21c4] text-white font-normal rounded-lg py-2 sm:py-2.5 text-sm transition-colors"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}