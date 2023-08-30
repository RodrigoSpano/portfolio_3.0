import {motion} from 'framer-motion'
import { skillsTypes } from './SkillsContainer'
import { Tooltip } from '@nextui-org/react'
import { FiArrowUpRight } from 'react-icons/fi'

const SkillCard = ({item}: {item: skillsTypes}) => {
  return (
    <Tooltip content={
      <a target='_blank' href={item.docu} className='flex items-center'>
        <p className='capitalize'>{item.name}</p>
        <FiArrowUpRight />
      </a>
    }>
      <motion.a target='_blank' href={item.docu} whileHover={{scale:1.1}} className='hover:drop-shadow-lg flex items-center justify-center shadow-white dark:text-[#ffffff] text-[#393939]'>
        {item.icon}
      </motion.a>
    </Tooltip>
  )
}

export default SkillCard