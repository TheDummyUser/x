import React from 'react'
import {Link} from "react-router-dom"
const Contactme = () => {
  return (
    <div>
      <div className='grid place-items-center h-screen bg-DD311D3F text-white'>
      <div className='text-5xl'>contact me</div>
      <div className='m-0 p-0 text-3xl'>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </div>
      <footer className='flex space-x-12 md:space-x-60 lg:space-x-96'>
        <p><Link to={'/projects'}>projects</Link></p>
        <p><Link to={'/'}>home</Link></p>
        <p><Link to={'/about'}>about</Link></p>
      </footer>
    </div>
    </div>
  )
}

export default Contactme
