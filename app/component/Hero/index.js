'use client'
import Timer from "../Timer"
import InputBox from "../InputBox"
import { useTheme } from "@/app/context/ThemeContext"
import AnimatedLetters from '../AnimatedLetter'
import { Light, Dark } from "../Rocket"
const Hero=()=>{
    const {theme}=useTheme()

    return(
        <div className="font-[--poppins] flex flex-col justify-start items-center gap-4 p-4 h-full ">
            <div className="flex justify-center items-center gap-3">
                {theme==='light'?<Light/>:<Dark/>}
                <p className="lg:text-[64px] text-2xl font-bold lg:tracking-[100%]">Launching New Module Soon!</p>
            </div>
            <p className="w-full tracking-[120%] lg:text-2xl text-sm font-normal text-center">
                    Exciting things are in the works! We're currently 
                    <span className="font-bold"> Crafting a new feature for you. </span> 
                    <br/>
                    Keep an eye out for updates - We're working to make it available soon!
            </p>
            <AnimatedLetters>GET READY FOR THE REVEAL!</AnimatedLetters>
            <Timer/>
            <p className="lg:text-xl lg:leading-[120%] leading-[150%] text-xs">Be the first to know! Share your email and We'll notify you when it's live</p>
            <InputBox/>
        </div>
    )
}
export default Hero