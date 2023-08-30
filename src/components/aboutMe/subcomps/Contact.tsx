import React from 'react'
import memoji from '/assets/me/coolme.png'
import { Button } from '@nextui-org/react'
import {SlEnvolopeLetter} from 'react-icons/sl'
import { useThemeStore } from '../../../zustand/themeStore'

const Contact: React.FC = () => {
  const {dark} = useThemeStore()

  const mailtoUrl = 'mailto:spanorodri@gmail.com?subject=software developer'

  return (
    <div className='flex items-end'>
      <img className='w-[150px]' src={memoji} alt='emoji' />
      <Button color={dark ? 'secondary' : 'primary'} variant='shadow' className='' endContent={<SlEnvolopeLetter/>}>
        <a href={mailtoUrl} target='_blank'>
        Contact me
        </a>
        </Button>
    </div>
  )
}

export default Contact