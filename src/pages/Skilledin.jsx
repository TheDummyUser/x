import React from 'react'

const Skilledin = () => {
  return (
    <div id='skils' className='h-screen font-mono grid place-content-center'>
      <div className='ml-10 underline text-3xl md:text-5xl'>Skilled In:</div>
      <div className=' mt-10 ml-20 space-y-6'>
        <div>html, css, javascript.</div>
        <div>react</div>
        <div>python,... etc.</div>
        <div>additional skills:</div>
        <div>WireShark, nmap, arp-scan, aircack-ng, metasploit, Hydra, sqlMap...</div>
      </div>
    </div>
  )
}

export default Skilledin