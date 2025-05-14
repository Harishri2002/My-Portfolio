"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

export function WorkstationModel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group>
      <hemisphereLight intensity={9.15} />
      <pointLight intensity={10} position={[10, 10, 10]} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />

      {/* Custom workstation model made with basic Three.js geometries */}
      <group ref={groupRef} position={[0, -2, 0]} scale={0.8}>
        {/* Desk */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[5, 0.2, 2.5]} />
          <meshStandardMaterial color="#5c3d2e" />
        </mesh>

        {/* Desk legs */}
        <mesh position={[-2.2, -1.5, -1]}>
          <boxGeometry args={[0.2, 3, 0.2]} />
          <meshStandardMaterial color="#3d2817" />
        </mesh>
        <mesh position={[2.2, -1.5, -1]}>
          <boxGeometry args={[0.2, 3, 0.2]} />
          <meshStandardMaterial color="#3d2817" />
        </mesh>
        <mesh position={[-2.2, -1.5, 1]}>
          <boxGeometry args={[0.2, 3, 0.2]} />
          <meshStandardMaterial color="#3d2817" />
        </mesh>
        <mesh position={[2.2, -1.5, 1]}>
          <boxGeometry args={[0.2, 3, 0.2]} />
          <meshStandardMaterial color="#3d2817" />
        </mesh>

        {/* Monitor stand */}
        <mesh position={[0, 0.2, -0.5]}>
          <boxGeometry args={[0.6, 0.1, 0.6]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
        <mesh position={[0, 0.7, -0.5]}>
          <boxGeometry args={[0.1, 1, 0.1]} />
          <meshStandardMaterial color="#222222" />
        </mesh>

        {/* Monitor */}
        <mesh position={[0, 1.3, -0.5]} rotation={[0, 0, 0]}>
          <boxGeometry args={[3, 1.7, 0.1]} />
          <meshStandardMaterial color="#222222" />
        </mesh>

        {/* Monitor screen */}
        <mesh position={[0, 1.3, -0.45]} rotation={[0, 0, 0]}>
          <boxGeometry args={[2.8, 1.5, 0.05]} />
          <meshStandardMaterial color="#1E90FF" emissive="#1E90FF" emissiveIntensity={0.5} />
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, 0.25, 0.3]}>
          <boxGeometry args={[2, 0.1, 0.8]} />
          <meshStandardMaterial color="#333333" />
        </mesh>

        {/* Mouse */}
        <mesh position={[1.5, 0.25, 0.3]}>
          <boxGeometry args={[0.3, 0.1, 0.5]} />
          <meshStandardMaterial color="#333333" />
        </mesh>

        {/* Coffee mug */}
        <mesh position={[-1.5, 0.4, 0.3]}>
          <cylinderGeometry args={[0.2, 0.15, 0.4, 16]} />
          <meshStandardMaterial color="#cc5500" />
        </mesh>
      </group>
    </group>
  )
}
