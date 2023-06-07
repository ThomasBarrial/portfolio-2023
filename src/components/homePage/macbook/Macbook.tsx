"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function Macbook() {
  return (
    <div className=" relative h-screen w-screen">
      <Canvas
        performance={{ min: 0.1 }}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 23], fov: 15 }}
      >
        <color attach="background" args={["#080808"]} />
        <Scene />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}

export default Macbook;
