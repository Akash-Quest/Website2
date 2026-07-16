import {
  LayoutGrid,
  Compass,
  Settings2,
  BarChart3,
  Landmark,
  Sprout,
} from "lucide-react";

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
      icon: LayoutGrid,
      title: "Agriculture Transformation & Food Systems Advisory",
      description:
        "Supporting governments and institutions in designing strategies and programs that improve productivity, food security, resilience, and rural prosperity.",
    },
    {
      icon: Compass,
      title: "Livestock Systems & Animal Health",
      description:
        "Strengthening livestock value chains through animal health systems, breed improvement, digital monitoring, traceability, veterinary services, and market access solutions.",
    },
    {
      icon: Settings2,
      title: "Value Chain Development & Market Linkages",
      description:
        "Improving efficiency, competitiveness, aggregation, processing, storage, logistics, and market connectivity across agricultural and livestock value chains.",
    },
    {
      icon: BarChart3,
      title: "Climate-Smart Agriculture & Resilience",
      description:
        "Supporting adaptation, sustainable farming practices, climate risk management, resource optimization, and resilient food production systems.",
    },
    {
      icon: Landmark,
      title: "Agri-Tech, Digital Agriculture & Data Systems",
      description:
        "Leveraging AI, geospatial intelligence, digital platforms, remote sensing, and analytics to modernize agriculture and improve decision-making.",
    },
    {
      icon: Sprout,
      title: "Agri-Finance & Rural Enterprise Development",
      description:
        "Strengthening farmer access to finance, insurance, working capital, investment opportunities, and sustainable rural entrepreneurship ecosystems.",
    },
  ],
};