"use client";

import { useScroll } from "framer-motion";
import { Project } from "../../../utils/types/types";
import useParallax from "../../../utils/useParallax";
import { motion } from "framer-motion";

interface IProps {
  projects: Project[];
}

function Indicator({ projects }: IProps) {
  const { scrollYProgress } = useScroll();
  const distance = (projects.length - 1) * 22;

  const y = useParallax(scrollYProgress, distance, -45);

  return (
    <div className="s overflow-hidde fixed left-20 top-1/2 hidden h-44 w-20 -translate-y-1/2  flex-col items-center justify-center lg:flex">
      <div className="absolute h-12 w-14 rounded-sm border-2 border-white" />
      <motion.div style={{ y }}>
        {projects.map((p) => (
          <div
            key={p._id}
            className="my-3 h-8 w-10 rounded-sm border border-white opacity-60"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Indicator;
