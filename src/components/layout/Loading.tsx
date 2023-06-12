"use client";
import { useIsLoaderFromStore } from "@/store/isLoader.slice";
import React, { useEffect, useState } from "react";
import AnimUp from "../animated/AnimUp";
import { motion } from "framer-motion";

type Props = {};

export default function Loading({}: Props) {
  const { isLoader, dispatchToggleIsLoader } = useIsLoaderFromStore();
  const [count, setCount] = useState(0);

  let newCount = 0;
  useEffect(() => {
    setTimeout(() => {
      if (isLoader.active) {
        dispatchToggleIsLoader();
      }
    }, 2000);

    const counting = setInterval(() => {
      newCount++;
      console.log(newCount);
      setCount(newCount);

      if (newCount == 100) {
        clearInterval(counting);
      }
    }, 12);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-[99] flex h-screen w-screen flex-col items-center justify-center bg-background text-white ${
          isLoader.active ? "translate-y-0" : "-translate-y-full"
        } transform duration-[2000ms]`}
      >
        <h2 className="absolute bottom-24 right-0 font-Humane text-[20rem] leading-[0.8] lg:bottom-0 lg:right-10">
          {count}
        </h2>
      </div>
      <div
        className={`fixed top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-white text-white ${
          isLoader.active ? "translate-y-96" : "-translate-y-full"
        } transform duration-[2000ms]`}
      />
    </>
  );
}
