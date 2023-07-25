import React from "react";

interface IProps {
  text: string;
  className?: string;
}

function ComeUpText({ text, className }: IProps) {
  return (
    <div className={`group flex h-6  flex-col overflow-hidden ${className}`}>
      <p className="transform transition duration-500 group-hover:-translate-y-6 md:ml-10">
        {text}
      </p>
      <p className="-translate-y-1 transform transition duration-500 group-hover:-translate-y-6 md:ml-10">
        {text}
      </p>
    </div>
  );
}

export default ComeUpText;
