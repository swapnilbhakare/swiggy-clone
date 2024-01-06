import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { GeolocationURL } from "../config";
const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if ("geolocation" in navigator) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              timeout: 10000, // Set a timeout in milliseconds
            });
          });

          const { latitude, longitude } = position.coords;
          const reverseGeocodingURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          const response = await fetch(reverseGeocodingURL);

          if (!response.ok) {
            throw new Error("Failed to fetch location data");
          }

          const reverseData = await response.json();
          console.log("Reverse Geocoding API Response:", reverseData);

          setLocation({
            city: reverseData.address.city,
            area: reverseData.display_name,
          });
        } else {
          throw new Error("Geolocation is not supported by your browser");
        }
      } catch (error) {
        console.error("Error:", error.message);
        setError("Failed to fetch location");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : location ? (
        <p className=" flex items-center justify-center ml-4 truncate  hover:text-orange-500 transition duration-300 ease-in-out">
          <span className="font-bold text-gray-600 text-base underline mr-2 ">
            {location.city}
          </span>
          <span className="text-gray-500 text-xs ">{location.area}</span>
          <RiArrowDownSLine className="text-orange-500 text-2xl font-bold" />
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Geolocation;
