import { mapPin } from "@/utils/dataContainer/mapPin/mapPin";
import React from "react";

function MapPin() {
  return (
    <div className="w-full aspect-square sm:size-90  rounded-3xl bg-primary relative my-18 sm:mr-4 sm:mt-4">
      <iframe
        src={mapPin}
        className="size-full aspect-square absolute bottom-0 left-0 sm:bottom-4 sm:left-4 rounded-2xl border-2 border-Secondary "
      ></iframe>
    </div>
  );
}

export default MapPin;
