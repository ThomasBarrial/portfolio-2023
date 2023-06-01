"use client";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import ProfilPic from "./ProfilPic";

function Section2() {
  const [isOk, setIsOk] = useState(false);
  return (
    <div className="h-screen w-screen z-20 flex bg-background flex-col items-center justify-center">
      {/* <div className="z-10" style={{ width: "100%", height: "100%" }}>
        <Canvas>
          <ProfilPic />
        </Canvas>
      </div> */}
      <button onClick={() => setIsOk((prev) => !prev)}>CLICK</button>
      <div className="flex">
        <div className={` bg-red-200 overflow-hidden  h-64 leading-[0.9]`}>
          <p
            className={`text-[20rem] font-Humane transiton transform duration-700  ${
              isOk ? "rotationInitial" : "rotation"
            } `}
          >
            T
          </p>
        </div>
        <div className={` bg-red-200 overflow-hidden  h-64 leading-[0.9]`}>
          <p
            className={`text-[20rem] font-Humane transiton transform duration-700  ${
              isOk ? "rotationInitial" : "rotation"
            } `}
          >
            H
          </p>
        </div>
        <div className={` bg-red-200 overflow-hidden  h-64 leading-[0.9]`}>
          <p
            className={`text-[20rem] font-Humane transiton transform duration-700  ${
              isOk ? "rotationInitial" : "rotation"
            } `}
          >
            O
          </p>
        </div>
        <div className={` bg-red-200 overflow-hidden  h-64 leading-[0.9]`}>
          <p
            className={`text-[20rem] font-Humane transiton transform duration-700  ${
              isOk ? "rotationInitial" : "rotation"
            } `}
          >
            M
          </p>
        </div>
        <div className={` bg-red-200 overflow-hidden  h-64 leading-[0.9]`}>
          <p
            className={`text-[20rem] font-Humane transiton transform duration-700  ${
              isOk ? "rotationInitial" : "rotation"
            } `}
          >
            A
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
