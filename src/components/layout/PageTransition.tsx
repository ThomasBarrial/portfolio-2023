"use client";
import React, { useEffect, useState } from "react";
import AnimUp from "../animated/AnimUp";
import { useRouter, usePathname } from "next/navigation";
import { useIsLoaderFromStore } from "@/store/isLoader.slice";

function PageTransition({ children }: { children: React.ReactNode }) {
  const { isLoader } = useIsLoaderFromStore();
  const [translatePage, setTranslatePage] = useState(false);
  const pathName = usePathname();

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

    if (!isLoader.active) {
      setTimeout(() => {
        setTranslatePage(true);
      }, 1500);
    } else {
      setTimeout(() => {
        setTranslatePage(true);
      }, 3500);
    }
  }, []);

  return (
    <>
      {!isLoader.active && (
        <>
          <div className="page-transition fixed z-50 flex h-screen w-screen items-center justify-center bg-background">
            <AnimUp duration={1.5} threshold={0} y={500}>
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
      )}
    </>
  );
}

export default PageTransition;
