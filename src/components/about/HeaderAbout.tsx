"use client";
import { useInView } from "react-intersection-observer";
import ProfilPic from "./ProfilPic";
import { Canvas } from "@react-three/fiber";
import WordAnim from "../animated/WordAnim";
import TextTileComp from "./TextTileComp";
import Cursor from "../Cursor";
import Image from "next/image";

function HeaderAbout() {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="h-screen overflow-hidden">
      {inView && (
        <div className="group h-screen cursor-none">
          <Canvas
            className="absolute z-0 hidden animate-fadeIn lg:flex"
            performance={{ min: 0.1 }}
          >
            <ProfilPic />
          </Canvas>
          <Cursor className="hidden group-hover:flex" />
        </div>
      )}

      {inView && (
        <Image
          priority
          className="translate-x-[10%]animate-fadeIn absolute right-0 top-0 z-10 flex lg:hidden"
          src="/image/thomasBarrial.webp"
          alt="Description of image"
          width={800}
          height={200}
        />
      )}
      <div
        ref={ref}
        className="pointer-events-none absolute left-0 top-0 z-20 flex h-screen w-full flex-col  items-center justify-center font-Antonio"
      >
        <div className="flex h-full w-full max-w-[150rem] flex-col  justify-between px-5 pt-20 lg:flex-row lg:px-10">
          <div className="flex h-full w-full flex-col justify-end pb-10 pr-20 lg:w-1/2 lg:justify-between">
            <h1 className="hidden">About me</h1>
            <div className="max-w-[38rem] -translate-x-5 scale-95">
              <WordAnim word="THOMAS" isAnim={inView} />
              <WordAnim word="BARRIAL" isAnim={inView} />
            </div>
            <div className="w-full">
              <div className="flex w-full flex-col justify-between space-y-3 py-5 lg:flex-row lg:space-x-5 lg:space-y-0">
                <TextTileComp
                  inView={inView}
                  title="Location"
                  text="Montréal Canada"
                />
                <TextTileComp
                  inView={inView}
                  title="Born"
                  text="February, 22, 1995"
                />
                <TextTileComp
                  inView={inView}
                  title="Focus"
                  text="Digital, Developpment, Design, Motion"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAbout;
