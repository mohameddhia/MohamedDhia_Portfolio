import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../contants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const MAX_TECH_CONTEXTS = 8;
let globalContextCount = 0;
const observers = new Set();
let notificationPending = false;

// Decoupled notification system to prevent synchronous recursion (Maximum call stack issues)
const notifyObservers = () => {
  if (notificationPending) return;
  notificationPending = true;
  
  queueMicrotask(() => {
    notificationPending = false;
    observers.forEach((update) => update());
  });
};

const TechCard = ({ icon, name }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "150px",
  });

  const [show3D, setShow3D] = useState(false);
  const isAssigned = useRef(false);

  useEffect(() => {
    const updateAssignment = () => {
      if (inView) {
        if (!isAssigned.current && globalContextCount < MAX_TECH_CONTEXTS) {
          isAssigned.current = true;
          globalContextCount++;
          setShow3D(true);
        }
      } else {
        if (isAssigned.current) {
          isAssigned.current = false;
          globalContextCount--;
          setShow3D(false);
          notifyObservers();
        }
      }
    };

    observers.add(updateAssignment);
    updateAssignment();

    return () => {
      observers.delete(updateAssignment);
      if (isAssigned.current) {
        isAssigned.current = false;
        globalContextCount--;
        notifyObservers();
      }
    };
  }, [inView]);

  return (
    <div ref={ref} className='w-28 h-28 cursor-pointer group relative'>
      {/* Decorative background glow */}
      <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100' />
      
      {show3D ? (
        <BallCanvas icon={icon} />
      ) : (
        <div className='w-full h-full flex items-center justify-center bg-tertiary/40 backdrop-blur-md border border-white/10 rounded-full shadow-xl hover:shadow-purple-500/20 hover:scale-110 transition-all duration-500 p-5'>
          <img
            src={icon}
            alt={name}
            className='w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
          />
        </div>
      )}
      
      {/* Label on hover */}
      <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
        <p className='text-secondary text-[12px] font-medium whitespace-nowrap bg-black/50 px-2 py-1 rounded-md backdrop-blur-sm'>
          {name}
        </p>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 md:gap-14 max-w-7xl mx-auto mt-14'>
        {technologies.map((technology) => (
          <TechCard 
            key={technology.name} 
            icon={technology.icon} 
            name={technology.name} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");