import React from 'react'
import NameContainer from './subcomps/NameContainer'
import TogglesContainer from './subcomps/TogglesContainer'
import {BiSolidHandDown} from 'react-icons/bi'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'

const HeaderContainer: React.FC = () => {
  return (
    <div className='min-h-[100vh] flex flex-col items-center justify-center select-none relative'>
      <TogglesContainer />
      <NameContainer />
      <motion.div className='dark:text-white opacity-75 text-3xl rotate-180 absolute bottom-5 cursor-pointer'  
        animate={{
          y: [0,-10,0,-10,0],
        }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Infinity,
          ease: "circIn",
        }}>
        <Link smooth={true} duration={400} to='aboutme'>
          <BiSolidHandDown />
        </Link>
      </motion.div>
    </div>
  )
}

export default HeaderContainer