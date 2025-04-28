"use client";
import React from "react";
import AnimUp from "../animated/AnimUp";
import { useInView } from "react-intersection-observer";
import TextTileComp from "./TextTileComp";

function ContentAbout() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

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
      stacks: ["ReactThreeFiber", "ThreeJS", "FramerMotion", "WebGL"],
    },
    {
      name: "CONTENT MANAGEMENT",
      stacks: ["Firebase", "Sanity"],
    },
    {
      name: "DESIGN & 3D",
      stacks: ["Figma", "Spline.io"],
    },
  ];
  return (
    <div
      ref={ref}
      className="flex w-full  max-w-[150rem]  flex-col  px-5 pb-20  pt-5 font-Antonio lg:px-10 lg:pt-10"
    >
      <div className="w-full pt-10 lg:w-2/4 lg:pt-0">
        <AnimUp inView={inView} duration={0.5}>
          {`I am an enthusiast of extreme sports and what I love about these
  sports is the creative aspect and the fact that each athlete has their
  own identity and style.`}
        </AnimUp>
        <AnimUp inView={inView} duration={1} className="mt-5">
          {`My passion for technology 
  caught up with me. Since then, I have been training in web
  development, and my current goal is to create websites that reflect
  the values of the sports i pratice: creativity, originality, and
  technical skill.`}
        </AnimUp>
        <AnimUp inView={inView} duration={1.5} className="mt-10 flex space-x-2">
          <p className="opacity-50">{`LET'S WORK`}</p>
          <a href="">thomas@barrial.fr</a>
        </AnimUp>
      </div>
      <div className=" mt-20 flex w-full flex-col lg:flex-row lg:items-end lg:justify-end">
        <div className="w-full  lg:w-3/4">
          <AnimUp inView={inView} duration={2}>
            <h2 className="text-base uppercase">technologies</h2>
          </AnimUp>
          <div className="grid grid-cols-2 gap-5 pt-5 lg:grid-cols-4">
            {stack.map((item) => (
              <div key={item.name}>
                <AnimUp
                  inView={inView}
                  duration={2}
                  className="text-lg uppercase opacity-50"
                >
                  <p>{item.name}</p>
                </AnimUp>
                {item.stacks.map((stack, id) => (
                  <div key={id} className="">
                    <AnimUp inView={inView} duration={2}>
                      <p className="uppercase">{stack}</p>
                    </AnimUp>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimUp inView={inView} duration={2} className="w-full pt-32 lg:w-6/12">
        {`My passion for technology 
  caught up with me. Since then, I have been training in web
  development, and my current goal is to create websites that reflect
  the values of the sports i pratice: creativity, originality, and
  technical skill.`}
      </AnimUp>
    </div>
  );
}

export default ContentAbout;
