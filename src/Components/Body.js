import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurants from "../utils/useRestaurants";
import { FaSearch } from "react-icons/fa";
import useOnline from "../utils/useOnline";
import Carousel from "./Carousel";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bestOffer, allRestaurants, filterdRestaurants, setFilterdRestaurants] =
    useRestaurants([]);

  if (!allRestaurants) return null;

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
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilterdRestaurants(data);
          }}
        >
          <FaSearch />
        </button>
      </div>
      <Carousel bestOffer={bestOffer} />
      {filterdRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {filterdRestaurants.map((restaurant) => (
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
