import { skillsTypes } from './SkillsContainer'
import { Tooltip } from '@nextui-org/react'
import { FiArrowUpRight } from 'react-icons/fi'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

const SkillCard = ({item}: {item: skillsTypes}) => {
  const ref = useRef<HTMLAnchorElement>(null)

  return (
    <Tooltip content={
      <a target='_blank' href={item.docu} className='flex items-center'>
        <p className='capitalize'>{item.name}</p>
        <FiArrowUpRight />
      </a>
    }>
      <motion.a 
        ref={ref}
        target='_blank' 
        href={item.docu} 
        whileHover={{scale:1.1}} 
        variants={fadeInAnimationVariants}
        initial='initial'
        whileInView='animate'
        custom={Math.random()}
        className='hover:drop-shadow-lg flex items-center justify-center shadow-white dark:text-[#ffffff] text-[#393939]'>
        {item.icon}
      </motion.a>
    </Tooltip>
  )
}

export default SkillCard