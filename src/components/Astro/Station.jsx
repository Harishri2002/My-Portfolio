"use client"

import { useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

export const Station = () => {
  const { scene, animations } = useGLTF("/3dmodels/SpaceBoy/scene.gltf")

  const [mixer] = useState(() => new THREE.AnimationMixer())
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [modelSettings, setModelSettings] = useState({
    scale: 1.8,
    position: [-3, -3.25, 0.5],
  })

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)

      // Adjust model scale and position for mobile
      setModelSettings({
        scale: mobile ? 4.2 : 1.8, // Smaller scale for mobile
        position: mobile ? [-4, -5.5, 0.5] : [-3, -3.25, 0.5], // Adjust position for smaller screens
      })
    }

    // Initial setup
    handleResize()

    // Add resize listener
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0], scene)
      action.play()
    }
    return () => mixer.stopAllAction() // Cleanup on unmount
  }, [animations, scene, mixer])

  useFrame((_, delta) => mixer.update(delta))

  return (
    <mesh>
      <hemisphereLight intensity={5.15} />
      <pointLight intensity={10} />
      <spotLight position={[-20, 60, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive scale={modelSettings.scale} position={modelSettings.position} object={scene} />
    </mesh>
  )
}
