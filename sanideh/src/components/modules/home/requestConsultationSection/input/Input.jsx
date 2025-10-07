"use client";
import React from "react";

function Input({
  value = "",
  setValue = () => {
    console.log("function not exist");
  },
  label = "",
}) {
  return (
    <div className="flex flex-col rtl:gap-y-2 sm:rtl:gap-y-3 ltr:gap-y-2.5">
      <p className="text-BW-12 rtl:font-Pinar ltr:font-Roboto font-medium rtl:text-12 sm:rtl:text-16 ltr:text-16 sm:ltr:text-16">
        {label}
      </p>
      <div className="w-full rtl:h-11 sm:rtl:h-9 ltr:h-9 bg-primary-input rounded-lg px-2 py-1 ">
        <input
          type="text"
          className="w-full h-full focus:outline-0 text-BW-white rtl:font-Pinar ltr:font-Roboto rtl:text-16 sm:rtl:text-14 ltr:text-14 sm:ltr:text-14"
        />
        
      </div>
    </div>
  );
}

export default Input;
