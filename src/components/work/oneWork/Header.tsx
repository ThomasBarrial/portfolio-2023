"use client";
import React from "react";
import { Project } from "../../../../utils/types/types";
import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import { useScroll, motion } from "framer-motion";
import useParallax from "../../../../utils/useParallax";
import WordAnim from "@/components/animated/WordAnim";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";
import HoverProjectDetails from "@/components/homePage/selectedWork/HoverProjectDetails";
import AnimUp from "@/components/animated/AnimUp";
import ProjectImage from "./ProjectImage";
import Link from "next/link";

function Header({ project }: { project: Project }) {
  const { scrollYProgress } = useScroll();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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

  console.log(project.gallery);

  const imagesArray = [1, 2, 3, 4, 5];
  return (
    <div className="flex w-screen justify-center">
      <div className="justify-centers relative flex w-full max-w-[150rem] flex-col items-start px-5 pt-20  font-Antonio lg:flex-row lg:px-20">
        <div
          ref={ref}
          className=" w-full  lg:sticky lg:top-1/2 lg:w-[35%] lg:-translate-y-1/2 lg:pr-20 "
        >
          <AnimUp
            duration={1.2}
            delay={1.2}
            inView={inView}
            className="font-Humane text-[10rem] leading-[8rem]"
          >
            <p>{project.name.toUpperCase()}</p>
          </AnimUp>
          <AnimUp
            duration={1.2}
            delay={1.2}
            inView={inView}
            className="font-Humane text-9xl"
          >
            <p>{displayIndex(1)}</p>
          </AnimUp>
          <div className="flex-flex-col h-full items-center justify-center space-y-1 pt-5  font-Antonio  text-sm">
            <AnimUp
              inView={inView}
              duration={1}
              delay={1.2}
              className="flex items-center lg:mr-5"
            >
              <p className="mr-2 hidden text-gray-300 md:flex">Completed</p>
              <p className="text-base">
                {new Date(project.date).toLocaleDateString("en-En", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </AnimUp>
            <AnimUp
              inView={inView}
              duration={1.2}
              delay={1.2}
              className="flex items-center lg:mr-5"
            >
              <p className="mr-2 hidden items-center text-gray-300 md:flex">
                Role
              </p>
              {project.categories.map((c) => {
                return (
                  <p className="flex text-base" key={c._id}>
                    <span className="flex">&nbsp;</span>
                    {c.title}&nbsp;/
                  </p>
                );
              })}
            </AnimUp>
            <AnimUp
              inView={inView}
              duration={1.5}
              delay={1.2}
              className="flex items-center lg:mr-5"
            >
              <p className="mr-2 hidden text-gray-300 md:flex">Technologies</p>
              <div className="flex flex-wrap text-sm">
                {project.techno.map((t) => {
                  return (
                    <p key={t._id}>
                      {" "}
                      <span>&nbsp;</span>
                      {t.title}&nbsp;/
                    </p>
                  );
                })}
              </div>
            </AnimUp>
            {/* INDEX 2 */}
            <AnimUp
              inView={inView}
              duration={1.5}
              delay={1.2}
              className="pt-5 text-base"
            >
              <p>{project.description}</p>
            </AnimUp>
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
          </div>
        </div>
        {/* 
        <div className="fixed -bottom-10 left-0 z-0 flex w-full max-w-[150rem] flex-col px-4 font-Humane text-[28rem] opacity-5  md:flex-row md:px-20">
          <div className="flex">
            <h2 className="uppercase leading-[0.8]">W</h2>
            <h2 className="uppercase leading-[0.8]">0</h2>
          </div>
          <div className="flex">
            <h2 className="uppercase leading-[0.8]">R</h2>
            <h2 className="uppercase leading-[0.8]">K</h2>
          </div>
        </div> */}

        {/* <div className=" fixed bottom-0 hidden  w-full max-w-[150rem] flex-col px-4 font-Humane text-[28rem] md:flex-row  md:px-20 lg:flex">
        <h1 className="font-humane text-[8rem]">
          {project.name.toUpperCase()}
        </h1>
      </div> */}
        {project.gallery && (
          <div className="mt-10 w-full lg:mt-0 lg:w-[70%]">
            {project.gallery.map((image, index) => (
              <div className="my-10" key={index}>
                <ProjectImage image={image} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
