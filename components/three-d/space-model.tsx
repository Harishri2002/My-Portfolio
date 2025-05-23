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
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
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
    if (!mixerRef.current) {
      mixerRef.current = new THREE.AnimationMixer(scene)
    }

    const mixer = mixerRef.current

    if (animations && animations.length > 0) {
      // Clear any existing actions
      mixer.stopAllAction()
      
      // Play all animations or specific one
      animations.forEach((clip) => {
        const action = mixer.clipAction(clip)
        action.play()
        // Ensure animation loops
        action.setLoop(THREE.LoopRepeat, Infinity)
      })
    }

    // Cleanup on unmount
    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction()
      }
    }
  }, [animations, scene])

  // Animate the astronaut model with consistent timing
  useFrame((state, delta) => {
    if (mixerRef.current) {
      // Clamp delta to prevent large jumps
      const clampedDelta = Math.min(delta, 0.1)
      mixerRef.current.update(clampedDelta)
    }
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