import React from "react";

function SidePicture({ mobile = false }) {
  return (
    <>
      {mobile ? (
        <img
          src="/images/aboutUsSidePicture/aboutUsSidePicture.png"
          alt=""
          className="w-full aspect-video rounded-lg sm:hidden bg-cover bg-center -scale-x-100 mt-5"
        />
      ) : (
        <div className="hidden sm:block relative w-109.5 h-111.75">
          <div className="absolute top-0 start-0 w-97.5 h-68.75 rounded-3xl bg-primary"></div>
          <img
            src="/images/aboutUsSidePicture/aboutUsSidePicture.png"
            alt=""
            className="w-102.25 h-104.5 rounded-3xl border-8 border-Secondary absolute bottom-0 end-0  bg-cover bg-center -scale-x-100"
          />
        </div>
      )}
    </>
  );
}

export default SidePicture;
