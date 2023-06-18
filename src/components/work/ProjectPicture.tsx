"use client";
import { Html, Plane, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Vector3 } from "three";

function ProjectPicture({
  numbers,
  key,
  position,
}: {
  numbers: number[];
  key: number;
  position: any;
}) {
  const planeRef = useRef<any>();
  const fontProps = {
    font: "/humane/Humane-Bold",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
    color: "white",
  };

  // Utilisez useFrame pour mettre à jour la direction de chaque plan à chaque rendu de frame
  useFrame(() => {
    planeRef.current.lookAt(0, 0, 0); // Pointe vers le centre du cercle (0, 0, 0)
  });

  return (
    <group>
      <Plane args={[8, 5, 50]} position={position} ref={planeRef}>
        <meshBasicMaterial color={"red"} />
      </Plane>
      <Html>
        <p className="font-Humane text-[20rem] uppercase">PROJECT</p>
      </Html>
    </group>
  );
}

export default ProjectPicture;
