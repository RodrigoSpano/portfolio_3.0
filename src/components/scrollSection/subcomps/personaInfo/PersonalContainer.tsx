import React from 'react'
import { useLangStore } from '../../../../zustand/languageStore'

const PersonalContainer: React.FC = () => {
  const {language} = useLangStore()

  return (
    <div id='about' className='dark:text-[#000] font-kanit font-medium '>
      {
        language === 'en' ? <p>Hello! I'm a software developer who embarked on my journey in web development in 2021. My expertise spans both front-end and back-end, enabling me to create comprehensive and functional technological solutions.

        From the aesthetics and usability of the front-end to the robustness of the back-end, I'm thrilled to craft exceptional digital experiences in every detail. What sets me apart is my enthusiasm to stay updated with the latest trends and tools.</p> : 
        <p>
          ¡Hola! Soy un desarrollador de software que comenzó su viaje en el desarrollo web en 2021. Mi experiencia abarca tanto el front-end como el back-end, permitiéndome crear soluciones tecnológicas completas y funcionales.

Desde la estética y usabilidad del front-end hasta la solidez del back-end, me emociona crear experiencias digitales excepcionales en cada detalle. Lo que me distingue es mi entusiasmo por mantenerme al día con las últimas tendencias y herramientas.</p> 
      }
    </div>
  )
}

export default PersonalContainer