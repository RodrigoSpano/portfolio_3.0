import React from 'react'
import AboutmeContainer from '../aboutMe/AboutmeContainer'

const InfoSection: React.FC = () => {
  return (
    <div id='aboutme' className='min-h-screen flex items-center justify-center max-w-[1030px]'>
      <AboutmeContainer />
    </div>
  )
}

export default InfoSection