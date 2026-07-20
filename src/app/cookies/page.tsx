import Link from "next/link";

interface CookieSection {
  heading: string;
  headingItalic: string;
  body: string[];
  bullets?: string[];
  extra?: React.ReactNode;
}

const sections: CookieSection[] = [
  {
    heading: "What are ",
    headingItalic: "Cookies?",
    body: [
      "Cookies are small pieces of text that are stored to your computer or mobile device when you visit a website. On your further visits to that website, the information stored in the cookie is sent back to the website. This allows the website to recognise you and tailor its content to your needs.",
    ],
  },
  {
    heading: "Agreeing to ",
    headingItalic: "Cookie Use",
    body: [
      "By continuing to use Skyquest Technology Group websites, you agree to Skyquest Technology Group's use of cookies.",
      "Many web browsers allow fine grained control of which sites to accept or deny cookie setting from. You could use these settings to limit cookie setting from Skyquest Technology Group sites or delete your cookies completely. Please note that if you do delete all your cookies, you will not be able to use some features of Skyquest Technology Group websites.",
      "There are links on this page to specifically opt out of Skyquest Technology Group's external tracking services.",
      "For what do Skyquest Technology Group websites use cookies?",
    ],
  },
  {
    heading: "Strictly Required ",
    headingItalic: "Cookies",
    body: [
      "For our subscription environment, Skyquest Technology Group websites allow you to log in to access your subscription or paid content. Cookies are used to securely identify you on your current services, to simplify authentication when you navigate to other Skyquest Technology Group services, and to track that your usage complies with your license to use our paid subscription services.",
      "For our e-commerce platforms, cookies help track what services you have added to a basket and allow you successfully to complete your purchase of our services.",
    ],
  },
  {
    heading: "Functionality ",
    headingItalic: "Cookies",
    body: [
      "Cookies are used on individual Skyquest Technology Group websites to tailor your experience. For instance, cookies permit:",
    ],
    bullets: [
      "some Skyquest Technology Group websites to determine your regional location and use this information to tailor contact details or website elements so that they are more relevant to you.",
      "live chat support",
      "the website to remember your log-in details.",
      "you to share pages with social networks like Facebook, Twitter and LinkedIn.",
    ],
  },
  {
    heading: "Performance ",
    headingItalic: "Cookies",
    body: [
      "When you buy something, another party must verify your credit card. In addition, the name of your company (but not your name or contact information) may be shared with one of our third party suppliers depending upon the information you bought.",
      "From time to time Skyquest Technology Group may send marketing emails informing you of different products and services relating to Skyquest Technology Group, if you do not wish to receive these emails do not check the appropriate box when you register or alternatively you may unsubscribe as detailed below.",
    ],
  },
  {
    heading: "Behaviourally Targeted ",
    headingItalic: "Advertising Cookies",
    body: [
      "We utilise other cookies to analyse how you use our websites and to monitor website performance. This allows us to provide a high quality experience by customising our offerings and quickly identifying and fixing any issues that arise. For example, we might use performance cookies to keep track of which pages are most popular to determine which method of linking between pages is most effective, and to determine why some pages are receiving error messages. We might also use these cookies to highlight articles or website services that we think will be of interest to you based on your usage of the website.",
      "If you access our website as a non-customer, then the browsing data collected is anonymised before any reporting is done; we cannot track back to the pages you visit.",
      "If you access our website as a customer, then we track what information individuals access in order to report about the amount and type of information that your users access.",
    ],
    extra: (
      <div className="space-y-3">
        <p className="font-semibold text-black">
          Tools and technologies that Skyquest Technology Group uses for analytics:
        </p>

        <p>
          <span className="font-semibold text-black">Mixpanel</span> – used for clients and non-clients
          <br />
          <a href="#" className="text-primary hover:underline">
            Click here
          </a>{" "}
          to opt out or read Mixpanel&apos;s{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <p>
          Google Analytics used for clients and non-clients.
          <br />
          <a href="#" className="text-primary hover:underline">
            Click here
          </a>{" "}
          to opt out or read Google&apos;s{" "}
          <a href="#" className="text-primary hover:underline">
            Privacy Policy
          </a>
        </p>

        <p>
          <span className="font-semibold text-black">Salesforce</span> – used to track contact us requests
          and marketing campaign effectiveness.{" "}
          <a href="#" className="text-primary hover:underline">
            Click here
          </a>{" "}
          to read the Salesforce Privacy Policy.
        </p>

        <p>
          <span className="font-semibold text-black">SaleCycle</span> – SaleCycle uses cookies to collect
          information from your device such as products which were recently added to your basket without
          completion of your order. For more information please visit{" "}
          <a
            href="http://www.salecycle.com/service-privacy-notice"
            className="text-primary hover:underline break-all"
          >
            http://www.salecycle.com/service-privacy-notice
          </a>
        </p>

        <p>
          <span className="font-semibold text-black">LinkedIn</span> – LinkedIn uses cookies and tags to
          collect information to better serve you relevant ads based on previous behavior and improve our
          products.
        </p>
      </div>
    ),
  },
];

export default function CookiesPage() {
  return (
    <section className="bg-white">
      <div className="hero-container">
        <div className="px-4 lg:px-0">
          <div className="max-w-4xl border border-gray-200 divide-y divide-gray-200">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="px-5 py-3 sm:px-6">
              <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
                <li>
                  <Link href="/" className="hover:text-muted transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-gray-700">Cookies</li>
              </ol>
            </nav>

            {/* Header */}
            <div className="p-5 sm:p-6">
              <p className="text-primary mb-2">Skyquest</p>
              <h2 className="font-semibold text-black">Cookies</h2>
            </div>

            {sections.map((section, i) => (
              <div key={i} className="p-5 sm:p-6">
                <h2 className="font-semibold text-black mb-3 border-b border-gray-200 pb-3">
                  {section.heading}
                  <em className="font-normal">{section.headingItalic}</em>
                </h2>

                <div className="space-y-3 text-muted leading-[30px]">
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="text-sm">{paragraph}</p>
                  ))}

                  {section.bullets && (
                    <ul className="list-disc space-y-2 pl-5">
                      {section.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.extra && (
                    <div className="text-sm">{section.extra}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
