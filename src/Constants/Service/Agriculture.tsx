
import type { OtherService } from "@/components/features/OtherServices";
import { Chart, CloudDrizzle, Convert3DCube, DollarSquare, Link, Note, Pet, Reserve, Wind2,Wind,Sun } from "iconsax-react";

export const AgricultureOurCapabilitiesData = {
  eyebrow: "Our Capabilities",
  capabilities: [
    {
      id: "ai",
      title: "AI & Digital Transformation",
      description:
        "Applying machine learning and digital tools to optimize yields, resource use, and farm-level decision-making.",
      imageUrl:
        "/service/Agriculture/card1.jpg",
      imageAlt: "Farmer reviewing crop data on a tablet in a green field",
      area: "ai",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "livestock",
      title: "Livestock & Dairy Transformation",
      description:
        "Modernizing livestock and dairy operations with data-driven herd management, health monitoring, and productivity tools.",
      imageUrl:
        "/service/Agriculture/card2.jpg",
      imageAlt: "Dairy cows grazing in a pasture in front of a red barn",
      area: "livestock",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "food",
      title: "Food Security & Nutrition",
      description:
        "Strengthening supply chains and nutrition programs to improve food access and resilience for vulnerable communities.",
      imageUrl:
        "/service/Agriculture/card3.jpg",
      imageAlt: "Hands holding a crate of fresh vegetables and peppers",
      area: "food",
    },
    {
      id: "climate",
      title: "Climate-Smart Agriculture",
      description:
        "Building climate-resilient farming systems that adapt to changing conditions while reducing environmental impact.",
      imageUrl:
        "/service/Agriculture/card4.jpg",
      imageAlt: "Seedlings growing in a greenhouse with digital overlay icons",
      area: "climate",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "agrifinance",
      title: "Agri-Finance & Insurance",
      description:
        "Expanding access to credit, insurance, and digital payments that help farmers manage risk and grow sustainably.",
      imageUrl:
        "/service/Agriculture/card5.jpg",
      imageAlt: "Farmer smiling while holding a phone and cash in a green field",
      area: "agrifinance",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "infra",
      title: "Agricultural Infrastructure",
      description:
        "Investing in irrigation, storage, and logistics infrastructure that strengthens productivity across the value chain.",
      imageUrl:
        "/service/Agriculture/card6.jpg",
      imageAlt: "Irrigation pivot system watering rows of crops at sunrise",
      area: "infra",
      height: "clamp(10.3rem, 16.2vw, 18.8rem)",
    },
  ],
};

export const AgricultureHeroData = {
  breadcrumbLabel: "Agriculture & Livestock",
  eyebrow: "Agriculture & Livestock",
  heading: (
    <>
      Transforming Agriculture,
      <em className="font-semibold">Livestock<br /> & Food Systems</em>
    </>
  ),
  description:
    "Transforming agriculture and livestock through technology, innovation, and market-led development. We help organizations build resilient food systems, improve productivity, strengthen value chains, and create sustainable growth across the agricultural economy.",
  imageSrc: "/service/Agriculture/hero.jpg",
  imageAlt: "Transforming Agriculture, Livestock & Food Systems",
};

