export type Report = {
  id: number;
  type: string;
  date: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  imageUrl: string;
  imageAlt: string;
};

const REPORT_VARIANTS: (Omit<Report, "id" | "thumbnailUrl" | "imageUrl" | "imageAlt"> & {
  photoId: string;
})[] = [
  {
    type: "Report",
    date: "May 18, 2026",
    title: "Emerging Trends and Markets in the Fertilizers & Agri-Chemicals Industry",
    description: "A data-driven look at seed replacement rates, crop health, and variety adoption shaping the next decade of agri-chemical demand.",
    photoId: "1625246333195-78d9c38ad449",
  },
  {
    type: "Whitepaper",
    date: "Apr 02, 2026",
    title: "The State of AI Adoption in Public Sector Governance",
    description: "How governments are deploying machine learning to modernise service delivery, and the governance frameworks needed to keep it accountable.",
    photoId: "1555881400-74d7acaacd8b",
  },
  {
    type: "Case Study",
    date: "Mar 21, 2026",
    title: "MineralIQ: Predictive Geology in Action",
    description: "How a national mining operator cut exploration costs by 30% using predictive geology and satellite-verified survey data.",
    photoId: "1547149600-a6cdf8fce50c",
  },
  {
    type: "Report",
    date: "Feb 14, 2026",
    title: "Climate Risk and ESG: A 2026 Investor Briefing",
    description: "An investor-focused breakdown of climate risk exposure, ESG compliance shifts, and the sustainability metrics now driving capital allocation.",
    photoId: "1509391366360-2e959784a276",
  },
  {
    type: "Report",
    date: "Jan 30, 2026",
    title: "Digital Transformation Benchmarks Across Emerging Economies",
    description: "Benchmarking data strategy, ML adoption, and responsible AI governance across 20 emerging-market enterprises.",
    photoId: "1558618666-fcd25c85cd64",
  },
  {
    type: "Case Study",
    date: "Jan 05, 2026",
    title: "Inspect Global: Remote Infrastructure Monitoring at Scale",
    description: "How AI-powered anomaly detection reduced field visits by 40% for a multinational infrastructure operator.",
    photoId: "1504711434969-e33886168f5c",
  },
  {
    type: "Whitepaper",
    date: "Dec 12, 2025",
    title: "Business Intelligence in Volatile Markets",
    description: "A framework for building competitive intelligence pipelines that hold up under market volatility and rapid policy change.",
    photoId: "1454165804606-c3d57bc86b40",
  },
  {
    type: "Report",
    date: "Nov 22, 2025",
    title: "Integrated Program Management for Cross-Border Infrastructure",
    description: "Lessons from delivering on-time, on-budget infrastructure programmes across multiple regulatory jurisdictions.",
    photoId: "1600880292203-757bb62b4baf",
  },
  {
    type: "Case Study",
    date: "Oct 08, 2025",
    title: "Social Impact & CSR: Measuring What Matters",
    description: "How a Fortune 500 CSR programme moved from output tracking to measurable, community-verified social value.",
    photoId: "1488521787991-ed7bbaae773c",
  },
  {
    type: "Whitepaper",
    date: "Sep 15, 2025",
    title: "DeCarbonX: Satellite-Verified Carbon Accounting",
    description: "A technical overview of how satellite data is closing the verification gap in enterprise carbon accounting.",
    photoId: "1466611653911-95081537e5b7",
  },
];

export const reports: Report[] = Array.from({ length: 14 }, (_, i) => {
  const { photoId, ...variant } = REPORT_VARIANTS[i % REPORT_VARIANTS.length];
  return {
    id: i + 1,
    ...variant,
    thumbnailUrl: `https://images.unsplash.com/photo-${photoId}?w=600&q=80`,
    imageUrl: `https://images.unsplash.com/photo-${photoId}?w=1600&q=80`,
    imageAlt: variant.title,
  };
});

export function getReportById(id: number): Report | undefined {
  return reports.find((r) => r.id === id);
}
