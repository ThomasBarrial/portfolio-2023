"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import Scene from "./Scene";

function Macbook() {
  return (
    <div className=" relative h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 23], fov: 15 }}>
        <color attach="background" args={["#050505"]} />
        <Scene />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}

export default Macbook;
