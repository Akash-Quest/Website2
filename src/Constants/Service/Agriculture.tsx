
import { Chart, CloudDrizzle, Convert3DCube, DollarSquare, Link, Note, Pet, Reserve, Wind2,Wind,Sun } from "iconsax-react";

export const AgricultureOurCapabilitiesData = {
  eyebrow: <>Our <em>Capabilities</em></>,
  capabilities: [
    {
      id: "ai",
      title: "AI & Digital Transformation",
      description:
        "Leveraging AI, geospatial intelligence, digital platforms, remote sensing, and analytics to modernize agriculture and improve decision-making.",
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
        "Strengthening livestock value chains through animal health systems, breed improvement, digital monitoring, traceability, veterinary services, and market access solutions.",
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
        "Supporting governments and institutions in designing strategies and programs that improve productivity, food security, resilience, and rural prosperity.",
      imageUrl:
        "/service/Agriculture/card3.jpg",
      imageAlt: "Hands holding a crate of fresh vegetables and peppers",
      area: "food",
    },
    {
      id: "climate",
      title: "Climate-Smart Agriculture",
      description:
        "Supporting adaptation, sustainable farming practices, climate risk management, resource optimization, and resilient food production systems.",
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
        "Strengthening farmer access to finance, insurance, working capital, investment opportunities, and sustainable rural entrepreneurship ecosystems.",
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
        "Our multidisciplinary teams combine sector expertise, digital innovation, policy knowledge, implementation experience, and market intelligence to address agriculture and livestock challenges at scale.",
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

  imageSrc: "/service/Agriculture/CoreCapabilities.jpg",
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


export const AgricultureFaqData = [
  {
    question:
      "What types of agriculture and livestock projects does SkyQuest support?",
    answer:
      "We support agricultural transformation programs, livestock development initiatives, value chain projects, agri-tech deployments, climate resilience programs, food security initiatives, and rural development strategies.",
  },
  {
    question:
      "Do you work with governments and development institutions?",
    answer:
      "Yes. We partner with ministries, public agencies, multilateral organizations, foundations, and development institutions on agriculture and rural development programs.",
  },
  {
    question: "How does SkyQuest support digital agriculture initiatives?",
    answer:
      "We design and implement digital agriculture platforms, AI-enabled advisory systems, geospatial intelligence solutions, precision agriculture programs, and digital farmer ecosystems.",
  },
  {
    question: "Can SkyQuest support livestock transformation programs?",
    answer:
      "Yes. Our livestock expertise includes animal health systems, disease surveillance, traceability, productivity enhancement, digital livestock management, and value chain development.",
  },
  {
    question: "How do you approach climate-smart agriculture?",
    answer:
      "We integrate climate adaptation, resilience-building, regenerative practices, water efficiency, risk management, and sustainability principles into agricultural development strategies.",
  },
  {
    question: "Can SkyQuest help strengthen agricultural value chains?",
    answer:
      "Yes. We support value chain diagnostics, market development, aggregation models, processing infrastructure, logistics systems, and market access strategies.",
  },
  {
    question:
      "Do you support agri-finance and rural investment initiatives?",
    answer:
      "Yes. We help design agricultural finance models, insurance programs, blended finance structures, rural investment strategies, and financial inclusion initiatives.",
  },
  {
    question: "What regions does SkyQuest serve?",
    answer:
      "We work across India, Africa, the Middle East, Asia-Pacific, and other emerging markets where agriculture, food systems, and rural development are strategic priorities.",
  },
];