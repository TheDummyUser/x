import React from 'react'
const Contactme = () => {
  return (
    <div id='contactme' className=' bg-li h-screen font-mono m-10 space-y-16'>      
    <div className='text-2xl md:text-5xl underline'>
        Contact-Me:
      </div>
      <div className='text-lg md:text-3xl ml-16'>
        <a className='underline' href="mailto:abhinukala2002@gmal.com">mail-me</a>
      </div>

      <div className='space-y-6'>
        <span className='underline'>social media accounts:</span>
        <div className='ml-16 md:ml-40 space-y-6'>
          <div><span className='underline'><a href="https://www.instagram.com/not.fo.u.nd__404/">Instagram</a></span></div>
          <div><span className='underline'><a href="https://github.com/grim909/">github</a></span></div>
          <div><span className='underline'><a href="https://www.linkedin.com/in/nukala-abhiram-0a1828255/">LinkedIn!</a></span></div>
        </div>
      </div>

      <div className=' ml-20'>
        this Contact me page is temporary, gonna add a actual contact form into the page....
      </div>
    </div>
  )
}

export default Contactme