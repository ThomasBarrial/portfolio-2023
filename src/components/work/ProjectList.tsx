"use client";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion,
  useSpring,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Project, SocialMedia } from "../../../utils/types/types";
import OneProject from "../homePage/selectedWork/OneProject";

function useParallax(
  value: MotionValue<number>,
  distance: number,
  start: number
) {
  return useTransform(value, [0, 1], [start, -distance]);
}

interface IProps {
  projects: Project[];
  socialMedia: SocialMedia[];
}

const ProjectList = ({ projects, socialMedia }: IProps) => {
  const { scrollYProgress } = useScroll();
  const ref = useRef(null);

  const distance2 = projects.length * 63.6 + -59;
  const distance = (projects.length - 1) * 225;

  const inView = useInView(ref, { margin: "0px 0px -50px 0px", once: true });

  const y = useParallax(scrollYProgress, distance, 8);
  const y2 = useParallax(scrollYProgress, distance2, distance2);
  const [isBlendMode, setIsBlendMode] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsBlendMode(true);
    }, 1500);
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center pb-10 pt-20"
    >
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="fixed top-20 z-0 flex w-full max-w-[150rem] flex-col px-4 font-Humane text-[28rem]  opacity-10 md:flex-row">
        <div className="flex">
          <h2 className="uppercase leading-[0.8]">W</h2>
          <h2 className="uppercase leading-[0.8]">0</h2>
        </div>
        <div className="flex">
          <h2 className="uppercase leading-[0.8]">R</h2>
          <h2 className="uppercase leading-[0.8]">K</h2>
        </div>
      </div>

      <div
        className={`${
          isBlendMode ? "mix-blend-difference" : ""
        } fixed left-1/2 top-1/2 z-20 flex h-44 w-10/12 -translate-x-1/2 -translate-y-1/2 flex-col items-end  overflow-hidden`}
      >
        <motion.div style={{ y }}>
          {projects.map((item) => {
            return (
              <h3
                className="py-5 text-right font-Humane uppercase leading-[0.8] md:text-[12rem] lg:pt-0 lg:text-[15rem]"
                key={item._id}
              >
                {item.name}
              </h3>
            );
          })}
        </motion.div>
      </div>

      {projects.map((project, index) => {
        return (
          <OneProject
            project={project}
            setIsBlendMode={setIsBlendMode}
            key={project._id}
            index={index}
            socialMedia={socialMedia}
          />
        );
      })}
    </div>
  );
};

export default ProjectList;
