import { FETCH_ALL_RESTAURANTS } from "../config";
import React, { useEffect } from "react";
import {
  setAllRestaurants,
  setFilteredRestaurants,
  setCategory,
  setLoading,
  setError,
} from "../Store/restaurantSlice";

import { useDispatch } from "react-redux";

const useRestaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants();
    };

    fetchData();
  }, [dispatch]);

  async function getRestaurants() {
    try {
      dispatch(setLoading(true));

      const response = await fetch(FETCH_ALL_RESTAURANTS);
      const json = await response.json();

      dispatch(
        setCategory(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
      );
      const allRestaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      dispatch(setAllRestaurants(allRestaurants));
      dispatch(setFilteredRestaurants(allRestaurants));

      return allRestaurants;
    } catch (error) {
      dispatch(setError("Error fetching restaurants"));
    } finally {
      dispatch(setLoading(false));
    }

    return [];
  }
};

export default useRestaurants;
