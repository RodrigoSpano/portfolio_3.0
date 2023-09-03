import React from 'react'
import memoji from '/assets/me/coolme.png'
// import { Button } from '@nextui-org/react'
// import {SlEnvolopeLetter} from 'react-icons/sl'
// import { useThemeStore } from '../../../zustand/themeStore'
// import { useLangStore } from '../../../zustand/languageStore'
import ContactModal from './ContactModal'

const Contact: React.FC = () => {
  // const {dark} = useThemeStore()
  // const {language} = useLangStore()

  // const mailtoUrl = 'mailto:spanorodri@gmail.com?subject=software developer'

  return (
    <div className='flex items-end'>
      <img className='w-[150px]' src={memoji} alt='emoji' />
      <ContactModal />
    </div>
  )
}

export default Contact