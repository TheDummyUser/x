import React from 'react'
import Aboutme from '../pages/Aboutme'
import Contactme from '../pages/Contactme'
import Projects from '../pages/Projects'
import Skilledin from '../pages/Skilledin'
const Newbody = () => {
  return (
    <div className='bg-minimini'>
      <div className='grid place-items-center h-screen text-8xl'>
      <div><span className='font-mono transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300'>Welcome</span><br /> &nbsp;<span className='uppercase font-semibold text-7xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300'>to my Portfolio</span><br /> &nbsp;&nbsp;<span className='font-mono transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 hover:text-Dark duration-300'>site...</span></div>
    </div>
    <Aboutme />
    <Projects />
    <Skilledin />
    <Contactme />
    </div>
  )
}

export default Newbody