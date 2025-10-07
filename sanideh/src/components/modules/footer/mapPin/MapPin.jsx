import { mapPin } from "@/utils/dataContainer/footer/Footer";
import React from "react";

function MapPin() {
  return (
    <iframe
      src={mapPin}
      loading="lazy"
      className="hidden sm:block w-73 aspect-square border-2 border-Secondary rounded-2xl "
    ></iframe>
  );
}

export default MapPin;
