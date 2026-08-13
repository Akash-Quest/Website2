"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpSm, staggerContainer } from "@/lib/animations";
import { TwitterIcon, FacebookIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

const capabilities = [
  { label: "Data and Artificial Intelligence", href: "/capabilities/data-artificial-intelligence" },
  { label: "Digital Transformation & Emerging Technologies", href: "/capabilities/digital-transformation-emerging-technologies" },
  { label: "Strategy & Policy Advisory", href: "/capabilities/strategy-policy-advisory" },
  
  { label: "Integrated Program Management", href: "/capabilities/integrated-program-management" },
  { label: "Livelihoods & Entrepreneurship", href: "/capabilities/livelihoods-entrepreneurship" },
  { label: "Business Intelligence & Market Research", href: "/capabilities/business-intelligence-market-research" },
  { label: "Technology Transfer & Innovation", href: "/capabilities/technology-transfer-innovation" },
  { label: "Inclusive Finance & Institutional Strategy", href: "/capabilities/inclusive-finance-institutional-strategy" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" }
];

const industries = [
    { label: "AI & Digital Economy", href: "/industries/ai-digital-economy" },

  { label: "Agriculture & Food Systems", href: "/industries/agriculture-food-systems" },
  { label: "Livestock, Fisheries & Animal Health", href: "/industries/livestock-fisheries-animal-health" },
  { label: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences" },

  { label: "Climate & Environment", href: "/industries/climate-environment" },
  { label: "Energy & Utilities", href: "/industries/energy-utilities" },
  { label: "Water & Sanitation", href: "/industries/water-sanitation" },
  { label: "Financial Services & Inclusive Finance", href: "/industries/financial-services-inclusive-finance" },
  { label: "Public Sector & Digital Governance", href: "/industries/public-sector-digital-governance" },
  { label: "Social Sector", href: "/industries/social-sector" },
  { label: "Consumer Goods & Retail", href: "/industries/consumer-goods-retail" },

];

const Footer = () => {
  return (
    <footer className="bg-[#03030F] ">
      <div className="page-container py-16 pb-5">
        <motion.div
          className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap sm:justify-between gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand column */}
          <motion.div variants={fadeUpSm} className="sm:w-full lg:w-auto lg:max-w-xs lg:flex-shrink-0">
            <Link href="/" className="inline-block">
              <Image src="/Header/logo.svg" alt="SkyQuest Technology Consulting" width={128} height={40} className="w-28 sm:w-32 lg:w-36 2xl:w-40 h-auto mb-4" />
            </Link>
            <p className="text-white/80 ">
              An integrated strategy, technology and impact consulting firm helping businesses and
              governments achieve sustainable growth.
            </p>
            <div className="border-b border-white/20 mt-10 pb-6 flex gap-2 items-center">
                <h3 className=" text-body-lg text-white font-semibold">Follow Us</h3>
              {[
                { icon: <TwitterIcon />, href: "https://x.com/skyquestt" },
                { icon: <FacebookIcon />, href: "https://www.facebook.com/STI4SDG/" },
                { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/skyquest-technology-consulting-private-limited/" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-7 h-7  rounded bg-white flex items-center justify-center text-[#03030F] hover:bg-gray-200 transition-colors [&>svg]:w-6 [&>svg]:h-6"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Capabilities column */}
          <motion.div variants={fadeUpSm} className="w-full sm:w-56 lg:w-52">
            <h3 className="text-white font-bold mb-4 text-body-lg">Our Capabilities</h3>
            <ul className="space-y-2.5 text-white/80 ">
              {capabilities.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:text-white hover:underline underline-offset-2 decoration-white/40 transition-colors"
                  >
                    <p>{s.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries column */}
          <motion.div variants={fadeUpSm} className="w-full sm:w-60 lg:w-60">
            <h3 className="text-white font-bold mb-4 text-body-lg">Industries</h3>
            <ul className="space-y-2.5 text-white/80 ">
              {industries.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="hover:text-white hover:underline underline-offset-2 decoration-white/40 transition-colors"
                  >
                    <p>{s.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About column */}
          <motion.div variants={fadeUpSm} className="w-full sm:w-40 lg:w-40">
            <h3 className="text-white font-bold mb-4 text-body-lg">About Us</h3>
            <ul className="space-y-2.5 text-white/80 ">
              {aboutLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-white hover:underline underline-offset-2 decoration-white/40 transition-colors"
                  >
                    <p>{l.label}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © 2026 SkyQuest Technology Consulting. All rights reserved.
          </p>
          <div className="flex gap-4 text-white/50 ">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              
              { label: "Cookie Policy", href: "/cookies" },
            ].map(
            ({ label, href }, i, arr) => (
                <div key={label} className="flex items-center gap-4 text-xs ">
                    <Link href={href} className="hover:text-white transition-colors hover:underline underline-offset-2">
                     {label}
                    </Link> {i < arr.length - 1 && <span>·</span>}
                </div>)
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;