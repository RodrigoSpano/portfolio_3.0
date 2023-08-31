import React, { useRef } from 'react'
import { useLangStore } from '../../../../zustand/languageStore'
import { useScroll } from 'framer-motion'
import {motion} from 'framer-motion'

const PersonalContainer: React.FC = () => {
  const {language} = useLangStore()

  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  return (
    <motion.div whileInView='animate' ref={ref} style={{scale: scrollYProgress, opacity: scrollYProgress}} id='about' className=' dark:text-[#ddd1c3] lg:dark:text-[#000] font-kanit font-medium lg:mt-10'>
      {
        language === 'en' ? <p>Hello! I'm a software developer who embarked on my journey in web development in 2021. My expertise spans both front-end and back-end, enabling me to create comprehensive and functional technological solutions.

        From the aesthetics and usability of the front-end to the robustness of the back-end, I'm thrilled to craft exceptional digital experiences in every detail. What sets me apart is my enthusiasm to stay updated with the latest trends and tools.</p> : 
        <p>
          ¡Hola! Soy un desarrollador de software que comenzó su viaje en el desarrollo web en 2021. Mi experiencia abarca tanto el front-end como el back-end, permitiéndome crear soluciones tecnológicas completas y funcionales.

Desde la estética y usabilidad del front-end hasta la solidez del back-end, me emociona crear experiencias digitales excepcionales en cada detalle. Lo que me distingue es mi entusiasmo por mantenerme al día con las últimas tendencias y herramientas.</p> 
      }
    </motion.div>
  )
}

export default PersonalContainer