"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpSm, staggerContainer } from "@/lib/animations";
import { TwitterIcon, FacebookIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

const services = [
  { label: "Digital Transformation & Emerging Technologies", href: "/services/digital-transformation-emerging-technologies" },
  { label: "Public Sector Advisory", href: "/services/public-sector-advisory" },
  { label: "Data and Artificial Intelligence", href: "/services/data-artificial-intelligence" },
  { label: "Integrated Program Management", href: "/services/integrated-program-management" },
  { label: "Social Impact & CSR", href: "/services/social-impact-csr" },
  { label: "Business Intelligence & Market Research", href: "/services/business-intelligence-market-research" },
  { label: "Climate, Sustainability & ESG Advisory", href: "/services/climate-sustainability-esg-advisory" },
  { label: "Agriculture & Livestock", href: "/services/agriculture-livestock" },
];

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" }
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
              {[<TwitterIcon />, <FacebookIcon />, <LinkedInIcon />, ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-7 h-7  rounded bg-white flex items-center justify-center text-[#03030F] hover:bg-gray-200 transition-colors [&>svg]:w-6 [&>svg]:h-6"
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services column */}
          <motion.div variants={fadeUpSm} className="w-full sm:w-56 lg:w-52">
            <h3 className="text-white font-bold mb-4 text-body-lg">Our Services</h3>
            <ul className="space-y-2.5 text-white/80 ">
              {services.map((s) => (
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

          {/* Contact column */}
          <motion.div variants={fadeUpSm}>
            <h3 className="text-white font-bold mb-4 text-body-lg">Connect With Us</h3>
            <ul className="space-y-2.5 text-white/80 ">
              {[
                { href: "tel:+13513334748", label: "(+1) 351-333-4748" },
                { href: "tel:+919265657635", label: "+91 9265 657 635" },
                { href: "mailto:info@skyquestt.com", label: "info@skyquestt.com" },
                { href: "mailto:sales@skyquestt.com", label: "sales@skyquestt.com" },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="hover:text-white hover:underline underline-offset-2 decoration-white/40 transition-colors"
                  >
                    <p>{c.label}</p>
                  </a>
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