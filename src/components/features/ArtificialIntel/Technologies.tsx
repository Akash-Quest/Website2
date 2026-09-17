import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const stack = [
  {
    icons: [
      "/All logos/Aws.svg",
      "/All logos/Azzure.svg",
      "/All logos/Gcp.svg",
      "/All logos/Docker.svg",
    ],
    title: "AWS / Azure / GCP /Docker",
    description:
      "Multi-cloud data platform implementations, managed ML services, and cloud-native AI infrastructure at scale.",
  },
  {
    icons: ["/All logos/PowerBi.svg"],
    title: "Power BI ",
    description:
      "Enterprise BI dashboards, self-service analytics, and data visualisation platforms for executive and operational reporting.",
  },
   {
    icons: ["/All logos/opeAi.svg", "/All logos/LangChain.svg","/All logos/Claude.svg"],
    title: "OpenAI,LangChain,Claude",
    description:
      "LLM integration, RAG system builds, agent frameworks, and enterprise GenAI application development.",
  },
  {
     icons: ["/All logos/SQL.svg", "/All logos/Mongodb.svg"],
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
    icons: ["/All logos/Apache.svg"],
    title: "Apache Spark",
    description:
      "Cloud data platform architecture, data lakehouse builds, and large-scale analytics engineering.",
  },
 
  {
    icons: ["/All logos/Mlflow.svg", "/All logos/Kuberflow.svg"],
    title: "MLflow & Kubeflow",
    description:
      "MLOps platform implementation, model registry, experiment tracking, and production ML pipeline orchestration.",
  },
  {
    icons: ["/All logos/dbt.svg"],
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
          <Reveal
            as="p"
            variant="upSm"
            custom={0}
            className="mb-2 text-body-sm font-medium text-primary"
          >
            Partners &amp; Ecosystem
          </Reveal>
          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold">
            Built on the World&apos;s Leading
            <br />
            <em className="font-semibold">Technologies</em>
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="mx-auto mt-2 max-w-xl text-body-sm text-muted"
          >
            From AI and cloud to data and analytics, we leverage trusted
            platforms that accelerate transformation and enterprise growth.
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {stack.map(({ icons, title, description }, idx) => (
            <Reveal
              key={title}
              variant="upSm"
              custom={idx}
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
              <h3 className="text-body-lg mt-2 font-medium text-neutral-900">
                {title}
              </h3>
              <p className="mt-1.5  text-neutral-500">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
