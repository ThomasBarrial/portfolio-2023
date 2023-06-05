"use client";
import { motion } from "framer-motion";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  index?: number;
}

function AnimUp({
  children,
  className,
  duration = 1,
  index = 0,
}: IProps): JSX.Element {
  const variants = {
    open: {
      y: 0,
      transition: {
        type: "spring",
        duration: duration,
        bounce: 0,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
    closed: {
      y: "300px",
      transition: {
        type: "spring",
        duration: duration,
        bounce: 0,
        ease: [0.17, 0.67, 0.83, 0.67],
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
