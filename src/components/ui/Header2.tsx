import { motion } from "framer-motion"
import Link from "next/link"
import HeaderActions from "./HeaderActions"
import MegaMenu from "./MegaMenu"

const Header2 = () => {
  return (

    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed z-[999] h-auto flex items-center justify-between px-2 py-2 2xl:p-2 bg-white/80 backdrop-blur-md rounded-full pointer-events-none left-4 right-4 md:left-6 md:right-6 top-2"
    >
    <div className="flex items-center gap-2 pointer-events-auto">
    <MegaMenu triggerBgClassName="bg-[#F7F5F1]" />
            <Link href="/" className="inline-flex items-center bg-transparent">
                <img src="/Header/sky.svg" alt="SkyQuest" width={216} height={31} className="h-5 sm:h-6 2xl:h-7 w-auto"/>
            </Link>
        </div>
        {/* Page tone, so the controls stand out inside the white pill. */}
        <HeaderActions bgClassName="bg-[#F7F5F1]" />
    </motion.header>
  )
}

export default Header2