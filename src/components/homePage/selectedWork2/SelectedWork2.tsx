"use client";

import LayoutSection from "@/components/layout/navbar/utils/LayoutSection";
import React from "react";
import { Project, SocialMedia } from "../../../../utils/types/types";
import Image from "next/image";
import urlFor from "../../../../sanity/lib/urlFor";
import Link from "next/link";
import H1 from "@/components/global/titles/H1";
import OneProject from "./OneProject";

interface IProps {
  projects: Project[];
  socialMedia: SocialMedia[];
}

function SelectedWork2({ projects }: IProps) {
  return (
    <div className="relative z-20 flex w-screen  justify-center bg-background">
      <div className=" flex max-w-[150rem] flex-col items-start justify-center   px-5 lg:mt-0 lg:px-20 lg:pt-20">
        <H1 title="SELECTED WORK" />
        <div className=" mt-5 flex w-full flex-col flex-wrap lg:mt-10 lg:flex-row">
          {projects.slice(0, 3).map((project: Project, index) => {
            return (
              <OneProject index={index} project={project} key={project._id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SelectedWork2;
