"use client";
import { useInView } from "react-intersection-observer";
import ProfilPic from "../homePage/ProfilPic";
import { Canvas } from "@react-three/fiber";
import LayoutSection from "../layout/navbar/utils/LayoutSection";
import WordAnim from "../animated/WordAnim";
import AnimUp from "../animated/AnimUp";
import TextTileComp from "./TextTileComp";

function AboutComponent() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <LayoutSection>
      {inView && (
        <Canvas
          className="absolute z-30 hidden animate-fadeIn lg:flex"
          performance={{ min: 0.1 }}
        >
          <ProfilPic />
        </Canvas>
      )}
      <div
        ref={ref}
        className="absolute top-0 flex h-screen  flex-col justify-between pb-5 pr-4 pt-20 font-Antonio lg:w-[40%] lg:pr-4"
      >
        <div>
          <WordAnim word="ABOUT" isAnim={inView} />

          <AnimUp inView={inView} duration={2.5}>
            {`I'm a creative front-end developer and web designer. My goal is to
            showcase products, brands, and projects online through innovative,
            unique, original, and aesthetic user experiences.`}
          </AnimUp>
        </div>
        <div>
          <TextTileComp inView={inView} title="Experience" text="2 years" />
          <div className="mt-5">
            <TextTileComp
              inView={inView}
              title="Training School"
              text="2@wildCodeSchool"
            />
          </div>
          <div className="flex w-full flex-col justify-between space-y-3 py-5 lg:flex-row lg:space-y-0">
            <TextTileComp
              inView={inView}
              title="Location"
              text="South West France"
            />
            <TextTileComp
              inView={inView}
              title="Born"
              text="February, 22, 1995"
            />
            <TextTileComp
              inView={inView}
              title="Focus"
              text="Digital, Developpment, Design, Motion"
            />
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}

export default AboutComponent;
