import React from 'react'
import AboutHeader from './subcomps/AboutHeader'
import SocialMedia from '../infoSection/subcomps/SocialMedia'

const AboutmeContainer: React.FC = () => {
  return (
    <div className='flex flex-col h-[400px] lg:h-[800px] justify-center lg:justify-start lg:w-1/2 gap-10 lg:pt-10'>
        <AboutHeader />
        <SocialMedia />
    </div>
  )
}

export default AboutmeContainer