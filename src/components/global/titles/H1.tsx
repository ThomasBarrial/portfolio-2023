import React from "react";

interface IProps {
  title: string;
  className?: string;
}
function H1({ title, className }: IProps) {
  return (
    <h1
      className={`${className} font-Humane text-[6rem] leading-[0.75] tracking-wide phone:text-[6rem] md:text-[8rem] md:tracking-normal`}
    >
      {title}
    </h1>
  );
}

export default H1;
