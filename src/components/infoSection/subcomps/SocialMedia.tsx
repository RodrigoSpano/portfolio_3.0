import React from 'react'
import {BsGithub, BsLinkedin, BsDownload} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { Button, Tooltip } from '@nextui-org/react'
import { useLangStore } from '../../../zustand/languageStore'

interface ILinks { link: string, icon: JSX.Element}

const mediaLinks: ILinks[] = [{icon: <BsGithub/>, link:'https://www.github.com/RodrigoSpano'}, {icon: <BsLinkedin/>, link: 'https://www.linkedin.com/in/rodrigospano/'}]

const SocialMedia: React.FC = () => {

  const {language} = useLangStore()

  return (
    <div className='flex text-2xl text-[#1f1c19] dark:text-[#fff] opacity-75 items-center w-[100px]'>
      <div className='flex gap-5'>
      {
        mediaLinks.map((el: ILinks) => <motion.a whileHover={{scale: 1.2}} key={Math.random()} target='_blank' href={el.link}>{el.icon}</motion.a>)
      }
      </div>
      <Tooltip content={language === 'en' ? 'Download Resume':'Descargar curriculum'} className='dark:bg-[#A3A3A3] opacity-75 text-[#1f1c19] '>
        <Button size='sm' className='text-[#1f1c19] dark:text-[#fff] text-2xl bg-transparent border-none outline-none '>
          <a download href='/assets/rodrigo-spano-software-developer.pdf'>
          <BsDownload />
          </a>
        </Button>
      </Tooltip>
    </div>
  )
}

export default SocialMedia