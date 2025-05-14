import { useGLTF } from "@react-three/drei"

export const Station = () => {
  const station = useGLTF("/3dmodels/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={9.15} />
      <pointLight intensity={10} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive scale={0.8} position={[0, -3.25, 1.5]} object={station.scene} />
    </mesh>
  )
}
