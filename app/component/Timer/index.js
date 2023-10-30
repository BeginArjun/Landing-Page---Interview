'use client'

import { useEffect, useState } from "react";
import { useTheme } from "@/app/context/ThemeContext";
const Timer=()=>{
    const [time,setTime]=useState(30)
    const {theme}=useTheme()
    useEffect(()=>{
        const interval=setInterval(()=>setTime((prev)=>prev!==0?prev-1:prev=prev),1000)
        return ()=>clearInterval(interval)
    },[])

    return(
        <div className={`lg:rounded-3xl rounded-xl font-[--poppins] ${theme==='dark'?'bg-gradient-to-r from-[#380D2C] via-[#4D173E] to-[#2B174D]':'bg-gradient-to-r from-[#E5B8D9] to-[#C9B8E5]'} p-8 flex gap-4 justify-between items-center`}>
            <div className="flex flex-col items-center justify-center">
                <p className="lg:text-[64px] text-4xl">00</p>
                <p>Minutes</p>
            </div>
            <p className="lg:text-[64px]">:</p>
            <div className="flex flex-col items-center justify-center">
                <p  className="lg:text-[64px] text-4xl">{time<10?'0'+time.toString():time}</p>
                <p>Seconds</p>
            </div>
        </div>
    )
}
export default Timer;