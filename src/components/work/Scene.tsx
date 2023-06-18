"use client";
import {
  OrbitControls,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Content from "./Content";
import { Project } from "../../../utils/types/types";
import Items from "./Items";

interface IProps {
  projects: Project[];
}

function Scene() {
  return (
    <div className="fixed top-0 h-screen w-screen">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Items />
      </Canvas>
    </div>
  );
}

export default Scene;
