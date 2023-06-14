import React from "react";

interface IProps {
  text: string;
  className?: string;
}

function ComeUpText({ text, className }: IProps) {
  return (
    <div className={`group flex h-6  flex-col overflow-hidden ${className}`}>
      <p className="ml-10 transform transition duration-500 group-hover:-translate-y-6">
        {text}
      </p>
      <p className="ml-10 -translate-y-1 transform transition duration-500 group-hover:-translate-y-6">
        {text}
      </p>
    </div>
  );
}

export default ComeUpText;
