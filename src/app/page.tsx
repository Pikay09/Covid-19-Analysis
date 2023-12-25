'use client'

import { useState, useEffect } from "react";


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
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>{intro}</h1>
      </div>
    </main>
  )
}
