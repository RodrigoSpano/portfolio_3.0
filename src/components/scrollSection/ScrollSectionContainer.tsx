import { ScrollShadow } from '@nextui-org/react'
import ExperienceContainer from './subcomps/experience/ExperienceContainer'
import PersonalContainer from './subcomps/personaInfo/PersonalContainer'

const ScrollSectionContainer = () => {
  return (
      <ScrollShadow 
      hideScrollBar 
      offset={100 }
      orientation="vertical" 
      className="pt-10 lg:w-1/2 max-h-[900px] overflow-y-scroll flex flex-col gap-10"
    >
      <PersonalContainer />
      <ExperienceContainer />
    </ScrollShadow>
  )
}

export default ScrollSectionContainer