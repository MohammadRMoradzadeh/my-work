import React from "react";

function SectionTittle({ tittle = "متن تستی " }) {
  return (
    <div className="flex justify-center items-center gap-x-4 max-w-fit">
      <div className="flex gap-x-2">
        <div className=" w-7 h-7 rounded-full md:bg-white flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-text-500 shadow"></div>
        </div>
        <div className=" w-7 h-7 rounded-full md:bg-white flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-primary-500 shadow"></div>
        </div>
      </div>
      <p className={`text-Pinar-Bold text-text-500 text-base md:text-3xl`}>
        {tittle}
      </p>
      <div className="flex gap-x-2">
        <div className=" w-7 h-7 rounded-full md:bg-white flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-primary-500 shadow"></div>
        </div>
        <div className=" w-7 h-7 rounded-full md:bg-white flex justify-center items-center">
          <div className="w-3 h-3 rounded-full bg-text-500 shadow"></div>
        </div>
      </div>
    </div>
  );
}

export default SectionTittle;
