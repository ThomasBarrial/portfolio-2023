"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ProfilPic from "./ProfilPic";

function Section2() {
  return (
    <div className="h-screen w-screen">
      <div className="z-10" style={{ width: "100%", height: "100%" }}>
        <Canvas>
          <ProfilPic />
        </Canvas>
      </div>
    </div>
  );
}

export default Section2;
