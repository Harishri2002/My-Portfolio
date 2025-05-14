import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Station } from "./Station"
import { LoaderProg } from "./LoaderProg"

export const Canvass = () => {
  const station = useGLTF("/3dmodels/scene.gltf")
  return (
    <Canvas
      style={{ width: "48vw", height: "50vh" }}
      frameLoop="demand"
      shadows
      camera={{ position: [55, 55, 55], fov: 15, near: 1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<LoaderProg />}>
        <OrbitControls
          // autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Station />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
