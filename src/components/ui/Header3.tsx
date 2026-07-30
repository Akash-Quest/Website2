import {  ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import ExpandableSearch from "./ExpandableSearch"
import MegaMenu from "./MegaMenu"

const Header3 = () => {
  return (

    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed z-[999] w-full h-auto py-3 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-transparent pointer-events-none"
    >
        <div className="flex items-center gap-2 pointer-events-auto">
            <MegaMenu triggerBgClassName="bg-white" />
            <Link href="/" className="inline-flex items-center bg-transparent">
                <img src="/Header/sky.svg" alt="Logo" className="h-5 sm:h-6 2xl:h-7 w-auto"/>
            </Link>
        </div>
        <div className="flex items-center gap-3 pointer-events-auto">
            <ExpandableSearch bgClassName="bg-white" />
            <div className="inline-flex items-center justify-center px-3 p-3 py-2 bg-[white] text-blue-700 hover:bg-blue-700 hover:text-black transition rounded-full">
           <Link href="/signin" className=" flex items-center gap-.5 text-sm 2xl:text-base font-medium">
                Sign in<ArrowUp size={18} className="rotate-45 " />
            </Link>
            </div>
        </div>
    </motion.header>
  )
}

export default Header3