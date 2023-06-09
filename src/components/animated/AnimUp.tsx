"use client";
import { motion } from "framer-motion";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  index?: number;
  y?: number;
}

function AnimUp({
  children,
  className,
  duration = 1,
  y = 300,
}: IProps): JSX.Element {
  const variants = {
    open: {
      y: 0,
      transition: {
        duration: duration,
        bounce: 0,
        ease: "easeOut",
      },
    },
    closed: {
      y: `${y}px`,
      transition: {
        duration: duration,
        bounce: 0,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        variants={variants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default AnimUp;
