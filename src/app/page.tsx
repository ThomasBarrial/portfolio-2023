import MacBook from "@/components/homePage/macbook/Macbook";
import Section4 from "@/components/homePage/Section4";
import Services from "@/components/homePage/Services";
import Header from "@/components/homePage/header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />

      <div className="z-20 bg-[#050505]">
        <Services />
        <MacBook />
        <Section4 />
      </div>
    </main>
  );
}
