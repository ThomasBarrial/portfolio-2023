import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import ReduxProvider from "@/store/ReduxProvider";
import localFont from "next/font/local";

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
      <body className={`bg-background text-white ${humane.variable}`}>
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
