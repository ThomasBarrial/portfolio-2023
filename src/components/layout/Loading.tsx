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
        className={`h-screen w-screen bg-background flex flex-col items-center justify-center z-50 text-white fixed top-0 ${
          isLoader.active ? "translate-y-0" : "-translate-y-full"
        } transform duration-1000`}
      >
        {/* <AnimUp duration={2} y={320}>
          <h2 className="text-white  font-teko px-5 lg:px-0  text-4xl animate-fadeIn mt-10 font-Antonio">
            HELLO, WELCOME ON MY PORTFOLIO
          </h2>
        </AnimUp> */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "90%" }}
          transition={{
            type: "spring",
            duration: 2.5,
            bounce: 0,
            ease: [0.17, 0.67, 0.83, 0.67],
          }}
          className="h-[1px] bg-white mt-10"
        />
      </div>
      <div
        className={`h-screen w-screen bg-white flex flex-col items-center justify-center z-40 text-white fixed top-0 ${
          isLoader.active ? "translate-y-96" : "-translate-y-full"
        } transform duration-1000`}
      />
    </>
  );
}
