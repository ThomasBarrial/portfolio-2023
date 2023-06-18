"use client";
import { Html, Scroll, ScrollControls, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Item from "./Item";
import Minimap from "./Minimap";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ProjectName from "./ProjectName";
import AnimUp from "../animated/AnimUp";

interface IProps {
  h?: number;
}

function Items({ h = 5 }: IProps) {
  const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((u) => `/${u}.jpg`);
  const [clicked, setClicked] = useState<number | null>(null);
  const { height, width } = useThree((state) => state.viewport);

  const gap = -(height - h) / 2;

  const yH = h - gap;

  const projectsName = [
    { name: "Project1", position: 0 },
    { name: "Project2", position: 0 },
    { name: "Project3", position: 0 },
    { name: "Project4", position: 0 },
    { name: "Project5", position: 0 },
    { name: "Project6", position: 0 },
    { name: "Project7", position: 0 },
    { name: "Project8", position: 0 },
    { name: "Project9", position: 0 },
    { name: "Project10", position: 0 },
    { name: "Project11", position: 0 },
    { name: "Project12", position: 0 },
  ];

  const getContentPosition = (array: any) => {
    let value = 75;

    for (let i = 0; i < array.length; i++) {
      array[i].position = value + i * 2.5;
      value += 80;
    }

    return array;
  };

  useEffect(() => {
    getContentPosition(projectsName);
  }, []);

  // console.log(h + gap);

  console.log(getContentPosition(projectsName));

  return (
    <>
      <ScrollControls
        damping={0.1}
        pages={(height - yH + urls.length * yH) / height}
      >
        {/* <Minimap /> */}
        <Scroll>
          {
            urls.map((url, i) => <Item clicked={clicked} setClicked={setClicked} key={i} index={i} position={[0, -i * yH, 0]} scale={[7, h, 1]} url={url} />) /* prettier-ignore */
          }

          {projectsName.map((project: any, index) => {
            return (
              <>
                <ProjectName
                  clicked={clicked}
                  key={index}
                  index={index}
                  name={project.name}
                  yH={yH}
                />
              </>
            );
          })}
        </Scroll>
        {/* @ts-ignore */}
        <Scroll html style={{ width: "100%", height: "100%" }}>
          {projectsName.map((project, index) => {
            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `${project.position}%`,
                  right: "5%",
                }}
                className="w-52 space-y-3  p-2 font-Antonio"
              >
                <AnimUp y={50} duration={0.75} inView={clicked === index}>
                  <p>Complete 23th January 2023</p>
                </AnimUp>
                <AnimUp y={50} duration={1} inView={clicked === index}>
                  <p>Role: Development & design</p>
                </AnimUp>
                <AnimUp y={50} duration={1.25} inView={clicked === index}>
                  <p className="underline">EXPLORE</p>
                </AnimUp>
              </div>
            );
          })}
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default Items;
