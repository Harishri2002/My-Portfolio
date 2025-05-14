"use client"

import { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface SpaceModelProps {
  isMobile: boolean
}

export function SpaceModel({ isMobile }: SpaceModelProps) {
  // Instead of trying to load a non-existent model, we'll create a custom 3D object
  const groupRef = useRef<THREE.Group>(null)
  const [modelSettings, setModelSettings] = useState({
    scale: isMobile ? 4.2 : 1.8,
    position: isMobile ? [-4, -5.5, 0.5] : [-3, -3.25, 0.5],
  })

  useEffect(() => {
    // Adjust model scale and position for mobile
    setModelSettings({
      scale: isMobile ? 4.2 : 1.8,
      position: isMobile ? [-4, -5.5, 0.5] : [-3, -3.25, 0.5],
    })
  }, [isMobile])

  // Animate the astronaut model
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group>
      <hemisphereLight intensity={5.15} />
      <pointLight intensity={10} position={[10, 10, 10]} />
      <spotLight position={[-20, 60, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

      {/* Custom astronaut model made with basic Three.js geometries */}
      <group
        ref={groupRef}
        position={[modelSettings.position[0], modelSettings.position[1], modelSettings.position[2]]}
        scale={modelSettings.scale * 0.5}
      >
        {/* Body */}
        <mesh position={[0, 0, 0]}>
          <capsuleGeometry args={[1, 1.5, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Head */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Visor */}
        <mesh position={[0, 1.5, 0.4]}>
          <sphereGeometry args={[0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color="#4287f5" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Backpack */}
        <mesh position={[0, 0.2, -0.8]}>
          <boxGeometry args={[1.5, 1.2, 0.6]} />
          <meshStandardMaterial color="#cccccc" />
        </mesh>

        {/* Left arm */}
        <mesh position={[-0.8, 0.2, 0]} rotation={[0, 0, -Math.PI * 0.15]}>
          <capsuleGeometry args={[0.3, 1.2, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Right arm */}
        <mesh position={[0.8, 0.2, 0]} rotation={[0, 0, Math.PI * 0.15]}>
          <capsuleGeometry args={[0.3, 1.2, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Left leg */}
        <mesh position={[-0.5, -1.5, 0]}>
          <capsuleGeometry args={[0.35, 1, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>

        {/* Right leg */}
        <mesh position={[0.5, -1.5, 0]}>
          <capsuleGeometry args={[0.35, 1, 4, 8]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
    </group>
  )
}
