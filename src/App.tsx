import { useEffect } from "react"
import HeaderContainer from "./components/header/HeaderContainer"


function App() {
  useEffect(() => {
    if(!localStorage.getItem('color-theme')){
      localStorage.setItem('color-theme', 'light')
    }
  },[])
  const theme: string | null= localStorage.getItem('color-theme')
  return (
    <div className={`dark:bg-gray-950 min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <HeaderContainer />
    </div>
  )
}

export default App
