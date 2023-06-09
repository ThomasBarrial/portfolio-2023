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
  return useTransform(value, [0.1, 1], [500, -650]);
}

function SelectedWork({ projects }: IProps) {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);
  const ref = useRef(null);

  const inView = useInView(ref, { margin: "0px 0px -50px 0px" });

  const displayIndex = (index: number) => {
    if (index + 1 >= 0 && index + 1 <= 9) {
      return `#0${index + 1}`;
    }
    return `#${index}`;
  };

  return (
    <div ref={ref} className="bg-background relative z-20">
      <h2 className="sticky top-20 uppercase text-xl mb-0 lg:mb-10 px-5  lg:px-20 z-20 mix-blend-difference font-Antonio">
        Selected Work
      </h2>
      {inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="text-9xl z-10 h-48 pointer-events-none lg:h-48 mix-blend-difference w-[90%]  hidden md:flex items-end  fixed bottom-[20%] opacity-90 overflow-hidden right-10 -translate-y-1/2  flex-col"
        >
          <motion.div style={{ y }}>
            {projects.map((p) => {
              return (
                <h3
                  className="font-Humane text-right  pt-5  lg:pt-0 md:text-[12rem] lg:text-[15rem] leading-[0.8] uppercase"
                  key={p._id}
                >
                  {p.name}
                </h3>
              );
            })}
          </motion.div>
        </motion.div>
      )}
      {projects.map((project) => {
        return <OneProject project={project} key={project._id} />;
      })}
    </div>
  );
}

export default SelectedWork;
