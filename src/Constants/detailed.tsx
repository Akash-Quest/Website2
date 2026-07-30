export type DetailedFigure = {
  text?: string;
  src: string;
  alt: string;
  caption: string;
  description?: string;
  imagePosition?: "left" | "right";
};

export type DetailedBlock =
  | { type: "paragraph"; text: string; leadIn?: string; figure?: DetailedFigure }
  | { type: "list"; items: string[]; intro?: string }
  | { type: "figure"; figure: DetailedFigure }
  | { type: "table"; title?: string; columns: string[]; rows: string[][] };

export type DetailedSubsection = {
  id: string;
  number: string;
  title: string;
  blocks: DetailedBlock[];
};

export type DetailedSection = {
  id: string;
  number: string;
  title: string;
  titleEmphasis?: string;
  subsections: DetailedSubsection[];
};

export type DetailedAuthor = {
  name: string;
  title: string;
  photo: string;
};

export type DetailedReportMeta = {
  type: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  titleEmphasis?: string;
  imageUrl: string;
  imageAlt: string;
};

// Placeholder — swap for the real chart export once assets are provided.
const PLACEHOLDER_FIGURE_SRC = "/Insights/demoreport.png";

export const detailedReportMeta: DetailedReportMeta = {
  type: "Report",
  category: "Thought-Leadership",
  date: "Jul 24, 2026",
  readTime: "14 Min read",
  title: "AI Chipset Market Outlook: Innovation, Convergence, and Strategic Realignment",
  titleEmphasis: "Strategic Realignment",
  imageUrl: "/Insights/hero.webp",
  imageAlt: "AI Chipset Market Outlook: Innovation, Convergence, and Strategic Realignment",
};

export const detailedAuthors: DetailedAuthor[] = [
  {
    name: "Dr. Nidhi Verma",
    title: "Principal Analyst",
    photo: "/Team/team2.jpg",
  },
];

const STUB_BLOCKS: DetailedBlock[] = [
  { type: "paragraph", text: "Content for this section is coming soon." },
];

