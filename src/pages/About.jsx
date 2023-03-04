import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"

const About = () => {
  const [text, setText] = useState('3002 12345 4456');
  const [showGibberish, setShowGibberish] = useState(true);

  useEffect(() => {
    const gibberishTimer = setInterval(() => {
      const newText = [...text];
      for (let i = 0; i < newText.length; i++) {
        const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        if (newText[i] !== ' ') {
          newText[i] = randomChar;
        }
      }
      setText(newText.join(''));
    }, 100); // Set the time in milliseconds for how often the letters should change.

    const textTimer = setTimeout(() => {
      setShowGibberish(false);
      clearInterval(gibberishTimer);
    }, 5000); // Set the time in milliseconds for how long the gibberish text should be displayed.

    return () => {
      clearInterval(gibberishTimer);
      clearTimeout(textTimer);
    };
  }, [text]);

  return (
    <div className='grid place-items-center h-screen bg-DD311D3F text-white font-mono'>
      <div className=' space-x-6'><span className='md:text-base tetx-xs'>{showGibberish ? text : ''}</span><span className='underline md:text-5xl text-3xl'>AboutMe.</span><span className='md:text-sm text-xs'>{showGibberish ? text : ''}</span></div>
      <div className='m-0 p-0 md:text-3xl text-lg'>
        <p className='text-center'>"I am Abhiram.</p>
        <p>I am final year Electrical Engineering student,
         <span className='text-end'> I like ethical hacking & web development." </span>
        </p>
        <p className='m-10 text-center'>
          visit the below pages too..
          <br />
          <p className='mt-5 text-base'>{showGibberish ? text : ''}</p> 
          <p className=' text-base'>{showGibberish ? text : ''}</p>
        </p>
        
      </div>
      <footer className='flex space-x-12 lg:space-x-96 underline lg:text-3xl'>
        <p><Link to={'/projects'}>projects</Link></p>
        <p><Link to={'/'}>home</Link></p>
        <p><Link to={'/contactme'}>contact me</Link></p>
      </footer>
    </div>
  )
}

export default About
