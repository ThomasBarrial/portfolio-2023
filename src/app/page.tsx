import MacBook from "@/components/homePage/macbook/Macbook";
import Section4 from "@/components/homePage/Section4";
import Services from "@/components/homePage/Services";
import Header from "@/components/homePage/header/Header";
import Loading from "@/components/layout/Loading";
import getHomeData from "@/API/getHomeData";

export const revalidate = 60;

export default function Home() {
  const data = getHomeData();
  return (
    <main className="flex flex-col items-center justify-center">
      <Loading />
      <Header />

      <div className="z-20 bg-[#050505]">
        <Services />
        <MacBook />
        <Section4 />
      </div>
    </main>
  );
}
