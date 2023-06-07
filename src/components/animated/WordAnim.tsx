import React from "react";

interface IProps {
  isAnim: boolean;
  word: string;
}

function WordAnim({ isAnim, word }: IProps) {
  const wordArray = word.split("");
  return (
    <div className="flex">
      {wordArray.map((letter, index) => {
        return (
          <div key={index} className={`overflow-hidden pt-6 xxl:pt-8`}>
            <p
              className={`text-[12rem]  w-full  md:text-[13rem] lg:text-[18rem] desktop:text-[20rem] xxl:text-[25rem] leading-[0.7] font-Humane transiton transform duration-[1800ms]  ${
                !isAnim ? "rotationInitial" : "rotation"
              } `}
            >
              {letter}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default WordAnim;
