"use client"

import { useEffect, useState, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

interface SpaceModelProps {
  isMobile: boolean
}

export function SpaceModel({ isMobile }: SpaceModelProps) {
  const { scene, animations } = useGLTF('/3dmodels/SpaceBoy/scene.gltf')
  const [mixer] = useState(() => new THREE.AnimationMixer(scene))
  const [modelSettings, setModelSettings] = useState({
    scale: isMobile ? 4.2 : 1.8,
    position: isMobile ? [-3, -5.5, 0.5] : [-2, -3.25, 0.5],
  })

  useEffect(() => {
    // Adjust model scale and position for mobile
    setModelSettings({
      scale: isMobile ? 4.2 : 1.8,
      position: isMobile ? [-2, -5.5, 0.5] : [-1, -3.25, 0.5],
    })
  }, [isMobile])

  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0], scene)
      action.play()
    }
    // Cleanup on unmount
    return () => {
      mixer.stopAllAction()
    }
  }, [animations, scene, mixer])

  // Animate the astronaut model
  useFrame((_, delta) => {
    mixer.update(delta)
  })

  return (
    <group>
      <hemisphereLight intensity={5.15} />
      <pointLight intensity={10} position={[10, 10, 10]} />
      <spotLight 
        position={[-20, 60, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        shadow-mapSize={1024} 
      />
      
      <primitive
        scale={modelSettings.scale}
        position={[modelSettings.position[0], modelSettings.position[1], modelSettings.position[2]]}
        object={scene}
      />
    </group>
  )
}