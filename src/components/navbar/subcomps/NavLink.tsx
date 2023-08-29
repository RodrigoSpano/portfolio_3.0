import { useState } from 'react'
import { Link } from 'react-scroll'

const NavLink = ({title, active, value, toggleActive}: {value:string, title: string, active: boolean, toggleActive:(by:string)=>void}) => {
  const [line, setLine] = useState<boolean>(active)
  return (
    <Link onClick={() => toggleActive(value)} onMouseEnter={() => !line && setLine(true)} onMouseLeave={() => line && setLine(false)} smooth={true} duration={300} to={title} className={`${active && 'dark:text-white translate-x-4'} dark:hover:text-white flex items-center gap-2 cursor-pointer transition-all ease-in duration-300`}>
    <div className={`${(active || line === true)  ? 'w-[30px]' : 'w-[20px]'} h-[2px] bg-[#6c6761] dark:bg-[#ADA79f] transition-all ease-in duration-300`}/>
    <span className='capitalize'>{title}</span>
    </Link>
  
  )
}

export default NavLink