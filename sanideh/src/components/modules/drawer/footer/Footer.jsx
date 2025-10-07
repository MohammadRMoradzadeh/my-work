import React from "react";

function Footer({ children }) {
  return (
    <div className="w-full absolute bottom-0 left-0 px-4 flex flex-col gap-y-6 pb-5">
      {children}
    </div>
  );
}

export default Footer;
