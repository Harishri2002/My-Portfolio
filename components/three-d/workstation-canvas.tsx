"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { WorkstationModel } from "./workstation-model";
import { LoaderProgress } from "./loader-progress";

export function WorkstationCanvas() {
  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      frameloop="always" // Key fix - prevents frame rate throttling
      dpr={[1, 2]} // Device pixel ratio
      performance={{ min: 0.5 }} // Performance settings
      shadows
      camera={{ position: [55, 55, 55], fov: 15, near: 1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<LoaderProgress />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <WorkstationModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
