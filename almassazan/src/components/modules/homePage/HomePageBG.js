import React from "react";
function HomePageBG({ isEnLang = false }) {
  return (
    <div
      className={`w-full h-72 md:h-screen relative -z-10 ${
        isEnLang ? "scale-x-[-1]" : ""
      }`}
    >
      <div className="w-full h-full  bg-Background bg-cover bg-center "></div>
      <div
        className={`w-full h-full absolute top-0 z-10 bg-gradient-to-r from-filter-black-40 to-filter-black-50 md:from-text-500 md:to-transparent`}
      ></div>
    </div>
  );
}

export default HomePageBG;
