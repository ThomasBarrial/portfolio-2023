import TestComponent from "@/components/about/TestComponent";
import Services from "@/components/homePage/Services";

export default function page() {
  return (
    <>
      <TestComponent color="200" />
      <TestComponent color="400" />
      <Services />
      <TestComponent color="300" />
      <TestComponent color="300" />
    </>
  );
}
