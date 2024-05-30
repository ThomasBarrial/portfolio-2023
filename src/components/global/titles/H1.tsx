import React from "react";

interface IProps {
  title: string;
  className?: string;
}
function H1({ title, className }: IProps) {
  return (
    <h1
      className={`${className} font-Humane text-[4rem] leading-[0.75] phone:text-[6rem] md:text-[8rem]`}
    >
      {title}
    </h1>
  );
}

export default H1;
