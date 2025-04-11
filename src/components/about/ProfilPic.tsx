"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import {
  shaderMaterial,
  Plane,
  useTexture,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import thomasBarrial from "../../../public/image/thomasBarrial.webp";
import thomasBarrialDepthMap from "../../../public/image/thomasBarrialDepthMap.webp";

extend({
  Face3DMaterial: shaderMaterial(
    { uMouse: [0, 0], uImage: null, uDepthMap: null },
    ` 
        varying vec2 vUv;
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPosition = projectionMatrix * viewPosition;
          gl_Position = projectionPosition;
          vUv = uv;
        }`,
    `
        precision mediump float;
    
        uniform vec2 uMouse;
        uniform sampler2D uImage;
        uniform sampler2D uDepthMap;
    
        varying vec2 vUv;
      
        vec4 linearTosRGB( in vec4 value ) {
          return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
        }
        
        
        void main() {
           vec4 depthDistortion = texture2D(uDepthMap, vUv);
           float parallaxMult = depthDistortion.r;
    
           vec2 parallax = (uMouse) * parallaxMult * 0.8;
    
           vec4 original = texture2D(uImage, (vUv + parallax));
           gl_FragColor = linearTosRGB(original);
        }
        `
  ),
});

function ProfilPic({ ...props }) {
  const depthMaterial = useRef<any>(null);
  const cameraRef = useRef<any>();
  const planeRef = useRef<any>();
  const [fovY, setFovY] = useState(0);
  const texture = useTexture(thomasBarrial.src);
  const depthMap = useTexture(thomasBarrialDepthMap.src);
  const { viewport } = useThree();

  useEffect(() => {
    if (cameraRef.current)
      setFovY(
        (cameraRef.current.position.z * cameraRef.current.getFilmHeight()) /
          cameraRef.current.getFocalLength()
      );
  }, []);

  const aspectRatio = 1.2;

  useFrame((state) => {
    depthMaterial.current.uniforms.uMouse.value = [
      state.mouse.x * 0.01,
      state.mouse.y * 0.02,
    ];

    if (viewport.height / viewport.height < aspectRatio) {
      planeRef.current.scale.set(
        fovY * cameraRef.current.aspect,
        (viewport.width / viewport.height) * aspectRatio,
        1
      );
    } else {
      planeRef.current.scale.set(fovY / aspectRatio, fovY, 1);
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        fov={75}
        aspect={viewport.width / viewport.height}
        near={0.1}
        far={100}
        position={[0, 0, 1]}
      />

      <Plane
        ref={planeRef}
        args={[0.45, 0.66]}
        position={[viewport.width * 0.2, 0, 0]}
      >
        {React.createElement("face3DMaterial", {
          ref: depthMaterial,
          uImage: texture,
          uDepthMap: depthMap,
        })}
      </Plane>
    </>
  );
}

export default ProfilPic;
