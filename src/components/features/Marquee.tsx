import Image from "next/image";

const logos = [
  { src: "/logos/AGC3x.webp", alt: "AGC" },
  { src: "/logos/Aisin3x.webp", alt: "Aisin" },
  { src: "/logos/ASKA%20P%20Co.%20LTD3x.webp", alt: "ASKA P Co. LTD" },
  { src: "/logos/BD3x.webp", alt: "BD" },
  { src: "/logos/BILL%20%26%20MELIDA3x.webp", alt: "Bill & Melinda Gates Foundation" },
  { src: "/logos/BOSCH3x.webp", alt: "Bosch" },
  { src: "/logos/CHUNGHWA%20TELECOM3x.webp", alt: "Chunghwa Telecom" },
  { src: "/logos/DAIKIN3x.webp", alt: "Daikin" },
  { src: "/logos/DEPARTMENT%20OF%20SCIENCE%20%26%20TECHNOLOGY3x.webp", alt: "Department of Science & Technology" },
  { src: "/logos/ETRI3x.webp", alt: "ETRI" },
  { src: "/logos/Fiti%20Testing3x.webp", alt: "Fiti Testing" },
  { src: "/logos/GERRESHEIMER3x.webp", alt: "Gerresheimer" },
  { src: "/logos/HENKEL3x.webp", alt: "Henkel" },
  { src: "/logos/HITACHI3x.webp", alt: "Hitachi" },
  { src: "/logos/HOLISTIC%20MEDICAL%20CENTRE3x.webp", alt: "Holistic Medical Centre" },
  { src: "/logos/Institute%20for%20information%20industry3x.webp", alt: "Institute for Information Industry" },
  { src: "/logos/JAXA3x.webp", alt: "JAXA" },
  { src: "/logos/JTI3x.webp", alt: "JTI" },
  { src: "/logos/Khidi3x.webp", alt: "Khidi" },
  { src: "/logos/METHOD.3x.webp", alt: "Method" },
  { src: "/logos/Missul%20E%26S3x.webp", alt: "Missul E&S" },
  { src: "/logos/MITSUBISHI3x.webp", alt: "Mitsubishi" },
  { src: "/logos/MIZUHO3x.webp", alt: "Mizuho" },
  { src: "/logos/NEC3x.webp", alt: "NEC" },
];

export default function Marquee() {
  return (
    <section className="w-full overflow-hidden bg-[#F7F5F1] py-8 md:py-10 px-8 sm:px-8 md:px-12 lg:px-24 xl:px-40">
      <div className="relative overflow-hidden group">
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex min-w-max items-center gap-6 md:gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex h-16 md:h-20 w-32 sm:w-36 md:w-44 items-center justify-center grayscale-[50%] opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 shrink-0 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={90}
                className="w-auto h-auto max-h-12 md:max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}