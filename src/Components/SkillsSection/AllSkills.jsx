import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiUipath } from "react-icons/si";
import SingleSkills from './SingleSkills';
import { SiRedux } from "react-icons/si";
import { motion } from 'framer-motion';
import { fadeIn } from '../../FramerMotion/variants';

const skills = [{
    skill: 'HTML',
    icon: FaHtml5,
},
{
    skill: 'CSS',
    icon: FaCss3Alt,
},
{
    skill: 'Tailwind',
    icon: RiTailwindCssFill,
},
{
    skill: 'JavaScript',
    icon: IoLogoJavascript,
},
{
    skill: 'React',
    icon: FaReact,
},
{
    skill: 'Redux',
    icon: SiRedux,
},
{
    skill: 'AWS',
    icon: FaAws,
},
{
    skill: 'UI Path',
    icon: SiUipath,
},
]

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <motion.div
                    variants = {fadeIn('up', `0.${index}`)}
                    initial='hidden'
                    whileInView='show'
                    viewport = {{once: false, amount:0.7}}>
                    <SingleSkills 
                      key={index} 
                      text={item.skill} 
                      imgSvg={<IconComponent/>} />
                    </motion.div>
                    
                );
            })}
        </div>
    </div>
  )
}

export default AllSkills