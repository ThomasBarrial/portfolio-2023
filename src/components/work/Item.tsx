"use client";
import { Image, useIntersect, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useInView } from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";

import * as THREE from "three";

const damp = THREE.MathUtils.damp;

interface IProps {
  index: number;
  position: any;
  scale: any;
  c?: any;
  clicked: number | null;
  setClicked: Dispatch<SetStateAction<number | null>>;
  url: string;
}

function Item({
  index,
  position,
  scale,
  c = new THREE.Color(),
  clicked,
  url,
  setClicked,
}: IProps) {
  const visible = useRef<any>(false);
  const ref = useIntersect<any>((isVisible) => (visible.current = isVisible));
  const scroll = useScroll();
  const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((u) => `/${u}.jpg`);
  const [hovered, hover] = useState(false);

  const click = () => {
    setClicked(index === clicked ? null : index);
  };
  const over = () => hover(true);
  const out = () => hover(false);
  useFrame((state, delta) => {
    const y = scroll.curve(
      index / urls.length - (1.5 / urls.length) * 1,
      3 / urls.length
    );
    ref.current.material.scale[1] = ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? 6 : 4.5 + y,
      20,
      delta
    );
    ref.current.material.scale[0] = ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? 9 : scale[0] + y,
      8,
      delta
    );
    ref.current.material.grayscale = damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta
    );
    ref.current.material.color.lerp(
      c.set(hovered || clicked === index ? "white" : "#aaa"),
      hovered ? 0.3 : 0.1
    );

    if (!visible.current && clicked === index) {
      setClicked(null);
    }
  });
  return (
    // eslint-disable-next-line jsx-a11y/alt-text

    <Image
      ref={ref}
      url={url}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
    />
  );
}
export default Item;
