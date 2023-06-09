"use client";
import { Canvas } from "@react-three/fiber";
import HeaderBackground from "./HeaderBackground";
import WordAnim from "@/components/animated/WordAnim";
import AnimUp from "@/components/animated/AnimUp";
import { useIsLoaderFromStore } from "@/store/isLoader.slice";

function Header() {
  const { isLoader } = useIsLoaderFromStore();

  return (
    <div className="flex flex-col lg:sticky lg:top-0 h-screen w-screen">
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas performance={{ min: 0.1 }} gl={{ antialias: false }}>
          <HeaderBackground />
        </Canvas>
      </div>

      <div className="absolute  left-1/2 -translate-x-1/2 font-Humane z-10 w-screen pointer-events-none h-screen px-5 lg:px-20 mix-blend-difference flex flex-col items-center justify-end">
        <div className="w-full mb-32 md:mb-10">
          {!isLoader.active && (
            <AnimUp duration={1.5}>
              <h2 className="font-Antonio text-lg  md:text-xl lg:text-2xl mb-2">
                WELCOME ON MY 2023 PORTFOLIO
              </h2>
            </AnimUp>
          )}

          <h1>
            <WordAnim word="DESIGNER" isAnim={isLoader.active} />
          </h1>

          <h1 className="flex flex-col md:flex-row">
            <div className="mr-0 md:mr-5">
              <WordAnim word="CREATIVE" isAnim={isLoader.active} />
            </div>

            <WordAnim word="DEVELOPER" isAnim={isLoader.active} />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
