
import type { OtherService } from "@/components/features/OtherServices";
import { ClipboardText, CloudConnection, Courthouse, CpuSetting, FavoriteChart, HeartCircle, HeartTick, Message, PresentionChart } from "iconsax-react";

export const SocialImpactOurCapabilitiesData = {
  eyebrow: "Our Capabilities",
  capabilities: [
    {
      id: "strategy",
      title: "CSR Strategy & Program Design",
      description:
        "Designing CSR strategies, program frameworks, and implementation roadmaps aligned with organizational values and community needs.",
      imageUrl: "/service/SocialImpact/card1.jpg",
      imageAlt: "Team designing a community program strategy",
      area: "ai",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "health",
      title: "Community Health & Nutrition",
      description:
        "Strengthening health systems and nutrition programs that improve wellbeing and resilience in underserved communities.",
      imageUrl: "/service/SocialImpact/card2.jpg",
      imageAlt: "Community health worker with local residents",
      area: "livestock",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "education",
      title: "Education & Skill Development",
      description:
        "Building education access, vocational training, and skill development programs that create long-term livelihood opportunities.",
      imageUrl:"/service/SocialImpact/card3.jpg",
      imageAlt: "Students in a vocational training session",
      area: "food",
    },
    {
      id: "livelihoods",
      title: "Livelihoods & Rural Development",
      description:
        "Supporting sustainable livelihoods, rural enterprise, and inclusive economic opportunities for vulnerable populations.",
      imageUrl: "/service/SocialImpact/card4.jpg",
      imageAlt: "Rural entrepreneur at a small enterprise",
      area: "climate",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "impact",
      title: "Impact Measurement & Evaluation",
      description:
        "Building M&E frameworks that track outcomes, demonstrate impact, and guide adaptive program management.",
      imageUrl: "/service/SocialImpact/card5.jpg",
      imageAlt: "Analyst reviewing program impact data",
      area: "agrifinance",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "partnerships",
      title: "Partnerships & Stakeholder Engagement",
      description:
        "Facilitating collaboration between corporates, governments, NGOs, and communities to scale collective impact.",
      imageUrl: "/service/SocialImpact/card6.jpg",
      imageAlt: "Diverse stakeholders in a partnership meeting",
      area: "infra",
      height: "clamp(10.3rem, 16.2vw, 18.8rem)",
    },
  ],
};

export const SocialImpactHeroData = {
  breadcrumbLabel: "Social Impact & CSR",
  eyebrow: "Social Impact & CSR",
  heading: (
    <>
      Social Impact &
      <em className="font-semibold"> CSR</em>
    </>
  ),
  description:
    "We help corporations, foundations, governments, and development institutions design and deliver impactful programs that strengthen communities, drive sustainable development, and create measurable long-term outcomes.",
  imageSrc: "/service/SocialImpact/hero.jpg",
  imageAlt: "Social Impact & CSR programs at SkyQuest",
};

export const SocialImpactCoreCapabilitiesData = {
  eyebrow: "Core Capabilities",

  heading: (
    <>
      Our Approach & <em className="font-semibold">Methodology</em>
    </>
  ),

  description:
    "Our methodology integrates strategy, research, implementation, and impact measurement to help organizations address complex challenges and achieve sustainable development outcomes at scale.",

  imageSrc: "/Service/SocialImpact/CoreCapabilities.jpg",
  imageAlt: "Our Approach & Methodology",

  capabilities: [
    {
      icon: ClipboardText,
      title: "Co-Creation with Stakeholders",
      description:
        "We collaborate with communities, government bodies, and partners to ensure every solution is inclusive, contextually relevant, and co-owned.",
    },
    {
      icon: Courthouse,
      title: "Data-Driven Decision Making",
      description:
        "We integrate robust data and M&E frameworks from day one to guide decisions, adapt strategies, and measure what matters.",
    },
    {
      icon: HeartCircle,
      title: "Adaptive & Agile Execution",
      description:
        "Our approach embraces flexibility—designing interventions that evolve with learning, feedback, and changing ground realities.",
    },
    {
      icon: FavoriteChart,
      title: "Innovation-Led Thinking",
      description:
        "We apply digital tools, behavioral insights, and bold ideas to reimagine traditional approaches to complex development challenges.",
    },
    {
      icon: PresentionChart,
      title: "End-to-End Partnership",
      description:
        "From research and program design to pilot, scale, and institutionalization—we stay with our partners across the journey.",
    },
  ],
};

export const SocialImpactFocusAreasData = {
  heading: (
    <>
      Our Focus <em className="font-semibold">Areas</em>
    </>
  ),
  description:
    "SkyQuest's Social Sector Consulting practice operates at the intersection of people, policy, and planet. We focus on domains that drive inclusive development and long-term sustainability across India and Africa.",
  focusAreas: [
    {
      icon: HeartTick,
      title: "Public Health",
      description:
        "We work with governments, donors, and foundations to strengthen health systems, scale primary care, and drive behavioral change. From maternal health to digital health innovation, our solutions improve lives and resilience.",
    },
    {
      icon: Message,
      title: "Agriculture & Rural Livelihoods",
      description:
        "SkyQuest supports smallholder farmers, FPOs, and rural ecosystems through sustainable agriculture practices, financial inclusion, and access to markets and agri-tech.",
    },
    {
      icon: CloudConnection,
      title: "Sustainability, Environment & ESG",
      description:
        "We help organizations integrate sustainability and ESG practices into their strategy and operations through clean energy, resource management, and responsible growth initiatives aligned with global climate goals.",
    },
    {
      icon: HeartTick,
      title: "Climate Resilience",
      description:
        "Our work in climate adaptation includes climate-risk assessments, disaster preparedness, and resilient infrastructure especially for vulnerable geographies and low-income populations.",
    },
    {
      icon: CpuSetting,
      title: "Animal Husbandry & Dairying",
      description:
        "Transformation in animal husbandry and dairying by combining scalable innovations with sustainable practices. Our approach focuses on improving productivity, animal health, and empowering farmers with modern solutions.",
    },
  ],
};

export const SocialImpactOtherServicesData: OtherService[] = [
  { label: "Climate, Sustainability & ESG Advisory", href: "#" },
  { label: "Market Research", href: "#" },
  { label: "Strategy & Transformation", href: "#" },
  {
    label: "Innovation, R&D & Technology Commercialization Consulting",
    href: "#",
  },
  { label: "Public Sector & Development Consulting", href: "#" },
  { label: "AI Consulting & Digital Transformation", href: "#" },
];

export const SocialImpactFaqData = [
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
