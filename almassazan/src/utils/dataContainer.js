import {
  home2,
  note,
  noteAdd,
  infoCircle,
  task,
  addSquare,
  userCirlceAdd,
  logOutCurve,
} from "./icons";
const navbarData = [
  {
    text: {
      en: "Main Page",
      fa: "صفحه اصلی",
    },
    path: "/",
    icon: (color) => home2(color, "28"),
  },
  {
    text: {
      en: "projects",
      fa: "پروژه ها",
    },
    path: "/projects",
    icon: (color) => note(color, "28"),
  },
  {
    text: {
      en: "consultation",
      fa: "مشاوره",
    },
    path: "/consultation",
    icon: (color) => noteAdd(color, "28"),
  },
  {
    text: {
      en: "About us",
      fa: "درباره ما",
    },
    path: "/About-us",
    icon: (color) => infoCircle(color, "28"),
  },
];
const adminNavbarData = [
  [
    {
      text: {
        en: "Main Page",
        fa: "صفحه اصلی",
      },
      path: "/",
      icon: (color) => home2(color, "28"),
    },
    {
      text: {
        en: "projects",
        fa: "پروژه ها",
      },
      path: "/projects",
      icon: (color) => note(color, "28"),
    },
    {
      text: {
        en: "orders",
        fa: "سفارشات",
      },
      path: "/admin/orders",
      icon: (color) => task(color, "28"),
    },
    {
      text: {
        en: "About us",
        fa: "درباره ما",
      },
      path: "/About-us",
      icon: (color) => infoCircle(color, "28"),
    },
  ],
  [
    {
      text: {
        en: "addProject",
        fa: "افزودن پروژه",
      },
      path: "/admin/project/add",

      icon: (color) => addSquare(color, "28"),
    },
    {
      text: {
        en: "addEngineer",
        fa: "افزودن مهندس",
      },
      path: "/admin/engineer/add",

      icon: (color) => userCirlceAdd(color, "28"),
    },
  ],
  [
    {
      text: {
        en: "log out",
        fa: "خروج از کاربری",
      },
      path: "#",

      icon: (color) => logOutCurve(color, "28"),
    },
  ],
];
const roles = { USER: "USER", ADMIN: "ADMIN", SUPER_ADMIN: "SUPER_ADMIN" };
export { navbarData, adminNavbarData, roles };
