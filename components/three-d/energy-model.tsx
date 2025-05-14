"use client";

import { Suspense, useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface EnergyModelProps {
  isMobile: boolean;
}

export function EnergyModel({ isMobile }: EnergyModelProps) {
  const { scene, animations } = useGLTF("/3dmodels/Info.glb");
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const [mixer] = useState(() => new THREE.AnimationMixer(scene));
  const [scale, setScale] = useState(1.8);
  const [position, setPosition] = useState<[number, number, number]>([0, 0, 0]);

  // Handle GLTF animations
  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0], scene);
      action.play();
    }
    return () => {
      mixer.stopAllAction();
    };
  }, [animations, scene, mixer]);

  // Responsive scale and position
  useEffect(() => {
    if (isMobile) {
      setPosition([0, 3, 0]);
      setScale(1);
    } else {
      setPosition([0, 0, 0]);
      setScale(1.8);
    }
  }, [isMobile]);

  // Create particles for energy effect
  const particleCount = 500;
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  // Animate the model and particles
  useFrame((_, delta) => {
    mixer.update(delta);
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.1;
      particlesRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group>
      <ambientLight intensity={1.3} />
      <hemisphereLight intensity={1} color="white" />
      <pointLight position={[0, 10, 10]} intensity={1841} />
      <spotLight
        position={[0, 20, 20]}
        angle={0.3}
        penumbra={0.5}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />

      {/* Group containing GLTF model and energy effects */}
      <group ref={groupRef} position={position} scale={scale}>
        {/* GLTF Model */}
        <primitive object={scene} />

        {/* Particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={particlePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            color="#00FFCC"
            sizeAttenuation={true}
            transparent={true}
            opacity={0.8}
          />
        </points>

        {/* Energy rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.5, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#00FFCC"
            emissive="#00FFCC"
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.7}
          />
        </mesh>
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.7, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#00FFCC"
            emissive="#00FFCC"
            emissiveIntensity={0.5}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
      </group>
    </group>
  );
}

// Example Canvas setup (to be used in your page component)
export default function SendOrb() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => window.removeEventListener("resize", updateMobile);
  }, []);

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <Suspense fallback={null}>
        <EnergyModel isMobile={isMobile} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}