import React from 'react'
import { Link } from 'react-router-dom'
const Heder = () => {
  return (
    <div className='bg-slate-900 border-b-4
     text-yellow-300
      p-5 
      justify-around 
      border-red-300
    '>
      
        <div className='flex justify-end space-x-6'>
        <p className=''> <Link to="/">Home</Link></p>
    <p> <Link to='/about'> About</Link></p>
    <p> <Link to='/projects'> Projects</Link></p>
    <p><Link to='/contactme'>Contact Me</Link></p>


</div>
</div>
    
  )
}

export default Heder