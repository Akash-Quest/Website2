
import type { OtherService } from "@/components/features/OtherServices";
import { Bank, Building, Buildings2, CardTick, Convert3DCube, DollarCircle, FlashCircle, Hashtag, HeartAdd, LampCharge, Link, Link2, People, Setting4, Share, Shop, Teacher, TruckFast, Warning2, Wind } from "iconsax-react";

export const EsgOurCapabilitiesData = {
  eyebrow: "Our Capabilities",
  capabilities: [
    {
      id: "climate-risk",
      title: "Climate Strategy & Risk Advisory",
      description:
        "Assessing climate risks and designing adaptation strategies that build long-term organizational resilience.",
      imageUrl: "/service/Esg/card1.jpg",
      imageAlt: "Team reviewing climate risk assessment data",
      area: "ai",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "esg-reporting",
      title: "ESG Integration & Reporting",
      description:
        "Embedding ESG principles into strategy and operations, supported by transparent, standards-aligned reporting.",
      imageUrl: "/service/Esg/card2.jpg",
      imageAlt: "Analyst preparing an ESG report",
      area: "livestock",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "sustainable-finance",
      title: "Sustainable Finance & Investment",
      description:
        "Mobilizing green capital and structuring sustainable finance solutions that fund the transition.",
      imageUrl: "/service/Esg/card3.jpg",
      imageAlt: "Green investment portfolio review",
      area: "food",
    },
    {
      id: "net-zero",
      title: "Net-Zero & Decarbonization",
      description:
        "Developing emissions reduction pathways that balance growth with environmental responsibility.",
      imageUrl: "/service/Esg/card4.jpg",
      imageAlt: "Renewable energy infrastructure at sunrise",
      area: "climate",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "supply-chain",
      title: "Supply Chain Sustainability",
      description:
        "Strengthening responsible sourcing and supplier engagement across complex global supply chains.",
      imageUrl: "/service/Esg/card5.jpg",
      imageAlt: "Logistics and supply chain operations",
      area: "agrifinance",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "governance",
      title: "Sustainability Governance & Compliance",
      description:
        "Building governance structures and compliance systems that keep pace with evolving regulation.",
      imageUrl: "/service/Esg/card6.jpg",
      imageAlt: "Governance committee in a compliance meeting",
      area: "infra",
      height: "clamp(10.3rem, 16.2vw, 18.8rem)",
    },
  ],
};

export const EsgHeroData = {
  breadcrumbLabel: "Climate, Sustainability & ESG Advisory",
  eyebrow: "Climate, Sustainability & ESG Advisory",
  heading: (
    <>
      Building Resilient, Sustainable & <br />Future-Ready
      <em className="font-semibold">Organizations</em>
    </>
  ),
  description:
    "Helping organizations navigate climate risks, strengthen ESG performance, accelerate sustainable growth, and create long-term value through strategy, finance, governance, and implementation.",
  imageSrc: "/service/Esg/hero.jpg",
  imageAlt: "Building Smarter Governments & Stronger Public Institutions",
};

export const EsgWhatWeOfferData = {
  eyebrow: "What We Offer",
  heading: (
    <>
      Integrated Climate, Sustainability &{" "}
      <em className="font-semibold">ESG Solutions</em>
    </>
  ),
  description:
    "From climate strategy and ESG integration to sustainable finance and implementation, we help organizations create measurable environmental, social, and economic value.",
  items: [
    {
      icon: LampCharge,
      title: "ESG Diagnostics & Maturity Assessments",
      description:
        "Evaluating ESG performance, identifying gaps, benchmarking peers, and prioritizing sustainability improvement opportunities effectively.",
    },
    {
      icon: Warning2,
      title: "Materiality Assessments & ESG Roadmaps",
      description:
        "Identifying priority ESG issues and developing practical roadmaps aligned with stakeholder expectations.",
    },
    {
      icon: Convert3DCube,
      title: "Sustainability Reporting & Disclosure",
      description:
        "Supporting transparent sustainability reporting aligned with leading global frameworks, regulations, and investor requirements.",
    },
    {
      icon: DollarCircle,
      title: "Carbon Footprint & GHG Assessments",
      description:
        "Measuring emissions, establishing baselines, and identifying reduction opportunities across organizational operations and value chains.",
    },
    {
      icon: Link,
      title: "Net-Zero & Decarbonization Roadmaps",
      description:
        "Developing transition pathways that reduce emissions while maintaining growth, resilience, and competitiveness.",
    },
    {
      icon: Setting4,
      title: "ESG & Climate Risk & Vulnerability Assessments",
      description:
        "Assessing climate-related risks and vulnerabilities to strengthen resilience, preparedness, and long-term sustainability.",
    },
    {
      icon: Share,
      title: "Sustainable Finance & Green Investment Advisory",
      description:
        "Mobilizing sustainable capital through climate finance strategies, green investments, and funding readiness initiatives.",
    },
    {
      icon: Link2,
      title: "Supply Chain Sustainability & Responsible Sourcing",
      description:
        "Building transparent, resilient supply chains through responsible sourcing, supplier engagement, and ESG integration.",
    },
  ],
};

