"use client";
import Header from "@/components/modules/drawer/header/Header";
import NavLink from "@/components/modules/drawer/navLinks/navLink/NavLink";
import NavLinks from "@/components/modules/drawer/navLinks/NavLinks";
import Filter from "@/components/modules/global/filter/Filter";
import { language } from "@/utils/dataContainer/language/language";
import { navLinks } from "@/utils/dataContainer/navLinks/navLinks";
import { popUp } from "@/utils/statesContainer/popUp/popUp";
import React from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import Footer from "@/components/modules/drawer/footer/Footer";
import CounselingButton from "@/components/modules/drawer/footer/counselingButton/CounselingButton";
import Container from "@/components/modules/global/container/Container";
import Divider from "@/components/modules/drawer/footer/divider/Divider";
import SelectedLanguage from "@/components/modules/drawer/footer/changeLanguage/selectedLanguage/SelectedLanguage";
import SelectLanguage from "@/components/modules/drawer/footer/changeLanguage/selectLanguage/SelectLanguage";
import Language from "@/components/modules/drawer/footer/changeLanguage/selectLanguage/language/Language";
import PhoneNumber from "@/components/modules/drawer/footer/phoneNumber/PhoneNumber";
import ChangeLanguage from "@/components/modules/drawer/footer/changeLanguage/ChangeLanguage";

function Drawer({ lang = language.fa }) {
  const showPopUp = useSelector((state) => state.showPopUp);
  const showDrawer = showPopUp === popUp.drawer;
  const pathName = usePathname();
  console.log("🚀 ~ pathName:", pathName);
  const currentSegment = pathName.split("/")[2];
  console.log("🚀 ~ Drawer ~ currentSegment:", currentSegment);

  return (
    <Filter className={`${showDrawer ? "sm:hidden" : "hidden"}`}>
      <div className="w-73.75 h-full bg-BW-14 relative">
        <Header lang={lang} />
        <NavLinks>
          {navLinks.map((item) => {
            return (
              <NavLink
                key={item.href}
                lang={lang}
                href={item.href}
                isActive={item.href === `/${currentSegment}`}
              >
                {item.title[lang]}
              </NavLink>
            );
          })}
        </NavLinks>
        <Footer>
          <CounselingButton lang={lang} />
          <Container
            dir="rtl"
            className="w-full flex justify-center items-center gap-x-6.5 "
          >
            <ChangeLanguage>
              <SelectedLanguage lang={lang} />
              <SelectLanguage>
                <Language lang={language.fa} />
                <Language lang={language.en} />
              </SelectLanguage>
            </ChangeLanguage>
            <Divider />
            <PhoneNumber lang={lang} />
          </Container>
        </Footer>
      </div>
    </Filter>
  );
}

export default Drawer;
