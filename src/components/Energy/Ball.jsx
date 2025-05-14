"use client"

import { useEffect, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"

export const Ball = () => {
  const { scene, animations } = useGLTF("/3dmodels/Info.glb")
  const [mixer] = useState(() => new THREE.AnimationMixer())
  const [scale, setScale] = useState(1.8) // Default scale for larger screens
  const [position, setPosition] = useState([0, 0, 0])

  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0], scene)
      action.play()
    }
    return () => mixer.stopAllAction() // Cleanup on unmount
  }, [animations, scene, mixer])

  useEffect(() => {
    // Ensure materials respond to standard lighting
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: child.material.color,
          roughness: 0.5,
          metalness: 0.5,
        })
      }
    })
  }, [scene])

  useEffect(() => {
    const updateScale = () => {
      // Adjust scale based on screen width
      if (window.innerWidth <= 768) {
        setPosition([0, 3, 0])
        setScale(1) // Smaller scale for mobile
      } else {
        setPosition([0, 0, 0])
        setScale(1.8) // Default scale for larger screens
      }
    }

    updateScale() // Set scale on component mount
    window.addEventListener("resize", updateScale) // Update scale on window resize
    return () => window.removeEventListener("resize", updateScale) // Cleanup on unmount
  }, [])

  useFrame((_, delta) => mixer.update(delta))

  return (
    <mesh>
      <ambientLight intensity={1.3} />
      <hemisphereLight intensity={1} color="white" />
      <pointLight position={[0, 10, 10]} intensity={1841} />
      <spotLight position={[0, 20, 20]} angle={0.3} penumbra={0.5} intensity={2} castShadow shadow-mapSize={1024} />
      <primitive
        scale={scale} // Dynamic scale based on screen size
        position={position}
        object={scene}
      />
    </mesh>
  )
}
