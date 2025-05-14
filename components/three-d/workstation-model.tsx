"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import type * as THREE from "three"

export function WorkstationModel() {
  const groupRef = useRef<THREE.Group>(null)
  const station = useGLTF('/3dmodels/scene.gltf')

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

      {/* Using the imported 3D model instead of custom geometries */}
      <group ref={groupRef} position={[0, -3.25, 0]} scale={0.8}>
        <primitive 
          object={station.scene}
          position={[0, 0, 1.5]}
        />
      </group>
    </group>
  )
}