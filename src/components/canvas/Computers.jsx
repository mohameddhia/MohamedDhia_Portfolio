import React  from 'react'

import { Suspense , useEffect, useState , useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls , Preload, useGLTF , useAnimations } from "@react-three/drei"
import CanvasLoader from  '../Loader'
import { isWebGLSupported } from '../../utils/webgl'

import { LoopRepeat } from 'three'; // Import loop mode from three.js
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./robot_animation/scene.gltf");
  const { actions } = useAnimations(computer.animations, computer.scene);

  useEffect(() => {
    if (actions && computer.animations.length) {
      const firstAction = actions[Object.keys(actions)[0]];
      if (firstAction) {
        firstAction.setLoop(LoopRepeat, Infinity);
        firstAction.play();
        firstAction.paused = false;
      }
    }
  }, [actions, computer.animations]);

  return (
    <mesh>
      <ambientLight intensity={1.5} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[0, -1, 0]} intensity={1.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 2.7}
        position={isMobile ? [0, -3.25, 0] : [0, -3.25, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

import { useInView } from "react-intersection-observer";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (!isWebGLSupported()) {
    return (
      <div className='flex justify-center items-center h-full'>
        <p className='text-white'>WebGL is not supported on this device</p>
      </div>
    );
  }

  return (
    <div ref={ref} className='w-full h-full'>
      {inView && (
        <Canvas
          key='computers-canvas'
          frameloop='always'
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: false, alpha: true, antialias: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default ComputersCanvas