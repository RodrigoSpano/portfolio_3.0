import React from 'react'
import AboutHeader from './subcomps/AboutHeader'
import Navbar from '../navbar/Navbar'
import SocialMedia from '../infoSection/subcomps/SocialMedia'

const AboutmeContainer: React.FC = () => {
  return (
    <div className='flex flex-col sm:h-[800px] lg:justify-around lg:w-1/2 gap-10 lg:gap-0 px-10 sm:px-0'>
      <div className='flex flex-col lg:gap-10'>
        <AboutHeader />
        <Navbar />
      </div>
      <SocialMedia />
    </div>
  )
}

export default AboutmeContainer