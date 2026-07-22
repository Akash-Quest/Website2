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
      id: 1,
      image: "/CaseStudy/pr1.jpg",
      category: "Insights",
      type: "Case Snapshot",
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
      image: "/CaseStudy/pr2.jpg",
      category: "Insights",
      type: "Case Snapshot",
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
      image: "/CaseStudy/pr3.jpg",
      category: "Case Study",
      type: "Case Snapshot",
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
      image: "/CaseStudy/pr1.jpg",
      category: "Insights",
      type: "Case Snapshot",
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
      image: "/CaseStudy/pr2.jpg",
      category: "Case Study",
      type: "Case Snapshot",
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
      image: "/CaseStudy/pr3.jpg",
      category: "Insights",
      type: "Case Snapshot",
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
