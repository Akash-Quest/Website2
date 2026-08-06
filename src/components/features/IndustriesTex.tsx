import Reveal from "@/components/ui/Reveal";

interface IndustriesTexProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
}

export default function IndustriesTex({
  eyebrow,
  heading,
  description,
}: IndustriesTexProps) {
  return (
    <section className="w-full bg-white border-t border-[#03030F]/10">
      <div className="page-container ">
        <div className="">

          <Reveal as="h2" variant="upSm" custom={1} className="font-semibold mt-2">
            {heading}
          </Reveal>
          <Reveal
            as="p"
            variant="upSm"
            custom={2}
            className="text-body-lg mt-4 leading-normal tracking-wide text-muted"
          >
            {description}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
