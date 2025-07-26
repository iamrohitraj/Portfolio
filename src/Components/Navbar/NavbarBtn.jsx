// import React from 'react'
// import { LuArrowDownRight } from "react-icons/lu";

// const NavbarBtn = () => {
//   return (
//     <button className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex tems-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
//         My CV. 
//         <div className='sm:hidden md:block'>
//         <LuArrowDownRight />
//         </div>
//     </button>
//   )
// }

// export default NavbarBtn


import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const handleCVClick = () => {
    window.open('../../public/myresume/resume.pdf', '_blank'); // Make sure this file is in the `public/` folder
  };

  return (
    <button
      onClick={handleCVClick}
      className='px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'
    >
      My CV
      <div className='sm:hidden md:block'>
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
