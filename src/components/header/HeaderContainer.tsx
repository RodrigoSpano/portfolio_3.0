import React from 'react'
import NameContainer from './subcomps/NameContainer'
import TogglesContainer from './subcomps/TogglesContainer'
import {BiSolidHandDown} from 'react-icons/bi'
import {motion} from 'framer-motion'

const HeaderContainer: React.FC = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center select-none relative'>
      <TogglesContainer />
      <NameContainer />
      <motion.span className='dark:text-white opacity-75 text-2xl rotate-180 absolute bottom-5 cursor-pointer'  animate={{
        y: [0,-50,0,-40,0],
      }}
      transition={{
        delay: 3,
        repeatDelay:3,
        duration: 1,
        repeat: Infinity,
        ease: "circIn",
      }}>
      <BiSolidHandDown />
      </motion.span>
    </div>
  )
}

export default HeaderContainer