import {  ArrowUp } from "lucide-react"
import { motion } from "framer-motion"
import ExpandableSearch from "./ExpandableSearch"
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
            <div className="inline-flex items-center bg-transparent">
                <img src="/Header/logo.svg" alt="Logo" className="h-5 sm:h-6 2xl:h-9 w-auto"/>
            </div>
        </div>
        <div className="flex items-center gap-3 pointer-events-auto">
            <ExpandableSearch bgClassName="bg-white" />
            <div className="inline-flex items-center justify-center px-3 p-3 py-2 bg-[white] text-primary hover:black hover:text-black transition rounded-full">
            <button className=" flex items-center gap-.5 text-sm 2xl:text-xl font-medium">
                Sign in<ArrowUp size={18} className="rotate-45 " />
            </button>
            </div>
        </div>
    </motion.header>
  )
}

export default Header