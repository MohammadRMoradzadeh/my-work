import HomePageBG from "@/components/modules/homePage/HomePageBG";
import Link from "next/link";
import React from "react";
export default async function Home() {
  return (
    <>
      <div className="w-full h-screen relative">
        <div className="absolute top-0 left-0 w-full h-screen -z-10">
          <HomePageBG />
        </div>
        <div className=" container mx-auto flex justify-center">
          <div className="w-full md:w-[calc(100%-128px)]">
            <div
              className={`w-full h-screen flex justify-center md:justify-start`}
            >
              <div
                className={`flex flex-col md:justify-center items-center md:items-end md:scale-75 lg:scale-100`}
              >
                <p
                  className={`text-5xl text-text-50 text-Pinar-Bold hidden md:block`}
                >
                  خوش آمدید
                </p>
                <p
                  className={`tittle md:tittle1 text-4xl md:text-5xl text-text-500 md:text-text-50 text-Pinar-Bold flex flex-col items-center md:flex-row-reverse h-64 md:h-auto md:mt-6 2xl:mt-14 gap-x-2`}
                >
                  <span className={`mt-12 md:mt-0`}> ما </span>
                  <span
                    className={`tittle2 md:tittle3 text-filter-black-20 md:text-7xl mt-5 md:mt-0 text-5xl`}
                  >
                    {" "}
                    الماس سازان{" "}
                  </span>
                  <span className={`mt-5 md:mt-0`}> هستیم </span>
                </p>
                <div
                  className={`w-72 h-8 md:w-[23rem] md:h-10 rounded bg-primary-500 flex justify-center items-center translate-y-1/2 md:mt-6 2xl:mt-6`}
                >
                  <p
                    className={`text-xs md:text-base text-black text-Pinar-Bold text-center`}
                  >
                    {" "}
                    تولید کننده استراکچرهای فلزی پیچ ، مهره ای و جوشی{" "}
                  </p>
                </div>
                <p
                  dir="rtl"
                  className={`text-xs md:text-base md:text-text-50 text-text-500 text-Pinar-Medium w-[18.5rem] text-justify md:w-[42rem] leading-6 md:leading-8 mt-12`}
                >
                  خلق سود و ارزش اقتصادی از طریق طراحی ساخت و اراِئه سازه های
                  فلزی صنعت بزرگ ساختمان با نگاه صنعتی سازی و حمایت از طرح های
                  بهینه سازی شده سازه فلزی در ساختمانهای بلند مرتبه ضمن ارج
                  نهادن به تعهد و تخصص نیروی انسانی به عنوان والاترین شریک تجاری
                  از طریق توجه به خلاقیت و نوآوری در سایه کار گروهی و استفاده از
                  تکنولوژی های نوین صنعتی
                </p>

                <Link
                  href={"/fa/About-us"}
                  className={`bg-primary-500 py-3 px-10 md:py-4  md:px-16 rounded-xl md:rounded-2xl mt-16`}
                >
                  <p
                    dir="rtl"
                    className={`text-sm md:text-xl text-Pinar-Bold text-text-500`}
                  >
                    بیشتر با ما آشنا شو !
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
