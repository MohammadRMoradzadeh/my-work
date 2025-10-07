import React from "react";
import ProjectsContainer from "./projectsContainer/ProjectsContainer";
import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";

const Projects = ({ isEnLang = false, children }) => {
  return (
    <div className=" container mx-auto flex justify-center">
      <div className="w-full md:w-[calc(100%-128px)]">
        <div className="w-full h-screen flex flex-col items-center pt-8 md:pt-16 gap-y-8 md:gap-y-16 relative">
          <SectionTittle tittle={isEnLang ? "Projects" : "پروژه ها"} />
          <div
            className={`w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 px-8 ${
              isEnLang ? "" : "dir-rtl"
            }`}
          >
            <ProjectsContainer isEnLang={isEnLang} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Projects;
