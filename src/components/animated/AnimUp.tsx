"use client";
import { useInView } from "react-intersection-observer";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  index?: number;
  delay?: number;
  y?: number;
}

function AnimUp({
  children,
  className,
  duration = 1,
  delay = 0,
  y = 300,
}: IProps): JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const styles = {
    transition: `transform ${duration}s ease ${delay}s`,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
  };
  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className={`${className} animUp-initial ${inView ? "in-view" : ""}`}
        style={styles}
      >
        {children}
      </div>
    </div>
  );
}

export default AnimUp;
