import HeaderContainer from "./components/header/HeaderContainer"
import { useThemeStore } from "./zustand/themeStore"

function App() {

  const {dark} = useThemeStore()

  return (
    <div className={`${dark ? 'dark' : ''} transition-all duration-500 ease-soft-spring`}>
    <div className={`dark:bg-zinc-900 bg-zinc-200 transition-background ease-in-out duration-400 min-h-screen`}>
      <HeaderContainer />
    </div>
    </div>
  )
}

export default App
