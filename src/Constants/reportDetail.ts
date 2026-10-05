

import type { Report } from "@/Constants/reports";
import { buildReportToc, type TocSection } from "@/Constants/reportToc";

export type SnapshotTile = {
  label: string;
  value: string;
  /** Categorical slot 1–4 from the validated palette. */
  slot: 1 | 2 | 3 | 4;
};

export type RegionSeries = {
  region: string;
  /** One value per year in `years`, same order. */
  values: number[];
};

export type ShareSlice = {
  label: string;
  value: number;
};

export type ReportDetail = {
  headline: string;
  tiles: SnapshotTile[];
  years: number[];
  regions: RegionSeries[];
  /** Unit label for the stacked bar's y-axis. */
  unit: string;
  shareTitle: string;
  shares: ShareSlice[];
  /** Large lead sentence opening the Description tab — the market-size summary. */
  lead: string;
  insights: string[];
  /** Bold-question sub-section that follows the opening insights. */
  insightQuestion: { question: string; paragraph: string; example: string };
  segments: string[];
  /** Lead paragraph of the segments section. */
  segmentIntro: string;
  /** Bold-question sub-sections beneath it. */
  segmentQuestions: { question: string; paragraphs: string[] }[];
  productSharesTitle: string;
  productShares: ShareSlice[];
  regionalIntro: string;
  /** Outline shown on the "Table of Contents" tab. */
  toc: TocSection[];
  /** Countries shaded on the geography map, by GeoChart country name. */
  geoLargest: string[];
  geoFastest: string[];
  /** Market dynamics: growth drivers and the forces holding it back. */
  drivers: { title: string; text: string }[];
  restraints: { title: string; text: string }[];
  competitiveIntro: string;
  competitors: { name: string; text: string }[];
  topPlayers: string[];
  recentDevelopments: string[];
  keyTrends: { title: string; text: string }[];
  analysisIntro: string;
  analysisBody: string;
  /** Simple label/value rows of the SkyQuest analysis table. */
  metrics: { label: string; value: string }[];
  segmentsCovered: { group: string; items: string[] }[];
  regionsCovered: string;
  customizationScope: string[];
  /** Per-region deep dives, each with country sub-sections. */
  regionalSections: {
    question: string;
    paragraph: string;
    countries: { name: string; paragraph: string }[];
  }[];
};

/** Small deterministic hash so every report gets stable, distinct numbers. */
function seedFrom(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return hash;
}

