"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import * as THREE from "three";

function Macbook() {
  return (
    <LayoutSection className="hidden lg:flex">
      <Canvas
        performance={{ min: 0.1 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={{ position: [0, 0, 23], fov: 15 }}
      >
        <color attach="background" args={["#080808"]} />
        <Scene />
        <ambientLight intensity={1} />
      </Canvas>
    </LayoutSection>
  );
}

export default Macbook;
