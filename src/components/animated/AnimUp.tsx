"use client";
import { useInView } from "react-intersection-observer";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  index?: number;
  delay?: number;
  y?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

function AnimUp({
  children,
  className,
  duration = 1,
  delay = 0,
  y = 150,
  threshold = 0,
  triggerOnce = true,
}: IProps): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: triggerOnce,
    threshold,
  });

  const styles = {
    transition: `transform ${duration}s ease ${delay}s`,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
  };
  return (
    <div ref={ref} className="overflow-hidden">
      <div className={`${className} ${inView ? "in-view" : ""}`} style={styles}>
        {children}
      </div>
    </div>
  );
}

export default AnimUp;
