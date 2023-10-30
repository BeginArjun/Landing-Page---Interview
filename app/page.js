'use client'
import { useTheme } from './context/ThemeContext'
import Blob from './component/Blob'
import Hero from './component/Hero'
import { useEffect, useState } from 'react'
import Card from './component/Card'

export default function Home() {
  const {theme}=useTheme()
  const [timer,setTimer]=useState(false)
  console.log(theme)
  useEffect(()=>{
    setInterval(()=>{
      setTimer(true)
    },37000)
  },[])
  return (
    <main className={`${theme==='light'?'bg-[--background] text-black':'bg-[--dark] text-white'} 
    w-full h-screen relative flex flex-col justify-center items-center`}>
      <Blob/>
      {!timer ?(<div className='z-[100]'>
      <Hero/>
      </div>):(
      <Card/>
      )
      }
    </main>
  )
}