export const detailedSections: DetailedSection[] = [
  {
    id: "section-1",
    number: "1",
    title: "AI and the Semiconductor Convergence: ",
    titleEmphasis: "A Macro View",
    subsections: [
      {
        id: "section-1-1",
        number: "1.1",
        title:
          "AI-Driven Semiconductor Innovation is Catalyzing a Structural Transformation in the Global Chip Market, Propelling Specialized Architectures and Regional Leadership Amidst Rising Demand for Cloud and Edge AI Workloads",
        blocks: [
          {
            type: "figure",
            figure: {
              text:"Artificial intelligence (AI) has evolved over the last ten years from algorithmic experimentation to a fundamental source of value in a variety of industries, including manufacturing, healthcare, autonomous systems, and digital infrastructure. Increasingly potent silicon architectures designed for AI workloads have supported this evolution. Demand has significantly shifted towards specialised chips—GPUs, TPUs, FPGAs, and application-specific integrated circuits (ASICs)—made for parallel processing, high throughput, and low latency as AI's computational intensity exceeds the capabilities of general-purpose CPUs.",
              src: PLACEHOLDER_FIGURE_SRC,
              alt: "AI Chipset Market Size by Region (USD Billion)",
              caption: "Fig: AI Chipset Market Size by Region (USD Billion)",
              description:
                "Regional distribution of the AI chipset market, highlighting comparative market size in USD billion. The figure illustrates the dominance of North America and Asia-Pacific, driven by strong innovation ecosystems, advanced fabrication capabilities, and large-scale AI adoption, followed by growth trajectories in Europe and emerging markets.",
            },
          },
          {
            type: "paragraph",
            text: "The global AI chipset market is experiencing exponential growth, with total market size projected to surpass $550 billion by 2032, as indicated in the chart. A clear acceleration is observed post-2023, with year-on-year expansion driven primarily by North America, Asia Pacific, and Europe—the three dominant contributors to cumulative market share. The Asia Pacific region is expected to see sustained momentum, underpinned by aggressive investments in AI infrastructure, national semiconductor strategies (notably in China, South Korea, and India), and rising demand for edge computing across industrial and consumer applications.",
          },
          {
            type: "list",
            intro: "This rapid scaling is a result of three converging factors:",
            items: [
              "Surging AI workload demand—from generative AI to real-time analytics—is outpacing traditional computing capabilities, requiring dedicated AI accelerators.",
              "Technological inflection points, such as chiplet-based architectures and domain-specific accelerators, are driving both performance improvements and cost efficiency, making AI chips more commercially viable across verticals.",
              "Policy-led incentives and geopolitical realignment—including the CHIPS Act in the U.S. and India's Semiconductor Mission—are enabling regional self-sufficiency and boosting local manufacturing capacity.",
            ],
          },
          {
            type: "figure",
            figure: {
              text:"Artificial intelligence (AI) has evolved over the last ten years from algorithmic experimentation to a fundamental source of value in a variety of industries, including manufacturing, healthcare, autonomous systems, and digital infrastructure. Increasingly potent silicon architectures designed for AI workloads have supported this evolution. Demand has significantly shifted towards specialised chips—GPUs, TPUs, FPGAs, and application-specific integrated circuits (ASICs)—made for parallel processing, high throughput, and low latency as AI's computational intensity exceeds the capabilities of general-purpose CPUs.",
              src: PLACEHOLDER_FIGURE_SRC,
              alt: "AI Chipset Market Size by Region (USD Billion)",
              caption: "Fig: AI Chipset Market Size by Region (USD Billion)",
              description:
                "Regional distribution of the AI chipset market, highlighting comparative market size in USD billion. The figure illustrates the dominance of North America and Asia-Pacific, driven by strong innovation ecosystems, advanced fabrication capabilities, and large-scale AI adoption, followed by growth trajectories in Europe and emerging markets.",
              imagePosition: "left",
            },
          },
          {
            type: "paragraph",
            text: "The global AI chipset market is undergoing a fundamental transformation due to geopolitical tensions, especially those between the United States and China, which are creating new fault lines throughout the semiconductor value chain. The once-globalized supply chain has become fragmented due to export restrictions on sophisticated chips and lithography equipment as well as growing techno-nationalism. A wave of strategic decoupling has resulted from this, with nations vying to localise crucial phases of chip design, manufacturing, and packaging. The outcome is a fragmented ecosystem in which geopolitical alignment, rather than market forces, increasingly determines access to state-of-the-art AI computing. This results in unequal access to high-performance GPUs and ASICs for AI developers, which in turn causes regional differences in innovation velocity and governance influence.",
          },
        ],
      },
      {
        id: "section-1-4",
        number: "1.2",
        title:
          "Geopolitics, Sovereignty, and Supply Chain Realignment: The Global AI Chip Race and Its Reshaping the Semiconductor Landscape",
        blocks: [
          {
            type: "paragraph",
            text: "The global AI chipset market is undergoing a fundamental transformation due to geopolitical tensions, especially those between the United States and China, which are creating new fault lines throughout the semiconductor value chain. The once-globalized supply chain has become fragmented due to export restrictions on sophisticated chips and lithography equipment as well as growing techno-nationalism. A wave of strategic decoupling has resulted from this, with nations vying to localise crucial phases of chip design, manufacturing, and packaging. The outcome is a fragmented ecosystem in which geopolitical alignment, rather than market forces, increasingly determines access to state-of-the-art AI computing. This results in unequal access to high-performance GPUs and ASICs for AI developers, which in turn causes regional differences in innovation velocity and governance influence.",
          },
          {
            type: "figure",
            figure: {
              src: PLACEHOLDER_FIGURE_SRC,
              alt: "Global AI Chip Powerhouses: Mapping Regional Semiconductor Value Chain Across the Semiconductor Value Chain",
              caption:
                "Fig. Global Semiconductor Production by Country (2024) — A geographically concentrated supply chain with East Asia at the core and rising strategic efforts from the U.S., EU, and India to rebalance global influence.",
            },
          },
          {
            type: "paragraph",
            text: "The value chain has bifurcated in two ways. Firstly, it has moved eastward, with Taiwan dominating advanced foundry work and Northeast Asia — Japan, South Korea, and China — supplying essential materials, memory, and packaging capacity. Secondly, protectionist legislation, such as the U.S. CHIPS Act and India's Semiconductor Mission, is creating new manufacturing hubs to reduce reliance on a single region, though this transition remains slow and capital-intensive. Governments are increasingly treating semiconductor capacity as a matter of national security, and this is reshaping where the industry chooses to build next.",
          },
          {
            type: "table",
            title:
              "Timeline of Key Geopolitical Actions Shaping the Global Semiconductor Industry (2018-2025)",
            columns: ["Year", "Event", "Description"],
            rows: [
              ["2018", "U.S. Section 301 tariffs", "Initial signal of tech statecraft using tariffs on Chinese tech"],
              ["2018", "Huawei added to Entity List", "Significant disruption to Huawei's global business"],
              ["2019", "TSMC halts new orders from Huawei", "Impact of U.S. export controls on foreign chipmakers"],
              ["2020", "U.S. CHIPS Act passed", "$52B investment to support semiconductor R&D and manufacturing"],
              ["2022", "Netherlands restricts ASML exports", "Alignment with U.S. policy on limiting China's chip access"],
              ["2023", "China bans Micron chips in key sectors", "Retaliatory measure targeting U.S. companies"],
              ["2024", "EU Chips Act deploys €3.3 billion in funding", "Boosts the EU's chip design and manufacturing capacity"],
              ["2025", "Expected surge in regulated tech exports", "Driven by geopolitical diversification efforts"],
            ],
          },
        ],
      },
    ],
  },
  {
    id: "section-2",
    number: "2",
    title: "Engineering Tomorrow: Emerging Technologies Shaping AI Chips",
    subsections: [],
  },
  {
    id: "section-3",
    number: "3",
    title: "Democratizing Silicon: Startup and SME Opportunities Across the Value Chain",
    subsections: [],
  },
  {
    id: "section-4",
    number: "4",
    title: "Business of Intelligence: Strategic Dynamics in the Semiconductor Value Chain",
    subsections: [],
  },
  {
    id: "section-5",
    number: "5",
    title: "The Road Ahead: Strategic Outlook and Recommendations",
    subsections: [],
  },
  {
    id: "section-6",
    number: "6",
    title: "Conclusion",
    subsections: [],
  },
];
