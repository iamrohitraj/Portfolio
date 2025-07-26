import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';


const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
      <motion.h2  
      variants = {fadeIn('down', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport = {{once: false, amount:0}}
      className=' md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-[#9F7AEA]  '> ROHIT RAJ </motion.h2>
      <motion.h1 
      variants = {fadeIn('right', 0.4)}
      initial='hidden'
      whileInView='show'
      viewport = {{once: false, amount:0}}
      className=' lg:text-2xl sm:text-x uppercase text-[#B794F4]'> FRONT-END WEB DEVELOPER </motion.h1>
      <motion.p 
      variants = {fadeIn('up', 0.6)}
      initial='hidden'
      whileInView='show'
      viewport = {{once: false, amount:0}}
      className='text-lg mt-4 text-white'>A highly motivated individual driven by curiosity and creativity, 
      <br/>
      eager to master web development and build impactful, 
      <br/>
      user-friendly digital experiences.</motion.p>
    </div>
  )
}

export default HeroText