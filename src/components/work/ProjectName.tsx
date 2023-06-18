import { Html, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

interface IProps {
  index: number;
  name: string;
  yH: number;
  clicked: number | null;
}

const damp = THREE.MathUtils.damp;

function ProjectName({ index, name, yH, clicked }: IProps) {
  const fontProps = {
    font: "/fonts/humane/Humane-Bold.woff",
    fontSize: 3,

    lineHeight: 1,
    "material-toneMapped": false,
    color: "white",
  };

  const ref = useRef<any>();

  useFrame((state, delta) => {
    ref.current.position.x = damp(
      ref.current.position.x,
      clicked === index ? -4 : -3,
      10,
      delta
    );

    ref.current.scale.x = damp(
      ref.current.scale.x,
      clicked === index ? 0.8 : 1,
      10,
      delta
    );

    ref.current.scale.y = damp(
      ref.current.scale.y,
      clicked === index ? 0.8 : 1,
      10,
      delta
    );

    ref.current.position.y = damp(
      ref.current.position.y,
      clicked === index ? -index * yH + 1.2 : -index * yH,
      10,
      delta
    );
  });
  return (
    <Text ref={ref} position={[-3, -index * yH, 0]} {...fontProps} key={index}>
      {name.toUpperCase()}
    </Text>
  );
}

export default ProjectName;
