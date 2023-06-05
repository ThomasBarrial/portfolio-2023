"use client";
import getHomeData from "@/API/getHomeData";
import React, { useState } from "react";

type Props = {};

export default function Loading({}: Props) {
  const [isLoading, setIsLoading] = useState(true);

  getHomeData().then(() => setIsLoading(false));

  return (
    <>
      {isLoading && (
        <div className="absolute h-screen z-40 w-screen top-0 left-0 items-center justify-center bg-black">
          LOADING
        </div>
      )}
    </>
  );
}
