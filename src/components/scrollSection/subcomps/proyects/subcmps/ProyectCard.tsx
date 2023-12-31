import { Chip } from '@nextui-org/react'
import { dbProyects } from '../../../../../utils/interfaces'
import {motion, useScroll} from 'framer-motion'
import {FiArrowUpRight} from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'
import { useRef, useState } from 'react'
import { useLangStore } from '../../../../../zustand/languageStore'
import { useThemeStore } from '../../../../../zustand/themeStore'

const ProyectCard = ({data}: {data: dbProyects}) => {
  const {language} = useLangStore()
  const {dark} = useThemeStore()
  const [up, setUp] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })

  return (
    <>
      <motion.div ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}} onMouseEnter={() => setUp(true)} onMouseLeave={() => setUp(false)} 
      className={`transition-all duration-300 ease-linear cursor-default w-full lg:max-w-[610px] h-auto lg:hidden flex flex-col-reverse middle:flex-row gap-3 items-start p-4 rounded-md hover:bg-background/30 hover:dark:bg-background/20 bg-background/10 backdrop-blur-2xl `}
      >
        {
          data.image ? 
          <img src={data.image} alt={data.title} className={`w-[115px] drop-shadow-lg object-contain dark:opacity-75 ${up && 'dark:opacity-100'} transition-all duration-300 ease-linear `} />
          : null
        }
        {/* //card body */}
        <div className='flex flex-col gap-3'>
          
          <div>
          {/* title */}
          <div className='flex gap-1 font-kanit items-center'>
            <a href={data.deploy ? data.deploy : data.repo} target='_blank'>
              <h4 className={` transition-all duration-300 ease-linear ${up && 'text-orange-400/90 dark:text-white'} dark:text-[#ddd1c3] lg:dark:text-black font-bold text-md lg:text-xl`}>{language === 'en' ? data.title : (data.titulo ? data.titulo : data.title )}</h4>
            </a>
            {     data.deploy ?
                    <motion.a target='_blank' href={data.deploy} whileHover={{scale:1.2, translateY: -5}} className='cursor-pointer'>
                    <FiArrowUpRight />
                  </motion.a> : null
            }
                    <motion.a target='_blank' href={data.repo} whileHover={{scale:1.2, translateY: -5}} className='cursor-pointer'>
                    <BsGithub />
                  </motion.a>
          </div>

          <a target='_blank' href={data.deploy ? data.deploy : data.repo} className={`${up && 'dark:text-white'} transition-all duration-300 ease-linear text-[#11181c] dark:text-[#ddd1c3] lg:dark:text-black text-sm font-medium`}>{language === 'en' ? data.description : data.descripcion}</a>
            </div>
          {/* technologies */}
          <div className='flex gap-1 items-center flex-wrap'>
            {
              data.tech?.map((el: string) => <Chip key={el} color={dark ? 'default':'warning'} variant='flat' size='sm'>{el}</Chip>)
            }
          </div>
        </div>
      </motion.div>
      <div onMouseEnter={() => setUp(true)} onMouseLeave={() => setUp(false)} 
      className={`transition-all duration-300 ease-linear cursor-default w-full lg:max-w-[610px] h-auto hidden lg:flex flex-col-reverse middle:flex-row gap-3 items-start p-4 rounded-md hover:bg-background/30 hover:dark:bg-background/20 bg-background/10 backdrop-blur-2xl `}
      >
        {
          data.image ? 
          <img src={data.image} alt={data.title} className={`w-[115px] drop-shadow-lg object-contain dark:opacity-75 ${up && 'dark:opacity-100'} rounded-md transition-all duration-300 ease-linear `} />
          : null
        }
        {/* //card body */}
        <div className='flex flex-col gap-3'>
          
          <div>
          {/* title */}
          <div className='flex gap-1 font-kanit items-center'>
            <a href={data.deploy ? data.deploy : data.repo} target='_blank'>
              <h4 className={`transition-all duration-300 ease-linear ${up && 'text-orange-400/90 dark:text-white'} dark:text-[#ddd1c3] lg:dark:text-black font-bold text-md lg:text-xl`}>{language === 'en' ? data.title : (data.titulo ? data.titulo : data.title )}</h4>
            </a>
            {     data.deploy ?
                    <motion.a target='_blank' href={data.deploy} whileHover={{scale:1.2, translateY: -5}} className='cursor-pointer'>
                    <FiArrowUpRight />
                  </motion.a> : null
            }
                    <motion.a target='_blank' href={data.repo} whileHover={{scale:1.2, translateY: -5}} className='cursor-pointer'>
                    <BsGithub />
                  </motion.a>
                  {
                    data.repo2 &&
                    <motion.a target='_blank' href={data.repo2} whileHover={{scale:1.2, translateY: -5}} className='cursor-pointer'>
                    <BsGithub />
                  </motion.a>
                    }
          </div>

          <a target='_blank' href={data.deploy ? data.deploy : data.repo} className={`${up && 'dark:text-white'} transition-all duration-300 ease-linear text-[#11181c] dark:text-[#ddd1c3] lg:dark:text-black text-sm font-medium`}>{language === 'en' ? data.description : data.descripcion}</a>
            </div>
          {/* technologies */}
          <div className='flex gap-1 items-center flex-wrap'>
            {
              data.tech?.map((el: string) => <Chip key={el} color={dark ? 'default':'warning'} variant='flat' size='sm'>{el}</Chip>)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProyectCard