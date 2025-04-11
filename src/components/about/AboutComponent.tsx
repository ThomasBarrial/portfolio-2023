"use client";
import { useInView } from "react-intersection-observer";
import ProfilPic from "./ProfilPic";
import { Canvas } from "@react-three/fiber";
import LayoutSection from "../layout/navbar/utils/LayoutSection";
import WordAnim from "../animated/WordAnim";
import AnimUp from "../animated/AnimUp";
import TextTileComp from "./TextTileComp";

function AboutComponent() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const stack = [
    {
      name: "Developpement",
      stacks: [
        "React",
        "NextJS",
        "TypeScript",
        "Tailwind",
        "ReactNative",
        "Vercel",
      ],
    },
    {
      name: "CREATIVE DEV",
      stacks: ["ReactThreeFiber", "ThreeJS", "FramerMotion"],
    },
    {
      name: "CONTENT MANAGEMENT",
      stacks: ["Firebase", "Sanity"],
    },
    {
      name: "CONTENT MANAGEMENT",
      stacks: ["Figma", "Spline.io"],
    },
  ];

  return (
    <div className="h-screen overflow-hidden">
      {inView && (
        <div className="h-screen">
          <Canvas
            className="absolute z-0 hidden animate-fadeIn lg:flex"
            performance={{ min: 0.1 }}
          >
            <ProfilPic />
          </Canvas>
        </div>
      )}
      <div
        ref={ref}
        className="pointer-events-none absolute left-0 top-0 z-20 flex h-screen w-full flex-col  items-center justify-center  font-Antonio"
      >
        <div className="flex h-full w-full max-w-[150rem] flex-col  justify-between px-5 pt-20 lg:flex-row lg:px-10">
          {/* <h2 className="absolute left-1/2 top-1/2 hidden -translate-y-[80%] text-center  font-Humane text-[10rem] leading-[0.8] opacity-[2%] md:text-[25rem] lg:flex lg:translate-x-[22%]">{`THOMAS`}</h2>
          <h2 className="absolute left-1/2 top-1/2 hidden translate-y-[10%] text-center font-Humane  text-[10rem] leading-[0.8] opacity-[2%] md:text-[25rem] lg:flex lg:translate-x-1/4">{`BARRIAL`}</h2> */}
          <div className="flex w-full flex-col justify-between pb-10 pr-20 lg:w-1/2">
            <div className="max-w-[38rem] -translate-x-5 scale-95">
              <WordAnim word="THOMAS" isAnim={inView} />
              <WordAnim word="BARRIAL" isAnim={inView} />
            </div>
            <div className="w-10/12">
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
          <div className="flex w-full flex-col items-end justify-between pb-14  lg:w-1/2">
            <div className="w-full pt-10 lg:w-3/4 lg:pt-0">
              <AnimUp inView={inView} duration={2.5}>
                {`I am an enthusiast of extreme sports and what I love about these
          sports is the creative aspect and the fact that each athlete has their
          own identity and style.`}
              </AnimUp>
              <AnimUp inView={inView} duration={2.5} className="mt-5">
                {`My passion for technology 
          caught up with me. Since then, I have been training in web
          development, and my current goal is to create websites that reflect
          the values of the sports i pratice: creativity, originality, and
          technical skill.`}
              </AnimUp>
              <div className="mt-10 flex space-x-2">
                <p className="opacity-50">{`LET'S WORK`}</p>
                <a href="">thomas@barrial.fr</a>
              </div>
            </div>
            <div className="w-full lg:w-3/4">
              <AnimUp inView={inView} duration={2.5}>
                <h2 className="text-sm uppercase">technologies</h2>
              </AnimUp>
              <div className="mt-5 grid w-full grid-cols-2 gap-5">
                {stack.map((item) => (
                  <div key={item.name}>
                    <AnimUp
                      inView={inView}
                      duration={2}
                      className="text-xs uppercase opacity-50"
                    >
                      <p>{item.name}</p>
                    </AnimUp>
                    {item.stacks.map((stack, id) => (
                      <div key={id} className="">
                        <AnimUp inView={inView} duration={2.5}>
                          <p className="uppercase">{stack}</p>
                        </AnimUp>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
