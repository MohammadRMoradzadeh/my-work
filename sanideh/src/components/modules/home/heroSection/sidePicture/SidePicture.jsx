import React from "react";

function SidePicture({ className }) {
  return (
    <div className={` ${className} w-5/6 sm:w-178 aspect-89/59 relative`}>
      <img
        src="/images/heroSection/vehicle.png"
        className="w-75/89 absolute top-0 left-0"
        alt=""
      />
      <img
        src="/images/heroSection/rocks.png"
        className="w-127/356 absolute bottom-0 right-0"
        alt=""
      />
    </div>
  );
}

export default SidePicture;
