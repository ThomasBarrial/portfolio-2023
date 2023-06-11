"use client";
import {
  MotionValue,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, -250]);
}

const MasqueTest = () => {
  const { scrollYProgress } = useScroll();
  const y = useParallax(scrollYProgress, 300);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="block">
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <div className="fixed left-1/2 top-1/2 flex h-32 w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center overflow-hidden bg-red-200 text-9xl">
        <motion.div style={{ y }}>
          <p className="">SECTION1</p>
          <p className="">SECTION2</p>
          <p className="">SECTION3</p>
        </motion.div>
      </div>

      <div id="content">
        {[1, 2, 3].map((value, index) => {
          return (
            <div
              key={index}
              className="flex h-screen w-screen items-center justify-center bg-red-400"
            >
              <div className="h-96 w-6/12 bg-lime-600" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasqueTest;
