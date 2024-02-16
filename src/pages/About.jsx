import React from 'react'
import Heder from '../components/Heder'

const About = () => {
  return (
    <>
      <Heder />
      <div className='p-5 text-teal-200 h-screen bg-slate-900'>
        
        <p className=' text-xl md:text-6xl pt-32'>About:</p>

      <div className=' space-y-5 pt-12'><p className=''>
       hey yo! guys I am Abhiram, so i've recently graduated In Bachelors of Electrical And Electronics engineering.
      </p>
      <p className=''>
        Am into Web Dev, and linux, actually i do a lot of linux ig! if you ask why? idk i just like linux more than window and here is one of my rice <a className=' underline' href="https://www.reddit.com/r/unixporn/comments/1aqir6d/hyprland_kanagawa_colorscheme_is_op/?utm_source=share&utm_medium=web2x&context=3"> click here</a> to view it...</p>
      
      <p>
         you can visit my GitHub to check all that things i do and i work on.. <a href="https://github.com/TheDummyUser">  </a>
      </p>
      
      </div>
      </div>
    </>
  )
}

export default About