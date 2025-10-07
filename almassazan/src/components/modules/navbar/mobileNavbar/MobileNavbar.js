"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navbarData } from "@/utils/dataContainer";
function MobileNavbar() {
  const fullPath = usePathname();
  const Lang = fullPath.slice(0, 3);
  const isEnLang = Lang === "/en" ? true : false;
  const pathname = fullPath.slice(3);
  return (
    <>
      <div className=" fixed z-10 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[40rem] h-16 grid grid-cols-5 sm:rounded-t-3xl overflow-hidden bg-[#fff] shadow-lg shadow-black md:hidden">
        {navbarData.map((item, index) => {
          return (
            <Link
              key={index}
              href={Lang + item.path}
              className={` w-full h-full flex ${
                isEnLang ? "flex-row" : "flex-row-reverse"
              } items-center justify-center gap-x-2 ${
                pathname === item.path ? " bg-text-500 col-span-2 " : ""
              }`}
            >
              {pathname === item.path ? (
                <>
                  {item.icon("#fca311")}
                  <p className="text-Pinar-Medium text-sm text-primary-500 -mb-1">
                    {item.text[isEnLang ? "en" : "fa"]}
                  </p>
                </>
              ) : (
                item.icon("#14213d")
              )}
            </Link>
          );
        })}
      </div>
      <div className="fixed z-30 bottom-20 right-4 md:hidden">
        <Link
          href={isEnLang ? "/fa" + pathname : "/en" + pathname}
          scroll={false}
          className="bg-text-500  w-7 h-7 rounded-full flex justify-center items-center"
        >
          <p className="text-primary-500 text-sm text-Pinar-Medium text-center -mb-1">
            {isEnLang ? "FA" : "EN"}
          </p>
        </Link>
      </div>
    </>
  );
}

export default MobileNavbar;
