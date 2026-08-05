export type CookieSegment = string | { text: string; href?: string; bold?: boolean };

export interface AnalyticsTool {
  segments: CookieSegment[];
  link?: { text: string; href: string; suffix?: string };
  divider?: boolean;
}

export type CookieBlock =
  | { type: "paragraph"; segments: CookieSegment[] }
  | { type: "list"; items: string[] }
  | { type: "analyticsTools"; heading: string; tools: AnalyticsTool[] };

export interface CookieSection {
  heading: string;
  headingEmphasis: string;
  blocks: CookieBlock[];
}

export const cookiesPolicySections: CookieSection[] = [
  {
    heading: "What are ",
    headingEmphasis: "Cookies?",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "Cookies are small pieces of text that are stored to your computer or mobile device when you visit a website. On your further visits to that website, the information stored in the cookie is sent back to the website. This allows the website to recognise you and tailor its content to your needs.",
        ],
      },
    ],
  },
  {
    heading: "Agreeing to ",
    headingEmphasis: "Cookie Use",
    blocks: [
      {
        type: "paragraph",
        segments: ["By continuing to use Skyquest Technology Group websites, you agree to Skyquest Technology Group ’s use of cookies."],
      },
      {
        type: "paragraph",
        segments: [
          "Many web browsers allow fine grained control of which sites to accept or deny cookie setting from. You could use these settings to limit cookie setting from Skyquest Technology Group sites or to delete Skyquest Technology Group -set cookies completely. Please note that if you do delete all your cookies, you will not be able to use some features of Skyquest Technology Group websites.",
        ],
      },
      {
        type: "paragraph",
        segments: ["There are links on this page to specifically opt out of Skyquest Technology Group’s external tracking services."],
      },
      {
        type: "paragraph",
        segments: ["For what do Skyquest Technology Group websites use cookies?"],
      },
    ],
  },
  {
    heading: "Strictly Required ",
    headingEmphasis: "Cookies",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "For our subscription environment, Skyquest Technology Group websites allow you to log in to access your subscription or paid content. Cookies are used to securely identify you on your current services, to simplify authentication when you navigate to other Skyquest Technology Group services, and to track that your usage complies with your license to use our paid subscription services.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "For our e-commerce platforms, cookies help track what services you have added to a basket for purchase and allow you successfully to complete your purchase of our services.",
        ],
      },
    ],
  },
  {
    heading: "Functionality ",
    headingEmphasis: "Cookies",
    blocks: [
      {
        type: "paragraph",
        segments: ["Cookies are used on individual Skyquest Technology Group websites to tailor your experience. For instance, cookies permit:"],
      },
      {
        type: "list",
        items: [
          "Some Skyquest Technology Group websites to determine your regional location and use this information to tailor contact details or website elements so that they are more relevant to you.",
          "Live chat support",
          "The website to remember your log-in details.",
          "You to share pages with social networks like Facebook, Twitter and LinkedIn.",
        ],
      },
    ],
  },
  {
    heading: "Performance ",
    headingEmphasis: "Cookies",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "When you buy something, another party must verify your credit card. In addition, the name of your company (but not your name or contact information) may be shared with one of our third party suppliers depending upon the information you bought.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "From time to time Skyquest Technology Group may send marketing emails informing you of different products and services relating to Skyquest Technology Group, if you do not wish to receive these emails do not check the appropriate box when you register or alternatively you may unsubscribe as detailed below.",
        ],
      },
    ],
  },
  {
    heading: "Behaviourally Targeted ",
    headingEmphasis: "Advertising Cookies",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "We utilise other cookies to analyse how you use our websites and to monitor website performance. This allows us to provide a high quality experience by customising our offerings and quickly identifying and fixing any issues that arise. For example, we might use performance cookies to keep track of which pages are most popular to determine which method of linking between pages is most effective, and to determine why some pages are receiving error messages. We might also use these cookies to highlight articles or website services that we think will be of interest to you based on your usage of the website.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "If you access our website as a non-customer, then the browsing data collected is anonymised before any reporting is done; we cannot track back to you the pages that you visit.",
        ],
      },
      {
        type: "paragraph",
        segments: [
          "If you access our website as a customer, then we track what information individuals access in order to report about the amount and type of information that your users access.",
        ],
      },
      {
        type: "analyticsTools",
        heading: "Tools and technologies that Skyquest Technology Group uses for analytics:",
        tools: [
          {
            segments: [{ text: "Mixpanel – used for clients and non-clients", bold: true }],
            link: { text: "Click here", href: "#", suffix: " to opt out or read Mixpanel's Privacy Policy" },
          },
          {
            segments: [{ text: "Google Analytics used for clients and non-clients.", bold: true }],
            link: { text: "Click here", href: "#", suffix: " to opt out or read Google's Privacy Policy" },
          },
          {
            divider: true,
            segments: [
              { text: "Salesforce", bold: true },
              " – used to track contact us requests and marketing campaign effectiveness. For more information please visit ",
              {
                text: "https://www.salesforce.com/in/company/privacy/full_privacy/",
                href: "https://www.salesforce.com/in/company/privacy/full_privacy/",
              },
            ],
          },
          {
            segments: [
              { text: "SaleCycle", bold: true },
              " – SaleCycle uses cookies to collect information from your device such as products which were recently added to your basket without completion of your order. For more information please visit ",
              { text: "http://www.salecycle.com/service-privacy-notice", href: "http://www.salecycle.com/service-privacy-notice" },
            ],
          },
          {
            divider: true,
            segments: [
              { text: "LinkedIn", bold: true },
              " – LinkedIn uses cookies and tags to collect information to better serve you relevant ads based on previous behavior and improve our products. For more information please visit - ",
              { text: "https://www.linkedin.com/legal/privacy-policy", href: "https://www.linkedin.com/legal/privacy-policy" },
            ],
          },
        ],
      },
    ],
  },
  {
    heading: "How to Reject and ",
    headingEmphasis: "Delete Cookies",
    blocks: [
      {
        type: "paragraph",
        segments: [
          "Most web browsers automatically accept cookies. However you do not have to accept cookies and you can, should you choose to at any time, reject or block the use of cookies and delete all cookies currently stored on your device. You can find out how to do this for your particular browser by clicking “help” on your browser's menu.",
        ],
      },
    ],
  },
];
