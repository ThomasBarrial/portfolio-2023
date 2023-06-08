"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { Project } from "../../../../utils/types/types";
import Image from "next/image";
import AnimUp from "@/components/animated/AnimUp";
import urlFor from "../../../../sanity/lib/urlFor";

interface IProps {
  project: Project;
  key: string;
}

function OneProject({ project, key }: IProps) {
  const projectRef = useRef(null);
  const inProjectView = useInView(projectRef, {
    margin: "0px 0px -500px 0px",
    once: true,
  });
  return (
    <div
      ref={projectRef}
      key={key}
      className="border md:h-screen w-screen px-5 lg:px-20 flex flex-col items-center justify-center"
    >
      <div className="w-full lg:w-10/12 cursor-pointer group h-[400px] md:h-[530px] relative">
        <Image
          className="mt-5 lg:mt-0 lg:max-w-4xl object-cover overflow-hidden scale-100 group-hover:scale-105 transform duration-500 ease-out"
          src={urlFor(project.mainImage).url()}
          alt={
            project.mainImage?.alt
              ? project.mainImage.alt
              : "Main project Image"
          }
          fill
        />
      </div>
      <div className="h-52 mix-blend-difference  -translate-y-14">
        {inProjectView && (
          <AnimUp duration={1}>
            <h2 className="font-Humane pt-5   text-center md:text-right flex lg:m-0 text-[10rem] md:hidden leading-[0.8] uppercase">
              {project.name}
            </h2>
          </AnimUp>
        )}
      </div>
    </div>
  );
}

export default OneProject;
