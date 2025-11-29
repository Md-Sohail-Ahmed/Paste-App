import React from 'react'
import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <div className='flex w-full sm:w-[80%] md:w-[70%] lg:w-[60%] justify-center items-center mx-auto mt-20 h-16 rounded-xl gap-4 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 bg-blue-500 shadow-2xl '>
      <div className='font-bold text-white text-xl sm:text-2xl  '>
        <p>PasteApp</p>
      </div>
      <div className='text-white flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 '>
        <NavLink to="/" className={({isActive})=>isActive?'font-bold':''}>Home</NavLink>
        <NavLink to="/pastes" className={({isActive})=>isActive?'font-bold':''}>My Paste</NavLink>
      </div>
      
    </div>
  )
}

export default NavBar
