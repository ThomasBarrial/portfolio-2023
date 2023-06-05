import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import React from "react";

function Ground() {
  const [floor] = useTexture(["/image/texture1.jpg"]);
  return (
    <mesh position={[0, -0.5, 5]} rotation={[-Math.PI / 2.1, 0, 0]}>
      <planeGeometry args={[40, 40]} />
      <MeshReflectorMaterial
        blur={[300, 300]}
        resolution={1048}
        mirror={0.9}
        mixBlur={7}
        mixStrength={1}
        depthScale={10}
        minDepthThreshold={1}
        color="#818181"
        metalness={0.6}
        roughness={10}
        distortion={20}
        distortionMap={floor}
      />
    </mesh>
  );
}

export default Ground;
