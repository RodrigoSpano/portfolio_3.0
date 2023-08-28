import React from 'react'
import NavLink from './subcomps/NavLink'
import { useLinkStore } from '../../zustand/activeLinkStore'


const navbarLinks: string[] = [
  'about',
  'experience',
  'projects',
  'skills',
]

const Navbar: React.FC = () => {  
  const {active, toggleActive} = useLinkStore()
  return (
    <div className='flex flex-col gap-2 text-[#6c6761] dark:text-[#ADA79f] font-medium font-adlam'>
      {
        navbarLinks.map((el: string) => <NavLink title={el}  key={el} active={!!(active===el)} toggleActive={toggleActive}/> )
      }
    </div>
  )
}

export default Navbar