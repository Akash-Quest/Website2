import {  ArrowUp,Search } from "lucide-react"
import { motion } from "framer-motion"

const Header2 = () => {
  return (

    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed z-[999] h-auto flex items-center justify-between px-2 py-2 mt-1 bg-white/80 backdrop-blur-md rounded-full pointer-events-none left-4 right-4 md:left-6 md:right-6 top-2"
    >
    <div className="flex items-center gap-2 pointer-events-auto">
    <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#F7F5F1] cursor-pointer">
    <div className="flex flex-col justify-between h-3">
    <span className="block w-4 h-0.5 bg-black rounded"></span>
    <span className="block w-4 h-0.5 bg-black rounded"></span>
    <span className="block w-4 h-0.5 bg-black rounded"></span>
  </div>
</div>
            <div className="inline-flex items-center bg-transparent">
                <img src="/Header/sky.svg" alt="sky" className="h-5 sm:h-6 w-auto"/>
            </div>
        </div>
        <div className="flex items-center gap-3 pointer-events-auto">
            <div className="hidden md:inline-flex justify-center items-center gap-2 p-2 bg-[#F7F5F1] text-black-600 hover:bg-blue-700 hover:text-black transition rounded-full h-8 w-8">
                
                <Search  size={24} />
            </div>
            <div className="inline-flex items-center justify-center px-3 p-3 py-2 bg-[#F7F5F1] text-blue-700 hover:bg-blue-700 hover:text-black transition rounded-full">
            <button className=" flex items-center gap-.5 text-sm font-medium">
                Sign in<ArrowUp size={18} className="rotate-45" />
            </button>
            </div>
        </div>
    </motion.header>
  )
}

export default Header2