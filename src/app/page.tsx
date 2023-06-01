import Services from "@/components/homePage/Services";
import Header from "@/components/homePage/header/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Header />
      <div className="z-20 bg-background">
        <Services />
      </div>
    </main>
  );
}
