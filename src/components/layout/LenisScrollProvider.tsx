"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, useRef } from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};
const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
