import React from 'react'
import NameContainer from './subcomps/NameContainer'
import TogglesContainer from './subcomps/TogglesContainer'
import {BiSolidHandDown} from 'react-icons/bi'
import { Link } from 'react-scroll'

const HeaderContainer: React.FC = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center select-none relative'>
      <TogglesContainer />
      <NameContainer />
        <Link smooth={true} duration={400} to='aboutme' className='dark:text-white opacity-75 text-3xl rotate-180 absolute bottom-5 cursor-pointer animate-bounce'>
          <BiSolidHandDown />
        </Link>
    </div>
  )
}

export default HeaderContainer