import type { ContentBlock } from "@/lib/reports";

export type CaseStudy = {
  id: number;
  image: string;
  /** Content-type facet shown on the card and used by the listing page's category filter. */
  category: string;
  /** Middle breadcrumb crumb on the detail page, e.g. "Case Snapshot". */
  type: string;
  /** Topic tag shown as the badge above the title and as the last breadcrumb crumb (lowercased). */
  topic: string;
  date: string;
  readTime: string;
  title: string;
  /** Trailing portion of `title` (must be a suffix of it) rendered in italic serif emphasis on the detail page. */
  titleEmphasis?: string;
  description: string;
  /** Kicker line rendered below the hero image on the detail page. */
  subtitle: string;
  /** Trailing portion of `subtitle` (must be a suffix of it) rendered in italic serif emphasis. */
  subtitleEmphasis?: string;
  body: ContentBlock[];
};

export const caseStudiesData = {
  eyebrow: "Featured Case Studies",
  heading: (
    <>
      Impact Stories That Speak for
      <br />
      <em className="font-semibold">Themselves</em>
    </>
  ),
  description:
    "Real engagements. Real numbers. Real transformation across industries, geographies and business challenges.",
  viewAllButton: "View All Case Studies",
  viewAllHref: "/case-studies",
  readMoreButton: "Read More",
  caseStudies: [
    {
      id: 7,
      image:
        "https://res.cloudinary.com/dftrsspaz/image/upload/v1756392777/skyquest/case-study/ssdmlhlii8brqgp8lyjf.webp",
      category: "Case Study",
      type: "Case Studies",
      topic: "Agriculture",
      date: "TBD",
      readTime: "5 Min read",
      title: "Advancing Regional Food Systems in South Asia through SAPLING",
      titleEmphasis: "Through Sapling",
      description:
        "Supported SAPLING in strengthening food systems and addressing malnutrition across South Asia through strategic planning and governance development, delivering a 3-5 year strategic framework and a policy-ready model for nutrition-sensitive value chains.",
      subtitle: "Strengthening Food Systems and Governance Across South Asia",
      subtitleEmphasis: "Governance Across South Asia",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "SkyQuest was engaged by one of the largest non-profit philanthropies to conduct an institutional landscaping, policy assessment, and strategic planning exercise for SAPLING (South Asian Policy Leadership for Improved Nutrition and Growth). SAPLING is a regional policy platform for transforming food systems to provide access to healthy, affordable, and sustainable diets across South Asia. The project encompassed Bangladesh, Bhutan, India, Nepal, and Sri Lanka, five countries with shared challenges and opportunities in addressing malnutrition.",
          segments: [
            "kyQuest was engaged by one of the largest non-profit philanthropies to conduct an institutional landscaping, policy assessment, and strategic planning exercise for ",
            { text: "SAPLING (South Asian Policy Leadership for Improved Nutrition and Growth)", href: "#" },
            ". SAPLING is a regional policy platform for transforming food systems to provide access to healthy, affordable, and sustainable diets across South Asia. The project encompassed Bangladesh, Bhutan, India, Nepal, and Sri Lanka, five countries with shared challenges and opportunities in addressing ",
            { text: "malnutrition", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Although SAPLING had received early support for regional policy discussions and nutrition-sensitive value chains, its long-term vision, governance, and operational model needed to be reviewed. Among the top priorities were:",
        },
        {
          type: "list",
          items: [
            "Assessing the present extent and influence of SAPLING.",
            "Finding opportunities and gaps in the future.",
            "Putting forward an anchor and governance model.",
            "Outlining a strategic roadmap for the next three to five years.",
          ],
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Assessment of Scope & Gaps: Reviewing of SAPLING's mission, structure, activities, and stakeholder engagement.",
            "Strategic Roadmap: Working with experts to create a shared future vision and timeline.",
            "Institutional Landscaping: Assessing possible anchor institutions and partnership models to maintain progress.",
          ],
        },
        {
          type: "callout",
          title: "Key Outcomes",
          items: [
            "Clear 3-5 year Strategic Framework for SAPLING.",
            "Detailed Institutional Assessment Report with hosting and governance options.",
            "Results-based Logical Framework & Theory of Change.",
            "Policy-ready model for Nutrition-Sensitive Value Chains and Public-Private Engagement.",
            "Two high-impact regional dissemination events with expert participation.",
          ],
        },
        {
          type: "paragraph",
          text: "SkyQuest's role in driving convergence and innovation showcases how technical expertise can unlock inclusive, climate-resilient growth, thereby setting a benchmark for transforming agriculture at scale through a blended approach of policy alignment, agri-tech, and grassroots implementation.",
        },
      ] as ContentBlock[],
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dftrsspaz/image/upload/v1756393764/skyquest/case-study/eutaiwuc9nuabhnlozdx.webp",
      category: "Case Study",
      type: "Case Studies",
      topic: "Agriculture",
      date: "TBD",
      readTime: "5 Min read",
      title: "Using the Private Sector to Develop Climate-Resilient Agri-Supply Chains in India",
      titleEmphasis: "Agri-Supply Chains in India",
      description:
        "Worked with corporates to co-design climate-smart agriculture solutions in India, creating investable models that boost smallholder resilience and strengthen sustainable agri-supply chains.",
      subtitle: "Mobilizing Private Capital for Climate-Resilient Agriculture",
      subtitleEmphasis: "Climate-Resilient Agriculture",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "SkyQuest, on behalf of a globally renowned philanthropic organization, embarked on a project to promote private sector investment in climate-smart agriculture. Our objective was co-creating investable solutions that enhance smallholder farmer resilience, strengthen supply chains, and stimulate industry-wide climate adaptation.",
          segments: [
            "kyQuest, on behalf of a globally renowned philanthropic organization, embarked on a project to promote private sector investment in ",
            { text: "climate-smart agriculture", href: "#" },
            ". Our objective was co-creating investable solutions that enhance smallholder farmer resilience, strengthen supply chains, and stimulate industry-wide ",
            { text: "climate adaptation", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Climate change is impacting India's agriculture, causing a reduction in yields, rising cost of inputs, and danger to supply chains. In spite of increased ESG commitments, private adaptation investment remains low, held back by fragmented, pilot-level interventions, a lack of scalable, proven models, weak business cases for climate-smart solutions, and limited awareness of value chain risks.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Listening & Diagnosing: Engaged with 20+ corporates and ecosystem stakeholders, diagnosing ESG initiatives, sourcing risk, and investment obstacles for the players, and sourcing promising Tier 1 and Tier 2 partners.",
            "Co-Designing Investible Solutions: Developed 2-4 business-ready opportunity resumes, mapping out business cases with ROI models and co-investment streams, with attention directed toward regenerative agriculture, risk-sharing hubs, and climate-smart sourcing coalitions.",
          ],
        },
        {
          type: "callout",
          title: "Key Outcomes",
          items: [
            "4-5 corporates agreed to co-invest.",
            "2-4 climate-smart opportunities ready for scale.",
            "A clear argument for private sector involvement in adaptation finance.",
            "A blueprint to promote resilient, long-term sourcing models.",
          ],
        },
        {
          type: "paragraph",
          text: "With support offered to businesses in converting supply chain threat into strategic investment, SkyQuest's consulting strategy is catalyzing climate action in agriculture. Collaboration in co-developing such climate-resilient solutions with the business community enables resilient sourcing models to be implemented that protect smallholder farmers while also serving the corporate ESG goals and long-term profitability of corporate firms.",
        },
      ] as ContentBlock[],
    },
    {
      id: 9,
      image:
        "https://res.cloudinary.com/dftrsspaz/image/upload/v1756391365/skyquest/case-study/enfvgjvult42gqxch9ue.webp",
      category: "Case Study",
      type: "Case Studies",
      topic: "Agriculture",
      date: "TBD",
      readTime: "5 Min read",
      title: "Landscaping of Livestock Technologies from Public and Private Sector Institutions in India",
      titleEmphasis: "Public and Private Sector Institutions in India",
      description:
        "Conducted a first-of-its-kind study mapping 500+ livestock technologies across India, identifying the top 25 scalable solutions from both public and private sectors to transform smallholder farming and boost productivity.",
      subtitle: "Mapping 500+ Innovations to Scale Livestock Productivity in India",
      subtitleEmphasis: "Scale Livestock Productivity in India",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "India's livestock sector accounts for more than 25% of agricultural GDP. Still, productivity remains low, especially among smallholder farmers. To unlock its full potential, SkyQuest, with support from one of the largest private foundations in the world, conducted a first-of-its-kind study mapping 500+ livestock technologies developed by public and private institutions across India.",
          segments: [
            "ndia's livestock sector accounts for more than 25% of agricultural GDP. Still, productivity remains low, especially among smallholder farmers. To unlock its full potential, SkyQuest, with support from one of the largest private foundations in the world, conducted a ",
            { text: "first-of-its-kind study mapping 500+ livestock technologies", href: "#" },
            " developed by public and private institutions across ",
            { text: "India", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Despite vast livestock numbers, farmers in India still struggle with fragmented, low-adoption technology access, creating a need for scalable, high-impact solutions ready for on-ground deployment.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "518 technologies mapped across 112 private and 78 public players.",
            "Assessed with panels of experts chosen by the GoI's Animal Husbandry Commissioner.",
            "Shortlisted the top 25 scalable solutions using a customized Technology Evaluation Matrix.",
            "Examined application, region, readiness, and impact potential to direct policy and investment.",
          ],
        },
        {
          type: "callout",
          title: "Key Outcomes",
          items: [
            "62% of technologies were found to be ready for the market, and 34% had already been commercialized.",
            "A strategic inventory covering five domains, health, nutrition, genetics, reproduction, and productivity, was constructed.",
            "52% of innovations were uncovered to have come from private sector players.",
          ],
        },
        {
          type: "paragraph",
          text: "This project shows how SkyQuest can offer high-impact, industry-specific technology landscaping for the livestock sector. Through extensive primary research, informed consultation, and rigorous evaluation, we built a solid foundation to accelerate the adoption of innovations across India's livestock value chain.",
        },
      ] as ContentBlock[],
    },
    {
      id: 1,
      image: "/CaseStudy/re1.jpg",
      category: "Case Study",
      type: "Case Studies",
      topic: "Agriculture & Livestock",
      date: "April 27, 2026",
      readTime: "5 Min read",
      title: "Unlocking Livestock Innovation to Transform Smallholder Farming in India",
      titleEmphasis: "Smallholder Farming in India",
      description:
        "Partnered with regional cooperatives to deploy data-driven herd management tools, helping over 12,000 smallholder farmers increase dairy yield by 28% within the first season while cutting veterinary response time in half.",
      subtitle: "Enabling Resilient Dairy Yields Through Data-Driven Herd Management",
      subtitleEmphasis: "Data-Driven Herd Management",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Across India's dairy belt, smallholder farmers have long managed herd health and yield through memory and word of mouth rather than data. In 2026, a coalition of regional cooperatives partnered to change that, deploying a mobile-first herd management platform that put real-time health alerts, breeding schedules, and yield tracking directly into farmers' hands. The result was a measurable shift in how smallholder operations were run, from reactive care to proactive, data-informed decision-making.",
          segments: [
            "cross India's dairy belt, smallholder farmers have long managed herd health and yield through memory and word of mouth rather than data. In 2026, a coalition of regional cooperatives partnered to change that, deploying a ",
            { text: "mobile-first herd management platform", href: "#" },
            " that put real-time health alerts, breeding schedules, and yield tracking directly into farmers' hands. The result was a measurable shift in how smallholder operations were run, from reactive care to ",
            { text: "proactive, data-informed decision-making", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Herd records were fragmented across notebooks and memory, veterinary visits were reactive rather than preventive, and cooperatives had no shared view of yield performance across their member farms. Early signs of illness routinely went unnoticed until they became costly, and inconsistent record-keeping made it difficult to identify which interventions were actually improving output.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Deployed a low-bandwidth mobile app for farmers to log herd health, feeding, and breeding events in real time.",
            "Built predictive health alerts that flag early signs of illness based on behavioral and feeding-pattern anomalies.",
            "Gave cooperative managers a shared dashboard to track yield trends and dispatch veterinary support where it was needed most.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "28% increase in dairy yield within the first season across participating farms.",
            "12,000+ smallholder farmers onboarded across partner cooperatives.",
            "Veterinary response time cut in half through predictive alerts and better dispatch routing.",
          ],
        },
        {
          type: "paragraph",
          text: "The programme demonstrated that meaningful gains in smallholder agriculture don't require large capital investment, they require putting the right information in front of the people making daily decisions. Cooperatives are now expanding the platform to cover feed optimization and breeding recommendations for the next phase of the rollout.",
        },
      ] as ContentBlock[],
    },
    {
      id: 2,
      image: "/CaseStudy/re2.jpg",
      category: "Case Study",
      type: "Case Studies",
      topic: "Urban Mobility",
      date: "March 12, 2026",
      readTime: "5 Min read",
      title: "Reimagining Urban Mobility Through Real-Time Crowd Intelligence",
      titleEmphasis: "Real-Time Crowd Intelligence",
      description:
        "Built a city-wide pedestrian flow platform that helped municipal planners reduce congestion at transit hubs by 34%, using anonymized movement data to redesign walkways across six metro stations.",
      subtitle: "Redesigning City Transit Through Real-Time Pedestrian Analytics",
      subtitleEmphasis: "Real-Time Pedestrian Analytics",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Rush-hour congestion at transit hubs had become a defining frustration for commuters in one of the country's fastest-growing metro networks. In 2026, municipal planners partnered with a mobility analytics team to deploy a city-wide, anonymized pedestrian flow platform, one that turned foot traffic into a live signal for redesigning walkways, entrances, and signage before congestion ever became gridlock.",
          segments: [
            "ush-hour congestion at transit hubs had become a defining frustration for commuters in one of the country's fastest-growing metro networks. In 2026, municipal planners partnered with a mobility analytics team to deploy a ",
            { text: "city-wide, anonymized pedestrian flow platform", href: "#" },
            ", one that turned foot traffic into a live signal for redesigning walkways, entrances, and signage before congestion ever became ",
            { text: "gridlock", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Six metro stations were bottlenecking during peak hours, but planners had no reliable way to see where pedestrians were actually backing up. Manual counts were sparse and quickly outdated, and walkway redesigns were being made on intuition rather than evidence, often missing the exact chokepoints commuters experienced every day.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Deployed anonymized movement sensors across six metro stations to build a live picture of pedestrian density and flow.",
            "Modeled congestion patterns by time of day to identify recurring chokepoints at entrances, turnstiles, and platform transitions.",
            "Worked with station architects to redesign walkway geometry and signage using the flow data as ground truth.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "34% reduction in congestion at transit hubs after walkway redesigns.",
            "Six metro stations redesigned using anonymized movement data.",
            "Faster, evidence-based approval cycles for future station upgrades.",
          ],
        },
        {
          type: "paragraph",
          text: "With chokepoints now visible in near real time, the transit authority has moved from reactive crowd-control measures to planned infrastructure changes, and is extending the platform to additional stations ahead of next year's ridership growth.",
        },
      ] as ContentBlock[],
    },
    {
      id: 3,
      image: "/CaseStudy/re3.jpg",
      category: "Case Study",
      type: "Case Studies",
      topic: "Financial Inclusion",
      date: "February 3, 2026",
      readTime: "6 Min read",
      title: "Powering Inclusive Finance with Embedded Digital Wallets",
      titleEmphasis: "Embedded Digital Wallets",
      description:
        "Launched an embedded-finance layer for regional banks that brought 2.4 million unbanked customers into the formal financial system, processing over $180M in microloans in the first year.",
      subtitle: "Bringing Millions Into the Formal Economy Through Embedded Finance",
      subtitleEmphasis: "Embedded Finance",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Millions of working adults across the region remained outside the formal financial system, unable to access credit, savings, or insurance products through traditional bank branches. In 2026, a group of regional banks partnered to launch an embedded-finance layer, distributed through everyday merchant and telecom apps, that let first-time users open a wallet, build a credit history, and access microloans without ever visiting a branch.",
          segments: [
            "illions of working adults across the region remained outside the formal financial system, unable to access credit, savings, or insurance products through traditional bank branches. In 2026, a group of regional banks partnered to launch an ",
            { text: "embedded-finance layer", href: "#" },
            ", distributed through everyday merchant and telecom apps, that let first-time users open a wallet, build a credit history, and access microloans without ever visiting a ",
            { text: "branch", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Traditional onboarding required physical documentation, branch visits, and credit history that most unbanked customers simply didn't have. Banks wanted to serve this segment but lacked a low-cost distribution channel and a credit model that worked without a conventional financial track record.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Embedded digital wallet and KYC flows directly into merchant and telecom apps customers already used daily.",
            "Built an alternative credit-scoring model using transaction and usage signals in place of conventional credit history.",
            "Rolled out microloan products with repayment terms suited to irregular, cash-based income patterns.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "2.4 million previously unbanked customers brought into the formal financial system.",
            "Over $180M in microloans processed in the first year.",
            "Onboarding time cut from a multi-day branch process to minutes, in-app.",
          ],
        },
        {
          type: "paragraph",
          text: "The programme's success has prompted partner banks to extend the wallet into savings and micro-insurance products, treating financial inclusion not as a one-time onboarding event but as an ongoing relationship built on data the customer generates themselves.",
        },
      ] as ContentBlock[],
    },
    {
      id: 4,
      image: "/CaseStudy/re1.jpg",
      category: "Case Study",
      type: "Case Studies",
      topic: "Agriculture & Livestock",
      date: "January 21, 2026",
      readTime: "5 Min read",
      title: "Scaling Precision Agriculture Across Three States",
      titleEmphasis: "Across Three States",
      description:
        "Rolled out satellite-based soil monitoring to 8,500 farms, cutting fertilizer waste by 22% and giving cooperatives a shared dashboard to track yield forecasts in real time.",
      subtitle: "Cutting Fertilizer Waste Through Satellite-Based Soil Monitoring",
      subtitleEmphasis: "Satellite-Based Soil Monitoring",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "Fertilizer application across smallholder farms had long been guided by habit rather than soil condition, leading to persistent overuse, rising input costs, and diminishing returns on yield. In 2026, a precision-agriculture rollout brought satellite-based soil monitoring to 8,500 farms across three states, replacing guesswork with a shared, real-time view of soil health and forecasted yield.",
          segments: [
            "ertilizer application across smallholder farms had long been guided by habit rather than soil condition, leading to persistent overuse, rising input costs, and diminishing returns on yield. In 2026, a precision-agriculture rollout brought ",
            { text: "satellite-based soil monitoring", href: "#" },
            " to 8,500 farms across three states, replacing guesswork with a shared, real-time view of ",
            { text: "soil health and forecasted yield", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Farmers were applying fertilizer at flat, uniform rates regardless of actual soil nutrient levels, and cooperatives had no aggregated way to forecast regional yield or plan input distribution. The result was consistent overspending on fertilizer paired with yield variability that was hard to explain or address.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Used satellite imagery and soil sensors to build farm-level nutrient and moisture profiles across the region.",
            "Generated tailored fertilizer recommendations per plot instead of applying a single blanket rate.",
            "Built a cooperative-facing dashboard aggregating soil health data into real-time yield forecasts.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "22% reduction in fertilizer waste across participating farms.",
            "8,500 farms onboarded to satellite-based soil monitoring.",
            "Real-time yield forecasting now available to cooperative managers across all three states.",
          ],
        },
        {
          type: "paragraph",
          text: "Beyond the immediate cost savings, the shared dashboard gave cooperatives a planning tool they had never had before, a live, aggregated view of regional soil health that informs everything from input procurement to storage planning ahead of harvest.",
        },
      ] as ContentBlock[],
    },
    {
      id: 5,
      image: "/CaseStudy/re2.jpg",
      category: "Case Study",
      type: "Case Studies",
      topic: "Public Safety",
      date: "December 9, 2025",
      readTime: "5 Min read",
      title: "Designing Safer Streets with Predictive Foot-Traffic Modeling",
      titleEmphasis: "Predictive Foot-Traffic Modeling",
      description:
        "Worked with city safety boards to flag high-risk crossings before incidents occurred, using historical and live pedestrian data to retime signals at 40 intersections.",
      subtitle: "Preventing Incidents Before They Happen With Predictive Analytics",
      subtitleEmphasis: "Predictive Analytics",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "City safety boards had long relied on incident reports to identify dangerous intersections, meaning action only followed after someone had already been hurt. In 2025, a predictive foot-traffic modeling initiative flipped that sequence, combining historical incident data with live pedestrian counts to flag high-risk crossings before they produced another statistic.",
          segments: [
            "ity safety boards had long relied on incident reports to identify dangerous intersections, meaning action only followed after someone had already been hurt. In 2025, a ",
            { text: "predictive foot-traffic modeling initiative", href: "#" },
            " flipped that sequence, combining historical incident data with live pedestrian counts to flag high-risk crossings before they produced ",
            { text: "another statistic", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Signal timing across the city had been set once and rarely revisited, even as pedestrian volumes and traffic patterns shifted over time. Safety boards could point to intersections with a history of incidents, but had no forward-looking way to identify the next one before it happened.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Combined historical incident records with live pedestrian and vehicle counts across 40 intersections.",
            "Built a risk-scoring model to flag crossings trending toward dangerous conditions before an incident occurred.",
            "Retimed signals at flagged intersections in coordination with the city's traffic engineering team.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "40 intersections retimed based on predictive risk scoring.",
            "High-risk crossings flagged proactively, ahead of incident data alone.",
            "A repeatable model now used to prioritize the city's ongoing signal-retiming programme.",
          ],
        },
        {
          type: "paragraph",
          text: "The shift from reactive to predictive safety planning has changed how the city allocates its retiming budget, prioritizing intersections trending toward risk rather than waiting for incident reports to justify the spend.",
        },
      ] as ContentBlock[],
    },
    {
      id: 6,
      image: "/CaseStudy/re3.jpg",
      category: "Case Study",
      type: "Case Studies",
      topic: "Treasury & Finance",
      date: "November 17, 2025",
      readTime: "6 Min read",
      title: "Modernizing Treasury Operations for a Multinational Retailer",
      titleEmphasis: "Multinational Retailer",
      description:
        "Replaced a decade-old reconciliation process with an automated treasury pipeline, cutting monthly close time from nine days to under thirty hours across 14 markets.",
      subtitle: "Cutting Monthly Close Time From Nine Days to Under Thirty Hours",
      subtitleEmphasis: "Under Thirty Hours",
      body: [
        {
          type: "paragraph",
          dropCap: true,
          text: "A decade-old, largely manual reconciliation process had become the single biggest bottleneck in a multinational retailer's monthly close, consuming nine days across 14 markets and leaving treasury teams little time for anything but catching up. In 2025, an automated treasury pipeline replaced that process end to end, compressing close time to under thirty hours.",
          segments: [
            " decade-old, largely manual reconciliation process had become the single biggest bottleneck in a multinational retailer's monthly close, consuming nine days across 14 markets and leaving treasury teams little time for anything but catching up. In 2025, an ",
            { text: "automated treasury pipeline", href: "#" },
            " replaced that process end to end, compressing close time to ",
            { text: "under thirty hours", bold: true },
            ".",
          ],
        },
        { type: "heading", text: "The ", emphasis: "Challenge" },
        {
          type: "paragraph",
          text: "Reconciliation across 14 markets ran through spreadsheets and market-specific manual processes, each with its own quirks and failure points. Every month-end close consumed nine days of treasury staff time, delaying downstream reporting and leaving little room to investigate discrepancies properly.",
        },
        { type: "heading", text: "Our ", emphasis: "Approach" },
        {
          type: "list",
          items: [
            "Replaced spreadsheet-based reconciliation with an automated pipeline standardized across all 14 markets.",
            "Built exception-based review so treasury staff only investigated genuine discrepancies, not routine matches.",
            "Integrated the pipeline directly with each market's banking and ERP feeds to eliminate manual data entry.",
          ],
        },
        {
          type: "callout",
          title: "Key Results",
          items: [
            "Monthly close time cut from nine days to under thirty hours.",
            "Reconciliation standardized and automated across all 14 markets.",
            "Treasury staff time redirected from manual matching to genuine exception handling.",
          ],
        },
        {
          type: "paragraph",
          text: "With close time no longer the constraint, treasury leadership has shifted its focus to forward-looking cash forecasting, work the team never previously had the bandwidth to prioritize.",
        },
      ] as ContentBlock[],
    },
  ] as CaseStudy[],
};

export function getCaseStudyById(id: number): CaseStudy | undefined {
  return caseStudiesData.caseStudies.find((study) => study.id === id);
}
