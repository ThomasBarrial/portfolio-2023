"use client";
import React, { useRef } from "react";
import { Project } from "../../../utils/types/types";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Plane,
  useScroll,
  Scroll,
  shaderMaterial,
} from "@react-three/drei";
import { useControls } from "leva";

interface IProps {
  projects: Project[];
}

const WaveMaterial = shaderMaterial(
  {
    scrollY: 0,
  },
  /*glsl*/ `
  varying vec2 vUv;
  uniform float scrollY;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(-modelPosition.y * scrollY) * 0.1;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    vUv = uv;
  }`,
  /*glsl*/ `
  precision mediump float;
 

  void main()
  {
    gl_FragColor = vec4(0.5, 0.0, 1.0, 1.0);
  }`
);

extend({ WaveMaterial });

function Content({ projects }: IProps) {
  const ref = useRef<any>();
  const objectDistance = 3;

  const { position } = useControls({
    position: {
      value: -2,
      min: 0,
      max: 1,
      step: 0.001,
    },
  });

  console.log(position);

  useFrame(({ camera, size }) => {
    const scrollY = window.scrollY;
    camera.position.y = (-scrollY / size.height) * objectDistance;
    console.log(scrollY * 0.01);

    console.log(position);
    // ref.current.scrollY = position;
  });

  return (
    <group>
      {projects.map((project, index) => {
        return (
          <mesh key={project._id} position={[0, -objectDistance * index, 0]}>
            <Plane args={[1.5, 1, 50, 50]}>
              <meshBasicMaterial color={"red"} />
            </Plane>
          </mesh>
        );
      })}
    </group>
  );
}

export default Content;
