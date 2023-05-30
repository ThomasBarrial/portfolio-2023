import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

function Name() {
  const { viewport } = useThree();
  return (
    <Html position={[-0.85, 0.3, 0]} className="">
      <div className="font-Humane">
        <h1
          className="text-[15rem]"
          style={{
            lineHeight: 1,
          }}
        >
          BARRIAL
        </h1>
        <h1
          className=" text-[30rem]"
          style={{
            lineHeight: 0.7,
          }}
        >
          THOMAS
        </h1>
      </div>
      <h2>CREATIVE DEVELOPER & DESIGNER</h2>
    </Html>
  );
}

export default Name;
