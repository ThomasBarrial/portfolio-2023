"use client";
import { useScroll, useSpring, motion } from "framer-motion";
import React from "react";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className=" bg-white fixed top-0 left-0 right-0 h-[2px] z-[99]"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

export default ProgressBar;