import React  from 'react'

import { Suspense , useEffect, useState , useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls , Preload, useGLTF , useAnimations } from "@react-three/drei"
import CanvasLoader from  '../Loader'

import { LoopRepeat } from 'three'; // Import loop mode from three.js
const Computers = ({ isMobile}) => {


  const computer = useGLTF("./robot_animation/scene.gltf");

  // Hook to play animation
  const { actions } = useAnimations(computer.animations, computer.scene);
  console.log(actions , 'aCtions sss')
  console.log(computer.animations.length , "animation Length")
  useEffect(() => {
    if (actions && computer.animations.length) {
      // Get the first action (animation)
      const firstAction = actions[Object.keys(actions)[0]]; // Play the first animation
      // Log the action and check if it's playing
      console.log(computer.animations.length , "animation Length")
      // Set the animation to loop indefinitely
      firstAction.setLoop(LoopRepeat, Infinity);
      // Ensure the animation plays
      firstAction?.play();

      // For debugging: log when the animation is playing
      firstAction.paused = false;

      console.log(`Animation playing: ${firstAction.isRunning()}`); // Check if it's running
      
      // Optional: return a cleanup function to stop the animation when the component unmounts
      return () => {
        firstAction.stop(); // Stop the animation on unmount
      };
    }
  }, [[actions, computer.animations.length]]);

  return (
      <mesh>
      <hemisphereLight intensity={Math.PI} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={ isMobile ? 1 : 2.7}
        position={isMobile ? [0, -2, 0] : [0, -3.25, 0]}
        rotation={[0, 0, 0]}

      />
    </mesh>
  )
} 

const ComputersCanvas=  () => {

  const [isMobile , setIsMobile] = useState(false);

  useEffect(() => {
    // Add Event Listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    // Set the initial value of the isMobile state variable
    setIsMobile(mediaQuery.matches);
    // Define a callback function to handle changes of the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    // Add the Callback function as a listener for changes to the media query 
    mediaQuery.addEventListener('change' , handleMediaQueryChange);
    // Remove the Listener when the component is unmounted 
    

    return () => {
      mediaQuery.removeEventListener('change' , handleMediaQueryChange);
    }

  }, [])
  return(
    <Canvas frameloop="always"
    shadows
    
    camera={{position: [20 , 2  , 5] , fov: 25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback= {<CanvasLoader/>}>
        <OrbitControls 
          enableZoom= {false}
          maxPolarAngle={Math.PI / 2}  
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas