import { Chip } from '@nextui-org/react'
import { dbExperience } from '../../../../utils/interfaces'
import {Card, CardBody} from "@nextui-org/react";
import {FiArrowUpRight} from 'react-icons/fi'
import {motion} from 'framer-motion'
import { useLangStore } from '../../../../zustand/languageStore';
import { useThemeStore } from '../../../../zustand/themeStore';


const ExperienceCard = ({item}: {item: dbExperience}) => {
  const {language} = useLangStore()
  const {dark} = useThemeStore()
  return (
    <>
      {
      language === 'en' ? (
        <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-full lg:max-w-[610px]"
        shadow="sm"
    >
      <CardBody className='overflow-hidden'>
        <div className='flex text-[#A3A3A3] font-light font-kanit gap-10 transition-all ease-linear duration-400 py-2'>
          <span className='w-[50px] font-semibold text-[#A3A3A3] opacity-75'>{item.period}</span>
          <div className='flex flex-col gap-3'>
          <div className='text-[#11181C] dark:text-[#d2d1d1]'>
              <div className='flex gap-2 items-center'>
                <h4 className='text-xl font-bold'>{item.title}</h4>
                {
                  item.deploy ?
                  <motion.a target='_blank' href={item.deploy} whileHover={{scale:1.2, translateY: -5}} className='cursor-pointer'>
                  <FiArrowUpRight />
                </motion.a> : null
                }
              </div>
              <span className='opacity-80 font-medium'>{item.position}</span>
            </div>
            <p className='max-w-full lg:max-w-sm text-sm text-[#11181C] dark:text-white opacity-70'>{item.description}</p>
            <div className='flex gap-2 flex-wrap'>
              {
                item.tech?.map((el:string) => <Chip key={Math.random()} color={dark ? 'default' : "warning"} variant="flat">{el}</Chip>)
              }
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
      ) : (
        <Card
        isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-full lg:max-w-[610px]"
      shadow="sm"
    >
      <CardBody className='overflow-hidden'>
        <div className='flex text-[#A3A3A3] font-light font-kanit gap-10 transition-all ease-linear duration-400 py-2'>
          <span className='w-[50px] font-semibold font-[#A3A3A3] opacity-75'>{item.periodo}</span>
          <div className='flex flex-col gap-3'>
            <div className='text-[#11181C] dark:text-[#d2d1d1]'>
              <div className='flex gap-2 items-center'>
                <h4 className='text-xl font-bold'>{item.titulo}</h4>
                {
                  item.deploy ?
                  <motion.a target='_blank' href={item.deploy} whileHover={{scale:1.2, translateY: -5}} className='cursor-pointer'>
                  <FiArrowUpRight />
                </motion.a> : null
                }
              </div>
              <span className='opacity-80 font-medium'>{item.posicion}</span>
            </div>
            <p className='max-w-full lg:max-w-sm text-sm text-[#11181C] dark:text-white opacity-70'>{item.descripcion}</p>
            <div className='flex gap-2 flex-wrap'>
              {
                item.tech?.map((el:string) => <Chip key={Math.random()} color={dark ? 'default' : "warning"} variant="flat">{el}</Chip>)
              }
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
      )
    } 
    </> 
  );
}


export default ExperienceCard