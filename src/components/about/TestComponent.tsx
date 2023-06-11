"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimUp from "../animated/AnimUp";

function TestComponent({ color }: { color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 0px -100px 0px",
  });

  return (
    <div
      ref={ref}
      className={`flex h-screen w-screen items-center justify-center text-5xl bg-red-${color}`}
    >
      {inView && (
        <AnimUp duration={1.5} y={500}>
          SECTION
        </AnimUp>
      )}
    </div>
  );
}

export default TestComponent;
