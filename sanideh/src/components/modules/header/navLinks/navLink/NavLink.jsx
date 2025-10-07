import { language } from "@/utils/dataContainer/language/language";
import Link from "next/link";
function NavLink({
  lang = language.fa,
  href = "#",
  isActive = false,
  children,
}) {
  return (
    <Link
      href={`/${lang}${href}`}
      className={`min-w-fit ${language.font[lang]} font-extrabold text-18 ${
        isActive ? "text-Secondary" : "text-BW-14"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
