"use client";

import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";
import { Project } from "../../../../utils/types/types";
import {
  MotionValue,
  useInView,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useRef } from "react";
import AnimUp from "@/components/animated/AnimUp";
import OneProject from "./OneProject";

interface IProps {
  projects: Project[];
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0.1, 1], [600, -590]);
}

function SelectedWork({ projects }: IProps) {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);
  const ref = useRef(null);

  const inView = useInView(ref, { margin: "0px 0px -50px 0px", once: true });

  const displayIndex = (index: number) => {
    if (index + 1 >= 0 && index + 1 <= 9) {
      return `#0${index + 1}`;
    }
    return `#${index}`;
  };

  return (
    <div ref={ref} className="relative z-20 mt-20 bg-background lg:mt-0">
      <h2 className="sticky top-20 z-0 mr-5 text-right font-Humane text-[10rem] uppercase leading-[0.8] opacity-10 lg:ml-20 lg:mr-0 lg:text-left lg:text-[20rem]">
        Selected<br></br>Work
      </h2>
      {inView && (
        <div className="pointer-events-none fixed bottom-[20%] right-0 z-10 hidden h-48 w-[90%]  -translate-y-1/2 flex-col items-end  overflow-hidden pr-20 text-9xl mix-blend-difference lg:flex  lg:h-48">
          <motion.div style={{ y }}>
            {projects.map((p) => {
              return (
                <h3
                  className="pt-5 text-right  font-Humane  uppercase leading-[0.8] md:text-[12rem] lg:pt-0 lg:text-[15rem]"
                  key={p._id}
                >
                  {p.name}
                </h3>
              );
            })}
          </motion.div>
        </div>
      )}
      {projects.map((project) => {
        return <OneProject project={project} key={project._id} />;
      })}
    </div>
  );
}

export default SelectedWork;
