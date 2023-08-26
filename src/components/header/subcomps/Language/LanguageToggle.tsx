import React, { useEffect } from 'react'
import styles from './language.module.css'
import { useLangStore } from '../../../../zustand/languageStore'

const LanguageToggle: React.FC = () => {

  const {language, toggleLang} = useLangStore()
  
  useEffect(() => {
    const langStorage = localStorage.getItem('language')
    if(!langStorage) localStorage.setItem('language', language)
    if(langStorage === 'es') {
      toggleLang('es')
    } else toggleLang('en')
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked) {
      toggleLang('es') 
      localStorage.setItem('language', 'es')
    } else {
      toggleLang('en')
      localStorage.setItem('language', 'en')
    }
  }
  return (
<label className={styles.container}>
  <input type="checkbox" checked={language==='es' ? true : false} onChange={handleChange}/>
  <span className={`${styles.clipboard} dark:text-white text-black`}>En</span>
  <span className={`${styles.clipboard_check} dark:text-white text-black`}>Es</span>

</label>
  )
}

export default LanguageToggle