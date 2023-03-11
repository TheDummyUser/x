import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom"

const Projects = () => {
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
      <div className='md:flex place-items-center md:space-x-3'>
        <span className='md:text-base text-xs md:inline-flex hidden'>{showGibberish ? text : ''} </span>
        <span className='md:text-base text-xs'>{showGibberish ? text : ''} </span>
        <span className='md:text-5xl text-lg underline'>Projects</span> 
        <span className='md:text-base text-xs'> {showGibberish ? text : ''}</span>
        <span className='md:text-base text-xs md:inline-flex hidden'> {showGibberish ? text : ''}</span>
        </div>
      <div>
        <p className='mx-10 grid'>
          my side projects i've worked on upuntil now and still working: <br />
          <span className='mt-5'>
            <a href="https://github.com/grim909/TheNewsApp" className='grid'>
              The News App:<br />
              <span className='text-center mt-2'>made out using vite, reactjs, tailwindCss and NewsApi</span>
              </a>
          </span>
          <span className='mt-5'>
            <a href="https://github.com/grim909/hackernews" className='grid'>
              HackerNews:<br />
              <span className='text-center mt-2'>news app made up using hackernews api, reactjs and tailwindCss</span>
              </a>
          </span>
          <span className='mt-5'>
            <a href="https://github.com/grim909/hackernews" className='grid'>
              X:<br />
              <span className='text-center mt-2'>the portfolio site</span>
              </a>
          </span>
        </p>
      </div>
      <div className='flex md:space-x-96 space-x-6 md:text-base place-items-center'>
        <p><Link to={'/'}>Home</Link></p>
        <p><Link to={'/about'}>About Me</Link></p>
        <p><Link to={'/contactme'}>Contact Me</Link></p>
      </div>
    </div>
  )
}

export default Projects;
