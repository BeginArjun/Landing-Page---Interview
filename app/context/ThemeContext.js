'use client'
import { useContext,createContext, useState } from "react";

const themeContext=createContext('light');

const ThemeContext=({children})=>{
    const [theme,setTheme]=useState('dark')
    return(
        <themeContext.Provider value={{theme,update:setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme=()=>{
    const context=useContext(themeContext)
    return context
}

export default ThemeContext