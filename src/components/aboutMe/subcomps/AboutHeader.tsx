import React from 'react'
import { useLangStore } from '../../../zustand/languageStore'

const AboutHeader: React.FC = () => {
  const {language} = useLangStore()
  return (
    <div className='gap-3 flex flex-col font-kanit'>
      <h3 className='font-bold text-2xl sm:text-4xl middle:text-6xl text-[#1f1c19] dark:text-[#cdbead]  bg-clip-text tracking-tighter'>Rodrigo Spano</h3>
      <span className=' text-base sm:text-md middle:text-xl text-[#6c6761] dark:text-[#ADA79f]'>{language === 'en'? 'Software Developer' : 'Desarrollador de Software' }</span>
      <p className='max-w-sm text-[#6c6761] dark:text-[#ADA79f] text-sm middle:text-base opacity-90'>{language === 'en' ? 'I develop accessible products and features for the web.' : 'Desarrollo de funciones y productos accesibles para la web.'}</p>
    </div>
  )
}

export default AboutHeader