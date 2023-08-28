import React from 'react'
import NavLink from './subcomps/NavLink'
import { useLinkStore } from '../../zustand/activeLinkStore'
import { useLangStore } from '../../zustand/languageStore'

interface ILinks {title:string, titulo:string}

const navbarLinks: ILinks[] = [
  {title:'about', titulo:'Sobre mi'},
  {title:'experience', titulo:'experiencia'},
  {title:'projects', titulo:'proyectos'},
  {title:'skills', titulo:'habilidades'},
]

const Navbar: React.FC = () => {  
  const {active, toggleActive} = useLinkStore()
  const {language} = useLangStore()
  return (
    <div className='hidden lg:flex flex-col gap-2 text-[#6c6761] dark:text-[#ADA79f] font-medium font-adlam'>
      {
        language === 'en' ? 
          navbarLinks.map((el: ILinks) => <NavLink title={el.title} value={el.title}  key={el.title} active={!!(active===el.title)} toggleActive={toggleActive}/> )
        : 
          navbarLinks.map((el: ILinks) => <NavLink title={el.titulo} value={el.title} key={el.titulo} active={!!(active===el.title)} toggleActive={toggleActive}/> )
        
      }
    </div>
  )
}

export default Navbar