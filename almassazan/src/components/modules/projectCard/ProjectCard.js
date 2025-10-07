import { searchNormal } from "@/utils/icons";
import React from "react";

function ProjectCard({ title = null, image = null, isEnLang = false }) {
  return (
    <div className="group w-full aspect-[14/17] rounded-2xl bg-BG-50 md:bg-transparent p-2 flex flex-col items-center gap-y-3 ">
      <div className="w-full aspect-square rounded-xl overflow-hidden relative md:group-hover:border-2 border-white">
        <div
          className="absolute w-full h-full top-0 right-0 hidden md:group-hover:flex backdrop-blur-sm bg-filter-white-20 z-10  flex-col
             items-center gap-y-6 pt-10"
        >
          {searchNormal("#fff", "48", "Outline")}
          <p className="text-Pinar-Medium text-2xl text-white">
            {isEnLang ? "see More" : " مشاهده جزئیات"}
          </p>
        </div>
        <img
          src={
            image
              ? image
              : "/images/no-image.jpg"
          }
          alt=""
          className="w-full aspect-square object-cover"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-Pinar-SemiBold text-xs md:text-xl text-text-500">
          {title}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
