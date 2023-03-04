import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [text, setText] = useState('1101 0011 1221 3002 12345 4456');
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
    <div className='grid h-screen place-items-center m-0 p-0 font-mono bg-L88304E'>
      <span className='flex mt-0 space-x-2 text-white md:text-sm text-xs text-center'>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      
      </span>
      <div className='m-0 p-0 md:text-5xl text-white text-2xl text-center'>
        <p>what are you looking at?</p>
        <p className='block text-end'>visit the <Link to={'/about'}> <span className="underline">about</span> page.</Link> </p>
      </div>
      <span className='flex mt-0 space-x-2 text-white md:text-sm text-xs text-center'>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      <span>{showGibberish ? text : ''}</span>
      </span>
    </div>
  )
}

export default Home;
