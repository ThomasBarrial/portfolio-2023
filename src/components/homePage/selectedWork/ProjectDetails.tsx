import AnimUp from "@/components/animated/AnimUp";
import React from "react";
import { Project, SocialMedia } from "../../../../utils/types/types";
import ComeUpText from "@/components/animated/ComeUpText";

interface IProps {
  project: Project;
  inView: boolean;
  isDesktopClicked: boolean;
  index: number;
  socialMedia: SocialMedia[];
}

function ProjectDetails({
  project,
  inView,
  isDesktopClicked,
  index,
  socialMedia,
}: IProps) {
  const displayIndex = (index: number) => {
    if (index + 1 >= 0 && index + 1 <= 9) {
      return `#0${index + 1}`;
    }
    return `#${index}`;
  };

  return (
    <div
      className={`${
        isDesktopClicked ? " max-w-full" : " max-w-full"
      } h-32 transform overflow-hidden  pt-5 duration-1000 lg:mt-10 lg:w-full lg:pt-10`}
    >
      <div
        className={`${
          isDesktopClicked ? "-translate-y-20" : "max-w-5xl -translate-y-10"
        } transform  duration-1000`}
      >
        <div className="flex w-full flex-col items-end pb-10 font-Antonio  text-sm md:w-full  lg:flex-row">
          <div className="flex items-center lg:mr-5">
            <p className="mr-2 hidden opacity-50 md:flex">Completed</p>
            {new Date(project.date).toLocaleDateString("en-En", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center lg:mr-5">
            <p className="mr-2 hidden items-center opacity-50 md:flex">Role</p>
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
            <p className="mr-2 hidden opacity-50 md:flex">Technologies</p>
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
      </div>

      <div
        className={`flex w-full items-center justify-between text-9xl ${
          isDesktopClicked ? "-translate-y-[6.2rem]" : "translate-y-10"
        } transform duration-1000`}
      >
        <div className="flex w-[40%] items-center justify-between  ">
          <div className="font-Humane">
            <p>{displayIndex(index)}</p>
          </div>
          <div className="flex-flex-col ml-5 h-full items-center justify-center space-y-1  font-Antonio  text-sm">
            <div className="flex items-center lg:mr-5">
              <p className="mr-2 hidden opacity-50 md:flex">Completed</p>
              <p className="text-xs">
                {new Date(project.date).toLocaleDateString("en-En", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center lg:mr-5">
              <p className="mr-2 hidden items-center opacity-50 md:flex">
                Role
              </p>
              {project.categories.map((c) => {
                return (
                  <p className="flex text-xs" key={c._id}>
                    <span className="flex">&nbsp;</span>
                    {c.title}&nbsp;/
                  </p>
                );
              })}
            </div>
            <div className="flex items-center lg:mr-5">
              <p className="mr-2 hidden opacity-50 md:flex">Technologies</p>
              <div className="flex flex-wrap text-xs">
                {project.techno.map((t) => {
                  return (
                    <p key={t._id}>
                      {" "}
                      <span>&nbsp;</span>
                      {t.title}&nbsp;/
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-32 w-[20%] items-center justify-center font-Antonio  text-sm font-black underline lg:text-2xl">
          <p>EXPLORE</p>
        </div>
        <div className="flex h-32  w-[40%] items-center justify-between   font-Antonio text-sm ">
          <p className="max-w-[20rem]">{project.description}</p>
          <div className="flex flex-col font-Antonio text-xs">
            {socialMedia.map((item) => {
              return (
                <a className="" href={item.link} key={item._id}>
                  <p className="my-[2px]">{item.name}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
