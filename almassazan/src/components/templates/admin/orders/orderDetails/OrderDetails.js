"use client";
import OrderDetailsField from "@/components/modules/orderDetailsField/OrderDetailsField";
import SectionTittle from "@/components/modules/sectionTittle/SectionTittle";
import { fetchData } from "@/utils/tools";
import jalaali from "jalaali-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const OrderDetails = ({ id = "#", isEnLang = false }) => {
  const [consultation, setConsultation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    fetchData(
      `/api/ConsultationRequest/${id}`,
      setConsultation,
      setLoading,
      setError
    );
  };
  const convertDate = (createDate) => {
    if (!createDate) {
      return "تاریخ نامعتبر است";
    }
    const date = new Date(createDate);
    if (isNaN(date.getTime())) {
      return "تاریخ نامعتبر است";
    }
    const jalaaliDate = jalaali.toJalaali(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );

    return `${jalaaliDate.jy}/${
      jalaaliDate.jm / 10 < 1 ? `0${jalaaliDate.jm}` : jalaaliDate.jm
    }/${jalaaliDate.jd / 10 < 1 ? `0${jalaaliDate.jd}` : jalaaliDate.jd}
    `;
  };
  useEffect(() => {
    fetchOrders();
  }, []);

  const sendHandler = async () => {
    Swal.fire({
      title: isEnLang
        ? `Change the status of the order to ${
            !consultation.isAnswered ? '"answered"' : '"not answered"'
          } ?`
        : `وضعیت سفارش به ${
            !consultation.isAnswered ? '"پاسخ داده شده"' : '"پاسخ داده نشده"'
          } تغییر کند ؟ `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14213d",
      cancelButtonColor: "#fca311",
      cancelButtonText: isEnLang ? "No!" : "خیر!",
      confirmButtonText: isEnLang ? "Yes" : "بله",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`/api/ConsultationRequest/${id}`)
          .then((response) => {
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "success",
              title: `${
                isEnLang ? response.data.message[0] : response.data.message[1]
              }`,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didClose: () => {
                fetchOrders();
              },
            });
          })
          .catch((error) => {
            console.log(" (order details PUT) Error:", error);
            Swal.fire({
              toast: true,
              position: "top-end",
              icon: "Error",
              title: `${
                isEnLang ? "There was a problem !!" : "مشکلی پیش آمد !!"
              }`,
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
            });
          });
      }
    });
  };
  return (
    <>
      {consultation ? (
        <div className=" container mx-auto flex justify-center">
          <div className="w-full md:w-[calc(100%-128px)] overflow-y-auto scrollbar-hide">
            <div className="w-full flex gap-y-2 flex-col items-center">
              <div className="w-full grid grid-cols-3 mt-4 md:mt-6 ">
                <div className="w-full h-full flex gap-x-3 items-center justify-center ">
                  <div
                    onClick={sendHandler}
                    className={`w-32 h-8 rounded-lg flex justify-center items-center cursor-pointer ${
                      consultation.isAnswered ? "bg-answered" : "bg-notAnswered"
                    } `}
                  >
                    <p className="text-Pinar-Medium text-sm text-text-500">
                      {consultation.isAnswered
                        ? " پاسخ داده شده"
                        : " پاسخ داده نشده"}
                    </p>
                  </div>
                  <p className="text-Pinar-Medium text-base text-black">
                    {convertDate(consultation.date)}
                  </p>
                </div>
                <SectionTittle
                  tittle={isEnLang ? "Order Details" : "جزئیات سفارش"}
                />
              </div>
              <div
                className={`w-full px-8 pb-16 grid grid-cols-1 md:grid-cols-2 gap-x-40 ${
                  isEnLang ? "" : "dir-rtl"
                }`}
              >
                <div className={`w-full`}>
                  <p
                    className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6  mt-8 md:mt-10`}
                  >
                    {isEnLang ? "Personal Information" : "اطلاعات شخصی"}
                  </p>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 ${
                      isEnLang ? "" : "dir-rtl"
                    }`}
                  >
                    <OrderDetailsField
                      value={consultation.firstName}
                      isEnLang={isEnLang}
                      tittle={isEnLang ? "first name" : "نام"}
                    />
                    <OrderDetailsField
                      value={consultation.lastName}
                      isEnLang={isEnLang}
                      tittle={isEnLang ? "last name" : "نام خانوادگی"}
                    />
                    <div className={`md:col-span-2`}>
                      <OrderDetailsField
                        value={consultation.phone}
                        isEnLang={isEnLang}
                        tittle={isEnLang ? "phone number" : "شماره تماس"}
                      />
                    </div>
                    <div className={`md:col-span-2`}>
                      <OrderDetailsField
                        value={consultation.email}
                        isEnLang={isEnLang}
                        tittle={isEnLang ? "email" : "ایمیل"}
                      />
                    </div>
                  </div>
                  <p
                    className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6 mt-8 md:mt-10`}
                  >
                    {isEnLang ? "Land dimensions" : "ابعاد زمین"}
                  </p>
                  <div
                    className={`grid grid-cols-2 gap-4 md:gap-5 ${
                      isEnLang ? "" : "dir-rtl"
                    }`}
                  >
                    <OrderDetailsField
                      value={consultation.width}
                      isEnLang={isEnLang}
                      tittle={isEnLang ? "width" : "عرض"}
                    />
                    <OrderDetailsField
                      value={consultation.length}
                      isEnLang={isEnLang}
                      tittle={isEnLang ? "length" : "طول"}
                    />
                    <div className={`col-span-2`}>
                      <a href={consultation.file} download>
                        <div className="w-full h-16 rounded-2xl bg-text-500 flex justify-center items-center ">
                          <p className="text-Pinar-Bold text-xs md:text-base text-primary-500">
                            {isEnLang
                              ? "Download attachment"
                              : "دانلود فایل پیوست"}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`w-full`}>
                  <p
                    className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6 mt-8 md:mt-10`}
                  >
                    {isEnLang ? "Use of the structure" : "کاربری سازه"}
                  </p>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 ${
                      isEnLang ? "" : "dir-rtl"
                    }`}
                  >
                    <div className={`md:col-span-2`}>
                      <OrderDetailsField
                        value={consultation.useOfTheStructure}
                        isEnLang={isEnLang}
                        tittle={
                          isEnLang ? "use of the structure" : "کاربری سازه"
                        }
                      />
                    </div>
                    <OrderDetailsField
                      value={consultation.floors}
                      isEnLang={isEnLang}
                      tittle={isEnLang ? "number of floors" : "تعداد طبقات"}
                    />
                    <OrderDetailsField
                      value={consultation.foundation}
                      isEnLang={isEnLang}
                      tittle={isEnLang ? "foundation" : "زیربنا"}
                    />
                    <div className={`md:col-span-2`}>
                      <OrderDetailsField
                        value={consultation.address}
                        isEnLang={isEnLang}
                        tittle={isEnLang ? "location" : "مکان"}
                      />
                    </div>
                  </div>
                  <p
                    className={`text-text-500 text-Pinar-Bold text-lg md:text-Pinar-SemiBold md:text-2xl mb-3 md:mb-6 mt-8 md:mt-10`}
                  >
                    {isEnLang ? "Description" : "توضیحات"}
                  </p>
                  <OrderDetailsField
                    isArea
                    value={consultation.description}
                    isEnLang={isEnLang}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex justify-center items-center ">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
