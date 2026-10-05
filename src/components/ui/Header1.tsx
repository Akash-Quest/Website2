import { motion } from "framer-motion"
import Link from "next/link"
import HeaderActions from "./HeaderActions"
import MegaMenu from "./MegaMenu"

const Header = () => {
  return (

    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed z-[999] w-full h-16 sm:h-20 lg:h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-transparent pointer-events-none"
    >
        <div className="flex items-center gap-2 pointer-events-auto">
            <MegaMenu triggerBgClassName="bg-white" />
            <Link href="/" className="inline-flex items-center bg-transparent">
                <img src="/Header/logo.svg" alt="SkyQuest" width={216} height={31} className="h-5 sm:h-6 2xl:h-7 w-auto"/>
            </Link>
        </div>
        <HeaderActions bgClassName="bg-white" />
    </motion.header>
  )
}

export default Header