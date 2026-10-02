import Image from "next/image";

import Button from "@/components/ui/Button";


export default function RequestCustomization({
  bgClassName = "bg-white",
  imageSrc = "/AboutUs/Customize.jpg",
}: {
  bgClassName?: string;
  imageSrc?: string;
}) {
  return (
    <section className={bgClassName}>
      <div className="page-container grid grid-cols-1 items-center gap-8 pt-10 pb-12 lg:grid-cols-2 lg:gap-12">
        {/* Copy */}
        <div>
          <h2 className="font-semibold text-gray-900">
            Request Free <em className="font-semibold">Customization</em>
          </h2>

          <p className="mt-4 leading-relaxed text-muted ">
            Want to customize this report? This report can be personalised according to your
            needs. Our analysts and industry experts will work directly with you to understand
            your requirements and provide you with customized data in a short amount of time.
          </p>

          <p className="mt-3 font-medium text-gray-900 ">
            We offer $1000 worth of FREE customization at the time of purchase.
          </p>

          <div className="mt-5">
            <Button variant="primary" href="/contact" minWidth="190px" className="text-[11px]">
              REQUEST CUSTOMIZATION
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl lg:aspect-[4/2.6]">
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
