import { useLangStore } from "../../../zustand/languageStore"

const MiniFooter = () => {
  const {language} = useLangStore()

  return (
    <div className='flex flex-col font-kanit opacity-70 gap-4 font-medium'>
      <div className='flex flex-col'>
        <p className='translate-y-[4px]'>
          {language === 'en' ?' from' : 'desde'}
          </p>
        <p className='font-bold text-xl text-black drop-shadow-lg tracking-wider shadow-black'>Argentina</p>
      </div>
      {
        language === 'en' ? 
        <span>Coded in Visual Studio Code by yours truly. Built with <strong className='font-bold text-black drop-shadow-lg'>Vite.js</strong> and <strong className='font-bold text-black drop-shadow-lg'>Tailwind CSS</strong> , deployed with <strong className='font-bold text-black drop-shadow-lg'>Vercel</strong>. All text is set in the Kanit typeface</span>
        : 
        <span>Creado en Visual Studio Code por mí mismo. Construido con <strong className='font-bold text-black drop-shadow-lg'>Vite.js</strong> y <strong className='font-bold text-black drop-shadow-lg'>Tailwind CSS</strong> , desplegado con <strong className='font-bold text-black drop-shadow-lg'>Vercel</strong>.  Todo el texto está configurado en la tipografía Kanit.</span>

      }
        </div>
  )
}

export default MiniFooter