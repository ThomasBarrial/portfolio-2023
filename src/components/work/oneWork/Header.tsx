"use client";
import React from "react";
import { Project } from "../../../../utils/types/types";
import { useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimUp from "@/components/animated/AnimUp";
import ProjectImage from "./ProjectImage";

function Header({ project }: { project: Project }) {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  // const y = useParallax(scrollYProgress, 0, 100);
  // const scale = useParallax(scrollYProgress, 1, 0.9);
  // const opacity = useParallax(scrollYProgress, 1, 0);

  const displayIndex = (index: number) => {
    if (index + 1 >= 0 && index + 1 <= 9) {
      return `#0${index + 1}`;
    }
    return `#${index}`;
  };

  const splitedName = project.name.split("");
  console.log(splitedName);
  const imagesArray = [1, 2, 3, 4, 5];

  return (
    <div
      className={`flex w-screen justify-center `}
      style={{
        backgroundColor: project.primaryColor,
      }}
    >
      <div className="justify-centers relative flex w-full max-w-[150rem] flex-col items-start  px-0 pb-10 pt-20 font-Antonio lg:flex-row lg:px-10">
        <div
          ref={ref}
          className=" flex w-full flex-col justify-between px-5 lg:sticky   lg:top-[55%] lg:min-h-[80vh] lg:w-[22%] lg:-translate-y-1/2 lg:px-0 lg:pr-10"
          style={{
            color: project.secondaryColor,
          }}
        >
          <div className="flex  flex-col justify-between ">
            <div className="flex flex-wrap ">
              {splitedName.map((word, index) => {
                return (
                  <p
                    key={index}
                    className="font-Humane text-[10rem] leading-[8rem]"
                  >
                    {word.toUpperCase()}
                  </p>
                );
              })}
            </div>
            <AnimUp
              duration={1.2}
              delay={1.2}
              inView={inView}
              className="font-Humane text-9xl"
            >
              <p>{displayIndex(1)}</p>
            </AnimUp>
          </div>
          <div className="flex-flex-col h-full items-center justify-center space-y-3 pt-5  font-Antonio  text-sm">
            <AnimUp inView={inView} duration={1} delay={1.2}>
              <p className="mr-2 hidden text-gray-400 md:flex">Completed</p>
              <p className="text-base">
                {new Date(project.date).toLocaleDateString("en-En", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </AnimUp>
            <AnimUp inView={inView} duration={1.2} delay={1.2}>
              <p className="hidden items-center text-gray-400 md:flex">Role</p>
              <div className="flex w-full flex-wrap text-sm">
                {project.categories.map((c, index) => {
                  return (
                    <p className="flex text-base" key={c._id}>
                      {c.title}
                      {index + 1 < project.categories.length && "/"}
                      &nbsp;{" "}
                    </p>
                  );
                })}
              </div>
            </AnimUp>
            <AnimUp inView={inView} duration={1.5} delay={1.2}>
              <p className="mr-2 hidden text-gray-400 md:flex">Technologies</p>
              <div className="flex flex-wrap text-sm">
                {project.techno.map((t, index) => {
                  return (
                    <p key={t._id}>
                      {" "}
                      <span>&nbsp;</span>
                      {t.title}&nbsp; {index + 1 < project.techno.length && "/"}
                    </p>
                  );
                })}
              </div>
            </AnimUp>
            {/* INDEX 2 */}

            {project.link && project.link !== "" && (
              <AnimUp
                inView={inView}
                duration={1.5}
                delay={1.2}
                className="pt-5 text-base"
              >
                <a href={project.link} target="_blank" className="underline">
                  VISITE PROJECT
                </a>
              </AnimUp>
            )}
          </div>
        </div>

        <div className="fixed -bottom-10 left-0 z-0 flex w-full max-w-[150rem] flex-col px-4 font-Humane text-[28rem] opacity-5  md:flex-row md:px-20">
          <div className="flex">
            <h2 className="uppercase leading-[0.8]">W</h2>
            <h2 className="uppercase leading-[0.8]">0</h2>
          </div>
          <div className="flex">
            <h2 className="uppercase leading-[0.8]">R</h2>
            <h2 className="uppercase leading-[0.8]">K</h2>
          </div>
        </div>

        <div className="mt-5 flex w-full flex-col justify-between px-5 lg:sticky  lg:top-[55%] lg:mt-0 lg:hidden lg:min-h-[80vh] lg:w-[22%] lg:-translate-y-1/2 lg:pl-10">
          <AnimUp
            inView={inView}
            duration={1.5}
            delay={1.2}
            className=" text-base"
          >
            <p>{project.title}</p>
          </AnimUp>
          <AnimUp
            inView={inView}
            duration={1.5}
            delay={1.2}
            className="pt-5 font-Antonio text-sm"
          >
            <p>{project.description}</p>
          </AnimUp>
        </div>
        <div className="w-full lg:w-[70%]">
          {project.gallery && (
            <AnimUp
              inView={inView}
              duration={1.5}
              delay={1.2}
              className="flex w-full flex-col items-center justify-center space-y-5 pt-10 lg:space-y-10 lg:pb-80 lg:pt-0"
            >
              {project.gallery.map((image, index) => (
                <div key={index}>
                  <ProjectImage image={image} />
                </div>
              ))}
            </AnimUp>
          )}
        </div>
        <div className="hidden w-full flex-col justify-between lg:sticky  lg:top-1/2 lg:flex lg:min-h-[80vh] lg:w-[25%] lg:-translate-y-1/2 lg:pl-10">
          <AnimUp
            inView={inView}
            duration={1.5}
            delay={1.2}
            className=" text-base"
          >
            <p>{project.title}</p>
          </AnimUp>
          <AnimUp
            inView={inView}
            duration={1.5}
            delay={1.2}
            className="pt-5 font-Antonio text-sm"
          >
            <p>{project.description}</p>
          </AnimUp>
        </div>
      </div>
    </div>
  );
}

export default Header;
