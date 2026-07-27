
"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, ChevronDown, PhoneCall  } from "lucide-react";
import { useState } from "react";
import LocationsSection from "@/components/features/ContactWeAreLocated";
import Marquee from "@/components/features/Marquee";
import ContactBanner from "@/components/features/ContactBanner";


function TeamHero() {
    const [isRobotChecked, setIsRobotChecked] = useState(false);
  return (
    <section className="relative bg-background overflow-hidden">
    <div className="hero-container relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0">
          <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-400 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            
            <li className="text-gray-300">/</li>
            <li className="text-gray-700">Contact Us</li>
          </ol>
        </nav>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5  px-4 lg:px-0">
          {/* Left: text */}
          <div className="flex flex-col justify-center lg:items-start text-center lg:text-left">
            <p  className="text-primary pb-2 text-sm 2xl:text-base  ">
            Contact us
          </p>

          <h1 className="font-bold ">
            How can <em className="font-semibold">we help?</em>
          </h1>

          <p className="text-muted lg:max-w-md mt-2 text-sm 2xl:text-base mb-2">
            Have a question or opportunity in mind? SkyQuest makes it faster and easier to connect with our team and explore how we can help your business grow.
          </p>

          <div className="border-t border-b pb-4 border-gray-200 mt-6 pt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-md">
            <a
              href="tel:+13513334748"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1D1EE3] transition-colors"
            ><div className=" bg-[white] justify-center p-2 rounded-lg">
              <PhoneCall className="w-4 h-4 fill-[#1D1EE3]
  stroke-[#1D1EE3] " />
              </div>
              +1 351 333 4748
            </a>

            <a
              href="tel:+919265657635"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1D1EE3] transition-colors"
            ><div className=" bg-[white] justify-center p-2 rounded-lg">
              <PhoneCall className="w-4 h-4 fill-[#1D1EE3]
  stroke-[#1D1EE3] " />
              </div>
              +91 9265 657 635
            </a>

            <a
              href="https://wa.me/919265657635"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1D1EE3] transition-colors"
            ><div className=" bg-[white] justify-center p-2 rounded-lg">
              <MessageCircle className="w-4 h-4 text-[#1D1EE3]" />
              </div>
              +91 9265 657 635
            </a>

            <a
              href="mailto:info@skyquestt.com"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1D1EE3] transition-colors"
            ><div className=" bg-[white] justify-center p-2 rounded-lg">
              <Mail className="w-4 h-4 text-[#1D1EE3]" />
              </div>
              info@skyquestt.com
            </a>
          </div>
          </div>

          {/* Right: image */}
          <div className="bg-white rounded-md border border-gray-100 p-2 sm:p-2 lg:p-4">
          <h5 className=" font-semibold text-gray-700 pb-2">
            We&apos;re happy to assist with your queries.
          </h5>
          <p className="pb-5 text-sm text-gray-600">
            Please fill out the form, and our team will reach out to you soon.
          </p>
          <form className=" space-y-2 lg:space-y-4">
            {/* Full Name / Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap:4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1.5 md:py-2 text-sm text-gray-700 placeholder:text-gray-400 text-sm 2xl:text-base mb-2 focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]/30 focus:border-[#1D1EE3]"
              />
              <input
                type="text"
                placeholder="Job Title*"
                className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1.5 md:py-2   text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]/30 focus:border-[#1D1EE3]"
              />
            </div>

            {/* Business Email */}
            <input
              type="email"
              placeholder="Business Email*(Please avoid gmail/yahoo/hotmail IDs)"
              className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1.5 md:py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]/30 focus:border-[#1D1EE3]"
            />

            {/* Company Name / Industry */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name*"
                className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1.5 md:py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]/30 focus:border-[#1D1EE3]"
              />
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1.5 md:py-2 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]/30 focus:border-[#1D1EE3]"
                >
                  <option value="" disabled>
                    Choose Industry*
                  </option>
                  <option value="agriculture">Agriculture</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Country code / Phone */}
            <div className="flex w-full overflow-hidden rounded-lg border border-gray-200 bg-[#F9F9F9] focus-within:ring-2 focus-within:ring-[#1D1EE3]/30 focus-within:border-[#1D1EE3]">
  {/* Country Code */}
  <div className="relative">
    <select
      defaultValue="+91"
      className="h-full appearance-none border-r border-gray-200 bg-[#F7F5F1] py-1.5 md:py-2 pl-3 pr-8 text-sm text-gray-700 outline-none"
    >
      <option value="+91">India (+91)</option>
      <option value="+1">USA (+1)</option>
      <option value="+44">UK (+44)</option>
      <option value="+971">UAE (+971)</option>
    </select>

    <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
  </div>

  {/* Phone Number */}
  <input
    type="tel"
    placeholder="Phone Number*(without country code)"
    className="flex-1 bg-[#F7F5F1] px-4 py-1.5 md:py-2  text-sm text-gray-700 placeholder:text-gray-400 outline-none"
  />
</div>

            {/* Research requirements */}
            <input
              type="text"
              placeholder="Your Research Requirements (Optional)"
              className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1.5 md:py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]/30 focus:border-[#1D1EE3]"
            />

            {/* Captcha + Submit */}
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

            <p className="text-xs text-gray-400 text-center pt-0   ">
              By submitting this form, you agree to our{" "}
              <a href="#" className="text-[#1D1EE3] underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#1D1EE3] underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
          
        </div>
      </div>
    </section>
  );
}

export default function Teams() {
  return (<>
  <TeamHero />
  <Marquee />
  <LocationsSection />
  <ContactBanner />
  </>)

}
