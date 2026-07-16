export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; emphasis?: string }
  | { type: "callout"; title: string; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Author = {
  name: string;
  org: string;
};

export type Report = {
  id: number;
  type: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  imageUrl: string;
  imageAlt: string;
  authors: Author[];
  body: ContentBlock[];
};

const DEFAULT_AUTHORS: Author[] = [
  { name: "SkyQuest Technology Consulting", org: "SkyQuest Technology Consulting" },
];

/**
 * Synthesises a reasonable body for variants that don't hand-author one.
 * Once real CMS content exists, this goes away and `body` is populated
 * directly from the CMS response instead.
 */
function buildDefaultBody(title: string, description: string, imageUrl: string): ContentBlock[] {
  return [
    { type: "paragraph", text: description },
    {
      type: "heading",
      text: "Why It Matters",
    },
    {
      type: "paragraph",
      text: `${title} reflects a broader shift toward data-backed decision making. Organisations that act on these findings early are better positioned to adapt as the underlying market conditions continue to evolve.`,
    },
    {
      type: "callout",
      title: "Key Takeaways",
      items: [
        "Findings are grounded in primary research and verified data sources.",
        "Recommendations are prioritised by impact and ease of implementation.",
        "Analysis accounts for regional and regulatory variation where relevant.",
      ],
    },
    {
      type: "image",
      src: imageUrl,
      alt: title,
      caption: title,
    },
  ];
}

const REPORT_VARIANTS: (Omit<
  Report,
  "id" | "thumbnailUrl" | "imageUrl" | "imageAlt" | "body" | "authors" | "readTime"
> & {
  photoId: string;
  readTime?: string;
  authors?: Author[];
  body?: (imageUrl: string) => ContentBlock[];
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
  {
    // Fully hand-authored example — matches the reference layout exactly.
    type: "Article",
    date: "Jun 28, 2026",
    readTime: "8 Min read",
    title: "Medical Device Innovation in 2025: Redefining the Frontiers of Clinical Technology",
    description: "How intelligence, personalisation, and real-time data moved medical devices from experimental to essential in 2025.",
    photoId: "1584982751601-97dcc096659c",
    body: (imageUrl) => [
      {
        type: "paragraph",
        text: "2025 marked a turning point for the global medical device industry, a year when intelligence, personalization, and real-time data moved from experimental to essential. What had long been driven by incremental engineering improvements evolved into a convergence of advanced materials, intelligent systems, and digitally enabled design philosophies. Medical devices were no longer viewed as isolated tools but as adaptive, data-driven extensions of clinical decision-making and patient care.",
      },
      {
        type: "paragraph",
        text: "Healthcare systems worldwide faced growing burdens from chronic disease prevalence, aging populations, clinician shortages, and rising care costs. In response, medical device manufacturers accelerated innovation by integrating real-time sensing, connectivity, and artificial intelligence (AI) into therapeutic and diagnostic platforms. Regulatory pathways also adapted, enabling faster translation of breakthrough technologies into clinical practice without compromising safety or efficacy.",
      },
      {
        type: "paragraph",
        text: "The result was a market defined by precision, personalization, and performance, where next-generation devices actively contributed to patient outcomes rather than serving purely mechanical functions.",
      },
      { type: "heading", text: "Why 2025 Was ", emphasis: "Different" },
      {
        type: "paragraph",
        text: "Unlike prior years marked by incremental progress, 2025 represented a clear inflection point for the medical device industry. Artificial intelligence shifted from experimental pilots to embedded, clinically trusted functionality within core devices. Wearables and at-home therapies gained regulatory approval and real-world validation, moving decisively into mainstream care. At the same time, maturing regulatory frameworks enabled faster commercialization without compromising safety, allowing innovation to scale with confidence rather than caution.",
      },
      {
        type: "callout",
        title: "Key Takeaways",
        items: [
          "Medical device industry consolidation in 2025 was driven less by scale expansion and more by technological adjacency and capability depth.",
          "Medical device industry consolidation in 2025 was driven less by scale expansion and more by technological adjacency and capability depth.",
          "Medical device industry consolidation in 2025 was driven less by scale expansion and more by technological adjacency and capability depth.",
          "Medical device industry consolidation in 2025 was driven less by scale expansion and more by technological adjacency and capability depth.",
        ],
      },
      { type: "heading", text: "Key consolidation ", emphasis: "patterns included:" },
      {
        type: "paragraph",
        text: "Medical device industry consolidation in 2025 was driven less by scale expansion and more by technological adjacency and capability depth. Leading manufacturers prioritized acquisitions and partnerships that strengthened their positions in smart devices, digital integration, advanced materials, and AI-enabled platforms rather than pursuing traditional volume-driven growth.",
      },
      {
        type: "image",
        src: imageUrl,
        alt: "Key Consolidation Patterns: AI & data-driven startups, digital health partnerships, feedtech & orthopedic ventures, private equity fusion",
        caption: "Key Consolidation Patterns",
      },
    ],
  },
];

export const reports: Report[] = Array.from({ length: 14 }, (_, i) => {
  const { photoId, body, readTime, authors, ...variant } = REPORT_VARIANTS[i % REPORT_VARIANTS.length];
  const thumbnailUrl = `https://images.unsplash.com/photo-${photoId}?w=600&q=80`;
  const imageUrl = `https://images.unsplash.com/photo-${photoId}?w=1600&q=80`;

  return {
    id: i + 1,
    ...variant,
    readTime: readTime ?? "6 Min read",
    thumbnailUrl,
    imageUrl,
    imageAlt: variant.title,
    authors: authors ?? DEFAULT_AUTHORS,
    body: body ? body(imageUrl) : buildDefaultBody(variant.title, variant.description, imageUrl),
  };
});

export function getReportById(id: number): Report | undefined {
  return reports.find((r) => r.id === id);
}
