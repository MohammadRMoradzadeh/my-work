"use client";
import { roles } from "@/utils/dataContainer";
import { arrowCircleLeft2, closeSquare, edit, trash } from "@/utils/icons";
import { fetchData, getMe } from "@/utils/tools";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ProjectDetails = ({ isEnLang = false }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [id, setId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [userRoleLoading, setUserRoleLoading] = useState(false);
  const [userRoleError, setUserRoleError] = useState(null);
  const [project, setProject] = useState(null);
  const [projectLoading, setProjectLoading] = useState(false);
  const [projectError, setProjectError] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    setId(searchParams.get("id"));
  }, []);
  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        await fetchData(
          `/api/project/${isEnLang ? "en" : "fa"}/${id}`,
          setProject,
          setProjectLoading,
          setProjectError
        );
      };
      fetchProject();
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
        ? "Should the project be deleted?"
        : "آیا پروژه حذف شود ؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14213d",
      cancelButtonColor: "#fca311",
      cancelButtonText: isEnLang ? "No!" : "خیر!",
      confirmButtonText: isEnLang ? "Yes" : "بله",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/project/${id}`)
          .then((res) => {
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: isEnLang
                ? "Project deleted successfully"
                : "پروژه با موفقیت حذف شد",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didClose: () => {
                isEnLang
                  ? router.replace("/en/projects")
                  : router.replace("/fa/projects");
              },
            });
          })
          .catch((error) => {
            console.log(" (project details DELETE) Error:", error);
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
  const { _id, title, employer, startDate, duration, description, images } =
    project || {};
  return (
    <div
      className={`fixed z-50 top-0 left-0 w-screen h-screen bg-white md:bg-filter-black-50 md:backdrop-blur-sm flex justify-center items-center ${
        isEnLang ? " dir-ltr" : " dir-rtl"
      }`}
    >
      {project ? (
        <>
          {" "}
          <div
            className={`md:hidden w-full h-screen flex flex-col gap-y-6 px-8 pt-8`}
          >
            <div
              className={`w-full flex justify-between ${
                isEnLang ? "" : "flex-row-reverse"
              }`}
            >
              <Link href={`/${isEnLang ? "en" : "fa"}/projects`} scroll={false}>
                {arrowCircleLeft2()}
              </Link>
              {isAdmin ? (
                <div className={`flex justify-center items-center gap-x-2`}>
                  <button onClick={Delete}>{trash("#14213d")}</button>

                  <Link
                    href={`/${
                      isEnLang ? "en" : "fa"
                    }/admin/project/update/${_id}`}
                  >
                    {edit("#14213d")}
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className={`w-full flex justify-center items-center`}>
              <p className={`text-text-500 text-Pinar-Bold text-2xl`}>
                {title}
              </p>
            </div>
            <div className={`w-full grid  grid-cols-4 p-2`}>
              <div
                className={`col-span-1 w-full h-full p-1 flex flex-col gap-y-1`}
              >
                {images ? (
                  images.map((image, index) => {
                    return (
                      <div
                        className={`w-full rounded-lg cursor-pointer  border-text-500 p-px ${
                          imageIndex === index ? "border-2" : ""
                        }`}
                        onClick={() => {
                          setImageIndex(index);
                        }}
                      >
                        <img
                          className="w-full aspect-video rounded-md object-cover"
                          src={image}
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              <div
                className={`col-span-3 w-full aspect-square rounded-2xl overflow-hidden`}
              >
                <img
                  src={
                    images.length > 0
                      ? images[imageIndex]
                      : "/images/no-image.jpg"
                  }
                  alt=""
                  className={`w-full h-full object-cover`}
                />
              </div>
            </div>
            <p className={`text-Pinar-Bold text-xs text-text-500`}>
              {isEnLang ? `Employer: ${employer}` : `کارفرما: ${employer}`}
            </p>
            <p className={`text-Pinar-Bold text-xs text-text-500`}>
              {isEnLang
                ? `Project start date: ${startDate.month}/${startDate.year}`
                : `تاریخ شروع پروژه: ${startDate.month}/${startDate.year}`}
            </p>
            <p className={`text-Pinar-Bold text-xs text-text-500`}>
              {isEnLang
                ? `Project duration: ${duration}`
                : `مدت پروژه : ${duration}`}
            </p>
            <p
              className={`text-Pinar-Medium text-xs text-text-500 text-justify`}
            >
              <span className={`text-Pinar-Bold text-xs text-text-500`}>
                {isEnLang ? `Description:` : `توضیحات:`}
              </span>
              {description}
            </p>
          </div>
          <div
            className={`hidden md:flex w-[50rem] aspect-[26/21] bg-BG-500 rounded-2xl px-12 py-8 justify-center items-center relative`}
          >
            <Link
              href={`/${isEnLang ? "en" : "fa"}/projects`}
              scroll={false}
              className={`absolute top-6 ${isEnLang ? "right-6 " : "left-6 "}`}
            >
              {closeSquare("#353535", "40", "Outline")}
            </Link>
            <div
              className={`aspect-[157/130] w-full grid grid-cols-9 grid-rows-3`}
            >
              <div
                className={`w-full h-full col-span-4 flex justify-center items-center`}
              >
                <p className={`text-Pinar-Bold text-2xl text-text-500`}>
                  {title}
                </p>
              </div>
              <div className={`w-full h-full col-span-4`}></div>
              <div></div>
              <div
                className={`w-full h-full col-span-4 row-span-2 bg-primary-500 rounded-t-2xl ${
                  isEnLang ? "rounded-bl-2xl" : "rounded-br-2xl"
                }`}
              >
                <div
                  className={`w-full h-1/2 pt-8 px-8 flex flex-col justify-between`}
                >
                  <p className={`text-Pinar-SemiBold text-base text-text-500`}>
                    {isEnLang
                      ? `Employer: ${employer}`
                      : `کارفرما: ${employer}`}
                  </p>
                  <p className={`text-Pinar-SemiBold text-base text-text-500`}>
                    {isEnLang
                      ? `Project start date: ${startDate.month}/${startDate.year}`
                      : `تاریخ شروع پروژه: ${startDate.month}/${startDate.year}`}
                  </p>
                  <p className={`text-Pinar-SemiBold text-base text-text-500`}>
                    {isEnLang
                      ? `Project duration: ${duration}`
                      : `مدت پروژه : ${duration}`}
                  </p>
                  <p className={`text-Pinar-SemiBold text-base text-text-500`}>
                    {isEnLang ? `Description:` : `توضیحات:`}
                  </p>
                </div>
              </div>
              <div
                className={`w-full h-full col-span-4 row-span-2  bg-primary-500 relative`}
              >
                <div
                  className={`w-full h-full absolute left-0 bottom-1/2 bg-BG-500 rounded-2xl p-4`}
                >
                  <img
                    className={`w-full h-full object-cover rounded-2xl`}
                    src={
                      images.length > 0
                        ? images[imageIndex]
                        : "/images/no-image.jpg"
                    }
                    alt=""
                  />
                </div>
                <div
                  className={`absolute h-1/2 w-[calc(100%*2)] bottom-0  overflow-hidden p-8 ${
                    isEnLang ? "right-0" : "left-0"
                  }`}
                >
                  <p
                    className={`inline-block w-full text-wrap text-Pinar-Medium text-sm text-text-500  text-justify`}
                  >
                    {description}
                  </p>
                </div>
              </div>
              <div
                className={`w-full h-full row-span-2 bg-primary-500 rounded-t-2xl pt-3 p-2 flex flex-col gap-y-2 relative ${
                  isEnLang ? "rounded-br-2xl" : "rounded-bl-2xl"
                }`}
              >
                <div
                  className={`w-full flex justify-center items-center  absolute  bottom-full left-0 py-1`}
                >
                  {isAdmin ? (
                    <div className={`flex justify-center items-center gap-x-2`}>
                      <button onClick={Delete}>{trash("#14213d")}</button>

                      <Link
                        href={`/${
                          isEnLang ? "en" : "fa"
                        }/admin/project/update/${_id}`}
                      >
                        {edit("#14213d")}
                      </Link>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                {images ? (
                  images.map((image, index) => {
                    return (
                      <div
                        className={`w-full rounded-lg cursor-pointer  border-text-500 p-px ${
                          imageIndex === index ? "border-2" : ""
                        }`}
                        onClick={() => {
                          setImageIndex(index);
                        }}
                      >
                        <img
                          className="w-full aspect-video rounded-md object-cover"
                          src={image}
                        />
                      </div>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
};

export default ProjectDetails;
