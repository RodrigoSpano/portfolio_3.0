import React, { useEffect } from 'react'
import { useThemeStore } from '../../../../zustand/themeStore'
import styles from './DarkmodeSwitch.module.css'

const ColorTheme: React.FC = () => {
  const {dark, toggleDark} = useThemeStore()
  useEffect(() => {
    const theme = localStorage.getItem('color-theme')
    if(!theme) localStorage.setItem('color-theme', dark ? 'dark' : 'light' )
    toggleDark(!!(theme === 'dark'))
  }, [])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      toggleDark(e.target.checked)
      localStorage.setItem('color-theme', e.target.checked ? 'dark' : 'light' )
  }
  return (
    <label className={styles.switch}>
      <input checked={dark} onChange={handleChange} type="checkbox"/>
    <span className={styles.slider}></span>
</label>
  )
}

export default ColorTheme