import {
  LayoutGrid,
  Compass,
  Settings2,
  BarChart3,
  Landmark,
} from "lucide-react";

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
      icon: LayoutGrid,
      title: "AI Strategy & Adoption",
      description:
        "Helping organizations identify, prioritize, and scale AI initiatives that drive measurable business and operational outcomes.",
    },
    {
      icon: Compass,
      title: "Digital Transformation Roadmaps",
      description:
        "Designing enterprise-wide transformation strategies that align technology investments with business objectives and growth ambitions.",
    },
    {
      icon: Settings2,
      title: "Intelligent Automation",
      description:
        "Streamlining processes and improving efficiency through AI-powered automation, workflow optimization, and intelligent operations.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      description:
        "Transforming data into actionable insights through advanced analytics, business intelligence, and decision-support systems.",
    },
    {
      icon: Landmark,
      title: "Digital Public Infrastructure & Smart Governance",
      description:
        "Building scalable digital ecosystems that strengthen governance, improve service delivery, and enable data-driven decision-making.",
    },
  ],
};
