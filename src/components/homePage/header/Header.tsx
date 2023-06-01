"use client";
import { Canvas } from "@react-three/fiber";
import HeaderBackground from "./HeaderBackground";
import { useEffect, useState } from "react";
import WordAnim from "@/components/animated/WordAnim";
import AnimUp from "@/components/animated/AnimUp";

function Header() {
  const [isMounted, setIsMounted] = useState(false);

  const designer = [
    { value: "D", id: 1 },
    { value: "E", id: 2 },
    { value: "S", id: 3 },
    { value: "I", id: 4 },
    { value: "G", id: 5 },
    { value: "N", id: 6 },
    { value: "E", id: 7 },
    { value: "R", id: 9 },
    { value: "&", id: 10 },
  ];
  const creative = [
    { value: "C", id: 1 },
    { value: "R", id: 2 },
    { value: "E", id: 3 },
    { value: "A", id: 4 },
    { value: "T", id: 5 },
    { value: "I", id: 6 },
    { value: "V", id: 7 },
    { value: "E", id: 9 },
  ];

  const developer = [
    { value: "D", id: 1 },
    { value: "E", id: 2 },
    { value: "V", id: 3 },
    { value: "E", id: 4 },
    { value: "L", id: 5 },
    { value: "O", id: 6 },
    { value: "P", id: 7 },
    { value: "E", id: 8 },
    { value: "R", id: 9 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div className="flex flex-col sticky top-0  h-screen w-screen">
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas>
          <HeaderBackground />
        </Canvas>
      </div>

      <div className="absolute  left-1/2 -translate-x-1/2 font-Humane z-10 w-screen h-screen px-5 lg:px-20 mix-blend-difference flex flex-col items-center justify-end">
        <div className="w-full mb-10">
          {isMounted && (
            <AnimUp duration={1.5}>
              <h2 className="font-Antonio text-lg  md:text-xl lg:text-2xl mb-2">
                WELCOME ON MY 2023 PORTFOLIO
              </h2>
            </AnimUp>
          )}

          <h1>
            <WordAnim word={designer} isAnim={isMounted} />
          </h1>

          <h1 className="flex flex-col md:flex-row">
            <div className="mr-0 md:mr-5">
              <WordAnim word={creative} isAnim={isMounted} />
            </div>
            <WordAnim word={developer} isAnim={isMounted} />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
