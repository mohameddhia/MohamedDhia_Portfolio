import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points , PointMaterial , Preload } from "@react-three/drei";
import { isWebGLSupported } from '../../utils/webgl';

// import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef();
  // Sphere Number
  const [sphere] = useState(() => {
    const numStars = 5000;
    const positions = [];
    while (positions.length < numStars) {
      const r = Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      if (
        Number.isFinite(x) &&
        Number.isFinite(y) &&
        Number.isFinite(z)
      ) {
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  });

  // Rotate the Stars function
  useFrame(( state, delta) =>{
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15

  });
  // Set initial rotation using ref
  const groupRef = useRef();
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.PI / 4;
    }
  }, []);
  return (
    <group ref={groupRef}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
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