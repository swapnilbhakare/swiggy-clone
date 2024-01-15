import React, { useState } from "react";
import { CiGps, CiLocationOn } from "react-icons/ci";
import useGeoLocation from "../utils/useGeoLocation.js";
import { debounce } from "lodash";

const SearchLocation = ({ closeModal, setLocation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { onSearch, handleGetCurrentLocation } = useGeoLocation();
  const [suggestedLocations, setSuggestedLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = debounce(async (query) => {
    if (query.length > 3) {
      setLoading(true);
      try {
        const searchData = await onSearch(query);

        if (searchData.length > 0) {
          const firstResult = searchData[0];

          if (
            firstResult &&
            firstResult.address &&
            firstResult.display_name &&
            firstResult.lat &&
            firstResult.lon &&
            firstResult.osm_id
          ) {
            setLocation({
              id: firstResult.osm_id,
              city: firstResult.display_name.split(",")[-4],
              area: firstResult.display_name,
              latitude: parseFloat(firstResult.lat),
              longitude: parseFloat(firstResult.lon),
            });

            closeModal();
          } else {
            setSuggestedLocations(searchData);
          }
        } else {
          setSuggestedLocations([]);
        }
      } catch (error) {
        console.error(
          "Error fetching or processing search results:",
          error.message
        );

        setSuggestedLocations([]);
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestedLocations([]);
    }
  }, 300);

  const handleSearch = (e) => {
    e.preventDefault();
    debouncedSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      debouncedSearch(searchQuery);
    }
  };

  const handleLocationClick = async () => {
    setLoading(true);
    try {
      const currentLocation = await handleGetCurrentLocation();
      if (currentLocation) {
        setLocation({
          city: currentLocation.city,
          area: currentLocation.area,
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
        });

        closeModal();
      }
    } finally {
      setLoading(false);
    }
  };
  const handleSuggestionClick = (selectedLocation) => {
    setLoading(true);
    try {
      setLocation({
        id: selectedLocation.osm_id,
        city: selectedLocation.display_name.split(",").slice(-4, -3)[0],

        area: selectedLocation.display_name,
        latitude: parseFloat(selectedLocation.lat),
        longitude: parseFloat(selectedLocation.lon),
      });

      closeModal();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 sm:flex items-center">
      <form className="w-full sm:w-72" onSubmit={handleSearch}>
        <div className="flex items-center justify-around">
          <input
            type="search"
            id="location-search"
            name="location-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for area, Street name.."
            className="bg-white border border-gray-300 p-2 h-12 w-full focus:outline-none focus:shadow placeholder-gray-400 text-gray-400 cursor-pointer"
          />
        </div>
        {!searchQuery ? (
          <div className="mt-5 ">
            <button
              type="button"
              onClick={handleLocationClick}
              className="flex text-center bg-white border border-gray-300 p-4 h-16 w-full focus:outline-none focus:shadow cursor-pointer"
            >
              <div className="flex text-2xl text-black">
                <CiGps />
              </div>
              <div className="flex items-start justify-start flex-col px-3">
                <div className="text-black text-base">Get Current Location</div>
                <div className="text-xs text-gray-400">using GPS</div>
              </div>
            </button>
          </div>
        ) : (
          <div className="mt-3 ">
            {loading ? (
              <div>Loading...</div>
            ) : (
              suggestedLocations.map((location) => (
                <div
                  key={location.osm_id}
                  className="flex text-center  bg-white border-dashed border-b border-gray-300 p-4 h-24 w-full focus:outline-none focus:shadow cursor-pointer"
                  onClick={() => handleSuggestionClick(location)}
                >
                  <CiLocationOn className="text-3xl" />
                  <div className="flex justify-start items-start pl-4  flex-col">
                    <p className="text-base">
                      {location.display_name.split(",")[0]}
                    </p>
                    <p className="text-xs">{location.display_name}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchLocation;
