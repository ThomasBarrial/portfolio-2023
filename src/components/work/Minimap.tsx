"use client";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const damp = THREE.MathUtils.damp;
const material = new THREE.LineBasicMaterial({ color: "white" });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

function Minimap() {
  const ref = useRef<any>();
  const scroll = useScroll();
  const urls = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 5, 7, 8, 2, 4, 9, 6,
  ].map((u) => `/${u}.jpg`);
  const { height } = useThree((state) => state.viewport);

  useFrame((state, delta) => {
    ref.current.children.forEach((child: any, index: any) => {
      // Give me a value between 0 and 1
      //   starting at the position of my item
      //   ranging across 4 / total length
      //   make it a sine, so the value goes from 0 to 1 to 0.
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length
      );
      child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, 8, delta);
    });
  });
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  );
}

export default Minimap;
