import { useEffect } from "react";
import { GEO_LOCATION_URL } from "../config.js";
import { useSelector, useDispatch } from "react-redux";
import { setLocation, setError } from "../Store/locationSlice.js";
const useGeoLocation = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location);
  const error = useSelector((state) => state.location.error);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if ("geolocation" in navigator) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
          });
        });

        const { latitude, longitude } = position.coords;
        const reverseGeocodingURL = `${GEO_LOCATION_URL}/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const response = await fetch(reverseGeocodingURL);

        if (!response.ok) {
          throw new Error("Failed to fetch location data");
        }

        const reverseData = await response.json();

        dispatch(
          setLocation({
            city: reverseData.address?.city,
            area:
              reverseData.address?.neighbourhood || reverseData.display_name,
            latitude,
            longitude,
          })
        );
      } else {
        throw new Error("Geolocation is not supported by your browser");
      }
    } catch (error) {
      console.error("Error:", error.message);
      dispatch(setError("Failed to fetch location"));
    }
  };

  const onSearch = async (query) => {
    try {
      const searchUrl = `${GEO_LOCATION_URL}/search?format=json&q=${query}`;
      const response = await fetch(searchUrl);

      if (!response.ok) {
        throw new Error("Failed to fetch search result");
      }

      const searchData = await response.json();
      return searchData;
    } catch (error) {
      console.error("Error", error.message);
      return [];
    }
  };

  const handleGetCurrentLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
          });
        });
        const { latitude, longitude } = position.coords;
        const reverseGeocodingURL = `${GEO_LOCATION_URL}/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const response = await fetch(reverseGeocodingURL);
        if (!response.ok) {
          throw new Error("Failed to fetch reverse geocoding data");
        }
        const reverseData = await response.json();

        dispatch(
          setLocation({
            city: reverseData.address?.city,
            area:
              reverseData.address?.neighbourhood || reverseData.display_name,
            latitude,
            longitude,
          })
        );

        return {
          latitude,
          longitude,
          city: reverseData.address.city,
          area: reverseData.display_name,
        };
      } else {
        throw new Error("Geolocation is not supported by your browser");
      }
    } catch (error) {
      console.error("Error:", error.message);
      dispatch(setError("Failed to fetch current location"));
      return null;
    }
  };

  return {
    truncatedArea:
      location && location.area.length > 32
        ? location.area.slice(0, 28) + "..."
        : location && location.area,

    error,
    location,
    onSearch,
    setLocation,
    handleGetCurrentLocation,
  };
};
export default useGeoLocation;
