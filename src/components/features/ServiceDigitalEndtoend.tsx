"use client";
import Image from "next/image";

type Tool = {
  icons: string[];
  title: string;
  description: string;
};

const tools: Tool[] = [
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
];

export default function EndtoEnd() {
  return (
    <section className="w-full bg-white">
      <div className="page-container">
        {/* Header */}
        <div className="relative text-center">
          <p className="text-sm 2xl:text-base text-primary mb-2">
          What We Offer
        </p>
          <h2 className="font-bold">
            End-to-End Data & AI Consulting 

            <br></br>
             <em className="font-semibold"> Services</em>
          </h2>
          <p className="mx-auto mt-2 lg:max-w-[50%] leading-tight text-muted text-sm">
            From strategy to deployment we cover every stage of your data and AI journey, with specialist teams embedded at each phase.
          </p>
          </div>
          {/* gride service */}
          <div className="mt-10 grid grid-cols-2 sm:gap-2 gap-2 2xl:gap-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(({ icons, title, description }, idx) => (
            <div
              key={title}
              className={`text-left pl-4 ${idx % 2 !== 0 ? "sm:border-l sm:border-black/30" : ""} ${idx % 4 !== 0 ? "lg:border-l lg:border-black/30" : "lg:border-l-0"}`}
            >
              <div className="flex items-center gap-2">
  {icons.map((icon) => (
    <span
      key={icon}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background"
    >
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        unoptimized
        className="h-5 w-5 object-contain"
      />
    </span>
  ))}
</div>
              <h3 className="mt-2 text-sm font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}