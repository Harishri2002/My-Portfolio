"use client"

import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate asset loading
    const loadAssets = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)) // Simulate 3 seconds loading time
      setIsLoading(false)
    }
    loadAssets()
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-[9999]">
      <div className="text-[#00ffcc] text-2xl mb-5 text-center uppercase tracking-[3px] animate-[glow_1.5s_infinite_alternate]">
        Welcome to My World
      </div>
      <div className="border-4 border-[rgba(0,255,204,0.1)] border-t-[#00ffcc] rounded-full w-12 h-12 animate-spin"></div>
    </div>
  )
}
