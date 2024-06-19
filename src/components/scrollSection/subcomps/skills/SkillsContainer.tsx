import React from 'react';
import { FaReact } from 'react-icons/fa6';
import { TbBrandNextjs } from 'react-icons/tb';
import {
  SiExpress,
  SiJavascript,
  SiNestjs,
  SiRedux,
  SiSequelize,
  SiTypescript,
} from 'react-icons/si';
import {
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoPostgresql,
} from 'react-icons/bi';
import { DiGitBranch, DiMongodb } from 'react-icons/di';
import { RiBearSmileFill } from 'react-icons/ri';
import { useLangStore } from '../../../../zustand/languageStore';
import SkillCard from './SkillCard';

export interface skillsTypes {
  name: string;
  docu: string;
  icon: JSX.Element;
}

const skills: skillsTypes[] = [
  {
    name: 'javascript',
    docu: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    icon: <SiJavascript />,
  },
  {
    name: 'typescript',
    docu: 'https://www.typescriptlang.org/',
    icon: <SiTypescript />,
  },
  { name: 'react', docu: 'https://react.dev/', icon: <FaReact /> },
  { name: 'nextJs', docu: 'https://nextjs.org/docs', icon: <TbBrandNextjs /> },
  { name: 'redux', docu: 'https://redux-toolkit.js.org/', icon: <SiRedux /> },
  {
    name: 'zustand',
    docu: 'https://zustand-demo.pmnd.rs/',
    icon: <RiBearSmileFill />,
  },
  {
    name: 'tailwindCss',
    docu: 'https://tailwindcss.com/',
    icon: <BiLogoTailwindCss />,
  },
  { name: 'nodeJs', docu: 'https://nodejs.org/es', icon: <BiLogoNodejs /> },
  { name: 'express', docu: 'https://expressjs.com/', icon: <SiExpress /> },
  { name: 'nestJS', docu: 'https://nestjs.com/', icon: <SiNestjs /> },
  {
    name: 'postgreSQL',
    docu: 'https://www.postgresql.org/',
    icon: <BiLogoPostgresql />,
  },
  {
    name: 'mongoDb',
    docu: 'https://www.mongodb.com/docs/',
    icon: <DiMongodb />,
  },
  { name: 'sequelize', docu: 'https://sequelize.org/', icon: <SiSequelize /> },
  { name: 'git', docu: 'https://git-scm.com/', icon: <DiGitBranch /> },
];

const SkillsContainer: React.FC = () => {
  const { language } = useLangStore();
  return (
    <div className="flex flex-col gap-5 lg:mb-10 ">
      <h4 className="text-2xl font-kanit text-[#1C1f19] dark:text-[#11181C] dark:opacity-70 font-bold">
        {language === 'en' ? 'Skills' : 'Habilidades'}
      </h4>

      <div className="grid grid-cols-4 text-[#11181c] dark:text-[#ddd1c3] text-5xl gap-3 p-10 bg-background/20">
        {skills.map((el: skillsTypes) => (
          <SkillCard item={el} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default SkillsContainer;
