import React from "react";

interface IProps {
  isAnim: boolean;
  word: string;
  textSize?: string;
  marge?: string;
}

function WordAnim({
  isAnim,
  word,
  textSize = "md:text-[13rem] desktop:text-[20rem] lg:text-[18rem] xxl:text-[25rem]",
  marge = "pt-6 xxl:pt-8",
}: IProps) {
  const wordArray = word.split("");

  return (
    <div className="flex">
      {wordArray.map((letter, index) => {
        return (
          <div key={index} className={`overflow-hidden ${marge}`}>
            <p
              className={`transiton  w-full  transform font-Humane text-[12rem] leading-[0.7] duration-[3000ms] ${textSize} ${
                isAnim ? "rotationInitial" : "rotation"
              } `}
            >
              {letter === " " ? <span>&nbsp;</span> : letter}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default WordAnim;
