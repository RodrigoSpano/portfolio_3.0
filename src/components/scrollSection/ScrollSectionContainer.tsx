import { ScrollShadow } from '@nextui-org/react'
// import ExperienceContainer from './subcomps/experience/ExperienceContainer'
import PersonalContainer from './subcomps/personaInfo/PersonalContainer'
import ProyectsContainer from './subcomps/proyects/ProyectsContainer'

const ScrollSectionContainer = () => {
  return (
    <>
      {
        window.innerWidth > 1024 ? (
          <ScrollShadow 
          hideScrollBar 
          offset={100 }
          orientation="vertical" 
          className="pt-10 lg:w-1/2 max-h-[900px] overflow-y-scroll flex flex-col gap-10"
          >
          <PersonalContainer />
          {/* <ExperienceContainer /> */}
          <ProyectsContainer />
        </ScrollShadow>
        ) : (
          <div  
          className="pt-10 lg:w-1/2 h-auto  flex flex-col gap-10"
          >
          <PersonalContainer />
          {/* <ExperienceContainer /> */}
          <ProyectsContainer />
        </div>
        )
      }
    </>
  )
}

export default ScrollSectionContainer