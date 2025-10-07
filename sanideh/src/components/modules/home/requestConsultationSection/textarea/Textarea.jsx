"use client";
import React from "react";

function Textarea({
  value = "",
  setValue = () => {
    console.log("function not exist");
  },
  label = "",
}) {
  return (
    <div className="flex flex-col rtl:gap-y-2 sm:rtl:gap-y-3 ltr:gap-y-2.5 rtl:mt-6 sm:rtl:mt-5 ltr:mt-5 sm:ltr:mt-3">
      <p className="text-BW-12 rtl:font-Pinar ltr:font-Roboto font-medium rtl:text-12 sm:rtl:text-16 ltr:text-16 sm:ltr:text-16">
        {label}
      </p>
      <div className="w-full rtl:h-49.25 sm:rtl:h-42.5 ltr:h-43.25 bg-primary-input rounded-lg px-2 py-1 ">
        <textarea
          type="text"
          className="resize-none w-full h-full focus:outline-0 text-BW-white rtl:font-Pinar ltr:font-Roboto rtl:text-16 sm:rtl:text-14 ltr:text-14 sm:ltr:text-14"
        />
      </div>
    </div>
  );
}

export default Textarea;
