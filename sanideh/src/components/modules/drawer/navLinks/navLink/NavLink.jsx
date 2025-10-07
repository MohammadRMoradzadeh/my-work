"use client";
import { setPopUp } from "@/app/redux/slices/showPopUp";
import { language } from "@/utils/dataContainer/language/language";
import { popUp } from "@/utils/statesContainer/popUp/popUp";
import Link from "next/link";
import { useDispatch } from "react-redux";
function NavLink({
  lang = language.fa,
  href = "#",
  isActive = false,
  children,
}) {
  const dispatch = useDispatch();
  const onclickHandler = () => {
    dispatch(setPopUp(popUp.none));
  };
  return (
    <Link
      onClick={onclickHandler}
      href={`/${lang}${href}`}
      className={`w-full h-12 rounded-lg flex items-center px-2.5  ${
        isActive ? "bg-primary" : "hover:text-BW-13"
      }`}
    >
      <p
        className={`${language.font[lang]} font-semibold text-16 ${
          isActive ? "text-BW-13" : "text-BW-4"
        }`}
      >
        {children}
      </p>
    </Link>
  );
}
export default NavLink;
