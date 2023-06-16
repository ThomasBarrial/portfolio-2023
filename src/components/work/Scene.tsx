"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Content from "./Content";
import { Project } from "../../../utils/types/types";

interface IProps {
  projects: Project[];
}

function Scene({ projects }: IProps) {
  return (
    <div className="fixed top-0 h-screen w-screen">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <OrbitControls />
        <Content projects={projects} />
      </Canvas>
    </div>
  );
}

export default Scene;
