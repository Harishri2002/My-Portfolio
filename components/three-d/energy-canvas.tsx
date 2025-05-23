"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { EnergyModel } from "./energy-model";
import { LoaderProgress } from "./loader-progress";

export function EnergyCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [fov, setFov] = useState(10);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
        setFov(window.innerWidth <= 768 ? 15 : 10);
      };

      // Initial check
      checkMobile();

      // Add event listener
      window.addEventListener("resize", checkMobile);

      // Cleanup
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <Canvas
      frameloop="always" // Key fix - prevents frame rate throttling
      dpr={[1, 2]} // Device pixel ratio
      performance={{ min: 0.5 }} // Performance settings
      shadows
      camera={{
        position: [25, 25, 25],
        fov: fov,
        near: 15,
        far: 1000,
      }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
    >
      <Suspense fallback={<LoaderProgress />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <EnergyModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
