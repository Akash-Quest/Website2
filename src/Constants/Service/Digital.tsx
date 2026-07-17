
import { Chart, Courthouse, Driver, Cpu,Sun } from "iconsax-react"
import type { OtherService } from "@/components/features/OtherServices";

export const DigitalHeroData = {
  breadcrumbLabel: "Digital Transformation",
  eyebrow: "Digital Transformation",
  heading: (
    <>
      Digital Transformation & Emerging{" "}
      <em className="font-semibold">Technologies</em>
    </>
  ),
  description:
    "From data strategy and ML models to responsible AI governance enabling organisations to make better, faster decisions at machine speed. We turn raw data into your most powerful competitive asset.",
  imageSrc: "/service/Digital/hero.jpg",
  imageAlt: "Digital Transformation & Emerging Technologies at SkyQuest",
};

export const ServicedigitalCoreCapabilitiesData = {
  eyebrow: "Core Capabilities",
  heading: (
    <>
      Technical Depth Meets Business
      <br />
      <em className="font-semibold"> Acumen</em>
    </>
  ),
  description:
    "We combine world-class data engineering with deep domain knowledge to deliver AI solutions that actually work in production, not just in proof-of-concept.",
  imageSrc: "/Service/Digital/digitalocean.png",
  imageAlt: "Submersible exploring the deep ocean",
  capabilities: [
    {
      icon: Driver,
      title: "AI Strategy & Adoption",
      description:
        "Helping organizations identify, prioritize, and scale AI initiatives that drive measurable business and operational outcomes.",
    },
    {
      icon: Sun,
      title: "Digital Transformation Roadmaps",
      description:
        "Designing enterprise-wide transformation strategies that align technology investments with business objectives and growth ambitions.",
    },
    {
      icon: Cpu,
      title: "Intelligent Automation",
      description:
        "Streamlining processes and improving efficiency through AI-powered automation, workflow optimization, and intelligent operations.",
    },
    {
      icon: Chart,
      title: "Data & Analytics",
      description:
        "Transforming data into actionable insights through advanced analytics, business intelligence, and decision-support systems.",
    },
    {
      icon: Courthouse,
      title: "Digital Public Infrastructure & Smart Governance",
      description:
        "Building scalable digital ecosystems that strengthen governance, improve service delivery, and enable data-driven decision-making.",
    },
  ],
};

export const DigitalEndToEndData = {
  eyebrow: "What We Offer",
  heading: (
    <>
      End-to-End Data & AI Consulting
      <br />
      <em className="font-semibold"> Services</em>
    </>
  ),
  description:
    "From strategy to deployment we cover every stage of your data and AI journey, with specialist teams embedded at each phase.",
  tools: [
    {
      icons: ["/All logos/tensorflow.svg", "/All logos/pytorch.svg"],
      title: "TensorFlow & PyTorch",
      description:
        "Deep learning model development, training, and deployment across classification, regression, and generative tasks.",
    },
    {
      icons: ["/All logos/snowflake.svg", "/All logos/databricks.svg"],
      title: "Snowflake & Databricks",
      description:
        "Cloud data platform architecture, data lakehouse builds, and large-scale analytics engineering.",
    },
    {
      icons: ["/All logos/image 22174.svg", "/All logos/image 22175.svg"],
      title: "Power BI & Tableau",
      description:
        "Enterprise BI dashboards, self-service analytics, and data visualisation platforms for executive and operational reporting.",
    },
    {
      icons: ["/All logos/image 22176.svg", "/All logos/image 22177.svg", "/All logos/image 22178.svg"],
      title: "AWS / Azure / GCP",
      description:
        "Multi-cloud data platform implementations, managed ML services, and cloud-native AI infrastructure at scale.",
    },
    {
      icons: ["/All logos/image 22179.svg", "/All logos/image 22180.svg"],
      title: "Apache Spark & Kafka",
      description:
        "Big data processing, real-time streaming pipelines, and high-throughput event-driven architectures.",
    },
    {
      icons: ["/All logos/image 22181.svg", "/All logos/image 22182.svg"],
      title: "OpenAI & LangChain",
      description:
        "LLM integration, RAG system builds, agent frameworks, and enterprise GenAI application development.",
    },
    {
      icons: ["/All logos/image 22183.svg", "/All logos/image 22184.svg"],
      title: "MLflow & Kubeflow",
      description:
        "MLOps platform implementation, model registry, experiment tracking, and production ML pipeline orchestration.",
    },
    {
      icons: ["/All logos/image 22185.svg", "/All logos/image 22186.svg"],
      title: "dbt & Airflow",
      description:
        "Data transformation, pipeline scheduling, data quality testing, and analytics engineering best practices.",
    },
  ],
};

export const DigitalOtherServicesData: OtherService[] = [
  { label: "Social / CSR / ESG Consulting", href: "#" },
  { label: "Market Research", href: "#" },
  { label: "Strategy & Transformation", href: "#" },
  {
    label: "Innovation, R&D & Technology Commercialization Consulting",
    href: "#",
  },
  { label: "Public Sector & Development Consulting", href: "#" },
  { label: "Integrated Program Management", href: "#" },
];

export const DigitalFaqData = [
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
