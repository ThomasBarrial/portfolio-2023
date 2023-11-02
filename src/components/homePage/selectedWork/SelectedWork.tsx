"use client";
import { Project, SocialMedia } from "../../../../utils/types/types";
import { useInView, useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";
import OneProject from "./OneProject";
import useParallax from "../../../../utils/useParallax";

interface IProps {
  projects: Project[];
  socialMedia: SocialMedia[];
}

function SelectedWork({ projects, socialMedia }: IProps) {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 450, -890);
  const ref = useRef(null);
  const [isBlendMode, setIsBlendMode] = useState(true);

  const inView = useInView(ref, { margin: "0px 0px -50px 0px", once: true });

  return (
    <div
      ref={ref}
      className="relative z-20 mt-20 flex flex-col items-center justify-center bg-background lg:mt-0"
    >
      <h2 className="sticky top-20 z-0 mr-5 w-screen max-w-[150rem] text-right font-Humane text-[10rem] uppercase leading-[0.8] opacity-10 lg:mr-0 lg:pl-20 lg:text-left lg:text-[20rem]">
        Selected Work
      </h2>
      {inView && (
        <div
          className={`${
            isBlendMode ? "mix-blend-difference" : ""
          } pointer-events-none fixed bottom-[20%] right-1/2 z-10 hidden h-48 w-screen max-w-[150rem] -translate-y-1/2 translate-x-1/2  flex-col items-end overflow-hidden  pr-20 text-9xl  lg:flex  lg:h-48`}
        >
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
      {projects.map((project: Project, index) => {
        return (
          <OneProject
            setIsBlendMode={setIsBlendMode}
            socialMedia={socialMedia}
            project={project}
            key={project._id}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default SelectedWork;
