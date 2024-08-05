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

  return (
    <div className="relative  max-w-[150rem] flex-col items-start justify-center px-5 pt-20  font-Antonio lg:flex-row lg:px-20">
      <div
        ref={ref}
        className="top-20 mr-10 flex w-full flex-col justify-between lg:flex-row lg:items-end"
      >
        <div className="mr-10">
          <AnimUp
            duration={1.2}
            delay={1.2}
            inView={inView}
            className="font-Humane text-9xl"
          >
            <p>{displayIndex(1)}</p>
          </AnimUp>
          <AnimUp
            duration={1.2}
            delay={1.2}
            inView={inView}
            className="font-Humane text-9xl"
          >
            <p>{project.name.toUpperCase()}</p>
          </AnimUp>
        </div>

        <div className="flex-flex-col h-full items-center justify-center space-y-1  pb-5 pt-5  font-Antonio  text-sm">
          <AnimUp
            inView={inView}
            duration={1}
            delay={1.2}
            className="flex items-center lg:mr-5"
          >
            <p className="mr-2 hidden text-gray-300 md:flex">Completed</p>
            <p className="text-sm">
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
                <p className="flex text-sm" key={c._id}>
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
            className="pt-5 text-sm"
          >
            <p>{project.description}</p>
          </AnimUp>
        </div>
      </div>
    </div>
  );
}

export default Header;
