import React from "react";

function NavLinks({ children }) {
  return (
    <div className="w-fit hidden sm:flex items-center gap-x-6">{children}</div>
  );
}

export default NavLinks;
