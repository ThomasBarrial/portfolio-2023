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
      className=" fixed left-0 right-0 top-0 z-[100] h-[2px] bg-white"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

export default ProgressBar;
