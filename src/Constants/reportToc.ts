

export type TocNode = {
  label: string;
  /** Bold entries — region and country names in "Market Size by Region". */
  bold?: boolean;
  children?: TocNode[];
};

export type TocSection = {
  heading: string;
  /** Un-bulleted lines shown under the heading before the list. */
  lines?: string[];
  items: TocNode[];
};

const leaf = (label: string): TocNode => ({ label });

const DROC: TocNode = {
  label: "Exhibit: Impact analysis of DROC, 2021",
  children: ["Drivers", "Opportunities", "Restraints", "Challenges"].map(leaf),
};

/** "Topic" with its single "(Exhibit: …)" child, the Key Market Insights shape. */
const withExhibit = (label: string, exhibit: string): TocNode => ({
  label,
  children: [leaf(exhibit)],
});

const COUNTRY_EXHIBITS = [
  "Exhibit: Chart on Market share 2021-2027 (%)",
  "Exhibit: Market size and forecast 2021-2027 ($ million)",
];

const REGIONS: { region: string; countries: string[] }[] = [
  { region: "North America", countries: ["USA", "Canada"] },
  { region: "Europe", countries: ["Germany", "Spain", "France", "UK", "Rest of Europe"] },
  {
    region: "Asia Pacific",
    countries: ["China", "India", "Japan", "South Korea", "Rest of Asia Pacific"],
  },
  { region: "Latin America", countries: ["Brazil", "Rest of South America"] },
  {
    region: "Middle East & Africa (MEA)",
    countries: ["GCC Countries", "South Africa", "Rest of MEA"],
  },
];

const PORTERS: [string, string][] = [
  ["Competitive rivalry", "Exhibit: Competitive rivalry Impact of key factors, 2021"],
  [
    "Threat of substitute products",
    "Exhibit: Threat of Substitute Products Impact of key factors, 2021",
  ],
  ["Bargaining power of buyers", "Exhibit: buyers bargaining power Impact of key factors, 2021"],
  ["Threat of new entrants", "Exhibit: Threat of new entrants Impact of key factors, 2021"],
  [
    "Bargaining power of suppliers",
    "Exhibit: Threat of suppliers bargaining power Impact of key factors, 2021",
  ],
];

export function buildReportToc(marketName: string, companies: string[]): TocSection[] {
  return [
    {
      heading: "Executive Summary",
      lines: ["Market overview"],
      items: [
        "Exhibit: Executive Summary – Chart on Market Overview",
        "Exhibit: Executive Summary – Data Table on Market Overview",
        `Exhibit: Executive Summary – Chart on ${marketName} Characteristics`,
        "Exhibit: Executive Summary – Chart on Market by Geography",
        "Exhibit: Executive Summary – Chart on Market Segmentation",
        "Exhibit: Executive Summary – Chart on Incremental Growth",
        "Exhibit: Executive Summary – Data Table on Incremental Growth",
        "Exhibit: Executive Summary – Chart on Vendor Market Positioning",
      ].map(leaf),
    },
    {
      heading: "Parent Market Analysis",
      lines: ["Market overview", "Market size"],
      items: [{ label: "Market Dynamics", children: [DROC] }, leaf("SWOT Analysis")],
    },
    {
      heading: "KEY MARKET INSIGHTS",
      items: [
        withExhibit("Technology Analysis", "(Exhibit: Data Table: Name of technology and details)"),
        withExhibit(
          "Pricing Analysis",
          "(Exhibit: Data Table: Name of technology and pricing details)"
        ),
        withExhibit("Supply Chain Analysis", "(Exhibit: Detailed Supply Chain Presentation)"),
        withExhibit("Value Chain Analysis", "(Exhibit: Detailed Value Chain Presentation)"),
        {
          label: "Ecosystem Of the Market",
          children: [
            leaf("Exhibit: Parent Market Ecosystem Market Analysis"),
            leaf("Exhibit: Market Characteristics of Parent Market"),
          ],
        },
        withExhibit(
          "IP Analysis",
          "(Exhibit: Data Table: Name of product/technology, patents filed, inventor/company name, acquiring firm)"
        ),
        withExhibit("Trade Analysis", "(Exhibit: Data Table: Import and Export data details)"),
        withExhibit("Startup Analysis", "(Exhibit: Data Table: Emerging startups details)"),
        withExhibit(
          "Raw Material Analysis",
          "(Exhibit: Data Table: Mapping of key raw materials)"
        ),
        withExhibit(
          "Innovation Matrix",
          "(Exhibit: Positioning Matrix: Mapping of new and existing technologies)"
        ),
        withExhibit(
          "Pipeline product Analysis",
          "(Exhibit: Data Table: Name of companies and pipeline products, regional mapping)"
        ),
        leaf("Macroeconomic Indicators"),
      ],
    },
    {
      heading: "COVID IMPACT",
      items: [
        leaf("Introduction"),
        withExhibit(
          "Impact On Economy—scenario Assessment",
          "Exhibit: Data on GDP - Year-over-year growth 2016-2022 (%)"
        ),
        withExhibit(
          "Revised Market Size",
          `Exhibit: Data Table on ${marketName} size and forecast 2021-2027 ($ million)`
        ),
        withExhibit(
          "Impact Of COVID On Key Segments",
          "Exhibit: Data Table on Segment Market size and forecast 2021-2027 ($ million)"
        ),
        withExhibit(
          "COVID Strategies By Company",
          "Exhibit: Analysis on key strategies adopted by companies"
        ),
      ],
    },
    {
      heading: "MARKET DYNAMICS & OUTLOOK",
      items: [
        { label: "Market Dynamics", children: [DROC] },
        withExhibit(
          "Regulatory Landscape",
          "Exhibit: Data Table on regulation from different region"
        ),
        leaf("SWOT Analysis"),
        {
          label: "Porters Analysis",
          children: PORTERS.map(([force, exhibit]) => withExhibit(force, exhibit)),
        },
        {
          label: "Skyquest special insights on future disruptions",
          children: [
            "Political Impact",
            "Economic impact",
            "Social Impact",
            "Technical Impact",
            "Environmental Impact",
            "Legal Impact",
          ].map(leaf),
        },
      ],
    },
    {
      heading: "Market Size by Region",
      items: [
        leaf("Chart on Market share by geography 2021-2027 (%)"),
        leaf("Data Table on Market share by geography 2021-2027(%)"),
        ...REGIONS.map(({ region, countries }) => ({
          label: region,
          bold: true,
          children: [
            leaf("Chart on Market share by country 2021-2027 (%)"),
            leaf("Data Table on Market share by country 2021-2027(%)"),
            ...countries.map((country) => ({
              label: country,
              bold: true,
              children: COUNTRY_EXHIBITS.map(leaf),
            })),
          ],
        })),
      ],
    },
    {
      heading: "KEY COMPANY PROFILES",
      items: [
        {
          label: "Competitive Landscape",
          children: [
            withExhibit(
              "Total number of companies covered",
              "Exhibit: companies covered in the report, 2021"
            ),
            withExhibit(
              "Top companies market positioning",
              "Exhibit: company positioning matrix, 2021"
            ),
            withExhibit(
              "Top companies market Share",
              "Exhibit: Pie chart analysis on company market share, 2021(%)"
            ),
          ],
        },
        { label: "Company Profiles", children: companies.map(leaf) },
      ],
    },
  ];
}
