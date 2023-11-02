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

interface IProps {
  project: Project;
  key: string;
  setIsBlendMode: Dispatch<SetStateAction<boolean>>;
  index: number;
  socialMedia: SocialMedia[];
}

function OneProject({ project, index, socialMedia, setIsBlendMode }: IProps) {
  const [isDesktopClicked, setIsDesktopClicked] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { scrollYProgress } = useScroll();

  const y = useParallax(scrollYProgress, 450, -890);

  const router = useRouter();

  const onProjectClick = () => {
    if (window.innerWidth > 1100) {
      setIsBlendMode(false);
      setIsDesktopClicked(true);
    } else {
      router.push("/");
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

  console.log(isDesktopClicked, project.name);

  return (
    <div
      ref={ref}
      key={project._id}
      className="group relative flex w-screen max-w-[150rem]  flex-col items-center justify-center px-5 py-0  md:h-screen md:py-0 lg:px-20"
    >
      {!isDesktopClicked && (
        <button
          onClick={onProjectClick}
          className="absolute z-30 h-screen w-screen bg-transparent"
        />
      )}
      <div className="z-10 flex h-36 w-full translate-y-12 mix-blend-exclusion lg:hidden">
        <AnimUp inView={inView} duration={1.5}>
          <h2 className="flex pt-5 text-left font-Humane text-[10rem] uppercase leading-[0.8] lg:m-0">
            {project.name}
          </h2>
        </AnimUp>
      </div>

      <div
        className={`relative ${
          isDesktopClicked ? "scale-110 opacity-50" : "scale-100"
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
