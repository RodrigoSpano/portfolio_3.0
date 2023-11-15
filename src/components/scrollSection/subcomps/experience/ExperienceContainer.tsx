import React from "react";

import ExperienceCard from "./ExperienceCard";
import { experienceDb } from "../../../../utils/db";
import { dbExperience } from "../../../../utils/interfaces";
import { useLangStore } from "../../../../zustand/languageStore";

const ExperienceContainer: React.FC = () => {
  const { language } = useLangStore();

  return (
    <div className="text-[#A3A3A3] flex flex-col gap-5">
      <h3 className="middle:text-2xl text-[#1F1C19 ] font-kanit text-[#1C1f19] dark:#text-[#11181C] dark:opacity-70 font-bold">
        {language === "en" ? "Experience" : "Experiencia"}
      </h3>
      <div className="gap-2 flex flex-col">
        {experienceDb?.map((el: dbExperience) => (
          <ExperienceCard item={el} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceContainer;