export const AgricultureCoreCapabilitiesData = {
  eyebrow: "Core Capabilities",
  heading: (
    <>
      Building Productive, Profitable & Sustainable
      <br />
      Agri-Food Systems <em className="font-semibold">Acumen</em>
    </>
  ),
  description:
    "We support governments, development organizations, agribusinesses, and rural enterprises with integrated advisory services that strengthen agricultural productivity, resilience, value chains, and food systems.",

  imageSrc: "/Service/AgriCULTURE/CoreCapabilities.jpg",
  imageAlt: "Agriculture and food systems",

  capabilities: [
    {
      icon: Wind,

      title: "Agriculture Transformation & Food Systems Advisory",
      description:
        "Supporting governments and institutions in designing strategies and programs that improve productivity, food security, resilience, and rural prosperity.",
    },
    {
      icon: Pet,
      title: "Livestock Systems & Animal Health",
      description:
        "Strengthening livestock value chains through animal health systems, breed improvement, digital monitoring, traceability, veterinary services, and market access solutions.",
    },
    {
      icon: Link,
      title: "Value Chain Development & Market Linkages",
      description:
        "Improving efficiency, competitiveness, aggregation, processing, storage, logistics, and market connectivity across agricultural and livestock value chains.",
    },
    {
      icon: CloudDrizzle,
      title: "Climate-Smart Agriculture & Resilience",
      description:
        "Supporting adaptation, sustainable farming practices, climate risk management, resource optimization, and resilient food production systems.",
    },
    {
      icon: Convert3DCube,
      title: "Agri-Tech, Digital Agriculture & Data Systems",
      description:
        "Leveraging AI, geospatial intelligence, digital platforms, remote sensing, and analytics to modernize agriculture and improve decision-making.",
    },
    {
      icon: DollarSquare,
      title: "Agri-Finance & Rural Enterprise Development",
      description:
        "Strengthening farmer access to finance, insurance, working capital, investment opportunities, and sustainable rural entrepreneurship ecosystems.",
    },
  ],
};

export const AgricultureWhatWeOfferData = {
  eyebrow: "What We Offer",
  heading: (
    <>
      End-to-End Agriculture &<br />
      Livestock <em className="font-semibold">Consulting Services</em>
    </>
  ),
  description:
    "We help governments, agribusinesses, investors, development institutions, and farmer organizations design, implement, and scale agricultural transformation initiatives.",
  items: [
    {
      icon: Wind,
      title: "Agriculture Sector Strategy & Policy Advisory",
      description:
        "Developing agricultural development strategies, food security frameworks, investment plans, and sector transformation roadmaps.",
    },
    {
      icon: Pet,
      title: "Livestock Development & Animal Health Systems",
      description:
        "Strengthening livestock productivity, disease surveillance, animal health programs, digital livestock management, and veterinary service delivery.",
    },
    {
      icon: Convert3DCube,
      title: "Digital Agriculture & Agri-Tech Advisory",
      description:
        "Designing and implementing AI-powered advisory platforms, geospatial systems, precision agriculture solutions, and digital farming ecosystems.",
    },
    {
      icon: Note,
      title: "Farmer Producer Organizations (FPOs) & Cooperative Development",
      description:
        "Supporting aggregation models, governance systems, digital platforms, market integration, and institutional strengthening for producer organizations.",
    },
    {
      icon: Link,
      title: "Agricultural Value Chain Development",
      description:
        "Enhancing productivity, processing, storage, logistics, traceability, and market linkages across key commodities and value chains.",
    },
    {
      icon: DollarSquare,
      title: "Agri-Finance & Financial Inclusion",
      description:
        "Supporting agricultural lending, embedded finance, insurance models, rural credit systems, and investment mobilization.",
    },
    {
      icon: Wind2,
      title: "Climate-Smart Agriculture & Sustainability",
      description:
        "Designing climate adaptation strategies, regenerative agriculture programs, water management initiatives, and carbon-smart farming models.",
    },
    {
      icon: Sun,
      title: "Agri Infrastructure & Rural Development",
      description:
        "Supporting investments in warehousing, cold chains, processing infrastructure, rural logistics, and agricultural ecosystems.",
    },
    {
      icon: Reserve,
      title: "Food Systems & Nutrition Programs",
      description:
        "Designing integrated food systems approaches that improve food security, nutrition outcomes, and sustainable agricultural development.",
    },
    {
      icon: Chart,
      title: "Monitoring, Evaluation & Impact Assessment",
      description:
        "Measuring agricultural productivity, livelihood outcomes, climate resilience, program effectiveness, and economic impact.",
    },
  ],
};

export const AgricultureOtherServicesData: OtherService[] = [
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

export const AgricultureFaqData = [
  {
    question: "Who is jash ?",
    answer:
      " josh is a devloper tegies are designed to be sector-specific not one-size-fits-all so leaders in any industry can achieve measurable, lasting results.",
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
