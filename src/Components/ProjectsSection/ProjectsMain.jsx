import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

const projects = [
    {
        name: 'Weather forecasting app using APIs',
        year: 'March-2024',
        align: 'right',
        image: '../../public/images/website-img-1.jpg',
        link: '#',
    },
    {
        name: 'Todo List Application ',
        year: 'March-2024',
        align: 'left',
        image: '../../public/images/website-img-2.webp',
        link: '#',
    },
    {
        name: 'Employee Management Website',
        year: 'March-2024',
        align: 'right',
        image: '../../public/images/website-img-3.jpg',
        link: '#',
    },
    {
        name: 'e-Commerce Website',
        year: 'March-2024',
        align: 'left',
        image: '../../public/images/website-img-4.jpg',
        link: '#',
    },
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
    <motion.div
        variants = {fadeIn('up', 0.2)}
        initial='hidden'
        whileInView='show'
        viewport = {{once: false, amount:0}}>
            <ProjectsText/>
        </motion.div>
        
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item, index) => {
                return <SingleProject key={index} name={item.name} year={item.year} align={item.align} image={item.image} />
            })}
        </div>
    </div>
  )
}

export default ProjectsMain