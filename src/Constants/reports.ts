/**
 * Market-research report catalogue backing the /reports listing page.
 *
 * Kept as plain data (no JSX) so it stays importable from server components —
 * same convention as `products.ts`.
 */

import { slugify } from "@/lib/slug";

export type Report = {
  /** Catalogue code shown in the card's meta line, e.g. "SQMIG15I2122". */
  id: string;
  /** URL segment for the detail page, e.g. "tertiary-butylamine-market". */
  slug: string;
  /** Short market name used in headings, e.g. "Tertiary Butylamine Market". */
  name: string;
  title: string;
  /** Card body copy — the market-size summary. */
  description: string;
  /** Portrait cover thumbnail. */
  image: string;
  region: string;
  /** Display string for the meta line, e.g. "August, 2026". */
  publishedDate: string;
  /** ISO date used for sorting; `publishedDate` is only for display. */
  publishedOn: string;
  category: string;
  /** Which catalogue the report belongs to — drives the "Select Report" filter. */
  reportType: "Published Reports" | "Upcoming Reports";
  /** Price in USD. */
  price: number;
  /** Count of supplementary documents; 0 renders as "No Documents". */
  documents: number;
  /** Page count of the full report, shown in the card's meta line. */
  pages: number;
};

const COVER = "/AboutUs/reportImage.webp";

