import type { OtherService } from "@/components/features/OtherServices";

export const BusinessIntelOurCapabilitiesData = {
  eyebrow: "Our Capabilities",
  capabilities: [
    {
      id: "market-sizing",
      title: "Market Sizing & Competitive Intelligence",
      description:
        "Quantifying market opportunity and benchmarking competitors to inform strategic positioning and investment decisions.",
      imageUrl: "/service/BusinessIntel/card1.jpg",
      imageAlt: "Analyst reviewing market sizing charts",
      area: "ai",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "sector-research",
      title: "Industry & Sector Research",
      description:
        "Delivering in-depth sector analysis and trend forecasting across high-growth industries worldwide.",
      imageUrl: "/service/BusinessIntel/card2.jpg",
      imageAlt: "Researcher analyzing industry reports",
      area: "livestock",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "consumer-insights",
      title: "Customer & Consumer Insights",
      description:
        "Uncovering behavioral and purchasing insights that shape product, pricing, and go-to-market strategies.",
      imageUrl: "/service/BusinessIntel/card3.jpg",
      imageAlt: "Focus group discussion for consumer research",
      area: "food",
    },
    {
      id: "data-analytics",
      title: "Data Analytics & Visualization",
      description:
        "Turning complex datasets into clear, decision-ready dashboards and reporting.",
      imageUrl: "/service/BusinessIntel/card4.jpg",
      imageAlt: "Data visualization dashboard on a screen",
      area: "climate",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "strategic-advisory",
      title: "Strategic Advisory & Consulting",
      description:
        "Translating research into actionable growth, market-entry, and investment strategies.",
      imageUrl: "/service/BusinessIntel/card5.jpg",
      imageAlt: "Consultants presenting a strategy roadmap",
      area: "agrifinance",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "due-diligence",
      title: "Custom Research & Due Diligence",
      description:
        "Conducting bespoke primary research and due diligence to support high-stakes business decisions.",
      imageUrl: "/service/BusinessIntel/card6.jpg",
      imageAlt: "Team reviewing due diligence documentation",
      area: "infra",
      height: "clamp(10.3rem, 16.2vw, 18.8rem)",
    },
  ],
};

export const BusinessIntelHeroData = {
  breadcrumbLabel: "Business Intelligence & Market Research",
  eyebrow: "Business Intelligence & Market Research",
  heading: (
    <>
      Turning Intelligence Into Strategic
      <em className="font-semibold"> Advantage</em>
    </>
  ),
  description:
    "We provide market intelligence, industry research, and strategic insights that help organizations evaluate opportunities, reduce uncertainty, and accelerate growth.",
  imageSrc: "/service/BusinessIntel/hero.jpg",
  imageAlt: "Building Smarter Governments & Stronger Public Institutions",
};

export const BusinessIntelWhyUsData = {
  eyebrow: "Why Us? The SkyQuest Advantage",
  heading: (
    <>
      Beyond Research Delivering
      Strategic<br /> <em className="font-semibold">Intelligence</em>
    </>
  ),
  intro: (
    <>
      Many research firms provide data. Few help organizations
      understand what the data means and what actions to take next.
      <br />
      SkyQuest bridges the gap between research and execution by
      combining market intelligence, strategic advisory, sector
      expertise, and implementation experience.
    </>
  ),
  advantages: [
    "Research + Strategy Integration",
    "Deep Sector Expertise",
    "Global Intelligence",
    "Decision-Focused Insights",
    "Advanced Analytics Capabilities",
    "Strong Government & Development Sector Experience",
    "Practical Recommendations, Not Just Reports",
    "Technology & Research Ecosystem",
    "Leveraging Advanced Research & Intelligence Platforms",
  ],
  outro:
    "We combine proprietary methodologies with leading research tools, data platforms, and intelligence frameworks to deliver high-quality market insights and strategic recommendations.",
  imageSrc: "/service/BusinessIntel/whyus.jpg",
  imageAlt: "Why Us? The SkyQuest Advantage",
};

export const BusinessIntelOtherServicesData: OtherService[] = [
  { label: "Social / CSR / ESG Consulting", href: "#" },
  { label: "Agriculture & Livestock", href: "#" },
  { label: "Strategy & Transformation", href: "#" },
  {
    label: "Innovation, R&D & Technology Commercialization Consulting",
    href: "#",
  },
  { label: "Public Sector & Development Consulting", href: "#" },
  { label: "AI Consulting & Digital Transformation", href: "#" },
];

export const BusinessIntelFaqData = [
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