/** Mulberry32 — a tiny seeded PRNG, so a given report always renders alike. */
function rng(seed: number): () => number {
  let t = seed;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const YEARS = [2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];

const REGIONS = [
  "Asia Pacific",
  "North America",
  "Europe",
  "Latin America",
  "Middle East & Africa",
];

const SEGMENTS_BY_CATEGORY: Record<string, string[]> = {
  Chemicals: ["Product Type", "Form", "Application", "End Use Industry", "Grade"],
  Agriculture: ["Active Ingredient", "Crop Type", "Application Method", "Form"],
  Healthcare: ["Type", "Material", "Application", "End Use"],
  Energy: ["Technology", "Duration", "Ownership Model", "Application"],
  Technology: ["Device Type", "Node Size", "Deployment", "End Use Industry"],
};

/** Three leading product types per category, for the segment donut. */
const PRODUCT_TYPES_BY_CATEGORY: Record<string, string[]> = {
  Chemicals: ["Liquid", "Powder", "Paste"],
  Agriculture: ["Liquid", "Granular", "Powder"],
  Healthcare: ["Hydrophilic", "Antimicrobial", "Drug-Eluting"],
  Energy: ["Lithium-Ion", "Flow", "Sodium-Sulphur"],
  Technology: ["Processors", "Accelerators", "Memory"],
};

/**
 * Regional deep-dive skeleton. The question and the country list are fixed;
 * the prose is filled with the report's own market name so each page reads as
 * its own analysis.
 */
const REGION_BLOCKS = [
  {
    question: (name: string) => `Why does Asia Pacific Dominate the Global ${name}?`,
    paragraph: (name: string) =>
      `Asia Pacific leads the global ${name.toLowerCase()} due to a confluence of advanced manufacturing capability, strong demand from high-performance applications, and proactive sustainability agendas. Extensive industrial infrastructure supports large-scale production while funding continuous innovation in lower-impact formulations. Buyer preference for premium household and personal-care products, combined with tightening environmental regulation, pushes manufacturers toward greener inputs. Collaborative research ecosystems accelerate technology transfer, enabling rapid commercialisation, while robust export networks connect regional producers with emerging markets and reinforce the region's pivotal role in shaping global supply dynamics.`,
    countries: ["Japan", "South Korea"],
  },
  {
    question: (name: string) =>
      `What is Driving the Rapid Expansion of the ${name} in North America?`,
    paragraph: (name: string) =>
      `Growth in the North American ${name.toLowerCase()} is rapid because of fast-rising demand from consumers in high-performance segments, as well as regulation that promotes sustainability. Companies spend heavily on innovation in inputs that reduce environmental impact while delivering results in personal-care and industrial products. A dense base of research centres accelerates the pace of innovation, and mature distribution channels plus brand equity help companies reach the market quickly. Legislation supporting circular-economy principles further encourages recyclable and bio-based alternatives.`,
    countries: ["United States", "Canada"],
  },
  {
    question: (name: string) => `How is Europe Strengthening its Position in the ${name}?`,
    paragraph: (name: string) =>
      `Europe strengthens its position in the ${name.toLowerCase()} through a blend of stringent environmental legislation, forward-looking research collaboration, and a mature consumer base that values eco-friendly products. The region's emphasis on circular economy and waste reduction drives manufacturers toward renewable feedstocks and improved biodegradability. Strong public-private partnerships fund advanced laboratories focused on low-impact chemistry, while industry standards promote transparency and safety. Harmonised regulatory frameworks facilitate cross-border trade in certified green inputs, amplifying the region's influence in setting international standards.`,
    countries: ["Germany", "United Kingdom", "France"],
  },
] as const;

const COUNTRY_PROSE: Record<string, (name: string) => string> = {
  Japan: (name) =>
    `The ${name} in Japan is propelled by expertise in process engineering and a consumer culture that prioritises product efficacy alongside environmental stewardship. Domestic manufacturers leverage sophisticated process technologies to produce consistent quality, while collaborating closely with multinational brands seeking eco-compatible inputs. Government incentives for green chemistry and a strong focus on research institutions further accelerate innovation, positioning Japan as a benchmark for sustainable production in the region.`,
  "South Korea": (name) =>
    `The ${name} in South Korea benefits from a dynamic blend of cutting-edge research capability and a fast-adopting industrial sector that embraces sustainable alternatives. The country's emphasis on digital manufacturing and process optimisation enables efficient scaling of bio-based inputs. Close ties between universities, government agencies and leading chemical firms foster rapid prototyping of novel chemistries, reinforcing South Korea's role as an emerging hub.`,
  "United States": (name) =>
    `The ${name} in the United States is characterised by extensive R&D investment and a diverse consumer base that values both performance and sustainability. Major firms partner with academic institutions to explore renewable feedstocks and advanced formulation techniques. The regulatory environment encourages transparent labelling and responsible manufacturing, driving adoption of greener inputs across household and industrial segments, while strong branding and distribution networks accelerate market penetration.`,
  Canada: (name) =>
    `The ${name} in Canada reflects a strong commitment to environmental stewardship and a collaborative approach between industry and government. Canadian manufacturers prioritise the integration of bio-derived raw materials and energy-efficient processes to meet stringent sustainability goals. Partnerships with research councils and universities drive development of low-toxicity products suited for both consumer and speciality applications.`,
  Germany: (name) =>
    `The ${name} in Germany is driven by rigorously enforced environmental policy and a tradition of engineering excellence. German firms invest heavily in process intensification and circular-economy concepts, enabling production of high-purity outputs with minimal waste. Close collaboration with technical universities accelerates discovery of novel bio-based molecules, while industry consortia promote standardisation and eco-labelling.`,
  "United Kingdom": (name) =>
    `The ${name} in the United Kingdom benefits from a strong emphasis on regulatory compliance and innovative product development. British firms integrate green-chemistry principles early in the formulation stage, encouraging use of renewable raw materials. Partnerships between research institutes and biotech start-ups foster rapid prototyping of high-performance inputs with reduced ecological footprints.`,
  France: (name) =>
    `The ${name} in France is shaped by a proactive sustainability agenda and a vibrant ecosystem of public-private research initiatives. French manufacturers prioritise locally sourced bio-based feedstocks and invest in energy-saving production technologies. Collaborative projects with national research agencies aim to deliver high performance while meeting strict environmental criteria.`,
};

/** Illustrative player list. Replace with the real coverage list per report. */
const PLAYERS_BY_CATEGORY: Record<string, string[]> = {
  Chemicals: [
    "BASF SE", "Stepan Company", "Kao Corporation", "Galaxy Surfactants Limited",
    "Clariant AG", "Solvay S.A.", "Evonik Industries AG", "Huntsman Corporation",
    "Sasol Limited", "Oxiteno S.A.", "Godrej Industries Limited", "Croda International Plc",
    "Nouryon Chemicals Holding B.V.",
  ],
  Agriculture: [
    "Syngenta Group", "Bayer AG", "Corteva Agriscience", "UPL Limited", "FMC Corporation",
    "Nufarm Limited", "Yara International ASA", "Valagro S.p.A.", "Biolchim S.p.A.",
  ],
  Healthcare: [
    "Medtronic plc", "Abbott Laboratories", "Becton, Dickinson and Company", "Stryker Corporation",
    "Boston Scientific Corporation", "B. Braun SE", "Terumo Corporation", "Cook Medical",
  ],
  Energy: [
    "Tesla, Inc.", "Fluence Energy, Inc.", "BYD Company Limited", "LG Energy Solution",
    "Samsung SDI", "Sungrow Power Supply", "Wärtsilä Corporation", "Siemens Energy AG",
  ],
  Technology: [
    "NVIDIA Corporation", "Qualcomm Incorporated", "Intel Corporation", "Advanced Micro Devices",
    "Arm Holdings plc", "MediaTek Inc.", "Ambarella, Inc.", "Hailo Technologies",
  ],
};

export function buildReportDetail(report: Report): ReportDetail {
  const random = rng(seedFrom(report.id));

  // Base market size in $M, growing year on year at a rate implied by the seed.
  const base = 180 + Math.round(random() * 420);
  const growth = 1.04 + random() * 0.09;

  // Regional split holds roughly steady; APAC leads, matching the copy.
  const splits = [
    0.34 + random() * 0.06,
    0.26 + random() * 0.04,
    0.19 + random() * 0.03,
    0.12 + random() * 0.02,
    0.07 + random() * 0.02,
  ];

  const regions: RegionSeries[] = REGIONS.map((region, i) => ({
    region,
    values: YEARS.map((_, y) => Math.round(base * Math.pow(growth, y) * splits[i])),
  }));

  const total2033 = regions.reduce((sum, r) => sum + r.values[YEARS.length - 1], 0);
  const cagr = ((Math.pow(growth, YEARS.length - 1) - 1) / (YEARS.length - 1)) * 100;

  const japanShare = 54 + Math.round(random() * 14);

  const segments = SEGMENTS_BY_CATEGORY[report.category] ?? ["Type", "Application", "Region"];

  const productTypes = PRODUCT_TYPES_BY_CATEGORY[report.category] ?? [
    "Standard",
    "Premium",
    "Speciality",
  ];
  const productSplit = [38 + Math.round(random() * 8), 30 + Math.round(random() * 6)];

  const players = PLAYERS_BY_CATEGORY[report.category] ?? PLAYERS_BY_CATEGORY.Chemicals;

  return {
    headline: `${report.name} Size, Share, and Growth Analysis`,

    tiles: [
      { label: "Global Market Size", value: `USD ${total2033.toLocaleString()} Million`, slot: 1 },
      { label: "Largest Segment", value: segments[0], slot: 2 },
      { label: "Fastest Growth", value: "Asia Pacific", slot: 3 },
      { label: "Growth Rate", value: `${cagr.toFixed(1)}% CAGR`, slot: 4 },
    ],

    years: YEARS,
    regions,
    unit: "$ Mn",

    shareTitle: "Country Share For Asia Pacific Region (%)",
    shares: [
      { label: "Japan", value: japanShare },
      { label: "South Korea", value: 100 - japanShare },
    ],

    lead: report.description,

    // One dense overview paragraph, as on the live page: what the market is,
    // how it got here, and what is driving it now.
    insights: [
      `The global ${report.name.toLowerCase()} revolves around inputs whose importance stems from the essential role they play across personal-care items, household cleaners and industrial formulations, where performance and cost efficiency drive purchasing decisions. Historically the market grew as early products gave way to milder, better-specified successors over successive decades. Rising urbanisation and middle-class consumption in emerging economies have amplified global demand, turning these inputs into a cornerstone of hygiene and sustainability strategies. Building on that foundation, the growth engine is now rising demand for lower-impact alternatives, which forces manufacturers to reformulate and innovate. Stricter regulation compels firms to adopt compliant systems, satisfying both regulators and consumer preference. That pressure has spurred investment, and the market now penetrates niche areas such as natural-origin personal care and industrial cleaners, creating new revenue streams and bolstering resilience.`,
    ],

    insightQuestion: {
      question: `How is AI-driven Automation Influencing the ${report.name.replace(/ Market$/, "")} Manufacturing Market?`,
      paragraph: `AI-driven automation is reshaping ${report.name.toLowerCase()} manufacturing by embedding intelligent control loops, real-time defect detection and adaptive parameter tuning directly into production lines. These technologies let machines learn from each batch, optimising process settings and material handling without human intervention. Factories are moving from manual recipe adjustments to self-optimising workflows that cut cycle time and material waste. Early adopters report smoother batch consistency and faster design iteration, making the technology a compelling differentiator as demand for high-performance products grows. Across global supply chains the impact shows up as shorter lead times and higher reliability.`,
      example: `In April 2024, a leading equipment maker integrated AI-driven process monitoring that automatically adjusts operating parameters, reducing scrap and boosting throughput — illustrating how automation supports market growth and operational efficiency. The system learns from each run, enabling continuous improvement without manual re-calibration, and demonstrates the tangible benefits of intelligent manufacturing in this sector.`,
    },

    segments,

    segmentIntro: `Global ${report.name.toLowerCase()} is segmented by ${segments
      .map((s) => s.toLowerCase())
      .join(", ")} and region. Each segment is sized independently and reconciled against the market total, so shares sum without residuals. Based on region, the market is segmented into North America, Europe, Asia Pacific, Latin America and Middle East & Africa.`,

    segmentQuestions: [
      {
        question: `What Role Does ${productTypes[0]} Play in the ${report.name}?`,
        paragraphs: [
          `${productTypes[0]} dominates because buyers favour its ready-to-use nature, which simplifies formulation and removes processing steps downstream. That profile aligns with high-volume production lines, enabling consistent dosing and minimising equipment wear — operational efficiency that drives cost savings and shortens time to market.`,
          `${productTypes[2]} is emerging as the key growth area, as formulators seek thicker textures for speciality applications and solid-content products. Its viscosity supports controlled release and localised action, attracting niche segments that prioritise performance over dilution.`,
        ],
      },
      {
        question: `How Does ${segments[segments.length - 1]} Influence Adoption Across Manufacturers?`,
        paragraphs: [
          `The industrial tier leads because it satisfies bulk demand from large-scale manufacturers who prioritise cost efficiency and functional robustness. It tolerates harsher process conditions and delivers consistent activity across diverse systems, which drives adoption in detergents, textiles and heavy-duty cleaning.`,
          `Meanwhile the premium tier is seeing the strongest growth momentum as brands demand milder, skin-compatible inputs. Refined purity and low irritancy enable premium formulations, and rising consumer awareness of gentle ingredients accelerates uptake.`,
        ],
      },
    ],

    productSharesTitle: `${report.name} By Product Type`,
    productShares: [
      { label: productTypes[0], value: productSplit[0] },
      { label: productTypes[1], value: productSplit[1] },
      { label: productTypes[2], value: 100 - productSplit[0] - productSplit[1] },
    ],

    toc: buildReportToc(report.name, players),

    // Matches the live page: North America shaded largest, Japan and South
    // Korea fastest. Set these from real data per report.
    geoLargest: ["United States", "Canada"],
    geoFastest: ["Japan", "South Korea"],

    drivers: [
      {
        title: "Increasing Demand for Sustainable Inputs",
        text: `The shift toward environmentally friendly practices across residential and industrial sectors fuels a heightened preference for inputs that offer biodegradability and low ecological impact. Manufacturers respond by expanding product lines built on renewable sourcing and reduced toxicity. This alignment with sustainability goals encourages broader adoption, accelerates market penetration, and strengthens brand loyalty among consumers who prioritise green solutions — propelling overall growth in the ${report.name.toLowerCase()}.`,
      },
      {
        title: "Advancements in Compatible Formulations",
        text: `Continued progress in formulation science allows producers to combine performance with milder profiles, opening applications that were previously out of reach. Compatibility with adjacent chemistries reduces reformulation cost for downstream buyers, shortening qualification cycles and making switching decisions easier to justify commercially.`,
      },
      {
        title: "Expanding Industrial and Household Demand",
        text: `Rising urbanisation and middle-class consumption in emerging economies continue to lift baseline volumes. Growth in organised retail and the professional cleaning sector adds a second demand channel that is less sensitive to consumer sentiment, giving producers a more stable base load against which to plan capacity.`,
      },
    ],

    restraints: [
      {
        title: "Volatile Feedstock and Energy Costs",
        text: `Input costs track petrochemical and energy markets closely, and sharp swings compress margins faster than contract pricing can adjust. Producers without hedging or integrated upstream positions are most exposed, and the resulting uncertainty delays investment decisions on new capacity.`,
      },
      {
        title: "Tightening Regulatory Scrutiny",
        text: `Evolving environmental and safety regulation raises the cost of compliance and can strand products that no longer meet thresholds. Registration timelines in major markets lengthen the path from development to sale, which particularly disadvantages smaller producers without dedicated regulatory teams.`,
      },
    ],

    competitiveIntro: `The global ${report.name.toLowerCase()} is intensely competitive, with incumbents leveraging M&A, strategic partnerships and technology breakthroughs to secure share. Recent moves centre on broadening capability through acquisition and on partnerships that pair materials expertise with process know-how, driving rapid innovation and differentiation.`,

    competitors: [
      {
        name: players[0],
        text: `Established decades ago, its main objective is to serve high-volume customers with a broad, reliably specified portfolio. Recent development: the company opened a new R&D facility in 2025 and launched a second-generation platform featuring rapid process control and integrated AI-driven defect detection, aimed at buyers seeking low-volume, high-performance supply.`,
      },
      {
        name: players[1],
        text: `Its stated objective is to provide high-throughput capability for mass production. Recent development: the firm entered a strategic partnership with a major OEM in 2024 to pilot a high-speed line, raised funding to expand a European manufacturing hub, and introduced a software suite offering real-time process monitoring and adaptive control.`,
      },
    ],

    topPlayers: players,

    recentDevelopments: [
      `${players[0]} launched its next-generation portfolio in June 2025, featuring alternatives derived from renewable feedstocks that deliver comparable performance while reducing environmental impact. The rollout emphasises modular production flexibility and integrates advanced process analytics to support sustainable manufacturing across global facilities.`,
      `${players[1]} introduced a high-efficiency variant in March 2025, designed to enhance performance at lower dosage with improved biodegradability. The product leverages the company's proprietary catalytic technology, enabling streamlined synthesis and reduced energy consumption.`,
      `${players[2] ?? players[0]} announced a strategic collaboration with a biotechnology startup in January 2025 to co-develop renewable bio-derived inputs, aiming to replace petrochemical sources. The partnership focuses on scalable fermentation processes and green-chemistry principles.`,
    ],

    keyTrends: [
      {
        title: "Sustainable Packaging Integration",
        text: `Surging consumer demand for environmentally responsible products is driving manufacturers to embed these inputs into recyclable and biodegradable packaging solutions. Companies are redesigning formulations to reduce water usage and enhance biodegradability, aligning with circular-economy goals. This shift encourages partnerships with packaging innovators and opens new revenue streams beyond traditional industrial applications.`,
      },
      {
        title: "Digital Formulation Optimisation",
        text: `Advances in data analytics and machine-learning platforms are reshaping how blends are designed, enabling rapid virtual testing of performance across diverse end-use scenarios. Manufacturers leverage predictive models to fine-tune molecular structures, reduce trial-and-error cycles, and accelerate time to market, lowering R&D expenditure while supporting customised product offerings.`,
      },
    ],

    analysisIntro: `SkyQuest's ABIRAW (Advanced Business Intelligence, Research & Analysis Wing) is our Business Information Services team that Collects, Collates, Correlates, and Analyses the Data collected by means of Primary Exploratory Research backed by robust Secondary Desk research.`,

    analysisBody: `As per SkyQuest analysis, the global ${report.name.toLowerCase()} is driven by rising demand for sustainable solutions, which pushes manufacturers toward lower-impact inputs and fuels robust growth. A second catalyst comes from advances in compatible formulations that boost performance while lowering chemical loads, further expanding application scope. The main restraint is tightening regulatory scrutiny that raises compliance costs and can delay launches. Asia Pacific dominates the landscape, leveraging strong production bases and green-policy incentives, while the ${productTypes[0].toLowerCase()} segment leads in share because its ready-to-use nature streamlines production and reduces costs.`,

    metrics: [
      { label: "Market size value in 2024", value: `USD ${Math.round(total2033 / Math.pow(growth, YEARS.length - 1)).toLocaleString()} Million` },
      { label: "Market size value in 2033", value: `USD ${total2033.toLocaleString()} Million` },
      { label: "Growth Rate", value: `${cagr.toFixed(1)}%` },
      { label: "Base year", value: "2024" },
      { label: "Forecast period", value: `${YEARS[0]}-${YEARS[YEARS.length - 1]}` },
      { label: "Forecast Unit (Value)", value: "USD Million" },
    ],

    segmentsCovered: [
      { group: "Product Type", items: productTypes },
      { group: "Application", items: ["Personal Care", "Household Detergents", "Industrial Cleaners", "Others"] },
      { group: "End Use Industry", items: ["Cosmetics", "Home Care", "Industrial", "Others"] },
      { group: "Distribution Channel", items: ["Direct Sales", "Distributors"] },
    ],

    regionsCovered:
      "North America (US, Canada), Europe (Germany, France, United Kingdom, Italy, Spain, Rest of Europe), Asia Pacific (China, India, Japan, Rest of Asia-Pacific), Latin America (Brazil, Rest of Latin America), Middle East & Africa (South Africa, GCC Countries, Rest of MEA)",

    customizationScope: [
      "Segments by type, application, etc",
      "Company profile",
      "Market dynamics & outlook",
      "Region",
    ],

    regionalSections: REGION_BLOCKS.map((block) => ({
      question: block.question(report.name),
      paragraph: block.paragraph(report.name),
      countries: block.countries.map((country) => ({
        name: `${country} ${report.name}`,
        paragraph: COUNTRY_PROSE[country](report.name),
      })),
    })),

    regionalIntro: `Asia Pacific holds the largest share and is also the fastest growing, supported by capacity additions and domestic demand. North America and Europe compete on specification depth and regulatory readiness rather than volume, while Latin America and the Middle East & Africa remain import-led with selective local investment.`,
  };
}
