"use client";

import React from "react";
import Image from "next/image";

interface Region {
  name: string;
  description: string;
}

const regions: Region[] = [
  {
    name: "India",
    description:
      "Expertise across DPI, public sector transformation, social sector consulting, and enterprise innovation.",
  },
  {
    name: "Africa",
    description:
      "Supporting social sector programs, development initiatives, and public sector transformation.",
  },
  {
    name: "US",
    description:
      "Delivering technology strategy, market intelligence, and innovation partnerships.",
  },
  {
    name: "Middle East",
    description:
      "Advising on Vision 2030 initiatives, ESG, infrastructure, and digital transformation.",
  },
  {
    name: "Europe",
    description:
      "Enabling market expansion, growth strategy, and cross-border advisory engagements.",
  },
  {
    name: "APAC",
    description:
      "Supporting regional growth, market entry, and competitive intelligence initiatives.",
  },

  
];

export default function OurGlobalPresence() {
  return (
    <section id="global-presence" className="w-full bg-white ">
      <div className="page-container">
        {/* Eyebrow + heading */}
        <div className="text-left lg:text-center">
          <p className=" font-medium  text-primary text-body-sm ">
            Global Presence
          </p>
          <h2 className=" font-bold text-gray-900">
            Local Expertise, Global <em className="font-semibold">Standards</em>
          </h2>
          <p className=" lg:mx-auto max-w-2xl text-muted ">
            We operate across six regions, combining on-the-ground knowledge with international best practice to deliver contextually relevant, globally benchmarked solutions.
          </p>
        </div>

        {/* Content: region list + map */}

        {/* ── MOBILE: map as background ───────────────────────── */}
        <div className="lg:hidden mt-5 relative overflow-hidden rounded-2xl min-h-[380px] sm:min-h-[480px]">
          {/* Background map */}
          <div className="absolute inset-0">
            <Image
              src="/Hero/Map.svg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-1000"
            />
          </div>
          {/* Gradient overlay so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
          {/* Region list on top */}
          <ul className="relative z-10 space-y-3 p-5">
            {regions.map((region) => (
              <li key={region.name}>
                <div className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <h3 className=" font-bold text-gray-900">{region.name}</h3>
                </div>
                <p className="pl-6  text-muted">
                  {region.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* ── DESKTOP: side-by-side grid ───────────────────────── */}
        <div className="hidden lg:grid mt-2 grid-cols-2 gap-[clamp(1.5rem,2vw,2.5rem)]">
          {/* Region list */}
          <ul className="flex flex-col justify-center ">
            {regions.map((region) => (
              <li key={region.name}>
                <div className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <h3 className="font-medium   text-body-lg">{region.name}</h3>
                </div>
                <p className="pl-6 max-w-xl text-muted text-body-sm">
                  {region.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Map */}
          <div className="flex items-center justify-center">
            <img
              src="/Hero/World.svg"
              alt="World map showing regional presence"
              className="h-full w-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




// "use client";

// import React from "react";
// import Image from "next/image";

// interface Region {
//   name: string;
//   description: string;
// }

// const regions: Region[] = [
//   {
//     name: "India",
//     description:
//       "Primary market. Deep pan-India presence spanning government, enterprise and startup ecosystems.",
//   },
//   {
//     name: "Africa",
//     description:
//       "Sub-Saharan Africa focus with expertise in development consulting, market entry, and public sector advisory.",
//   },
//   {
//     name: "US",
//     description:
//       "North American operations supporting diaspora investments, technology consulting and global research mandates.",
//   },
  
// ];

// export default function OurGlobalPresence() {
//   return (
//     <section className="w-full bg-white ">
//       <div className="page-container">
//         {/* Eyebrow + heading */}
//         <div className="text-left lg:text-center">
//           <p className=" tracking-wide text-primary">
//             Global Presence
//           </p>
//           <h2 className="mt-2 font-bold text-gray-900">
//             Local Expertise, Global <em className="font-semibold">Standards</em>
//           </h2>
//           <p className="mt-2 lg:mx-auto max-w-2xl text-muted">
//             We operate across six regions, combining on-the-ground knowledge with international best practice to deliver contextually relevant, globally benchmarked solutions.
//           </p>
//         </div>

//         {/* Content: region list + map */}

//         {/* ── MOBILE: map as background ───────────────────────── */}
//         <div className="lg:hidden mt-5 relative overflow-hidden rounded-2xl min-h-[380px] sm:min-h-[480px]">
//           {/* Background map */}
//           <div className="absolute inset-0">
//             <Image
//               src="/Hero/Map.svg"
//               alt=""
//               fill
//               sizes="100vw"
//               className="object-cover opacity-1000"
//             />
//           </div>
//           {/* Gradient overlay so text is readable */}
//           <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70" />
//           {/* Region list on top */}
//           <ul className="relative z-10 space-y-3 p-5">
//             {regions.map((region) => (
//               <li key={region.name}>
//                 <div className="flex items-start gap-2">
//                   <svg
//                     className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
//                   </svg>
//                   <h3 className="text-sm font-bold text-gray-900">{region.name}</h3>
//                 </div>
//                 <p className="pl-6 leading-[1.2] text-gray-600">
//                   {region.description}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ── DESKTOP: side-by-side grid ───────────────────────── */}
//         <div className="hidden lg:grid mt-5 grid-cols-2 gap-[clamp(1.5rem,2vw,2.5rem)] lg:min-h-[420px] xl:min-h-[480px] 2xl:min-h-[560px]">
//           {/* Region list */}
//           <ul className="flex flex-col justify-center space-y-[clamp(0.5rem,1vw,1.5rem)]">
//             {regions.map((region) => (
//               <li key={region.name}>
//                 <div className="flex items-start gap-2">
//                   <svg
//                     className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-700"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
//                   </svg>
//                   <h3 className="text-sm font-bold text-gray-900">{region.name}</h3>
//                 </div>
//                 <p className="pl-6 text-sm max-w-xl leading-[1.2] text-gray-500">
//                   {region.description}
//                 </p>
//               </li>
//             ))}
//           </ul>

//           {/* Map */}
//           <div className="flex items-center justify-center">
//             <img
//               src="/Hero/World.svg"
//               alt="World map showing regional presence"
//               className="h-full w-auto max-w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }