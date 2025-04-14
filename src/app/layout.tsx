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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://wwww.thomasbarrial.dev" />
      </head>
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
