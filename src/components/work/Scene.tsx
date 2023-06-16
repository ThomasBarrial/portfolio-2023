"use client";
import {
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
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
      <Canvas dpr={[1, 1.5]}>
        {/* <OrbitControls /> */}

        <Content projects={projects} />
      </Canvas>
    </div>
  );
}

export default Scene;
