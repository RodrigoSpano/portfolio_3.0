import React from 'react'

const MiniFooter = () => {
  return (
    <div className='flex flex-col font-kanit opacity-70 gap-4 font-medium'>
      <div className='flex flex-col'>
        <p className='translate-y-[4px]'>from</p>
        <p className='font-bold text-xl text-black drop-shadow-lg tracking-wider shadow-black'>Argentina</p>
      </div>

      <span>Coded in Visual Studio Code by yours truly. Built with <strong className='font-bold text-black drop-shadow-lg'>Vite.js</strong> and <strong className='font-bold text-black drop-shadow-lg'>Tailwind CSS</strong> , deployed with <strong className='font-bold text-black drop-shadow-lg'>Vercel</strong>. All text is set in the Kanit typeface</span>
    </div>
  )
}

export default MiniFooter