import React from 'react'
import { useLangStore } from '../../../zustand/languageStore'

const NameContainer: React.FC = () => {
  const {language} = useLangStore()
  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-kanit font-extrabold text-[4.5rem] bg-clip-text text-transparent bg-gradient-to-b dark:from-[#0096c7] dark:to-[#48cae4] from-[#ffd24e] to-[#c0721f]'>
        {
          language === 'es' ? (
            'Hola, soy Rodrigo Spano'
          ) : "Hi, I'm Rodrigo Spano" 
        }
        </h1>
      <p className='font-kanit font-medium dark:text-white text-black opacity-60 text-[1.5rem]'>{language === 'es' ? 'Desarrollador Fullstack 👨‍💻' : 'Fullstack Developer 👨‍💻'}</p>
    </div>
  )
}

export default NameContainer