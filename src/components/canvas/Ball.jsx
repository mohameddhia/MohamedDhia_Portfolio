import React , {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  Texture,
  useTexture
} from '@react-three/drei';
import { isWebGLSupported } from '../../utils/webgl';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const decal = useTexture(props.imgUrl);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[0, 0, 1]} intensity={0.8} />
      <mesh castShadow receiveShadow scale={2.75} dispose={null}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          metalness={0.1}
          roughness={0.5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  if (!isWebGLSupported()) {
    return (
      <div className='flex justify-center items-center h-full'>
        <p className='text-white text-sm'>WebGL not supported</p>
      </div>
    );
  }

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false, alpha: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas