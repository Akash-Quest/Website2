import Image from "next/image";

const stack = [
  {
    icons: [
      "/All logos/image 22176.svg",
      "/All logos/image 22177.svg",
      "/All logos/image 22178.svg",
    ],
    title: "AWS / Azure / GCP /Docker",
    description:
      "Multi-cloud data platform implementations, managed ML services, and cloud-native AI infrastructure at scale.",
  },
  {
    icons: ["/All logos/image 22174.svg"],
    title: "Power BI ",
    description:
      "Enterprise BI dashboards, self-service analytics, and data visualisation platforms for executive and operational reporting.",
  },
   {
    icons: ["/All logos/image 22181.svg", "/All logos/image 22182.svg"],
    title: "OpenAI,LangChain,Claude",
    description:
      "LLM integration, RAG system builds, agent frameworks, and enterprise GenAI application development.",
  },
  {
    icons: ["/All logos/image 22181.svg", "/All logos/image 22182.svg"],
    title: "SQL/MongoDB",
    description:
      "Deep learning model development, training, and deployment across classification, regression, and generative tasks.",
  },
  {
    icons: ["/All logos/tensorflow.svg", "/All logos/pytorch.svg"],
    title: "TensorFlow & PyTorch",
    description:
      "Deep learning model development, training, and deployment across classification, regression, and generative tasks.",
  },
  {
    icons: ["/All logos/image 22179.svg"],
    title: "Apache Spark",
    description:
      "Cloud data platform architecture, data lakehouse builds, and large-scale analytics engineering.",
  },
 
  {
    icons: ["/All logos/image 22183.svg", "/All logos/image 22184.svg"],
    title: "MLflow & Kubeflow",
    description:
      "MLOps platform implementation, model registry, experiment tracking, and production ML pipeline orchestration.",
  },
  {
    icons: ["/All logos/image 22185.svg",],
    title: "dbt",
    description:
      "Data transformation, pipeline scheduling, data quality testing, and analytics engineering best practices.",
  },
];

export default function Technologies() {
  return (
    <section className="w-full bg-background">
      <div className="page-container">
        <div className="text-center">
          <p className="mb-2 text-sm 2xl:text-base font-medium text-primary">
            Partners &amp; Ecosystem
          </p>
          <h2 className="font-bold">
            Built on the World&apos;s Leading
            <br />
            <em className="font-semibold">Technologies</em>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm 2xl:text-base text-muted">
            From AI and cloud to data and analytics, we leverage trusted
            platforms that accelerate transformation and enterprise growth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {stack.map(({ icons, title, description }, idx) => (
            <div
              key={title}
              className={`text-left pl-4 ${idx % 2 !== 0 ? "sm:border-l sm:border-black/30" : ""} ${idx % 4 !== 0 ? "lg:border-l lg:border-black/30" : "lg:border-l-0"}`}
            >
              <div className="flex items-center gap-3">
                {icons.map((icon) => (
                  <span
                    key={icon}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white"
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
              <h3 className="mt-2 font-semibold text-neutral-900">
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
