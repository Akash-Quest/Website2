"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Suscribe({
  className = "",
  bgClassName = "bg-background",
}: {
  className?: string;
  bgClassName?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);


  const handleSubscribe = () => {
    const value = email.trim().toLowerCase();
    if (!value) return;

    // TODO: replace with a real API call once the backend is connected, e.g.
    // await fetch("/api/subscribe", { method: "POST", body: JSON.stringify({ email: value }) });
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 2800);
  };

  return (
    <div className={bgClassName}>
      {/* px-0 keeps the image full-bleed on mobile (see rounded-none below).
          The md gutter must stay in rem and match .page-container's
          min(10%, 12rem) exactly, or this section diverges from every other
          one once the root font-size scales up past 2400px. It has to be
          repeated here because utilities outrank @layer components. */}
      <div className={` page-container ${className} px-0 md:px-[min(10%,12rem)] ` }>
      <div className="relative w-full rounded-none md:rounded-2xl overflow-hidden bg-[url('/Hero/suscribelit.jpg')] md:bg-[url('/Hero/patang.jpg')] bg-cover bg-center">

        {/* Content */}
        <motion.div
          className="relative z-[2] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-12 xl:px-10 xl:py-12 2xl:px-14 2xl:py-24"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={fadeUp} className="text-white mb-3 font-semibold">
              Stay Ahead with Our Weekly{" "}
            <br />
           <em className="font-semibold">
              Intelligence Brief
            </em>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-white mb-5 max-w-lg leading-relaxed">
            Industry insights, market research, and strategic thinking curated
            for leaders who move first.
          </motion.p>

          {/* Input + Button */}
          <motion.div
            variants={fadeUp}
            className={`flex flex-row items-center  rounded-lg overflow-hidden bg-white/20`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              placeholder="Enter Your Email"
              className="flex-1 min-w-0 text-white/80 placeholder-white/35 text-sm px-4 py-3 outline-none"
            />

            <button
              onClick={handleSubscribe}
              className={`m-1.5 w-auto min-w-[90px] px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 active:scale-95 ${
                done ? "bg-[rgba(100,210,130,0.9)] text-[#0a3a28]" : "bg-white/90 text-[#1D1EE3]"
              }`}
            >
              {done ? "✓ Done!" : "Subscribe"}
            </button>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}
