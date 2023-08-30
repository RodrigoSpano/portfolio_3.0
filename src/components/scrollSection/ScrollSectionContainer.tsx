import { Divider, ScrollShadow } from '@nextui-org/react'
// import ExperienceContainer from './subcomps/experience/ExperienceContainer'
import PersonalContainer from './subcomps/personaInfo/PersonalContainer'
import ProyectsContainer from './subcomps/proyects/ProyectsContainer'
import SkillsContainer from './subcomps/skills/SkillsContainer'
import MiniFooter from './subcomps/MiniFooter'

const ScrollSectionContainer = () => {

  return (
    <>
          <ScrollShadow 
          hideScrollBar 
          offset={100 }
          orientation="vertical" 
          className="middle:pt-10 lg:w-1/2 max-h-[900px] overflow-y-scroll hidden lg:flex flex-col middle:gap-10"
          >
          <PersonalContainer />
          {/* <ExperienceContainer /> */}
          <ProyectsContainer />
          <SkillsContainer />
          <Divider orientation='horizontal' />
          <MiniFooter />
        </ScrollShadow>
          <div  
          className="middle:pt-10 lg:w-1/2 h-full middle:h-auto flex flex-col lg:hidden gap-20 middle:gap-10"
          >
          <PersonalContainer />
          {/* <ExperienceContainer /> */}
          <ProyectsContainer />
          <SkillsContainer />
          <Divider orientation='horizontal' />
        </div>
    </>
  )
}

export default ScrollSectionContainer