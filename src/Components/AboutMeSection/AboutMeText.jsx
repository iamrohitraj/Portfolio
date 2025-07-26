import React from 'react'
import { Link } from 'react-scroll';

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>A passionate learner diving into web development, eager to master both front-end and back-end technologies. They consistently explore HTML, CSS, JavaScript, frameworks like React and Node.js, and databases. Committed to building real-world projects, solving challenges, and staying updated, they aim to become a skilled full stack web developer through dedication and practice.</p>
        <Link
          to="projects"         // 👈 This should match the id of your target section
          smooth={true}
          duration={500}
          offset={-70}         // Optional: adjust for sticky headers if any
          >
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>
        My Projects
        </button>
      </Link>
        {/* <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center  mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>My Projects</button> */}
    </div>
  )
}

export default AboutMeText;