"use client";
import { Canvas } from "@react-three/fiber";
import ProfilPic from "./ProfilPic";

function Header() {
  return (
    <div className="flex flex-col" style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <Canvas>
          <color attach="background" args={["#111111"]} />
          <ProfilPic />
        </Canvas>
      </div>
    </div>
  );
}

export default Header;
