import HomePageBG from "@/components/modules/homePage/HomePageBG";
import Link from "next/link";
import React from "react";
function page() {
  return (
    <>
      <div className="w-full relative">
        <div className="absolute top-0 left-0 w-full h-screen -z-10">
          <HomePageBG isEnLang />
        </div>
        <div className=" container mx-auto flex justify-center">
          <div className="w-full md:w-[calc(100%-128px)] overflow-y-auto scrollbar-hide">
            <div
              className={`w-full h-screen flex justify-center md:justify-end`}
            >
              <div
                className={`flex flex-col md:justify-center items-center md:items-start md:scale-75 lg:scale-100`}
              >
                <p
                  className={`text-5xl text-text-50 text-Roboto-Bold hidden md:block`}
                >
                  Welcome
                </p>
                <p
                  className={`tittle md:tittle1 text-4xl md:text-5xl text-text-500 md:text-text-50 text-Roboto-Bold flex flex-col items-center md:flex-row h-64 md:h-auto md:mt-6 gap-x-2`}
                >
                  <span className={`mt-16 md:mt-0 `}> We are </span>
                  <span
                    className={`tittle2 md:tittle3 text-filter-black-20 md:text-7xl mt-6 md:mt-0 text-5xl`}
                  >
                    {" "}
                    ALMAS SAZAN{" "}
                  </span>
                </p>
                <div
                  className={`w-80 h-8 md:w-[27rem] md:h-10 rounded bg-primary-500 flex justify-center items-center translate-y-1/2 md:mt-3`}
                >
                  <p
                    className={`text-xs md:text-base text-black text-Roboto-Bold text-center w-full`}
                  >
                    {" "}
                    Manufacturer of screw, nut and welded metal structures{" "}
                  </p>
                </div>
                <p
                  className={`text-xs md:text-base md:text-text-50 text-text-500 text-Roboto-Medium w-[19rem] text-justify md:w-[42rem] leading-5 md:leading-6 mt-9`}
                >
                  Creating profit and economic value through the design,
                  construction and presentation of metal structures of the large
                  construction industry with a view Industrialization and
                  support of optimized designs of metal structures in high-rise
                  buildings while respecting Putting the commitment and
                  expertise of human resources as the highest business partner
                  through attention to creativity and Innovation in the shadow
                  of teamwork and the use of new industrial technologies
                </p>
                <Link
                  href={"/en/About-us"}
                  className={`bg-primary-500 py-3 px-10 md:py-4  md:px-16 rounded-xl md:rounded-2xl mt-16`}
                >
                  <p
                    className={`text-sm md:text-xl text-Roboto-Bold text-text-500`}
                  >
                    Get to know us more!
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

export default page;
