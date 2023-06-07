"use client";

import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";
import { Project } from "../../../../utils/types/types";
import ProjectDescription from "./ProjectDescription";
import {
  MotionValue,
  useInView,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useRef } from "react";

interface IProps {
  projects: Project[];
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [900, -250]);
}

function SelectedWork({ projects }: IProps) {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);
  const ref = useRef<any>();
  const inView = useInView(ref, { margin: "0px 0px -600px 0px" });

  const displayIndex = (index: number) => {
    if (index + 1 >= 0 && index + 1 <= 9) {
      return `#0${index + 1}`;
    }
    return `#${index}`;
  };

  return (
    <div ref={ref} className="pb-20 bg-[#080808]">
      {projects.map((project, index) => {
        return (
          <div
            className="px-5 relative lg:px-20 pb-30 font-Antonio lg:pt-0 py-44  lg:h-screen flex flex-col justify-start pt-20 md:items-center  w-screen"
            key={project._id}
          >
            {inView && (
              <div className="text-9xl h-32 fixed top-1/2 left-1/2 clip inner -translate-x-1/2 -translate-y-1/2 bg-red-200 w-full flex flex-col items-center">
                <motion.div style={{ y }}>
                  <p className="">SECTION1</p>
                  <p className="">SECTION2</p>
                  <p className="">SECTION3</p>
                </motion.div>
              </div>
            )}
            <div className="w-full flex justify-between items-start mt-2">
              <h3 className="font-Humane text-8xl">{displayIndex(index)}</h3>
              <h3 className="w-full text-right text-xl">SELECTED WORK</h3>
            </div>
            <ProjectDescription project={project} />

            <Image
              className="mt-5 lg:mt-0 lg:max-w-5xl"
              src={urlFor(project.mainImage).url()}
              alt={
                project.mainImage?.alt
                  ? project.mainImage.alt
                  : "Main project Image"
              }
              width={1700}
              height={1000}
            />

            <div className=" absolute bottom-0 phone:relative phone:mt-5 w-[90%] phone:w-full lg:w-1/2 pt-2">
              <h3 className="font-Humane text-[9rem] lg:text-[15rem] leading-[0.8] uppercase">
                {project.name}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelectedWork;
