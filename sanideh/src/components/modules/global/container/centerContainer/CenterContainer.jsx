import React from "react";

function CenterContainer({ className = "", children }) {
  return <div className={` container mx-auto ${className}`}>{children}</div>;
}

export default CenterContainer;
