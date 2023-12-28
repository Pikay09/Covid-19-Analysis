'use client'

import { useState, useEffect } from "react";
import GlobalPieRecharts from "./components/globalPieChart";
import Link from "next/link";


export default function Home() {

  const introWords = [
    'hello, welcome to', 'Covid-19 Live Analysis'
  ]

  const [intro, setIntro] = useState(introWords[0]);

  useEffect(() => {
    setInterval(() => {
      setIntro(introWords[1])
    }, 3000);
    
}, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{intro}</h1>
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      
        <GlobalPieRecharts/>
        <Link href={'/analysis'}>
          <button className="bg-red-900 p-2 rounded">Search Countries</button>
        </Link>
      </div>
    </main>
  )
}
