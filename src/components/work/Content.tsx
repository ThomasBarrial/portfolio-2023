"use client";
import React, { useRef } from "react";
import { Project } from "../../../utils/types/types";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { Plane, useScroll, Scroll, shaderMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { Vector3, PerspectiveCamera } from "three";
import ProjectPicture from "./ProjectPicture";

interface IProps {
  projects: Project[];
}

function Content({ projects }: IProps) {
  const numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3];
  const groupRef = useRef<any>();
  const planeRef = useRef();
  const { camera } = useThree();
  const data = useScroll();

  // Fonction pour positionner les plans en cercl

  // Utilisez useFrame pour animer le cercle en fonction du scroll
  useFrame((state) => {
    const scroll = window.scrollY; // Ou toute autre valeur de scroll que vous utilisez
    groupRef.current.rotation.z = -scroll * 0.00115; // Ajustez la vitesse de rotation selon vos besoins
  });

  // Positionne la caméra au centre du cercle face au premier plan
  useFrame(() => {
    console.log(numbers.length);
    const angle = numbers.length * 5;
    console.log(angle);
    const radius = 5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = 0;
    const position = new Vector3(x, y, z);

    camera.position.copy(position);
    camera.lookAt(new Vector3(0, 0, 0));

    const fov = 30; // Ajustez la valeur du FOV pour rapprocher ou éloigner la caméra
    // @ts-ignore
    camera.fov = fov;
    camera.updateProjectionMatrix();
  });

  return (
    <group ref={groupRef}>
      {numbers.map((number, index) => {
        const angle = (Math.PI * 2 * index) / numbers.length;
        const radius = 10;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const position = new Vector3(x, y, 0);

        return (
          <ProjectPicture numbers={numbers} key={index} position={position} />
        );
      })}
    </group>
  );
}

export default Content;
