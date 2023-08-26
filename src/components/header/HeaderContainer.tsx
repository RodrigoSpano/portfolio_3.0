import React from 'react'
import NameContainer from './subcomps/NameContainer'

const HeaderContainer: React.FC = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center relative'>
      <NameContainer />
    </div>
  )
}

export default HeaderContainer