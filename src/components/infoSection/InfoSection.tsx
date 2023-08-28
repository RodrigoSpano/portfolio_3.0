import React from 'react'
import AboutmeContainer from '../aboutMe/AboutmeContainer'
import ScrollSectionContainer from '../scrollSection/ScrollSectionContainer'

const InfoSection: React.FC = () => {
  return (
    <div id='aboutme' className='min-h-screen flex flex-col lg:flex-row items-center lg:items-start justify-center max-w-[1030px] '>
      <AboutmeContainer />
      <ScrollSectionContainer />
    </div>
  )
}

export default InfoSection