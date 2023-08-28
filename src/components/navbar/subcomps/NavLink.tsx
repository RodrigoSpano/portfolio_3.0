import { useState } from 'react'
import { Link } from 'react-scroll'

const NavLink = ({title, active, toggleActive}: {title: string, active: boolean, toggleActive:(by:string)=>void}) => {
  const [line, setLine] = useState<boolean>(active)
  // const {toggleActive} = useLinkStore()
  return (
    <Link onClick={() => toggleActive(title)} onMouseEnter={() => !line && setLine(true)} onMouseLeave={() => line && setLine(false)} smooth={true} duration={300} to='' className={`${active && 'text-white translate-x-4'} hover:text-white flex items-center gap-2 cursor-pointer transition-all ease-in duration-300`}>
    <div className={`${(active || line === true)  ? 'w-[30px]' : 'w-[20px]'} h-[2px] bg-[#6c6761] dark:bg-[#ADA79f] transition-all ease-in duration-300`}/>
    <span className='capitalize'>{title}</span>
    </Link>
  
  )
}

export default NavLink