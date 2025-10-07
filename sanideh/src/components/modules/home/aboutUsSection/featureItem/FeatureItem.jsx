import { getIcon } from "@/utils/icon/getIcon";
import React from "react";

function FeatureItem({ icon, title }) {
  return (
    <li className="w-min flex flex-col items-center gap-y-5">
      <div className="w-18 sm:w-25 aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary to-gradient-primary2 flex justify-center items-center sm:ltr:mx-2 rtl:mx-4">
        {getIcon({
          name: icon,
          size: "40",
          color: "#fff",
          variant: "Bold",
          className: "sm:hidden",
        })}
        {getIcon({
          name: icon,
          size: "56",
          color: "#fff",
          variant: "Bold",
          className: "hidden sm:block",
        })}
      </div>
      <p className="w-full text-BW-3 rtl:font-Pinar rtl:font-semibold ltr:font-BebasNeue  rtl:text-14 sm:rtl:text-22 ltr:text-16 sm:ltr:text-30 text-center">
        {title}
      </p>
    </li>
  );
}

export default FeatureItem;
