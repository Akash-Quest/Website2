"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Header from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeroSliderPage = pathname === "/";

  let activeHeader;
  if (isHeroSliderPage && !isScrolled) {
    activeHeader = <Header key="header" />;
  } else if (isScrolled) {
    activeHeader = <Header2 key="header2" />;
  } else {
    activeHeader = <Header3 key="header3" />;
  }

  return <AnimatePresence>{activeHeader}</AnimatePresence>;
}