export const EsgIndustriesWeServeData = {
  eyebrow: "Industries We Serve",
  heading: (
    <>
      Deep Sector Expertise Across
      <br />
      High-<em className="font-semibold">Growth Markets</em>
    </>
  ),
  description:
    "We help organizations navigate evolving sustainability expectations while creating long-term business, social, and environmental value.",
  industries: [
    { icon: CardTick, label: "Financial Services" },
    { icon: Building, label: "Manufacturing" },
    { icon: HeartAdd, label: "Energy & Utilities" },
    { icon: Shop, label: "Agriculture & Food Systems" },
    { icon: Buildings2, label: "Infrastructure & Real Estate" },
    { icon: TruckFast, label: "Healthcare & Life Sciences" },
    { icon: FlashCircle, label: "Government & Public Sector" },
    { icon: Teacher, label: "Development Institutions & Foundations" },
    { icon: Bank, label: "Logistics & Transportation" },
    { icon: People, label: "Consumer & Retail" },
    { icon: Wind, label: "Agriculture" },
    { icon: Hashtag, label: "AgroTech" },
  ],
};

export const EsgOtherServicesData: OtherService[] = [
  { label: "Social / CSR / ESG Consulting", href: "#" },
  { label: "Market Research", href: "#" },
  { label: "Strategy & Transformation", href: "#" },
  {
    label: "Innovation, R&D & Technology Commercialization Consulting",
    href: "#",
  },
  { label: "Public Sector & Development Consulting", href: "#" },
  { label: "AI Consulting & Digital Transformation", href: "#" },
];

export const EsgFaqData = [
  {
    question: "What industries does SkyQuest serve?",
    answer:
      "We partner with organisations across 12+ high-growth sectors including BFSI, Healthcare & Pharma, Manufacturing, IT & SaaS, Consumer Goods, Infrastructure, Energy, Chemicals, Automotive, Agriculture, Government & PSU, and Education. Our strategies are designed to be sector-specific not one-size-fits-all so leaders in any industry can achieve measurable, lasting results.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer:
      "We start with a complimentary discovery call to understand your challenges, goals, and current state. From there, our team recommends the most relevant service or combination of services tailored to your specific needs.",
  },
  {
    question: "Do you offer customised solutions or standard frameworks?",
    answer:
      "Both. We have proven frameworks built from thousands of engagements, but every engagement is customised to your organisation's context, maturity, and objectives. We never apply cookie-cutter approaches.",
  },
  {
    question: "How do you measure success with clients?",
    answer:
      "We define success metrics upfront with each client—whether that's revenue growth, market share, operational efficiency, or strategic milestones. We track these throughout the engagement and provide transparent reporting.",
  },
  {
    question: "What is SkyQuest's geographic reach?",
    answer:
      "SkyQuest operates globally with deep expertise across North America, Europe, Asia-Pacific, and the Middle East. Our research and advisory capabilities cover 25+ countries.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Engagements vary from a few weeks for targeted research projects to 12+ months for comprehensive transformation programs. We'll scope the timeline based on your goals during our initial discovery.",
  },
  {
    question: "Who will actually work on my project?",
    answer:
      "Your engagement is led by a senior consultant with relevant domain expertise, supported by a dedicated team of analysts and specialists. You'll have direct access to your lead consultant throughout the project.",
  },
  {
    question: "How do we get started with SkyQuest?",
    answer:
      "Simply schedule a call using the button below or reach out via our contact page. We'll set up a complimentary 30-minute discovery session to explore how we can best support your goals.",
  },
];
