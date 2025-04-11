"use client";
import { Project, SocialMedia } from "../../../../utils/types/types";
import Image from "next/image";
import AnimUp from "@/components/animated/AnimUp";
import urlFor from "../../../../sanity/lib/urlFor";
import ProjectDetails from "./ProjectDetails";
import { useInView } from "react-intersection-observer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useScroll } from "framer-motion";
import useParallax from "../../../../utils/useParallax";
import HoverProjectDetails from "./HoverProjectDetails";
import { useDispatch } from "react-redux";
import { setIndex } from "@/store/workSectionIndex.slice";

interface IProps {
  project: Project;
  key: string;
  setIsBlendMode: Dispatch<SetStateAction<boolean>>;
  index: number;
  socialMedia: SocialMedia[];
  isDesktopClicked: boolean;
  setIsDesktopClicked: Dispatch<SetStateAction<boolean>>;
}

function OneProject({
  project,
  index,
  socialMedia,
  setIsBlendMode,
  isDesktopClicked,
  setIsDesktopClicked,
}: IProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const dispatch = useDispatch();

  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, 450, -890);

  const router = useRouter();

  const onProjectClick = () => {
    if (window.innerWidth > 1100) {
      setIsBlendMode(false);
      setIsDesktopClicked(true);
    } else {
      router.push(`/work/${project.slug.current}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Vous pouvez effectuer ici les actions à exécuter lors du défilement
      setTimeout(() => {
        setIsDesktopClicked(false);
        setIsBlendMode(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Nettoyez l'écouteur d'événement lors de la suppression du composant
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktopClicked]);

  useEffect(() => {
    if (inView) {
      dispatch(setIndex(index));
    }
  }, [inView]);

  return (
    <div
      id={project._id}
      ref={ref}
      key={project._id}
      className="group relative  flex w-full max-w-[150rem] flex-col items-center  justify-center  px-10  px-5  py-0 md:h-screen md:py-0"
    >
      {!isDesktopClicked && (
        <button
          onClick={onProjectClick}
          className="absolute z-30 h-screen w-full bg-transparent"
        />
      )}
      <div className="z-10 flex w-full translate-y-20 mix-blend-exclusion lg:hidden lg:h-36 lg:translate-y-12">
        <AnimUp inView={inView} duration={1.5}>
          <h2
            className={`flex pt-5 text-left font-Humane text-[10rem] uppercase leading-[0.8] lg:m-0`}
          >
            {project.name}
          </h2>
        </AnimUp>
      </div>
      <div
        className={`relative top-20 ${
          isDesktopClicked ? "scale-110 opacity-30" : "scale-100"
        } h-[220px]  max-h-[600px] w-full max-w-5xl transform cursor-pointer overflow-hidden duration-700 phone:h-[400px] md:h-[80%] lg:w-10/12 `}
      >
        <Image
          className={`object-cover`}
          src={urlFor(project.mainImage).url()}
          alt={
            project.mainImage?.alt
              ? project.mainImage.alt
              : "Main project Image"
          }
          fill
        />
      </div>
      <ProjectDetails isDesktopClicked={isDesktopClicked} project={project} />
      <HoverProjectDetails
        isDesktopClicked={isDesktopClicked}
        project={project}
        socialMedia={socialMedia}
        index={index}
      />
    </div>
  );
}

export default OneProject;
