import React from 'react'

const Projects = () => {
  return (
    <div id='projects' className='h-screen ml-5 font-mono'>
    <div className='font-mono underline mt-10 ml-5 text-5xl mb-10'>projects:</div>
    <div className='text-2xl ml-10'>
    <span className='underline'>project</span> - 1 :
    </div>
    <div className='ml-16 mt-5 text-xl'>
      a blog app, created using react and Firebase. <br />
     <a className=' underline' href="https://blog-app-five-alpha.vercel.app">click here</a> to visit the site...
    </div>
     <div className='center flex mt-10 ml-20  text-3xl lg:text-5xl md:text-5xl'>
      more projects are on their way...
    </div>
    </div>
  )
}

export default Projects