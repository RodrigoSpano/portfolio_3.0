import React from 'react'
import AboutmeContainer from '../aboutMe/AboutmeContainer'
import ScrollSectionContainer from '../scrollSection/ScrollSectionContainer'

const InfoSection: React.FC = () => {
  return (
    <div id='aboutme' className='min-h-screen flex flex-col lg:flex-row items-start justify-center max-w-[1030px] px-10 lg:px-0 '>
      <AboutmeContainer />
      <ScrollSectionContainer />
    </div>
  )
}

export default InfoSection