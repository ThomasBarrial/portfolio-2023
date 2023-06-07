"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimUp from "../animated/AnimUp";

function TestComponent({ color }: { color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      className={`h-screen text-5xl flex items-center justify-center w-screen bg-red-${color}`}
    >
      {inView && <AnimUp>SECTION</AnimUp>}
    </div>
  );
}

export default TestComponent;
