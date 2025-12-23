import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload,useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'
import { isWebGLSupported } from '../../utils/webgl'
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf');
  return (
    <primitive
       object={earth.scene}
       scale={2.5}
       position-y={0}
       rotation-y={0}
    />
  )
}

const EarthCanvas = () => {
  if (!isWebGLSupported()) {
    return (
      <div className='flex justify-center items-center h-full'>
        <p className='text-white'>WebGL is not supported on this device</p>
      </div>
    );
  }

  return (
    <Canvas
      key='earth-canvas'
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false, alpha: true, antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;