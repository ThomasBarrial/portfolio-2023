"use client";
import { useIsLoaderFromStore } from "@/store/isLoader.slice";
import React, { useEffect, useState } from "react";
import AnimUp from "../animated/AnimUp";
import { motion } from "framer-motion";

type Props = {};

export default function Loading({}: Props) {
  const { isLoader, dispatchToggleIsLoader } = useIsLoaderFromStore();

  useEffect(() => {
    setTimeout(() => {
      if (isLoader.active) {
        dispatchToggleIsLoader();
      }
    }, 2000);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-background text-white ${
          isLoader.active ? "translate-y-0" : "-translate-y-full"
        } transform duration-1000`}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "90%" }}
          transition={{
            type: "spring",
            duration: 2.5,
            bounce: 0,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
          className="mt-10 h-[1px] bg-white"
        />
      </div>
      <div
        className={`fixed top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-white text-white ${
          isLoader.active ? "translate-y-96" : "-translate-y-full"
        } transform duration-1000`}
      />
    </>
  );
}
