"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}
function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const x = useTransform(
    baseX,
    (v) => `${wrap(-windowSize.width / 100, -40, v)}%`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 9000);

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="m-0 flex w-screen flex-nowrap overflow-hidden  whitespace-nowrap font-Humane text-[20rem] uppercase leading-[0.8] opacity-10">
      <motion.div className="flex flex-nowrap pt-2" style={{ x }}>
        <span className="mr-10">{children} </span>
        <span className="mr-10">{children} </span>
        <span className="mr-10">{children} </span>
        <span className="mr-10">{children} </span>
      </motion.div>
    </div>
  );
}

export default ParallaxText;
