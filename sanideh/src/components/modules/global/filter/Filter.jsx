import React from "react";

function Filter({ className = "", children }) {
  return (
    <div
      className={`w-full h-full bg-black/70 fixed z-50 top-0 left-0 ${className}`}
    >
      {children}
    </div>
  );
}

export default Filter;
