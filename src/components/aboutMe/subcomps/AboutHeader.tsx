import React from 'react'
import { useLangStore } from '../../../zustand/languageStore'

const AboutHeader: React.FC = () => {
  const {language} = useLangStore()
  return (
    <div className='gap-3 flex flex-col font-kanit'>
      <div className='flex flex-col'>
        <h3 className='font-bold text-2xl sm:text-4xl middle:text-6xl text-[#1f1c19] dark:text-[#ddd1c3]  bg-clip-text tracking-tighter'>Rodrigo Spano</h3>
        <span className=' text-base sm:text-md middle:text-lg text-[#5c5a57] dark:text-[#A3A3A3]'>{language === 'en'? 'Software Developer' : 'Desarrollador de Software' }</span>
      </div>
      <p className='max-w-sm text-[#2b2a29] dark:text-[#ddd1c4] text-sm middle:text-base '>{language === 'en' ? 'I develop accessible products and features for the web.' : 'Desarrollo de funciones y productos accesibles para la web.'}</p>
    </div>
  )
}

export default AboutHeader