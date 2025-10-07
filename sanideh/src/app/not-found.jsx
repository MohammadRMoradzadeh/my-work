import React from "react";

import Link from "next/link";
const NotFound = () => {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-screen  flex flex-col justify-center items-center gap-y-8">
          <p className="text-text-500 text-5xl text-Pinar-Bold">
            page not found!!!
          </p>
          <Link
            className="px-8 py-2  bg-primary-500 text-Pinar-Bold text-lg text-text-500 rounded-xl"
            href={"/fa"}
          >
            {" "}
            go to home{" "}
          </Link>
        </div>
      </body>
    </html>
  );
};
export default NotFound;
