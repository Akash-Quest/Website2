
import Image from "next/image";
import Link from "next/link";
import HowItWorks from "@/components/features/AgriMap/HowItWorks";
function AgriMapProduct() {
  return (
    <section className="reltive">
    <div className="relative bg-background overflow-hidden">
         <div
        className=" pointer-events-none absolute inset-0 bg- bg-cover opacity-30 aspect-[71/25]"
        style={{ backgroundImage: "url('/team/bg.jpg')",
                backgroundBlendMode: "darken", }}
      />
    <div className="hero-container relative z-10 pb-5">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className=" pb-2 px-4 lg:px-0 ">
          <ol className="breadcrumb flex flex-wrap items-center gap-2 text-gray-500 font-light tracking-wide">
            <li>
              <Link href="/" className="hover:text-muted transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/what-we-do" className="hover:text-muted transition-colors">
                Products
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-700">Agrimap</li>
          </ol>
        </nav>
        <div className="px-[2] sm:px-2 md:px-[10%]">
        {/* Eyebrow */}
        <p className="text-center text-primary mb-2 mt-8 sm:mt-8 md:mt-2 text-sm 2xl:text-base ">
          Seed Inteligence Platform 
        </p>

        {/* Heading */}
        <h1 className="text-center font-bold">
          Know every seed. Reach<br></br>{" "}
          <em className="font-semibold">every farm</em>
        </h1>

        {/* Subheading */}
        <p className=" mx-auto text-center mt-2 mb-5 max-w-[75%] text-muted text-sm 2xl:text-base ">
           AgriMap gives agriculture departments, banks, and governments a real-time view of seed replacement rates, crop health, and variety adoption across every district down to the block level.  </p>
        </div>
      
      </div>
      
    </div>
    <div className=" pt-0 pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28">
        <div className="relative w-full aspect-[71/25] overflow-hidden ">
          <Image
            src="/service/Digital/hero.jpg"
            alt="AgriMap seed intelligence platform"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
    
  );
}

export default function Teams() {
  return (<>
  <AgriMapProduct />
  <HowItWorks />

  </>)

}
