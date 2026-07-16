import Image from "next/image";
import { TwitterIcon, FacebookIcon, LinkedInIcon } from "@/components/icons/SocialIcons";

const services = [
  "Management & Business Consulting",
  "Data, AI & Analytics",
  "Strategy & Transformation",
  "Market Research",
  "Digital & IT Consulting",
  "Social / CSR / ESG",
  "Innovation R&D & Technology",
  "Operations & Performance",
  "Public Sector & Development",
  "Government & PSU",
  "Customer Experience & Design",
  "AI & Digital Transformation",
];

const aboutLinks = ["Our Story", "Our Team", "Careers", "Partners", "Media & News"];

const Footer = () => {
  return (
    <footer className="bg-[#03030F] ">
      <div className="page-container py-16 pb-5">
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap sm:justify-between gap-8 lg:gap-10">
          {/* Brand column */}
          <div className="sm:w-full lg:w-auto lg:max-w-xs lg:flex-shrink-0">
            <Image src="/Header/logo.svg" alt="SkyQuest Technology Consulting" width={128} height={40} className="w-28 sm:w-32 lg:w-36 2xl:w-40 h-auto mb-4" />
            <p className="text-white/80 text-sm 2xl:text-base">
              An integrated strategy, technology and impact consulting firm helping businesses and
              governments achieve sustainable growth.
            </p>
            <div className="border-b border-white/20 mt-10 pb-6 flex gap-2 items-center">
                <h3 className="text-white text-sm font-semibold">Follow Us</h3>
              {[<TwitterIcon />, <FacebookIcon />, <LinkedInIcon />, ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8  rounded bg-white flex items-center justify-center text-[#03030F] hover:bg-gray-200 transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="w-full sm:w-56 lg:w-52">
            <h3 className="text-white text-sm font-bold mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-white/80 text-xs">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="hover:text-white hover:underline underline-offset-2 decoration-white/40 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div className="w-full sm:w-40 lg:w-40">
            <h3 className="text-white font-bold text-sm mb-4">About Us</h3>
            <ul className="space-y-2.5 text-white/80 text-xs">
              {aboutLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                   className="hover:text-white hover:underline underline-offset-2 decoration-white/40 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-2.5 text-white/80 text-xs">
              {[
                { href: "tel:+13513334748", label: "(+1) 351-333-4748" },
                { href: "tel:+919265657635", label: "+91 9265 657 635" },
                { href: "mailto:info@skyquestt.com", label: "info@skyquestt.com" },
                { href: "mailto:sales@skyquestt.com", label: "sales@skyquestt.com" },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className=" hover:text-white hover:underline underline-offset-2 decoration-white/40 transition-colors"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/80 text-xs">
            © 2026 SkyQuest Technology Consulting. All rights reserved.
          </p>
          <div className="flex gap-4 text-white/80 text-xs">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map(
            (link, i, arr) => (
                <div key={link} className="flex items-center gap-4">
                    <a href="#" className="hover:text-white transition-colors hover:underline underline-offset-2">
                     {link}
                    </a> {i < arr.length - 1 && <span>·</span>}
                </div>)
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;