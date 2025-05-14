"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { OrbitControls, Preload } from "@react-three/drei"
import { Ball } from "./Ball"
import { LoaderProg } from "../WorkStation/LoaderProg"

export const Land = () => {
  // State to track if it's mobile view
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 568)
  const [fov, setFov] = useState(10) // Default fov

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Update FOV based on mobile view
    if (isMobile) {
      setFov(15) // Set fov to 5 for mobile
    } else {
      setFov(10) // Reset fov to 10 for larger screens
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMobile])

  return (
    <Canvas
      style={{ height: "80vh" }}
      frameLoop="demand"
      shadows
      camera={{
        position: [25, 25, 25],
        fov: fov, // Use dynamic fov based on screen size
        near: 15,
        far: 1000,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<LoaderProg />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Ball />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
