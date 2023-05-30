"use client";
import { Canvas } from "@react-three/fiber";
import ProfilPic from "./ProfilPic";
import Name from "./Name";

function Header() {
  return (
    <div className="flex flex-col relative h-screen w-screen">
      <div className="z-10" style={{ width: "100%", height: "100%" }}>
        <Canvas>
          <ProfilPic />
        </Canvas>
      </div>

      <div className="absolute bottom-0 opacity-80  px-20">
        <h2 className="font-Antonio text-2xl">CREATIVE DEVELOPER & DESIGNER</h2>
        <div className="font-Humane">
          <h1
            className="text-[15rem]"
            style={{
              lineHeight: 1,
            }}
          >
            BARRIAL
          </h1>
          <h1
            className=" text-[35rem]"
            style={{
              lineHeight: 0.7,
            }}
          >
            THOMAS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
