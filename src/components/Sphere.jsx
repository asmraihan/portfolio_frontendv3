import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
// import { TextureLoader } from "three";

function Box(props) {
  // const texture = useLoader(TextureLoader, ('/textures/NormalMap.png'))
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.z += delta / 3) + (ref.current.rotation.x += delta / 3))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[2, 20, 10]} />
      <meshStandardMaterial
        wireframe
        // roughness={0.2}
        metalness={0.7}
      // roughnessMap={texture}
      // normalMap={texture}
      // color={"#292929"}
      // attach={"material"}
      // distort={0.5}
      // speed={1}
      />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas className="w-full h-full absolute -top-10 left-10">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight color="#39b5fb" position={[1.1, 1, -0.31]} intensity={6.8} />
      <pointLight color="#ae2aff" position={[-1.02, -1.3, -1.1]} intensity={10} />
      <Box />
      <OrbitControls />
    </Canvas>
  )
}
