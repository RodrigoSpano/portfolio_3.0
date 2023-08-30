import React from 'react'
import AboutHeader from './subcomps/AboutHeader'
import SocialMedia from '../infoSection/subcomps/SocialMedia'
import Contact from './subcomps/Contact'

const AboutmeContainer: React.FC = () => {
  return (
    <div className='flex flex-col h-[400px] lg:h-[800px] justify-center lg:justify-start lg:w-1/2 gap-10 lg:pt-10'>
        {/* <div className='flex flex-col'> */}
          <AboutHeader />
          <SocialMedia />
        {/* </div> */}
        <Contact />
    </div>
  )
}

export default AboutmeContainer