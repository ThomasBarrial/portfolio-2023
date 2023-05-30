import { Canvas } from "@react-three/fiber";
import Header from "../components/homePage/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      {/* <div className="text-center">
        <h1 className="font-Humane text-9xl uppercase">HOMEPAGE</h1>
        <h2 className="font-antonio uppercase">This is the first page</h2>
      </div> */}
    </main>
  );
}
