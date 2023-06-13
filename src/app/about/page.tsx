import TestComponent from "@/components/about/TestComponent";
import Services from "@/components/homePage/services/Services";
import Macbook from "@/components/homePage/macbook/Macbook";
import PageTransition from "@/components/layout/PageTransition";

export default function page() {
  return (
    <PageTransition>
      <TestComponent color="200" />
      <TestComponent color="400" />
      <Macbook />
      <Services />
      <TestComponent color="300" />
      <TestComponent color="300" />
    </PageTransition>
  );
}
