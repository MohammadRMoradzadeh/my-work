import React from "react";

function Background() {
  return (
    <>
      <img
        className="w-full h-auto hidden sm:block"
        src="/images/footer/background/background.png"
        alt=""
      />
      <img
        className="w-full h-auto sm:hidden"
        src="/images/footer/background/background_mobile.png"
        alt=""
      />
    </>
  );
}

export default Background;
