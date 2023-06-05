"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import { Perf } from "r3f-perf";

function Macbook() {
  return (
    <div className=" h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 23], fov: 15 }}>
        <color attach="background" args={["#050505"]} />
        <Scene />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}

export default Macbook;
