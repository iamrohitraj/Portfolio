import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div 
      variants = {fadeIn('left', 0.2)}
      initial='hidden'
      whileInView='show'
      viewport = {{once: false, amount:0}}
      className='h-full flex items-center justify-center'>
      <img className='max-h-[450px] width-auto'
      src='../../public/images/icon_profile.png'/>
      <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
      <PiHexagonThin  className='md:h-[90%] sm:h-[120%] min-h-[350px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]'  />
      </div>
    </motion.div>
  )
}

export default HeroPic;