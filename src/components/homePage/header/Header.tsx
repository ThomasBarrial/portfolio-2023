"use client";
import { Canvas } from "@react-three/fiber";
import HeaderBackground from "./HeaderBackground";
import WordAnim from "@/components/animated/WordAnim";
import AnimUp from "@/components/animated/AnimUp";
import { useInView } from "react-intersection-observer";

function Header() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="top-0 flex h-screen w-full flex-col lg:sticky">
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas performance={{ min: 0.1 }} gl={{ antialias: false }}>
          <HeaderBackground />
        </Canvas>
      </div>

      <div
        ref={ref}
        className="pointer-events-none absolute left-1/2 z-10 flex h-screen w-full max-w-[150rem] -translate-x-1/2 flex-col items-center justify-end px-5 font-Humane mix-blend-difference lg:px-20"
      >
        <div className="mb-32 w-full md:mb-10">
          <AnimUp inView={inView} duration={2.5}>
            <h2 className="mb-2 font-Antonio  text-lg md:text-xl lg:text-2xl">
              WELCOME ON MY 2024 PORTFOLIO
            </h2>
          </AnimUp>

          <h1>
            <WordAnim word="DESIGNER" isAnim={inView} />
          </h1>

          <h1 className="flex flex-col md:flex-row">
            <div className="mr-0 md:mr-5">
              <WordAnim word="CREATIVE" isAnim={inView} />
            </div>

            <WordAnim word="DEVELOPER" isAnim={inView} />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
