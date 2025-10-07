import React from "react";

function Container({ className = "", dir, children }) {
  return (
    <>
      {dir && (dir === "ltr" || dir === "rtl") ? (
        <div dir={dir} className={className}>
          {children}
        </div>
      ) : (
        <div className={className}>{children}</div>
      )}
    </>
  );
}

export default Container;
