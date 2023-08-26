import React from 'react'
import NameContainer from './subcomps/NameContainer'
import TogglesContainer from './subcomps/TogglesContainer'

const HeaderContainer: React.FC = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center select-none relative'>
      <TogglesContainer />
      <NameContainer />
    </div>
  )
}

export default HeaderContainer