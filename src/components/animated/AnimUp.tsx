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
  duration,
  index = 0,
}: IProps): JSX.Element {
  const variants = {
    open: {
      y: 0,
      scale: 1,
      transition: { type: "spring", duration: 1.5, bounce: 0.1 },
    },
    closed: {
      y: "300px",
      scale: 0.8,
      transition: { type: "spring", duration: 1.5, bounce: 0.1 },
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
