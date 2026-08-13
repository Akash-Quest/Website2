
"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Mail, ArrowDown, PhoneCall, Upload ,ChevronDown} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import LocationsSection from "@/components/features/ContactWeAreLocated";
import Marquee from "@/components/features/Marquee";
import ContactBanner from "@/components/features/ContactBanner";
import { Whatsapp } from "@/components/icons/SocialIcons";
import { fadeUpSm, fadeLeft, scaleFade } from "@/lib/animations";


type ContactTab = "consultation" | "brief";

const CONTACT_LINKS = [
  // { href: "tel:+13513334748", label: "+1 351 333 4748", Icon: PhoneCall },
  // { href: "tel:+919265657635", label: "+91 9265 657 635", Icon: PhoneCall },
  // { href: "https://wa.me/919265657635", label: "+91 9265 657 635", Icon: MessageCircle },
  { href: "mailto:info@skyquestt.com", label: "info@skyquestt.com", Icon: Mail },
] as const;

const CONTACT_TAB_CONTENT: Record<
  ContactTab,
  {
    tabLabel: string;
    heading: string;
    subtext: string;
    extraFieldLabel: string;
    extraFieldOptions: string[];
  }
> = {
  consultation: {
    tabLabel: "Schedule A Consultation",
    heading: "Schedule a Consultation",
    subtext:
      "Pick a service area and share your availability, our team will confirm a time within one business day.",
    extraFieldLabel: "Schedule a Consultation",
    extraFieldOptions: [
      "Morning (9AM - 12PM)",
      "Afternoon (12PM - 4PM)",
      "Evening (4PM - 7PM)",
    ],
  },
  brief: {
    tabLabel: "Submit A Business Brief",
    heading: "Submit a Business Brief",
    subtext:
      "Share your project scope, timeline, and any documents, we'll come back with a tailored proposal.",
    extraFieldLabel: "Request For Proposal",
    extraFieldOptions: [
      "New Project",
      "Partnership Inquiry",
      "Custom Research",
      "Other",
    ],
  },
};

