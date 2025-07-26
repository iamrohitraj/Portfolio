import React from 'react'
import SingleExperience from './SingleExperience'
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';


const experiences = [
  {
    job: '1',
    company: 'none',
    date: '2024-2025',
    responsibilities: [
      'Implementing.', 
      'Reusable Componenets.', 
      'Participation in large scale applications.', 
      'Wforking on the perfomance of web applications.',
      'Generating nes ideas for better user experience.',
    ],
  },
  {
    job: '2',
    company: 'none',
    date: '2024-2025',
    responsibilities: [
      'Implementing.', 
      'Reusable Componenets.', 
      'Participation in large scale applications.', 
      'Wforking on the perfomance of web applications.',
      'Generating nes ideas for better user experience.',
    ],
  },
  {
    job: '3',
    company: 'none',
    date: '2024-2025',
    responsibilities: [
      'Implementing.', 
      'Reusable Componenets.', 
      'Participation in large scale applications.', 
      'Wforking on the perfomance of web applications.',
      'Generating nes ideas for better user experience.',
    ],
  },
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
      {experiences.map((experience, index) => {
        return <>
          <SingleExperience key= {index} 
          experience = {experience}
          />
          {
            index<2? (
              <motion.div
              variants = {fadeIn('right', 0.2)}
              initial='hidden'
              whileInView='show'
              viewport = {{once: false, amount:0}}>
              <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
              </motion.div>) : ''
          }
        </>
      })}
    </div>
  )
}

export default AllExperience