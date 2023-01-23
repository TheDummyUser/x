import React from 'react'
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi"
import { Link } from 'react-scroll'
const Aboutme = () => {
  return (
    <div id='about' className='grid place-content-center h-screen'>
      <div className='text-3xl md:text-6xl font-mono ml-10 mb-0 mr-0 underline'>About Me:</div>
      <div className='md:text-xl mt-16 ml-14 font-mono'>
        "Hi!, I'm Abhiram. I'm an aspiring web developer working to master the full stack of web development. This is my personal portfolio site. It's something I'm working on and continue to make it better. Academically, I'm in my final year of my engineering degree and expecting to graduate in 2023."
      </div>

    </div>
  )
}

export default Aboutme
