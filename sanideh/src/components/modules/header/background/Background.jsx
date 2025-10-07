import React from "react";

function Background({ children }) {
  return (
    <div className="w-full h-16 sm:h-20 bg-primary px-4 flex items-center">
      {children}
    </div>
  );
}

export default Background;
