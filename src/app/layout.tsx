import ProgressBar from "@/components/layout/ProgressBar";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import ReduxProvider from "@/store/ReduxProvider";
import localFont from "next/font/local";
import Loading from "@/components/layout/Loading";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScrolling from "@/components/layout/LenisScrollProvider";
import Lenis from "@studio-freight/lenis";
import LenisScrollProvider from "@/components/layout/LenisScrollProvider";

export const metadata = {
  title: "ThomasBarrial",
  description: "Thomas Barrial | CREATIVE DEVELOPER & DESIGNER",
};

const humane = localFont({
  src: "../../public/fonts/humane/Humane-Bold.ttf",
  variable: "--font-Humane",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-background text-white ${humane.variable} `}>
        <ReduxProvider>
          <LenisScrollProvider>
            <ProgressBar />
            <Navbar />
            <Loading />
            {children}
            <SpeedInsights />
          </LenisScrollProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
