import React, { useRef } from 'react'
import AboutHeader from './subcomps/AboutHeader'
import SocialMedia from '../infoSection/subcomps/SocialMedia'
import Contact from './subcomps/Contact'
import { useScroll, motion } from 'framer-motion'

const AboutmeContainer: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })

  return (
    <motion.div style={{scale: scrollYProgress, opacity: scrollYProgress}} ref={ref} className='flex flex-col h-[400px] lg:h-[800px] justify-center lg:justify-start lg:w-1/2 gap-10 lg:pt-10'>
        <AboutHeader />
        <SocialMedia />
        <Contact />
    </motion.div>
  )
}

export default AboutmeContainer