import { Provider } from "react-redux";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import { store } from "@/store";
import ReduxProvider from "@/store/ReduxProvider";

export const metadata = {
  title: "ThomasBarrial",
  description: "Thomas Barrial | CREATIVE DEVELOPER & DESIGNER",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-white">
        <Navbar />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
