'use client'
import { useTheme } from "@/app/context/ThemeContext"
import AnimatedLetter from "../AnimatedLetter"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { motion } from "framer-motion"
const Card=()=>{
    const router=useRouter()
    const {theme}=useTheme()
    // Redirect User to Product Page after delay of 3sec
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         router.push('/product')
    //     },3000)
    // },[])
    return(
        <motion.div 
        initial={{scale:0}}
        animate={{scale:[1,1.2,1]}}
        transition={{duration:1.5}}
        className={`inline-flex flex-col justify-center items-center lg:gap-[72px] gap-12 lg:p-16 px-6 py-3 lg:rounded-3xl rounded-xl z-[100]
        lg:w-[650px] w-[328px] lg:h-[400px]
        bg-gradient-to-r ${theme==='dark'?'from-[#380D2C] via-[#4D173E] to-[#2B174D] text-white':'from-[#E5B8D9] to-[#C9B8E5] text-black'}
        `}>
            <div className="flex flex-col items-center  font-[--poppins] text-center">
                <AnimatedLetter>We are Live Now!</AnimatedLetter>
                <p className="lg:text-2xl text-xs font-medium">Our new feature is now 
                <span className="font-bold"> Live and ready </span>for you to explore.
                 Go ahead and give it a try</p>
            </div>
            <button 
            onClick={()=>router.push('/product')}   // Redirect to Product Page
            className={`${theme==='dark'?'bg-black text-white':'bg-white text-black'} lg:px-[10px] lg:py-[20px] px-2 py-3 
            rounded-lg inline-flex items-center justify-center lg:w-[224px] 
            `}>Get Started</button>
        </motion.div>
    )
}
export default Card