import React from "react";
import NavLinks from "../../modules/header/navLinks/NavLinks";
import Logo from "@/components/modules/header/logo/Logo";
import PhoneNumber from "../../modules/header/phoneNumber/PhoneNumber";
import SelectLanguage from "@/components/modules/header/changeLanguage/selectLanguage/SelectLanguage";
import ChangeLanguage from "../../modules/header/changeLanguage/ChangeLanguage";
import Divider from "@/components/modules/header/divider/Divider";
import Background from "@/components/modules/header/background/Background";
import CenterContainer from "@/components/modules/global/container/centerContainer/CenterContainer";
import Container from "@/components/modules/global/container/Container";
import SelectedLanguage from "@/components/modules/header/changeLanguage/selectedLanguage/SelectedLanguage";
import NavLink from "@/components/modules/header/navLinks/navLink/NavLink";
import HamburgerMenu from "@/components/modules/header/hamburgerMenu/HamburgerMenu";
import Language from "@/components/modules/header/changeLanguage/selectLanguage/language/Language";
import CounselingButton from "@/components/modules/header/counselingButton/CounselingButton";
import { language } from "@/utils/dataContainer/language/language";
import { navLinks } from "@/utils/dataContainer/navLinks/navLinks";
import CurrentPage from "@/components/modules/header/hamburgerMenu/currentPage/CurrentPage";

function Header({ lang = language.fa, route = 0 }) {
  return (
    <Background>
      <CenterContainer className="flex justify-between items-center">
        <HamburgerMenu>
          <CurrentPage>{navLinks[route].title[lang]}</CurrentPage>
        </HamburgerMenu>
        <NavLinks>
          {navLinks.map((item, index) => (
            <NavLink
              key={item.href}
              lang={lang}
              href={item.href}
              isActive={route === index}
            >
              {item.title[lang]}
            </NavLink>
          ))}
        </NavLinks>
        <Logo />
        <Container className="hidden sm:flex items-center gap-x-2.5">
          <Container className="flex items-center gap-x-10">
            <ChangeLanguage>
              <SelectedLanguage lang={lang} />
              <SelectLanguage>
                <Language lang={language.fa} />
                <Language lang={language.en} />
              </SelectLanguage>
            </ChangeLanguage>
            <PhoneNumber lang={lang} />
          </Container>
          <Divider />
          <CounselingButton lang={lang} />
        </Container>
      </CenterContainer>
    </Background>
  );
}

export default Header;
