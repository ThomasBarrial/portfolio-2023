"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import Scene from "./Scene";
import { Perf } from "r3f-perf";
import { MouseEventHandler, useRef, useState } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

function Macbook() {
  const handelMouseEnter = (event: any) => {
    // console.log(event);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    const element = document.querySelector<HTMLElement>(
      ".element-mouse-follow"
    ) as HTMLElement;
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    const x = (clientX / innerWidth) * 100;
    const y = (clientY / innerHeight) * 100;

    console.log(x);

    console.log(element);
  };

  return (
    <div className=" relative h-screen w-screen">
      <Canvas
        camera={{ position: [0, 0, 23], fov: 15 }}
        onMouseEnter={handelMouseEnter}
        onMouseMove={handleMouseMove}
      >
        <color attach="background" args={["#050505"]} />
        <Scene />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}

export default Macbook;
