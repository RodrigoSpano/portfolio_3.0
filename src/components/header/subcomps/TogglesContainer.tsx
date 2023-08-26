import React from 'react'
import ColorTheme from './theme-color/ColorTheme'
import LanguageToggle from './Language/LanguageToggle'

const TogglesContainer: React.FC = () => {
  return (
    <div className='absolute top-5 flex gap-10'>
      <LanguageToggle />
      <ColorTheme />
    </div>
  )
}

export default TogglesContainer