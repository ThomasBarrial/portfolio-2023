import React from "react";

interface IProps {
  isAnim: boolean;
  word: { value: string; id: number }[];
}

function WordAnim({ isAnim, word }: IProps) {
  return (
    <div className="flex">
      {word.map((letter) => {
        return (
          <div key={letter.id} className={`overflow-hidden pt-5 xxl:pt-8`}>
            <p
              className={`text-[12rem]  w-full  md:text-[13rem] lg:text-[18rem] desktop:text-[20rem] xxl:text-[25rem] leading-[0.7] font-Humane transiton transform duration-[1800ms]  ${
                isAnim ? "rotationInitial" : "rotation"
              } `}
            >
              {letter.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default WordAnim;
