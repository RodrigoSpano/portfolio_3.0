import React from 'react'
import AboutHeader from './subcomps/AboutHeader'
import Navbar from '../navbar/Navbar'
import SocialMedia from '../infoSection/subcomps/SocialMedia'

const AboutmeContainer: React.FC = () => {
  return (
    <div className='flex flex-col h-[400px] lg:h-[800px] justify-center lg:justify-between lg:w-1/2 gap-10 lg:gap-0 lg:pt-10'>
      <div className='flex flex-col lg:gap-10'>
        <AboutHeader />
        <Navbar />
      </div>
      <SocialMedia />
    </div>
  )
}

export default AboutmeContainer