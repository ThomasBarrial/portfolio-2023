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

function OneProject({ project }: IProps) {
  const projectRef = useRef(null);
  const inProjectView = useInView(projectRef, {
    margin: "0px 0px -100px 0px",
    once: true,
  });
  return (
    <div
      ref={projectRef}
      key={project._id}
      className="py-0 md:py-0 md:h-screen w-screen px-5 lg:px-20  group  flex flex-col"
    >
      <div className="flex md:hidden z-10 translate-y-12 h-36 mix-blend-exclusion">
        {inProjectView && (
          <AnimUp duration={1.5}>
            <h2 className="font-Humane pt-5 text-left flex lg:m-0 text-[10rem] md:hidden leading-[0.8] uppercase">
              {project.name}
            </h2>
          </AnimUp>
        )}
      </div>
      {inProjectView && (
        <AnimUp duration={1.5}>
          <div className="w-full lg:w-8/12 cursor-pointer h-[220px] phone:h-[400px] md:h-[530px] relative">
            <Image
              className={`lg:max-w-4xl object-cover overflow-hidden lg:translate-x-10  lg:scale-110 `}
              src={urlFor(project.mainImage).url()}
              alt={
                project.mainImage?.alt
                  ? project.mainImage.alt
                  : "Main project Image"
              }
              fill
            />
          </div>
        </AnimUp>
      )}
      <div className="pt-5 lg:pt-2 h-24">
        {inProjectView && (
          <AnimUp duration={1.5}>
            <div className="flex flex-col items-end lg:flex-row font-Antonio text-sm md:translate-y-10 w-full md:w-full  pb-10">
              <div className="flex items-center lg:mr-5">
                <p className="mr-2 hidden md:flex opacity-50">Completed</p>
                {new Date(project.date).toLocaleDateString("en-En", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center lg:mr-5">
                <p className="mr-2 hidden md:flex items-center opacity-50">
                  Role
                </p>
                {project.categories.map((c) => {
                  return (
                    <p className="flex" key={c._id}>
                      <span className="flex">&nbsp;</span>
                      {c.title}&nbsp;/
                    </p>
                  );
                })}
              </div>
              <div className="flex items-center lg:mr-5">
                <p className="mr-2 hidden md:flex opacity-50" opacity-50>
                  Technologies
                </p>
                {project.techno.map((t) => {
                  return (
                    <p className="flex" key={t._id}>
                      {" "}
                      <span className="flex">&nbsp;</span>
                      {t.title}&nbsp;/
                    </p>
                  );
                })}
              </div>
            </div>
          </AnimUp>
        )}
      </div>
    </div>
  );
}

export default OneProject;