export const reports: Report[] = [
  {
    id: "SQMIG15I2108",
    slug: "sls-sles-and-las-market",
    name: "SLS, SLES, and LAS Market",
    title:
      "SLS, SLES, and LAS Market By Product Type (SLS, SLES, LAS), By Form (Powder, Liquid, Paste), By Application (Personal Care, Household Detergents, Industrial Cleaners, Others), By End Use Industry, By Grade, By Distribution Channel, By Region - Industry Forecast 2026-2033",
    description:
      "Global SLS, SLES and LAS Market size was valued at USD 4.9 Billion in 2024 and is poised to grow from USD 5.08 Billion in 2025 to USD 6.61 Billion by 2033, growing at a CAGR of 3.3% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "August, 2026",
    publishedOn: "2026-08-20",
    category: "Chemicals",
    reportType: "Published Reports",
    price: 5300,
    documents: 0,
    pages: 214,
  },
  {
    id: "SQMIG15I2122",
    slug: "tertiary-butylamine-market",
    name: "Tertiary Butylamine Market",
    title:
      "Tertiary Butylamine Market By Purity (Below 99%, 99% and Above), By Application (Pharmaceutical Intermediates, Agrochemical Intermediates, Chemical Synthesis, Others), By Grade, By End Use Industry, By Packaging Type, By Distribution Channel, By Region - Industry Forecast 2026-2033",
    description:
      "Global Tertiary Butylamine Market size was valued at USD 918.6 Million in 2024 and is poised to grow from USD 958.14 Million in 2025 to USD 1483.77 Million by 2033, growing at a CAGR of 4.4% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "August, 2026",
    publishedOn: "2026-08-14",
    category: "Chemicals",
    reportType: "Published Reports",
    price: 5300,
    documents: 3,
    pages: 198,
  },
  {
    id: "SQMIG15I2131",
    slug: "sodium-silicate-market",
    name: "Sodium Silicate Market",
    title:
      "Sodium Silicate Market By Grade (Neutral, Alkaline), By Form (Solid, Liquid), By Application (Detergents, Pulp & Paper, Water Treatment, Catalysts, Others), By End Use Industry, By Distribution Channel, By Region - Industry Forecast 2026-2033",
    description:
      "Global Sodium Silicate Market size was valued at USD 7.42 Billion in 2024 and is poised to grow from USD 7.71 Billion in 2025 to USD 10.34 Billion by 2033, growing at a CAGR of 3.7% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "July, 2026",
    publishedOn: "2026-07-28",
    category: "Chemicals",
    reportType: "Published Reports",
    price: 5300,
    documents: 2,
    pages: 186,
  },
  {
    id: "SQMIG15I2144",
    slug: "industrial-solvents-market",
    name: "Industrial Solvents Market",
    title:
      "Industrial Solvents Market By Type (Hydrocarbon, Oxygenated, Halogenated), By Source (Bio-based, Petrochemical), By Application (Paints & Coatings, Adhesives, Printing Inks, Pharmaceuticals, Others), By Region - Industry Forecast 2026-2033",
    description:
      "Global Industrial Solvents Market size was valued at USD 32.5 Billion in 2024 and is poised to grow from USD 33.8 Billion in 2025 to USD 45.9 Billion by 2033, growing at a CAGR of 3.9% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "July, 2026",
    publishedOn: "2026-07-11",
    category: "Chemicals",
    reportType: "Published Reports",
    price: 4800,
    documents: 0,
    pages: 242,
  },
  {
    id: "SQMIG15I2150",
    slug: "specialty-polymers-market",
    name: "Specialty Polymers Market",
    title:
      "Specialty Polymers Market By Product (Engineering Plastics, High-Performance Elastomers, Conductive Polymers), By Processing Technology, By End Use Industry (Automotive, Electronics, Healthcare, Packaging), By Region - Industry Forecast 2026-2033",
    description:
      "Global Specialty Polymers Market size was valued at USD 78.4 Billion in 2024 and is poised to grow from USD 82.1 Billion in 2025 to USD 118.6 Billion by 2033, growing at a CAGR of 4.7% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "June, 2026",
    publishedOn: "2026-06-26",
    category: "Chemicals",
    reportType: "Published Reports",
    price: 5300,
    documents: 4,
    pages: 231,
  },
  {
    id: "SQMIG25A1043",
    slug: "precision-fermentation-ingredients-market",
    name: "Precision Fermentation Ingredients Market",
    title:
      "Precision Fermentation Ingredients Market By Product (Proteins, Enzymes, Pigments), By Source, By Application (Dairy Alternatives, Meat Alternatives, Nutraceuticals), By End Use, By Region - Industry Forecast 2026-2033",
    description:
      "Global Precision Fermentation Ingredients Market size was valued at USD 2.64 Billion in 2024 and is poised to grow from USD 3.12 Billion in 2025 to USD 11.8 Billion by 2033, growing at a CAGR of 18.1% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "June, 2026",
    publishedOn: "2026-06-09",
    category: "Agriculture",
    reportType: "Published Reports",
    price: 4600,
    documents: 1,
    pages: 176,
  },
  {
    id: "SQMIG35C1187",
    slug: "medical-device-coatings-market",
    name: "Medical Device Coatings Market",
    title:
      "Medical Device Coatings Market By Type (Hydrophilic, Antimicrobial, Drug-Eluting), By Material, By Application (Cardiovascular, Orthopaedic, Surgical Instruments), By End Use, By Region - Industry Forecast 2026-2033",
    description:
      "Global Medical Device Coatings Market size was valued at USD 14.2 Billion in 2024 and is poised to grow from USD 15.3 Billion in 2025 to USD 27.4 Billion by 2033, growing at a CAGR of 7.6% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "May, 2026",
    publishedOn: "2026-05-30",
    category: "Healthcare",
    reportType: "Published Reports",
    price: 5300,
    documents: 0,
    pages: 205,
  },
  {
    id: "SQMIG45E1266",
    slug: "grid-scale-battery-storage-market",
    name: "Grid-Scale Battery Storage Market",
    title:
      "Grid-Scale Battery Storage Market By Technology (Lithium-Ion, Flow, Sodium-Sulphur), By Duration, By Ownership Model, By Application (Peak Shaving, Frequency Regulation, Renewable Integration), By Region - Industry Forecast 2026-2033",
    description:
      "Global Grid-Scale Battery Storage Market size was valued at USD 41.7 Billion in 2024 and is poised to grow from USD 52.3 Billion in 2025 to USD 186.9 Billion by 2033, growing at a CAGR of 17.3% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "May, 2026",
    publishedOn: "2026-05-12",
    category: "Energy",
    reportType: "Published Reports",
    price: 5900,
    documents: 5,
    pages: 263,
  },
  {
    id: "SQMIG55S1391",
    slug: "edge-ai-semiconductors-market",
    name: "Edge AI Semiconductors Market",
    title:
      "Edge AI Semiconductors Market By Device Type (Processors, Accelerators, Memory), By Node Size, By Deployment, By End Use Industry (Automotive, Consumer Electronics, Industrial), By Region - Industry Forecast 2026-2033",
    description:
      "Global Edge AI Semiconductors Market size was valued at USD 19.8 Billion in 2024 and is poised to grow from USD 24.6 Billion in 2025 to USD 96.2 Billion by 2033, growing at a CAGR of 18.6% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "April, 2026",
    publishedOn: "2026-04-22",
    category: "Technology",
    reportType: "Published Reports",
    price: 6200,
    documents: 2,
    pages: 189,
  },
  {
    id: "SQMIG15I2168",
    slug: "green-ammonia-market",
    name: "Green Ammonia Market",
    title:
      "Green Ammonia Market By Technology (Alkaline Electrolysis, PEM, Solid Oxide), By End Use (Fertilizers, Marine Fuel, Power Generation, Industrial Feedstock), By Region - Industry Forecast 2026-2033",
    description:
      "Global Green Ammonia Market size was valued at USD 0.42 Billion in 2024 and is poised to grow from USD 0.68 Billion in 2025 to USD 14.7 Billion by 2033, growing at a CAGR of 46.2% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "April, 2026",
    publishedOn: "2026-04-03",
    category: "Chemicals",
    reportType: "Upcoming Reports",
    price: 5300,
    documents: 0,
    pages: 222,
  },
  {
    id: "SQMIG25A1077",
    slug: "biostimulants-market",
    name: "Biostimulants Market",
    title:
      "Biostimulants Market By Active Ingredient (Humic Substances, Seaweed Extracts, Microbial Amendments), By Crop Type, By Application Method, By Form, By Region - Industry Forecast 2026-2033",
    description:
      "Global Biostimulants Market size was valued at USD 3.81 Billion in 2024 and is poised to grow from USD 4.24 Billion in 2025 to USD 9.63 Billion by 2033, growing at a CAGR of 10.8% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "March, 2026",
    publishedOn: "2026-03-18",
    category: "Agriculture",
    reportType: "Upcoming Reports",
    price: 4600,
    documents: 1,
    pages: 167,
  },
  {
    id: "SQMIG45E1298",
    slug: "carbon-capture-utilisation-and-storage-market",
    name: "Carbon Capture, Utilisation and Storage Market",
    title:
      "Carbon Capture, Utilisation and Storage Market By Technology (Pre-Combustion, Post-Combustion, Oxy-Fuel), By Service, By End Use Industry (Power, Cement, Steel, Oil & Gas), By Region - Industry Forecast 2026-2033",
    description:
      "Global CCUS Market size was valued at USD 3.94 Billion in 2024 and is poised to grow from USD 4.62 Billion in 2025 to USD 16.3 Billion by 2033, growing at a CAGR of 17.1% during the forecast period (2026-2033).",
    image: COVER,
    region: "Global",
    publishedDate: "March, 2026",
    publishedOn: "2026-03-05",
    category: "Energy",
    reportType: "Upcoming Reports",
    price: 5900,
    documents: 3,
    pages: 248,
  },
];

/** Filter option lists, derived from the catalogue so they can never drift. */
export const REPORT_TYPE_OPTIONS = [
  "All Reports",
  "Published Reports",
  "Upcoming Reports",
] as const;

export const ALL_CATEGORIES = "All Categories";

/** Every distinct category in the catalogue, alphabetical. */
export const CATEGORIES: string[] = Array.from(
  new Set(reports.map((report) => report.category))
).sort();

export const CATEGORY_OPTIONS: string[] = [ALL_CATEGORIES, ...CATEGORIES];


/** URL hash that opens the "Request Customization" tab on a report detail page. */
export const CUSTOMIZATION_HASH = "request-customization";

export function getReportBySlug(slug: string): Report | undefined {
  return reports.find((report) => report.slug === slug);
}

export function getCategoryBySlug(slug: string): string | undefined {
  return CATEGORIES.find((category) => slugify(category) === slug);
}

export const SORT_OPTIONS = [
  "Newest First",
  "Oldest First",
  "Price: Low to High",
  "Price: High to Low",
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];
