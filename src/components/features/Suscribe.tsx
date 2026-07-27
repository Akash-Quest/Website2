"use client";

import { useState, useEffect } from "react";

export default function Suscribe() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleSubscribe = () => {
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 2800);
  };

  const fade = animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4";

  return (
    <div className="bg-background">
      <div className="page-container ">
      <div className="relative w-full rounded-none md:rounded-2xl overflow-hidden bg-[url('/Hero/suscribelit.jpg')] md:bg-[url('/Suscribe.svg')] bg-cover bg-center">

        {/* Content */}
        <div className="relative z-[2] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-12 xl:px-10 xl:py-12 2xl:px-14 2xl:py-24">
          <h2 className="text-white mb-3 font-semibold">
              Stay Ahead with Our Weekly
            <br />
           <em className="font-semibold">
              Intelligence Brief  
            </em>
          </h2>

          <p className={`text-white mb-5 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${fade}`}>
            Industry insights, market research, and strategic thinking curated
            for leaders who move first.
          </p>

          {/* Input + Button */}
          <div
            className={`flex flex-row items-center rounded-none md:rounded-lg overflow-hidden bg-white/20`}
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
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
