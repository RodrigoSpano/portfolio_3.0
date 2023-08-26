import React from 'react'
import { useThemeStore } from '../../../zustand/themeStore'
// import {PiMoonStarsFill} from 'react-icons/pi'
// import {CgSun} from 'react-icons/cg'
import styles from './DarkmodeSwitch.module.css'

const ColorTheme: React.FC = () => {
  const {toggleDark} = useThemeStore()
  return (
    <label className={styles.switch}>
      <input onChange={(e) => toggleDark(e.target.checked)} type="checkbox"/>
    <span className={styles.slider}></span>
</label>
  )
}

export default ColorTheme