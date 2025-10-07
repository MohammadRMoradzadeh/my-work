"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navbarData, adminNavbarData, roles } from "@/utils/dataContainer";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import axios from "axios";
import { getMe } from "@/utils/tools";
function DesktopNavbar() {
  const router = useRouter();
  const fullPath = usePathname();
  const Lang = fullPath.slice(0, 3);
  const isEnLang = Lang === "/en" ? true : false;
  const pathname = fullPath.slice(3);

  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const getUser = async () => {
  getMe("role", setRole, setLoading, setError);
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (role) {
      if (role === roles.ADMIN || role === roles.SUPER_ADMIN) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, [role]);

  const logout = async () => {
    Swal.fire({
      title: "میخوای خارج بشی ؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14213d",
      cancelButtonColor: "#fca311",
      cancelButtonText: "خیر",
      confirmButtonText: "بله ! مطمئنم",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .get("/api/auth/logout")
          .then((res) => {
            getUser();
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: `از حساب کاربری خارج شدید`,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didClose: () => {
                router.replace(Lang);
              },
            });
          })
          .catch((error) => {
            console.log("(desktop navbar logout) Error:", error);
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "error",
              title: `مشکلی پیش آمد !!`,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          });
      }
    });
  };

  return (
    <div className={`w-fit flex flex-col justify-center items-center gap-y-4`}>
      <Link
        href={isEnLang ? "/fa" + pathname : "/en" + pathname}
        scroll={false}
        className="bg-primary-500  w-9 h-9 rounded-full flex justify-center items-center"
      >
        <p className="text-text-500 text-base text-Pinar-Bold text-center -mb-1">
          {isEnLang ? "FA" : "EN"}
        </p>
      </Link>
      <div
        className={`bg-primary-500  w-14   rounded-full flex flex-col gap-y-4 justify-center 
          ${isEnLang ? "items-start" : "items-end "}  p-2`}
      >
        {!isAdmin
          ? navbarData.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={Lang + item.path}
                  className={`group w-36 h-10 flex  ${
                    isEnLang ? "justify-start" : "justify-end "
                  }  relative rounded-full`}
                >
                  <div
                    className={`h-full aspect-square ${
                      pathname.slice(1) === item.path.slice(1)
                        ? "bg-text-500"
                        : "bg-primary-500"
                    } rounded-full group-hover:border-2 border-text-500 flex justify-center items-center `}
                  >
                    {pathname.slice(1) === item.path.slice(1)
                      ? item.icon("#fca311")
                      : item.icon("#14213d")}
                  </div>
                  <p
                    className={`min-w-fit text-center  transition absolute opacity-0 top-1/2  -translate-y-1/2 text-text-500 group-hover:opacity-100 text-base text-Pinar-Bold 
${isEnLang ? "  group-hover:translate-x-16" : "  group-hover:-translate-x-16"}`}
                  >
                    {item.text[Lang.slice(1)]}
                  </p>
                </Link>
              );
            })
          : adminNavbarData[0].map((item, index) => {
              return (
                <Link
                  key={index}
                  href={Lang + item.path}
                  className={`group w-36 h-10 flex  ${
                    isEnLang ? "justify-start" : "justify-end "
                  }  relative rounded-full`}
                >
                  <div
                    className={`h-full aspect-square ${
                      pathname.slice(1) === item.path.slice(1)
                        ? "bg-text-500"
                        : "bg-primary-500"
                    } rounded-full group-hover:border-2 border-text-500 flex justify-center items-center `}
                  >
                    {pathname.slice(1) === item.path.slice(1)
                      ? item.icon("#fca311")
                      : item.icon("#14213d")}
                  </div>
                  <p
                    className={`min-w-fit text-center  transition absolute opacity-0 top-1/2  -translate-y-1/2 text-text-500 group-hover:opacity-100 text-base text-Pinar-Bold 
${isEnLang ? "  group-hover:translate-x-16" : "  group-hover:-translate-x-16"}`}
                  >
                    {item.text[Lang.slice(1)]}
                  </p>
                </Link>
              );
            })}
      </div>
      {isAdmin ? (
        <>
          <div
            className={`bg-primary-500  w-14   rounded-full flex flex-col gap-y-4 justify-center 
          ${isEnLang ? "items-start" : "items-end "}  p-2`}
          >
            {adminNavbarData[1].map((item, index) => {
              return (
                <Link
                  key={index}
                  href={Lang + item.path}
                  className={`group w-36 h-10 flex  ${
                    isEnLang ? "justify-start" : "justify-end "
                  }  relative rounded-full`}
                >
                  <div
                    className={`h-full aspect-square ${
                      pathname.slice(1) === item.path.slice(1)
                        ? "bg-text-500"
                        : "bg-primary-500"
                    } rounded-full group-hover:border-2 border-text-500 flex justify-center items-center `}
                  >
                    {pathname.slice(1) === item.path.slice(1)
                      ? item.icon("#fca311")
                      : item.icon("#14213d")}
                  </div>
                  <p
                    className={`min-w-fit text-center  transition absolute opacity-0 top-1/2  -translate-y-1/2 text-text-500 group-hover:opacity-100 text-base text-Pinar-Bold 
${isEnLang ? "  group-hover:translate-x-16" : "  group-hover:-translate-x-16"}`}
                  >
                    {item.text[Lang.slice(1)]}
                  </p>
                </Link>
              );
            })}
            {adminNavbarData[2].map((item, index) => {
              return (
                <button
                  onClick={logout}
                  key={index}
                  className={`group w-36 h-10 flex  ${
                    isEnLang ? "justify-start" : "justify-end "
                  }  relative rounded-full`}
                >
                  <div
                    className={`h-full aspect-square bg-primary-500 rounded-full group-hover:border-2 border-text-500 flex justify-center items-center `}
                  >
                    {item.icon("#14213d")}
                  </div>
                  <p
                    className={`min-w-fit text-center  transition absolute opacity-0 top-1/2  -translate-y-1/2 text-text-500 group-hover:opacity-100 text-base text-Pinar-Bold ${
                      isEnLang
                        ? "  group-hover:translate-x-16"
                        : "  group-hover:-translate-x-16"
                    }`}
                  >
                    {item.text[Lang.slice(1)]}
                  </p>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default DesktopNavbar;
