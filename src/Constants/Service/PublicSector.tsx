
import type { OtherService } from "@/components/features/OtherServices";
import { Bank, Buildings2, CardCoin, CloudConnection, CpuSetting, DollarCircle, HeartTick, KeyboardOpen, LampCharge } from "iconsax-react";

export const PublicSectorOurCapabilitiesData = {
  eyebrow: "Our Capabilities",
  capabilities: [
    {
      id: "policy-reform",
      title: "Public Policy & Institutional Reform",
      description:
        "Shaping policy frameworks and institutional reforms that modernize government operations.",
      imageUrl: "/service/PublicService/card1.jpg",
      imageAlt: "Policy advisors in a government meeting",
      area: "ai",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "digital-government",
      title: "Digital Government & Smart Governance",
      description:
        "Designing citizen-centric digital platforms and public infrastructure that improve service delivery.",
      imageUrl: "/service/PublicService/card2.jpg",
      imageAlt: "Citizen using a digital government service kiosk",
      area: "livestock",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "social-protection",
      title: "Social Protection & Service Delivery",
      description:
        "Strengthening welfare systems and service delivery models that reach vulnerable populations effectively.",
      imageUrl: "/service/PublicService/card3.jpg",
      imageAlt: "Community service center for social welfare",
      area: "food",
    },
    {
      id: "economic-development",
      title: "Economic Development & Investment",
      description:
        "Supporting investment promotion and economic diversification strategies that drive inclusive growth.",
      imageUrl: "/service/PublicService/card4.jpg",
      imageAlt: "City skyline representing economic growth",
      area: "climate",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "program-management",
      title: "Program Management & Implementation",
      description:
        "Providing PMO support and implementation oversight that keeps public programs on track.",
      imageUrl: "/service/PublicService/card5.jpg",
      imageAlt: "Program management team reviewing project timelines",
      area: "agrifinance",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "development-finance",
      title: "Development Finance & Donor Advisory",
      description:
        "Structuring donor-funded programs and development financing that mobilize resources effectively.",
      imageUrl: "/service/PublicService/card6.jpg",
      imageAlt: "Advisors discussing development finance strategy",
      area: "infra",
      height: "clamp(10.3rem, 16.2vw, 18.8rem)",
    },
  ],
};

export const PublicSectorHeroData = {
  breadcrumbLabel: "Public Sector Advisory",
  eyebrow: "Public Sector Advisory",
  heading: (
    <>
      Building Smarter Governments & <br></br>Stronger
      <em className="font-semibold"> Public Institutions</em>
    </>
  ),
  description:
    "We help governments and development institutions modernize systems, strengthen governance, and deliver impactful public programs through strategy, technology, and implementation support.",
  imageSrc:"/service/PublicService/hero.jpg",
  imageAlt: "Building Smarter Governments & Stronger Public Institutions",
};

export const PublicSectorWeOfferData = {
  eyebrow: "What We Offer",
  heading: (
    <>
      End-to-End Public Sector
      <br />
      <em className="font-semibold">Advisory Services</em>
    </>
  ),
  description:
    "We help governments and development institutions navigate complex challenges through integrated advisory, implementation support, and institutional transformation services.",
  items: [
    {
      icon: LampCharge,
      title: "Public Policy & Sector Strategy",
      description:
        "Policy development, sector reform strategies, regulatory frameworks, and long-term planning.",
    },
    {
      icon: Bank,
      title: "Governance & Institutional Reform",
      description:
        "Organizational transformation, institutional diagnostics, governance frameworks, and public sector modernization.",
    },
    {
      icon: CloudConnection,
      title: "Digital Government & Smart Governance",
      description:
        "Citizen service platforms, digital government systems, public financial management modernization, and digital public infrastructure.",
    },
    {
      icon: HeartTick,
      title: "Social Protection & Citizen Service Delivery",
      description:
        "Designing and strengthening social protection systems, G2P programs, welfare delivery, and inclusion initiatives.",
    },
    {
      icon: CardCoin,
      title: "Economic Development & Investment Promotion",
      description:
        "Supporting investment strategies, economic diversification programs, industrial policy, and competitiveness.",
    },
    {
      icon: CpuSetting,
      title: "Program Management & PMU Support",
      description:
        "Providing program assurance, PMO services, implementation support, monitoring, and performance management.",
    },
    {
      icon: Buildings2,
      title: "Capacity Building & Leadership Development",
      description:
        "Training, institutional development, change management, and capability-building programs for public sector organizations.",
    },
    {
      icon: KeyboardOpen,
      title: "Monitoring, Evaluation & Impact Assessment",
      description:
        "Performance measurement, program evaluation, policy assessment, and evidence-based decision making.",
    },
    {
      icon: DollarCircle,
      title: "Development Finance & Donor Advisory",
      description:
        "Supporting donor-funded programs, development financing, grant management, partnerships with multilateral organizations, and fund mobilization.",
    },
  ],
};

export const PublicSectorOtherServicesData: OtherService[] = [
  { label: "Social / CSR / ESG Consulting", href: "#" },
  { label: "Market Research", href: "#" },
  { label: "Strategy & Transformation", href: "#" },
  {
    label: "Innovation, R&D & Technology Commercialization Consulting",
    href: "#",
  },
  { label: "Integrated Program Management", href: "#" },
  { label: "AI Consulting & Digital Transformation", href: "#" },
];

export const PublicSectorFaqData = [
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
