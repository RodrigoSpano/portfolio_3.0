import HeaderContainer from "./components/header/HeaderContainer"
import InfoSection from "./components/infoSection/InfoSection"
import { useThemeStore } from "./zustand/themeStore"

function App() {
  const {dark} = useThemeStore()
  return (
    <div className={`${dark ? 'dark' : ''} transition-all duration-500 ease-soft-spring`}>
    <div className={`dark:bg-[url('/assets/bg_2.jpg')] bg-[url('/assets/bg_white.jpg')] bg-no-repeat bg-cover transition-background ease-in-out duration-400 min-h-screen flex flex-col items-center justify-center`}>
      <HeaderContainer />
      <InfoSection />
    </div>
    </div>
  )
}

export default App
