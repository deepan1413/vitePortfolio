import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Stars,
  Float,
  Text,
  ScrollControls,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Scene } from "three";
import KameHouse from "../public/Model/KameHouse";
import Ocean from "../public/Model/Ocean";

import MyCameraScroll from "./MyCameraControll";
import ScrollHelper from "./components/Scrollhelper";
export default function App() {
  const { nodes } = useGLTF("./Model/scene.glb");
  return (
    <>
      <Ocean />

      <Stars background radius={300} depth={10} count={10000} factor={5} fade />

      <directionalLight position={[10, 2, 3]} intensity={5} />
      <directionalLight position={[-10, -2, -3]} intensity={5} />

      <Float rotationIntensity={1}>
        <Text
          position-y={18}
          rotation-y={0.48 * Math.PI}
          curveRadius={-50}
          fontSize={5}
        >
          {`    Deepan\nKameHouse`}
        </Text>
      </Float>
      <KameHouse />
     <ScrollControls pages={10} damping={2}>
        {/* <OrbitControls
          enableZoom={true}
          onChange={(e) => {
            console.log("Camera Position:", e.target.object.position);
            console.log("Camera Rotation:", e.target.object.rotation);
          }}
        /> */}
        <MyCameraScroll nodes={nodes} />
      </ScrollControls>
      <ScrollHelper />
    </>
  );
}
