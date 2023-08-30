import React from 'react'
import { useLangStore } from '../../../../zustand/languageStore'
import {proyectsDB} from '../../../../utils/db'
import { dbProyects } from '../../../../utils/interfaces'
import ProyectCard from './subcmps/ProyectCard'

const ProyectsContainer: React.FC = () => {
  const {language} = useLangStore()
  return (
    <div className='flex flex-col lg:gap-4 gap-10 px-2 py-20 lg:py-4'>
      <h4 className='middle:text-2xl font-kanit text-[#1C1f19] dark:text-[#11181C] dark:opacity-70 font-bold'>{language === 'en' ? 'Projects' : 'Proyectos'}</h4>
      <div className='flex flex-col gap-5'>
        {
          proyectsDB?.map((el: dbProyects) => <ProyectCard key={Math.random()} data={el} />)
        }
      </div>
    </div>
  )
}

export default ProyectsContainer