
import {
  ClipboardList,
  Database,
  ShieldCheck,
  Lightbulb,
  Handshake,
} from "lucide-react";

export const SocialImapactCoreCapabilitiesData = {
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
      icon: ClipboardList,
      title: "Co-Creation with Stakeholders",
      description:
        "We collaborate with communities, government bodies, and partners to ensure every solution is inclusive, contextually relevant, and co-owned.",
    },
    {
      icon: Database,
      title: "Data-Driven Decision Making",
      description:
        "We integrate robust data and M&E frameworks from day one to guide decisions, adapt strategies, and measure what matters.",
    },
    {
      icon: ShieldCheck,
      title: "Adaptive & Agile Execution",
      description:
        "Our approach embraces flexibility—designing interventions that evolve with learning, feedback, and changing ground realities.",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Led Thinking",
      description:
        "We apply digital tools, behavioral insights, and bold ideas to reimagine traditional approaches to complex development challenges.",
    },
    {
      icon: Handshake,
      title: "End-to-End Partnership",
      description:
        "From research and program design to pilot, scale, and institutionalization—we stay with our partners across the journey.",
    },
  ],
};