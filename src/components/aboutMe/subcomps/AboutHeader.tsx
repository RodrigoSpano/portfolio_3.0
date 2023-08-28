import React from 'react'

const AboutHeader = () => {
  return (
    <div className='gap-3 flex flex-col'>
      <h3 className='font-bold font-kanit md:text-6xl text-[#1f1c19] dark:text-[#cdbead] text-transparent bg-clip-text tracking-tighter'>Rodrigo Spano</h3>
      <span className=' text-xl text-[#6c6761] dark:text-[#ADA79f]'>Software Developer</span>
      <p className='max-w-sm text-[#6c6761] dark:text-[#ADA79f] opacity-90'>I develop accessible products and features for the web.</p>
    </div>
  )
}

export default AboutHeader