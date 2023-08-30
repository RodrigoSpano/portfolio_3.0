import React from 'react'
import { useLangStore } from '../../../zustand/languageStore'
import me from '/assets/me/me.png'

const NameContainer: React.FC = () => {
  const {language} = useLangStore()
  return (
    <div className='flex flex-col items-center '>
      <img src={me} alt='dev' className='h-[100px] translate-y-4 middle:h-[150px] middle:translate-y-10 drop-shadow-lg backdrop-blur-xl opacity-70 '/>
      <h1 className='drop-shadow-lg font-kanit font-extrabold text-[2rem] middle:text-[4.5rem] bg-clip-text text-transparent bg-gradient-to-b dark:from-[#0096c7] dark:to-[#48cae4] from-[#ffd24e] to-[#c0721f]'>
        {
          language === 'es' ? (
            'Hola, soy Rodrigo Spano'
          ) : "Hi, I'm Rodrigo Spano" 
        }
        </h1>
      <p className='font-kanit font-medium dark:text-white text-black opacity-60 middle:text-[1.5rem]'>{language === 'es' ? 'Desarrollador de Software' : 'Software Developer'}</p>

    </div>
  )
}

export default NameContainer