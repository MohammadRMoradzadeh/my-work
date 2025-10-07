"use client";
import { filterIcon } from "@/utils/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import jalaali from "jalaali-js";
import React, { useEffect, useState } from "react";
import { fetchData } from "@/utils/tools";
function Orders() {
  const pathname = usePathname();
  const select = [
    { value: "all", title: "همه درخواست ها " },
    { value: "notAnswered", title: "پاسخ داده نشده " },
    { value: "answered", title: "پاسخ داده شده " },
  ];
  const [consultation, setConsultation] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(select[0].value);
  const [showOptions, setShowOptions] = useState(false);
  const fetchOrders = async () => {
    fetchData("/api/ConsultationRequest", setData, setLoading, setError);
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

  useEffect(() => {
    if (filter === select[0].value) {
      setConsultation(data ? data : []);
    } else if (filter === select[1].value) {
      setConsultation(data ? data.filter((item) => !item.isAnswered) : []);
    } else if (filter === select[2].value) {
      setConsultation(data ? data.filter((item) => item.isAnswered) : []);
    } else {
      console.log("(orders) filter invalid!!!");
    }
  }, [filter, data]);

  useEffect(() => {
    setShowOptions(false);
  }, [filter]);

  return (
    <div className=" container mx-auto flex justify-center">
      <div className="w-full xl:w-[calc(100%-128px)]">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 pt-4 pb-8 dir-rtl">
          <div className="w-full flex justify-center items-center xl:justify-start">
            <p className="text-text-500 text-Pinar-ExtraBold text-base xl:text-4xl">
              لیست سفارش های ثبت شده
            </p>
          </div>
          <div className="w-full flex justify-center items-center xl:justify-end">
            <label htmlFor="input-temp" className="relative">
              <input
                className="w-0 h-0"
                type="text"
                readOnly
                id="input-temp"
                onFocus={() => {
                  setTimeout(() => setShowOptions(true), 200);
                }}
                onBlur={() => setTimeout(() => setShowOptions(false), 200)}
              />
              <div className="w-48 h-14 border-2 border-text-500 rounded-xl flex justify-center items-center gap-x-2 cursor-pointer">
                <div>{filterIcon("#14213d", "24", "Bold")}</div>
                <p className="text-text-500 text-Pinar-SemiBold text-sm">
                  {select.find((item) => item.value === filter).title}
                </p>
              </div>
              <div
                className={`${
                  showOptions ? "flex" : "hidden"
                } absolute top-full w-48 p-2 flex-col justify-center items-center gap-y-3 transition-all`}
              >
                {select.map((item, index) =>
                  item.value !== filter ? (
                    <label
                      key={index}
                      htmlFor={`option${index}`}
                      className="w-full flex items-center justify-center cursor-pointer"
                    >
                      <input
                        id={`option${index}`}
                        type="radio"
                        name="option"
                        value={item.value}
                        checked={item.value === filter}
                        onChange={(e) => {
                          setFilter(e.target.value);
                        }}
                        className="hidden"
                      />
                      <p className="hover:text-primary-500 text-text-500 text-Pinar-SemiBold text-sm">
                        {item.title}
                      </p>
                    </label>
                  ) : null
                )}
              </div>
            </label>
          </div>

          <div className="w-full xl:col-span-2">
            <div className="w-full h-full hidden xl:flex flex-col rounded-3xl overflow-x-hidden overflow-y-auto px-6 bg-BG-700 mt-10">
              <div className="w-full h-24 border-b-2 border-text-500 grid grid-cols-6">
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-Pinar-Bold text-xl text-black">کارفرما</p>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-Pinar-Bold text-xl text-black">
                    شماره تماس
                  </p>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-Pinar-Bold text-xl text-black">
                    کاربری سازه
                  </p>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-Pinar-Bold text-xl text-black">
                    تاریخ ثبت سفارش
                  </p>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-Pinar-Bold text-xl text-black">
                    فایل محاسبات
                  </p>
                </div>
                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-Pinar-Bold text-xl text-black">
                    وضعیت پروژه
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col items-center gap-y-2 pt-6">
                {consultation.map((item, index) => {
                  return (
                    <div
                      key={item._id}
                      className={`w-full h-16 rounded-xl grid grid-cols-6 ${
                        index % 2 === 0 ? "bg-BG-600" : ""
                      }`}
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <Link
                          href={`${pathname}/${item._id}`}
                          className="text-Pinar-Medium text-xl text-black"
                        >
                          {`${item.firstName} ${item.lastName}`}
                        </Link>
                      </div>
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="text-Pinar-Medium text-xl text-black">
                          {item.phone}
                        </p>
                      </div>
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="text-Pinar-Medium text-xl text-black">
                          {item.useOfTheStructure}
                        </p>
                      </div>
                      <div className="w-full h-full flex justify-center items-center">
                        <p className="text-Pinar-Medium text-xl text-black">
                          {convertDate(item.date)}
                        </p>
                      </div>
                      <div className="w-full h-full flex justify-center items-center">
                        {item.file !== "" ? (
                          <a
                            href={item.file}
                            download
                            className="w-32 h-10 rounded-xl bg-text-500 flex justify-center items-center"
                          >
                            <p className="text-Pinar-Bold text-base text-primary-500">
                              دانلود فایل
                            </p>
                          </a>
                        ) : (
                          <p className="text-Pinar-Medium text-xl text-black">
                            بدون فایل محاسبه
                          </p>
                        )}
                      </div>
                      <div className="w-full h-full flex justify-center items-center">
                        {item.isAnswered ? (
                          <div className="w-36 h-10 rounded-xl bg-answered flex justify-center items-center">
                            <p className="text-Pinar-Medium text-base text-black">
                              پاسخ داده شده
                            </p>
                          </div>
                        ) : (
                          <div className="w-36 h-10 rounded-xl bg-notAnswered flex justify-center items-center">
                            <p className="text-Pinar-Medium text-base text-black">
                              پاسخ داده نشده
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="xl:hidden w-full pt-4 px-8 flex flex-col items-center gap-y-4">
              {consultation.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="w-full h-32 rounded-xl bg-BG-600 grid grid-cols-3 grid-rows-4 p-2"
                  >
                    <div className="col-span-2 w-full h-full flex items-center">
                      <Link
                        href={`${pathname}/${item._id}`}
                        className="text-Pinar-Medium text-xs text-black"
                      >
                        {`کارفرما: ${item.firstName} ${item.lastName}`}
                      </Link>
                    </div>
                    <div className=" w-full h-full flex items-center justify-end">
                      {item.isAnswered ? (
                        <div className="w-24 h-6 rounded-xl flex justify-center items-center bg-answered ">
                          <p className="text-Pinar-Medium text-xs text-text-500">
                            پاسخ داده شده
                          </p>
                        </div>
                      ) : (
                        <div className="w-24 h-6 rounded-xl flex justify-center items-center bg-notAnswered ">
                          <p className="text-Pinar-Medium text-xs text-text-500">
                            پاسخ داده نشده
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-span-3 w-full h-full flex items-center">
                      <p className="text-Pinar-Medium text-xs text-black">
                        شماره تلفن: {item.phone}
                      </p>
                    </div>
                    <div className="col-span-2 w-full h-full flex items-center">
                      <p className="text-Pinar-Medium text-xs text-black">
                        کاربری سازه: {item.useOfTheStructure}
                      </p>
                    </div>
                    <div className=" w-full h-full flex items-center justify-end">
                      <p className="text-Pinar-Medium text-xs text-black">
                        {convertDate(item.date)}
                      </p>
                    </div>
                    <div className="col-span-2 w-full h-full flex items-center">
                      <p className="text-Pinar-Medium text-xs text-black">
                        فایل محاسبات:
                      </p>
                    </div>
                    <div className=" w-full h-full flex items-center justify-end">
                      {item.file === "" ? (
                        <p className="text-Pinar-Medium text-xs text-black">
                          بدون فایل محاسبه
                        </p>
                      ) : (
                        <div className="w-20 h-8 bg-text-500 rounded-2xl flex justify-center items-center">
                          <p className="text-primary-500 text-Pinar-Bold text-xs">
                            دانلود فایل
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
