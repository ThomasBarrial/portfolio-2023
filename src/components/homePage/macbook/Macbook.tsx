"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

function Macbook() {
  return (
    <div className="h-screen w-screen bg-background">
      <div style={{ width: "100%", height: "100%" }}>
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
    </div>
  );
}

export default Macbook;
