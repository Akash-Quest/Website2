import type { MetadataRoute } from "next";

import { caseStudiesData } from "@/Constants/caseStudies";
import { insightData } from "@/Constants/Insight ";
import { products } from "@/Constants/products";
import { SITE_URL } from "@/lib/site";
import { slugify } from "@/lib/slug";


function parseDate(value: string): Date | undefined {
  const numeric = /^(\d{2})-(\d{2})-(\d{4})$/.exec(value);
  if (numeric) {
    const [, day, month, year] = numeric;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

/** Routes with no data source of their own, listed by hand. */
const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },

  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/case-studies", changeFrequency: "weekly", priority: 0.8 },
  { path: "/insight", changeFrequency: "weekly", priority: 0.8 },
  { path: "/Though-Leadership", changeFrequency: "weekly", priority: 0.7 },

  { path: "/capabilities/strategy-policy-advisory", changeFrequency: "monthly", priority: 0.8 },
  { path: "/capabilities/business-intelligence-market-research", changeFrequency: "monthly", priority: 0.8 },
  { path: "/capabilities/data-artificial-intelligence", changeFrequency: "monthly", priority: 0.8 },
  { path: "/capabilities/digital-transformation-emerging-technologies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/capabilities/technology-transfer-innovation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/capabilities/integrated-program-management", changeFrequency: "monthly", priority: 0.8 },
  { path: "/capabilities/livelihoods-entrepreneurship", changeFrequency: "monthly", priority: 0.8 },
  { path: "/capabilities/inclusive-finance-institutional-strategy", changeFrequency: "monthly", priority: 0.8 },

  { path: "/industries/agriculture-food-systems", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/livestock-fisheries-animal-health", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/healthcare-life-sciences", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/ai-digital-economy", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/climate-environment", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/energy-utilities", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/water-sanitation", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/financial-services-inclusive-finance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/public-sector-digital-governance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/social-sector", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries/consumer-goods-retail", changeFrequency: "monthly", priority: 0.8 },

  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookies", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Product detail pages come from the same array the cards render from, so a
  // new platform appears here without a second edit.
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}${product.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Slugs must match `generateStaticParams` in the [slug] routes, which derives
  // them the same way.
  const caseStudyPages: MetadataRoute.Sitemap = caseStudiesData.caseStudies.map((study) => ({
    url: `${SITE_URL}/case-studies/${slugify(study.title)}`,
    lastModified: parseDate(study.date) ?? lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const insightPages: MetadataRoute.Sitemap = insightData.caseStudies.map((insight) => ({
    url: `${SITE_URL}/insight/${slugify(insight.title)}`,
    lastModified: parseDate(insight.date) ?? lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...caseStudyPages, ...insightPages];
}
