import style from './AnimatedLetter.module.scss'
import { useTheme } from '@/app/context/ThemeContext'
const AnimatedLetter=({children})=>{
    const {theme}=useTheme()
    return(
        <div className={`${theme==='dark'?style.chrome:style.chromeD } lg:text-[40px] `}>
            {children}
        </div>
    )
}
export default AnimatedLetter