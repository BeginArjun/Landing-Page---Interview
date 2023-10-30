'use client'
import { useTheme } from "@/app/context/ThemeContext"
import Toggle from "../Toggle"
import Image from "next/image"
import { usePathname } from "next/navigation"
const Navbar=()=>{
    const {theme}=useTheme()
    const pathname=usePathname()
    return(
        <header className={`absolute bg-transparent z-50 w-full ${pathname==='/product'?'shadow-[0px_4px_4px_0px_#fff]':''}`}>
            <nav className="px-4 py-2 font-[--body-font] w-full flex justify-between items-center gap-2 ">
                <div className="w-full">
                    <p className={`${theme==='light'?'text-black':'text-white'} tracking-[2.05px] leading-4 font-semibold lg:text-2xl`}>THE 
                        <span className={`${theme==='light'?'text-white bg-black':'text-black bg-white'}`}>PRODUCT</span>
                        PLATFORM</p>
                </div>
                {pathname!=='/product'?<Toggle/>:
                <Image src='./assets/avatar.svg' width='30'  height='30' alt='avatar'/>}
            </nav>
        </header>
    )
}

export default Navbar