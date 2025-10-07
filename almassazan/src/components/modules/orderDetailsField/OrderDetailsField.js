import React from "react";

const OrderDetailsField = ({
  isArea = false,
  tittle = null,
  value = null,
  isEnLang = false,
}) => {
  return (
    <>
      <div
        className={`bg-BG-400 md:bg-BG-600 rounded-lg md:rounded-2xl overflow-hidden w-full ${
          isArea ? "h-24 md:h-32 " : " h-10 md:h-14"
        } p-2  flex items-center gap-x-2 dir-ltr ${
          isEnLang ? "" : "flex-row-reverse"
        } `}
      >
        {tittle && (
          <p
            className={` border-text-500 text-text-500 text-Pinar-ExtraBold text-xs md:text-base overflow-hidden min-w-fit ${
              isEnLang ? "dir-ltr border-r pr-2" : "dir-rtl  border-l pl-2"
            }`}
          >
            {tittle}
          </p>
        )}

        <p
          className={` ${
            isArea ? "h-full overflow-y-auto" : "text-nowrap"
          } w-full text-text-500 text-Pinar-Medium md:text-Pinar-SemiBold md:text-base text-xs ${
            isEnLang ? "dir-ltr" : "dir-rtl"
          } `}
        >
          {value}
        </p>
      </div>
    </>
  );
};

export default OrderDetailsField;
