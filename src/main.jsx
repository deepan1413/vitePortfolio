import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import {
  Stars,
  Float,
  Text,
  ScrollControls,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import "./index.css";
import App from "./App.jsx";
import Loader from "./components/Loader.jsx";

const isMobile = () => {
  return window.innerWidth <= 1000 && window.innerHeight <= 800;
};

const fovForMobile = 100;
const fovForPc = 45;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Canvas
          style={{ background: "black" }}

      camera={{
        fov: isMobile() ? fovForMobile : fovForPc,
        near: 0.1,
        far: 1000,
        position: [52, 7, 12],
      }}
    >
       
             
      <Suspense fallback={<Loader />}>
      {/* <Loader/> */}
        <App />
      </Suspense>
    </Canvas>
  </StrictMode>
);
