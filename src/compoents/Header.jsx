import React, {Component} from 'react'
import {Link, animateScroll} from 'react-scroll'
const Header = () => {
  return (
    <div className=' fixed w-full font-mono text-xl p-5 flex justify-center sm:justify-between md:justify-between h-18  bg-light'>
    <div id='/' className='hidden md:flex cursor-none'>Abhiram - portfolio</div>
    <div className='cursor-pointer flex space-x-6 text-sm md:text-xl lg:text-xl underline '>
      <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300'>About Me</Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300'>Projects</Link>
      <Link activeClass="active" to="skils" spy={true} smooth={true} offset={-100} duration={500} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300'>Skilled In</Link>
      <Link activeClass="active" to="contactme" spy={true} smooth={true} offset={-100} duration={500} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300'>Contact Me</Link>
    </div>
    </div>
  )
}

export default Header