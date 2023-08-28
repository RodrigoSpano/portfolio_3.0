import HeaderContainer from "./components/header/HeaderContainer"
import InfoSection from "./components/infoSection/InfoSection"
import { useThemeStore } from "./zustand/themeStore"

function App() {
  const {dark} = useThemeStore()

  return (
    <div className={`${dark ? 'dark' : ''} transition-all duration-500 ease-soft-spring`}>
    <div className={`dark:bg-black bg-zinc-200 transition-background ease-in-out duration-400 min-h-screen`}>
      <HeaderContainer />
      <InfoSection />
    </div>
    </div>
  )
}

export default App
