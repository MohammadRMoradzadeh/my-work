"use client";
import { roles } from "@/utils/dataContainer";
import { arrowCircleLeft2, closeSquare, edit, trash } from "@/utils/icons";
import { fetchData, getMe, setReload } from "@/utils/tools";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EngineerDetails = ({ isEnLang = false }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [id, setId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userRoleLoading, setUserRoleLoading] = useState(false);
  const [userRoleError, setUserRoleError] = useState(null);
  const [engineer, setEngineer] = useState(null);
  const [engineerLoading, setEngineerLoading] = useState(false);
  const [engineerError, setEngineerError] = useState(null);
  useEffect(() => {
    setId(searchParams.get("id"));
  }, []);
  useEffect(() => {
    if (id) {
      const fetchEngineer = async () => {
        await fetchData(
          `/api/engineer/${isEnLang ? "en" : "fa"}/${id}`,
          setEngineer,
          setEngineerLoading,
          setEngineerError
        );
      };
      fetchEngineer();
    }
  }, [id]);
  useEffect(() => {
    const fetchUserRole = async () => {
      await getMe("role", setUserRole, setUserRoleLoading, setUserRoleError);
    };
    fetchUserRole();
  }, []);
  useEffect(() => {
    if (userRole === roles.ADMIN || userRole === roles.SUPER_ADMIN) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [userRole]);

  const Delete = async () => {
    Swal.fire({
      title: isEnLang
        ? "Should the engineer be removed?"
        : "آیا مهندس حذف شود ؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14213d",
      cancelButtonColor: "#fca311",
      cancelButtonText: isEnLang ? "No!" : "خیر!",
      confirmButtonText: isEnLang ? "Yes" : "بله",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/engineer/${id}`)
          .then((res) => {
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: isEnLang
                ? "Engineer removed successfully"
                : "مهندس با موفقیت حذف شد",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didClose: () => {
                isEnLang
                  ? router.replace("/en/About-us")
                  : router.replace("/fa/About-us");
                setTimeout(() => {
                  setReload();
                }, 500);
              },
            });
          })
          .catch((error) => {
            console.log(" (engineer details delete)  Error:", error);
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "Error",
              title: isEnLang ? "There was a problem!" : "مشکلی پیش آمد !",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          });
      }
    });
  };
  const { _id, fullName, role, evidence, workRecords, email, image } =
    engineer || {};
  return (
    <div className=" fixed z-50 top-0 left-0 w-screen h-screen bg-white md:bg-filter-black-50 md:backdrop-blur-sm flex justify-center items-center">
      {engineer ? (
        <>
          {" "}
          <div
            className={`w-full h-full md:h-auto md:max-w-4xl md:aspect-video bg-BG-500 md:rounded-3xl overflow-hidden relative`}
          >
            <div
              className={` absolute top-3 right-6  md:top-auto md:right-auto md:bottom-3 md:left-6 z-50`}
            >
              {isAdmin ? (
                <div className="flex justify-center items-center gap-x-2">
                  <button onClick={Delete}>{trash("#14213d")}</button>

                  <Link
                    href={`/${
                      isEnLang ? "en" : "fa"
                    }/admin/engineer/update/${_id}`}
                  >
                    {edit("#14213d")}
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
            <img
              src="/images/engineerSection/uni.png"
              alt=""
              className={`absolute w-48 top-60 md:top-20 ${
                isEnLang ? "right-0 scale-x-[-1]" : ""
              }`}
            />
            <img
              src="/images/engineerSection/work.png"
              alt=""
              className={`absolute w-80 bottom-32 md:bottom-20 ${
                isEnLang ? "scale-x-[-1]" : "right-0"
              }`}
            />
            <Link
              href={`/${isEnLang ? "en" : "fa"}/About-us`}
              scroll={false}
              className={`absolute top-5 left-7 md:hidden z-50`}
            >
              {arrowCircleLeft2("#353535", "40", "Outline")}
            </Link>
            <Link
              href={`/${isEnLang ? "en" : "fa"}/About-us`}
              scroll={false}
              className={`absolute top-5 hidden md:block z-50 ${
                isEnLang ? "right-7" : "left-7"
              }`}
            >
              {closeSquare("#353535", "40", "Outline")}
            </Link>
            <div
              className={`w-full h-full absolute top-0 right-0 overflow-y-auto scrollbar-hide flex flex-col items-center px-7`}
            >
              <div
                className={`w-full flex flex-col gap-7 mt-20 md:mt-5 ${
                  isEnLang ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`bg-text-500 aspect-[3/1] w-full md:w-1/2 rounded-lg md:rounded-2xl flex p-3 ${
                    isEnLang ? "items-center" : "flex-row-reverse items-center"
                  }`}
                >
                  <img
                    src={
                      image
                        ? image
                        : "/images/no-image.jpg"
                    }
                    className={`w-1/3 aspect-square rounded-lg md:rounded-2xl object-cover`}
                  />
                  <div
                    className={`w-2/3 h-full flex flex-col px-3 md:px-2 py-2 ${
                      isEnLang
                        ? "justify-center gap-y-3"
                        : "items-end justify-around"
                    }`}
                  >
                    <p
                      className={`text-primary-500 text-base md:text-xl ${
                        isEnLang ? "text-Roboto-Bold" : "text-Pinar-Bold"
                      }`}
                    >
                      {fullName}
                    </p>
                    <p
                      className={`text-xs md:text-lg text-text-100 -mb-2 ${
                        isEnLang ? "text-Roboto-Medium" : "text-Pinar-Medium"
                      }`}
                    >
                      {role}
                    </p>
                    <p
                      className={`text-xs md:text-lg text-text-100 ${
                        isEnLang ? "text-Roboto-Medium" : "text-Pinar-Medium"
                      }`}
                    >
                      {email}
                    </p>
                  </div>
                </div>
                <div
                  className={`aspect-[3/1] w-full md:w-1/2 flex flex-col justify-center md:items-center gap-y-2 md:pr-1 md:pl-5 ${
                    isEnLang ? "" : "items-end"
                  }`}
                >
                  <p
                    className={`text-text-500 text-lg ${
                      isEnLang
                        ? "text-Roboto-Bold md:text-2xl"
                        : "text-Pinar-ExtraBold md:text-xl"
                    }`}
                  >
                    {isEnLang ? "Professional degree" : "مدرک حرفه ای"}
                  </p>
                  <p
                    className={`text-text-500 text-sm ${
                      isEnLang
                        ? "text-Roboto-Regular md:text-Roboto-Medium"
                        : "text-Pinar-Regular md:text-Pinar-SemiBold md:text-base leading-10 dir-rtl"
                    }`}
                  >
                    {evidence}
                  </p>
                </div>
              </div>
              <div
                className={`w-full flex mt-16 md:mt-5 mb-3 ${
                  isEnLang ? "" : "justify-end"
                }`}
              >
                <p
                  className={`text-text-500 text-lg ${
                    isEnLang
                      ? "text-Roboto-Bold md:text-2xl md:ml-24"
                      : "text-Pinar-ExtraBold md:text-xl md:mr-24"
                  }`}
                >
                  {isEnLang ? "work experience" : "سوابق حرفه ای"}
                </p>
              </div>
              <ul
                className={`h-full w-full text-text-500 text-sm md:text-base list-inside list-disc child:mb-2 ${
                  isEnLang
                    ? "text-Roboto-Regular md:text-Roboto-Medium md:pl-16"
                    : "text-Pinar-Regular md:text-Pinar-Bold md:pr-16 dir-rtl"
                }`}
              >
                {workRecords.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
};

export default EngineerDetails;
