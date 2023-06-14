"use client";
import React, { useEffect, useState } from "react";
import AnimUp from "../animated/AnimUp";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";

function PageTransition({ children }: { children: React.ReactNode }) {
  const [translatePage, setTranslatePage] = useState(false);
  const pathName = usePathname();

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const generatePathName = (pathName: string) => {
    const array = pathName.split("");
    array.shift();

    if (array.length === 0) {
      return "HOME";
    } else {
      return array.join("");
    }
  };

  useEffect(() => {
    generatePathName(pathName);

    setTimeout(() => {
      setTranslatePage(true);
    }, 1500);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="page-transition fixed z-50 flex h-screen w-screen items-center justify-center bg-background"
      >
        <AnimUp inView={inView} duration={1} y={100}>
          <h1 className="font-Humane text-[14rem] uppercase lg:text-[20rem]">
            {generatePathName(pathName)}
          </h1>
        </AnimUp>
      </div>
      <div
        className={`underpage-transition fixed z-40 flex h-screen w-screen flex-col items-center justify-center bg-white text-white `}
      />
      {translatePage && <div>{children}</div>}
    </>
  );
}

export default PageTransition;
