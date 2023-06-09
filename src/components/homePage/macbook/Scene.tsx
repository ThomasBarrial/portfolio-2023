"use client";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import MacbookPro from "@/components/models/MacbookPro";
import Ground from "./Ground";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

function Scene() {
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  const [delta, setDelta] = useState(1.4);
  const { scrollY } = useScroll();
  const [scale, setScale] = useState(12);
  const [groundLightWidth, setGroundlightWidth] = useState(3);

  useFrame((size, event) => {
    // if (size.viewport.width < 5 && size.viewport.width > 3) {
    //   setScale(10);
    //   setGroundlightWidth(2.8);
    // } else if (size.viewport.width < 3) {
    //   setScale(9);
    // } else {
    //   setScale(12);
    //   setGroundlightWidth(3);
    // }
    camera.position.lerp(vec.set(mouse.x * 1, 1 + mouse.y * 0.5, 21), 0.05);
    camera.lookAt(0, 0, 0);
  });

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const minScroll = 500;
  //   const maxScroll =
  //     document.documentElement.scrollHeight - window.innerHeight;

  //   const minValue = 1.8;
  //   const maxValue = 1.2;
  //   const scrollRange = maxScroll - minScroll;
  //   const valueRange = maxValue - minValue;

  //   const scrollValue =
  //     ((latest - minScroll) * valueRange) / scrollRange + minValue;
  //   setDelta(scrollValue);
  // });

  return (
    <>
      <rectAreaLight
        width={groundLightWidth}
        height={3}
        intensity={3}
        color={"#ffffff"}
        rotation={[0, Math.PI, 0]}
        position={[0, -0.2, 7.4]}
      />
      <rectAreaLight
        width={2.8}
        height={2}
        intensity={25}
        color={"#939393"}
        rotation={[0, Math.PI, 0]}
        position={[0, -0.2, 5]}
      />
      <MacbookPro scale={scale} position={[0, -0.5, 5.5]} delta={delta} />
      <Ground />
    </>
  );
}

export default Scene;
