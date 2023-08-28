import React from 'react'
import AboutHeader from './subcomps/AboutHeader'
import Navbar from '../navbar/Navbar'

const AboutmeContainer: React.FC = () => {
  return (
    <div className='flex flex-col gap-10'>
      <AboutHeader />
      <Navbar />
    </div>
  )
}

export default AboutmeContainer