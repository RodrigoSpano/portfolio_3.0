import React from 'react'
import NameContainer from './subcomps/NameContainer'
import TogglesContainer from './subcomps/TogglesContainer'
import {LuPointer} from 'react-icons/lu'
import {motion} from 'framer-motion'

const HeaderContainer: React.FC = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center select-none relative'>
      <TogglesContainer />
      <NameContainer />
      <motion.span className='dark:text-white opacity-75 text-2xl rotate-180 absolute bottom-5 cursor-pointer' whileHover={{scale: 1.3}} animate={{rotate: 180}} whileTap={{ scale: [1,2]}}>
      <LuPointer />
      </motion.span>
    </div>
  )
}

export default HeaderContainer