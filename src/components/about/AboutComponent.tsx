"use client";
import { useInView } from "react-intersection-observer";
import ProfilPic from "./ProfilPic";
import { Canvas } from "@react-three/fiber";
import LayoutSection from "../layout/navbar/utils/LayoutSection";
import WordAnim from "../animated/WordAnim";
import AnimUp from "../animated/AnimUp";
import TextTileComp from "./TextTileComp";
import Cursor from "../Cursor";

function AboutComponent() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <LayoutSection>
      {inView && (
        <div className="h-full">
          <Canvas
            className="absolute z-30 hidden animate-fadeIn lg:flex"
            performance={{ min: 0.1 }}
          >
            <ProfilPic />
          </Canvas>
        </div>
      )}
      <div
        ref={ref}
        className="absolute top-0 flex h-screen  flex-col justify-between pb-5 pr-4 pt-20 font-Antonio lg:w-[40%] lg:pr-4"
      >
        <div>
          <WordAnim word="ABOUT" isAnim={inView} />

          <AnimUp inView={inView} duration={2.5}>
            {`  I am an enthusiast of extreme sports and what I love about these
          sports is the creative aspect and the fact that each athlete has their
          own identity and style. Over two years ago, my passion for technology
          caught up with me. Since then, I have been training in web
          development, and my current goal is to create websites that reflect
          the values of the sports i pratice: creativity, originality, and
          technical skill.`}
          </AnimUp>
        </div>
        <div>
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
              text="Montréal Canada"
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
