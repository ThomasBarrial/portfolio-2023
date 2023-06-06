import React, { useState } from "react";
import { Plane, useGLTF, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import { Vector3, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface IProps {
  scale: number;
  position: Vector3;
  delta: number;
}

export default function Model({ scale, position, delta }: IProps) {
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/models/macbook_pro_13_inch_2020.glb"
  ) as any;

  const texture = useVideoTexture("/videoFolio.mp4");

  return (
    <group scale={scale} position={position} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2.3, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Bevels_2"
                position={[0, 0.01, -0.1]}
                scale={0.27}
                rotation={[Math.PI * delta, 0, 0]}
              >
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials["Space_Grey.001"]}
                />
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  position={[0, -0.01, 0]}
                >
                  <meshBasicMaterial map={texture} toneMapped={false} />
                </mesh>
              </group>
              <group
                name="Circle001_12"
                position={[0.2, 0.01, -0.1]}
                rotation={[0.01, -0.75, 1.27]}
              />
              <group
                name="Caps_Lock_Light_3"
                position={[0, -0.01, 0]}
                scale={0.27}
              >
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Caps_Lock_Light}
                />
              </group>
              <group
                name="Macbook_Pro_4"
                position={[0, 0.01, -0.1]}
                rotation={[1.95, 0, 0]}
                scale={0.27}
              >
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Main_Body_5" position={[0, -0.01, 0]} scale={0.27}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials["Keys.001"]}
                />
              </group>
              <group name="Touch_Bar_6" position={[0, -0.01, 0]} scale={0.27}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Keys}
                />
              </group>
              <group
                name="Touch_Bar_Shot_7"
                position={[0, -0.01, 0]}
                scale={0.27}
              >
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials["Touch_Bar_Shot_2021-04-02_at_18.13.28"]}
                />
              </group>
              <group name="Keyboard_8" position={[0, -0.01, 0]} scale={0.27}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Keys}
                />
              </group>
              <group name="Cube_9" position={[0, -0.01, 0]}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/macbook_pro_13_inch_2020.glb");

// Model Information:
// * title:	Macbook Pro 13 inch 2020
// * source:	https://sketchfab.com/3d-models/macbook-pro-13-inch-2020-efab224280fd4c3993c808107f7c0b38
// * author:	timblewee (https://sketchfab.com/timblewee)
