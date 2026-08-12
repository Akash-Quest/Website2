 import Image from "next/image";
 function ContactBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full rounded-xl page-container ${className}`}>

        {/* Decorative swirl overlay */}
        <div className="relative overflow-hidden rounded-xl border">
        <Image
          src="/Contact/ContactUs.jpg"
          alt=""
          fill
          className="absolute inset-0 z-0 object-cover"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 sm:px-10 py-6 text-white">
          <div className="text-left">
            <p className="font-semibold text-sm sm:text-base text-white">Sales Inquiry</p>
            <p className="text-xs sm:text-sm text-white">sales@skyquestt.com</p>
          </div>

          <div className="text-left">
            <p className="font-semibold text-sm sm:text-base text-white">Media Inquiry</p>
            <p className="text-xs sm:text-sm text-white">info@skyquestt.com</p>
          </div>

          <div className="text-left">
            <p className="font-semibold text-sm sm:text-base text-white">Careers Inquiry</p>
            <p className="text-xs sm:text-sm text-white">careers@skyquestt.com</p>
          </div>
        </div>

        {/* Bottom follow bar */}
        <div className="relative z-10 mx-4 sm:mx-6 mb-4 sm:mb-6 rounded-xl bg-white flex items-center justify-between px-4 sm:px-6 py-3">
          <p className="text-sm sm:text-base font-medium text-gray-900">
            Follow Us To Know{" "}
            <span className="font-semibold text-primary">#SkyQuest</span>
          </p>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/skyquest-technology-consulting-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 rounded-md bg-[#0A66C2] hover:opacity-90 transition-opacity"
            >
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6    text-white"
>
  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.36 4.25 5.43v6.32zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
</svg>
            </a>
            <a
              href="https://x.com/skyquestt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex items-center justify-center w-8 h-8 rounded-md bg-black hover:opacity-90 transition-opacity"
            >
              {/* X logo */}
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="currentColor"
                className="text-white"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
           
          </div>
        </div>
      </div>
      </div>
  );
}
export default ContactBanner;