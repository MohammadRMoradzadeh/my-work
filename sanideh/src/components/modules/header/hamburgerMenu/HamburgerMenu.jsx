"use client";
import { setPopUp } from "@/app/redux/slices/showPopUp";
import { popUp } from "@/utils/statesContainer/popUp/popUp";
import { List } from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { useDispatch } from "react-redux";

function HamburgerMenu({ children }) {
  const dispatch = useDispatch();
  const onclickHandler = () => {
    dispatch(setPopUp(popUp.drawer));
  };
  return (
    <div className="w-fit sm:hidden flex items-center gap-x-5">
      <List
        onClick={onclickHandler}
        size={32}
        color="#f0f0f0"
        className="sm:hidden"
      />
      {children}
    </div>
  );
}

export default HamburgerMenu;
