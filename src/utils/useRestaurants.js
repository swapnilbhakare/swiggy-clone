import { FETCH_ALL_RESTAURANTS } from "../config";
import React, { useEffect, useState } from "react";
const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filterdRestaurants, setFilterdRestaurants] = useState(null);

  useEffect(() => {
    getRestarants();
  }, []);

  async function getRestarants() {
    const response = await fetch(FETCH_ALL_RESTAURANTS);
    const json = await response.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return [allRestaurants, filterdRestaurants, setFilterdRestaurants];
};
export default useRestaurants;
