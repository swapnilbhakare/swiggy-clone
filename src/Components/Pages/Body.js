import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import { Shimmer } from "../UI/Shimmer";
import { Link } from "react-router-dom";
import { searchData } from "../../utils/helper.js";
import useRestaurants from "../../utils/useRestaurants";
import { FaSearch } from "react-icons/fa";
import useOnline from "../../utils/useOnline";
import Carousel from "../UI/Carousel";
import { useDispatch, useSelector } from "react-redux";

import {
  setFilteredRestaurants,
  selectAllRestaurants,
  selectCategory,
  selectLoading,
  selectError,
} from "../../Store/restaurantSlice.js";

const Body = () => {
  const fetchedData = useRestaurants();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const category = useSelector((state) => state.restaurants.category);
  const allRestaurants = useSelector(
    (state) => state.restaurants.allRestaurants // Correct selector
  );
  const filteredRestaurants = useSelector(
    (state) => state.restaurants.filteredRestaurants
  );

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(setFilteredRestaurants(allRestaurants));
  }, [dispatch, allRestaurants]);
  const handleSearch = () => {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    dispatch(setFilteredRestaurants(filteredData));
  };

  if (loading) return <Shimmer />;
  if (error) return <div>Error {error}</div>;
  if (!allRestaurants) return <Shimmer />;

  return (
    <div className="max-w-6xl mx-auto mt-28">
      <div className="p-5 m-2 flex justify-end">
        <input
          type="text"
          className="w-56 outline-8"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-orange-600 rounded-full text-white"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
      <Carousel category={category} />
      {filteredRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
              className="m-2"
            >
              <RestaurantCard restaurant={restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;