
import { ClipboardText, CloudConnection, Courthouse, CpuSetting, FavoriteChart, HeartCircle, HeartTick, Message, PresentionChart } from "iconsax-react";

export const SocialImpactOurCapabilitiesData = {
  eyebrow: <>Our <em>Capabilities</em></>,
  capabilities: [
    {
      id: "strategy",
      title: "Program Design & Implementation Support",
      description:
        "We co-create evidence-based, scalable programs—from concept to execution—ensuring alignment with community needs and funder goals.",
      imageUrl: "/service/SocialImpact/card1.jpg",
      imageAlt: "Team designing a community program strategy",
      area: "ai",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "health",
      title: "Monitoring, Learning & Evaluation (MLE)",
      description:
        "We build adaptive MLE frameworks that go beyond reporting—enabling real-time decision-making, learning, and continuous improvement.",
      imageUrl: "/service/SocialImpact/card2.jpg",
      imageAlt: "Community health worker with local residents",
      area: "livestock",
      height: "clamp(9.4rem, 15.4vw, 18rem)",
    },
    {
      id: "education",
      title: "Innovation & Pilots",
      description:
        "We design and test innovative models and pilots that bring fresh approaches to persistent development challenges.",
      imageUrl:"/service/SocialImpact/card3.jpg",
      imageAlt: "Students in a vocational training session",
      area: "food",
    },
    {
      id: "livelihoods",
      title: "Strategy & Policy Advisory",
      description:
        "We support governments, donors, and ecosystem players with actionable strategies, policy inputs, and system-level thinking to drive systemic change.",
      imageUrl: "/service/SocialImpact/card4.jpg",
      imageAlt: "Rural entrepreneur at a small enterprise",
      area: "climate",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "impact",
      title: "Research & Insights",
      description:
        "From baselines and impact evaluations to landscape studies and behavior change insights, we generate data that drives decisions.",
      imageUrl: "/service/SocialImpact/card5.jpg",
      imageAlt: "Analyst reviewing program impact data",
      area: "agrifinance",
      height: "clamp(14.5rem, 23.9vw, 28.2rem)",
    },
    {
      id: "partnerships",
      title: "Capacity Building & Institutional Strengthening",
      description:
        "We help organizations build the internal systems, leadership, and capabilities needed to scale their impact.",
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
  eyebrow: "Methodology",

  heading: (
    <>
      Our Approach & <em className="font-semibold">Methodology</em>
    </>
  ),

  description:
    "Our methodology integrates strategy, research, implementation, and impact measurement to help organizations address complex challenges and achieve sustainable development outcomes at scale.",

  imageSrc: "/service/SocialImpact/corecapabilities.jpg",
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


export const SocialImpactFaqData = [
  {
    question:
      "How can organizations create measurable social impact through CSR?",
    answer:
      "Effective CSR programs align business objectives with community needs, focus on measurable outcomes, and create sustainable ecosystems rather than one-time interventions.",
  },
  {
    question:
      "Does SkyQuest support CSR implementation as well as strategy?",
    answer:
      "Yes. We support the entire lifecycle—from strategy and program design to implementation, monitoring, evaluation, and impact assessment.",
  },
  {
    question:
      "Can SkyQuest work with foundations and philanthropic organizations?",
    answer:
      "Yes. We partner with corporate foundations, philanthropic institutions, family offices, and impact investors to design, implement, and scale social impact initiatives.",
  },
  {
    question: "How do you measure the success of social impact programs?",
    answer:
      "We use robust monitoring, evaluation, and learning frameworks to measure outputs, outcomes, long-term impact, and social return on investment.",
  },
  {
    question:
      "Does SkyQuest support government and donor-funded development programs?",
    answer:
      "Yes. We work with governments, development agencies, multilateral institutions, and donors on social protection, livelihoods, inclusion, education, healthcare, and community development initiatives.",
  },
  {
    question:
      "What sectors does SkyQuest support through its Social Impact practice?",
    answer:
      "Our experience spans livelihoods, education, healthcare, agriculture, financial inclusion, women's empowerment, social protection, climate resilience, and community development.",
  },
  {
    question: "How does SkyQuest approach inclusive development?",
    answer:
      "We focus on strengthening systems, building institutional capacity, leveraging technology, and creating pathways for sustainable economic and social inclusion.",
  },
  {
    question: "What regions does SkyQuest serve?",
    answer:
      "SkyQuest supports clients across India, Africa, the Middle East, Asia-Pacific, Europe, and North America, combining global best practices with deep local understanding.",
  },
];