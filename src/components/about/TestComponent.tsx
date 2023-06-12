"use client";
import { useInView } from "react-intersection-observer";
import AnimUp from "../animated/AnimUp";

function TestComponent({ color }: { color: string }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`flex h-screen w-screen items-center justify-center text-5xl bg-red-${color}`}
    >
      <AnimUp inView={inView} duration={1.5} y={500}>
        SECTION
      </AnimUp>
    </div>
  );
}

export default TestComponent;