function ContactHero() {
    const [isRobotChecked, setIsRobotChecked] = useState(false);
    const [attachedFile, setAttachedFile] = useState<File | null>(null);
    const [agreedToPolicy, setAgreedToPolicy] = useState(false);
    const [activeTab, setActiveTab] = useState<ContactTab>("consultation");
    const tabContent = CONTACT_TAB_CONTENT[activeTab];
  return (
    <section className="relative bg-background overflow-hidden">
    <div className="hero-container relative z-10 pb-0">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0">
          <ol className="text-body-sm flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>

            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Contact Us</li>
          </ol>
        </nav>
        <div className="flex flex-col items-center gap-8 px-4 lg:px-0">
          {/* Top: text */}
          <div className="flex flex-col items-center text-center">
           

          <motion.h1
            custom={1}
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="font-bold "
          >
            How can <em className="font-semibold">we help?</em>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUpSm}
            initial="hidden"
            animate="visible"
            className="text-muted max-w-[75%] mt-2 tracking-wide leading-snug "
          >
            Have a question or opportunity in mind? SkyQuest makes it faster and easier to connect with our team and explore how we can help your business grow.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUpSm}
            initial="hidden"
            animate="visible"
            className="border-t border-b border-gray-200 mt-4 p-2  flex flex-wrap items-center justify-center gap-x-6 "
          >
            {CONTACT_LINKS.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#1D1EE3] transition-colors"
              >
                <div className="bg-white justify-center p-1 rounded-lg">
                  <Icon className="w-4 h-4  stroke-[#1D1EE3]" />
                </div>
                {label}
              </a>
            ))}
          </motion.div>
          </div>
          <motion.div
            custom={4}
            variants={fadeUpSm}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[70%] -m-4 bg-white p-1 rounded-full"
          >
            <div className="flex text-sm font-normal">
            {(Object.keys(CONTACT_TAB_CONTENT) as ContactTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-1 rounded-full  transition-colors  -p ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "bg-transparent text-gray-600 hover:text-gray-800"
                }`}
              >
                {CONTACT_TAB_CONTENT[tab].tabLabel}
              </button>
            ))}
          </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={scaleFade}
            custom={5}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[70%] bg-white rounded-md border border-gray-100 p-2 sm:p-4 lg:pb-4"
          >
          <h2 className="text-body-lg font-bold text-gray-700 pb-1 2xl-pb-2">
            {tabContent.heading}
          </h2>
          <p className="pb-3 text-body-sm text-gray-600">
            {tabContent.subtext}
          </p>
          <form className=" space-y-1 lg:space-y-2">
            {/* Full Name / Business Email */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name*"
                className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1 md:py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none  focus:ring-primary focus:border-[#1D1EE3]"
              />
              <input
                type="email"
                placeholder="Business Email*"
                className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1 md:py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none  focus:ring-primary focus:border-[#1D1EE3]"
              />
              <div className="flex w-full overflow-hidden rounded-lg border border-gray-200 bg-[#F9F9F9] text-gray-700  focus:outline-none  focus:ring-primary focus:border-[#1D1EE3]">
                {/* Country Code */}
                <div className="relative">
                  <select
                    defaultValue="+91"
                    className="h-full appearance-none border-r border-gray-200 bg-[#F7F5F1] py-1 md:py-1.5 pl-3 pr-8 text-sm text-gray-700 outline-none"
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
                  placeholder="Phone Number*"
                  className="flex-1 bg-[#F7F5F1] px-4 py-1.5 md:py-2  text-sm text-gray-700 placeholder:text-gray-400 outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mb-4">
            <input
                type="text"
                placeholder="Comapny Name*"
                className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1 md:py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none  focus:ring-primary focus:border-[#1D1EE3]"
              />
              <input
                type="text"
                placeholder="Job Title*"
                className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1 md:py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none  focus:ring-primary focus:border-[#1D1EE3]]"
              />

              
            </div>

            {/* Select Region / Tab-specific field */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-2 lg:gap-4 mb-4">
              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1 md:py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none  focus:ring-primary focus:border-[#1D1EE3]"
                >
                  <option value="" disabled>
                    Select Region*
                  </option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia-pacific">Asia Pacific</option>
                  <option value="middle-east-africa">Middle East &amp; Africa</option>
                  <option value="latin-america">Latin America</option>
                </select>
                <ArrowDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative" key={activeTab}>
                <select
                  defaultValue=""
                  className="w-full appearance-none rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1 md:py-1.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none  focus:ring-primary focus:border-[#1D1EE3]"
                >
                  <option value="" disabled>
                    {tabContent.extraFieldLabel}
                  </option>
                  {tabContent.extraFieldOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ArrowDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Message / Requirements */}
            <textarea
              placeholder="Message/Requirements*"
              rows={2}
              className="w-full rounded-lg border border-gray-200 bg-[#F7F5F1] px-4 py-1.5 md:py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D1EE3]/30 focus:border-[#1D1EE3] resize-none"
            />

            {/* File attachment */}
            <label
              htmlFor="file-attachment"
              className="flex flex-col items-center justify-center gap-0.5 w-full rounded-lg border border-dashed border-gray-300 bg-[#F7F5F1] px-4 py-2 text-center cursor-pointer hover:border-[#1D1EE3] transition-colors"
            >
              <Upload className="w-4 h-4 text-gray-400" />
              <span className="text-xs text-gray-600">
                {attachedFile ? attachedFile.name : "Click to attach a file"}
              </span>
              <span className="text-[10px] text-gray-400">PDF, DOC, PNG up to 10MB</span>
              <input
                id="file-attachment"
                type="file"
                className="hidden"
                onChange={(e) => setAttachedFile(e.target.files?.[0] ?? null)}
              />
            </label>

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

            <label className="flex items-start gap-2 pt-0">
              <input
                type="checkbox"
                checked={agreedToPolicy}
                onChange={(e) => setAgreedToPolicy(e.target.checked)}
                className="mt-0.5 w-3 h-3 shrink-0 rounded border-gray-300 text-[#1D1EE3] focus:ring-[#1D1EE3]"
              />
              <p className="text-xs text-gray-400">
                I agree to SkyQuest's{" "}
                <a href="#" className="text-[#1D1EE3] underline tracking-wide">
                  Privacy Policy
                </a>{" "}
                and consent to being contacted regarding my inquiry.
              </p>
            </label>
          </form>
        </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (<>
  <ContactHero />
  <Marquee />
  <LocationsSection/>
  <ContactBanner />
  </>)

}
