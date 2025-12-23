import { useState, useRef , Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points , PointMaterial , Preload } from "@react-three/drei";
import { isWebGLSupported } from '../../utils/webgl';

import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref= useRef();
  // Sphere Number 
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000);
    for (let i = 0; i < 5000; i += 3) {
      const r = Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  // Rotate the Stars function
  useFrame(( state, delta) =>{
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15

  });
  return (
    <group rotation={[0,0,Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled  {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
const StarsCanvas = () => {
  if (!isWebGLSupported()) {
    return null; // Don't render stars if WebGL isn't supported
  }

  return(
    <div
      className="w-full h-auto absolute inset-0 z-[-1]"
    >
      <Canvas
        camera={{position: [0,0,1]}}
        gl={{
          preserveDrawingBuffer: true,
          antialias: false,
          alpha: true
        }}
      >
        <Suspense fallback={null}>
          <Stars/>
        </Suspense>

        <Preload all/>
      </Canvas>
    </div>
  );
};
export default StarsCanvas