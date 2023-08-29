import React from 'react'
import AboutmeContainer from '../aboutMe/AboutmeContainer'
import ScrollSectionContainer from '../scrollSection/ScrollSectionContainer'

const InfoSection: React.FC = () => {
  return (
    <div id='aboutme' className='min-h-screen flex flex-col lg:flex-row items-start justify-center max-w-6xl mx-10 pb-10 '>
      <AboutmeContainer />
      <ScrollSectionContainer />
    </div>
  )
}

export default InfoSection