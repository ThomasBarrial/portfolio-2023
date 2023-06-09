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
    margin: "0px 0px -100px 0px",
  });
  return (
    <div
      ref={projectRef}
      key={key}
      className="py-14 md:py-0 md:h-screen w-screen px-5 lg:px-20  group  flex flex-col"
    >
      <div className="flex md:hidden h-36">
        {inProjectView && (
          <AnimUp duration={2}>
            <h2 className="font-Humane pt-5    text-left flex lg:m-0 text-[10rem] md:hidden leading-[0.8] uppercase">
              {project.name}
            </h2>
          </AnimUp>
        )}
      </div>
      <div className="w-full lg:w-8/12 cursor-pointer h-[200px] phone:h-[400px] md:h-[530px] relative">
        <Image
          className={`mt-5 lg:mt-0 lg:max-w-4xl object-cover overflow-hidden lg:translate-x-10  scale-100 lg:group-hover:scale-110 transform duration-1000 ease-out`}
          src={urlFor(project.mainImage).url()}
          alt={
            project.mainImage?.alt
              ? project.mainImage.alt
              : "Main project Image"
          }
          fill
        />
      </div>
      <div className="b  h-44">
        {inProjectView && (
          <div className="flex font-Antonio text-sm translate-y-10 w-full md:w-6/12 lg:border-none border-b pb-10">
            <AnimUp duration={2}>
              <div className="flex-col mr-10 lg:mr-12 hidden lg:flex">
                <p className="mt-2">Role</p>
                <p className="mt-2">Technologies</p>
                <p className="mt-2">Description</p>
              </div>
            </AnimUp>
            <AnimUp duration={2}>
              <div>
                <div className="flex mt-2">
                  {" "}
                  {project.categories.map((c) => {
                    return <p key={c._id}>{c.title}</p>;
                  })}
                </div>
                <div className="flex mt-2">
                  {project.techno.map((t) => {
                    return <p key={t._id}>{t.title}&nbsp;</p>;
                  })}
                </div>
                <div className="mt-2">{project.description}</div>
              </div>
            </AnimUp>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneProject;
