/**
 * Single source of truth for the six product platforms.
 *
 * Copy is kept identical to the homepage carousel (HomeProductSolution) so the
 * two surfaces read the same. That component keeps its own copy because its
 * headings are JSX; here the heading is a plain string plus a `taglineEmphasis`
 * suffix, so this file stays importable from server components.
 */

export interface Product {
  /** Display name, also the React key and the card's button label. */
  name: string;
  /** Small coloured line above the heading. */
  badge: string;
  /** Heading line. */
  tagline: string;
  /**
   * Trailing portion of `tagline` (must be a suffix of it) rendered in italic
   * serif emphasis — same convention as `titleEmphasis` on case studies.
   */
  taglineEmphasis?: string;
  /** Body copy. */
  description: string;
  /** Who it is built for. Not currently rendered; kept for future use. */
  builtFor: string;
  image: string;
  href: string;
}

export const products: Product[] = [
  {
    name: "AgriMap",
    badge: "Seed Intelligence Platform",
    tagline: "Know every seed. Reach Every Farm.",
    taglineEmphasis: "Every Farm.",
    description:
      "AgriMap gives agriculture departments, banks, and governments a real-time view of seed replacement rates, crop health, and variety adoption across every district down to the block level.",
    builtFor: "Agriculture departments, banks, governments",
    image: "/Productsoln/Pr1.jpg",
    href: "/products/agrimap",
  },
  {
    name: "Inspect Global",
    badge: "SATELLITE · GPS · AI · IOT · FUSION INTELLIGENCE",
    tagline: "Ground truth for every asset",
    taglineEmphasis: "asset",
    description:
      "InspectGlobal fuses satellite, GPS, drones, IoT, and AI into one verified record of progress, risk, and compliance so decisions don't rely on someone's word.",
    builtFor: "Infrastructure, lenders, programme auditors",
    image: "/Productsoln/Pr2.jpg",
    href: "/products/inspectglobal",
  },
  {
    name: "MineralIQ",
    badge: "Live · 12 Countries · Global Deployment",
    tagline: "Every mine. Every concession. No blind spots.",
    taglineEmphasis: "No blind spots.",
    description:
      "MineralIQ delivers predictive geology and exploration intelligence to mining companies identifying high-potential zones faster than traditional surveys.",
    builtFor: "Mining companies, exploration teams, regulators",
    image: "/Productsoln/Pr3.jpg",
    href: "/products/mineraliq",
  },
  {
    name: "Skyquest Labs",
    badge: "Tele-Pathology · AI-Assisted · 15-Minute Reports",
    tagline: "The lab that exists only as data.",
    taglineEmphasis: "only as data.",
    description:
      "Skyquest Labs connects physical diagnostic labs to qualified pathologists remotely delivering verified reports in under 15 minutes. Only data travels. Never the sample.",
    builtFor: "Diagnostic labs, hospitals, health ministries",
    image: "/Productsoln/Pr4.jpg",
    href: "/products/sqlabs",
  },
  {
    name: "DeCarbonX",
    badge: "Article 6 · NDC 3.0 · COP32 · Ethiopia Live",
    tagline: "Sovereign Climate Finance Platform",
    taglineEmphasis: "Platform",
    description:
      "DeCarbonX helps transform climate project ideas into structured, finance-ready opportunities while enabling digital MRV, climate finance documentation, funding access, and national data sovereignty.",
    builtFor: "Environment ministries, climate funds, project developers",
    image: "/Productsoln/Pr5.jpg",
    href: "/products/decarbonx",
  },
  {
    name: "AlwaysOn",
    badge: "WhatsApp-Native · No App Download · Live",
    tagline: "Government, Delivered Through A Message",
    taglineEmphasis: "A Message",
    description:
      "AlwaysON delivers AI-powered healthcare services directly through WhatsApp, enabling AI-assisted symptom assessment, multilingual support, clinical guidance, and rapid access to expert referrals.",
    builtFor: "Health ministries, public health programmes, insurers",
    image: "/Productsoln/Pr6.jpg",
    href: "/products/alwayson",
  },
  {
    name: "AgriPath",
    badge: "AgriPath",
    tagline: "Know Where It Fits. Reach Every Market.",
    taglineEmphasis: "Every Market.",
    description:
      "AgriPath AI takes any agri-technology — a seed variety, a fertilizer blend, a crop-protection product, a piece of equipment — from a technology profile to a scored, regulation-ready market entry plan, across 90+ countries in Africa and Asia.",
    builtFor: "Agri-technology innovators, research institutes, trade bodies",
    image: "/Productsoln/Agripath/Agripath.jpg",
    href: "/products/agripath",
  },
];
