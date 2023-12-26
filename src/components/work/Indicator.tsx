"use client";

import { Project } from "../../../utils/types/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";

interface IProps {
  projects: Project[];
}

function Indicator({ projects }: IProps) {
  const variants = {
    open: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    close: { scale: 1, opacity: 0.3, transition: { duration: 1 } },
  };

  const [isHover, setIsHover] = useState(false);
  const indexStore = useSelector((state: any) => state.workSectionIndex);

  const handleClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const onMouseEnter = () => {
    setIsHover(true);
    console.log("mouse enter");
  };

  const onMouseLeave = () => {
    setIsHover(false);
    console.log("onMouseLeave");
  };

  return (
    <div className="fixed left-20 top-1/2 z-40 hidden h-44 w-20 -translate-y-1/2  flex-col items-center justify-center lg:flex">
      <div className="flex flex-col">
        {projects.map((p, index) => (
          <button
            className="group flex h-8 items-center py-0 outline-none"
            key={p._id}
            onClick={() => handleClick(p._id)}
          >
            {indexStore === index && (
              <div className="flex items-center text-xs">
                <p className="text-sm"></p>
              </div>
            )}

            <motion.div
              initial="close"
              whileHover={"open"}
              animate={indexStore === index ? "open" : "close"}
              variants={variants}
              className=" my-3 h-5 w-7 rounded-sm border border-white opacity-60"
            />

            <div
              className={`ml-2 flex items-center font-Antonio group-hover:opacity-100 ${
                indexStore === index ? "opacity-100" : "opacity-20"
              } transition duration-500`}
            >
              <p className="text-xs">
                {index + 1} - {projects.length}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Indicator;
