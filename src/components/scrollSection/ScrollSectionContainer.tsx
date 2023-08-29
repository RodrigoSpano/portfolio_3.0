import React from 'react'
import styles from './scroll.module.css'
import PersonalContainer from './subcomps/personaInfo/PersonalContainer'

const ScrollSectionContainer = () => {
  return (
    <div id={styles.scroll} className='pt-10 lg:w-1/2 max-h-[1000px] overflow-y-scroll'>
      <PersonalContainer />
    </div>
  )
}

export default ScrollSectionContainer