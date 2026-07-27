import Image from "next/image";

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

const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.9 3h3.1l-6.8 7.8L23 21h-6.3l-4.9-6.4L6.2 21H3.1l7.3-8.3L2 3h6.4l4.4 5.8L18.9 3Zm-1.1 16.2h1.7L7.3 4.7H5.5l12.3 14.5Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.3C16.3 4.2 15.3 4 14.2 4c-2.4 0-4 1.5-4 4.1v2.4H7.7v3h2.5V21h3.3Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 18V9.9H5.6V18h2.7Zm-1.3-9.2c.9 0 1.5-.6 1.5-1.4S7.9 6 7 6c-.9 0-1.5.6-1.5 1.4S6.1 8.8 7 8.8ZM18.5 18v-4.6c0-2.4-1.3-3.6-3-3.6-1.4 0-2 .8-2.3 1.3V9.9h-2.7c0 .7 0 7.9 0 8.1h2.7v-4.5c0-.2 0-.5.1-.6.2-.5.6-1.1 1.5-1.1 1 0 1.5.8 1.5 1.9V18h2.2Z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25z" />
  </svg>
);
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