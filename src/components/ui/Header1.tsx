import {  ArrowUp,Search } from "lucide-react"
import { motion } from "framer-motion"

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
            <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white cursor-pointer">
  <div className="flex flex-col justify-between h-3">
    <span className="block w-4 h-0.5 bg-black rounded"></span>
    <span className="block w-4 h-0.5 bg-black rounded"></span>
    <span className="block w-4 h-0.5 bg-black rounded"></span>
  </div>
</div>
            <div className="inline-flex items-center bg-transparent">
                <img src="/Header/logo.svg" alt="Logo" className="h-5 sm:h-6 w-auto"/>
            </div>
        </div>
        <div className="flex items-center gap-3 pointer-events-auto">
            <div className="hidden md:inline-flex justify-center items-center gap-2 p-2 bg-[white] text-black-600 hover:bg-blue-700 hover:text-black transition rounded-full h-8 w-8">
                
                <Search  size={24} />
            </div>
            <div className="inline-flex items-center justify-center px-3 p-3 py-2 bg-[white] text-blue-700 hover:bg-blue-700 hover:text-black transition rounded-full">
            <button className=" flex items-center gap-.5 text-sm font-medium">
                Sign in<ArrowUp size={18} className="rotate-45" />
            </button>
            </div>
        </div>
    </motion.header>
  )
}

export default Header