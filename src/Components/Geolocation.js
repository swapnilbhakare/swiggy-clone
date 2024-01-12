import React, { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { LocationShimmer } from "./Shimmer";
import Modal from "./Modal/Modal";
import SearchLocation from "./SearchLocaton";

const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if ("geolocation" in navigator) {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              timeout: 10000,
            });
          });

          const { latitude, longitude } = position.coords;
          const reverseGeocodingURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          const response = await fetch(reverseGeocodingURL);

          if (!response.ok) {
            throw new Error("Failed to fetch location data");
          }

          const reverseData = await response.json();

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

  const truncatedArea =
    location && location.area.length > 32
      ? location.area.slice(0, 28) + "..."
      : location && location.area;

  return (
    <div>
      {error ? (
        <p>
          <LocationShimmer />
        </p>
      ) : location ? (
        <p
          onClick={() => setIsLocationModalOpen(true)}
          className="flex items-center justify-center ml-4 transition duration-300 cursor-pointer group"
        >
          <span className="font-bold text-gray-600 text-base underline mr-2 transition duration-300  ease-in-out group-hover:text-orange-500">
            {location.city}
          </span>
          <span className="text-gray-500 text-xs ">{truncatedArea}</span>
          <RiArrowDownSLine className="text-orange-500 text-2xl font-bold" />
        </p>
      ) : (
        <LocationShimmer />
      )}

      {isLocationModalOpen && (
        <Modal
          onClose={() => setIsLocationModalOpen(false)}
          direction="left"
          height="100vh"
        >
          <SearchLocation />
        </Modal>
      )}
    </div>
  );
};

export default Geolocation;
