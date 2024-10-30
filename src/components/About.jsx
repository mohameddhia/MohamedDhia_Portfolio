import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../contants'
import {fadeIn , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ( {icon , title , index} ) => {
  return(
    <Tilt
      className= 'xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            options = {{
              max: 45,
              scale : 1,
              speed : 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12
            min-h[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} 
            className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>

      </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className= { styles.sectionHeadText}>OVerview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '' , 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      Software Engineer with over 6 years of experience,  
      including 4 years in blockchain. 
      As CTO and co-founder of Halamint and Block Plus Plus, 
      I lead innovative projects in the sports industry powered by blockchain technology. 
      I specialize in smart contract development and Web3 solutions, and I'm passionate about teaching emerging technologies. 
      Fluent in French, English, and Arabic, I am eager to take on new challenges in the blockchain sector.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service , index) =>(
          <ServiceCard key={service.title} index={index}{...service} /> 
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About , 'about')